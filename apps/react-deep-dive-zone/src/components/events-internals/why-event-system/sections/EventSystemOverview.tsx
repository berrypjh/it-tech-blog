import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { Tone, WhyEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  AtomIcon,
  CodeIcon,
  ListOrderedIcon,
  MousePointerClickIcon,
  PuzzleIcon,
  RadioIcon,
  RouteIcon,
  TargetIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: WhyEventSystemContent['overview'] };

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
  sky: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

const stepIcons = [
  CodeIcon,
  RadioIcon,
  ZapIcon,
  TargetIcon,
  PuzzleIcon,
  AtomIcon,
  RouteIcon,
  MousePointerClickIcon,
];

export const EventSystemOverview = ({ content }: Props) => (
  <section
    aria-labelledby="heading-overview"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="overview"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-2 sm:gap-3',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-8',
      )}
    >
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? ListOrderedIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col items-center gap-2 rounded-2xl border-2 p-3 transition-all text-center',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              toneCard[step.tone],
            )}
          >
            {/* Number badge — anchored top center */}
            <span
              aria-hidden="true"
              className={cn(
                'absolute -top-3 inline-flex h-7 w-7 items-center justify-center rounded-full',
                'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_var(--term-border)]',
                'transition-transform group-hover:scale-110 motion-reduce:transform-none',
                toneNumber[step.tone],
              )}
            >
              {i + 1}
            </span>

            <span
              aria-hidden="true"
              className={cn(
                'mt-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                toneIconBox[step.tone],
              )}
            >
              <Icon className="h-4 w-4" />
            </span>

            <h3 className="text-[11px] sm:text-xsm font-bold leading-tight text-[var(--term-fg)] break-keep">
              {step.title}
            </h3>
            <p className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
              {step.description}
            </p>

            {!isLast && (
              <>
                {/* Horizontal arrow for desktop 8-col */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'hidden xl:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2',
                    'h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)]',
                    'bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <ArrowRightIcon className="h-3 w-3" />
                </span>
                {/* Down arrow for narrow viewports — inline below card */}
                <span
                  aria-hidden="true"
                  className="xl:hidden mt-1 text-[var(--term-muted)] flex justify-center"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    {/* SR-only ordered list of steps */}
    <p className="sr-only">{content.steps.map((s, i) => `${i + 1}. ${s.title}`).join(' → ')}</p>
  </section>
);
