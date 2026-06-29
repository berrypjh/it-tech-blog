import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommitPhaseIntroContent, FlowStep } from '../content';
import { ArrowRightIcon, TargetIcon } from '../icons';

type Props = { content: CommitPhaseIntroContent['summary'] };

export const CommitKeySummarySection = ({ content }: Props) => {
  const t = toneTokens.teal;
  return (
    <section
      id="key-summary"
      aria-labelledby="heading-key-summary"
      className="space-y-md scroll-mt-xl"
    >
      <SectionHeader
        id="key-summary"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<TargetIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-lg border-2 p-md sm:p-lg',
          t.fill.border,
          t.fill.bg,
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)] gap-md lg:gap-lg items-center">
          {/* Left: Target icon */}
          <div className="flex lg:justify-center">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-lg border-2',
                t.fill.bg,
                t.fill.border,
                t.fill.text,
                'shadow-[0_1px_0_var(--term-border)]',
              )}
            >
              <TargetIcon className="h-8 w-8 sm:h-10 sm:w-10" />
            </span>
          </div>

          {/* Right: text + flow */}
          <div className="flex flex-col gap-md min-w-0">
            <div className="flex flex-col gap-1">
              <h3
                className={cn(
                  'text-xl sm:text-xxl lg:text-2xl font-bold leading-tight tracking-tight break-keep',
                  t.fill.text,
                )}
              >
                <span className="block">{content.mainSentence.line1}</span>
                <span className="block">{content.mainSentence.line2}</span>
              </h3>
              <p className={cn('text-xsm sm:text-sm break-keep', t.text)}>{content.description}</p>
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
};

const FlowRail = ({ steps }: { steps: FlowStep[] }) => (
  <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
    {steps.map((step, idx) => (
      <Fragment key={step.title}>
        <li className="flex-1 min-w-0">
          <FlowCard step={step} />
        </li>
        {idx < steps.length - 1 && (
          <li
            aria-hidden="true"
            className="flex md:items-center justify-center text-[var(--term-dim)]"
          >
            <ArrowRightIcon className="hidden md:inline-block h-4 w-4" />
            <ArrowRightIcon className="md:hidden h-4 w-4 rotate-90 my-1" />
          </li>
        )}
      </Fragment>
    ))}
  </ol>
);

const FlowCard = ({ step }: { step: FlowStep }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1 rounded-lg border bg-[var(--term-bg)] p-sm',
        t.fill.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <h4 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {step.title}
      </h4>
      <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </article>
  );
};
