import {
  CalendarClock,
  FilePlus2,
  Gauge,
  Lightbulb,
  ListPlus,
  type LucideIcon,
  PlayCircle,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { DispatchStepId, SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['dispatchFlow'] };

const stepIcon: Record<DispatchStepId, LucideIcon> = {
  call: PlayCircle,
  lane: Gauge,
  update: FilePlus2,
  eager: Zap,
  enqueue: ListPlus,
  schedule: CalendarClock,
};

export const DispatchSetStateFlow = ({ content }: Props) => {
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
    <section
      id="dispatch-flow"
      aria-labelledby="heading-dispatch-flow"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="dispatch-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Zap className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
