import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TransitionDeferredContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  CompassIcon,
  GaugeIcon,
  HourglassIcon,
  LoaderIcon,
  SearchIcon,
  XIcon,
  ZapIcon,
} from '../icons';
import {
  responseCardBorder,
  responseIconBox,
  responsePill,
  responseTextStrong,
} from '../responseAccent';

type Props = { content: TransitionDeferredContent['simulation'] };

const SkeletonRow = ({ width, accent }: { width: number; accent: 'rose' | 'emerald' | 'blue' }) => {
  const bar = {
    rose: 'bg-rose-200/70 dark:bg-rose-900/40',
    emerald: 'bg-emerald-200/70 dark:bg-emerald-900/40',
    blue: 'bg-blue-200/70 dark:bg-blue-900/40',
  }[accent];
  const thumb = {
    rose: 'bg-rose-300/60 dark:bg-rose-800/40',
    emerald: 'bg-emerald-300/60 dark:bg-emerald-800/40',
    blue: 'bg-blue-300/60 dark:bg-blue-800/40',
  }[accent];
  return (
    <li className="flex items-center gap-2" aria-hidden="true">
      <span className={cn('h-6 w-6 shrink-0 rounded', thumb)} />
      <span className="flex flex-col gap-1 flex-1">
        <span className={cn('h-2 rounded', bar)} style={{ width: `${width}%` }} />
        <span className={cn('h-2 rounded opacity-70', bar)} style={{ width: `${width - 22}%` }} />
      </span>
    </li>
  );
};

export const ResponsivenessSimulationBoard = ({ content }: Props) => (
  <section aria-labelledby="heading-simulation">
    <NumberedSectionHeader
      id="simulation"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GaugeIcon className="h-5 w-5" />}
    />

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_minmax(0,1fr)] gap-md items-stretch">
      {/* BAD: plain update */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          responseCardBorder.rose,
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              responseIconBox.rose,
            )}
          >
            <XIcon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              responsePill.rose,
            )}
          >
            problem
          </span>
        </header>
        <h3
          className={cn(
            'text-md sm:text-lg font-bold leading-tight break-keep',
            responseTextStrong.rose,
          )}
        >
          {content.bad.title}
        </h3>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.bad.description}
        </p>

        {/* mock input */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2 rounded-xl border border-rose-200/80 bg-white px-3 py-2 dark:border-rose-800/60 dark:bg-slate-950/40"
        >
          <SearchIcon className="h-3.5 w-3.5 text-rose-600 dark:text-rose-300" />
          <span className="flex-1 font-mono text-xsm text-[var(--term-fg)]">
            {content.bad.inputValue}
          </span>
          <LoaderIcon className="h-3.5 w-3.5 text-rose-600 dark:text-rose-300 motion-safe:animate-spin motion-reduce:animate-none" />
        </div>

        {/* skeleton list with loading text */}
        <ul
          aria-hidden="true"
          className="flex flex-col gap-1.5 rounded-xl border border-rose-200/80 bg-white p-3 dark:border-rose-800/60 dark:bg-slate-950/40"
        >
          <SkeletonRow width={70} accent="rose" />
          <SkeletonRow width={62} accent="rose" />
          <li className="flex items-center justify-center gap-1.5 pt-1 text-rose-700 dark:text-rose-300">
            <LoaderIcon className="h-3.5 w-3.5 motion-safe:animate-spin motion-reduce:animate-none" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
              {content.bad.loadingText}
            </span>
          </li>
        </ul>
      </article>

      {/* VS badge */}
      <div aria-hidden="true" className="hidden lg:flex items-center justify-center self-center">
        <span
          className={cn(
            'inline-flex h-12 w-12 items-center justify-center rounded-full',
            'border-2 border-blue-300 bg-white text-blue-700 font-mono font-bold text-sm',
            'shadow-[0_3px_0_var(--term-border)]',
            'dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
          )}
        >
          {content.vsLabel}
        </span>
      </div>

      {/* GOOD: transition / deferred */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)]',
          responseCardBorder.emerald,
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
              responseIconBox.emerald,
            )}
          >
            <CheckCircleIcon className="h-5 w-5" />
          </span>
          <span
            className={cn(
              'inline-flex items-center rounded-full border px-2 py-0.5',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              responsePill.emerald,
            )}
          >
            smoother
          </span>
        </header>
        <h3
          className={cn(
            'text-md sm:text-lg font-bold leading-tight break-keep',
            responseTextStrong.emerald,
          )}
        >
          {content.good.title}
        </h3>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.good.description}
        </p>

        {/* mock input with immediate badge */}
        <div
          aria-hidden="true"
          className="flex items-center gap-2 rounded-xl border border-emerald-200/80 bg-white px-3 py-2 dark:border-emerald-800/60 dark:bg-slate-950/40"
        >
          <SearchIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
          <span className="flex-1 font-mono text-xsm text-[var(--term-fg)] truncate">
            {content.good.inputValue}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
            <ZapIcon className="h-2.5 w-2.5" />
            {content.good.immediateBadge}
          </span>
        </div>

        {/* deferred list */}
        <ul
          aria-hidden="true"
          className="flex flex-col gap-1.5 rounded-xl border border-blue-200/80 bg-white p-3 dark:border-blue-800/60 dark:bg-slate-950/40"
        >
          <SkeletonRow width={84} accent="blue" />
          <SkeletonRow width={70} accent="blue" />
          <li className="flex items-center gap-1.5 pt-1">
            <HourglassIcon className="h-3.5 w-3.5 text-blue-700 dark:text-blue-300" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.good.pendingText}
            </span>
            <span className="ml-auto inline-block h-1.5 flex-1 rounded-full bg-blue-100 dark:bg-blue-900/40 overflow-hidden">
              <span className="block h-full w-2/5 rounded-full bg-blue-500 dark:bg-blue-400" />
            </span>
          </li>
        </ul>
      </article>

      {/* HOW-TO */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <CompassIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.howTo.title}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.howTo.steps.map((step, i) => (
            <li
              key={step}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
              >
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <ul className="mt-auto flex flex-col gap-1.5">
          <li className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[10px] sm:text-xsm font-mono text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200 self-start">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-500" />
            {content.howTo.legendImmediate}
          </li>
          <li className="inline-flex items-center gap-1.5 rounded-full border border-blue-300/80 bg-blue-50 px-2 py-0.5 text-[10px] sm:text-xsm font-mono text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200 self-start">
            <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-blue-500" />
            {content.howTo.legendDeferred}
          </li>
        </ul>
      </article>

      {/* mobile VS divider */}
      <div aria-hidden="true" className="lg:hidden flex items-center justify-center gap-2 -my-2">
        <span className="h-px flex-1 bg-[var(--term-border)]" />
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 font-mono font-bold text-xsm dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200">
          {content.vsLabel}
        </span>
        <span className="h-px flex-1 bg-[var(--term-border)]" />
        <ArrowRightIcon className="hidden h-4 w-4" />
      </div>
    </div>
  </section>
);
