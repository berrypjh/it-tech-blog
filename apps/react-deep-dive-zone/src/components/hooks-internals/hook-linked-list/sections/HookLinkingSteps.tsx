import { cx } from '@berrypjh/react-ui';
import { Anchor, Lightbulb, Link2, type LucideIcon, PlusCircle } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { HookLinkedListContent, LinkStepId } from '../content';

type Props = { content: HookLinkedListContent['linking'] };

const stepIcon: Record<LinkStepId, LucideIcon> = {
  create: PlusCircle,
  first: Anchor,
  rest: Link2,
};

export const HookLinkingSteps = ({ content }: Props) => {
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
    <section id="linking" aria-labelledby="heading-linking" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="linking"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Link2 className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={3} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
