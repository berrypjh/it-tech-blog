import {
  Code2,
  Gauge,
  Layers,
  Lightbulb,
  ListOrdered,
  type LucideIcon,
  MousePointerClick,
  Package,
  PlayCircle,
  Radio,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PriorityReplayActionContent, RecapStepId } from '../content';

type Props = { content: PriorityReplayActionContent['recap'] };

const stepIcon: Record<RecapStepId, LucideIcon> = {
  prop: Code2,
  root: Radio,
  priority: Gauge,
  fiber: Layers,
  plugin: Package,
  synthetic: MousePointerClick,
  accumulate: ListOrdered,
  queue: ListOrdered,
  run: PlayCircle,
};

export const PipelineRecap = ({ content }: Props) => {
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
    <section id="recap" aria-labelledby="heading-recap" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="recap"
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
