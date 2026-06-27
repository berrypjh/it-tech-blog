import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, JsxTransformFlowContent } from '../content';
import { AtomIcon, BoxIcon, CodeIcon, SettingsIcon, WorkflowIcon } from '../icons';

type Props = { content: JsxTransformFlowContent['compileFlow'] };

const iconMap = {
  code: CodeIcon,
  gear: SettingsIcon,
  box: BoxIcon,
  atom: AtomIcon,
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
      id="compile-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
