import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { pointerTone } from '../components/pointerStyles';
import type { FiberTreePointersContent, PointerKind, TraversalStep } from '../content';
import { LightbulbIcon, MoveDownIcon, MoveRightIcon, MoveUpIcon, WorkflowIcon } from '../icons';

type Props = { content: FiberTreePointersContent['traversal'] };

const iconMap: Record<PointerKind, React.ComponentType<{ className?: string }>> = {
  child: MoveDownIcon,
  sibling: MoveRightIcon,
  return: MoveUpIcon,
};

const toFlowStep = (step: TraversalStep): FlowStepItem => {
  const tone = pointerTone[step.id];
  const Icon = iconMap[step.id];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.body,
    tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[tone].text)} />,
  };
};

export const FiberTraversalReason = ({ content }: Props) => (
  <section id="traversal" aria-labelledby="heading-traversal" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="traversal"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
  </section>
);
