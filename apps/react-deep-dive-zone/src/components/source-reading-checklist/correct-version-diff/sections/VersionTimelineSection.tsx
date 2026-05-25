'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { CorrectVersionDiffContent, VersionKey } from '../content';
import {
  CalendarDaysIcon,
  CompassIcon,
  FileCodeIcon,
  HistoryIcon,
  MilestoneIcon,
  SparkIcon,
} from '../icons';

type Props = { content: CorrectVersionDiffContent['timeline'] };

const versionTone: Record<
  VersionKey,
  {
    border: string;
    chip: string;
    text: string;
    dot: string;
    ring: string;
  }
> = {
  react16: {
    border: 'border-amber-300 dark:border-amber-700/70',
    chip: 'bg-amber-50 text-amber-800 border-amber-300 dark:bg-amber-950/40 dark:text-amber-100 dark:border-amber-700/70',
    text: 'text-amber-800 dark:text-amber-200',
    dot: 'bg-amber-500 dark:bg-amber-400',
    ring: 'focus-visible:ring-amber-400',
  },
  react18: {
    border: 'border-violet-300 dark:border-violet-700/70',
    chip: 'bg-violet-50 text-violet-800 border-violet-300 dark:bg-violet-950/40 dark:text-violet-100 dark:border-violet-700/70',
    text: 'text-violet-800 dark:text-violet-200',
    dot: 'bg-violet-500 dark:bg-violet-400',
    ring: 'focus-visible:ring-violet-400',
  },
  react19: {
    border: 'border-blue-300 dark:border-blue-700/70',
    chip: 'bg-blue-50 text-blue-800 border-blue-300 dark:bg-blue-950/40 dark:text-blue-100 dark:border-blue-700/70',
    text: 'text-blue-800 dark:text-blue-200',
    dot: 'bg-blue-500 dark:bg-blue-400',
    ring: 'focus-visible:ring-blue-400',
  },
};

export const VersionTimelineSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState<VersionKey>(content.tabs[0].id);
  const active = content.tabs.find((t) => t.id === activeId) ?? content.tabs[0];
  const t = versionTone[active.id];

  return (
    <section
      id="section-timeline"
      aria-labelledby="heading-timeline"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="timeline"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<MilestoneIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — version tabs */}
          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.listLabel}
            </span>
            <div className="flex flex-col gap-2">
              {content.tabs.map((tab) => {
                const isActive = tab.id === activeId;
                const tt = versionTone[tab.id];
                return (
                  <button
                    key={tab.id}
                    type="button"
                    aria-pressed={isActive}
                    aria-controls="timeline-result"
                    onClick={() => setActiveId(tab.id)}
                    className={cn(
                      'group flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-left',
                      'transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      tt.ring,
                      isActive
                        ? cn(tt.chip, tt.border, 'shadow-[0_2px_0_var(--term-border)]')
                        : cn(
                            'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                            'motion-safe:hover:-translate-y-0.5',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                          isActive
                            ? cn(tt.border, 'bg-white dark:bg-[var(--term-bg)]')
                            : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                        )}
                      >
                        {isActive && <span className={cn('block h-2 w-2 rounded-full', tt.dot)} />}
                      </span>
                      <span
                        className={cn(
                          'inline-flex items-center gap-1.5 font-mono text-xsm sm:text-sm font-bold',
                          isActive ? tt.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        <CalendarDaysIcon className="h-3.5 w-3.5" aria-hidden="true" />
                        {tab.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        aria-hidden="true"
                        className={cn('inline-block h-2 w-2 rounded-full', tt.dot)}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Result panel */}
          <article
            id="timeline-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              t.border,
              t.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Selected version */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.selected}
              </span>
              <span
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1',
                  t.chip,
                  t.border,
                  'font-mono text-md font-bold',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <span aria-hidden="true" className={cn('block h-1.5 w-1.5 rounded-full', t.dot)} />
                {active.label}
              </span>
            </div>

            {/* Keywords */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.keywords}
              </span>
              <ul className="flex flex-wrap gap-1.5">
                {active.keywords.map((kw) => (
                  <li key={kw}>
                    <code
                      className={cn(
                        'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
                        'bg-white dark:bg-[var(--term-bg)]',
                        t.border,
                        t.text,
                        'font-mono text-[11px] font-bold',
                      )}
                    >
                      <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                      {kw}
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
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                )}
              >
                <HistoryIcon className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {active.readingPoint}
                </p>
              </div>
            </div>

            {/* Modern view */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.modernView}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'border-blue-300 bg-blue-50 text-blue-900',
                  'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
                )}
              >
                <CompassIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                <p className="text-xsm font-bold leading-snug break-keep">{active.modernView}</p>
              </div>
            </div>

            {/* Hint */}
            <p
              className={cn(
                'mt-auto flex items-center gap-2 rounded-md border border-dashed p-2',
                'border-[var(--term-border)] text-[var(--term-muted)]',
              )}
            >
              <SparkIcon className="h-3 w-3" aria-hidden="true" />
              <span className="text-[10px] font-mono uppercase tracking-wider">
                react 16 → 18 → 19
              </span>
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
