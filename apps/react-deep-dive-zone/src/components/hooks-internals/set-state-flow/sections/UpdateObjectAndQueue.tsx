import { cx } from '@berrypjh/react-ui';
import { CircleDot, FilePlus2, Lightbulb, ListPlus, type LucideIcon, Repeat } from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { QueueStageId, SetStateFlowContent } from '../content';

type Props = { content: SetStateFlowContent['updateShape'] };

const stageIcon: Record<QueueStageId, LucideIcon> = {
  empty: CircleDot,
  one: Repeat,
  many: ListPlus,
};

export const UpdateObjectAndQueue = ({ content }: Props) => {
  const steps: FlowStepItem[] = content.stages.map((stage) => {
    const Icon = stageIcon[stage.id];
    return {
      id: stage.id,
      badge: stage.badge,
      title: stage.title,
      body: stage.body,
      tone: stage.tone,
      icon: <Icon className={cx('h-5 w-5', toneTokens[stage.tone].text)} aria-hidden="true" />,
    };
  });

  return (
    <section id="update" aria-labelledby="heading-update" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="update"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FilePlus2 className="h-5 w-5" aria-hidden="true" />}
      />

      <CodePreviewPanel header={content.codeHeader} badge="main" code={content.code} />

      <FlowStepsGrid steps={steps} columns={3} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
