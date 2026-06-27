import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import type { CompareCardEntry, ReactDomContent } from '../content';
import { reactDomIcon, StarIcon } from '../icons';

type Props = { content: ReactDomContent['compare'] };

export const CompareSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-compare" className="space-y-md">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<StarIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem card={content.cards[0]} />
        <CompareVs />
        <CompareCardItem card={content.cards[1]} />
      </div>

      <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};

const CompareCardItem = ({ card }: { card: CompareCardEntry }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={reactDomIcon[card.iconName]}
    title={card.name}
    bullets={card.apis}
    note={card.description}
  />
);
