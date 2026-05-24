import { cn } from '@it-tech-blog/utils';

import type { Tone, WhyNotImmediateContent } from '../content';
import {
  ArrowDownIcon,
  CodeIcon,
  MousePointerClickIcon,
  PlayCircleIcon,
  RouteIcon,
  TargetIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

import { NumberedSectionHeader } from './_NumberedSectionHeader';

type Props = { content: WhyNotImmediateContent['flow'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
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

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const stepIcons = [MousePointerClickIcon, CodeIcon, ZapIcon, TargetIcon, RouteIcon, PlayCircleIcon];

export const ActualProcessingFlow = ({ content }: Props) => (
  <section
    id="flow-heading"
    aria-labelledby="heading-flow"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] scroll-mt-24',
    )}
  >
    <NumberedSectionHeader
      id="flow"
      number={4}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="flex flex-col gap-2">
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? RouteIcon;
        return (
          <li key={step.title} className="flex flex-col">
            <article
              className={cn(
                'group flex items-center gap-3 sm:gap-4 rounded-2xl border-2 px-md py-3 sm:py-4 transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                toneCard[step.tone],
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full',
                  'text-xsm font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(0,0,0,0.08)]',
                  toneNumber[step.tone],
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {step.title}
                </h3>
                <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {step.description}
                </p>
              </div>
              <span
                aria-hidden="true"
                className="hidden sm:inline-flex h-7 px-2 items-center justify-center rounded-md font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)] border border-[var(--term-border)] bg-[var(--term-bg)]"
              >
                step {i + 1}
              </span>
            </article>
            {!isLast && (
              <span aria-hidden="true" className="self-center my-1 text-[var(--term-muted)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        );
      })}
    </ol>

    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
  </section>
);
