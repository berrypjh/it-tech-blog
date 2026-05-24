import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import {
  laneCardBorder,
  laneDot,
  laneIconBox,
  lanePill,
  laneTextStrong,
} from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent, LaneBitmaskContent } from '../content';
import {
  ArrowDownIcon,
  EyeOffIcon,
  LayersIcon,
  MousePointerClickIcon,
  RefreshIcon,
  RepeatIcon,
  SparklesIcon,
  WorkflowIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneBitmaskContent['multi'] };

const cardIcon: Record<LaneAccent, typeof ZapIcon> = {
  sync: MousePointerClickIcon,
  inputContinuous: ZapIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RefreshIcon,
  offscreen: EyeOffIcon,
};

export const MultipleLanesNeed = ({ content }: Props) => (
  <section aria-labelledby="heading-multi">
    <NumberedSectionHeader
      id="multi"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((c) => {
          const Icon = cardIcon[c.accent];
          return (
            <li key={c.title} className="h-full">
              <article
                className={cn(
                  'group relative flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
                  'shadow-[0_2px_0_var(--term-border)] transition-all',
                  'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                  laneCardBorder[c.accent],
                )}
              >
                <header className="flex items-center justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border',
                      laneIconBox[c.accent],
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    className={cn(
                      'inline-flex items-center self-start rounded-full border px-2 py-0.5',
                      'text-[10px] font-mono font-bold uppercase tracking-wider',
                      lanePill[c.accent],
                    )}
                  >
                    {c.badge}
                  </span>
                </header>
                <h3 className="text-sm sm:text-md font-bold leading-tight text-[var(--term-fg)] break-keep">
                  {c.title}
                </h3>
                <p className="mt-auto text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {c.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>

      {/* connector */}
      <div aria-hidden="true" className="hidden lg:flex justify-center text-[var(--term-muted)]">
        <ArrowDownIcon className="h-5 w-5" />
      </div>

      {/* root.pendingLanes box */}
      <article
        aria-label={content.root.title}
        className={cn(
          'flex flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-300/90 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/50',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.root.top}
        </p>

        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <SparklesIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep font-mono">
            {content.root.title}
          </h3>
        </header>

        <div className="overflow-x-auto">
          <BitCellRow
            bits={content.root.bits}
            activeIndexes={content.root.activeIndexes}
            ranges={content.root.ranges}
            accent="sync"
            size="lg"
            srLabel={`root.pendingLanes bits ${content.root.bits}`}
          />
        </div>

        <ul className="flex flex-wrap gap-2 text-[10px] sm:text-xsm">
          {(['transition', 'retry', 'offscreen'] as LaneAccent[]).map((a) => (
            <li
              key={a}
              className="inline-flex items-center gap-1.5 rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-0.5"
            >
              <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', laneDot[a])} />
              <span className={cn('font-mono', laneTextStrong[a])}>
                {a === 'transition'
                  ? 'TransitionLane'
                  : a === 'retry'
                    ? 'RetryLane'
                    : 'OffscreenLane'}
              </span>
            </li>
          ))}
        </ul>

        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.root.bottom}
        </p>
      </article>
    </div>
  </section>
);
