import {
  Braces,
  CornerDownRight,
  FunctionSquare,
  type LucideIcon,
  Settings,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FunctionComponentContent, InternalFlowStep } from '../content';

const internalFlowIconByName: Record<InternalFlowStep['icon'], LucideIcon> = {
  fiber: FunctionSquare,
  hooks: Settings,
  jsx: Braces,
  reconcile: Workflow,
  child: CornerDownRight,
} as const;

type Props = { content: FunctionComponentContent['internalFlow'] };

const toRow = (step: InternalFlowStep, idx: number): StepRow => {
  const Icon = internalFlowIconByName[step.icon];
  return {
    id: step.title,
    num: String(idx + 1),
    tone: step.tone,
    icon: <Icon className="h-[18px] w-[18px]" />,
    title: step.title,
    description: step.description,
  };
};

export const InternalProcessingFlow = ({ content }: Props) => (
  <section
    id="internal-flow"
    aria-labelledby="heading-internal-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="internal-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />
  </section>
);
