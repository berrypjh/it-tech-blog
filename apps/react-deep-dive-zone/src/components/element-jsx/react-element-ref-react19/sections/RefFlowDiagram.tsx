import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, ReactElementRefReact19Content } from '../content';
import { BoxesIcon, LayersIcon, MonitorIcon, SparklesIcon, UserIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['flow'] };

const iconMap = {
  parent: UserIcon,
  middle: LayersIcon,
  child: BoxesIcon,
  dom: MonitorIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
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

export const RefFlowDiagram = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);
