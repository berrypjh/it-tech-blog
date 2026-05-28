import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { RootSchedulerContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  DatabaseIcon,
  TargetIcon,
  ZapIcon,
} from '../icons';
import { schedDot, schedIconBox, schedPill, schedTextStrong } from '../schedulerAccent';

type Props = { content: RootSchedulerContent['hero'] };

export const RootSchedulerHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/root-scheduler.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // pendingLanes → nextLanes → sync | async'}
        </span>
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
      {/* LEFT */}
      <div className="flex flex-col gap-md justify-center">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[2]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[44ch]">
          {content.subtitle}
        </p>
      </div>

      {/* RIGHT: 3-step diagram */}
      <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
        {/* Step 1: pendingLanes */}
        <li
          className={cn(
            'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
            'border-blue-300/80 bg-gradient-to-br from-blue-50/60 via-white to-teal-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                schedIconBox.blue,
              )}
            >
              <DatabaseIcon className="h-4 w-4" />
            </span>
            <span
              className={cn('font-mono text-[10px] uppercase tracking-wider', schedTextStrong.blue)}
            >
              step 1
            </span>
          </header>
          <code className="font-mono text-xsm sm:text-sm font-bold text-blue-700 dark:text-blue-300 break-all">
            {content.step1.title}
          </code>
          <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {content.step1.body}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {content.step1.lanes.map((lane) => (
              <li
                key={lane.label}
                className={cn(
                  'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[10px] sm:text-[11px]',
                  schedPill[lane.accent],
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn('block h-1.5 w-1.5 rounded-full', schedDot[lane.accent])}
                />
                {lane.label}
              </li>
            ))}
          </ul>

          {/* arrow */}
          <span
            aria-hidden="true"
            className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
          >
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
          <span
            aria-hidden="true"
            className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
          >
            <ArrowDownIcon className="h-4 w-4" />
          </span>
        </li>

        {/* Step 2: selected nextLanes (strong blue) */}
        <li
          className={cn(
            'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
            'border-blue-500 bg-gradient-to-br from-blue-100/80 via-blue-50/60 to-blue-50/30 shadow-[0_3px_0_rgba(29,78,216,0.25)] dark:border-blue-400 dark:from-blue-950/50 dark:via-blue-950/30 dark:to-[var(--term-bg)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                schedIconBox.blue,
              )}
            >
              <TargetIcon className="h-4 w-4" />
            </span>
            <span
              className={cn(
                'font-mono text-[10px] uppercase tracking-wider font-bold',
                schedTextStrong.blue,
              )}
            >
              selected
            </span>
          </header>
          <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', schedTextStrong.blue)}>
            {content.step2.title}
          </h3>
          <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
            {content.step2.body}
          </p>
          <span
            className={cn(
              'inline-flex items-center self-start gap-2 rounded-xl border-2 px-3 py-1.5',
              'font-mono text-xsm sm:text-sm font-bold',
              'border-blue-400 bg-blue-100 text-blue-800 dark:border-blue-400 dark:bg-blue-950/50 dark:text-blue-200',
            )}
          >
            <span aria-hidden="true" className="inline-block h-2 w-2 rounded-full bg-blue-500" />
            {content.step2.selected}
          </span>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.step2.footer}
          </p>

          <span
            aria-hidden="true"
            className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
          >
            <ArrowRightIcon className="h-3.5 w-3.5" />
          </span>
          <span
            aria-hidden="true"
            className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
          >
            <ArrowDownIcon className="h-4 w-4" />
          </span>
        </li>

        {/* Step 3: execution path */}
        <li
          className={cn(
            'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
            'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
            'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-violet-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                schedIconBox.teal,
              )}
            >
              <ClockIcon className="h-4 w-4" />
            </span>
            <span
              className={cn('font-mono text-[10px] uppercase tracking-wider', schedTextStrong.teal)}
            >
              step 3
            </span>
          </header>
          <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', schedTextStrong.teal)}>
            {content.step3.title}
          </h3>
          <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep font-mono">
            {content.step3.body}
          </p>
          <ul className="flex flex-col gap-1.5">
            {content.step3.paths.map((p) => (
              <li
                key={p.label}
                className={cn(
                  'inline-flex items-center gap-2 rounded-xl border px-3 py-1.5',
                  'text-[11px] sm:text-xsm font-mono',
                  p.accent === 'blue'
                    ? 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200'
                    : 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
                )}
              >
                {p.accent === 'blue' ? (
                  <ZapIcon aria-hidden="true" className="h-3.5 w-3.5" />
                ) : (
                  <ClockIcon aria-hidden="true" className="h-3.5 w-3.5" />
                )}
                {p.label}
              </li>
            ))}
          </ul>
        </li>
      </ol>
    </div>
  </section>
);
