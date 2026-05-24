import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent, Tone } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

type Props = { content: TargetFiberContent['flow'] };

const tonePill: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-200',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/30 dark:text-cyan-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/30 dark:text-teal-200',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/30 dark:text-emerald-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/30 dark:text-violet-200',
  blue: 'border-blue-300/80 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/30 dark:text-blue-200',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/30 dark:text-amber-200',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/30 dark:text-rose-200',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-600 text-white dark:bg-sky-500',
  cyan: 'bg-cyan-600 text-white dark:bg-cyan-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  amber: 'bg-amber-600 text-white dark:bg-amber-500',
  rose: 'bg-rose-600 text-white dark:bg-rose-500',
};

export const DomToFiberFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-flow">
    <NumberedSectionHeader
      id="flow"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-start">
      {/* LEFT: vertical flow */}
      <ol className="flex flex-col gap-1">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <li key={step.label} className="flex flex-col">
              <div
                className={cn(
                  'group flex items-center gap-3 rounded-2xl border-2 px-md py-3 transition-all',
                  'hover:-translate-y-0.5 motion-reduce:transform-none',
                  tonePill[step.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                    'text-[10px] font-mono font-bold tabular-nums',
                    toneNumber[step.tone],
                  )}
                >
                  {i + 1}
                </span>
                <code className="font-mono text-xsm sm:text-sm font-bold leading-tight break-all">
                  {step.label}
                </code>
              </div>
              {!isLast && (
                <span aria-hidden="true" className="self-center my-1 text-[var(--term-muted)]">
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* RIGHT: explanations */}
      <ol className="flex flex-col gap-2">
        {content.steps.map((step, i) => (
          <li
            key={step.label}
            className={cn(
              'group flex items-start gap-3 rounded-2xl border bg-[var(--term-bg)] px-md py-3 transition-colors',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
              'hover:border-blue-300/70 dark:hover:border-blue-700/70',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                'text-[10px] font-mono font-bold tabular-nums',
                toneNumber[step.tone],
              )}
            >
              {i + 1}
            </span>
            <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </div>

    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.label}`).join(' → ')}</p>
  </section>
);
