import {
  CornerDownLeft,
  Database,
  Lightbulb,
  Link2,
  ListPlus,
  type LucideIcon,
  PlayCircle,
  Rocket,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { MountStepId, UseStateInternalsContent } from '../content';

type Props = { content: UseStateInternalsContent['mountFlow'] };

const stepIcon: Record<MountStepId, LucideIcon> = {
  call: PlayCircle,
  hook: Link2,
  'lazy-init': Rocket,
  store: Database,
  queue: ListPlus,
  bind: Zap,
  return: CornerDownLeft,
};

export const MountStateFlow = ({ content }: Props) => {
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
      id="mount-flow"
      aria-labelledby="heading-mount-flow"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="mount-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Rocket className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
