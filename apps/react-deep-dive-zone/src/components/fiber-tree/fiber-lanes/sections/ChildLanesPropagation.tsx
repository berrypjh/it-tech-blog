import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberLanesContent, PropagationStep } from '../content';
import {
  ActivityIcon,
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  MoveUpIcon,
} from '../icons';

type Props = { content: FiberLanesContent['propagation'] };

const iconMap = {
  pulse: ActivityIcon,
  arrowUp: MoveUpIcon,
  eye: EyeIcon,
} as const;

const tone = {
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    title: 'text-sky-900 dark:text-sky-100',
    number: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    title: 'text-violet-900 dark:text-violet-100',
    number: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
  },
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    title: 'text-emerald-900 dark:text-emerald-100',
    number: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
  },
} as const;

export const ChildLanesPropagation = ({ content }: Props) => (
  <section
    id="propagation"
    aria-labelledby="heading-propagation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="propagation"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MoveUpIcon className="h-5 w-5" />}
    />

    <ol
      className={cn(
        'grid items-stretch gap-sm',
        'grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr]',
      )}
    >
      {content.steps.map((step, idx) => (
        <li key={step.id} className="contents">
          <StepCard step={step} />
          {idx < content.steps.length - 1 && (
            <span
              aria-hidden="true"
              className="self-center justify-self-center flex items-center justify-center"
            >
              <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full bg-violet-50 border border-violet-200/80 text-violet-600 dark:bg-violet-950/40 dark:border-violet-800/60 dark:text-violet-300">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
              <span className="lg:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-violet-50 border border-violet-200/80 text-violet-600 dark:bg-violet-950/40 dark:border-violet-800/60 dark:text-violet-300">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md',
        'border-emerald-300/80 bg-emerald-50/70',
        'dark:border-emerald-800/60 dark:bg-emerald-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 shrink-0"
      >
        <CheckCircleIcon className="h-5 w-5" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);

const StepCard = ({ step }: { step: PropagationStep }) => {
  const t = tone[step.tone];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
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
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{step.body}</p>
    </article>
  );
};
