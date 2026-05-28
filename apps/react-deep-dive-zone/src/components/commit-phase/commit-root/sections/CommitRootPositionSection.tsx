import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { commitToneTokens } from '../../_shared/tones';
import type { CommitRootContent, PositionStep, PositionStepIcon } from '../content';
import {
  ArrowDownIcon,
  CalendarIcon,
  CheckCircleIcon,
  CpuIcon,
  GateIcon,
  ListIcon,
  MapIcon,
} from '../icons';

type Props = { content: CommitRootContent['position'] };

const iconMap: Record<PositionStepIcon, typeof CheckCircleIcon> = {
  calendar: CalendarIcon,
  cpu: CpuIcon,
  check: CheckCircleIcon,
  gate: GateIcon,
  list: ListIcon,
};

export const CommitRootPositionSection = ({ content }: Props) => (
  <section
    id="commit-root-position"
    aria-labelledby="heading-commit-root-position"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-root-position"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-teal-50/25',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-teal-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// update → render → commit-root → commit sub-phases'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-teal-700/80 dark:text-teal-300/80 rounded-md border border-teal-200/70 dark:border-teal-800/60 px-2 py-0.5">
          5 steps
        </span>
      </header>

      <ol className="flex flex-col">
        {content.steps.map((step, idx) => (
          <li key={step.title} className="flex flex-col">
            <PositionRow step={step} index={idx + 1} />
            {idx < content.steps.length - 1 && (
              <span aria-hidden="true" className="my-2 flex justify-center text-[var(--term-dim)]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            )}
          </li>
        ))}
      </ol>
    </article>
  </section>
);

const PositionRow = ({ step, index }: { step: PositionStep; index: number }) => {
  const Icon = iconMap[step.iconName];
  const t = commitToneTokens[step.tone];
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)_auto] gap-md items-start rounded-2xl border p-md',
        step.emphasis ? cn('border-2', t.borderStrong, t.bg) : cn(t.border, 'bg-[var(--term-bg)]'),
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-11 w-11 items-center justify-center rounded-xl border',
          t.chipSolid,
        )}
      >
        <Icon className="h-5 w-5" />
      </span>

      <div className="flex flex-col gap-1 min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
            {step.title}
          </h3>
          {step.emphasis && (
            <span
              className={cn(
                'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-bold',
                t.chip,
              )}
            >
              entry point
            </span>
          )}
        </div>
        <p className="text-xsm sm:text-sm leading-snug text-[var(--term-muted)] break-keep">
          {step.description}
        </p>
        {step.subItems && (
          <ul className="mt-1 flex flex-wrap gap-1.5">
            {step.subItems.map((sub) => (
              <li
                key={sub}
                className={cn(
                  'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono',
                  commitToneTokens.violet.chip,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('inline-block h-1 w-1 rounded-full', commitToneTokens.violet.dot)}
                />
                {sub}
              </li>
            ))}
          </ul>
        )}
      </div>

      <span
        aria-hidden="true"
        className={cn(
          'hidden sm:inline-flex h-7 w-7 items-center justify-center rounded-md border text-[11px] font-mono font-bold tabular-nums',
          t.chip,
        )}
      >
        {String(index).padStart(2, '0')}
      </span>
    </article>
  );
};
