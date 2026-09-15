import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Network,
  Package,
  PlayCircle,
  SplitSquareHorizontal,
  Zap,
} from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { PkgAccent, SchedulerPackageContent } from '../content';
import { pkgCardBorder, pkgIconBox, pkgNumberBadge, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['reactToScheduler'] };

const cardIcon: Record<PkgAccent, typeof Zap> = {
  blue: Cpu,
  teal: Package,
  violet: SplitSquareHorizontal,
  slate: PlayCircle,
  amber: PlayCircle,
};

export const ReactToSchedulerTaskFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-r2s">
    <NumberedSectionHeader
      id="r2s"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-stretch gap-3 sm:gap-4 relative">
      {content.cards.map((card, i) => {
        const isLast = i === content.cards.length - 1;
        const Icon = cardIcon[card.accent];
        return (
          <li
            key={card.title}
            className={cx(
              'relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-colors',
              'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
              pkgCardBorder[card.accent],
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-9 w-9 items-center justify-center rounded-full text-white text-[11px] font-mono font-bold tabular-nums',
                  pkgNumberBadge[card.accent],
                )}
              >
                {card.number}
              </span>
              <span
                aria-hidden="true"
                className={cx(
                  'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                  pkgIconBox[card.accent],
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
            </header>

            <div className="flex flex-col gap-0.5">
              <h3
                className={cx(
                  'text-xsm sm:text-sm font-bold break-keep font-mono',
                  pkgTextStrong[card.accent],
                )}
              >
                {card.title}
              </h3>
              <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                {card.subtitle}
              </span>
            </div>

            <ul className="mt-auto flex flex-col gap-1">
              {card.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-1.5 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
                >
                  <CheckCircle2
                    aria-hidden="true"
                    className={cx('mt-0.5 h-3 w-3 shrink-0', pkgTextStrong[card.accent])}
                  />
                  <span className="break-all">{item}</span>
                </li>
              ))}
            </ul>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden xl:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                >
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span
                  aria-hidden="true"
                  className="xl:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
