import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberPropsContent, MeaningStep } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ClockIcon, GitCompareIcon, ZapIcon } from '../icons';

type Props = { content: FiberPropsContent['meaning'] };

const iconMap = {
  clock: ClockIcon,
  zap: ZapIcon,
  gitCompare: GitCompareIcon,
} as const;

const tone = {
  emerald: {
    border:
      'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    iconWrap: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
    main: 'text-emerald-700 dark:text-emerald-300',
    title: 'text-emerald-900 dark:text-emerald-100',
  },
  sky: {
    border:
      'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
    iconWrap: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
    main: 'text-sky-700 dark:text-sky-300',
    title: 'text-sky-900 dark:text-sky-100',
  },
  violet: {
    border:
      'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
    iconWrap: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
    main: 'text-violet-700 dark:text-violet-300',
    title: 'text-violet-900 dark:text-violet-100',
  },
} as const;

export const FiberPropsMeaningFlow = ({ content }: Props) => (
  <section id="meaning" aria-labelledby="heading-meaning" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="meaning"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<GitCompareIcon className="h-5 w-5" />}
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
              <span className="hidden lg:inline-flex items-center justify-center w-8 h-8 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                <ArrowRightIcon className="h-4 w-4" />
              </span>
              <span className="lg:hidden inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </span>
            </span>
          )}
        </li>
      ))}
    </ol>

    <p className="text-sm sm:text-md text-center leading-relaxed text-[var(--term-fg)] max-w-[68ch] mx-auto break-keep">
      {content.description.split(content.descriptionEmphasis).map((part, i, arr) => (
        <span key={i}>
          {part}
          {i < arr.length - 1 && (
            <span className="font-bold text-sky-700 dark:text-sky-300">
              {content.descriptionEmphasis}
            </span>
          )}
        </span>
      ))}
    </p>
  </section>
);

const StepCard = ({ step }: { step: MeaningStep }) => {
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
      <span
        aria-hidden="true"
        className={cn('inline-flex items-center justify-center w-12 h-12 rounded-xl', t.iconWrap)}
      >
        <Icon className="h-6 w-6" />
      </span>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.title)}>
        {step.title}
      </h3>
      <span className="text-[11px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
        {step.subtitle}
      </span>
      <code className={cn('mt-auto font-mono text-sm font-bold tracking-tight break-all', t.main)}>
        {step.main}
      </code>
    </article>
  );
};
