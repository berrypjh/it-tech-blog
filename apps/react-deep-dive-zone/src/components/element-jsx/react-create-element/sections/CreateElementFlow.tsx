import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, ReactCreateElementContent } from '../content';
import { AtomIcon, CodeIcon, LightbulbIcon, SlidersIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactCreateElementContent['flow'] };

const iconMap = {
  code: CodeIcon,
  sliders: SlidersIcon,
  workflow: WorkflowIcon,
  atom: AtomIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return { ...step, icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} /> };
};

export const CreateElementFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
      {content.bottomNoteLine1} {content.bottomNoteLine2}
    </SectionNote>
  </section>
);
