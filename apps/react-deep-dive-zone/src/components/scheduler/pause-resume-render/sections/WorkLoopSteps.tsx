import {
  Clock,
  Eye,
  Lightbulb,
  type LucideIcon,
  PlayCircle,
  Repeat,
  RotateCcw,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { LoopStepId, PauseResumeContent } from '../content';

type Props = { content: PauseResumeContent['workLoop'] };

const stepIcon: Record<LoopStepId, LucideIcon> = {
  peek: Eye,
  'check-expired': Clock,
  'should-yield': Repeat,
  run: PlayCircle,
  continuation: RotateCcw,
};

export const WorkLoopSteps = ({ content }: Props) => {
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
    <section id="work-loop" aria-labelledby="heading-work-loop" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="work-loop"
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
