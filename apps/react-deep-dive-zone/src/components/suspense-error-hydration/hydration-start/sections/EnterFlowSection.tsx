import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ZapIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['enterFlow'] };

export const EnterFlowSection = ({ content }: Props) => (
  <section aria-labelledby="enter-flow-heading" className="flex flex-col gap-md">
    <SectionHeader id="enter-flow-heading" number={content.number} title={content.title} />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:flex lg:flex-row items-stretch">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          return (
            <li
              key={step.label}
              className="flex flex-col lg:flex-row items-stretch gap-2 lg:flex-1"
            >
              <div
                className={cn(
                  'flex flex-1 flex-col gap-2 rounded-xl border-2 p-md',
                  step.highlight
                    ? 'border-blue-500 bg-blue-50 shadow-[0_2px_0_rgba(59,130,246,0.25)] dark:border-blue-400 dark:bg-blue-950/40'
                    : 'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
                  'transition-transform motion-safe:hover:-translate-y-0.5',
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-[11px] font-bold tabular-nums text-white',
                      step.highlight
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-slate-400 dark:bg-slate-500',
                    )}
                  >
                    {i + 1}
                  </span>
                  {step.highlight && (
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
                    >
                      <ZapIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                </div>
                <span
                  className={cn(
                    'text-xsm font-mono font-bold break-keep',
                    step.highlight ? 'text-blue-700 dark:text-blue-200' : 'text-[var(--term-fg)]',
                  )}
                >
                  {step.label}
                </span>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
                >
                  <ArrowRightIcon className="hidden lg:block h-4 w-4" />
                  <ArrowDownIcon className="lg:hidden h-4 w-4" />
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
