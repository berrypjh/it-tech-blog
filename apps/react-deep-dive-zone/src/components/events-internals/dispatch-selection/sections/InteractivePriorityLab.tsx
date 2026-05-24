'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent } from '../content';
import { ArrowDownIcon, PlayCircleIcon } from '../icons';
import { priorityBadge, priorityBorder, priorityIconBox, priorityText } from '../priorityStyle';

type Props = { content: DispatchSelectionContent['lab'] };

export const InteractivePriorityLab = ({ content }: Props) => {
  const [selected, setSelected] = useState<string>(content.defaultTab);
  const state = content.states[selected] ?? content.states[content.defaultTab];

  return (
    <section aria-labelledby="heading-lab">
      <NumberedSectionHeader
        id="lab"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.hint}
        icon={<PlayCircleIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Tabs */}
        <div role="tablist" aria-label={content.title} className="flex flex-wrap gap-2 mb-md">
          {content.tabs.map((tab) => {
            const isSelected = tab === selected;
            return (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setSelected(tab)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-xl border-2 px-4 py-2',
                  'font-mono text-xsm sm:text-sm font-bold transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  'motion-safe:hover:-translate-y-0.5',
                  isSelected
                    ? 'border-blue-600 bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.35)] dark:border-blue-500 dark:bg-blue-500'
                    : 'border-blue-200/80 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200 dark:hover:bg-blue-950/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'block h-1.5 w-1.5 rounded-full',
                    isSelected ? 'bg-white/90' : 'bg-blue-500 dark:bg-blue-400',
                  )}
                />
                <span>{tab}</span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md items-start">
          {/* LEFT: info table */}
          <article
            aria-live="polite"
            className={cn(
              'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header
              className={cn(
                'flex items-center gap-2 border-b px-md py-2.5',
                'border-[var(--term-border)] bg-[var(--term-surface)]/50',
              )}
            >
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                event info
              </span>
              <span
                className={cn(
                  'ml-auto inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold',
                  priorityBadge[state.priority],
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-current opacity-70"
                />
                {state.priorityLabel}
              </span>
            </header>
            <dl className="grid grid-cols-[auto_1fr]">
              {[
                { key: content.labels.event, val: state.selected, mono: true },
                { key: content.labels.priority, val: state.priorityLabel, accent: true },
                { key: content.labels.wrapper, val: state.wrapper, mono: true, accent: true },
                { key: content.labels.description, val: state.description },
              ].map((row, i) => (
                <div key={row.key} className={cn('contents', i > 0 && '')}>
                  <dt
                    className={cn(
                      'px-md py-2.5 text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]',
                      'border-t border-[var(--term-border)]',
                      i === 0 && 'border-t-0',
                    )}
                  >
                    {row.key}
                  </dt>
                  <dd
                    className={cn(
                      'px-md py-2.5 text-xsm sm:text-sm text-[var(--term-fg)] break-keep',
                      'border-t border-[var(--term-border)]',
                      i === 0 && 'border-t-0',
                    )}
                  >
                    {row.mono ? (
                      <code
                        className={cn(
                          'font-mono font-bold break-all',
                          row.accent && priorityText[state.priority],
                        )}
                      >
                        {row.val}
                      </code>
                    ) : row.accent ? (
                      <span className={cn('font-bold', priorityText[state.priority])}>
                        {row.val}
                      </span>
                    ) : (
                      row.val
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          {/* RIGHT: processing flow */}
          <article
            className={cn(
              'rounded-2xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between mb-md">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.flow}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-md',
                  priorityIconBox[state.priority],
                )}
              >
                <PlayCircleIcon className="h-3.5 w-3.5" />
              </span>
            </header>

            <ol className="flex flex-col gap-1">
              {state.flow.map((step, i) => {
                const isLast = i === state.flow.length - 1;
                return (
                  <li key={`${state.selected}-${i}`} className="flex flex-col">
                    <div
                      className={cn(
                        'flex items-center gap-3 rounded-xl border-2 px-md py-2.5',
                        priorityBorder[state.priority],
                        'bg-white dark:bg-slate-950/40',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums',
                          priorityIconBox[state.priority],
                        )}
                      >
                        {i + 1}
                      </span>
                      <code
                        className={cn(
                          'font-mono text-[11px] sm:text-xsm font-bold break-all flex-1',
                          priorityText[state.priority],
                        )}
                      >
                        {step.label}
                      </code>
                      {step.hint && (
                        <span className="hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                          {step.hint}
                        </span>
                      )}
                    </div>
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="self-center my-0.5 text-[var(--term-muted)]"
                      >
                        <ArrowDownIcon className="h-3.5 w-3.5" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>

            <p className="sr-only">
              {state.flow.map((s, i) => `${i + 1}. ${s.label}`).join(' → ')}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
