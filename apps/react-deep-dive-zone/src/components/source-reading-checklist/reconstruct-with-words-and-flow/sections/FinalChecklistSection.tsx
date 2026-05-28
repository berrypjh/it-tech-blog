'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReconstructContent } from '../content';
import { BadgeCheckIcon, CheckCircleIcon, ClipboardCheckIcon } from '../icons';

type Props = { content: ReconstructContent['checklist'] };

export const FinalChecklistSection = ({ content }: Props) => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const total = content.items.length;
  const done = checked.size;
  const pct = Math.round((done / total) * 100);
  const isComplete = done === total;

  return (
    <section
      id="section-checklist"
      aria-labelledby="heading-checklist"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="checklist"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ClipboardCheckIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          isComplete
            ? 'border-emerald-300 bg-emerald-50/40 dark:border-emerald-700/70 dark:bg-emerald-950/20'
            : 'border-blue-200 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        {/* Progress bar */}
        <div className="flex items-center justify-between gap-md mb-md">
          <div className="flex items-center gap-2">
            {isComplete ? (
              <BadgeCheckIcon
                className="h-5 w-5 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
            ) : (
              <span
                aria-hidden="true"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border-2 border-blue-400 bg-white dark:bg-[var(--term-bg)] text-blue-700 dark:text-blue-200 font-mono text-[10px] font-bold tabular-nums"
              >
                {done}
              </span>
            )}
            <span
              className={cn(
                'text-xsm font-bold',
                isComplete
                  ? 'text-emerald-800 dark:text-emerald-100'
                  : 'text-blue-800 dark:text-blue-100',
              )}
            >
              {done} / {total} {content.progressLabel}
              {isComplete && ` · ${content.completeLabel}`}
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
            {pct}%
          </span>
        </div>
        <div
          aria-hidden="true"
          className={cn(
            'h-2 w-full rounded-full overflow-hidden mb-md',
            'bg-slate-200 dark:bg-slate-800',
          )}
        >
          <div
            className={cn(
              'h-full transition-all duration-300',
              isComplete
                ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 dark:from-emerald-500 dark:to-emerald-400'
                : 'bg-gradient-to-r from-blue-400 to-violet-500 dark:from-blue-500 dark:to-violet-400',
            )}
            style={{ width: `${pct}%` }}
          />
        </div>

        {/* Checklist grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
          {content.items.map((item, i) => {
            const isChecked = checked.has(item.id);
            const inputId = `checklist-${item.id}`;
            return (
              <li key={item.id}>
                <label
                  htmlFor={inputId}
                  className={cn(
                    'group flex items-start gap-3 rounded-xl border-2 p-3 sm:p-md cursor-pointer',
                    'transition-all',
                    isChecked
                      ? cn(
                          'border-emerald-300 bg-emerald-50/60',
                          'dark:border-emerald-700/70 dark:bg-emerald-950/30',
                        )
                      : cn(
                          'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                          'hover:border-blue-300 dark:hover:border-blue-700/70',
                          'motion-safe:hover:-translate-y-0.5',
                        ),
                  )}
                >
                  <input
                    id={inputId}
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggle(item.id)}
                    className="sr-only peer"
                  />
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
                      isChecked
                        ? 'border-emerald-400 bg-emerald-500 text-white dark:border-emerald-500 dark:bg-emerald-500'
                        : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                      'peer-focus-visible:ring-2 peer-focus-visible:ring-blue-400 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--term-bg)]',
                    )}
                  >
                    {isChecked && <CheckCircleIcon className="h-3.5 w-3.5" />}
                  </span>
                  <span className="flex flex-col gap-0.5 min-w-0">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className={cn(
                        'text-xsm sm:text-sm leading-relaxed break-keep',
                        isChecked
                          ? 'text-emerald-900 dark:text-emerald-100 font-bold'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item.text}
                    </span>
                  </span>
                </label>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
