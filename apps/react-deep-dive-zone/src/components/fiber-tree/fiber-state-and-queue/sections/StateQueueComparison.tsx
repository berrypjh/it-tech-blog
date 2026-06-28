import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import { type ToneKey } from '../../../shared/tones';
import type { ComparisonCard, FiberStateAndQueueContent, FieldKind } from '../content';
import { DatabaseIcon, ListIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['comparison'] };

const fieldTone: Record<FieldKind, ToneKey> = {
  memoizedState: 'emerald',
  updateQueue: 'violet',
};

const fieldIcon = {
  memoizedState: DatabaseIcon,
  updateQueue: ListIcon,
} as const;

export const StateQueueComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<DatabaseIcon className="h-5 w-5" />}
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
