import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CommitPhaseIntroContent, TimelineStep } from '../content';
import { MapIcon, TargetIcon } from '../icons';
import { commitToneTokens } from '../palette';

type Props = { content: CommitPhaseIntroContent['map'] };

export const CommitPhaseMapSection = ({ content }: Props) => (
  <section
    id="commit-phase-map"
    aria-labelledby="heading-commit-phase-map"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-phase-map"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-teal-50/30',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-teal-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// commit phase: 7 steps map'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          chapter map
        </span>
      </header>

      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.number}>
            <StepRow
              step={step}
              isLast={idx === content.steps.length - 1}
              mutationBadge={content.mutationBadge}
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
}: {
  step: TimelineStep;
  isLast: boolean;
  mutationBadge: string;
}) => {
  const t = commitToneTokens[step.tone];
  return (
    <div className="flex w-full items-stretch gap-3">
      {/* Number rail */}
      <div className="flex flex-col items-center pt-1">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-full border-2 text-xsm font-mono font-bold tabular-nums',
            t.chipSolid,
          )}
        >
          {step.number}
        </span>
        {!isLast && (
          <span aria-hidden="true" className="mt-1 mb-1 w-px flex-1 bg-[var(--term-border)]" />
        )}
      </div>

      {/* Card */}
      <article
        className={cn(
          'mb-2 flex-1 min-w-0 flex flex-col gap-1 rounded-2xl border p-sm sm:p-md',
          step.isMutation
            ? cn(t.borderStrong, 'border-2', t.bg)
            : cn(t.border, 'bg-[var(--term-bg)]'),
          'shadow-[0_1px_0_var(--term-border)]',
          'transition-colors',
          t.borderHover,
        )}
      >
        <header className="flex flex-wrap items-center gap-2">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
            {step.title}
          </h3>
          {step.isMutation && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
                t.chip,
                'font-bold',
              )}
            >
              <TargetIcon aria-hidden="true" className="h-3 w-3" />
              {mutationBadge}
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
