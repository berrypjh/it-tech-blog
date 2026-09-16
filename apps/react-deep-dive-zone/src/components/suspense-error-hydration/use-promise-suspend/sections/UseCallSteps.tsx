import {
  Eye,
  Lightbulb,
  ListPlus,
  type LucideIcon,
  PlayCircle,
  RotateCcw,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UsePromiseSuspendContent, UseStepId } from '../content';

type Props = { content: UsePromiseSuspendContent['steps'] };

const stepIcon: Record<UseStepId, LucideIcon> = {
  call: PlayCircle,
  track: ListPlus,
  inspect: Eye,
  throw: Zap,
  resume: RotateCcw,
};

export const UseCallSteps = ({ content }: Props) => {
  const rows: StepRow[] = content.items.map((step) => {
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
    <section id="steps" aria-labelledby="heading-steps" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="steps"
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
