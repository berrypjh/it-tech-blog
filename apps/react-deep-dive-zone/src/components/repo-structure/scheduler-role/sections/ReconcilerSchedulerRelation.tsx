import { Layers, type LucideIcon, RefreshCw, Timer } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RelationCard, SchedulerContent } from '../content';

const relationIcon: Record<RelationCard['id'], LucideIcon> = {
  reconciler: Layers,
  scheduler: Timer,
};

type Props = { content: SchedulerContent['relation'] };

export const ReconcilerSchedulerRelation = ({ content }: Props) => {
  return (
    <section id="relation" aria-labelledby="heading-relation" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="relation"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<RefreshCw className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <RelationCardItem card={content.left} />
        <CompareVs />
        <RelationCardItem card={content.right} />
      </div>

      <SectionNote icon={<RefreshCw className="h-4 w-4" aria-hidden="true" />}>
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
    icon={relationIcon[card.id]}
    title={card.title}
    description={card.subtitle}
    bullets={card.bullets}
  />
);
