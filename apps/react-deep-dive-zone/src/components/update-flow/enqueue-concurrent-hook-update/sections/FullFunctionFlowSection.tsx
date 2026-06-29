import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { EnqueueConcurrentHookUpdateContent, FunctionFlowStep } from '../content';
import { flowIconByName, WorkflowIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['flow'] };

const toFlowStep = (step: FunctionFlowStep, idx: number): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.id,
    number: String(idx + 1),
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const FullFunctionFlowSection = ({ content }: Props) => (
  <section id="section-flow" aria-labelledby="heading-flow" className="space-y-md">
    <SectionHeader
      id="flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
