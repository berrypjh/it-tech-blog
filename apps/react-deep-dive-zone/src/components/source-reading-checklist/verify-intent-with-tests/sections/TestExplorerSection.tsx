'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { TestAsDocContent } from '../content';
import {
  CheckCircleIcon,
  FileCheckIcon,
  FileCodeIcon,
  ScanSearchIcon,
  TestTubeIcon,
} from '../icons';

type Props = { content: TestAsDocContent['explorer'] };

export const TestExplorerSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.options[0].id);
  const active = content.options.find((o) => o.id === activeId) ?? content.options[0];

  return (
    <section
      id="section-explorer"
      aria-labelledby="heading-explorer"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="explorer"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<TestTubeIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — File list */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.options.map((opt) => {
                const isActive = opt.id === activeId;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="test-explorer-result"
                    onClick={() => setActiveId(opt.id)}
                    className={cn(
                      'group flex items-center gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      isActive
                        ? cn(
                            'border-violet-400 bg-violet-50 text-violet-800',
                            'dark:border-violet-600/80 dark:bg-violet-950/40 dark:text-violet-100',
                            'shadow-[0_2px_0_var(--term-border)]',
                          )
                        : cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-violet-300 dark:hover:border-violet-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2',
                        isActive
                          ? 'border-violet-400 bg-white text-violet-700 dark:border-violet-600/80 dark:bg-[var(--term-bg)] dark:text-violet-200'
                          : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
                      )}
                    >
                      <FileCheckIcon className="h-3.5 w-3.5" />
                    </span>
                    <code
                      className={cn(
                        'font-mono text-xsm sm:text-sm font-bold truncate',
                        isActive ? 'text-violet-800 dark:text-violet-100' : 'text-[var(--term-fg)]',
                      )}
                    >
                      {opt.file}
                    </code>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className="ml-auto inline-block h-2 w-2 rounded-full bg-violet-500 dark:bg-violet-400"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result */}
          <article
            id="test-explorer-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              'border-violet-200 bg-gradient-to-br from-violet-50/60 via-white to-emerald-50/30',
              'dark:border-violet-800/60 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected file */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.file}
              </span>
              <code
                className={cn(
                  'inline-flex w-fit items-center gap-2 overflow-x-auto rounded-md border-2 px-2.5 py-1.5',
                  'border-violet-400 bg-violet-50 text-violet-800',
                  'dark:border-violet-600/80 dark:bg-violet-950/40 dark:text-violet-100',
                  'font-mono text-md font-bold',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <FileCheckIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">{active.file}</span>
              </code>
            </div>

            {/* What it checks */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.checks}
              </span>
              <ul className="flex flex-col gap-1.5">
                {active.checks.map((check) => (
                  <li key={check}>
                    <div
                      className={cn(
                        'flex items-start gap-2 rounded-md border px-2.5 py-1.5',
                        'border-emerald-300 bg-emerald-50 text-emerald-900',
                        'dark:border-emerald-700/70 dark:bg-emerald-950/30 dark:text-emerald-100',
                      )}
                    >
                      <CheckCircleIcon
                        className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                        aria-hidden="true"
                      />
                      <span className="text-xsm leading-snug break-keep">{check}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Related implementation */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.related}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {active.related.map((impl) => (
                  <li key={impl}>
                    <code
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-md border px-2 py-1',
                        'border-blue-300 bg-blue-50 text-blue-800',
                        'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
                        'font-mono text-[11px] font-bold',
                      )}
                    >
                      <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                      {impl}
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            {/* Reading point */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.readingPoint}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'border-amber-300 bg-amber-50 text-amber-900',
                  'dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
                )}
              >
                <ScanSearchIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-xsm font-bold leading-snug break-keep">{active.readingPoint}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
