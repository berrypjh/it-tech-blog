'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent, TimelineKey } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  LoaderIcon,
  PauseCircleIcon,
  RefreshCcwIcon,
  TriangleAlertIcon,
} from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['interactive'] };

const optionIcon: Record<TimelineKey, React.ComponentType<{ className?: string }>> = {
  serverSuspend: PauseCircleIcon,
  serverError: TriangleAlertIcon,
  hydrationError: RefreshCcwIcon,
};

const optionTone: Record<TimelineKey, { selected: string; text: string; iconChip: string }> = {
  serverSuspend: {
    selected: 'border-violet-400 bg-violet-50 dark:border-violet-500 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-200',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  },
  serverError: {
    selected: 'border-rose-400 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-200',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
  },
  hydrationError: {
    selected: 'border-teal-400 bg-teal-50 dark:border-teal-500 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-200',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  },
};

export const InteractiveTimelineSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<TimelineKey>('serverSuspend');
  const result = content.results[selected];

  return (
    <section aria-labelledby="interactive-heading" className="flex flex-col gap-md">
      <SectionHeader id="interactive-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* options */}
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.selectorTitle}</h3>
          <ul aria-label={content.selectorTitle} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const isActive = selected === opt.key;
              const tone = optionTone[opt.key];
              const Icon = optionIcon[opt.key];
              return (
                <li key={opt.key}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.key)}
                    className={cn(
                      'w-full text-left rounded-2xl border-2 p-md transition-all',
                      'flex items-start gap-2.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? tone.selected
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                        tone.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex flex-col gap-0 min-w-0 flex-1">
                      <span
                        className={cn(
                          'text-sm font-bold break-keep',
                          isActive ? tone.text : 'text-[var(--term-fg)]',
                        )}
                      >
                        {opt.label}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {opt.sublabel}
                      </span>
                    </span>
                    {isActive && (
                      <CheckCircleIcon
                        aria-hidden="true"
                        className={cn('h-4 w-4 shrink-0', tone.text)}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* timeline + note + badges */}
        <article aria-live="polite" className="flex flex-col gap-md">
          <header className="flex items-center gap-2">
            <LoaderIcon aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
            <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.timelineTitle}</h3>
          </header>

          <ol className="grid grid-cols-1 gap-2">
            {result.steps.map((step, i) => {
              const accent = phaseAccent[step.phase];
              const isLast = i === result.steps.length - 1;
              return (
                <li key={step.title} className="flex flex-col gap-1">
                  <div
                    className={cn(
                      'flex items-center gap-2.5 rounded-xl border-2 p-2.5',
                      accent.border,
                      accent.bg,
                      step.highlight && 'ring-2 ring-rose-300/40 dark:ring-rose-700/40',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                        accent.solidBg,
                      )}
                    >
                      {i + 1}
                    </span>
                    <span className={cn('text-xsm font-bold break-keep', accent.text)}>
                      {step.title}
                    </span>
                  </div>
                  {!isLast && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 ml-3.5 rotate-90 text-blue-400 dark:text-blue-500"
                    />
                  )}
                </li>
              );
            })}
          </ol>

          {/* note */}
          <div
            className={cn(
              'rounded-2xl border-2 p-3',
              'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.noteTitle}
            </span>
            <p className="mt-1 text-xsm font-bold text-[var(--term-fg)] break-keep">
              {result.note}
            </p>
          </div>

          {/* badges */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.badgesTitle}
            </span>
            <ul className="flex flex-wrap gap-2">
              {result.badges.map((badge) => {
                const accent = phaseAccent[badge.phase];
                return (
                  <li
                    key={badge.label}
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                      'text-[11px] font-bold',
                      accent.chip,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('block h-1.5 w-1.5 rounded-full', accent.solidBg)}
                    />
                    {badge.label}
                  </li>
                );
              })}
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};
