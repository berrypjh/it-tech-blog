import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type {
  RefTimelineIcon,
  RefTimelineStep,
  RefValueStep,
  RootCurrentRefContent,
} from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  EyeIcon,
  LightbulbIcon,
  LinkIcon,
  ReplaceIcon,
  UnlinkIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: RootCurrentRefContent['refTimeline'] };

const iconMap: Record<RefTimelineIcon, typeof EyeIcon> = {
  eye: EyeIcon,
  unlink: UnlinkIcon,
  replace: ReplaceIcon,
  link: LinkIcon,
  check: CheckCircleIcon,
};

export const RefDetachAttachTimelineSection = ({ content }: Props) => (
  <section
    id="ref-detach-attach"
    aria-labelledby="heading-ref-detach-attach"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="ref-detach-attach"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Top: 5-step timeline */}
      <ol className="hidden md:grid grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-2 items-stretch">
        {content.steps.map((step, idx) => (
          <Fragment key={step.title}>
            <li className="flex">
              <StepCard step={step} index={idx + 1} />
            </li>
            {idx < content.steps.length - 1 && (
              <li
                aria-hidden="true"
                className="flex items-center justify-center text-[var(--term-dim)]"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>

      {/* Mobile: vertical */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Bottom: ref flow */}
      <RefFlow steps={content.refFlow} />

      {/* Insight */}
      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 break-keep font-bold">
          {content.insight}
        </p>
      </aside>
    </article>
  </section>
);

const StepCard = ({ step, index }: { step: RefTimelineStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-2xl border bg-[var(--term-bg)] p-sm sm:p-md',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-10 w-10 items-center justify-center rounded-full border-2',
            t.chipSolid,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex h-6 w-6 items-center justify-center rounded-md border text-[10px] font-mono font-bold tabular-nums',
            t.chip,
          )}
        >
          {index}
        </span>
      </header>
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
        {step.title}
      </h3>
      <p className="text-[10.5px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};

const RefFlow = ({ steps }: { steps: RefValueStep[] }) => (
  <div className="mt-md pt-md border-t border-dashed border-[var(--term-border)]">
    <header className="mb-sm flex items-center justify-between">
      <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] font-bold">
        ref.current value flow
      </span>
    </header>
    <ol className="flex flex-col md:flex-row md:items-center md:flex-wrap gap-2">
      {steps.map((step, idx) => (
        <Fragment key={step.label}>
          <li>
            <RefValuePill step={step} />
          </li>
          {idx < steps.length - 1 && (
            <li
              aria-hidden="true"
              className="flex md:items-center justify-center text-[var(--term-dim)]"
            >
              <ArrowRightIcon className="h-3 w-3 hidden md:inline-block" />
              <ArrowDownIcon className="h-3 w-3 md:hidden" />
            </li>
          )}
        </Fragment>
      ))}
    </ol>
  </div>
);

const RefValuePill = ({ step }: { step: RefValueStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <code
      className={cn(
        'inline-block rounded-md border px-2 py-1 text-[11px] font-mono break-all',
        t.chip,
      )}
    >
      {step.label}
    </code>
  );
};
