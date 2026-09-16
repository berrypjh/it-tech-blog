import { cx } from '@berrypjh/react-ui';
import { ArrowUp, Crosshair, Lightbulb, ListPlus, type LucideIcon, Tag } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AccumulateListenersContent, WalkStepId } from '../content';

type Props = { content: AccumulateListenersContent['walk'] };

const stepIcon: Record<WalkStepId, LucideIcon> = {
  start: Crosshair,
  'read-prop': Tag,
  push: ListPlus,
  reverse: ArrowUp,
};

export const FiberWalkSteps = ({ content }: Props) => {
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
    <section id="walk" aria-labelledby="heading-walk" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="walk"
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
