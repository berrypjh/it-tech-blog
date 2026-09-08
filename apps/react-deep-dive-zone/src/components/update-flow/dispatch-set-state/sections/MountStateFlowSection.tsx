import { Box, CornerDownRight, Database, FileCode, Flame, GitBranch, Save } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { DispatchSetStateContent, MountStateStep } from '../content';

const flowIconByName = {
  fileCode: FileCode,
  flame: Flame,
  database: Database,
  box: Box,
  save: Save,
  cornerDownRight: CornerDownRight,
} as const;

type Props = { content: DispatchSetStateContent['flow'] };

const toFlowStep = (step: MountStateStep): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const MountStateFlowSection = ({ content }: Props) => (
  <section id="section-flow" aria-labelledby="heading-flow" className="space-y-md">
    <SectionHeader
      id="flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
