import {
  Box,
  Flag,
  Lightbulb,
  Link2,
  type LucideIcon,
  PlayCircle,
  Route,
  Scale,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { EffectStepId, UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['flow'] };

const stepIcon: Record<EffectStepId, LucideIcon> = {
  call: PlayCircle,
  hook: Link2,
  compare: Scale,
  push: Box,
  flag: Flag,
  run: Route,
};

export const EffectRegistrationFlow = ({ content }: Props) => {
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
      id="effect-flow"
      aria-labelledby="heading-effect-flow"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="effect-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
