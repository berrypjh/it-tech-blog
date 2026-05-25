import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowRightIcon, RotateCcwIcon, ShieldAlertIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['rejectedFlow'] };

export const RejectedPromiseErrorBoundaryFlow = ({ content }: Props) => (
  <section aria-labelledby="rejected-flow-heading" className="flex flex-col">
    <SectionHeader
      id="rejected-flow-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
      )}
    >
      {content.steps.map((step, idx) => {
        const tone = stateTone[step.state];
        const Icon = iconRegistry[step.iconKey];
        const isLast = idx === content.steps.length - 1;
        return (
          <Fragment key={step.title}>
            <li>
              <article
                className={cn(
                  'group flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                  tone.border,
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                      tone.chip,
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>
                  {step.title}
                </h3>
                {step.caption && (
                  <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.caption}
                  </p>
                )}
              </article>
            </li>
            {!isLast && (
              <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                <span
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full border',
                    tone.iconChip,
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

    {/* Error fallback UI card */}
    <article
      className={cn(
        'mt-md flex items-center gap-md rounded-2xl border-2 p-md sm:p-lg',
        'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-rose-300 bg-white text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/60 dark:text-rose-200"
      >
        <ShieldAlertIcon className="h-6 w-6" />
      </span>
      <div className="flex flex-1 flex-col gap-1 min-w-0">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
          Error Fallback UI
        </span>
        <p className="text-sm font-bold text-[var(--term-fg)] break-keep">
          {content.errorFallback.message}
        </p>
      </div>
      <button
        type="button"
        className={cn(
          'group inline-flex shrink-0 items-center gap-2 rounded-lg px-4 py-2',
          'bg-rose-600 text-white font-bold text-xsm dark:bg-rose-500',
          'shadow-[0_2px_0_rgba(15,23,42,0.25)]',
          'transition-all motion-safe:hover:-translate-y-0.5',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400/60 focus-visible:ring-offset-2',
        )}
      >
        <RotateCcwIcon aria-hidden="true" className="h-3.5 w-3.5" />
        {content.errorFallback.buttonLabel}
      </button>
    </article>
  </section>
);
