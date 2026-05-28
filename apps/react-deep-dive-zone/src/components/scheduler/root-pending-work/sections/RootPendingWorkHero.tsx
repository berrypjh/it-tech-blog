import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { axisCardBorder, axisIconBox, axisTextStrong } from '../../_shared/axisAccent';
import type { RootAccent, RootPendingWorkContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ClockIcon, DatabaseIcon, ZapIcon } from '../icons';

type Props = { content: RootPendingWorkContent['hero'] };

const stepIcon: Record<RootAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: DatabaseIcon,
  violet: ClockIcon,
};

export const RootPendingWorkHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/root-pending-work.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // fiber → root.pendingLanes → scheduler'}
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
      {/* LEFT: title + subtitle */}
      <div className="flex flex-col gap-md justify-center">
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

        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
          <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
          <span>Fiber update | root.pendingLanes | Root Scheduler</span>
        </div>
      </div>

      {/* RIGHT: 3-step diagram */}
      <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-3 sm:gap-4 relative">
        {content.steps.map((step, i) => {
          const isLast = i === content.steps.length - 1;
          const Icon = stepIcon[step.accent];
          return (
            <li
              key={step.title}
              className={cn(
                'relative flex flex-col gap-3 rounded-2xl border-2 p-md transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                axisCardBorder[step.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                    axisIconBox[step.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] uppercase tracking-wider',
                    axisTextStrong[step.accent],
                  )}
                >
                  step {i + 1}
                </span>
              </header>

              <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                {step.title}
              </h3>

              <div
                className={cn(
                  'flex flex-col gap-0.5 rounded-xl border-2 border-dashed px-3 py-2',
                  step.accent === 'blue' &&
                    'border-blue-200/80 bg-blue-50/40 dark:border-blue-700/60 dark:bg-blue-950/20',
                  step.accent === 'teal' &&
                    'border-teal-200/80 bg-teal-50/40 dark:border-teal-700/60 dark:bg-teal-950/20',
                  step.accent === 'violet' &&
                    'border-violet-200/80 bg-violet-50/40 dark:border-violet-700/60 dark:bg-violet-950/20',
                )}
              >
                {step.content.map((line) => (
                  <code
                    key={line}
                    className={cn(
                      'font-mono text-[11px] sm:text-xsm break-all',
                      axisTextStrong[step.accent],
                    )}
                  >
                    {line}
                  </code>
                ))}
              </div>

              <p className="mt-auto font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {step.footer}
              </p>

              {!isLast && (
                <>
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
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
