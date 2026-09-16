import {
  Database,
  Filter,
  Lightbulb,
  type LucideIcon,
  Search,
  Timer,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FormActionsEventSystemContent, StageId } from '../content';

type Props = { content: FormActionsEventSystemContent['pipeline'] };

const stepIcon: Record<StageId, LucideIcon> = {
  submit: Filter,
  plugin: Search,
  formdata: Database,
  pending: Timer,
  transition: Zap,
};

export const SubmitPipelineSteps = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      num: step.num,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
    };
  });

  return (
    <section id="pipeline" aria-labelledby="heading-pipeline" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="pipeline"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
