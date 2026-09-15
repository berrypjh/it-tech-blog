import { cx } from '@berrypjh/react-ui';
import { BarChart3, Eye, type LucideIcon, Puzzle, Search, Sparkles } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { BenefitCard, WhySourceContent } from '../content';

type Props = { content: WhySourceContent['benefits'] };

const cardIcon: Record<BenefitCard['id'], LucideIcon> = {
  render: Eye,
  debug: Search,
  performance: BarChart3,
  design: Puzzle,
};

export const SourceReadingBenefits = ({ content }: Props) => {
  return (
    <section id="benefits" aria-labelledby="heading-benefits" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="benefits"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              badge={card.badge}
            >
              <h3
                className={cx(
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
