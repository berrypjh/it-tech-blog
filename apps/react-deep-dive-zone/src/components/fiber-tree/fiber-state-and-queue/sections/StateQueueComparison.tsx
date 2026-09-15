import { Database, List, type LucideIcon } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { fieldTone } from '../components/fieldTone';
import type { ComparisonCard, FiberStateAndQueueContent, FieldKind } from '../content';

type Props = { content: FiberStateAndQueueContent['comparison'] };

const fieldIcon: Record<FieldKind, LucideIcon> = {
  memoizedState: Database,
  updateQueue: List,
};

export const StateQueueComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Database className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <CompareCardItem card={content.cards[0]} />
      <CompareVs />
      <CompareCardItem card={content.cards[1]} />
    </div>
  </section>
);

const CompareCardItem = ({ card }: { card: ComparisonCard }) => (
  <ToneDetailCard
    tone={fieldTone[card.kind]}
    icon={fieldIcon[card.kind]}
    title={card.title}
    badge={card.bottomLabel}
    description={card.subtitle}
    bullets={card.items}
  />
);
