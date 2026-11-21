'use client';

import { useEffect, useRef, useState } from 'react';

import { useLocale } from '@it-tech-blog/preferences';
import { PracticeFrame } from '@it-tech-blog/ui';
import { useLang } from '@it-tech-blog/utils';

import { Button } from '@berrypjh/react-ui';

import { ObservedPanel } from '../../shared/ObservedPanel';
import { neighborAfterRemoval } from '../../shared/optionList';
import { useActiveElement } from '../../shared/useActiveElement';

type Row = { id: string; name: string; stock: number; archived: boolean };

const ADD_TARGET = 'add';
const BACKGROUND_DELAY = 3000;

const content = {
  ko: {
    practice: '실습',
    instructions:
      'Tab으로 행의 버튼에 가서 Enter나 Space로 삭제 · 보관해 보세요. 가운데 행, 마지막 행, 남은 한 행을 차례로 지운 뒤 "포커스 복구"를 끄고 다시 해 봅니다.',
    recovery: '포커스 복구 (끄면 의도한 결함)',
    names: ['사과', '배', '귤', '감'],
    added: (n: number) => `새 상품 ${n}`,
    stock: (n: number) => `재고 ${n}개`,
    list: '보관함 상품 (가상의 목록)',
    empty: '목록이 비어 있습니다.',
    add: '상품 추가',
    remove: '삭제',
    archive: '보관',
    archived: '보관됨',
    background: '3초 뒤 배경 갱신',
    pending: '배경 갱신 대기 중',
    removedTo: (name: string, target: string) =>
      `${name} 삭제됨. 포커스를 ${target}(으)로 옮겼습니다.`,
    removedLost: (name: string) => `${name} 삭제됨. 포커스를 옮기지 않았습니다.`,
    addedDone: (name: string) => `${name} 추가됨. 포커스는 추가 버튼에 있습니다.`,
    archivedDone: (name: string) => `${name} 보관됨.`,
    addTarget: '추가 버튼',
    rowTarget: (name: string) => `${name} 삭제 버튼`,
    observed: '지금 관찰한 값',
    active: 'document.activeElement',
    count: '행 수',
    updates: '배경 갱신 횟수',
    kept: '마지막 배경 갱신 뒤 포커스',
    same: '그대로 유지됨',
    moved: '바뀜',
    none: '(아직 없음)',
    status: '변경 안내',
  },
  en: {
    practice: 'Exercise',
    instructions:
      'Tab to a row’s buttons and delete or archive with Enter or Space. Delete a middle row, the last row, and the only remaining row, then turn off "Focus recovery" and try again.',
    recovery: 'Focus recovery (off is the intentional defect)',
    names: ['Apple', 'Pear', 'Plum', 'Fig'],
    added: (n: number) => `New item ${n}`,
    stock: (n: number) => `${n} in stock`,
    list: 'Saved items (fictional list)',
    empty: 'The list is empty.',
    add: 'Add item',
    remove: 'Delete',
    archive: 'Archive',
    archived: 'Archived',
    background: 'Background update in 3s',
    pending: 'Background update pending',
    removedTo: (name: string, target: string) => `${name} deleted. Focus moved to ${target}.`,
    removedLost: (name: string) => `${name} deleted. Focus was not moved.`,
    addedDone: (name: string) => `${name} added. Focus stays on the add button.`,
    archivedDone: (name: string) => `${name} archived.`,
    addTarget: 'the add button',
    rowTarget: (name: string) => `the ${name} delete button`,
    observed: 'Observed now',
    active: 'document.activeElement',
    count: 'Rows',
    updates: 'Background updates',
    kept: 'Focus after the last background update',
    same: 'Unchanged',
    moved: 'Changed',
    none: '(nothing yet)',
    status: 'Change announcement',
  },
};

const buttonClass =
  'rounded-sm border border-stroke-light px-md py-xs text-xsm font-semiBold text-text-default aria-disabled:cursor-not-allowed aria-disabled:opacity-60 disabled:cursor-not-allowed disabled:opacity-60';

