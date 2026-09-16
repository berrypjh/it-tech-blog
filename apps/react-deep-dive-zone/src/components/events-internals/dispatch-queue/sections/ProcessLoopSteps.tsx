import {
  ArrowLeftRight,
  Crosshair,
  Lightbulb,
  type LucideIcon,
  PlayCircle,
  Repeat,
  ShieldOff,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { DispatchQueueContent, LoopStepId } from '../content';

type Props = { content: DispatchQueueContent['loop'] };

const stepIcon: Record<LoopStepId, LucideIcon> = {
  take: Repeat,
  direction: ArrowLeftRight,
  check: ShieldOff,
  'set-target': Crosshair,
  invoke: PlayCircle,
};

export const ProcessLoopSteps = ({ content }: Props) => {
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
    <section id="loop" aria-labelledby="heading-loop" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="loop"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Repeat className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
