import {
  Brackets,
  Lightbulb,
  type LucideIcon,
  Scissors,
  ShieldCheck,
  Split,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ApplyStepId, UseEffectEventContent } from '../content';

type Props = { content: UseEffectEventContent['apply'] };

const stepIcon: Record<ApplyStepId, LucideIcon> = {
  separate: Split,
  extract: Scissors,
  call: ShieldCheck,
  shrink: Brackets,
};

export const ApplySteps = ({ content }: Props) => {
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
    <section id="apply" aria-labelledby="heading-apply" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="apply"
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
