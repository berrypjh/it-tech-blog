import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommonFlowStep, WorkLoopContent } from '../content';
import { ArrowDownIcon, RotateCwIcon, WorkflowIcon } from '../icons';

type Props = { content: WorkLoopContent['common'] };

export const PerformUnitRepeatFlow = ({ content }: Props) => (
  <section
    id="common-loop"
    aria-labelledby="heading-common-loop"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="common-loop"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-violet-50/25 to-sky-50/20',
        'dark:from-[var(--term-bg)] dark:via-violet-950/12 dark:to-sky-950/12',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// while / do-while → performUnitOfWork → next fiber'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700/80 dark:text-violet-300/80 rounded-md border border-violet-200/70 dark:border-violet-800/60 px-2 py-0.5">
          shared structure
        </span>
      </header>

      <ol className="mx-auto flex w-full max-w-[640px] flex-col items-stretch">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <StepCard step={step} highlight={idx === 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-5 w-5" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepCard = ({ step, highlight }: { step: CommonFlowStep; highlight: boolean }) => {
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] gap-md items-center rounded-2xl border bg-[var(--term-bg)] p-md',
        highlight ? cn('border-2', t.border) : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
          t.chip,
        )}
      >
        <RotateCwIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.text)}>
          {step.title}
        </h3>
        <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};
