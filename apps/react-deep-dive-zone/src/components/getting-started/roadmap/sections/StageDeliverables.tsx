import { cx } from '@berrypjh/react-ui';
import {
  Anchor,
  Box,
  CircleCheck,
  Code,
  Flag,
  Gauge,
  type LucideIcon,
  Network,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DeliverableCard, RoadmapContent } from '../content';

const cardIcon: Record<DeliverableCard['num'], LucideIcon> = {
  '1': Box,
  '2': Network,
  '3': Code,
  '4': CircleCheck,
  '5': Anchor,
  '6': Gauge,
  '7': Flag,
};

type Props = { content: RoadmapContent['deliverables'] };

const toFlowStep = (card: DeliverableCard): FlowStepItem => {
  const Icon = cardIcon[card.num];
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
    icon: <Icon className={cx('h-5 w-5', toneTokens[card.tone].text)} aria-hidden="true" />,
  };
};

export const StageDeliverables = ({ content }: Props) => (
  <section
    id="deliverables"
    aria-labelledby="heading-deliverables"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="deliverables"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.supporting}
      icon={<CircleCheck className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.cards.map(toFlowStep)} columns={4} />
  </section>
);
