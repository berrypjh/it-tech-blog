'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  HourglassIcon,
  PlayIcon,
  TriangleAlertIcon,
} from '../icons';
import type { PromiseState } from '../tone';
import { stateAccent } from '../tone';

import { FulfilledPreview, PendingPreview, RejectedPreview } from './_ResultPreview';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['switcher'] };

const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  fulfilled: CheckCircleIcon,
  rejected: TriangleAlertIcon,
};

export const PromiseStateSwitcher = ({ content }: Props) => {
  const [selected, setSelected] = useState<PromiseState>('pending');
  const result = content.results[selected];
  const accent = stateAccent[selected];

  return (
    <section aria-labelledby="switcher-heading" className="flex flex-col gap-md">
      <SectionHeader
        id="switcher-heading"
        number={content.number}
        title={content.title}
        subtitle={content.subtitle}
      />

      <div
        className={cn(
          'grid grid-cols-1 gap-md rounded-3xl border-2 p-md sm:p-lg',
          'lg:grid-cols-[minmax(0,3fr)_minmax(0,5fr)_minmax(0,4fr)]',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* LEFT: state selector */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.selectorLabel}
          </span>
          <ul aria-label={content.selectorLabel} className="flex flex-col gap-2">
            {content.options.map((opt) => {
              const optAccent = stateAccent[opt.state];
              const Icon = stateIcon[opt.state];
              const isActive = selected === opt.state;
              return (
                <li key={opt.state}>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setSelected(opt.state)}
                    className={cn(
                      'w-full text-left rounded-xl border-2 p-3 transition-all',
                      'flex items-center gap-2.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(optAccent.border, optAccent.bg)
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
                        optAccent.iconChip,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="flex flex-col gap-0 min-w-0">
                      <span
                        className={cn(
                          'text-xsm font-mono font-bold break-keep',
                          isActive ? optAccent.text : 'text-[var(--term-fg)]',
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
                        className={cn('h-4 w-4 shrink-0 ml-auto', optAccent.text)}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CENTER: result card */}
        <article
          aria-live="polite"
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            accent.border,
            accent.bg,
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                accent.chip,
              )}
            >
              {content.resultLabel}
            </span>
          </header>
          <h3 className={cn('text-lg font-bold break-keep', accent.text)}>{result.title}</h3>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {result.description}
          </p>
          <div className="mt-auto">
            {result.preview === 'pending' && result.pendingLabel && (
              <PendingPreview label={result.pendingLabel} />
            )}
            {result.preview === 'fulfilled' && result.fulfilledCode && (
              <FulfilledPreview code={result.fulfilledCode} />
            )}
            {result.preview === 'rejected' && result.rejectedTitle && (
              <RejectedPreview title={result.rejectedTitle} />
            )}
          </div>
        </article>

        {/* RIGHT: timeline */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md',
            'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
          )}
        >
          <header className="flex items-center gap-2">
            <PlayIcon aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
            <h3 className="text-xsm font-bold text-[var(--term-fg)]">{content.timelineTitle}</h3>
          </header>

          {/* Primary timeline */}
          <ol className="flex flex-col gap-1.5">
            {content.timeline.primary.map((step, i) => {
              const isHighlighted = step.state === selected;
              const sAccent = step.state ? stateAccent[step.state] : null;
              return (
                <li key={i} className="flex flex-col gap-1">
                  <div
                    className={cn(
                      'flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
                      isHighlighted && sAccent
                        ? cn(
                            sAccent.border,
                            sAccent.bg,
                            'ring-2',
                            sAccent.text.replace('text-', 'ring-'),
                          )
                        : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                        step.state
                          ? stateAccent[step.state].solidBg
                          : 'bg-slate-400 dark:bg-slate-500',
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        'text-[11px] font-mono font-bold break-keep',
                        isHighlighted && sAccent ? sAccent.text : 'text-[var(--term-fg)]',
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                  {i < content.timeline.primary.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="ml-2.5 block h-2 w-px bg-slate-300 dark:bg-slate-600"
                    />
                  )}
                </li>
              );
            })}
          </ol>

          {/* Divider */}
          <div className="flex items-center gap-2 my-1">
            <span className="block h-px flex-1 bg-slate-200 dark:bg-slate-700" />
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.timeline.alternativeLabel}
            </span>
            <span className="block h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          </div>

          {/* Alternative timeline */}
          <ol className="flex flex-col gap-1.5">
            {content.timeline.alternative.map((step, i) => {
              const isHighlighted = step.state === selected;
              const sAccent = step.state ? stateAccent[step.state] : stateAccent.rejected;
              return (
                <li key={i} className="flex items-center gap-2">
                  <ArrowRightIcon
                    aria-hidden="true"
                    className={cn(
                      'h-3.5 w-3.5 shrink-0',
                      isHighlighted ? sAccent.text : 'text-rose-400 dark:text-rose-500',
                    )}
                  />
                  <span
                    className={cn(
                      'flex-1 rounded-lg border px-2.5 py-1.5 text-[11px] font-mono font-bold break-keep',
                      isHighlighted
                        ? cn(sAccent.border, sAccent.bg, sAccent.text)
                        : 'border-rose-200 bg-rose-50/50 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/20 dark:text-rose-200',
                    )}
                  >
                    {step.label}
                  </span>
                </li>
              );
            })}
          </ol>
        </article>
      </div>
    </section>
  );
};
