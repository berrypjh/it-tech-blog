import { cn } from '@it-tech-blog/utils';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootAccent, RootPendingWorkContent } from '../content';
import { ArrowDownIcon, DatabaseIcon, PauseCircleIcon, WorkflowIcon, ZapIcon } from '../icons';

type Props = { content: RootPendingWorkContent['scheduleFlow'] };

const flowIcon: Record<RootAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: PauseCircleIcon,
  violet: DatabaseIcon,
};

export const ScheduleUpdateOnFiberFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-schedule-flow">
    <NumberedSectionHeader
      id="schedule-flow"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-2">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          const Icon = flowIcon[step.accent];
          return (
            <li key={step.title} className="flex flex-col">
              <div
                className={cn(
                  'flex items-start gap-3 rounded-2xl border-2 p-md transition-colors',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  axisCardBorder[step.accent],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums text-white',
                    axisNumberBadge[step.accent],
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                    axisIconBox[step.accent],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  {step.isCode ? (
                    <code
                      className={cn(
                        'font-mono text-xsm sm:text-sm font-bold break-all',
                        axisTextStrong[step.accent],
                      )}
                    >
                      {step.title}
                    </code>
                  ) : (
                    <h3
                      className={cn(
                        'text-xsm sm:text-sm font-bold leading-tight break-keep',
                        axisTextStrong[step.accent],
                      )}
                    >
                      {step.title}
                    </h3>
                  )}
                  <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                    {step.description}
                  </p>
                </div>
              </div>
              {!isLast && (
                <span aria-hidden="true" className="self-center my-1 text-[var(--term-muted)]">
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </article>
  </section>
);
