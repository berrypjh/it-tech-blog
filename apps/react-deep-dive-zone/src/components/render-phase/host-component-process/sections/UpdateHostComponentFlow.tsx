import { Box, Braces, CornerDownRight, FileText, type LucideIcon, Workflow } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HostComponentContent, UpdateHostFlowStep } from '../content';

const updateFlowIconByName: Record<UpdateHostFlowStep['icon'], LucideIcon> = {
  fiber: Box,
  props: Braces,
  children: FileText,
  reconcile: Workflow,
  child: CornerDownRight,
} as const;

type Props = { content: HostComponentContent['updateFlow'] };

const toRow = (step: UpdateHostFlowStep, idx: number): StepRow => {
  const Icon = updateFlowIconByName[step.icon];
  return {
    id: step.title,
    num: String(idx + 1),
    tone: step.tone,
    icon: <Icon className="h-[18px] w-[18px]" />,
    title: step.title,
    description: step.description,
  };
};

export const UpdateHostComponentFlow = ({ content }: Props) => (
  <section
    id="update-host-flow"
    aria-labelledby="heading-update-host-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="update-host-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />
  </section>
);
