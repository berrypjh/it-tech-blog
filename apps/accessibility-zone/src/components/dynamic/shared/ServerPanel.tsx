'use client';

import { useLocale } from '@it-tech-blog/preferences';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { SourceTag } from '@/components/shared/SourceTag';

import type { useSimulatedSearch } from './useSimulatedSearch';

const content = {
  ko: {
    title: '가상 서버 — 응답 순서만 시뮬레이션',
    empty: '보낸 요청이 없습니다.',
    request: (id: number, q: string) => `요청 #${id} “${q}”`,
    aborted: '중단 신호 받음',
    open: '중단 신호 없음',
    responses: (n: number) => `응답 ${n}회`,
    success: (id: number) => `#${id} 결과 응답`,
    failure: (id: number) => `#${id} 오류 응답`,
  },
  en: {
    title: 'Simulated server — only the response order is simulated',
    empty: 'No requests sent.',
    request: (id: number, q: string) => `Request #${id} “${q}”`,
    aborted: 'abort signal received',
    open: 'no abort signal',
    responses: (n: number) => `${n} responses`,
    success: (id: number) => `#${id} respond with results`,
    failure: (id: number) => `#${id} respond with error`,
  },
};

/** 보낸 요청마다 응답을 사람이 보낸다. 중단 신호를 받은 요청에도 서버는 늦게 응답할 수 있다. */
export const ServerPanel = ({ sim }: { sim: ReturnType<typeof useSimulatedSearch> }) => {
  const c = useLang(content);
  const { locale } = useLocale();

  return (
    <div className="flex flex-col gap-sm rounded-sm border border-dashed border-stroke-default p-md text-xsm">
      <p className="flex flex-wrap items-center gap-sm font-semiBold text-text-default">
        {c.title} <SourceTag locale={locale} id="model" />
      </p>
      {sim.requests.length === 0 ? (
        <p className="text-text-light">{c.empty}</p>
      ) : (
        <ul className="flex flex-col gap-sm">
          {sim.requests.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center gap-sm">
              <span>
                {c.request(r.id, r.query)} · {r.controller.signal.aborted ? c.aborted : c.open} ·{' '}
                {c.responses(r.responses)}
              </span>
              <Button
                type="button"
                variant="outlined"
                size="sm"
                onClick={() => sim.respond(r.id, 'success')}
              >
                {c.success(r.id)}
              </Button>
              <Button
                type="button"
                variant="text"
                size="sm"
                onClick={() => sim.respond(r.id, 'failure')}
              >
                {c.failure(r.id)}
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
