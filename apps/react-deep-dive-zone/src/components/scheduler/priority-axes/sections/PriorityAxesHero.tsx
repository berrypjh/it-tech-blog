import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import type { AxisAccent, ThreePriorityAxesContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ClockIcon, LayersIcon, ZapIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['hero'] };

const axisIcon: Record<AxisAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: LayersIcon,
  violet: ClockIcon,
};

export const PriorityAxesHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/priority-axes.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // event-priority → lane → scheduler-priority'}
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

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
      {/* LEFT: heading + subtitle */}
      <div className="flex flex-col gap-md justify-center">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.8rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[40ch]">
          {content.subtitle}
        </p>

        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
          <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
          <span>event &rarr; lane &rarr; scheduler</span>
        </div>
      </div>

      {/* RIGHT: 3-card flow */}
      <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
        {content.axes.map((axis, i) => {
          const isLast = i === content.axes.length - 1;
          const Icon = axisIcon[axis.accent];
          return (
            <li
              key={axis.label}
              className={cn(
                'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                axisCardBorder[axis.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                    axisIconBox[axis.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums',
                    axisNumberBadge[axis.accent],
                  )}
                >
                  {axis.number}
                </span>
              </header>

              <div className="flex flex-col gap-0.5">
                <p
                  className={cn(
                    'text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider',
                    axisTextStrong[axis.accent],
                  )}
                >
                  {axis.label}
                </p>
                <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {axis.title}
                </h3>
              </div>

              <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {axis.subtitle}
              </p>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden md:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
