import {
  GitCommit,
  Lightbulb,
  type LucideIcon,
  Map,
  Newspaper,
  Package,
  Tag,
  Telescope,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React192ReadingMethodContent, RoutineStepId } from '../content';

type Props = { content: React192ReadingMethodContent['routine'] };

const stepIcon: Record<RoutineStepId, LucideIcon> = {
  intent: Newspaper,
  scope: Package,
  pin: Tag,
  trace: GitCommit,
  place: Map,
};

export const ReadingRoutine = ({ content }: Props) => {
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
    <section id="routine" aria-labelledby="heading-routine" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="routine"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Telescope className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
