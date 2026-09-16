import { Box, Lightbulb, ListPlus, type LucideIcon, PlayCircle, Radio, Repeat } from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HostTaskRunnerContent, QueueStepId } from '../content';

type Props = { content: HostTaskRunnerContent['queue'] };

const stepIcon: Record<QueueStepId, LucideIcon> = {
  build: Box,
  push: ListPlus,
  'host-callback': Radio,
  'work-loop': Repeat,
  run: PlayCircle,
};

export const TaskQueueFlow = ({ content }: Props) => {
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
    <section id="queue" aria-labelledby="heading-queue" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="queue"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListPlus className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
