import { cn } from '@it-tech-blog/utils';

import {
  laneCardBorder,
  laneIconBox,
  laneNumberBadge,
  laneTextStrong,
} from '../../_shared/laneAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { LaneAccent, LaneBitmaskContent } from '../content';
import { CircleDotIcon, LayersIcon, RepeatIcon, TrophyIcon } from '../icons';

type Props = { content: LaneBitmaskContent['takeaways'] };

const cardIcon: Record<LaneAccent, typeof CircleDotIcon> = {
  sync: CircleDotIcon,
  inputContinuous: LayersIcon,
  default: LayersIcon,
  transition: RepeatIcon,
  retry: RepeatIcon,
  offscreen: LayersIcon,
};

const toneIconWash: Record<LaneAccent, string> = {
  sync: 'text-blue-300/70 dark:text-blue-700/60',
  inputContinuous: 'text-cyan-300/70 dark:text-cyan-700/60',
  default: 'text-teal-300/70 dark:text-teal-700/60',
  transition: 'text-violet-300/70 dark:text-violet-700/60',
  retry: 'text-cyan-300/70 dark:text-cyan-700/60',
  offscreen: 'text-amber-300/70 dark:text-amber-700/60',
};

export const LaneKeyTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-takeaways">
    <NumberedSectionHeader
      id="takeaways"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<TrophyIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = cardIcon[card.accent];
        return (
          <li key={card.title} className="h-full">
            <article
              className={cn(
                'group relative flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg overflow-hidden',
                'shadow-[0_2px_0_var(--term-border)] transition-all',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                laneCardBorder[card.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                    laneIconBox[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 px-2 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(0,0,0,0.08)]',
                    laneNumberBadge[card.accent],
                  )}
                >
                  {card.number}
                </span>
              </header>

              <h3 className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.title}
              </h3>

              <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>

              <Icon
                aria-hidden="true"
                className={cn(
                  'absolute -bottom-4 -right-4 h-20 w-20 pointer-events-none',
                  toneIconWash[card.accent],
                )}
                strokeWidth={1.4}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5',
                  'font-mono text-[10px] uppercase tracking-wider',
                  laneTextStrong[card.accent],
                  'border-[var(--term-border)] bg-[var(--term-bg)]',
                )}
              >
                takeaway · {card.number}
              </span>
            </article>
          </li>
        );
      })}
    </ul>
  </section>
);
