import {
  ArrowUpFromLine,
  CheckCircle2,
  Lightbulb,
  type LucideIcon,
  PenLine,
  Tags,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { MetadataResourceContent, StageId } from '../content';

type Props = { content: MetadataResourceContent['hoisting'] };

const stepIcon: Record<StageId, LucideIcon> = {
  declare: PenLine,
  detect: Tags,
  hoist: ArrowUpFromLine,
  dedupe: CheckCircle2,
};

export const HoistingSteps = ({ content }: Props) => {
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
    <section id="hoisting" aria-labelledby="heading-hoisting" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="hoisting"
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
