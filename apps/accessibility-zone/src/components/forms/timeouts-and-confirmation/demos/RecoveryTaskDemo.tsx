'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import {
  type Application,
  emptyApplication,
  fieldNames,
  fieldText,
} from '@/components/forms/shared/application';
import { ApplicationForm, useApplicationForm } from '@/components/forms/shared/ApplicationForm';
import { SubmissionPanel } from '@/components/forms/shared/SubmissionPanel';
import type { ResponseKind } from '@/components/forms/shared/submissions';
import { SubmissionStatus } from '@/components/forms/shared/SubmissionStatus';
import { useRecoverableSubmit } from '@/components/forms/shared/useRecoverableSubmit';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

type View = 'form' | 'review' | 'complete';
type Session = 'active' | 'warning' | 'expired';

const content = {
  ko: {
    practice: '실습',
    instructions:
      '위 순서대로 두 오류 → 수정 → 서버 실패 → 다시 시도와 응답 역전 → 만료와 재인증 → 정정 → 확정을 지나세요. 아무것도 전송 · 저장하지 않습니다.',
    sessionTitle: '세션 (교육용 모형)',
    sessionStates: { active: '사용 중', warning: '만료 예정', expired: '만료됨' },
    start: '만료 상황 시작',
    warningTitle: '세션이 곧 만료됩니다',
    warningText: '연장하지 않으면 다시 인증해야 합니다. 입력한 내용은 그대로 둡니다.',
    extend: '세션 연장',
    expire: '연장하지 않고 만료',
    expiredTitle: '세션이 만료되었습니다',
    expiredText: '입력한 초안은 남아 있습니다. 재인증하면 하던 화면으로 돌아갑니다.',
    reauth: '재인증 (모형)',
    cancel: '취소',
    views: { form: '신청서 작성', review: '접수된 내용 검토', complete: '신청 확정 완료' },
    reviewText: '확정하기 전에 내용을 확인하세요. 고칠 값이 있으면 수정으로 신청서에 돌아갑니다.',
    edit: (label: string) => `${label} 수정`,
    confirm: '신청 확정',
    completeText: '신청을 한 번 확정했습니다. 실제로 전송하거나 저장한 것은 없습니다.',
    reset: '과업 재설정',
    notices: {
      extended: '세션을 연장했습니다.',
      reauthenticated: '재인증했습니다. 하던 화면으로 돌아왔습니다.',
      canceled: '재인증을 취소했습니다. 초안은 남아 있고 확정되지 않았습니다.',
      blocked: '세션이 만료되어 보내거나 확정할 수 없습니다. 재인증하세요.',
      confirmed: '신청을 확정했습니다.',
    },
    observed: '페이지가 읽은 DOM과 상태',
    session: '세션 (페이지 상태)',
    view: '현재 화면',
    active: '현재 제출',
    draft: '기억하는 초안 값',
    counts: '접수 · 확정 횟수',
    countsValue: (accepted: number, confirmed: number) =>
      `접수 ${accepted}회 · 확정 ${confirmed}회`,
    status: 'role="status"의 글자',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Follow the order above: two errors → fix → server failure → retry and response reversal → expiry and re-authentication → correction → confirm. Nothing is sent or stored.',
    sessionTitle: 'Session (teaching model)',
    sessionStates: { active: 'in use', warning: 'about to expire', expired: 'expired' },
    start: 'Start an expiry',
    warningTitle: 'Your session is about to expire',
    warningText: 'Without extending you will need to authenticate again. Your input is kept.',
    extend: 'Extend the session',
    expire: 'Let it expire',
    expiredTitle: 'Your session has expired',
    expiredText:
      'Your draft is still here. Re-authenticating returns you to the screen you were on.',
    reauth: 'Re-authenticate (model)',
    cancel: 'Cancel',
    views: {
      form: 'Filling in the application',
      review: 'Reviewing the accepted content',
      complete: 'Application confirmed',
    },
    reviewText:
      'Check the content before confirming. To change a value, use edit to return to the form.',
    edit: (label: string) => `Edit ${label}`,
    confirm: 'Confirm application',
    completeText: 'The application was confirmed once. Nothing was actually sent or stored.',
    reset: 'Reset the task',
    notices: {
      extended: 'The session was extended.',
      reauthenticated: 'Re-authenticated. You are back on the screen you were on.',
      canceled: 'Re-authentication was canceled. The draft is kept and nothing was confirmed.',
      blocked: 'The session has expired, so nothing can be sent or confirmed. Re-authenticate.',
      confirmed: 'The application was confirmed.',
    },
    observed: 'DOM and state the page read',
    session: 'Session (page state)',
    view: 'Current screen',
    active: 'Current submission',
    draft: 'Remembered draft values',
    counts: 'Accepted and confirmed counts',
    countsValue: (accepted: number, confirmed: number) =>
      `accepted ${accepted} · confirmed ${confirmed}`,
    status: 'Text of role="status"',
    focus: 'document.activeElement',
    none: 'None',
  },
};

const panelClass = 'flex flex-col gap-sm rounded-sm border border-stroke-light p-md text-xsm';
const headingClass = 'font-semiBold text-text-default';

