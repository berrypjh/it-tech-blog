import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, TimelineStep } from '../content';
import { ListChecksIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: CommitRootContent['timeline'] };

export const CommitTimelineOverviewSection = ({ content }: Props) => (
  <section
    id="commit-timeline-overview"
    aria-labelledby="heading-commit-timeline-overview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="commit-timeline-overview"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// commit phase: 5 step pipeline'}
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider rounded-md border px-2 py-0.5',
            toneTokens.teal.chip,
          )}
        >
          timeline
        </span>
      </header>

      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.number}>
            <StepRow
              step={step}
              isLast={idx === content.steps.length - 1}
              mutationBadge={content.mutationBadge}
              asyncBadge={content.asyncBadge}
            />
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const StepRow = ({
  step,
  isLast,
  mutationBadge,
  asyncBadge,
}: {
  step: TimelineStep;
  isLast: boolean;
  mutationBadge: string;
  asyncBadge: string;
}) => {
  const t = toneTokens[step.tone];
  return (
    <div className="flex w-full items-stretch gap-3">
      <div className="flex flex-col items-center pt-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border-2 text-xsm font-mono font-bold tabular-nums',
            t.fill.bg,
            t.fill.border,
            t.fill.text,
          )}
        >
          {step.number}
        </span>
        {!isLast && (
          <span
            aria-hidden="true"
            className="mt-1 mb-1 w-px flex-1 border-l border-dashed border-[var(--term-border)]"
          />
        )}
      </div>

      <article
        className={cn(
          'mb-2 flex-1 min-w-0 flex flex-col gap-1 rounded-lg border p-sm sm:p-md',
          step.isMutation
            ? cn('border-2', t.fill.border, t.fill.bg)
            : cn(t.border, 'bg-[var(--term-bg)]'),
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex flex-wrap items-center gap-2">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
            {step.title}
          </h3>
          {step.isMutation && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              <TargetIcon aria-hidden="true" className="h-3 w-3" />
              {mutationBadge}
            </span>
          )}
          {step.isAsync && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              <ZapIcon aria-hidden="true" className="h-3 w-3" />
              {asyncBadge}
            </span>
          )}
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
      </article>
    </div>
  );
};
