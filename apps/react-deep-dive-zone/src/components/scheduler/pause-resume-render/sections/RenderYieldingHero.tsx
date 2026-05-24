import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { RenderYieldingContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  Repeat2Icon,
} from '../icons';

type Props = { content: RenderYieldingContent['hero'] };

export const RenderYieldingHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="scheduler/yielding-continuation.md"
      suffix={
        <span className="text-[var(--term-dim)]">{' // workLoop → yield → continuation'}</span>
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
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[44ch]">
          {content.subtitle}
        </p>

        <ol className="hidden lg:flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
          {content.mainFlow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span>{step}</span>
              {i < content.mainFlow.length - 1 && <span aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>

      {/* RIGHT: Frame 1 → bridge → Frame 2 */}
      <div
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
          {/* Frame 1 */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
              'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60"
              >
                <PauseCircleIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {content.frame1.title}
              </span>
            </header>
            <ul className="flex flex-col gap-1">
              {content.frame1.items.map((item, i) => {
                const isYield = i === content.frame1.items.length - 1;
                return (
                  <li
                    key={item}
                    className={cn(
                      'flex items-center gap-1.5 text-[11px] sm:text-xsm leading-snug break-keep',
                      isYield
                        ? 'text-violet-700 dark:text-violet-300 font-bold'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-block h-1.5 w-1.5 rounded-full',
                        isYield ? 'bg-violet-500' : 'bg-blue-500',
                      )}
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
            <span className="mt-auto inline-flex items-center self-start gap-1.5 rounded-full border-2 border-violet-300/80 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200">
              <PauseCircleIcon aria-hidden="true" className="h-3 w-3" />
              {content.frame1.yieldBadge}
            </span>
          </article>

          {/* bridge */}
          <div className="flex flex-col items-center justify-center gap-2">
            <span
              aria-hidden="true"
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)] dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200"
            >
              <Repeat2Icon className="h-4 w-4" />
            </span>
            <p className="text-center font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] break-keep">
              {content.bridge.top}
              <br />
              {content.bridge.bottom}
            </p>
            <span className="md:hidden flex items-center text-[var(--term-muted)]">
              <ArrowDownIcon className="h-4 w-4" />
            </span>
            <span className="hidden md:inline-flex text-blue-500 dark:text-blue-400">
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>

          {/* Frame 2 */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30',
              'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
              >
                <PlayCircleIcon className="h-4 w-4" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {content.frame2.title}
              </span>
            </header>
            <ul className="flex flex-col gap-1">
              {content.frame2.items.map((item, i) => {
                const isComplete = i === content.frame2.items.length - 1;
                return (
                  <li
                    key={item}
                    className={cn(
                      'flex items-center gap-1.5 text-[11px] sm:text-xsm leading-snug break-keep',
                      isComplete
                        ? 'text-emerald-700 dark:text-emerald-300 font-bold'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-block h-1.5 w-1.5 rounded-full',
                        isComplete ? 'bg-emerald-500' : 'bg-teal-500',
                      )}
                    />
                    {item}
                  </li>
                );
              })}
            </ul>
            <span className="mt-auto inline-flex items-center self-start gap-1.5 rounded-full border-2 border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
              <CheckCircleIcon aria-hidden="true" className="h-3 w-3" />
              {content.frame2.continuationBadge}
            </span>
          </article>
        </div>
      </div>
    </div>
  </section>
);
