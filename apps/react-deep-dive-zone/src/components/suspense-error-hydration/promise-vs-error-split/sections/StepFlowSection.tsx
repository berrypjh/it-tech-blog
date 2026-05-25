import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import { ArrowRightIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import { pathAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: PromiseVsErrorSplitContent['stepFlow'] };

export const StepFlowSection = ({ content }: Props) => (
  <section aria-labelledby="stepflow-heading" className="flex flex-col gap-md">
    <SectionHeader id="stepflow-heading" number={content.number} title={content.title} />

    <div
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 gap-md lg:gap-md lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-stretch">
        {/* steps */}
        <ol className="flex flex-col gap-2 lg:flex-row lg:items-stretch">
          {content.steps.map((step, i) => (
            <li
              key={step.number}
              className="flex flex-col lg:flex-row lg:items-stretch lg:flex-1 gap-2"
            >
              <article
                className={cn(
                  'flex flex-1 flex-col gap-2 rounded-2xl border-2 p-md',
                  'border-blue-200/80 bg-blue-50/40',
                  'dark:border-blue-800/60 dark:bg-blue-950/20',
                  'transition-transform motion-safe:hover:-translate-y-0.5',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-xsm font-mono font-bold tabular-nums dark:bg-blue-500"
                >
                  {step.number}
                </span>
                <h3 className="text-sm font-mono font-bold text-blue-700 dark:text-blue-200 break-keep">
                  {step.title}
                </h3>
                <p className="text-xsm text-[var(--term-fg)] break-keep">{step.description}</p>
              </article>
              {i < content.steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
                >
                  <ArrowRightIcon className="hidden lg:block h-4 w-4" />
                  <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90" />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* results */}
        <div className="flex flex-col gap-2">
          {content.results.map((res) => {
            const accent = pathAccent[res.path];
            const Icon = res.path === 'thenable' ? HourglassIcon : TriangleAlertIcon;
            return (
              <article
                key={res.badge}
                className={cn(
                  'flex flex-col gap-1.5 rounded-2xl border-2 p-md',
                  accent.border,
                  accent.bg,
                  'transition-transform motion-safe:hover:-translate-y-0.5',
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      accent.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                      accent.chip,
                    )}
                  >
                    {res.badge}
                  </span>
                </div>
                <h3 className={cn('text-sm font-bold break-keep', accent.text)}>{res.title}</h3>
                <p className="text-xsm text-[var(--term-fg)] break-keep">{res.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);
