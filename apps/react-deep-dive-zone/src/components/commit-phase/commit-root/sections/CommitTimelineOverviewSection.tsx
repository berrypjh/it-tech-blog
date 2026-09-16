import { cx } from '@berrypjh/react-ui';
import { ListChecks, Target, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CommitRootContent, TimelineStep } from '../content';

type Props = { content: CommitRootContent['timeline'] };

export const CommitTimelineOverviewSection = ({ content }: Props) => (
  <section
    id="commit-timeline-overview"
    aria-labelledby="heading-commit-timeline-overview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="commit-timeline-overview"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
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
          className={cx(
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
        className={cx(
          'mb-2 flex-1 min-w-0 flex flex-col gap-1 rounded-lg border p-sm sm:p-md',
          step.isMutation
            ? cx('border-2', t.fill.border, t.fill.bg)
            : cx(t.border, 'bg-[var(--term-bg)]'),
          'shadow-[0_1px_0_var(--term-border)]',
        )}
      >
        <header className="flex flex-wrap items-center gap-2">
          <h3 className={cx('text-sm sm:text-md font-bold leading-tight break-keep', t.fill.text)}>
            {step.title}
          </h3>
          {step.isMutation && (
            <span
              className={cx(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              <Target aria-hidden="true" className="h-3.5 w-3.5" />
              {mutationBadge}
            </span>
          )}
          {step.isAsync && (
            <span
              className={cx(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              <Zap aria-hidden="true" className="h-3.5 w-3.5" />
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
