import { cn } from '@it-tech-blog/utils';

import {
  axisCardBorder,
  axisCoreBox,
  axisIconBox,
  axisNumberBadge,
  axisPill,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AxisAccent, AxisCard, ThreePriorityAxesContent } from '../content';
import { ClockIcon, LayersIcon, MapIcon, TargetIcon, ZapIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['overview']; axes: AxisCard[] };

const axisIcon: Record<AxisAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: LayersIcon,
  violet: ClockIcon,
};

export const PriorityAxesOverview = ({ content, axes }: Props) => (
  <section aria-labelledby="heading-overview">
    <NumberedSectionHeader
      id="overview"
      number={2}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MapIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {axes.map((axis) => {
        const Icon = axisIcon[axis.accent];
        return (
          <li key={axis.label} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg overflow-hidden',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                axisCardBorder[axis.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                    'text-md font-mono font-bold tabular-nums shadow-[0_3px_0_rgba(0,0,0,0.08)]',
                    axisNumberBadge[axis.accent],
                  )}
                >
                  {axis.number}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                    axisIconBox[axis.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
              </header>

              <div className="flex flex-col gap-1">
                <p
                  className={cn(
                    'text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider',
                    axisTextStrong[axis.accent],
                  )}
                >
                  {axis.label}
                </p>
                <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {axis.title}
                </h3>
                <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
                  {axis.subtitle}
                </p>
              </div>

              <span
                className={cn(
                  'inline-flex items-center self-start rounded-full border px-3 py-1',
                  'font-mono text-[11px] sm:text-xsm font-semibold break-keep',
                  axisPill[axis.accent],
                )}
              >
                {axis.examplePill}
              </span>

              <div
                className={cn(
                  'mt-auto flex items-start gap-2 rounded-xl border-2 px-md py-3',
                  axisCoreBox[axis.accent],
                )}
              >
                <TargetIcon
                  aria-hidden="true"
                  className={cn('mt-0.5 h-4 w-4 shrink-0', axisTextStrong[axis.accent])}
                />
                <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
                  {axis.coreQuestion}
                </p>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
