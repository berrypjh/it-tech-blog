import { Gauge, Lightbulb, type LucideIcon, PlayCircle, Split, Tag, Timer } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { DispatchSelectionContent, SelectStepId } from '../content';

type Props = { content: DispatchSelectionContent['selection'] };

const stepIcon: Record<SelectStepId, LucideIcon> = {
  name: Tag,
  lookup: Gauge,
  switch: Split,
  'set-priority': Timer,
  dispatch: PlayCircle,
};

export const WrapperSelectionFlow = ({ content }: Props) => {
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
    <section id="selection" aria-labelledby="heading-selection" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="selection"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
