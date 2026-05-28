import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CurrentWipAlternateContent, ScenarioStep } from '../content';
import {
  ActivityIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PauseIcon,
  PencilIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CurrentWipAlternateContent['scenario'] };

const iconMap = {
  pulse: ActivityIcon,
  workflow: WorkflowIcon,
  pencil: PencilIcon,
  pause: PauseIcon,
  check: CheckCircleIcon,
} as const;

const tone = {
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    number: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
  },
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    number: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    number: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
  },
  amber: {
    border:
      'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
    iconWrap: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
    title: 'text-amber-900 dark:text-amber-100',
    number: 'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950',
  },
  teal: {
    border:
      'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
    iconWrap: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
    title: 'text-teal-900 dark:text-teal-100',
    number: 'bg-teal-600 text-white dark:bg-teal-500 dark:text-slate-950',
  },
} as const;

export const RenderingScenarioFlow = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <ol className="grid items-stretch gap-2 sm:gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(5,_minmax(0,_1fr))]">
      {content.steps.map((step, idx) => (
        <li key={step.id} className="relative flex flex-col">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <>
              <span
                aria-hidden="true"
                className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10"
              >
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white border border-sky-200/80 text-sky-600 dark:bg-slate-900 dark:border-sky-800/60 dark:text-sky-300 shadow-[0_2px_8px_-2px_rgba(2,132,199,0.3)]">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              </span>
              <span aria-hidden="true" className="lg:hidden flex justify-center my-1">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            </>
          )}
        </li>
      ))}
    </ol>
  </section>
);

const StepCard = ({ step }: { step: ScenarioStep }) => {
  const t = tone[step.tone];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <header className="flex items-center justify-between">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-full font-bold text-xsm',
            t.number,
          )}
        >
          {step.number}
        </span>
        <span
          aria-hidden="true"
          className={cn('inline-flex items-center justify-center w-10 h-10 rounded-xl', t.iconWrap)}
        >
          <Icon className="h-5 w-5" />
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-snug break-keep', t.title)}>
        {step.title}
      </h3>
      <p className="text-[11.5px] leading-relaxed text-[var(--term-muted)] break-keep">
        {step.body}
      </p>
    </article>
  );
};
