import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { RoutineStep, WhyOpenSourceContent } from '../content';
import { BookIcon, routineIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['routine'] };

const toFlowStep = (step: RoutineStep): FlowStepItem => {
  const Icon = routineIconByName[step.icon];
  return {
    id: step.num,
    number: step.num,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const GitHubLearningRoutine = ({ content }: Props) => (
  <section id="section-routine" aria-labelledby="heading-routine" className="space-y-lg">
    <SectionHeader
      id="routine"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BookIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
