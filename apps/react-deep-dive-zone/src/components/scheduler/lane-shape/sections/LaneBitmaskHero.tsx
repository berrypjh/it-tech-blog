import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { BitCellRow } from '../../_shared/BitCellRow';
import { laneCardBorder, laneDot, laneIconBox, laneTextStrong } from '../../_shared/laneAccent';
import type { LaneAccent, LaneBitmaskContent } from '../content';
import { LayersIcon, RepeatIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: LaneBitmaskContent['hero'] };

const heroIcon: Record<LaneAccent, typeof ZapIcon> = {
  sync: ZapIcon,
  inputContinuous: ZapIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RepeatIcon,
  offscreen: LayersIcon,
};

export const LaneBitmaskHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-reconciler/lane-bitmask.md"
      suffix={<span className="text-[var(--term-dim)]">{' // Lane | Lanes | pendingLanes'}</span>}
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
      {/* LEFT: heading + subtitle */}
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

        <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
          <span className="inline-block h-px w-8 bg-[var(--term-border)]" />
          <span>SyncLane | DefaultLane | TransitionLane &rarr; bitmask</span>
        </div>
      </div>

      {/* RIGHT: diagram */}
      <div className="flex flex-col gap-md">
        {/* lane cards */}
        <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4">
          {content.laneCards.map((lc) => {
            const Icon = heroIcon[lc.accent];
            return (
              <li
                key={lc.name}
                className={cn(
                  'relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-colors',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  laneCardBorder[lc.accent],
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      laneIconBox[lc.accent],
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span
                    className={cn(
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      laneTextStrong[lc.accent],
                    )}
                  >
                    Lane
                  </span>
                </header>
                <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {lc.name}
                </h3>
                <BitCellRow bits={lc.bits} accent={lc.accent} size="md" />
                {/* connector down */}
                <span
                  aria-hidden="true"
                  className={cn(
                    'absolute left-1/2 -translate-x-1/2 -bottom-3 h-3 w-px border-l-2 border-dashed',
                    lc.accent === 'sync' && 'border-blue-400 dark:border-blue-500',
                    lc.accent === 'default' && 'border-teal-400 dark:border-teal-500',
                    lc.accent === 'transition' && 'border-violet-400 dark:border-violet-500',
                  )}
                />
              </li>
            );
          })}
        </ol>

        {/* dotted bridge */}
        <div
          aria-hidden="true"
          className="hidden md:block h-px border-t border-dashed border-[var(--term-border)] mx-md"
        />

        {/* result card */}
        <article
          className={cn(
            'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-300/90 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
            'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
              >
                <SparklesIcon className="h-4 w-4" />
              </span>
              <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
                {content.result.title}
              </h2>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
              merged
            </span>
          </header>

          <BitCellRow
            bits={content.result.bits}
            activeIndexes={content.result.activeIndexes}
            accent="sync"
            ranges={[
              { start: 0, length: 3, accent: 'transition' },
              { start: 10, length: 1, accent: 'default' },
              { start: 14, length: 2, accent: 'sync' },
            ]}
            size="lg"
            className="overflow-x-auto"
            srLabel="lane bitmask 1110000000100010"
          />

          <ul className="flex flex-wrap gap-2 text-[10px] sm:text-xsm">
            {(['transition', 'default', 'sync'] as LaneAccent[]).map((a) => (
              <li
                key={a}
                className="inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5"
              >
                <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', laneDot[a])} />
                <span className={cn('font-mono', laneTextStrong[a])}>
                  {a === 'sync' ? 'SyncLane' : a === 'default' ? 'DefaultLane' : 'TransitionLane'}
                </span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);
