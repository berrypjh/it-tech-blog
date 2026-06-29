import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { BailoutStep, EagerBailoutContent } from '../content';
import { bailoutStepIconByName, ZapIcon } from '../icons';

type Props = { content: EagerBailoutContent['flow'] };

const toFlowStep = (step: BailoutStep): FlowStepItem => {
  const Icon = bailoutStepIconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.title,
    body: step.detail,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const EagerBailoutFlowSection = ({ content }: Props) => (
  <section id="section-flow" aria-labelledby="heading-flow" className="space-y-md">
    <SectionHeader
      id="flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
