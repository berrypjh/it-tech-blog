import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  HourglassIcon,
  RefreshCcwIcon,
  RouteIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
  XCircleIcon,
} from '../icons';
import { pathAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: PromiseVsErrorSplitContent['tree'] };

const thenableStepIcons = [HourglassIcon, RouteIcon, RefreshCcwIcon];
const errorStepIcons = [XCircleIcon, TriangleAlertIcon, ShieldCheckIcon];

export const TreeDiagramSection = ({ content }: Props) => {
  const t = pathAccent.thenable;
  const e = pathAccent.error;
  return (
    <section aria-labelledby="tree-heading" className="flex flex-col gap-md">
      <SectionHeader id="tree-heading" number={content.number} title={content.title} />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Root */}
        <div className="flex flex-col items-center gap-2">
          <div
            className={cn(
              'inline-flex flex-col items-center gap-0.5 rounded-2xl border-2 px-5 py-3',
              'border-slate-700 bg-slate-900 text-white shadow-[0_4px_0_rgba(15,23,42,0.2)]',
              'dark:border-slate-600',
            )}
          >
            <span className="text-md font-bold font-mono">{content.rootTitle}</span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300">
              {content.rootSubtitle}
            </span>
          </div>
          <div aria-hidden="true" className="h-6 w-px bg-slate-300 dark:bg-slate-600" />
          {/* horizontal bracket (desktop only) */}
          <div
            aria-hidden="true"
            className="hidden md:block h-px w-[70%] max-w-[640px] bg-slate-300 dark:bg-slate-600"
          />
        </div>

        {/* Two paths */}
        <div className="mt-2 grid grid-cols-1 gap-md md:grid-cols-2 md:gap-lg">
          {/* THENABLE path */}
          <div className="flex flex-col items-center gap-3">
            {/* mobile divider */}
            <span
              aria-hidden="true"
              className={cn(
                'md:hidden inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-300 font-mono text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <ArrowDownIcon className="h-3.5 w-3.5" />
              thenable
            </span>
            {/* desktop connector */}
            <div aria-hidden="true" className={cn('hidden md:block h-4 w-px', t.connector)} />

            <div className={cn('w-full max-w-md rounded-xl border-2 p-3', t.border, t.bg)}>
              <span
                className={cn(
                  'inline-block rounded bg-white px-2 py-0.5 font-mono text-[11px] font-bold dark:bg-slate-900',
                  t.text,
                )}
              >
                {content.thenableCondition.code}
              </span>
              <p className={cn('mt-2 text-xsm font-bold break-keep', t.text)}>
                {content.thenableCondition.label}
              </p>
            </div>

            <ol className="w-full max-w-md flex flex-col items-center gap-2">
              {content.thenableSteps.map((step, i) => {
                const Icon = thenableStepIcons[i] ?? HourglassIcon;
                return (
                  <li
                    key={step.title}
                    className={cn(
                      'flex items-start gap-2.5 w-full rounded-xl border-2 bg-white p-3',
                      'dark:bg-[var(--term-bg)]',
                      t.border,
                      'transition-transform motion-safe:hover:-translate-y-0.5',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
                        t.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className={cn('text-sm font-bold break-keep', t.text)}>
                        {step.title}
                      </span>
                      <span className="text-xsm text-[var(--term-muted)] break-keep">
                        {step.description}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* ERROR path */}
          <div className="flex flex-col items-center gap-3">
            <span
              aria-hidden="true"
              className={cn(
                'md:hidden inline-flex items-center gap-1 text-rose-600 dark:text-rose-300 font-mono text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <ArrowDownIcon className="h-3.5 w-3.5" />
              error
            </span>
            <div aria-hidden="true" className={cn('hidden md:block h-4 w-px', e.connector)} />

            <div className={cn('w-full max-w-md rounded-xl border-2 p-3', e.border, e.bg)}>
              <span
                className={cn(
                  'inline-block rounded bg-white px-2 py-0.5 font-mono text-[11px] font-bold dark:bg-slate-900',
                  e.text,
                )}
              >
                {content.errorCondition.code}
              </span>
              <p className={cn('mt-2 text-xsm font-bold break-keep', e.text)}>
                {content.errorCondition.label}
              </p>
            </div>

            <ol className="w-full max-w-md flex flex-col items-center gap-2">
              {content.errorSteps.map((step, i) => {
                const Icon = errorStepIcons[i] ?? TriangleAlertIcon;
                return (
                  <li
                    key={step.title}
                    className={cn(
                      'flex items-start gap-2.5 w-full rounded-xl border-2 bg-white p-3',
                      'dark:bg-[var(--term-bg)]',
                      e.border,
                      'transition-transform motion-safe:hover:-translate-y-0.5',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border',
                        e.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className={cn('text-sm font-bold break-keep', e.text)}>
                        {step.title}
                      </span>
                      <span className="text-xsm text-[var(--term-muted)] break-keep">
                        {step.description}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* path labels at bottom */}
        <p className="sr-only">
          thenable path → {content.thenableSteps.map((s) => s.title).join(' → ')} | error path →{' '}
          {content.errorSteps.map((s) => s.title).join(' → ')}
        </p>

        {/* visual end arrow legend */}
        <div className="mt-md hidden md:grid grid-cols-2 gap-md text-center">
          <span
            className={cn(
              'inline-flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold',
              t.text,
            )}
          >
            <ArrowRightIcon className="h-3.5 w-3.5 rotate-90" />
            thenable path
          </span>
          <span
            className={cn(
              'inline-flex items-center justify-center gap-1.5 text-[11px] font-mono font-bold',
              e.text,
            )}
          >
            <ArrowRightIcon className="h-3.5 w-3.5 rotate-90" />
            error path
          </span>
        </div>
      </div>
    </section>
  );
};
