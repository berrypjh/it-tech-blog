import { cn } from '@it-tech-blog/utils';

import { BitCellRow } from '../../_shared/BitCellRow';
import { laneCardBorder, laneIconBox, lanePill, laneTextStrong } from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneBitmaskContent, LaneVsLanesCard } from '../content';
import { CircleDotIcon, LayersIcon, SplitIcon } from '../icons';

type Props = { content: LaneBitmaskContent['laneVsLanes'] };

const Card = ({ data, kind }: { data: LaneVsLanesCard; kind: 'single' | 'multi' }) => {
  const Icon = kind === 'single' ? CircleDotIcon : LayersIcon;
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-colors',
        'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
        laneCardBorder[data.accent],
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border',
              laneIconBox[data.accent],
            )}
          >
            <Icon className="h-5 w-5" />
          </span>
          <div className="flex flex-col gap-0.5">
            <span
              className={cn(
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                laneTextStrong[data.accent],
              )}
            >
              {kind === 'single' ? 'single-bit' : 'multi-bit set'}
            </span>
            <h3 className="text-md sm:text-lg font-bold leading-tight text-[var(--term-fg)] break-keep">
              {data.title}
            </h3>
          </div>
        </div>
      </header>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {data.description}
      </p>

      <span
        className={cn(
          'inline-flex items-center self-start rounded-full border px-3 py-1',
          'font-mono text-[11px] sm:text-xsm font-semibold break-keep',
          lanePill[data.accent],
        )}
      >
        {data.example}
      </span>

      <div className="overflow-x-auto">
        <BitCellRow
          bits={data.bits}
          activeIndexes={data.activeIndexes}
          accent={data.accent}
          size="md"
          srLabel={`${data.title} bits ${data.bits}`}
        />
      </div>

      <p
        className={cn(
          'mt-auto text-[11px] sm:text-xsm font-mono uppercase tracking-wider',
          laneTextStrong[data.accent],
        )}
      >
        {data.bottom}
      </p>
    </article>
  );
};

export const LaneVsLanesCompare = ({ content }: Props) => (
  <section aria-labelledby="heading-lane-vs-lanes">
    <NumberedSectionHeader
      id="lane-vs-lanes"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<SplitIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      <Card data={content.lane} kind="single" />
      <Card data={content.lanes} kind="multi" />
    </div>
  </section>
);
