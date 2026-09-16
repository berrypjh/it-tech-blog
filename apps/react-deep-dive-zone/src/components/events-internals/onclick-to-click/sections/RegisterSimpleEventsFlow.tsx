import { cx } from '@berrypjh/react-ui';
import { Layers, Lightbulb, List, type LucideIcon, Repeat, Table2 } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { OnClickToClickContent, RegisterStepId } from '../content';

type Props = { content: OnClickToClickContent['registration'] };

const stepIcon: Record<RegisterStepId, LucideIcon> = {
  list: List,
  loop: Repeat,
  name: Table2,
  'two-phase': Layers,
};

export const RegisterSimpleEventsFlow = ({ content }: Props) => {
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
    <section
      id="registration"
      aria-labelledby="heading-registration"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="registration"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<List className="h-5 w-5" aria-hidden="true" />}
      />

      <FlowStepsGrid steps={steps} columns={4} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
