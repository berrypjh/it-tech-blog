import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { TransitionDeferredContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  ListIcon,
  SearchIcon,
  XIcon,
  ZapIcon,
} from '../icons';

type Props = { content: TransitionDeferredContent['hero'] };

const SkeletonRow = ({ width }: { width: number }) => (
  <li className="flex items-center gap-2" aria-hidden="true">
    <span className="h-7 w-7 shrink-0 rounded-md bg-blue-200/60 dark:bg-blue-900/40" />
    <span className="flex flex-col gap-1 flex-1">
      <span
        className="h-2 rounded bg-slate-200 dark:bg-slate-700/60"
        style={{ width: `${width}%` }}
      />
      <span
        className="h-2 rounded bg-slate-200/70 dark:bg-slate-700/40"
        style={{ width: `${width - 18}%` }}
      />
    </span>
  </li>
);

export const TransitionDeferredHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react/transition-deferred.md"
      suffix={
        <span className="text-[var(--term-dim)]">{' // input → instant · list → deferred'}</span>
      }
    />

    <ul className="mt-md flex flex-wrap items-center gap-2">
      {content.badges.map((badge) => (
        <li
          key={badge.label}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            badge.tone === 'blue' &&
              'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500',
            badge.tone === 'cyan' &&
              'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-1.5 w-1.5 rounded-full',
              badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
            )}
          />
          {badge.label}
        </li>
      ))}
    </ul>

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
      {/* LEFT: title + subtitle */}
      <div className="flex flex-col gap-md justify-center">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-white text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
          >
            {content.number}
          </span>
          <span className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.eyebrow}
          </span>
        </div>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[44ch]">
          {content.subtitle}
        </p>
      </div>

      {/* RIGHT: search + result diagram */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch relative">
        {/* search input card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-emerald-300/80 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30',
            'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
            >
              <SearchIcon className="h-4 w-4" />
            </span>
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.searchInput.title}
            </h2>
          </header>

          <div
            aria-hidden="true"
            className={cn(
              'flex items-center gap-2 rounded-xl border px-3 py-2',
              'border-emerald-200/80 bg-white shadow-inner',
              'dark:border-emerald-800/60 dark:bg-slate-950/40',
            )}
          >
            <SearchIcon className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-300" />
            <span className="flex-1 font-mono text-xsm text-[var(--term-fg)] truncate">
              {content.searchInput.value}
              <span className="ml-0.5 inline-block h-3 w-px align-middle bg-emerald-500 animate-pulse motion-reduce:animate-none" />
            </span>
            <XIcon className="h-3.5 w-3.5 text-[var(--term-muted)]" />
          </div>

          <div
            className={cn(
              'flex items-start gap-2 rounded-xl border-2 px-3 py-2',
              'border-emerald-300/80 bg-emerald-50/60 text-emerald-900',
              'dark:border-emerald-700/60 dark:bg-emerald-950/30 dark:text-emerald-100',
            )}
          >
            <ZapIcon
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300"
            />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                {content.searchInput.immediateLabel}
              </span>
              <span className="text-[11px] break-keep">{content.searchInput.immediateBody}</span>
            </div>
          </div>
        </article>

        {/* arrows */}
        <div className="hidden md:flex flex-col items-center justify-center gap-3 self-center">
          <div className="flex flex-col items-center gap-1">
            <ArrowRightIcon
              aria-hidden="true"
              className="h-5 w-5 text-emerald-500 dark:text-emerald-400"
              strokeWidth={2.4}
            />
            <span className="font-mono text-[10px] font-bold text-emerald-700 dark:text-emerald-300 whitespace-nowrap">
              {content.arrowLabelTop}
            </span>
          </div>
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)]"
          >
            <ClockIcon className="h-3.5 w-3.5" />
          </span>
          <div className="flex flex-col items-center gap-1">
            <ArrowRightIcon
              aria-hidden="true"
              className="h-5 w-5 text-blue-500 dark:text-blue-400"
              strokeWidth={2.4}
            />
            <span className="font-mono text-[10px] font-bold text-blue-700 dark:text-blue-300 whitespace-nowrap">
              {content.arrowLabelBottom}
            </span>
          </div>
        </div>

        {/* mobile arrow */}
        <div
          aria-hidden="true"
          className="md:hidden flex items-center justify-center gap-2 text-[var(--term-muted)]"
        >
          <ArrowDownIcon className="h-4 w-4 text-emerald-500" />
          <span className="font-mono text-[10px] text-emerald-700 dark:text-emerald-300">
            {content.arrowLabelTop} / {content.arrowLabelBottom}
          </span>
          <ArrowDownIcon className="h-4 w-4 text-blue-500" />
        </div>

        {/* result list card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30',
            'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
            >
              <ListIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col items-end">
              <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.resultList.title}
              </h2>
              <span className="font-mono text-[10px] text-[var(--term-muted)]">
                {content.resultList.subtitle}
              </span>
            </div>
          </header>

          <ul className="flex flex-col gap-2" aria-hidden="true">
            <SkeletonRow width={88} />
            <SkeletonRow width={72} />
            <SkeletonRow width={80} />
          </ul>

          <div
            className={cn(
              'flex items-start gap-2 rounded-xl border-2 px-3 py-2',
              'border-blue-300/80 bg-blue-50/60 text-blue-900',
              'dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
            )}
          >
            <ClockIcon
              aria-hidden="true"
              className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300"
            />
            <div className="flex flex-col">
              <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
                {content.resultList.deferredLabel}
              </span>
              <span className="text-[11px] break-keep">{content.resultList.deferredBody}</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
);
