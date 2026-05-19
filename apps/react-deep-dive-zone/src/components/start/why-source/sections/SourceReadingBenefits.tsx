import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../components/SectionHeader';
import type { WhySourceContent } from '../content';
import { iconByName, SparkIcon } from '../icons';
import { toneTokens } from '../tones';

type Props = { content: WhySourceContent['benefits'] };

export const SourceReadingBenefits = ({ content }: Props) => {
  return (
    <section id="section-benefits" aria-labelledby="heading-benefits" className="space-y-lg">
      <SectionHeader
        id="benefits"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparkIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const t = toneTokens[card.tone];
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id}>
              <article
                className={cn(
                  'group flex flex-col gap-md h-full',
                  'rounded-lg border bg-[var(--term-bg)] p-md',
                  'transition-all hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                  'border-[var(--term-border)]',
                  t.borderHover,
                )}
              >
                <span
                  className={cn(
                    'inline-flex items-center justify-center w-11 h-11 rounded-md border',
                    t.chip,
                  )}
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </span>

                <h3 className={cn('text-md sm:text-lg font-bold tracking-tight', t.text)}>
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <span
                    className={cn(
                      'inline-flex items-center gap-1.5 px-2 py-1 rounded-full border text-[10px] font-medium',
                      t.chip,
                    )}
                  >
                    <span
                      className={cn('inline-block w-1 h-1 rounded-full', t.dot)}
                      aria-hidden="true"
                    />
                    {card.badge}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
