import {
  Boxes,
  Eraser,
  Gauge,
  Layers,
  Lightbulb,
  ListOrdered,
  type LucideIcon,
  PlayCircle,
  Route,
  Undo2,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PhaseId, RenderWithHooksContent } from '../content';

type Props = { content: RenderWithHooksContent['phases'] };

const phaseIcon: Record<PhaseId, LucideIcon> = {
  lanes: Gauge,
  'current-fiber': Layers,
  reset: Eraser,
  dispatcher: Route,
  invoke: PlayCircle,
  collect: ListOrdered,
  result: Undo2,
};

export const RenderWithHooksPhases = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = phaseIcon[step.id];
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
    <section id="phases" aria-labelledby="heading-phases" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="phases"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Boxes className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
