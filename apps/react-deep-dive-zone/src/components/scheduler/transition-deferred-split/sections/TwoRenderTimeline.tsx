import {
  Clock,
  Keyboard,
  Lightbulb,
  type LucideIcon,
  MonitorCheck,
  Timer,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { TimelineStepId, TransitionDeferredContent } from '../content';

type Props = { content: TransitionDeferredContent['timeline'] };

const stepIcon: Record<TimelineStepId, LucideIcon> = {
  keystroke: Keyboard,
  'urgent-render': Zap,
  paint: MonitorCheck,
  'deferred-lane': Clock,
  'deferred-render': Timer,
};

export const TwoRenderTimeline = ({ content }: Props) => {
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
    <section id="timeline" aria-labelledby="heading-timeline" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="timeline"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Clock className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
