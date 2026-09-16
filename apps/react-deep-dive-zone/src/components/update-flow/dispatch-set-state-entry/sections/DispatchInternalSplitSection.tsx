import { Box, type LucideIcon, Split, Workflow } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type {
  DispatchSetStateEntryContent,
  FunctionSplitCard,
  FunctionSplitIcon,
} from '../content';

const splitIconByName: Record<FunctionSplitIcon, LucideIcon> = {
  workflow: Workflow,
  box: Box,
};

type Props = { content: DispatchSetStateEntryContent['splitReason'] };

const SplitCard = ({ card }: { card: FunctionSplitCard }) => (
  <ToneDetailCard
    tone={card.tone}
    icon={splitIconByName[card.icon]}
    title={card.title}
    badge={card.badge}
    bullets={card.items}
    className="h-full"
  />
);

export const DispatchInternalSplitSection = ({ content }: Props) => (
  <section id="split" aria-labelledby="heading-split" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="split"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <SplitCard card={content.leftCard} />
      <CompareVs />
      <SplitCard card={content.rightCard} />
    </div>
  </section>
);
