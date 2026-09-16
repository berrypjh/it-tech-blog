import {
  Brush,
  Eye,
  EyeOff,
  Lightbulb,
  type LucideIcon,
  RotateCcw,
  ShieldCheck,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ActivityHiddenUiContent, LifeStepId } from '../content';

type Props = { content: ActivityHiddenUiContent['lifecycle'] };

const stepIcon: Record<LifeStepId, LucideIcon> = {
  using: Eye,
  switch: EyeOff,
  cleanup: Brush,
  preserve: ShieldCheck,
  back: RotateCcw,
};

export const RoundTripSteps = ({ content }: Props) => {
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
    <section id="lifecycle" aria-labelledby="heading-lifecycle" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="lifecycle"
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
