'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { emptyApplication } from '@/components/forms/shared/application';
import { ApplicationForm, useApplicationForm } from '@/components/forms/shared/ApplicationForm';
import { SubmissionPanel } from '@/components/forms/shared/SubmissionPanel';
import { SubmissionStatus } from '@/components/forms/shared/SubmissionStatus';
import { useRecoverableSubmit } from '@/components/forms/shared/useRecoverableSubmit';
import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';
import { useActiveElement } from '@/components/keyboard/shared/useActiveElement';

const content = {
  ko: {
    practice: '실습',
    instructions:
      'A를 보내고 이메일을 바꿔 B를 보낸 뒤, 가상 서버에서 A에 서비스 오류를 먼저, B에 접수를 나중에 응답하세요. 그다음 필드 오류 · 다시 시도 · 거듭 보내기 · 재설정도 해 봅니다.',
    reset: '재설정',
    observed: '페이지가 읽은 DOM과 상태',
    active: '현재 제출 (페이지 상태)',
    values: '폼에 남아 있는 값',
    status: 'role="status"의 글자',
    busy: '결과 영역의 aria-busy',
    focus: 'document.activeElement',
    none: '없음',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Send A, change the email and send B, then on the simulated server respond to A with a service error first and to B with accepted later. Then also try a field error, retry, repeated sending, and reset.',
    reset: 'Reset',
    observed: 'DOM and state the page read',
    active: 'Current submission (page state)',
    values: 'Values remaining in the form',
    status: 'Text of role="status"',
    busy: 'aria-busy of the result area',
    focus: 'document.activeElement',
    none: 'None',
  },
};

/** 실제 폼 · 오류 요약 · 알림에 가상 서버의 응답 종류와 순서를 사람이 정해 넣고, 사용자가 읽는 DOM을 그대로 읽는다. */
export const ServerErrorDemo = () => {
  const c = useLang(content);
  const form = useApplicationForm();
  const flow = useRecoverableSubmit(form);
  const [active] = useActiveElement();
  const box = useRef<HTMLDivElement>(null);
  const [read, setRead] = useState({ values: '', status: '', busy: '' });

  useEffect(() => {
    const el = box.current;
    if (!el) return;
    setRead({
      values: [...el.querySelectorAll('input')].map((input) => input.value || '—').join(' · '),
      status: el.querySelector('[role="status"]')?.textContent ?? '',
      busy: el.querySelector('section[aria-busy]')?.getAttribute('aria-busy') ?? '',
    });
  }, [flow.state, flow.requests, form.values, form.errors]);

  const reset = () => {
    flow.reset();
    form.setValues(emptyApplication);
    form.setErrors([]);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div ref={box} className="flex flex-col gap-md">
        <ApplicationForm form={form} onSubmit={flow.submit}>
          <Button type="button" variant="text" size="sm" onClick={reset}>
            {c.reset}
          </Button>
        </ApplicationForm>
        <SubmissionStatus flow={flow} />
      </div>
      <SubmissionPanel requests={flow.requests} onRespond={flow.respond} />
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, flow.state.activeId ? `#${flow.state.activeId}` : c.none],
          [c.values, read.values],
          [c.status, read.status || c.none],
          [c.busy, <code key="b">{read.busy}</code>],
          [c.focus, <code key="f">{active}</code>],
        ]}
      />
    </PracticeFrame>
  );
};
