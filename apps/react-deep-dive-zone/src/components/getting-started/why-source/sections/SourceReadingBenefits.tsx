import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCardGrid, ToneCardItem } from '../../../shared/ToneCardGrid';
import { toneTokens } from '../../../shared/tones';
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

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              badge={card.badge}
            >
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
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
