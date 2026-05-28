import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { CallPathCompressionContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: CallPathCompressionContent['summary'] };

export const KeySummarySection = ({ content }: Props) => {
  return (
    <section id="section-summary" aria-labelledby="heading-summary" className="space-y-lg">
      <SectionHeader
        id="summary"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          return (
            <li key={card.number}>
              <article
                className={cn(
                  'group flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_3px_0_var(--term-border)]',
                  t.border,
                  'transition-all motion-safe:hover:-translate-y-0.5',
                  t.borderHover,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'font-mono font-bold leading-none tracking-tight tabular-nums',
                    'text-[3.5rem] sm:text-[4rem]',
                    t.text,
                    'opacity-90',
                  )}
                >
                  {card.number}
                </span>

                <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.text}
                </p>

                <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep pt-sm border-t border-dashed border-[var(--term-border)]">
                  {card.sub}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
