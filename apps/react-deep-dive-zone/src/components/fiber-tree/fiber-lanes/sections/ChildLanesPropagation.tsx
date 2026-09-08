import { cn } from '@it-tech-blog/utils';

import { Activity, Eye, Lightbulb, MoveUp } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberLanesContent, PropagationStep } from '../content';

type Props = { content: FiberLanesContent['propagation'] };

const iconMap = {
  pulse: Activity,
  arrowUp: MoveUp,
  eye: Eye,
} as const;

const toFlowStep = (step: PropagationStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const ChildLanesPropagation = ({ content }: Props) => (
  <section
    id="propagation"
    aria-labelledby="heading-propagation"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="propagation"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MoveUp className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);
