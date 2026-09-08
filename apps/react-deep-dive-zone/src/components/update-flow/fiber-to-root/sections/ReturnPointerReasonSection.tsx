import { Flag, MousePointerClick, MoveUp, PanelsTopLeft, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { FiberToRootContent, ReturnNode } from '../content';

const returnIconByName = {
  mousePointer: MousePointerClick,
  workflow: Workflow,
  panels: PanelsTopLeft,
  flag: Flag,
} as const;

type Props = { content: FiberToRootContent['returnPointer'] };

const toFlowStep = (node: ReturnNode, idx: number): FlowStepItem => {
  const Icon = returnIconByName[node.icon];
  return {
    id: String(idx),
    number: String(idx + 1),
    title: node.title,
    body: node.sub,
    tone: node.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const ReturnPointerReasonSection = ({ content }: Props) => (
  <section
    id="section-return-pointer"
    aria-labelledby="heading-return-pointer"
    className="space-y-md"
  >
    <SectionHeader
      id="return-pointer"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<MoveUp className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.nodes.map(toFlowStep)} columns={4} />

    <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      ↑ {content.flowLabel}
    </p>
  </section>
);
