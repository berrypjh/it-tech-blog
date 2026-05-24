import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import { TrophyIcon } from '../icons';
import { toneAccent, toneCard, toneNumber } from '../styles';

type Props = { content: AdvancedWrapupContent['takeaways'] };

export const WholeChapterTakeaways = ({ content }: Props) => (
  <section aria-labelledby="heading-takeaways">
    <NumberedSectionHeader
      id="takeaways"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TrophyIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-md">
      {content.cards.map((card) => (
        <article
          key={card.num}
          className={cn(
            'group relative flex flex-col gap-md rounded-2xl border-2 p-md transition-all',
            'shadow-[0_2px_0_var(--term-border)]',
            'hover:-translate-y-0.5 motion-reduce:transform-none',
            toneCard[card.tone],
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
                'text-md font-mono font-bold tabular-nums shadow-[0_3px_0_rgba(0,0,0,0.08)]',
                toneNumber[card.tone],
              )}
            >
              {card.num}
            </span>
            <span
              className={cn(
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                toneAccent[card.tone],
              )}
            >
              takeaway / 0{card.num}
            </span>
          </header>

          <h3 className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
            {card.title}
          </h3>

          <p className="mt-auto text-[11px] leading-snug text-[var(--term-muted)] break-keep">
            {card.body}
          </p>
        </article>
      ))}
    </div>
  </section>
);
