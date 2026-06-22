import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, UsageVsInternalsContent } from '../content';
import { CursorIcon, flowIconByName } from '../icons';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['flow'] };

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = flowIconByName[step.iconName];
  return {
    ...step,
    body: formatInline(step.body),
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const CounterUpdateFlow = ({ content }: Props) => (
  <section id="section-flow" aria-labelledby="heading-flow" className="space-y-lg">
    <SectionHeader
      id="flow"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CursorIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
