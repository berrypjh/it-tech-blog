'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { ArrowRightIcon, CheckCircleIcon, ListChecksIcon } from '../icons';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['releaseDiff'] };

export const ReleaseDiffReadingGuide = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <section aria-labelledby="release-diff-heading" className="flex flex-col">
      <SectionHeader
        id="release-diff-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      {/* 5-step flow */}
      <ol
        className={cn(
          'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
          'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-2 items-stretch',
        )}
      >
        {content.steps.map((step, idx) => {
          const t = tone[step.tone];
          const Icon = iconRegistry[step.iconKey];
          const isLast = idx === content.steps.length - 1;
          return (
            <Fragment key={step.number}>
              <li>
                <article
                  className={cn(
                    'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                    t.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                        t.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                        t.chip,
                      )}
                    >
                      {step.number}
                    </span>
                  </div>
                  <h3
                    className={cn('text-xsm sm:text-sm font-bold break-keep leading-snug', t.text)}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[10px] leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.body}
                  </p>
                </article>
              </li>
              {!isLast && (
                <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                  <span
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-full border',
                      t.iconChip,
                    )}
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>

      {/* Checklist */}
      <div
        className={cn(
          'mt-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-blue-50/30 dark:border-blue-700/70 dark:bg-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2 mb-sm">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <ListChecksIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200">
            {content.checklistTitle}
          </h3>
        </header>

        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {content.checklist.map((item, i) => {
            const isChecked = checked[i] === true;
            return (
              <li key={item} className="h-full">
                <button
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className={cn(
                    'group w-full h-full text-left rounded-xl border-2 p-3 transition-all',
                    'flex items-start gap-2',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isChecked
                      ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30'
                      : 'border-slate-200 bg-white hover:border-blue-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-blue-700/70',
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
                      'text-xsm leading-snug break-keep',
                      isChecked
                        ? 'text-emerald-700 dark:text-emerald-200'
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
      </div>
    </section>
  );
};
