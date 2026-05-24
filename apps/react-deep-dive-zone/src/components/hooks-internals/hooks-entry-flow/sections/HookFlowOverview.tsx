import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { HooksEntryFlowContent, Tone } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CodeIcon,
  LightbulbIcon,
  PlayCircleIcon,
  SearchIcon,
  SplitIcon,
  UserIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: HooksEntryFlowContent['overview'] };

const stepIcons = [UserIcon, CodeIcon, SearchIcon, SplitIcon, WorkflowIcon];

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-100',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-100',
  teal: 'border-teal-300/80 bg-teal-50/70 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  violet:
    'border-violet-300/80 bg-violet-50/70 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
  amber:
    'border-amber-300/80 bg-amber-50/70 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
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
};

export const HookFlowOverview = ({ content }: Props) => (
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

    {/* Flow cards: 5 horizontal on desktop, stacked vertical on mobile */}
    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 items-stretch gap-2 sm:gap-3 relative">
      {content.steps.map((step, i) => {
        const Icon = stepIcons[i] ?? PlayCircleIcon;
        const isLast = i === content.steps.length - 1;
        return (
          <li
            key={step.title}
            className={cn(
              'relative flex flex-col gap-2 rounded-2xl border-2 p-3 sm:p-md transition-colors',
              toneCard[step.tone],
            )}
          >
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border',
                  toneIconBox[step.tone],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[9px] font-mono font-bold uppercase tracking-wider opacity-70">
                step {i + 1}
              </span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <h3 className="text-xsm font-bold leading-tight break-keep">{step.title}</h3>
              {step.subtitle && (
                <code className="font-mono text-[11px] opacity-90 break-all">{step.subtitle}</code>
              )}
              <p className="mt-1 text-[10px] sm:text-[11px] leading-snug opacity-85 break-keep">
                {step.description}
              </p>
            </div>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    {/* Dashed loop line */}
    <div
      aria-hidden="true"
      className="mt-md hidden lg:block border-t border-dashed border-[var(--term-border)]"
    />

    {/* Highlight box */}
    <aside
      className={cn(
        'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-amber-300/80 bg-amber-50/60',
        'dark:border-amber-800/60 dark:bg-amber-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
      >
        <LightbulbIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 break-keep">
        <span className="font-bold">{content.highlight.label}: </span>
        {content.highlight.body}
      </p>
    </aside>
  </section>
);
