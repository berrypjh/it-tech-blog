import { cx } from '@berrypjh/react-ui';
import { Lightbulb, MoveDown, MoveRight, MoveUp, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import { pointerTone } from '../components/pointerStyles';
import type { FiberTreePointersContent, PointerKind, TraversalStep } from '../content';

type Props = { content: FiberTreePointersContent['traversal'] };

const iconMap: Record<PointerKind, React.ComponentType<{ className?: string }>> = {
  child: MoveDown,
  sibling: MoveRight,
  return: MoveUp,
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
    icon: <Icon className={cx('h-5 w-5', toneTokens[tone].text)} />,
  };
};

export const FiberTraversalReason = ({ content }: Props) => (
  <section id="traversal" aria-labelledby="heading-traversal" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="traversal"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.banner}
    </SectionNote>
  </section>
);
