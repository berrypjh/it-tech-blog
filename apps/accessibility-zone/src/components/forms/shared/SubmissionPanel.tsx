'use client';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

import type { ResponseKind } from './submissions';
import type { Submission } from './useSubmissions';

const content = {
  ko: {
    title: '가상 서버 — 응답 순서와 종류만 시뮬레이션',
    empty: '보낸 제출이 없습니다.',
    request: (r: Submission) =>
      `제출 #${r.id} · ${r.values.name} · ${r.values.email} · ${r.values.seats}명`,
    aborted: '중단 신호 받음',
    open: '중단 신호 없음',
    responses: (n: number) => `응답 ${n}회`,
    kinds: {
      accepted: (id: number) => `#${id} 접수 응답`,
      'field-error': (id: number) => `#${id} 필드 오류 응답`,
      'service-error': (id: number) => `#${id} 서비스 오류 응답`,
    },
  },
  en: {
    title: 'Simulated server — only the order and kind of responses are simulated',
    empty: 'No submissions sent.',
    request: (r: Submission) =>
      `Submission #${r.id} · ${r.values.name} · ${r.values.email} · ${r.values.seats} people`,
    aborted: 'abort signal received',
    open: 'no abort signal',
    responses: (n: number) => `${n} responses`,
    kinds: {
      accepted: (id: number) => `#${id} respond accepted`,
      'field-error': (id: number) => `#${id} respond with field error`,
      'service-error': (id: number) => `#${id} respond with service error`,
    },
  },
};

const kinds: ResponseKind[] = ['accepted', 'field-error', 'service-error'];

/** 보낸 제출마다 응답의 종류와 순서를 사람이 정한다. 중단 신호를 받은 제출에도 서버는 늦게 응답할 수 있다. */
export const SubmissionPanel = ({
  requests,
  onRespond,
}: {
  requests: Submission[];
  onRespond: (id: number, kind: ResponseKind) => void;
}) => {
  const c = useLang(content);
  const { locale } = useLocale();

  return (
    <div className="flex flex-col gap-sm rounded-sm border border-dashed border-stroke-default p-md text-xsm">
      <p className="flex flex-wrap items-center gap-sm font-semiBold text-text-default">
        {c.title} <SourceTag locale={locale} id="model" />
      </p>
      {requests.length === 0 ? (
        <p className="text-text-light">{c.empty}</p>
      ) : (
        <ul className="flex flex-col gap-sm">
          {requests.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center gap-sm">
              <span className="break-all">
                {c.request(r)} · {r.controller.signal.aborted ? c.aborted : c.open} ·{' '}
                {c.responses(r.responses)}
              </span>
              {kinds.map((kind) => (
                <Button
                  key={kind}
                  type="button"
                  variant={kind === 'accepted' ? 'outlined' : 'text'}
                  size="sm"
                  onClick={() => onRespond(r.id, kind)}
                >
                  {c.kinds[kind](r.id)}
                </Button>
              ))}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
