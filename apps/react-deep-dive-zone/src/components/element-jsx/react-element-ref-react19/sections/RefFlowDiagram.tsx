import { cx } from '@berrypjh/react-ui';
import { Boxes, Layers, type LucideIcon, Monitor, Sparkles, User, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, ReactElementRefReact19Content } from '../content';

type Props = { content: ReactElementRefReact19Content['flow'] };

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  parent: User,
  middle: Layers,
  child: Boxes,
  dom: Monitor,
};

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const RefFlowDiagram = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);
