'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, GitBranchIcon, ListChecksIcon } from '../icons';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['checklist'] };

export const ChecklistSection = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <section aria-labelledby="checklist-heading" className="flex flex-col gap-md">
      <SectionHeader id="checklist-heading" number={content.number} title={content.title} />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch">
        {/* checklist */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <ListChecksIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)]">Checklist</h3>
          </header>
          <ul className="flex flex-col gap-2">
            {content.items.map((item, i) => {
              const isChecked = checked[i] === true;
              return (
                <li key={item}>
                  <button
                    type="button"
                    aria-pressed={isChecked}
                    onClick={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className={cn(
                      'w-full text-left rounded-xl border-2 p-3 transition-all',
                      'flex items-start gap-2.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isChecked
                        ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2',
                        isChecked
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : 'border-blue-400 bg-white text-blue-600 dark:border-blue-600 dark:bg-slate-900 dark:text-blue-300',
                      )}
                    >
                      {isChecked && <CheckCircleIcon className="h-3.5 w-3.5" />}
                    </span>
                    <span
                      className={cn(
                        'text-xsm font-bold break-keep',
                        isChecked
                          ? 'text-emerald-700 dark:text-emerald-200 line-through decoration-emerald-400/60'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </article>

        {/* decision flow */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <GitBranchIcon className="h-4 w-4" />
            </span>
            <h3 className="text-md font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.decisionTitle}
            </h3>
          </header>

          <ol className="flex flex-col gap-3">
            {content.decisions.map((d) => (
              <li key={d.question} className="flex flex-col gap-2">
                <p className="text-xsm font-mono font-bold text-[var(--term-fg)] break-keep">
                  {d.question}
                </p>
                <ul className="flex flex-col gap-1.5 ml-3">
                  {d.branches.map((b) => {
                    const accent = domainAccent[b.domain];
                    return (
                      <li
                        key={b.label}
                        className={cn(
                          'inline-flex items-center gap-2 rounded-lg border-2 px-3 py-1.5',
                          accent.border,
                          accent.bg,
                        )}
                      >
                        <ArrowRightIcon
                          aria-hidden="true"
                          className={cn('h-3 w-3 shrink-0', accent.text)}
                        />
                        <span className={cn('text-xsm font-bold break-keep', accent.text)}>
                          {b.label}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </article>
      </div>
    </section>
  );
};
