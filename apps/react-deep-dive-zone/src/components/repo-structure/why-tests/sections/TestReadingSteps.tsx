import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReadingStep, TestCodeContent } from '../content';
import { iconByName, ListChecksIcon } from '../icons';

type Props = { content: TestCodeContent['steps'] };

const toFlowStep = (step: ReadingStep): FlowStepItem => {
  const Icon = iconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const TestReadingSteps = ({ content }: Props) => (
  <section aria-labelledby="heading-steps" className="space-y-md">
    <SectionHeader
      id="steps"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
