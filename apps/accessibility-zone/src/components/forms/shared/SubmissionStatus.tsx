'use client';

import { useId } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { fieldNames, fieldText } from './application';
import { submitMessage } from './submissions';
import type { useRecoverableSubmit } from './useRecoverableSubmit';

const content = {
  ko: {
    progress: '보내는 중',
    retry: '다시 시도',
    result: '접수 결과',
    none: '아직 접수된 신청이 없습니다.',
    accepted: (n: number) => `접수 ${n}회`,
  },
  en: {
    progress: 'Sending',
    retry: 'Try again',
    result: 'Accepted result',
    none: 'No application accepted yet.',
    accepted: (n: number) => `Accepted ${n} times`,
  },
};

/**
 * 제출의 상태 메시지와 접수 결과. 상태 메시지는 처음부터 마운트된 status 하나이고,
 * 결과 영역은 보내는 동안만 aria-busy다. 접수된 값은 현재 제출의 응답으로만 바뀐다.
 */
export const SubmissionStatus = ({
  flow,
  notice = '',
}: {
  flow: Pick<ReturnType<typeof useRecoverableSubmit>, 'state' | 'busy' | 'retry'>;
  /** 제출 밖의 사건(세션 · 확정)을 같은 status로 알릴 때의 문구. 있으면 제출 문구 대신 쓴다. */
  notice?: string;
}) => {
  const c = useLang(content);
  const { locale } = useLocale();
  const headingId = useId();
  const { state } = flow;
  const accepted = state.result;

  return (
    <div className="flex flex-col gap-sm text-xsm">
      <div className="flex flex-wrap items-center gap-sm">
        {flow.busy && <progress aria-label={c.progress} className="w-24" />}
        <p role="status">
          <span key={`${state.seq}-${notice}`}>{notice || submitMessage(locale, state.phase)}</span>
        </p>
        {state.phase === 'service-error' && (
          <Button type="button" variant="outlined" size="sm" onClick={flow.retry}>
            {c.retry}
          </Button>
        )}
      </div>
      <section
        aria-labelledby={headingId}
        aria-busy={flow.busy}
        className="flex flex-col gap-xs rounded-sm border border-stroke-light p-md"
      >
        <h3 id={headingId} className="font-semiBold text-text-default">
          {c.result} · {c.accepted(state.accepted)}
        </h3>
        {accepted ? (
          <dl className="grid gap-x-lg gap-y-2xs sm:grid-cols-[8rem_1fr]">
            {fieldNames.map((field) => (
              <div key={field} className="contents">
                <dt className="text-text-light">{fieldText[locale][field].label}</dt>
                <dd className="break-all">{accepted[field]}</dd>
              </div>
            ))}
          </dl>
        ) : (
          <p className="text-text-light">{c.none}</p>
        )}
      </section>
    </div>
  );
};
