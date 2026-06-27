import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ChangelogContent, TraceStep } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: ChangelogContent['trace'] };

const toFlowStep = (step: TraceStep): FlowStepItem => {
  const Icon = iconByName[step.icon];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const ChangeToCodeTrace = ({ content }: Props) => (
  <section aria-labelledby="heading-trace" className="space-y-lg">
    <SectionHeader
      id="trace"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
