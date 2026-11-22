'use client';

import { useEffect, useRef, useState } from 'react';

import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button, Radio, RadioGroup } from '@berrypjh/react-ui';

import { ObservedPanel } from '@/components/keyboard/shared/ObservedPanel';

type Row = { id: number; seats: number };
type Relevant = 'additions text' | 'all';
type Change = { kinds: string[]; text: string };

const initialRows: Row[] = [
  { id: 1, seats: 12 },
  { id: 2, seats: 8 },
  { id: 3, seats: 5 },
];

/** 묶음 갱신에서 차례로 적용하는 세 변경(교육 예시). */
const batchSteps = (rows: Row[]): Row[][] => [
  rows.map((r) => (r.id === 1 ? { ...r, seats: r.seats - 2 } : r)),
  rows.map((r) => ({ ...r, seats: r.id === 1 ? r.seats - 2 : r.id === 2 ? r.seats - 1 : r.seats })),
  rows.map((r) => ({
    ...r,
    seats: r.id === 1 ? r.seats - 2 : r.id === 2 ? r.seats - 1 : r.seats - 1,
  })),
];

const content = {
  ko: {
    practice: '실습',
    instructions:
      '설정을 바꾸고 변경 버튼을 눌러, 실제로 바뀐 DOM과 설정에 따른 읽힐 범위(교육 모델)를 비교하세요. 묶음 갱신은 완료 · 실패 · 취소 어느 쪽으로 끝내도 busy가 풀리는지 봅니다.',
    atomic: 'aria-atomic',
    relevant: 'aria-relevant',
    relevantOptions: {
      'additions text': 'additions text (기본값)',
      all: 'all (additions removals text)',
    },
    region: '좌석 현황 (합성 데이터)',
    row: (id: number, seats: number) => `${id}회차 남은 좌석 ${seats}석`,
    change: '1회차 좌석 하나 줄이기',
    add: '회차 추가',
    remove: '마지막 회차 제거',
    batchStart: '묶음 갱신 시작',
    batchNext: (n: number) => `다음 변경 적용 (${n} / 3)`,
    batchDone: '묶음 완료',
    batchFail: '묶음 실패 처리',
    batchCancel: '묶음 취소',
    waiting: '좌석 현황 갱신 중',
    done: '좌석 현황을 갱신했습니다.',
    failed: '좌석 현황을 갱신하지 못해 이전 값으로 되돌렸습니다.',
    canceled: '좌석 현황 갱신을 취소했습니다.',
    domTitle: '페이지가 읽은 DOM',
    kinds: '마지막 변화의 종류 (MutationObserver)',
    changed: '바뀐 노드의 글자',
    busy: 'aria-busy',
    modelTitle: '설정에 따른 처리 (WAI-ARIA 1.2 기준의 교육 모델)',
    relevantCheck: 'aria-relevant상 알릴 변화인가',
    scope: '보조기술에 넘길 범위',
    whileBusy: '보류 — busy가 풀린 뒤 한 번에 처리할 수 있음',
    yes: '예',
    no: '아니요 (기본값에서 제거는 알리지 않음)',
    none: '없음',
    kindNames: { text: '글자 변경', additions: '노드 추가', removals: '노드 제거' },
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Change the settings and press the change buttons, then compare the DOM that really changed with the scope each setting implies (a teaching model). For the batch update, check that busy is released whether it ends in done, failure, or cancel.',
    atomic: 'aria-atomic',
    relevant: 'aria-relevant',
    relevantOptions: {
      'additions text': 'additions text (default)',
      all: 'all (additions removals text)',
    },
    region: 'Seat status (synthetic data)',
    row: (id: number, seats: number) => `Session ${id}: ${seats} seats left`,
    change: 'One fewer seat in Session 1',
    add: 'Add a session',
    remove: 'Remove the last session',
    batchStart: 'Start batch update',
    batchNext: (n: number) => `Apply next change (${n} / 3)`,
    batchDone: 'Finish batch',
    batchFail: 'Fail the batch',
    batchCancel: 'Cancel batch',
    waiting: 'Updating seat status',
    done: 'Seat status updated.',
    failed: 'Could not update seat status; previous values restored.',
    canceled: 'Seat status update canceled.',
    domTitle: 'DOM the page read',
    kinds: 'Kind of the last change (MutationObserver)',
    changed: 'Text of the changed nodes',
    busy: 'aria-busy',
    modelTitle: 'Handling by setting (a teaching model based on WAI-ARIA 1.2)',
    relevantCheck: 'A change to report under aria-relevant',
    scope: 'What goes to assistive technology',
    whileBusy: 'Held: may be processed at once after busy is released',
    yes: 'Yes',
    no: 'No (removals are not reported by default)',
    none: 'None',
    kindNames: { text: 'text change', additions: 'node added', removals: 'node removed' },
  },
};

/**
 * 같은 합성 데이터에서 바뀐 부분과 전체 문맥, 변경 종류, 묶음 갱신 중임을 나눠 관찰한다.
 * 대기 알림은 busy 영역 밖의 status에 두고, 관찰 기록은 live 영역이 아니다. 묶음 버튼은 사라지지 않고 aria-disabled로 바뀌어 초점을 잃지 않는다.
 */
