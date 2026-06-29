import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { PreviousChapterStep, RenderPhaseIntroContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  previousIconByName,
  SparklesIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: RenderPhaseIntroContent['previous'] };

export const PreviousChapterFlow = ({ content }: Props) => (
  <section id="previous-chapter" aria-labelledby="heading-previous-chapter" className="space-y-md">
    <SectionHeader
      id="previous-chapter"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// previous chapter → render phase entry'}
        </span>
        <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)] rounded-md border border-[var(--term-border)] px-2 py-0.5">
          5 steps
        </span>
      </header>

      {/* Desktop: horizontal flow */}
      <div className="hidden md:flex items-stretch gap-2">
        {content.steps.map((step, idx) => (
          <Fragment key={step.title}>
            <div className="flex-1 min-w-0">
              <StepCard step={step} />
            </div>
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center text-[var(--term-accent)] px-0.5"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            )}
          </Fragment>
        ))}
      </div>

      {/* Mobile: vertical flow */}
      <ol className="md:hidden flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="my-1 flex justify-center text-[var(--term-accent)]"
              >
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      <SectionNote icon={<SparklesIcon className="h-4 w-4" />} className="mt-md">
        {content.emphasis}
      </SectionNote>
    </article>
  </section>
);

const StepCard = ({ step }: { step: PreviousChapterStep }) => {
  const Icon = previousIconByName[step.icon];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-2 rounded-lg border bg-[var(--term-bg)] p-sm',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-md border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-xsm font-bold leading-tight text-center break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-xxsm leading-snug text-[var(--term-muted)] text-center break-keep">
        {step.description}
      </p>
    </article>
  );
};
