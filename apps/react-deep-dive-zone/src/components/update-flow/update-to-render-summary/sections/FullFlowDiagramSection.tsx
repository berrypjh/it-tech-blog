import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneBadge } from '../../../shared/tone';
import type { UpdateToRenderSummaryContent } from '../content';
import { flowIconByName, WorkflowIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['bigFlow'] };

export const FullFlowDiagramSection = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = flowIconByName[step.icon];
    return {
      id: step.number,
      num: step.number,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
      extra: step.final ? (
        <div className="col-span-full md:col-auto flex md:items-center md:justify-end mt-sm md:mt-0">
          <ToneBadge tone={step.tone}>{content.finalBadge}</ToneBadge>
        </div>
      ) : undefined,
    };
  });

  return (
    <section id="section-big-flow" aria-labelledby="heading-big-flow" className="space-y-md">
      <SectionHeader
        id="big-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<WorkflowIcon className="h-5 w-5" />}
      />

      <NumberedStepList rows={rows} rowClassName="md:grid-cols-[auto_auto_1fr_auto]" />
    </section>
  );
};
