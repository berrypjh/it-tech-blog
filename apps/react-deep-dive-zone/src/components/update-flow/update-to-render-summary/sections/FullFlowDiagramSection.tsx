import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, UpdateToRenderSummaryContent } from '../content';
import { ArrowDownIcon, WorkflowIcon } from '../icons';

import { flowIconMap } from './SummaryHero';

type Props = { content: UpdateToRenderSummaryContent['bigFlow'] };

export const FullFlowDiagramSection = ({ content }: Props) => (
  <section id="big-flow" aria-labelledby="heading-big-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="big-flow"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-violet-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// click → setState → ... → Render Phase'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          14 ordered steps
        </span>
      </header>

      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.number} className="flex flex-col">
            <BigStepRow step={step} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-1 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const BigStepRow = ({ step }: { step: FlowStep }) => {
  const Icon = flowIconMap[step.iconName];
  const t = toneTokens[step.tone];
  return (
    <article
      className={cn(
        'relative grid grid-cols-[auto_minmax(0,_1fr)] gap-sm sm:gap-md items-center rounded-2xl border bg-[var(--term-bg)] p-md',
        step.final
          ? 'border-2 border-violet-300/80 dark:border-violet-700/70 bg-violet-50/40 dark:bg-violet-950/25'
          : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-12 w-12 items-center justify-center rounded-2xl border',
          step.final
            ? 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60'
            : t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      <div className="flex flex-col gap-0.5 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              'inline-flex h-5 min-w-[1.75rem] items-center justify-center rounded-full px-1.5',
              'text-[10px] font-mono font-bold tabular-nums',
              step.final
                ? 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200'
                : t.chip,
            )}
          >
            {step.number}
          </span>
          <h3
            className={cn(
              'text-xsm sm:text-sm md:text-md font-mono font-bold leading-tight',
              'break-words [word-break:break-word] [overflow-wrap:anywhere]',
              step.final ? 'text-violet-800 dark:text-violet-100' : t.text,
            )}
          >
            {step.title}
          </h3>
        </div>
        <p
          className={cn(
            'text-xxsm sm:text-xsm leading-snug break-keep',
            step.final
              ? 'text-violet-900/85 dark:text-violet-100/85 font-bold'
              : 'text-[var(--term-muted)]',
          )}
        >
          {step.description}
        </p>
      </div>

      {step.final && (
        <span
          aria-hidden="true"
          className={cn(
            'absolute top-2 right-2 inline-flex items-center rounded-md border px-1.5 py-0.5',
            'border-violet-300/70 bg-violet-100/70 text-[9px] font-mono uppercase tracking-wider text-violet-700',
            'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          next
        </span>
      )}
    </article>
  );
};
