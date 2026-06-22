import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { RenderWithHooksContent, Tone } from '../content';
import {
  BoxesIcon,
  BracesIcon,
  CogIcon,
  LayersIcon,
  PlayCircleIcon,
  RocketIcon,
  SplitIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RenderWithHooksContent['timeline'] };

const stepIcons = [
  ZapIcon,
  BracesIcon,
  LayersIcon,
  SplitIcon,
  PlayCircleIcon,
  BoxesIcon,
  RocketIcon,
];

const toneBorder: Record<Tone, string> = {
  sky: 'border-l-sky-500 dark:border-l-sky-400',
  cyan: 'border-l-cyan-500 dark:border-l-cyan-400',
  teal: 'border-l-teal-500 dark:border-l-teal-400',
  emerald: 'border-l-emerald-500 dark:border-l-emerald-400',
  violet: 'border-l-violet-500 dark:border-l-violet-400',
  amber: 'border-l-amber-500 dark:border-l-amber-400',
  indigo: 'border-l-indigo-500 dark:border-l-indigo-400',
};

const toneIconBox: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200 border-cyan-200/80 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200 border-teal-200/80 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 border-violet-200/80 dark:border-violet-800/60',
  amber:
    'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 border-amber-200/80 dark:border-amber-800/60',
  indigo:
    'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-200 border-indigo-200/80 dark:border-indigo-800/60',
};

export const RenderWithHooksTimeline = ({ content }: Props) => (
  <section
    aria-labelledby="heading-timeline"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="timeline"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    {/* Timeline body: vertical blue line on the left, step cards on the right */}
    <div className="relative pl-10 sm:pl-12">
      {/* Vertical line */}
      <span
        aria-hidden="true"
        className={cn(
          'absolute left-3 sm:left-4 top-2 bottom-2 w-0.5',
          'bg-gradient-to-b from-blue-400 via-cyan-400 to-emerald-400',
          'dark:from-blue-500 dark:via-cyan-500 dark:to-emerald-500',
          'opacity-70',
        )}
      />

      <ol className="flex flex-col gap-2.5 sm:gap-3">
        {content.steps.map((step, i) => {
          const Icon = stepIcons[i] ?? CogIcon;
          return (
            <li key={step.number} className="relative">
              {/* Number badge over the line */}
              <span
                aria-hidden="true"
                className={cn(
                  'absolute -left-10 sm:-left-12 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full',
                  'bg-blue-500 text-white text-[11px] font-mono font-bold tabular-nums',
                  'border-2 border-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                  'dark:bg-blue-400 dark:text-slate-900',
                )}
              >
                {step.number}
              </span>

              <article
                className={cn(
                  'flex items-center gap-3 rounded-xl border bg-[var(--term-bg)] p-md',
                  'border-[var(--term-border)] border-l-4',
                  'shadow-[0_1px_0_var(--term-border)] transition-colors',
                  'hover:border-sky-300/70 dark:hover:border-sky-700/70',
                  toneBorder[step.tone],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    toneIconBox[step.tone],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3 min-w-0 flex-1">
                  <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep shrink-0">
                    {step.title}
                  </h3>
                  <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
