import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { BeginWorkContent, ReconcileStep } from '../content';
import { reconcileIconByName, WorkflowIcon } from '../icons';

type Props = { content: BeginWorkContent['reconcile'] };

const toRow = (step: ReconcileStep, idx: number): StepRow => {
  const Icon = reconcileIconByName[step.icon];
  return {
    id: step.id,
    num: String(idx + 1),
    tone: step.tone,
    icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
    title: step.title,
    description: step.description,
    extra: (
      <div className="col-span-full md:col-auto rounded-lg border border-dashed border-[var(--term-border)] bg-[var(--term-surface)] px-md py-2">
        <p className="text-xsm leading-snug text-[var(--term-fg)] break-keep">
          {step.sideExplanation}
        </p>
      </div>
    ),
  };
};

export const ReconcileChildrenFlow = ({ content }: Props) => (
  <section id="reconcile-flow" aria-labelledby="heading-reconcile-flow" className="space-y-md">
    <SectionHeader
      id="reconcile-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <NumberedStepList
      rows={content.steps.map(toRow)}
      rowClassName="md:grid-cols-[auto_auto_minmax(0,1.1fr)_minmax(0,1fr)]"
    />
  </section>
);
