import {
  CalendarClock,
  Gauge,
  Layers,
  Lightbulb,
  type LucideIcon,
  MousePointerClick,
  PlayCircle,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FlowStepId, WhyNotImmediateContent } from '../content';

type Props = { content: WhyNotImmediateContent['flow'] };

const stepIcon: Record<FlowStepId, LucideIcon> = {
  interaction: MousePointerClick,
  'set-state': Zap,
  'request-lane': Gauge,
  schedule: Layers,
  'ensure-root': CalendarClock,
  render: PlayCircle,
};

export const RecordToRenderFlow = ({ content }: Props) => {
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
    <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="flow"
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
