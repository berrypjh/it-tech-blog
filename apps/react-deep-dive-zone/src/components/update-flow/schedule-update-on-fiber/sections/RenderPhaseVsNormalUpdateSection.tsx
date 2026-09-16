import { type LucideIcon, MousePointerClick, RefreshCw, Split } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ContextCard, ContextCardIcon, ScheduleUpdateOnFiberContent } from '../content';

const contextIconByName: Record<ContextCardIcon, LucideIcon> = {
  refresh: RefreshCw,
  mousePointer: MousePointerClick,
};

type Props = { content: ScheduleUpdateOnFiberContent['contextCompare'] };

const CompareCard = ({ card }: { card: ContextCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={contextIconByName[card.icon]}
    title={card.title}
    badge={card.badge}
    bullets={card.bullets}
    className="h-full"
  />
);

export const RenderPhaseVsNormalUpdateSection = ({ content }: Props) => (
  <section
    id="context-compare"
    aria-labelledby="heading-context-compare"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="context-compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <CompareCard card={content.leftCard} />
      <CompareVs />
      <CompareCard card={content.rightCard} />
    </div>
  </section>
);
