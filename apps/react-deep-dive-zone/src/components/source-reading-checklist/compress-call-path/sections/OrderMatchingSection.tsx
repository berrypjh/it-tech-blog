'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { CallPathCompressionContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightLeftIcon,
  CheckCircleIcon,
  CircleIcon,
  RefreshIcon,
  SparkIcon,
  XIcon,
} from '../icons';

type Props = { content: CallPathCompressionContent['orderMatching'] };

type CardId = CallPathCompressionContent['orderMatching']['shuffled'][number]['id'];

export const OrderMatchingSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<CardId[]>([]);

  const handlePick = (id: CardId) => {
    setSelected((prev) => (prev.includes(id) ? prev : [...prev, id]));
  };

  const reset = () => setSelected([]);
  const reveal = () => setSelected([...content.correctOrder]);

  const total = content.correctOrder.length;
  const correctPrefixCount = selected.reduce<number>((count, id, i) => {
    if (i < total && content.correctOrder[i] === id) return count + 1;
    return count;
  }, 0);
  const isComplete = selected.length === total;
  const isAllCorrect = isComplete && correctPrefixCount === total;

  const findFn = (id: CardId) => content.shuffled.find((c) => c.id === id)?.fn ?? id;

  return (
    <section
      id="section-order-matching"
      aria-labelledby="heading-order-matching"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="order-matching"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ArrowRightLeftIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Shuffled function list */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.shuffledLabel}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {selected.length} / {total}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {content.shuffled.map((card) => {
                const pickedIdx = selected.indexOf(card.id);
                const isPicked = pickedIdx !== -1;
                const isCorrectSlot = isPicked && content.correctOrder[pickedIdx] === card.id;
                const isWrongSlot = isPicked && !isCorrectSlot;
                return (
                  <button
                    key={card.id}
                    type="button"
                    aria-pressed={isPicked}
                    disabled={isPicked}
                    onClick={() => handlePick(card.id)}
                    className={cn(
                      'group flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      'disabled:cursor-not-allowed disabled:opacity-60',
                      !isPicked &&
                        cn(
                          'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                          'hover:border-blue-300 dark:hover:border-blue-700/70',
                          'motion-safe:hover:-translate-y-0.5',
                        ),
                      isPicked &&
                        isCorrectSlot &&
                        cn(
                          'border-emerald-400 bg-emerald-50',
                          'dark:border-emerald-600/80 dark:bg-emerald-950/40',
                          'shadow-[0_2px_0_var(--term-border)]',
                        ),
                      isPicked &&
                        isWrongSlot &&
                        cn(
                          'border-amber-400 bg-amber-50',
                          'dark:border-amber-600/80 dark:bg-amber-950/40',
                        ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[10px] font-bold tabular-nums',
                          isPicked
                            ? isCorrectSlot
                              ? 'border-emerald-400 bg-white text-emerald-700 dark:border-emerald-600/80 dark:bg-[var(--term-bg)] dark:text-emerald-200'
                              : 'border-amber-400 bg-white text-amber-700 dark:border-amber-600/80 dark:bg-[var(--term-bg)] dark:text-amber-200'
                            : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)] text-[var(--term-muted)]',
                        )}
                      >
                        {isPicked ? pickedIdx + 1 : ''}
                      </span>
                      <code
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold',
                          isPicked
                            ? isCorrectSlot
                              ? 'text-emerald-800 dark:text-emerald-100'
                              : 'text-amber-800 dark:text-amber-100'
                            : 'text-[var(--term-fg)]',
                        )}
                      >
                        {card.fn}
                      </code>
                    </span>
                    {isPicked ? (
                      isCorrectSlot ? (
                        <CheckCircleIcon
                          className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                          aria-hidden="true"
                        />
                      ) : (
                        <XIcon
                          className="h-4 w-4 text-amber-600 dark:text-amber-400"
                          aria-hidden="true"
                        />
                      )
                    ) : (
                      <CircleIcon className="h-4 w-4 text-[var(--term-dim)]" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex gap-2 pt-sm">
              <button
                type="button"
                onClick={reset}
                disabled={selected.length === 0}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-1.5',
                  'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                  'text-xsm font-bold text-[var(--term-fg)]',
                  'hover:border-blue-400 hover:text-blue-700 dark:hover:text-blue-300',
                  'transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'disabled:cursor-not-allowed disabled:opacity-50',
                )}
              >
                <RefreshIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {content.resetLabel}
              </button>
              <button
                type="button"
                onClick={reveal}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-md border-2 px-3 py-1.5',
                  'border-blue-400 bg-blue-50 text-blue-800',
                  'dark:border-blue-600/80 dark:bg-blue-950/40 dark:text-blue-100',
                  'text-xsm font-bold',
                  'hover:bg-blue-100 dark:hover:bg-blue-900/50',
                  'transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                )}
              >
                <SparkIcon className="h-3.5 w-3.5" aria-hidden="true" />
                {content.revealLabel}
              </button>
            </div>
          </div>

          {/* RIGHT — Restored path + explanation */}
          <article
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              isAllCorrect
                ? 'border-emerald-300 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30'
                : 'border-blue-200 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.correctLabel}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.progressLabel}
              </span>
            </div>

            <ol className="flex flex-col gap-0">
              {Array.from({ length: total }).map((_, slot) => {
                const id = selected[slot];
                const correctId = content.correctOrder[slot];
                const isFilled = !!id;
                const isCorrect = isFilled && id === correctId;
                const isLast = slot === total - 1;
                return (
                  <Fragment key={slot}>
                    <li>
                      <div
                        className={cn(
                          'flex items-center gap-2 rounded-md border-2 px-3 py-2',
                          !isFilled &&
                            cn(
                              'border-dashed border-[var(--term-border)]',
                              'bg-[var(--term-surface)]',
                            ),
                          isFilled &&
                            isCorrect &&
                            'border-emerald-400 bg-white dark:border-emerald-600/80 dark:bg-[var(--term-bg)]',
                          isFilled &&
                            !isCorrect &&
                            'border-amber-400 bg-white dark:border-amber-600/80 dark:bg-[var(--term-bg)]',
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[10px] font-bold tabular-nums',
                            !isFilled &&
                              'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)] text-[var(--term-muted)]',
                            isFilled &&
                              isCorrect &&
                              'border-emerald-400 bg-emerald-50 text-emerald-700 dark:border-emerald-600/80 dark:bg-emerald-950/40 dark:text-emerald-200',
                            isFilled &&
                              !isCorrect &&
                              'border-amber-400 bg-amber-50 text-amber-700 dark:border-amber-600/80 dark:bg-amber-950/40 dark:text-amber-200',
                          )}
                        >
                          {slot + 1}
                        </span>
                        {isFilled ? (
                          <code
                            className={cn(
                              'font-mono text-xsm font-bold',
                              isCorrect
                                ? 'text-emerald-800 dark:text-emerald-100'
                                : 'text-amber-800 dark:text-amber-100',
                            )}
                          >
                            {findFn(id)}
                          </code>
                        ) : (
                          <code className="font-mono text-xsm text-[var(--term-dim)]">
                            {`< 자리 ${slot + 1} >`}
                          </code>
                        )}
                        {isFilled && !isCorrect && (
                          <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300">
                            <XIcon className="h-3 w-3" aria-hidden="true" />≠{' '}
                            {findFn(correctId as CardId)}
                          </span>
                        )}
                      </div>
                    </li>
                    {!isLast && (
                      <span aria-hidden="true" className="flex items-center justify-center py-0.5">
                        <ArrowDownIcon className="h-3 w-3 text-cyan-500" />
                      </span>
                    )}
                  </Fragment>
                );
              })}
            </ol>

            {/* Explanation */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.explanationLabel}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  isAllCorrect
                    ? 'border-emerald-300 dark:border-emerald-700/70'
                    : 'border-blue-200 dark:border-blue-700/70',
                )}
              >
                <SparkIcon
                  className={cn(
                    'mt-0.5 h-4 w-4 shrink-0',
                    isAllCorrect
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-blue-600 dark:text-blue-400',
                  )}
                  aria-hidden="true"
                />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {content.explanation}
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
