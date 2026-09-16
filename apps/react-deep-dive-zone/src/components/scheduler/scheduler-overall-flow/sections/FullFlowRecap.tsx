import {
  CalendarClock,
  CheckCircle2,
  Gauge,
  Layers,
  Lightbulb,
  type LucideIcon,
  PauseCircle,
  Repeat,
  Timer,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FlowStepId, SchedulerOverallFlowContent } from '../content';

type Props = { content: SchedulerOverallFlowContent['fullFlow'] };

const stepIcon: Record<FlowStepId, LucideIcon> = {
  'set-state': Zap,
  'request-lane': Gauge,
  'mark-root': Layers,
  microtask: Timer,
  schedule: CalendarClock,
  'work-loop': Repeat,
  yield: PauseCircle,
  commit: CheckCircle2,
};

export const FullFlowRecap = ({ content }: Props) => {
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
    <section id="full-flow" aria-labelledby="heading-full-flow" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="full-flow"
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
