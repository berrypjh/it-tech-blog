import {
  CalendarClock,
  Gauge,
  Layers,
  Lightbulb,
  Link2,
  type LucideIcon,
  MousePointerClick,
  Shuffle,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ChainStepId, PriorityAxesContent } from '../content';

type Props = { content: PriorityAxesContent['chain'] };

const stepIcon: Record<ChainStepId, LucideIcon> = {
  event: MousePointerClick,
  resolve: Gauge,
  'to-lane': Shuffle,
  merge: Layers,
  pick: Link2,
  'host-task': CalendarClock,
};

export const AxisChainFlow = ({ content }: Props) => {
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
    <section id="chain" aria-labelledby="heading-chain" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="chain"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
