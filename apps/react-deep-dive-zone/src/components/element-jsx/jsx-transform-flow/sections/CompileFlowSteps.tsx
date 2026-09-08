import { cn } from '@it-tech-blog/utils';

import { Atom, Box, Code, Settings, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, JsxTransformFlowContent } from '../content';

type Props = { content: JsxTransformFlowContent['compileFlow'] };

const iconMap = {
  code: Code,
  gear: Settings,
  box: Box,
  atom: Atom,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    ...step,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const CompileFlowSteps = ({ content }: Props) => (
  <section
    id="compile-flow"
    aria-labelledby="heading-compile-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="compile-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
