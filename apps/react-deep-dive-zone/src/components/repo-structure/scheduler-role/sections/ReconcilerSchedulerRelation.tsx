import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import type { RelationCard, SchedulerContent } from '../content';
import { iconByName, RefreshIcon } from '../icons';

type Props = { content: SchedulerContent['relation'] };

export const ReconcilerSchedulerRelation = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-relation" className="space-y-md">
      <SectionHeader
        id="relation"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<RefreshIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <RelationCardItem card={content.left} />
        <CompareVs />
        <RelationCardItem card={content.right} />
      </div>

      <SectionNote icon={<RefreshIcon className="h-4 w-4" />}>
        {content.banner.lead}
        <span className="font-bold text-[var(--term-accent)]">{content.banner.accent1}</span>
        {content.banner.mid}
        <span className="font-bold text-[var(--term-accent)]">{content.banner.accent2}</span>
        {content.banner.tail}
      </SectionNote>
    </section>
  );
};

const RelationCardItem = ({ card }: { card: RelationCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={iconByName[card.icon]}
    title={card.title}
    description={card.subtitle}
    bullets={card.bullets}
  />
);
