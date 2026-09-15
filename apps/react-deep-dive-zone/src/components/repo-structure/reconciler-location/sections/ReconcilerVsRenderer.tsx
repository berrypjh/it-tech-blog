import { Cuboid, type LucideIcon, MonitorSmartphone, Sparkles } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CompareCard, ReconcilerEntryContent } from '../content';

const compareIcon: Record<CompareCard['id'], LucideIcon> = {
  reconciler: Cuboid,
  renderer: MonitorSmartphone,
};

type Props = { content: ReconcilerEntryContent['compare'] };

export const ReconcilerVsRenderer = ({ content }: Props) => {
  return (
    <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="compare"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <CompareCardItem card={content.left} />
        <CompareVs />
        <CompareCardItem card={content.right} />
      </div>
    </section>
  );
};

const CompareCardItem = ({ card }: { card: CompareCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={compareIcon[card.id]}
    title={card.title}
    badge={card.tag}
    bullets={card.bullets}
  />
);