export const ScopeDemo = () => {
  const c = useLang(content);
  const [rows, setRows] = useState<Row[]>(initialRows);
  const [atomic, setAtomic] = useState(false);
  const [relevant, setRelevant] = useState<Relevant>('additions text');
  const [batch, setBatch] = useState<{ before: Row[]; step: number } | null>(null);
  const [notice, setNotice] = useState('');
  const [change, setChange] = useState<Change | null>(null);
  const region = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const el = region.current;
    if (!el) return;
    const observer = new MutationObserver((records) => {
      const kinds = new Set<string>();
      const texts: string[] = [];
      records.forEach((r) => {
        if (r.type === 'characterData') {
          kinds.add('text');
          texts.push(r.target.parentElement?.textContent ?? '');
        }
        if (r.addedNodes.length) {
          kinds.add('additions');
          r.addedNodes.forEach((n) => texts.push(n.textContent ?? ''));
        }
        if (r.removedNodes.length) {
          kinds.add('removals');
          r.removedNodes.forEach((n) => texts.push(n.textContent ?? ''));
        }
      });
      if (kinds.size) setChange({ kinds: [...kinds], text: [...new Set(texts)].join(' / ') });
    });
    observer.observe(el, { subtree: true, childList: true, characterData: true });
    return () => observer.disconnect();
  }, []);

  const startBatch = () => {
    setBatch({ before: rows, step: 0 });
    setNotice(c.waiting);
  };
  const nextStep = () => {
    if (!batch || batch.step >= 3) return;
    setRows(batchSteps(batch.before)[batch.step]);
    setBatch({ ...batch, step: batch.step + 1 });
  };
  const endBatch = (outcome: 'done' | 'failed' | 'canceled') => {
    if (!batch) return;
    if (outcome !== 'done') setRows(batch.before);
    setBatch(null);
    setNotice(c[outcome]);
  };

  const busy = batch !== null;
  const reportable = change
    ? change.kinds.some((k) => k !== 'removals' || relevant === 'all')
    : false;
  const scope = busy
    ? c.whileBusy
    : atomic
      ? rows.map((r) => c.row(r.id, r.seats)).join(' ')
      : (change?.text ?? '');

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <div className="flex flex-wrap gap-xl">
        <RadioGroup
          label={c.atomic}
          value={String(atomic)}
          onValueChange={(v) => setAtomic(v === 'true')}
          className="flex gap-md"
        >
          {['false', 'true'].map((v) => (
            <Radio key={v} value={v} className="text-xsm">
              {v}
            </Radio>
          ))}
        </RadioGroup>
        <RadioGroup
          label={c.relevant}
          value={relevant}
          onValueChange={(v) => setRelevant(v as Relevant)}
          className="flex flex-col gap-2xs"
        >
          {(Object.keys(c.relevantOptions) as Relevant[]).map((v) => (
            <Radio key={v} value={v} className="text-xsm">
              {c.relevantOptions[v]}
            </Radio>
          ))}
        </RadioGroup>
      </div>
      <div className="flex flex-wrap gap-sm">
        <Button
          type="button"
          variant="outlined"
          size="sm"
          disabled={busy}
          onClick={() =>
            setRows((prev) =>
              prev.map((r) => (r.id === 1 ? { ...r, seats: Math.max(0, r.seats - 1) } : r)),
            )
          }
        >
          {c.change}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          disabled={busy}
          onClick={() =>
            setRows((prev) => [...prev, { id: (prev.at(-1)?.id ?? 0) + 1, seats: 10 }])
          }
        >
          {c.add}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          disabled={busy || rows.length <= 1}
          onClick={() => setRows((prev) => prev.slice(0, -1))}
        >
          {c.remove}
        </Button>
      </div>
      <div className="flex flex-wrap gap-sm">
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-disabled={busy}
          onClick={() => !busy && startBatch()}
        >
          {c.batchStart}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-disabled={!batch || batch.step >= 3}
          onClick={nextStep}
        >
          {c.batchNext(batch?.step ?? 0)}
        </Button>
        <Button
          type="button"
          variant="outlined"
          size="sm"
          aria-disabled={!busy}
          onClick={() => endBatch('done')}
        >
          {c.batchDone}
        </Button>
        <Button
          type="button"
          variant="text"
          size="sm"
          aria-disabled={!busy}
          onClick={() => endBatch('failed')}
        >
          {c.batchFail}
        </Button>
        <Button
          type="button"
          variant="text"
          size="sm"
          aria-disabled={!busy}
          onClick={() => endBatch('canceled')}
        >
          {c.batchCancel}
        </Button>
      </div>
      <p role="status" className="text-xsm">
        {notice}
      </p>
      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-xs font-semiBold text-text-default">{c.region}</p>
        <ul
          ref={region}
          aria-label={c.region}
          aria-live="polite"
          aria-atomic={atomic}
          aria-relevant={relevant}
          aria-busy={busy}
          className="list-disc pl-lg"
        >
          {rows.map((r) => (
            <li key={r.id}>{c.row(r.id, r.seats)}</li>
          ))}
        </ul>
      </div>
      <ObservedPanel
        title={c.domTitle}
        rows={[
          [
            c.kinds,
            change
              ? change.kinds.map((k) => c.kindNames[k as keyof typeof c.kindNames]).join(', ')
              : c.none,
          ],
          [c.changed, change?.text || c.none],
          [c.busy, <code key="b">{String(busy)}</code>],
        ]}
      />
      <ObservedPanel
        title={c.modelTitle}
        source="model"
        rows={[
          [c.relevantCheck, change ? (reportable ? c.yes : c.no) : c.none],
          [c.scope, change || busy ? scope : c.none],
        ]}
      />
    </PracticeFrame>
  );
};
