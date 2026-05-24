import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type {
  PreviousChapterStep,
  PreviousChapterStepIcon,
  RenderPhaseIntroContent,
} from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  FileTextIcon,
  MousePointerClickIcon,
  NetworkIcon,
  PlayCircleIcon,
  SparklesIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: RenderPhaseIntroContent['previous'] };

const previousIconMap: Record<PreviousChapterStepIcon, typeof MousePointerClickIcon> = {
  mousePointer: MousePointerClickIcon,
  fileText: FileTextIcon,
  network: NetworkIcon,
  clock: ClockIcon,
  play: PlayCircleIcon,
};

export const PreviousChapterFlow = ({ content }: Props) => (
  <section
    id="previous-chapter"
    aria-labelledby="heading-previous-chapter"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="previous-chapter"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-violet-50/25',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// previous chapter → render phase entry'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          5 steps
        </span>
      </header>

      {/* Desktop: horizontal flow with inline arrows */}
      <div className="hidden md:flex items-stretch gap-2">
        {content.steps.map((step, idx) => (
          <Fragment key={step.title}>
            <div className="flex-1 min-w-0">
              <StepCard step={step} />
            </div>
            {idx < content.steps.length - 1 && (
              <span
                aria-hidden="true"
                className="flex shrink-0 items-center justify-center text-[var(--term-dim)] px-0.5"
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
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Bottom emphasis */}
      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/40',
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
          <SparklesIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
          {content.emphasis}
        </p>
      </div>
    </article>
  </section>
);

const StepCard = ({ step }: { step: PreviousChapterStep }) => {
  const Icon = previousIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col items-center gap-2 rounded-2xl border bg-[var(--term-bg)] p-sm',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className={cn('text-xsm font-bold leading-tight text-center break-keep', t.text)}>
        {step.title}
      </h3>
      <p className="text-[10px] leading-snug text-[var(--term-muted)] text-center break-keep">
        {step.description}
      </p>
    </article>
  );
};
