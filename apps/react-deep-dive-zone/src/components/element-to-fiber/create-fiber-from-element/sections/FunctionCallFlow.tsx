import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { CreateFiberFromElementContent, FlowStep } from '../content';
import {
  ArrowDownIcon,
  BoxIcon,
  PuzzleIcon,
  SparklesIcon,
  SplitIcon,
  WandIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: CreateFiberFromElementContent['flow'] };

const iconMap = {
  box: BoxIcon,
  wand: WandIcon,
  split: SplitIcon,
  puzzle: PuzzleIcon,
  sparkles: SparklesIcon,
} as const;

export const FunctionCallFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-1 mx-auto max-w-[720px]">
        {content.steps.map((step, idx) => (
          <li key={step.id} className="flex flex-col">
            <StepCard step={step} />
            {idx < content.steps.length - 1 && (
              <span className="flex justify-center py-1" aria-hidden="true">
                <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-sky-50 border border-sky-200/80 text-sky-600 dark:bg-sky-950/40 dark:border-sky-800/60 dark:text-sky-300">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepCard = ({ step }: { step: FlowStep }) => {
  const t = toneTokens[step.tone];
  const Icon = iconMap[step.iconName];
  return (
    <article
      className={cn(
        'group flex items-center gap-md rounded-xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-2xl border shrink-0',
          t.chip,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-sm">
          <span
            className={cn(
              'inline-flex items-center justify-center min-w-[1.5rem] h-6 rounded-full px-2',
              'font-mono text-[11px] font-bold tabular-nums border',
              t.chip,
            )}
            aria-hidden="true"
          >
            {step.number}
          </span>
          <h3
            className={cn(
              'font-mono text-xsm sm:text-sm font-bold tracking-tight break-keep',
              t.text,
            )}
          >
            {step.title}
          </h3>
        </div>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </div>
    </article>
  );
};
