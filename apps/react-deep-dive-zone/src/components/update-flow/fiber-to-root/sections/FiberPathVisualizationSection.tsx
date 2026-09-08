import { Flag, Network, PanelsTopLeft, Pin, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { FiberPathNode, FiberToRootContent } from '../content';

const fiberStackIconByName = {
  flag: Flag,
  panels: PanelsTopLeft,
  workflow: Workflow,
  pin: Pin,
} as const;

type Props = { content: FiberToRootContent['fiberPath'] };

const toFlowStep = (node: FiberPathNode, idx: number): FlowStepItem => {
  const Icon = fiberStackIconByName[node.icon];
  return {
    id: node.id,
    number: String(idx + 1),
    badge: node.isSource ? 'source' : undefined,
    title: node.title,
    body: formatInline(`\`${node.state}\` · ${node.body}`),
    tone: node.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const FiberPathVisualizationSection = ({ content }: Props) => (
  <section id="section-fiber-path" aria-labelledby="heading-fiber-path" className="space-y-md">
    <SectionHeader
      id="fiber-path"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.nodes.map(toFlowStep)} columns={4} />

    <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      ↑ {content.bottomLabel}
    </p>
  </section>
);
