import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AxisCard, RnContent } from '../content';
import { rnIcon, SparklesIcon } from '../icons';

type Props = { content: RnContent['axis'] };

const toFlowStep = (card: AxisCard, index: number): FlowStepItem => {
  const Icon = rnIcon[card.iconName];
  return {
    id: card.id,
    number: String(index + 1),
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
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
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
    </section>
  );
};
