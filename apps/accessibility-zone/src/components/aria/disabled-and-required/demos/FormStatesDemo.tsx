'use client';

import { useId, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { cx } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

type By = 'submit' | 'draft';
type Result =
  | { outcome: 'blocked'; by: By; invalid: string[] }
  | { outcome: 'sent'; by: By; data: [string, string][] };

const content = {
  ko: {
    practice: '실습',
    instructions:
      'Tab으로 칸과 버튼을 차례로 지나가며 어디에 포커스가 머무는지 보세요. 그다음 "받는 분"을 비운 채 두 제출 버튼을 각각 눌러 보고, 이름을 적은 뒤 다시 눌러 제출 데이터를 확인합니다. 마지막으로 확인 체크 전후에 확인하는 삭제 버튼을 눌러 봅니다.',
    stage: '예제 폼 (교육 예시 · 실제로 보내지 않음)',
    order: '주문 번호 (readonly)',
    coupon: '쿠폰 코드 (disabled)',
    recipient: '받는 분 (필수 · required)',
    memo: '요청 사항 (aria-required만)',
    submit: '주문하기',
    draft: '임시 저장 (aria-disabled만 · 의도한 결함)',
    confirm: '삭제할 주문을 확인했습니다',
    nativeDelete: '삭제 (disabled)',
    guardedDelete: '삭제 (aria-disabled + 실행 경로 확인)',
    resultHeading: '마지막 제출 시도',
    by: {
      submit: '주문하기 버튼 (입력 칸에서 누른 Enter도 브라우저가 이 버튼을 누른 것으로 처리)',
      draft: '임시 저장 버튼',
    },
    blocked: (by: string, names: string) =>
      `${by} → 기본 유효성 검사에서 막힘 (비어 있는 필수 칸: ${names})`,
    sent: (by: string) => `${by} → 제출 이벤트 발생. 아래는 브라우저가 만든 제출 데이터입니다`,
    noData: '(없음)',
    deleteHeading: '삭제 버튼 (aria-disabled + 확인)',
    clicks: 'click 이벤트 도달',
    runs: '실제 삭제 실행',
    times: (n: number) => `${n}회`,
    nativeNote: 'disabled 버튼에는 click 이벤트가 전달되지 않아 셀 수 없습니다.',
    expectSummary: '관찰한 뒤 열어 보기 — 보조기술에 전해질 것으로 기대하는 상태',
    expect: [
      '주문 번호: 읽기 전용',
      '쿠폰 코드: 사용할 수 없음 (포커스가 닿지 않아 Tab으로는 만나지 않을 수 있음)',
      '받는 분 · 요청 사항: 필수',
      '임시 저장 버튼, 확인 전의 확인하는 삭제 버튼: 사용할 수 없음',
    ],
    expectNote:
      '명세가 기대하는 노출입니다. 실제 낱말과 순서는 보조기술 · 브라우저 조합마다 달라 직접 들어 봐야 말할 수 있습니다.',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Tab through the fields and buttons and watch where focus stops. Then leave "Recipient" empty and press each submit button, and press again after entering a name to check the submitted data. Finally, press the checking Delete button before and after ticking the confirmation.',
    stage: 'Example form (teaching example; nothing is sent)',
    order: 'Order number (readonly)',
    coupon: 'Coupon code (disabled)',
    recipient: 'Recipient (required)',
    memo: 'Delivery note (aria-required only)',
    submit: 'Place order',
    draft: 'Save draft (aria-disabled only; intentional defect)',
    confirm: 'I have checked the order to delete',
    nativeDelete: 'Delete (disabled)',
    guardedDelete: 'Delete (aria-disabled + execution check)',
    resultHeading: 'Last submission attempt',
    by: {
      submit:
        'Place order button (Enter in a field is also handled by the browser as pressing this button)',
      draft: 'Save draft button',
    },
    blocked: (by: string, names: string) =>
      `${by} → blocked by built-in validation (empty required fields: ${names})`,
    sent: (by: string) => `${by} → submit event fired. Below is the data the browser built`,
    noData: '(none)',
    deleteHeading: 'Delete button (aria-disabled + check)',
    clicks: 'Click events reached',
    runs: 'Deletes actually run',
    times: (n: number) => `${n}`,
    nativeNote:
      'Click events are not dispatched to the disabled button, so they cannot be counted.',
    expectSummary: 'Open after observing — the states expected to reach assistive technology',
    expect: [
      'Order number: read-only',
      'Coupon code: unavailable (focus does not reach it, so Tab may not meet it)',
      'Recipient and Delivery note: required',
      'Save draft, and the checking Delete button before confirming: unavailable',
    ],
    expectNote:
      'This is the exposure the specs expect. Actual words and order differ by assistive technology and browser, and can only be stated after listening.',
  },
};

const fieldClass =
  'w-full rounded-sm border border-stroke-light bg-background-surface px-md py-sm text-xsm';

const buttonClass =
  'rounded-sm bg-primaryBtn-default px-lg py-xs text-xsm font-semiBold text-text-contrastText';

/** 비활성 모양. 의미(disabled · aria-disabled)를 정하는 같은 값에서 함께 만든다. */
const looksOf = (unavailable: boolean) =>
  cx(buttonClass, unavailable ? 'cursor-not-allowed opacity-60' : 'hover:bg-primaryBtn-hover');

/**
 * 한 폼에서 disabled · readonly · required · aria-disabled · aria-required가 포커스 · 제출 데이터 · 기본 유효성 검사를
 * 어떻게 바꾸는지 실제 이벤트와 FormData로 기록한다. 제출은 막고(preventDefault) 페이지를 떠나지 않는다.
 */
export const FormStatesDemo = () => {
  const c = useLang(content);
  const { locale: lang } = useLocale();
  const id = useId();
  const draftRef = useRef<HTMLButtonElement>(null);
  const attempt = useRef<{ by: By; invalid: string[] } | null>(null);
  const [result, setResult] = useState<Result | null>(null);
  const [deleteCounts, setDeleteCounts] = useState({ clicks: 0, runs: 0 });
  const [confirmed, setConfirmed] = useState(false);
  /** 확인하는 삭제 버튼의 상태. 화면 모양 · aria-disabled · 실행 확인이 모두 이 값에서 나온다. */
  const deleteUnavailable = !confirmed;

  /** 제출 버튼을 누른 뒤 submit이 일어나지 않았으면 검사에서 막힌 것이다. */
  const settle = () =>
    setTimeout(() => {
      const a = attempt.current;
      attempt.current = null;
      if (a && a.invalid.length > 0)
        setResult({ outcome: 'blocked', by: a.by, invalid: a.invalid });
    }, 0);

  const startAttempt = (by: By) => {
    attempt.current = { by, invalid: [] };
    settle();
  };

  const onInvalid = (e: React.FormEvent<HTMLFormElement>) => {
    if (!attempt.current) startAttempt('submit');
    const field = e.target as HTMLInputElement;
    attempt.current?.invalid.push(field.labels?.[0]?.textContent ?? field.name);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submitter = (e.nativeEvent as SubmitEvent).submitter;
    const by: By = attempt.current?.by ?? (submitter === draftRef.current ? 'draft' : 'submit');
    attempt.current = null;
    const data = [...new FormData(e.currentTarget)].map(
      ([key, value]) => [key, String(value)] as [string, string],
    );
    setResult({ outcome: 'sent', by, data });
  };

  const onGuardedDelete = () => {
    setDeleteCounts((prev) => ({ ...prev, clicks: prev.clicks + 1 }));
    if (deleteUnavailable) return;
    setDeleteCounts((prev) => ({ ...prev, runs: prev.runs + 1 }));
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="rounded-sm border border-stroke-light p-md">
        <p className="mb-md text-xxsm font-semiBold text-text-light">{c.stage}</p>
        <form onSubmit={onSubmit} onInvalidCapture={onInvalid} className="flex flex-col gap-md">
          <div className="flex flex-col gap-xs text-xsm">
            <label htmlFor={`${id}-order`}>{c.order}</label>
            <input
              id={`${id}-order`}
              name="order"
              defaultValue="A-1024"
              readOnly
              className={fieldClass}
            />
          </div>
          <div className="flex flex-col gap-xs text-xsm">
            <label htmlFor={`${id}-coupon`}>{c.coupon}</label>
            <input
              id={`${id}-coupon`}
              name="coupon"
              defaultValue="WELCOME"
              disabled
              className={cx(fieldClass, 'opacity-60')}
            />
          </div>
          <div className="flex flex-col gap-xs text-xsm">
            <label htmlFor={`${id}-recipient`}>{c.recipient}</label>
            <input id={`${id}-recipient`} name="recipient" required className={fieldClass} />
          </div>
          <div className="flex flex-col gap-xs text-xsm">
            <label htmlFor={`${id}-memo`}>{c.memo}</label>
            <input id={`${id}-memo`} name="memo" aria-required="true" className={fieldClass} />
          </div>
          <div className="flex flex-wrap gap-sm">
            <button type="submit" onClick={() => startAttempt('submit')} className={looksOf(false)}>
              {c.submit}
            </button>
            <button
              ref={draftRef}
              type="submit"
              aria-disabled="true"
              onClick={() => startAttempt('draft')}
              className={looksOf(true)}
            >
              {c.draft}
            </button>
          </div>
          <label className="flex items-center gap-sm text-xsm">
            <input
              type="checkbox"
              checked={confirmed}
              onChange={(e) => setConfirmed(e.target.checked)}
            />
            {c.confirm}
          </label>
          <div className="flex flex-wrap gap-sm">
            <button type="button" disabled className={looksOf(true)}>
              {c.nativeDelete}
            </button>
            <button
              type="button"
              aria-disabled={deleteUnavailable}
              onClick={onGuardedDelete}
              className={looksOf(deleteUnavailable)}
            >
              {c.guardedDelete}
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.resultHeading} <SourceTag locale={lang} id="dom" />
        </p>
        <div role="status">
          {result?.outcome === 'blocked' && (
            <p>{c.blocked(c.by[result.by], result.invalid.join(', '))}</p>
          )}
          {result?.outcome === 'sent' && (
            <>
              <p>{c.sent(c.by[result.by])}</p>
              <dl className="mt-sm grid gap-x-lg gap-y-2xs sm:grid-cols-[8rem_1fr]">
                {result.data.map(([key, value]) => (
                  <div key={key} className="contents">
                    <dt className="font-mono text-text-primary">{key}</dt>
                    <dd className="break-words text-text-light">{value || c.noData}</dd>
                  </div>
                ))}
              </dl>
            </>
          )}
        </div>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-sm flex flex-wrap items-center gap-sm font-semiBold text-text-default">
          {c.deleteHeading} <SourceTag locale={lang} id="dom" />
        </p>
        <dl className="grid gap-x-lg gap-y-2xs sm:grid-cols-[10rem_1fr]">
          <dt className="text-text-light">{c.clicks}</dt>
          <dd>{c.times(deleteCounts.clicks)}</dd>
          <dt className="text-text-light">{c.runs}</dt>
          <dd>{c.times(deleteCounts.runs)}</dd>
        </dl>
        <p className="mt-sm text-xxsm text-text-light">{c.nativeNote}</p>
      </div>

      <details className="rounded-sm border border-stroke-light p-md text-xsm">
        <summary className="cursor-pointer font-semiBold text-text-default">
          {c.expectSummary}
        </summary>
        <p className="mt-sm">
          <SourceTag locale={lang} id="model" />
        </p>
        <ul className="mt-sm flex list-disc flex-col gap-2xs pl-xl">
          {c.expect.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
        <p className="mt-sm text-xxsm text-text-light">{c.expectNote}</p>
      </details>
    </PracticeFrame>
  );
};
