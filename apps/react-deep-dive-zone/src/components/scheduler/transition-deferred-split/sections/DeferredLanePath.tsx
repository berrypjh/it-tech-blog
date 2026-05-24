import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TransitionDeferredContent } from '../content';
import { ClockIcon, NetworkIcon } from '../icons';

type Props = { content: TransitionDeferredContent['deferredTimeline'] };

const dotColor = {
  emerald: 'bg-emerald-500 dark:bg-emerald-400 border-emerald-600 dark:border-emerald-500',
  blue: 'bg-blue-500 dark:bg-blue-400 border-blue-600 dark:border-blue-500',
} as const;

const textColor = {
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
} as const;

const lineColor = {
  emerald: 'bg-emerald-400 dark:bg-emerald-500',
  blue: 'bg-blue-400 dark:bg-blue-500',
} as const;

export const DeferredLanePath = ({ content }: Props) => (
  <section aria-labelledby="heading-deferred-timeline">
    <NumberedSectionHeader
      id="deferred-timeline"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* legend */}
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <ClockIcon aria-hidden="true" className="h-5 w-5 text-[var(--term-muted)]" />
          <span className="font-mono text-xsm font-bold text-[var(--term-fg)]">timeline</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {content.legend.map((l) => (
            <li
              key={l.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                'text-[10px] sm:text-xsm font-mono',
                l.accent === 'emerald'
                  ? 'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200'
                  : 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'block h-2 w-2 rounded-full',
                  l.accent === 'emerald' ? 'bg-emerald-500' : 'bg-blue-500',
                )}
              />
              {l.label}
            </li>
          ))}
        </ul>
      </header>

      {/* Desktop horizontal timeline */}
      <ol className="hidden md:grid grid-cols-5 items-start relative">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.title} className="flex flex-col items-center gap-2 relative">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-5 w-5 items-center justify-center rounded-full border-2 z-10',
                  dotColor[step.accent],
                  step.emphasis &&
                    'ring-4 ring-offset-2 ring-offset-[var(--term-bg)] ring-blue-300/60 dark:ring-blue-700/40',
                )}
              />
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn('absolute left-1/2 top-2 h-1 w-full', lineColor[step.accent])}
                />
              )}
              <span
                className={cn(
                  'mt-2 text-center text-xsm sm:text-sm font-bold leading-snug break-keep',
                  textColor[step.accent],
                  step.emphasis && 'underline decoration-2 underline-offset-4',
                )}
              >
                {step.title}
              </span>
              <span className="font-mono text-[10px] text-[var(--term-muted)]">
                {String(i + 1).padStart(2, '0')}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Mobile vertical timeline */}
      <ol className="md:hidden flex flex-col gap-3">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.title} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                    dotColor[step.accent],
                    step.emphasis &&
                      'ring-2 ring-offset-2 ring-offset-[var(--term-bg)] ring-blue-300/60 dark:ring-blue-700/40',
                  )}
                />
                <span
                  className={cn(
                    'text-xsm sm:text-sm font-bold leading-tight break-keep',
                    textColor[step.accent],
                  )}
                >
                  {step.title}
                </span>
                <span className="ml-auto font-mono text-[10px] text-[var(--term-muted)]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className={cn('ml-2 my-1 inline-block h-3 w-0.5', lineColor[step.accent])}
                />
              )}
            </li>
          );
        })}
      </ol>

      <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
    </article>
  </section>
);
