import { Box, type LucideIcon, Puzzle, Sparkles, Split, Wand2, Workflow } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CreateFiberFromElementContent, FlowStep } from '../content';

type Props = { content: CreateFiberFromElementContent['flow'] };

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  element: Box,
  'create-fiber': Wand2,
  split: Split,
  delegate: Puzzle,
  fiber: Sparkles,
};

const toRow = (step: FlowStep): StepRow => {
  const Icon = stepIcon[step.id];
  return {
    id: step.id,
    num: step.number,
    tone: step.tone,
    icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
    title: step.title,
    description: step.description,
  };
};

export const FunctionCallFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />
  </section>
);
