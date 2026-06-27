import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReconcilerContent, ResponsibilityCard } from '../content';
import { reconcilerIcon, SparklesIcon } from '../icons';

type Props = { content: ReconcilerContent['responsibilities'] };

const toFlowStep = (card: ResponsibilityCard): FlowStepItem => {
  const Icon = reconcilerIcon[card.iconName];
  return {
    id: card.id,
    number: card.number,
    title: card.title,
    body: card.description,
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
  };
};

export const ResponsibilitiesSection = ({ content }: Props) => (
  <section aria-labelledby="heading-responsibilities" className="space-y-md">
    <SectionHeader
      id="responsibilities"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);
