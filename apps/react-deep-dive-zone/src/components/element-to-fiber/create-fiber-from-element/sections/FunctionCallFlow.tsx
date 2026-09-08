import { Box, Puzzle, Sparkles, Split, Wand2, Workflow } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CreateFiberFromElementContent, FlowStep } from '../content';

type Props = { content: CreateFiberFromElementContent['flow'] };

const iconMap = {
  box: Box,
  wand: Wand2,
  split: Split,
  puzzle: Puzzle,
  sparkles: Sparkles,
} as const;

const toRow = (step: FlowStep): StepRow => {
  const Icon = iconMap[step.iconName];
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
