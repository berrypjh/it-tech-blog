import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { PassiveEffectsContent, SummaryItem, TimelineStep } from '../content';
import {
  CheckCircleIcon,
  ClockIcon,
  LinkIcon,
  ListChecksIcon,
  SparklesIcon,
  StarIcon,
} from '../icons';

type Props = { content: PassiveEffectsContent['fullTimeline'] };

const summaryIconMap: Record<SummaryItem['iconName'], typeof CheckCircleIcon> = {
  check: CheckCircleIcon,
  clock: ClockIcon,
  link: LinkIcon,
  star: StarIcon,
};

export const CommitPhaseFullTimelineSection = ({ content }: Props) => (
  <section
    id="full-timeline"
    aria-labelledby="heading-full-timeline"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="full-timeline"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_0.55fr)] gap-3 items-start">
      <TimelineRail steps={content.steps} />
      <SummaryCard title={content.summaryTitle} items={content.summaryItems} />
    </div>
  </section>
);

const TimelineRail = ({ steps }: { steps: TimelineStep[] }) => (
  <article
    className={cn(
      'rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <ol className="flex flex-col">
      {steps.map((step, idx) => (
        <li key={step.number} className="flex items-stretch gap-3">
          {/* Number rail */}
          <div className="flex flex-col items-center pt-1">
            <NumberCircle step={step} />
            {idx < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="mt-1 mb-1 w-px flex-1 bg-[var(--term-border)] border-l border-dashed border-[var(--term-border)]"
              />
            )}
          </div>
          {/* Card */}
          <div className="flex-1 min-w-0 pb-2">
            <StepCard step={step} />
          </div>
        </li>
      ))}
    </ol>
  </article>
);

const NumberCircle = ({ step }: { step: TimelineStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-mono font-bold tabular-nums',
        step.isAsync
          ? cn(t.chipSolid, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : t.chipSolid,
      )}
    >
      {step.number}
    </span>
  );
};

const StepCard = ({ step }: { step: TimelineStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-2xl border p-md',
        step.isAsync
          ? cn('border-2', t.borderStrong, t.bg, 'ring-2 ring-teal-300/40 dark:ring-teal-500/30')
          : cn(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
          {step.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
            t.chip,
          )}
        >
          {step.badge}
        </span>
      </header>
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.body}
      </p>
    </article>
  );
};

const SummaryCard = ({ title, items }: { title: string; items: SummaryItem[] }) => (
  <article
    className={cn(
      'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
      'border-teal-200/80 bg-teal-50/60',
      'dark:border-teal-800/70 dark:bg-teal-950/30',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          'bg-teal-100 text-teal-700 border-teal-200/80',
          'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
        )}
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <h3 className="text-sm sm:text-md font-bold text-teal-900 dark:text-teal-100">{title}</h3>
    </header>

    <ul className="flex flex-col gap-2">
      {items.map((item) => {
        const Icon = summaryIconMap[item.iconName];
        return (
          <li
            key={item.text}
            className="flex items-start gap-2 rounded-xl border bg-[var(--term-bg)] p-sm border-teal-200/70 dark:border-teal-800/60"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border',
                'bg-teal-100 text-teal-700 border-teal-200/80',
                'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
              )}
            >
              <Icon className="h-3.5 w-3.5" />
            </span>
            <span className="text-xsm leading-snug text-teal-900 dark:text-teal-100 break-keep">
              {item.text}
            </span>
          </li>
        );
      })}
    </ul>
  </article>
);
