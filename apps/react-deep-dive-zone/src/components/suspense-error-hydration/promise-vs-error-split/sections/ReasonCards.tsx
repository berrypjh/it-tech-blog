import { cn } from '@it-tech-blog/utils';

import type { PromiseVsErrorSplitContent } from '../content';
import {
  ArrowRightIcon,
  LoaderIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  TriangleAlertIcon,
} from '../icons';
import { pathAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = {
  suspense: PromiseVsErrorSplitContent['reasonSuspense'];
  error: PromiseVsErrorSplitContent['reasonError'];
};

export const ReasonCards = ({ suspense, error }: Props) => {
  const t = pathAccent.thenable;
  const e = pathAccent.error;
  return (
    <section
      aria-label="Reasoning for each path"
      className="grid grid-cols-1 gap-md lg:grid-cols-2"
    >
      {/* 06 Suspense reason */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          t.border,
          t.bg,
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <SectionHeader number={suspense.number} title={suspense.title} />
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {suspense.description}
        </p>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
          {/* left preview */}
          <div
            className={cn(
              'rounded-xl border-2 bg-white p-3',
              'dark:bg-[var(--term-bg)]',
              'border-emerald-200/70 dark:border-emerald-800/60',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {suspense.leftLabel}
            </span>
            <span className="block text-[11px] text-[var(--term-muted)] mb-2 break-keep">
              {suspense.leftSubLabel}
            </span>
            <div className="space-y-1.5">
              {[80, 60, 70, 50].map((w, i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  style={{ width: `${w}%` }}
                  className="block h-2 rounded bg-emerald-100 dark:bg-emerald-900/40"
                />
              ))}
            </div>
          </div>

          <ArrowRightIcon
            aria-hidden="true"
            className="hidden sm:block h-5 w-5 mx-auto text-emerald-500 dark:text-emerald-400"
          />
          <span aria-hidden="true" className="sm:hidden block h-2 w-px mx-auto bg-emerald-300" />

          {/* right preview */}
          <div
            className={cn('rounded-xl border-2 bg-white p-3', 'dark:bg-[var(--term-bg)]', t.border)}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {suspense.rightLabel}
            </span>
            <div className="mt-2 flex items-center gap-2">
              <LoaderIcon
                aria-hidden="true"
                className="h-4 w-4 motion-safe:animate-spin text-emerald-600 dark:text-emerald-300"
              />
              <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                {suspense.rightSubLabel}
              </span>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-emerald-100 dark:bg-emerald-900/40">
              <span className="block h-full w-1/2 rounded-full bg-emerald-500 dark:bg-emerald-400" />
            </div>
          </div>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {suspense.pills.map((p, i) => {
            const Icon = i === 0 ? RefreshCcwIcon : i === 1 ? LoaderIcon : ArrowRightIcon;
            return (
              <li
                key={p}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                  'text-[11px] font-bold',
                  t.chip,
                )}
              >
                <Icon className="h-3 w-3" aria-hidden="true" />
                {p}
              </li>
            );
          })}
        </ul>
      </article>

      {/* 07 Error reason */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          e.border,
          e.bg,
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <SectionHeader number={error.number} title={error.title} />
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {error.description}
        </p>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center">
          {/* left preview */}
          <div
            className={cn(
              'rounded-xl border-2 bg-white p-3',
              'dark:bg-[var(--term-bg)]',
              'border-rose-200/70 dark:border-rose-800/60',
            )}
          >
            <div className="flex items-center gap-2">
              <TriangleAlertIcon
                aria-hidden="true"
                className="h-4 w-4 text-rose-600 dark:text-rose-300"
              />
              <span className="text-xsm font-bold text-rose-700 dark:text-rose-200 break-keep">
                {error.leftLabel}
              </span>
            </div>
            <span className="block mt-1 text-[11px] text-[var(--term-muted)] break-keep">
              {error.leftSubLabel}
            </span>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  aria-hidden="true"
                  className="block h-1.5 rounded bg-rose-200 dark:bg-rose-900/50"
                />
              ))}
            </div>
          </div>

          <ArrowRightIcon
            aria-hidden="true"
            className="hidden sm:block h-5 w-5 mx-auto text-rose-500 dark:text-rose-400"
          />
          <span aria-hidden="true" className="sm:hidden block h-2 w-px mx-auto bg-rose-300" />

          {/* right preview */}
          <div
            className={cn('rounded-xl border-2 bg-white p-3', 'dark:bg-[var(--term-bg)]', e.border)}
          >
            <div className="flex items-center gap-2">
              <ShieldCheckIcon
                aria-hidden="true"
                className="h-4 w-4 text-rose-600 dark:text-rose-300"
              />
              <span className="text-xsm font-bold text-rose-700 dark:text-rose-200 break-keep">
                {error.rightLabel}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-[var(--term-muted)] break-keep">
              {error.rightSubLabel}
            </p>
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              className="mt-2 inline-flex items-center gap-1 rounded-md border border-rose-300 bg-rose-50 px-2 py-0.5 text-[10px] font-mono font-bold text-rose-700 dark:border-rose-700 dark:bg-rose-950/40 dark:text-rose-200"
            >
              <RefreshCcwIcon className="h-3 w-3" />
              retry
            </button>
          </div>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2">
          {error.pills.map((p, i) => {
            const Icon = i === 0 ? TriangleAlertIcon : i === 1 ? ShieldCheckIcon : RefreshCcwIcon;
            return (
              <li
                key={p}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                  'text-[11px] font-bold',
                  e.chip,
                )}
              >
                <Icon className="h-3 w-3" aria-hidden="true" />
                {p}
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
};
