import { cx } from '@berrypjh/react-ui';
import { ArrowUp, CalendarClock, Eraser, Lightbulb, type LucideIcon, Merge } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { MarkStepId, RootPendingWorkContent } from '../content';

type Props = { content: RootPendingWorkContent['marking'] };

const stepIcon: Record<MarkStepId, LucideIcon> = {
  climb: ArrowUp,
  or: Merge,
  unsuspend: Eraser,
  ensure: CalendarClock,
};

export const MarkingSteps = ({ content }: Props) => {
  const steps: FlowStepItem[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      badge: step.badge,
      title: step.title,
      body: step.body,
      tone: step.tone,
      icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
    };
  });

  return (
    <section id="marking" aria-labelledby="heading-marking" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="marking"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowUp className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={4} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
