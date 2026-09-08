import { cn } from '@it-tech-blog/utils';

import { Atom, Code, Lightbulb, Sliders, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, ReactCreateElementContent } from '../content';

type Props = { content: ReactCreateElementContent['flow'] };

const iconMap = {
  code: Code,
  sliders: Sliders,
  workflow: Workflow,
  atom: Atom,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return { ...step, icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} /> };
};

export const CreateElementFlow = ({ content }: Props) => (
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

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.bottomNoteLine1} {content.bottomNoteLine2}
    </SectionNote>
  </section>
);
