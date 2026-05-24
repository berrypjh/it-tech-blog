import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import { laneCardBorder, laneIconBox, laneTextStrong } from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { CombinationCard, LaneAccent, LaneBitmaskContent } from '../content';
import {
  ArrowDownIcon,
  FlagIcon,
  GitMergeIcon,
  LayersIcon,
  LightbulbIcon,
  PlusIcon,
  ZapIcon,
} from '../icons';

type Props = { content: LaneBitmaskContent['combination'] };

const iconFor: Record<LaneAccent, typeof ZapIcon> = {
  sync: ZapIcon,
  inputContinuous: ZapIcon,
  default: LayersIcon,
  transition: FlagIcon,
  retry: FlagIcon,
  offscreen: LayersIcon,
};

const OperandCard = ({ data, isResult = false }: { data: CombinationCard; isResult?: boolean }) => {
  const Icon = iconFor[data.accent];
  return (
    <article
      className={cn(
        'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
        'transition-colors shadow-[0_2px_0_var(--term-border)]',
        laneCardBorder[data.accent],
        isResult && 'shadow-[0_3px_0_rgba(124,58,237,0.25)]',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
            laneIconBox[data.accent],
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        {isResult && (
          <span
            className={cn(
              'font-mono text-[10px] uppercase tracking-wider font-bold',
              laneTextStrong[data.accent],
            )}
          >
            result
          </span>
        )}
      </header>
      <h3
        className={cn(
          'text-sm sm:text-md font-bold leading-tight break-keep',
          laneTextStrong[data.accent],
        )}
      >
        {data.title}
      </h3>
      <BitCellRow
        bits={data.bits}
        activeIndexes={data.activeIndexes}
        accent={data.accent}
        size="lg"
        srLabel={`${data.title} bits ${data.bits}`}
      />
      <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
        {data.description}
      </p>
    </article>
  );
};

const Symbol = ({ kind }: { kind: 'plus' | 'equal' }) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex h-11 w-11 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full',
      'border-2 border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)]',
      'dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
    )}
  >
    {kind === 'plus' ? (
      <PlusIcon className="h-5 w-5" strokeWidth={2.6} />
    ) : (
      <span className="font-mono text-md font-bold">=</span>
    )}
  </span>
);

export const PendingLanesCombination = ({ content }: Props) => (
  <section aria-labelledby="heading-combination">
    <NumberedSectionHeader
      id="combination"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GitMergeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,9fr)_minmax(0,3fr)] gap-md items-stretch">
      {/* equation row */}
      <div
        aria-label="lane combination equation"
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
          <div className="flex-1">
            <OperandCard data={content.sync} />
          </div>
          <div className="flex items-center justify-center lg:py-0 py-1">
            <span className="lg:hidden">
              <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-muted)]" />
            </span>
            <span className="hidden lg:inline-flex">
              <Symbol kind="plus" />
            </span>
          </div>
          <div className="flex-1">
            <OperandCard data={content.def} />
          </div>
          <div className="flex items-center justify-center lg:py-0 py-1">
            <span className="lg:hidden">
              <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-muted)]" />
            </span>
            <span className="hidden lg:inline-flex">
              <Symbol kind="equal" />
            </span>
          </div>
          <div className="flex-1">
            <OperandCard data={content.result} isResult />
          </div>
        </div>
      </div>

      {/* core point */}
      <aside
        className={cn(
          'flex flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
          'border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30',
          'dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60"
          >
            <LightbulbIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              insight
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.corePoint.title}
            </h3>
          </div>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.corePoint.body}
        </p>
      </aside>
    </div>
  </section>
);