/**
 * 최종 과업의 신청 복구 흐름. 신청서 · 가상 서버 · 세션 모형 · 검토 화면을 하나로 잇는다.
 * 만료된 동안에는 작업 영역을 inert로 두어 보내기와 확정만 멈추고, 초안은 어느 조작에서도 지우지 않는다.
 * 확정은 한 번만 반영한다.
 */
export const RecoveryTaskDemo = () => {
  const c = useLang(content);
  const { locale } = useLocale();
  const form = useApplicationForm();
  const flow = useRecoverableSubmit(form);
  const [active] = useActiveElement();
  const status = useRef<HTMLDivElement>(null);
  const [view, setView] = useState<View>('form');
  const [session, setSession] = useState<Session>('active');
  const [confirmed, setConfirmed] = useState(0);
  const [notice, setNotice] = useState('');
  const [statusText, setStatusText] = useState('');
  const text = fieldText[locale];
  const expired = session === 'expired';

  useEffect(() => {
    setStatusText(status.current?.querySelector('[role="status"]')?.textContent ?? '');
  }, [flow.state, notice]);

  const show = (next: View) => {
    setView(next);
    form.moveFocus('view');
  };

  const submit = (values: Application) => {
    if (expired) return setNotice(c.notices.blocked);
    setNotice('');
    flow.submit(values);
  };

  const retry = () => {
    if (expired) return setNotice(c.notices.blocked);
    setNotice('');
    flow.retry();
  };

  const respond = (id: number, kind: ResponseKind) => {
    const applied = flow.respond(id, kind);
    if (!applied) return;
    setNotice('');
    if (kind === 'accepted') show('review');
  };

  const edit = (field: string) => {
    setView('form');
    form.moveFocus(field);
  };

  const confirm = () => {
    if (expired) return setNotice(c.notices.blocked);
    if (confirmed > 0) return;
    setConfirmed(1);
    setNotice(c.notices.confirmed);
    show('complete');
  };

  const changeSession = (next: Session, focusKey: string, message = '') => {
    setSession(next);
    setNotice(message);
    form.moveFocus(focusKey);
  };

  const reset = () => {
    flow.reset();
    form.setValues(emptyApplication);
    form.setErrors([]);
    setSession('active');
    setConfirmed(0);
    setNotice('');
    show('form');
  };

  const accepted = flow.state.result;

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className={panelClass}>
        <p className={headingClass}>
          {c.sessionTitle}: {c.sessionStates[session]}
        </p>
        {session === 'active' && (
          <div>
            <Button
              id={`${form.id}-session-start`}
              type="button"
              variant="outlined"
              size="sm"
              onClick={() => changeSession('warning', 'session')}
            >
              {c.start}
            </Button>
          </div>
        )}
        {session !== 'active' && (
          <>
            <h3 id={`${form.id}-session`} tabIndex={-1} className={headingClass}>
              {expired ? c.expiredTitle : c.warningTitle}
            </h3>
            <p>{expired ? c.expiredText : c.warningText}</p>
            <div className="flex flex-wrap gap-sm">
              {expired ? (
                <>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => changeSession('active', 'view', c.notices.reauthenticated)}
                  >
                    {c.reauth}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    size="sm"
                    onClick={() => setNotice(c.notices.canceled)}
                  >
                    {c.cancel}
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    type="button"
                    size="sm"
                    onClick={() => changeSession('active', 'session-start', c.notices.extended)}
                  >
                    {c.extend}
                  </Button>
                  <Button
                    type="button"
                    variant="outlined"
                    size="sm"
                    onClick={() => changeSession('expired', 'session')}
                  >
                    {c.expire}
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div inert={expired} className="flex flex-col gap-md">
        <h3 id={`${form.id}-view`} tabIndex={-1} className={`text-xsm ${headingClass}`}>
          {c.views[view]}
        </h3>
        {view === 'form' && <ApplicationForm form={form} onSubmit={submit} />}
        {view === 'review' && accepted && (
          <div className="flex flex-col gap-md text-xsm">
            <p>{c.reviewText}</p>
            <dl className="grid items-center gap-x-lg gap-y-xs sm:grid-cols-[8rem_1fr_auto]">
              {fieldNames.map((field) => (
                <div key={field} className="contents">
                  <dt className="text-text-light">{text[field].label}</dt>
                  <dd className="break-all">{accepted[field]}</dd>
                  <dd>
                    <Button type="button" variant="text" size="sm" onClick={() => edit(field)}>
                      {c.edit(text[field].label)}
                    </Button>
                  </dd>
                </div>
              ))}
            </dl>
            <div>
              <Button type="button" size="sm" onClick={confirm}>
                {c.confirm}
              </Button>
            </div>
          </div>
        )}
        {view === 'complete' && <p className="text-xsm">{c.completeText}</p>}
      </div>

      <div ref={status}>
        <SubmissionStatus flow={{ state: flow.state, busy: flow.busy, retry }} notice={notice} />
      </div>
      <SubmissionPanel requests={flow.requests} onRespond={respond} />
      <div>
        <Button type="button" variant="text" size="sm" onClick={reset}>
          {c.reset}
        </Button>
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.session, c.sessionStates[session]],
          [c.view, c.views[view]],
          [c.active, flow.state.activeId ? `#${flow.state.activeId}` : c.none],
          [c.draft, fieldNames.map((field) => form.values[field] || '—').join(' · ')],
          [c.counts, c.countsValue(flow.state.accepted, confirmed)],
          [c.status, statusText || c.none],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
