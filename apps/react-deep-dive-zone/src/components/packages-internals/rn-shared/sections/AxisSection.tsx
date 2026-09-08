import { cn } from '@it-tech-blog/utils';

import { Boxes, Clock, Code, type LucideIcon, Network, Sparkles } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AxisCard, RnContent } from '../content';

type Props = { content: RnContent['axis'] };

const axisIcon: Record<AxisCard['id'], LucideIcon> = {
  element: Code,
  fiber: Boxes,
  reconciler: Network,
  scheduler: Clock,
};

const toFlowStep = (card: AxisCard, index: number): FlowStepItem => {
  const Icon = axisIcon[card.id];
  return {
    id: card.id,
    number: String(index + 1),
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} aria-hidden="true" />,
  };
};

export const AxisSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-axis" className="space-y-md">
      <SectionHeader
        id="axis"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
    </section>
  );
};
