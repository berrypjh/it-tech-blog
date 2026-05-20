import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import { ToneBadge } from '../../_shared/ToneBadge';
import { ToneCard } from '../../_shared/ToneCard';
import { ToneIconBox } from '../../_shared/ToneIconBox';
import { toneTokens } from '../../_shared/tones';
import type { WhySourceContent } from '../content';
import { iconByName, SparkIcon } from '../icons';

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
          const Icon = iconByName[card.icon];

          return (
            <li key={card.id}>
              <ToneCard tone={card.tone}>
                <ToneIconBox tone={card.tone}>
                  <Icon className="h-5 w-5" />
                </ToneIconBox>

                <h3
                  className={cn(
                    'text-md sm:text-lg font-bold tracking-tight',
                    toneTokens[card.tone].text,
                  )}
                >
                  {card.title}
                </h3>

                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.body}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
                </div>
              </ToneCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