/** 삭제 · 추가 · 보관의 포커스 규칙을 상태로 구현한다. 이동은 도착지가 정해졌을 때 렌더링 뒤에 한 번만 한다. */
const RowList = () => {
  const c = useLang(content);
  const [rows, setRows] = useState<Row[]>(() =>
    c.names.map((name, i) => ({ id: `row-${i}`, name, stock: 3, archived: false })),
  );
  const [recovery, setRecovery] = useState(true);
  const [focusTarget, setFocusTarget] = useState<string | null>(null);
  const [status, setStatus] = useState('');
  const [updates, setUpdates] = useState(0);
  const [pending, setPending] = useState(false);
  const [kept, setKept] = useState<boolean | null>(null);
  const [active, refresh] = useActiveElement();
  const rootRef = useRef<HTMLDivElement>(null);
  const addedCount = useRef(0);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const focusedAtUpdate = useRef<Element | null>(null);

  useEffect(() => {
    if (focusTarget) {
      rootRef.current?.querySelector<HTMLElement>(`[data-focus-key="${focusTarget}"]`)?.focus();
      setFocusTarget(null);
    }
    refresh();
  }, [focusTarget, rows, refresh]);

  useEffect(() => {
    if (updates > 0) setKept(document.activeElement === focusedAtUpdate.current);
  }, [updates]);

  useEffect(() => () => clearTimeout(timer.current), []);

  const remove = (row: Row) => {
    const neighborId = neighborAfterRemoval(
      rows.map((item) => item.id),
      row.id,
    );
    const neighbor = rows.find((item) => item.id === neighborId);
    setRows((prev) => prev.filter((item) => item.id !== row.id));
    if (!recovery) {
      setStatus(c.removedLost(row.name));
      return;
    }
    setFocusTarget(neighborId ?? ADD_TARGET);
    setStatus(c.removedTo(row.name, neighbor ? c.rowTarget(neighbor.name) : c.addTarget));
  };

  const add = () => {
    addedCount.current += 1;
    const name = c.added(addedCount.current);
    setRows((prev) => [
      ...prev,
      { id: `added-${addedCount.current}`, name, stock: 1, archived: false },
    ]);
    setStatus(c.addedDone(name));
  };

  const archive = (row: Row) => {
    if (row.archived) return;
    setRows((prev) =>
      prev.map((item) => (item.id === row.id ? { ...item, archived: true } : item)),
    );
    setStatus(c.archivedDone(row.name));
  };

  const scheduleUpdate = () => {
    if (pending) return;
    setPending(true);
    timer.current = setTimeout(() => {
      focusedAtUpdate.current = document.activeElement;
      setRows((prev) => prev.map((item) => ({ ...item, stock: item.stock + 1 })));
      setUpdates((n) => n + 1);
      setPending(false);
    }, BACKGROUND_DELAY);
  };

  return (
    <PracticeFrame label={c.practice} instructions={c.instructions}>
      <label className="flex items-center gap-sm text-xsm">
        <input type="checkbox" checked={recovery} onChange={(e) => setRecovery(e.target.checked)} />
        {c.recovery}
      </label>

      <div
        ref={rootRef}
        className="flex flex-col gap-md rounded-sm border border-stroke-light p-md"
      >
        <p className="text-xxsm font-semiBold text-text-light">{c.list}</p>
        {rows.length === 0 ? (
          <p className="text-xsm">{c.empty}</p>
        ) : (
          <ul className="flex flex-col gap-sm text-xsm">
            {rows.map((row) => (
              <li key={row.id} className="flex flex-wrap items-center gap-sm">
                <span className="min-w-32 flex-1">
                  {row.name} · {c.stock(row.stock)}
                </span>
                <button
                  type="button"
                  aria-label={`${row.name} ${row.archived ? c.archived : c.archive}`}
                  aria-disabled={recovery && row.archived ? true : undefined}
                  disabled={!recovery && row.archived}
                  onClick={() => archive(row)}
                  className={buttonClass}
                >
                  {row.archived ? c.archived : c.archive}
                </button>
                <button
                  type="button"
                  data-focus-key={row.id}
                  aria-label={`${row.name} ${c.remove}`}
                  onClick={() => remove(row)}
                  className={buttonClass}
                >
                  {c.remove}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex flex-wrap gap-sm">
          <button type="button" data-focus-key={ADD_TARGET} onClick={add} className={buttonClass}>
            {c.add}
          </button>
          <Button
            type="button"
            variant="text"
            size="sm"
            aria-disabled={pending ? true : undefined}
            onClick={scheduleUpdate}
          >
            {pending ? c.pending : c.background}
          </Button>
        </div>
      </div>

      <div className="rounded-sm border border-stroke-light p-md text-xsm">
        <p className="mb-xs font-semiBold text-text-default">{c.status}</p>
        <p role="status">{status}</p>
      </div>

      <ObservedPanel
        title={c.observed}
        rows={[
          [c.active, <code key="a">{active}</code>],
          [c.count, rows.length],
          [c.updates, updates],
          [c.kept, kept === null ? c.none : kept ? c.same : c.moved],
        ]}
      />
    </PracticeFrame>
  );
};

/** 언어가 바뀌면 행 이름이 달라지므로 상태를 새로 시작한다. */
export const RowFocusDemo = () => {
  const { locale } = useLocale();
  return <RowList key={locale} />;
};
