'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { BuilderStep, ReconstructContent } from '../content';
import {
  ArrowDownIcon,
  BlocksIcon,
  Code2Icon,
  PanelsTopLeftIcon,
  RefreshIcon,
  SparkIcon,
} from '../icons';

type Props = { content: ReconstructContent['builder'] };

type StepId = BuilderStep['id'];

export const FlowBuilderSection = ({ content }: Props) => {
  const [order, setOrder] = useState<StepId[]>([]);
  const [focusedId, setFocusedId] = useState<StepId | null>(null);

  const stepById = (id: StepId) => content.steps.find((s) => s.id === id);
  const focused = focusedId ? stepById(focusedId) : null;

  const handlePick = (id: StepId) => {
    if (order.includes(id)) return;
    setOrder((prev) => [...prev, id]);
    setFocusedId(id);
  };

  const handleRemove = (id: StepId) => {
    setOrder((prev) => prev.filter((x) => x !== id));
    if (focusedId === id) setFocusedId(null);
  };

  const reset = () => {
    setOrder([]);
    setFocusedId(null);
  };
  const fill = () => {
    setOrder([...content.defaultOrder]);
    setFocusedId(content.defaultOrder[0]);
  };

  return (
    <section
      id="section-builder"
      aria-labelledby="heading-builder"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="builder"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BlocksIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_8fr)_minmax(0,_12fr)] gap-md lg:gap-lg">
          {/* LEFT — card pool */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.poolLabel}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {order.length} / {content.steps.length}
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {content.steps.map((step) => {
                const isUsed = order.includes(step.id);
                return (
                  <li key={step.id}>
                    <button
                      type="button"
                      aria-pressed={isUsed}
                      aria-controls="builder-explanation"
                      disabled={isUsed}
                      onClick={() => handlePick(step.id)}
                      className={cn(
                        'group flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left',
                        'transition-all',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        !isUsed &&
                          cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                        isUsed &&
                          cn(
                            'border-blue-300 bg-blue-50/60',
                            'dark:border-blue-700/70 dark:bg-blue-950/30',
                          ),
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                          isUsed
                            ? 'border-blue-400 bg-white text-blue-700 dark:border-blue-600/80 dark:bg-[var(--term-bg)] dark:text-blue-200'
                            : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                        )}
                      >
                        <Code2Icon className="h-3.5 w-3.5" />
                      </span>
                      <code
                        className={cn(
                          'font-mono text-xsm sm:text-sm font-bold truncate',
                          isUsed ? 'text-blue-800 dark:text-blue-100' : 'text-[var(--term-fg)]',
                        )}
                      >
                        {step.fn}
                      </code>
                      {isUsed && (
                        <span
                          aria-hidden="true"
                          className="ml-auto inline-block h-2 w-2 rounded-full bg-blue-500"
                        />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="flex gap-2 pt-sm">
              <button
                type="button"
                onClick={reset}
                disabled={order.length === 0}
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
                onClick={fill}
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
                {content.fillLabel}
              </button>
            </div>
          </div>

          {/* RIGHT — board + explanation */}
          <div className="flex flex-col gap-md">
            {/* Board */}
            <article
              aria-live="polite"
              className={cn(
                'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
                'border-blue-200 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
                'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <div className="flex items-center gap-2">
                <PanelsTopLeftIcon
                  className="h-4 w-4 text-blue-700 dark:text-blue-300"
                  aria-hidden="true"
                />
                <span className="text-xsm font-bold text-blue-800 dark:text-blue-100 uppercase tracking-wider">
                  {content.boardLabel}
                </span>
              </div>

              {order.length === 0 ? (
                <p
                  className={cn(
                    'rounded-md border border-dashed p-md text-center text-xsm',
                    'border-[var(--term-border)] text-[var(--term-muted)] break-keep',
                  )}
                >
                  {content.boardEmpty}
                </p>
              ) : (
                <ol className="flex flex-col gap-0">
                  {order.map((id, i) => {
                    const step = stepById(id);
                    if (!step) return null;
                    const isFocused = focusedId === id;
                    const isLast = i === order.length - 1;
                    return (
                      <Fragment key={id}>
                        <li>
                          <button
                            type="button"
                            aria-pressed={isFocused}
                            onClick={() => setFocusedId(id)}
                            className={cn(
                              'group flex w-full items-center gap-3 rounded-xl border-2 p-3 text-left',
                              'transition-all',
                              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                              isFocused
                                ? cn(
                                    'border-blue-400 bg-blue-50 text-blue-800',
                                    'dark:border-blue-600/80 dark:bg-blue-950/40 dark:text-blue-100',
                                    'shadow-[0_2px_0_var(--term-border)]',
                                  )
                                : cn(
                                    'border-blue-200 bg-white',
                                    'dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
                                    'hover:border-blue-300 dark:hover:border-blue-700/70',
                                  ),
                            )}
                          >
                            <span
                              aria-hidden="true"
                              className={cn(
                                'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2',
                                'border-blue-400 bg-white text-blue-700',
                                'dark:border-blue-600/80 dark:bg-[var(--term-bg)] dark:text-blue-200',
                                'font-mono text-[11px] font-bold tabular-nums',
                              )}
                            >
                              {i + 1}
                            </span>
                            <code className="font-mono text-xsm sm:text-sm font-bold flex-1 truncate">
                              {step.fn}
                            </code>
                            <span
                              role="button"
                              tabIndex={0}
                              aria-label={`remove ${step.fn}`}
                              onClick={(e) => {
                                e.stopPropagation();
                                handleRemove(id);
                              }}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleRemove(id);
                                }
                              }}
                              className={cn(
                                'inline-flex h-5 w-5 items-center justify-center rounded-full border',
                                'border-[var(--term-border)] bg-white text-[var(--term-muted)]',
                                'dark:bg-[var(--term-bg)]',
                                'hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-300',
                                'text-[10px] font-bold leading-none cursor-pointer',
                                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400',
                              )}
                            >
                              ×
                            </span>
                          </button>
                        </li>
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className="flex items-center justify-center py-0.5"
                          >
                            <ArrowDownIcon className="h-3 w-3 text-cyan-500" />
                          </span>
                        )}
                      </Fragment>
                    );
                  })}
                </ol>
              )}
            </article>

            {/* Explanation */}
            <aside
              id="builder-explanation"
              aria-live="polite"
              className={cn(
                'rounded-xl border-2 p-md',
                'border-emerald-300 bg-emerald-50/60',
                'dark:border-emerald-700/70 dark:bg-emerald-950/30',
              )}
            >
              <div className="flex items-center gap-2 mb-sm">
                <SparkIcon
                  className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
                  aria-hidden="true"
                />
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-300 font-bold">
                  {content.explanationLabel}
                </span>
              </div>
              <p className="text-xsm sm:text-sm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep">
                {focused ? focused.description : content.defaultExplanation}
              </p>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
};
