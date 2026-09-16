import { cx } from '@berrypjh/react-ui';
import {
  Flag,
  type LucideIcon,
  MousePointerClick,
  MoveUp,
  PanelsTopLeft,
  Workflow,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberToRootContent, ReturnNode, ReturnNodeIcon } from '../content';

const returnIconByName: Record<ReturnNodeIcon, LucideIcon> = {
  mousePointer: MousePointerClick,
  workflow: Workflow,
  panels: PanelsTopLeft,
  flag: Flag,
};

type Props = { content: FiberToRootContent['returnPointer'] };

const toFlowStep = (node: ReturnNode, idx: number): FlowStepItem => {
  const Icon = returnIconByName[node.icon];
  return {
    id: String(idx),
    number: String(idx + 1),
    title: node.title,
    body: node.sub,
    tone: node.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[node.tone].text)} aria-hidden="true" />,
  };
};

export const ReturnPointerReasonSection = ({ content }: Props) => (
  <section
    id="return-pointer"
    aria-labelledby="heading-return-pointer"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="return-pointer"
      number={content.badge}
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
