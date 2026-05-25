import { cn } from '@it-tech-blog/utils';

import type { BranchKind, WhyFailableRenderContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  RefreshCcwIcon,
  RotateCcwIcon,
  ShieldCheckIcon,
} from '../icons';
import { branchAccent } from '../tone';

type Props = { content: WhyFailableRenderContent['flowMap'] };

const endStateIcon: Record<BranchKind, React.ComponentType<{ className?: string }>> = {
  suspense: RefreshCcwIcon,
  error: RotateCcwIcon,
  hydration: CheckCircleIcon,
};

const endStateLargeIcon: Record<BranchKind, React.ComponentType<{ className?: string }>> = {
  suspense: RefreshCcwIcon,
  error: RotateCcwIcon,
  hydration: ShieldCheckIcon,
};

export const PartFlowMap = ({ content }: Props) => (
  <section aria-labelledby="flowmap-heading" className="flex flex-col gap-md">
    <header className="flex flex-col gap-1">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
        {content.eyebrow}
      </span>
      <h2
        id="flowmap-heading"
        className="text-xl sm:text-xxl font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
      <p className="text-xsm sm:text-sm text-[var(--term-muted)] break-keep">
        {content.description}
      </p>
    </header>

    <div
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="flex flex-col gap-md">
        {content.rows.map((row) => {
          const accent = branchAccent[row.kind];
          const EndIcon = endStateIcon[row.kind];
          const EndLargeIcon = endStateLargeIcon[row.kind];
          return (
            <li key={row.kind}>
              <div
                className={cn(
                  'flex flex-col lg:grid lg:grid-cols-[180px_1fr_56px] gap-3 lg:gap-md items-stretch',
                )}
              >
                {/* Label */}
                <div
                  className={cn(
                    'flex flex-col items-start justify-center gap-1 rounded-2xl border-2 px-md py-3',
                    accent.border,
                    accent.bg,
                  )}
                >
                  <span className={cn('text-md font-bold', accent.text)}>{row.label}</span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {row.sublabel}
                  </span>
                </div>

                {/* Steps */}
                <ol
                  className={cn(
                    'flex flex-wrap items-center gap-1.5 rounded-2xl border p-2',
                    'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
                  )}
                >
                  {row.steps.map((step, i) => (
                    <li key={step.label} className="flex items-center gap-1.5">
                      <span
                        className={cn(
                          'inline-flex items-center rounded-lg border px-2.5 py-1.5',
                          'text-[11px] font-mono font-bold bg-white dark:bg-[var(--term-bg)]',
                          accent.border,
                          accent.text,
                        )}
                      >
                        {step.label}
                      </span>
                      {i < row.steps.length - 1 && (
                        <ArrowRightIcon
                          aria-hidden="true"
                          className={cn('h-3.5 w-3.5 shrink-0', accent.text)}
                        />
                      )}
                    </li>
                  ))}
                </ol>

                {/* End state icon */}
                <div
                  className={cn(
                    'flex items-center justify-center gap-2 rounded-2xl border-2 px-3 py-2 lg:px-2',
                    accent.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                  )}
                >
                  <EndLargeIcon className={cn('h-6 w-6 hidden lg:block', accent.text)} />
                  <EndIcon className={cn('h-4 w-4 lg:hidden', accent.text)} />
                  <span
                    className={cn(
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      accent.text,
                    )}
                  >
                    {row.endStateLabel}
                  </span>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
