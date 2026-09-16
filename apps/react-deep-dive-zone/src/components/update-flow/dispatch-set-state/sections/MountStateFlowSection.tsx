import { cx } from '@berrypjh/react-ui';
import {
  Box,
  CornerDownRight,
  Database,
  FileCode,
  Flame,
  GitBranch,
  type LucideIcon,
  Save,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateContent, MountStateStep, MountStepIcon } from '../content';

const flowIconByName: Record<MountStepIcon, LucideIcon> = {
  fileCode: FileCode,
  flame: Flame,
  database: Database,
  box: Box,
  save: Save,
  cornerDownRight: CornerDownRight,
};

type Props = { content: DispatchSetStateContent['flow'] };

const toFlowStep = (step: MountStateStep): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const MountStateFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranch className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
