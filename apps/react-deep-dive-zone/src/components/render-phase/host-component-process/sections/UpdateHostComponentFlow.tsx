import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { HostComponentContent, UpdateHostFlowStep } from '../content';
import { updateFlowIconByName, WorkflowIcon } from '../icons';

type Props = { content: HostComponentContent['updateFlow'] };

const toRow = (step: UpdateHostFlowStep, idx: number): StepRow => {
  const Icon = updateFlowIconByName[step.icon];
  return {
    id: step.title,
    num: String(idx + 1),
    tone: step.tone,
    icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
    title: step.title,
    description: step.description,
  };
};

export const UpdateHostComponentFlow = ({ content }: Props) => (
  <section id="update-host-flow" aria-labelledby="heading-update-host-flow" className="space-y-md">
    <SectionHeader
      id="update-host-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <NumberedStepList rows={content.steps.map(toRow)} />
  </section>
);
