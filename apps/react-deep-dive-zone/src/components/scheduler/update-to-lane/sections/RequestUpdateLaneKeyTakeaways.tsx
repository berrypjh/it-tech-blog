import { cn } from '@it-tech-blog/utils';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisTextStrong,
} from '../../_shared/axisAccent';
import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ContextAccent, RequestUpdateLaneContent } from '../content';
import { ClockIcon, RefreshIcon, TrophyIcon, ZapIcon } from '../icons';

type Props = { content: RequestUpdateLaneContent['takeaways'] };

const cardIcon: Record<ContextAccent, typeof ZapIcon> = {
  blue: ZapIcon,
  teal: ClockIcon,
  violet: RefreshIcon,
};

const iconWash: Record<ContextAccent, string> = {
  blue: 'text-blue-300/70 dark:text-blue-700/60',
  teal: 'text-teal-300/70 dark:text-teal-700/60',
  violet: 'text-violet-300/70 dark:text-violet-700/60',
};

export const RequestUpdateLaneKeyTakeaways = ({ content }: Props) => (
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
                axisCardBorder[card.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
                    axisIconBox[card.accent],
                  )}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-8 px-2 items-center justify-center rounded-full',
                    'text-[11px] font-mono font-bold tabular-nums shadow-[0_2px_0_rgba(0,0,0,0.08)]',
                    axisNumberBadge[card.accent],
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
                  iconWash[card.accent],
                )}
                strokeWidth={1.4}
              />

              <span
                aria-hidden="true"
                className={cn(
                  'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-2 py-0.5',
                  'font-mono text-[10px] uppercase tracking-wider',
                  axisTextStrong[card.accent],
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
