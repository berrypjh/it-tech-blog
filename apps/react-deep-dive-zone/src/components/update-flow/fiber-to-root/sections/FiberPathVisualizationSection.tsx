import { cx } from '@berrypjh/react-ui';
import { Flag, type LucideIcon, Network, PanelsTopLeft, Pin, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FiberPathNode, FiberStackIcon, FiberToRootContent } from '../content';

const fiberStackIconByName: Record<FiberStackIcon, LucideIcon> = {
  flag: Flag,
  panels: PanelsTopLeft,
  workflow: Workflow,
  pin: Pin,
};

type Props = { content: FiberToRootContent['fiberPath'] };

const toFlowStep = (node: FiberPathNode, idx: number, sourceBadge: string): FlowStepItem => {
  const Icon = fiberStackIconByName[node.icon];
  return {
    id: node.id,
    number: String(idx + 1),
    badge: node.isSource ? sourceBadge : undefined,
    title: node.title,
    body: formatInline(`\`${node.state}\` · ${node.body}`),
    tone: node.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[node.tone].text)} aria-hidden="true" />,
  };
};

export const FiberPathVisualizationSection = ({ content }: Props) => (
  <section id="fiber-path" aria-labelledby="heading-fiber-path" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="fiber-path"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid
      steps={content.nodes.map((node, idx) => toFlowStep(node, idx, content.sourceBadge))}
      columns={4}
    />

    <p className="text-center text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
      ↑ {content.bottomLabel}
    </p>
  </section>
);
