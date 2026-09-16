import {
  ArrowRightLeft,
  Boxes,
  Crosshair,
  KeyRound,
  Lightbulb,
  type LucideIcon,
  MousePointerClick,
  ShieldAlert,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ConvertStepId, TargetToFiberContent } from '../content';

type Props = { content: TargetToFiberContent['conversion'] };

const stepIcon: Record<ConvertStepId, LucideIcon> = {
  native: MousePointerClick,
  'get-target': Crosshair,
  closest: KeyRound,
  blocked: ShieldAlert,
  handoff: Boxes,
};

export const DomToFiberConversion = ({ content }: Props) => {
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
      id="conversion"
      aria-labelledby="heading-conversion"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="conversion"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowRightLeft className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
