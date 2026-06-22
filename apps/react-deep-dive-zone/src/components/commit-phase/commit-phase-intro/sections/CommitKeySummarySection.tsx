import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CommitPhaseIntroContent, FlowStep } from '../content';
import { ArrowRightIcon, TargetIcon } from '../icons';
import { commitToneTokens } from '../palette';

type Props = { content: CommitPhaseIntroContent['summary'] };

export const CommitKeySummarySection = ({ content }: Props) => (
  <section
    id="key-summary"
    aria-labelledby="heading-key-summary"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="key-summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg',
        'border-teal-300/70 dark:border-teal-700/70',
        'bg-gradient-to-br from-sky-50/60 via-white to-teal-50/70',
        'dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 right-1/4 h-32 w-32 rounded-full bg-teal-200/30 blur-3xl dark:bg-teal-500/10"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 left-1/4 h-28 w-28 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)] gap-md lg:gap-lg items-center">
        {/* Left: Target icon */}
        <div className="flex lg:justify-center">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-3xl border-2',
              'bg-teal-100 text-teal-700 border-teal-300/80',
              'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-700/70',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <TargetIcon className="h-8 w-8 sm:h-10 sm:w-10" />
          </span>
        </div>

        {/* Right: text + flow */}
        <div className="flex flex-col gap-md min-w-0">
          <div className="flex flex-col gap-1">
            <h3 className="text-xl sm:text-xxl lg:text-2xl font-bold leading-tight tracking-tight text-teal-900 dark:text-teal-50 break-keep">
              <span className="block">{content.mainSentence.line1}</span>
              <span className="block">{content.mainSentence.line2}</span>
            </h3>
            <p className="text-xsm sm:text-sm text-teal-700 dark:text-teal-200 break-keep">
              {content.description}
            </p>
          </div>

          <div className="flex flex-col gap-sm">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {content.flowTitle}
            </span>
            <FlowRail steps={content.flow} />
          </div>
        </div>
      </div>
    </article>
  </section>
);

const FlowRail = ({ steps }: { steps: FlowStep[] }) => (
  <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
    {steps.map((step, idx) => (
      <Fragment key={step.title}>
        <li className="flex-1 min-w-0">
          <FlowCard step={step} />
        </li>
        {idx < steps.length - 1 && (
          <li aria-hidden="true" className="flex md:items-center justify-center">
            <span className="hidden md:inline-block text-[var(--term-dim)]">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <span className="md:hidden text-[var(--term-dim)] my-1">
              <ArrowRightIcon className="h-4 w-4 rotate-90" />
            </span>
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const FlowCard = ({ step }: { step: FlowStep }) => {
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-xl border bg-[var(--term-bg)] p-sm',
        t.borderStrong,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.textStrong)}>
        {step.title}
      </h4>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};
