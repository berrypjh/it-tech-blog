'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { UpdateToRenderSummaryContent } from '../content';
import { CheckSquareIcon, ListChecksIcon, SquareIcon, TrophyIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['checklist'] };

export const FinalChecklistSection = ({ content }: Props) => {
  const [checked, setChecked] = useState<boolean[]>(() => content.items.map(() => false));
  const completed = useMemo(() => checked.filter(Boolean).length, [checked]);
  const total = content.items.length;
  const percent = Math.round((completed / total) * 100);
  const allDone = completed === total;

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = [...prev];
      next[i] = !next[i];
      return next;
    });
  };

  return (
    <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="checklist"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
        {/* Checklist */}
        <article
          className={cn(
            'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
            'border-sky-200/80 dark:border-sky-800/70',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="mb-md flex items-center justify-between gap-2">
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80">
              {`${completed} / ${total}`}
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {percent}%
            </span>
          </header>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {content.items.map((item, i) => {
              const id = `checklist-item-${i}`;
              const isChecked = checked[i];
              return (
                <li key={item} className="flex">
                  <label
                    htmlFor={id}
                    className={cn(
                      'group flex items-start gap-sm w-full rounded-xl border-2 p-3 cursor-pointer transition-colors',
                      isChecked
                        ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/25'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-sky-300/70 dark:hover:border-sky-700/60',
                      'focus-within:ring-2 focus-within:ring-sky-400',
                    )}
                  >
                    <input
                      id={id}
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(i)}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
                        isChecked
                          ? 'border-emerald-500 bg-emerald-500 text-white dark:border-emerald-400 dark:bg-emerald-400 dark:text-slate-950'
                          : 'border-[var(--term-border)] bg-white dark:bg-slate-950/40 text-transparent',
                      )}
                    >
                      {isChecked ? (
                        <CheckSquareIcon className="h-4 w-4" />
                      ) : (
                        <SquareIcon className="h-4 w-4 opacity-0" />
                      )}
                    </span>
                    <span
                      className={cn(
                        'text-xsm sm:text-sm leading-snug break-keep',
                        isChecked
                          ? 'text-emerald-900 dark:text-emerald-100 font-bold'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </article>

        {/* Completion card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
            allDone
              ? 'border-emerald-300/80 bg-gradient-to-br from-emerald-50/80 via-white to-teal-50/60 dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20'
              : 'border-sky-200/80 bg-gradient-to-br from-sky-50/60 via-white to-cyan-50/40 dark:border-sky-800/70 dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
                allDone
                  ? 'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60'
                  : 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
              )}
            >
              <TrophyIcon className="h-5 w-5" />
            </span>
            <span
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
                allDone
                  ? 'border-emerald-300/70 bg-white text-emerald-700 dark:border-emerald-700/60 dark:bg-slate-950/40 dark:text-emerald-200'
                  : 'border-sky-300/70 bg-white text-sky-700 dark:border-sky-700/60 dark:bg-slate-950/40 dark:text-sky-200',
              )}
            >
              {percent}%
            </span>
          </header>

          <h3
            className={cn(
              'text-md sm:text-lg font-bold leading-tight break-keep',
              allDone ? 'text-emerald-800 dark:text-emerald-100' : 'text-sky-800 dark:text-sky-100',
            )}
          >
            {content.completionTitle}
          </h3>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.completionBody}
          </p>

          {/* Progress bar */}
          <div className="mt-auto flex flex-col gap-1.5">
            <div
              className={cn(
                'relative h-3 w-full overflow-hidden rounded-full border',
                'border-[var(--term-border)] bg-slate-100 dark:bg-slate-900/60',
              )}
              role="progressbar"
              aria-valuenow={percent}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'absolute inset-y-0 left-0 transition-[width] duration-500',
                  allDone
                    ? 'bg-gradient-to-r from-emerald-400 to-teal-400 dark:from-emerald-500 dark:to-teal-500'
                    : 'bg-gradient-to-r from-sky-400 to-cyan-400 dark:from-sky-500 dark:to-cyan-500',
                )}
                style={{ width: `${percent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[10px] font-mono text-[var(--term-muted)]">
              <span>{content.progressStart}</span>
              <span>{content.progressEnd}</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
