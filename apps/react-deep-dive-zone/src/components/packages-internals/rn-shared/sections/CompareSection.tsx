import { type LucideIcon, Monitor, Smartphone, Star } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CompareCard, RnContent } from '../content';

type Props = { content: RnContent['compare'] };

const cardIcon: Record<CompareCard['id'], LucideIcon> = {
  dom: Monitor,
  native: Smartphone,
};

export const CompareSection = ({ content }: Props) => {
  return (
    <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="compare"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Star className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem card={content.cards[0]} />
        <CompareVs />
        <CompareCardItem card={content.cards[1]} />
      </div>
    </section>
  );
};

const CompareCardItem = ({ card }: { card: CompareCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={cardIcon[card.id]}
    title={card.name}
    bullets={card.items}
  />
);
