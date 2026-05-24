'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent, ScenarioId } from '../content';
import { ArrowRightIcon, ClockIcon, MousePointerClickIcon, RepeatIcon, SplitIcon } from '../icons';

type Props = { content: FullFlowContent['scenarios'] };

const tabIcon: Record<ScenarioId, typeof MousePointerClickIcon> = {
  click: MousePointerClickIcon,
  transition: RepeatIcon,
  deferred: ClockIcon,
};

const tabAccent: Record<
  ScenarioId,
  { active: string; inactive: string; ring: string; pipeline: string }
> = {
  click: {
    active:
      'border-blue-500 bg-blue-50 text-blue-800 shadow-[0_2px_0_rgba(29,78,216,0.3)] dark:bg-blue-950/40 dark:text-blue-100 dark:border-blue-500',
    inactive:
      'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-blue-300 hover:text-blue-700 dark:hover:border-blue-700/70 dark:hover:text-blue-200',
    ring: 'focus-visible:ring-blue-500',
    pipeline:
      'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
  },
  transition: {
    active:
      'border-teal-500 bg-teal-50 text-teal-800 shadow-[0_2px_0_rgba(13,148,136,0.3)] dark:bg-teal-950/40 dark:text-teal-100 dark:border-teal-500',
    inactive:
      'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-teal-300 hover:text-teal-700 dark:hover:border-teal-700/70 dark:hover:text-teal-200',
    ring: 'focus-visible:ring-teal-500',
    pipeline:
      'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
  },
  deferred: {
    active:
      'border-violet-500 bg-violet-50 text-violet-800 shadow-[0_2px_0_rgba(124,58,237,0.3)] dark:bg-violet-950/40 dark:text-violet-100 dark:border-violet-500',
    inactive:
      'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-violet-300 hover:text-violet-700 dark:hover:border-violet-700/70 dark:hover:text-violet-200',
    ring: 'focus-visible:ring-violet-500',
    pipeline:
      'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-indigo-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-indigo-950/10',
  },
};

const summaryDot: Record<ScenarioId, string> = {
  click: 'bg-blue-500',
  transition: 'bg-teal-500',
  deferred: 'bg-violet-500',
};

export const UpdateScenarioTabs = ({ content }: Props) => {
  const [active, setActive] = useState<ScenarioId>(content.items[0]?.id ?? 'click');
  const current = content.items.find((s) => s.id === active) ?? content.items[0];
  if (!current) return null;
  const accent = tabAccent[current.id];

  return (
    <section aria-labelledby="heading-scenarios">
      <NumberedSectionHeader
        id="scenarios"
        number={content.number}
        eyebrow={content.helper}
        title={content.title}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      {/* Tabs */}
      <div
        role="tablist"
        aria-label={content.title}
        className="flex flex-wrap items-center gap-2 overflow-x-auto pb-2"
      >
        {content.items.map((item) => {
          const isActive = item.id === active;
          const Icon = tabIcon[item.id];
          const a = tabAccent[item.id];
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls={`scenario-panel-${item.id}`}
              id={`scenario-tab-${item.id}`}
              onClick={() => setActive(item.id)}
              className={cn(
                'inline-flex items-center gap-2 rounded-full border-2 px-3.5 py-1.5',
                'text-xsm sm:text-sm font-bold whitespace-nowrap',
                'transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                isActive ? a.active : a.inactive,
                a.ring,
              )}
            >
              <Icon aria-hidden="true" className="h-4 w-4" />
              {item.tabLabel}
              {isActive && (
                <span
                  aria-hidden="true"
                  className="inline-flex items-center rounded-full bg-white/70 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-blue-700 dark:bg-slate-900/40 dark:text-blue-200"
                >
                  {content.activeBadge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div
        id={`scenario-panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`scenario-tab-${current.id}`}
        className={cn(
          'mt-md grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md items-stretch',
        )}
      >
        {/* Summary card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
            'shadow-[0_2px_0_var(--term-border)]',
            accent.pipeline,
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep">
              {current.title}
            </h3>
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-white text-[var(--term-fg)] border-[var(--term-border)] dark:bg-slate-950/40"
            >
              {(() => {
                const Icon = tabIcon[current.id];
                return <Icon className="h-4 w-4" />;
              })()}
            </span>
          </header>

          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <div className="flex flex-col gap-1 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-2.5">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.summaryHeading.start}
              </dt>
              <dd className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-words">
                {current.startCode}
              </dd>
              <p className="text-[10px] text-[var(--term-muted)] break-keep">
                {current.startCodeCaption}
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-2.5">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.summaryHeading.example}
              </dt>
              <dd className="font-mono text-xsm font-bold text-[var(--term-fg)] break-words">
                {current.exampleCode}
              </dd>
              <p className="text-[10px] text-[var(--term-muted)] break-keep">
                {current.exampleCaption}
              </p>
            </div>
            <div className="flex flex-col gap-1 rounded-lg border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-2.5">
              <dt className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {content.summaryHeading.feature}
              </dt>
              <dd className="text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                {current.feature}
              </dd>
            </div>
          </dl>
        </article>

        {/* Mini pipeline preview */}
        <aside
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
          aria-label="mini-pipeline"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            mini pipeline
          </span>
          <ol className="flex flex-col gap-1.5">
            {current.miniPipeline.map((step, i) => {
              const isLast = i === current.miniPipeline.length - 1;
              return (
                <li key={step} className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn('inline-block h-2 w-2 rounded-full', summaryDot[current.id])}
                    />
                    <span className="text-xsm font-medium text-[var(--term-fg)] break-keep">
                      {step}
                    </span>
                  </div>
                  {!isLast && (
                    <span aria-hidden="true" className="ml-1 inline-flex text-[var(--term-muted)]">
                      <ArrowRightIcon className="h-3 w-3" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </aside>
      </div>
    </section>
  );
};
