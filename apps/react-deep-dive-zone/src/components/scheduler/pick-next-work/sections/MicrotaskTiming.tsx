import { CalendarClock, Flag, Layers, Lightbulb, type LucideIcon, Timer, Zap } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { MicrotaskStepId, PickNextWorkContent } from '../content';

type Props = { content: PickNextWorkContent['microtask'] };

const stepIcon: Record<MicrotaskStepId, LucideIcon> = {
  'event-start': Flag,
  'many-updates': Zap,
  'event-end': Layers,
  microtask: Timer,
  schedule: CalendarClock,
};

export const MicrotaskTiming = ({ content }: Props) => {
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
    <section id="microtask" aria-labelledby="heading-microtask" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="microtask"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Timer className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
