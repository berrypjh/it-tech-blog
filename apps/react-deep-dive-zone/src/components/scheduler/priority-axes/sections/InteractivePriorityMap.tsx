'use client';

import { useCallback, useRef, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { axisIconBox, axisTextStrong } from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { PriorityTabKey, ThreePriorityAxesContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  CompassIcon,
  LayersIcon,
  ZapIcon,
} from '../icons';

type Props = { content: ThreePriorityAxesContent['interactive'] };

export const InteractivePriorityMap = ({ content }: Props) => {
  const [active, setActive] = useState<PriorityTabKey>('click');
  const tabRefs = useRef<Partial<Record<PriorityTabKey, HTMLButtonElement | null>>>({});

  const scenario = content.scenarios[active];
  const ids = content.tabs.map((t) => t.key);
  const total = ids.length;

  const focusTab = (key: PriorityTabKey) => {
    const el = tabRefs.current[key];
    if (el) el.focus();
  };

  const handleKey = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>, current: PriorityTabKey) => {
      const idx = ids.indexOf(current);
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        const next = ids[(idx + 1) % total];
        setActive(next);
        focusTab(next);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        const next = ids[(idx - 1 + total) % total];
        setActive(next);
        focusTab(next);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setActive(ids[0]);
        focusTab(ids[0]);
      } else if (e.key === 'End') {
        e.preventDefault();
        const last = ids[total - 1];
        setActive(last);
        focusTab(last);
      }
    },
    [ids, total],
  );

  return (
    <section aria-labelledby="heading-interactive">
      <NumberedSectionHeader
        id="interactive"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<CompassIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* tabs */}
        <div
          role="tablist"
          aria-label={content.title}
          className="flex flex-wrap gap-1.5 -mx-1 px-1 pb-md sm:pb-lg overflow-x-auto"
        >
          {content.tabs.map((tab) => {
            const selected = tab.key === active;
            return (
              <button
                key={tab.key}
                ref={(el) => {
                  tabRefs.current[tab.key] = el;
                }}
                type="button"
                role="tab"
                id={`tab-${tab.key}`}
                aria-selected={selected}
                aria-controls={`panel-${tab.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.key)}
                onKeyDown={(e) => handleKey(e, tab.key)}
                className={cn(
                  'group relative inline-flex items-center gap-2 rounded-xl px-3 py-2 whitespace-nowrap',
                  'text-xsm sm:text-sm font-mono font-bold transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  selected
                    ? 'border-2 border-blue-500 bg-blue-50 text-blue-800 shadow-[0_2px_0_rgba(29,78,216,0.25)] dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-100'
                    : 'border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:text-[var(--term-fg)] hover:border-blue-200 dark:hover:border-blue-700/60',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-block h-1.5 w-1.5 rounded-full',
                    selected ? 'bg-blue-500 dark:bg-blue-300' : 'bg-[var(--term-dim)]',
                  )}
                />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
          className="grid grid-cols-1 lg:grid-cols-[minmax(0,8fr)_minmax(0,4fr)] gap-md"
        >
          {/* 3-stage flow */}
          <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 relative">
            {/* Event Priority */}
            <li
              className={cn(
                'relative flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30',
                'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    axisIconBox.blue,
                  )}
                >
                  <ZapIcon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  {content.stageLabels.eventPriority}
                </span>
              </header>
              <p className={cn('font-mono text-md font-bold break-keep', axisTextStrong.blue)}>
                {scenario.event.kind}
              </p>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {scenario.event.description}
              </p>
              <span
                aria-hidden="true"
                className="hidden md:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
              >
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
              <span
                aria-hidden="true"
                className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
              >
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </li>

            {/* Lane */}
            <li
              className={cn(
                'relative flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-teal-50/30',
                'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    axisIconBox.teal,
                  )}
                >
                  <LayersIcon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {content.stageLabels.lane}
                </span>
              </header>
              <p className={cn('font-mono text-md font-bold break-keep', axisTextStrong.teal)}>
                {scenario.lane.name}
              </p>
              <p className="font-mono text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                {scenario.lane.bitmask}
              </p>
              <span
                aria-hidden="true"
                className="hidden md:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-teal-200/80 bg-[var(--term-bg)] text-teal-600 shadow-[0_1px_0_var(--term-border)] dark:border-teal-800/60 dark:text-teal-300"
              >
                <ArrowRightIcon className="h-3.5 w-3.5" />
              </span>
              <span
                aria-hidden="true"
                className="md:hidden flex justify-center text-teal-500 dark:text-teal-300 mt-1"
              >
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </li>

            {/* Scheduling */}
            <li
              className={cn(
                'flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-violet-50/30',
                'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    axisIconBox.violet,
                  )}
                >
                  <ClockIcon className="h-4 w-4" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-300">
                  {content.stageLabels.scheduling}
                </span>
              </header>
              <p className={cn('text-sm sm:text-md font-bold break-keep', axisTextStrong.violet)}>
                {scenario.scheduling.label}
              </p>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {scenario.scheduling.description}
              </p>
            </li>
          </ol>

          {/* Summary */}
          <aside
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
              'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/30',
              'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.stageLabels.summary}
              </p>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                tab · {scenario.label}
              </span>
            </header>
            <ol className="flex flex-col gap-2">
              {scenario.summary.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums bg-blue-600 text-white dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </section>
  );
};
