import { Atom, Boxes, type LucideIcon, Star } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CompareCardEntry, ReactDomContent } from '../content';

type Props = { content: ReactDomContent['compare'] };

const cardIcon: Record<CompareCardEntry['id'], LucideIcon> = {
  react: Atom,
  'react-dom': Boxes,
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

      <SectionNote icon={<Star className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};

const CompareCardItem = ({ card }: { card: CompareCardEntry }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={cardIcon[card.id]}
    title={card.name}
    bullets={card.apis}
    note={card.description}
  />
);
