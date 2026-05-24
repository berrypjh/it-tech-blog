import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FlowStep } from '../content';
import {
  ArrowDownIcon,
  ChevronRightIcon,
  ClockIcon,
  MousePointerClickIcon,
  RepeatIcon,
  type ZapIcon,
} from '../icons';

export type FlowVariant = 'click' | 'transition' | 'deferred';

const variantStyle: Record<
  FlowVariant,
  {
    icon: typeof MousePointerClickIcon;
    card: string;
    headerIcon: string;
    stepBadge: string;
    arrow: string;
    headLabel: string;
    note: string;
  }
> = {
  click: {
    icon: MousePointerClickIcon,
    card: 'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
    headerIcon: 'bg-blue-600 text-white dark:bg-blue-500 shadow-[0_2px_0_rgba(29,78,216,0.3)]',
    stepBadge: 'bg-blue-600 text-white dark:bg-blue-500',
    arrow: 'text-blue-500 dark:text-blue-400',
    headLabel: 'text-blue-700 dark:text-blue-300',
    note: 'border-blue-200/80 bg-blue-50/80 text-blue-900 dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
  },
  transition: {
    icon: RepeatIcon,
    card: 'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
    headerIcon: 'bg-teal-600 text-white dark:bg-teal-500 shadow-[0_2px_0_rgba(13,148,136,0.3)]',
    stepBadge: 'bg-teal-600 text-white dark:bg-teal-500',
    arrow: 'text-teal-500 dark:text-teal-400',
    headLabel: 'text-teal-700 dark:text-teal-300',
    note: 'border-teal-200/80 bg-teal-50/80 text-teal-900 dark:border-teal-700/60 dark:bg-teal-950/30 dark:text-teal-100',
  },
  deferred: {
    icon: ClockIcon,
    card: 'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-indigo-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-indigo-950/10',
    headerIcon: 'bg-violet-600 text-white dark:bg-violet-500 shadow-[0_2px_0_rgba(124,58,237,0.3)]',
    stepBadge: 'bg-violet-600 text-white dark:bg-violet-500',
    arrow: 'text-violet-500 dark:text-violet-400',
    headLabel: 'text-violet-700 dark:text-violet-300',
    note: 'border-violet-200/80 bg-violet-50/80 text-violet-900 dark:border-violet-700/60 dark:bg-violet-950/30 dark:text-violet-100',
  },
};

type Props = {
  id: string;
  variant: FlowVariant;
  number: string;
  title: string;
  helper: string;
  steps: FlowStep[];
  note: string;
};

export const UpdateFlowSection = ({ id, variant, number, title, helper, steps, note }: Props) => {
  const v = variantStyle[variant];
  const HeaderIcon: typeof ZapIcon = v.icon;

  return (
    <section aria-labelledby={`heading-${id}`}>
      <NumberedSectionHeader
        id={id}
        number={number}
        eyebrow={helper}
        title={title}
        icon={<HeaderIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          v.card,
        )}
      >
        {/* horizontal pipeline (desktop) / vertical (mobile) */}
        <ol className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr md:items-stretch gap-2 md:gap-1">
          {steps.map((step, i) => {
            const isLast = i === steps.length - 1;
            return (
              <li key={step.label} className="contents md:contents">
                <div className="flex md:flex-col items-stretch md:items-stretch gap-1">
                  <article
                    className={cn(
                      'flex flex-col gap-1 rounded-xl border-2 p-2.5 flex-1 min-w-0',
                      'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                    )}
                  >
                    <header className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full',
                          'text-[10px] font-mono font-bold tabular-nums',
                          v.stepBadge,
                        )}
                      >
                        {i + 1}
                      </span>
                      <h3
                        className={cn(
                          'text-xsm sm:text-sm font-bold break-keep leading-snug',
                          v.headLabel,
                        )}
                      >
                        {step.label}
                      </h3>
                    </header>
                    <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                      {step.description}
                    </p>
                  </article>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className={cn('self-center inline-flex items-center justify-center', v.arrow)}
                    >
                      <span className="md:hidden">
                        <ArrowDownIcon className="h-4 w-4" />
                      </span>
                      <span className="hidden md:inline-flex">
                        <ChevronRightIcon className="h-4 w-4" />
                      </span>
                    </span>
                  )}
                </div>
              </li>
            );
          })}
        </ol>

        <p
          className={cn(
            'rounded-xl border-2 p-3 text-xsm sm:text-sm leading-relaxed break-keep',
            v.note,
          )}
        >
          {note}
        </p>
      </article>
    </section>
  );
};
