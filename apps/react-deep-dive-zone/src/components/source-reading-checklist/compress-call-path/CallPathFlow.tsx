import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { CallStep } from './content';
import { ArrowDownIcon } from './icons';
import { getStepClasses, StepBadge } from './StepBadge';

type Props = {
  flow: CallStep[];
  className?: string;
};

/**
 * 가로 세그먼트 + 작은 화살표로 이뤄진 call path flow. 좁은 화면에서는 자동 줄바꿈된다.
 */
export const CallPathFlow = ({ flow, className }: Props) => {
  return (
    <ol
      className={cn(
        'flex flex-col gap-0 rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
        'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        className,
      )}
    >
      {flow.map((step, i) => {
        const t = getStepClasses(step.kind);
        const isLast = i === flow.length - 1;
        return (
          <Fragment key={`${step.fn}-${i}`}>
            <li>
              <article
                className={cn(
                  'group flex items-start gap-3 rounded-xl border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2',
                    t.border,
                    t.chip,
                    'font-mono text-[11px] font-bold tabular-nums',
                  )}
                >
                  {i + 1}
                </span>
                <div className="flex flex-col gap-1 min-w-0 flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <code className={cn('font-mono text-xsm sm:text-sm font-bold', t.text)}>
                      {step.fn}
                    </code>
                    <StepBadge kind={step.kind} size="sm" />
                  </div>
                  {step.note && (
                    <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                      {step.note}
                    </p>
                  )}
                </div>
              </article>
            </li>
            {!isLast && (
              <span aria-hidden="true" className="flex items-center justify-center py-1">
                <ArrowDownIcon className="h-3.5 w-3.5 text-cyan-500" />
              </span>
            )}
          </Fragment>
        );
      })}
    </ol>
  );
};
