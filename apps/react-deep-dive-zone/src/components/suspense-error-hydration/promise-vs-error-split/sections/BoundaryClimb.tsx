import {
  ArrowUp,
  Flag,
  Lightbulb,
  ListPlus,
  type LucideIcon,
  RotateCcw,
  Search,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ClimbStepId, PromiseVsErrorSplitContent } from '../content';

type Props = { content: PromiseVsErrorSplitContent['climb'] };

const stepIcon: Record<ClimbStepId, LucideIcon> = {
  mark: Flag,
  classify: Search,
  'find-boundary': ArrowUp,
  capture: ListPlus,
  unwind: RotateCcw,
};

export const BoundaryClimb = ({ content }: Props) => {
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
    <section id="climb" aria-labelledby="heading-climb" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="climb"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowUp className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
