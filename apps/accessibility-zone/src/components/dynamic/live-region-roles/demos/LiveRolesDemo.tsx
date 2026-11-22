'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

const LOG_LIMIT = 4;

const content = {
  ko: {
    practice: '실습',
    instructions:
      '세 버튼을 눌러 각 영역을 갱신하고, 페이지가 읽은 DOM 값을 비교하세요. 영역은 모두 처음부터 마운트되어 있습니다.',
    save: '결과 저장',
    saved: (n: number) => `저장했습니다 (${n}번째)`,
    addLog: '기록 추가',
    entry: (n: number) => `${n}번째 작업: 3회차 좌석 확인`,
    fail: '연결 끊김으로 저장 시도',
    failed: '저장하지 못했습니다. 연결을 확인한 뒤 다시 저장하세요.',
    labels: { status: 'status 영역', log: 'log 영역 (작업 기록)', alert: 'alert 영역' },
    observed: '페이지가 읽은 세 영역',
    row: (role: string) => `role="${role}"`,
    describe: (live: string, count: number, text: string) =>
      `aria-live 속성: ${live || '없음 (역할의 암시적 값)'} · 자식 ${count}개 · “${text}”`,
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Press the three buttons to update each region, and compare the DOM values the page read. All regions are mounted from the start.',
    save: 'Save result',
    saved: (n: number) => `Saved (${n})`,
    addLog: 'Add log entry',
    entry: (n: number) => `Task ${n}: checked Session 3 seats`,
    fail: 'Try saving with the connection lost',
    failed: 'Could not save. Check the connection and save again.',
    labels: { status: 'status region', log: 'log region (activity log)', alert: 'alert region' },
    observed: 'The three regions the page read',
    row: (role: string) => `role="${role}"`,
    describe: (live: string, count: number, text: string) =>
      `aria-live attribute: ${live || 'none (implicit value of the role)'} · ${count} children · “${text}”`,
  },
};

type Read = Record<'status' | 'log' | 'alert', string>;

/** 미리 마운트한 status · log · alert 영역을 사용자 조작으로만 갱신하고, 실제 DOM 값을 읽는다. */
export const LiveRolesDemo = () => {
  const c = useLang(content);
  const [saves, setSaves] = useState(0);
  const [entries, setEntries] = useState<number[]>([]);
  const [failed, setFailed] = useState(false);
  const regions = useRef<Record<keyof Read, HTMLElement | null>>({
    status: null,
    log: null,
    alert: null,
  });
  const [read, setRead] = useState<Read>({ status: '', log: '', alert: '' });

  useEffect(() => {
    const describe = (el: HTMLElement | null) =>
      el
        ? c.describe(el.getAttribute('aria-live') ?? '', el.children.length, el.textContent ?? '')
        : '';
    setRead({
      status: describe(regions.current.status),
      log: describe(regions.current.log),
      alert: describe(regions.current.alert),
    });
  }, [saves, entries, failed, c]);

  const addEntry = () => setEntries((prev) => [...prev, (prev.at(-1) ?? 0) + 1].slice(-LOG_LIMIT));

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap gap-sm">
        <Button type="button" variant="outlined" size="sm" onClick={() => setSaves((n) => n + 1)}>
          {c.save}
        </Button>
        <Button type="button" variant="outlined" size="sm" onClick={addEntry}>
          {c.addLog}
        </Button>
        <Button type="button" variant="outlined" size="sm" onClick={() => setFailed(true)}>
          {c.fail}
        </Button>
      </div>
      <div className="grid gap-md text-xsm sm:grid-cols-3">
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-xs font-semiBold text-text-default">{c.labels.status}</p>
          <p
            role="status"
            ref={(el) => {
              regions.current.status = el;
            }}
          >
            {saves > 0 && <span key={saves}>{c.saved(saves)}</span>}
          </p>
        </div>
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-xs font-semiBold text-text-default">{c.labels.log}</p>
          <ol
            role="log"
            aria-label={c.labels.log}
            ref={(el) => {
              regions.current.log = el;
            }}
            className="list-decimal pl-lg"
          >
            {entries.map((n) => (
              <li key={n}>{c.entry(n)}</li>
            ))}
          </ol>
        </div>
        <div className="rounded-sm border border-stroke-light p-md">
          <p className="mb-xs font-semiBold text-text-default">{c.labels.alert}</p>
          <p
            role="alert"
            ref={(el) => {
              regions.current.alert = el;
            }}
            className="text-text-error"
          >
            {failed && c.failed}
          </p>
        </div>
      </div>
      <ObservedPanel
        title={c.observed}
        rows={[
          [c.row('status'), read.status],
          [c.row('log'), read.log],
          [c.row('alert'), read.alert],
        ]}
      />
    </PracticeFrame>
  );
};
