'use client';

import { Fragment, useCallback, useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type {
  HintCard as HintCardType,
  ReadingPerspectiveContent,
  StageId,
  WorksheetSlot,
} from '../content';
import {
  CheckCircleIcon,
  CheckIcon,
  ChevronRightIcon,
  LightbulbIcon,
  RefreshIcon,
  XIcon,
} from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['workshop'] };

type Placement = Record<number, StageId>; // blank slot index → placed hint id

export const FlowCompletionWorkshop = ({ content }: Props) => {
  const [placements, setPlacements] = useState<Placement>({});
  const [activeSlot, setActiveSlot] = useState<number | null>(() => {
    const firstBlank = content.slots.findIndex((s) => s.kind === 'blank');
    return firstBlank >= 0 ? firstBlank : null;
  });

  const blankIndices = useMemo(
    () => content.slots.map((s, i) => (s.kind === 'blank' ? i : -1)).filter((i) => i >= 0),
    [content.slots],
  );

  const placedIds = useMemo(() => new Set(Object.values(placements)), [placements]);

  const isComplete = useMemo(() => {
    return blankIndices.every((i) => {
      const slot = content.slots[i];
      if (slot.kind !== 'blank') return true;
      return placements[i] === slot.correctId;
    });
  }, [blankIndices, content.slots, placements]);

  const placeHint = useCallback(
    (hintId: StageId) => {
      if (activeSlot === null) return;
      const slot = content.slots[activeSlot];
      if (slot.kind !== 'blank') return;
      setPlacements((prev) => ({ ...prev, [activeSlot]: hintId }));
      // 다음 빈칸으로 자동 이동
      const nextEmptyBlank = blankIndices.find(
        (i) => i !== activeSlot && placements[i] === undefined,
      );
      setActiveSlot(nextEmptyBlank ?? null);
    },
    [activeSlot, blankIndices, content.slots, placements],
  );

  const removePlacement = useCallback((slotIdx: number) => {
    setPlacements((prev) => {
      const next = { ...prev };
      delete next[slotIdx];
      return next;
    });
    setActiveSlot(slotIdx);
  }, []);

  const reset = useCallback(() => {
    setPlacements({});
    const firstBlank = content.slots.findIndex((s) => s.kind === 'blank');
    setActiveSlot(firstBlank >= 0 ? firstBlank : null);
  }, [content.slots]);

  return (
    <section id="section-workshop" aria-labelledby="heading-workshop" className="space-y-lg">
      <SectionHeader
        id="workshop"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
        {/* 워크시트 flow */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-sm lg:gap-1 items-stretch">
          {content.slots.map((slot, idx) => {
            const isLast = idx === content.slots.length - 1;
            return (
              <Fragment key={idx}>
                <li className="flex">
                  <SlotCard
                    slot={slot}
                    idx={idx}
                    activeSlot={activeSlot}
                    placement={placements[idx]}
                    hints={content.hints}
                    onSelectSlot={setActiveSlot}
                    onRemove={removePlacement}
                  />
                </li>
                {!isLast && (
                  <li
                    aria-hidden="true"
                    className="hidden lg:flex items-center justify-center text-sky-500 dark:text-sky-400"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>

        {/* 결과 / 리셋 */}
        <div className="mt-md flex items-center justify-between gap-sm" aria-live="polite">
          {isComplete ? (
            <p className="inline-flex items-center gap-1.5 text-xsm font-bold text-emerald-700 dark:text-emerald-300">
              <CheckCircleIcon className="h-4 w-4" />
              {content.successMessage}
            </p>
          ) : (
            <p className="inline-flex items-center gap-1.5 text-xsm text-[var(--term-muted)]">
              <LightbulbIcon className="h-3.5 w-3.5" />
              {content.tipBody}
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-bold text-[var(--term-muted)] hover:text-[var(--term-fg)] hover:border-[var(--term-fg)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)]"
          >
            <RefreshIcon className="h-3 w-3" />
            {content.resetLabel}
          </button>
        </div>
      </div>

      {/* hints + tip */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_0.32fr)] gap-md items-start">
        <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
          <header className="flex items-center justify-between gap-sm mb-md">
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
              {content.hintsTitle}
            </h3>
            <span className="text-[10px] font-mono text-[var(--term-muted)]">
              {activeSlot !== null ? `slot.${activeSlot + 1}` : '—'}
            </span>
          </header>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-sm">
            {content.hints.map((hint) => {
              const t = stageTones[hint.tone];
              const isPlaced = placedIds.has(hint.id);
              const disabled = isPlaced || activeSlot === null;
              return (
                <li key={hint.id}>
                  <button
                    type="button"
                    onClick={() => placeHint(hint.id)}
                    disabled={disabled}
                    aria-label={`${hint.stage} 단계를 배치`}
                    className={cn(
                      'group flex flex-col items-start gap-1 w-full rounded-md border p-sm text-left transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      disabled
                        ? 'opacity-40 cursor-not-allowed'
                        : 'hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)] cursor-pointer',
                      t.border,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('inline-block w-2 h-2 rounded-full', t.ribbon)}
                    />
                    <p className={cn('text-xsm font-bold leading-tight', t.text)}>{hint.stage}</p>
                    <p className="text-[10px] text-[var(--term-muted)] leading-tight font-mono break-keep">
                      {hint.description}
                    </p>
                    {isPlaced && (
                      <span className="mt-1 inline-flex items-center gap-1 text-[10px] font-bold text-emerald-600 dark:text-emerald-300">
                        <CheckCircleIcon className="h-3 w-3" />
                        placed
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </article>

        {/* TIP box */}
        <aside className="rounded-lg border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 p-md shadow-[0_2px_0_var(--term-border)] flex items-start gap-sm">
          <span
            aria-hidden="true"
            className="inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[10px] font-bold text-sky-700 dark:text-sky-200 uppercase tracking-wider">
              {content.tipLabel}
            </span>
            <p className="text-xsm text-sky-900 dark:text-sky-100 leading-relaxed break-keep">
              {content.tipBody}
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

const SlotCard = ({
  slot,
  idx,
  activeSlot,
  placement,
  hints,
  onSelectSlot,
  onRemove,
}: {
  slot: WorksheetSlot;
  idx: number;
  activeSlot: number | null;
  placement?: StageId;
  hints: HintCardType[];
  onSelectSlot: (i: number) => void;
  onRemove: (i: number) => void;
}) => {
  if (slot.kind === 'given') {
    const t = stageTones[slot.tone];
    return (
      <article
        className={cn(
          'flex flex-col items-center text-center w-full gap-1 rounded-md border bg-white dark:bg-slate-900 p-sm',
          t.border,
        )}
      >
        <p className={cn('text-xsm font-bold', t.text)}>{slot.title}</p>
        <p className="text-[11px] font-mono text-[var(--term-muted)] break-keep leading-tight">
          {slot.sub}
        </p>
      </article>
    );
  }

  // blank
  const placedHint = placement ? hints.find((h) => h.id === placement) : undefined;
  const isActive = activeSlot === idx;
  const isCorrect = placement === slot.correctId;
  const t = placedHint ? stageTones[placedHint.tone] : undefined;

  if (placedHint && t) {
    return (
      <article
        className={cn(
          'group relative flex flex-col items-center text-center w-full gap-1 rounded-md border p-sm transition-all',
          isCorrect
            ? 'border-emerald-300 dark:border-emerald-700 bg-emerald-50 dark:bg-emerald-950/30'
            : 'border-rose-300 dark:border-rose-700 bg-rose-50 dark:bg-rose-950/30',
        )}
      >
        <p className={cn('text-xsm font-bold', t.text)}>{placedHint.stage}</p>
        <p className="text-[11px] font-mono text-[var(--term-muted)] break-keep leading-tight">
          {placedHint.description}
        </p>
        <span
          aria-hidden="true"
          className={cn(
            'absolute -top-2 -right-2 inline-flex items-center justify-center w-5 h-5 rounded-full text-[9px] font-bold shadow-[0_1px_0_var(--term-border)]',
            isCorrect
              ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900'
              : 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
          )}
        >
          {isCorrect ? <CheckCircleIcon className="h-3 w-3" /> : <XIcon className="h-3 w-3" />}
        </span>
        <button
          type="button"
          onClick={() => onRemove(idx)}
          className="mt-1 text-[10px] font-bold text-[var(--term-muted)] hover:text-[var(--term-fg)] underline decoration-dashed underline-offset-2"
          aria-label="배치 해제"
        >
          remove
        </button>
      </article>
    );
  }

  return (
    <button
      type="button"
      onClick={() => onSelectSlot(idx)}
      aria-pressed={isActive}
      aria-label={`빈칸 ${idx + 1} 선택`}
      className={cn(
        'group flex flex-col items-center text-center justify-center w-full gap-1 rounded-md border-2 border-dashed bg-[var(--term-bg)] p-sm min-h-[68px] transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400',
        isActive
          ? 'border-sky-500 dark:border-sky-400 bg-sky-50/60 dark:bg-sky-950/30 shadow-[0_2px_0_var(--term-border)]'
          : 'border-[var(--term-border)] hover:border-sky-300 dark:hover:border-sky-700',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'text-2xl font-bold',
          isActive ? 'text-sky-500 dark:text-sky-400' : 'text-[var(--term-dim)]',
        )}
      >
        ?
      </span>
      <span className="text-[10px] font-mono text-[var(--term-muted)]">{slot.placeholder}</span>
    </button>
  );
};
