import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DeliverableCard, RoadmapContent } from '../content';
import { CheckCircleIcon, deliverableIconByName } from '../icons';

type Props = { content: RoadmapContent['deliverables'] };

const toFlowStep = (card: DeliverableCard): FlowStepItem => {
  const Icon = deliverableIconByName[card.icon];
  return {
    id: card.num,
    number: card.num,
    title: card.title,
    body: card.description.map((line, i) => (
      <span key={i} className="block">
        {line}
      </span>
    )),
    tone: card.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />,
  };
};

export const StageDeliverables = ({ content }: Props) => (
  <section id="section-deliverables" aria-labelledby="heading-deliverables" className="space-y-lg">
    <SectionHeader
      id="deliverables"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.supporting}
      icon={<CheckCircleIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);
