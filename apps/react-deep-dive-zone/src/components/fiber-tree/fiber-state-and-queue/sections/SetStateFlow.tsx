import { List, type LucideIcon, MousePointerClick, Package, Sparkles, Zap } from 'lucide-react';

import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberStateAndQueueContent, FlowStep } from '../content';

type Props = { content: FiberStateAndQueueContent['setStateFlow'] };

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  click: MousePointerClick,
  setstate: Zap,
  update: Package,
  enqueue: List,
  process: Sparkles,
};

export const SetStateFlow = ({ content }: Props) => (
  <section id="setstate" aria-labelledby="heading-setstate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="setstate"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Zap className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList
      rows={content.steps.map((step) => {
        const Icon = stepIcon[step.id];
        return {
          id: step.id,
          num: step.number,
          tone: step.tone,
          icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
          title: step.title,
          description: step.body,
        };
      })}
    />
  </section>
);
