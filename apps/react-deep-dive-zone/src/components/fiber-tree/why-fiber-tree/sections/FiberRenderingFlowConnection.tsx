import { Activity, Boxes, Flag, Pencil, Repeat, ShieldCheck, Zap } from 'lucide-react';

import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberCentralContent } from '../content';

type Props = { content: FiberCentralContent['flow'] };

const iconMap = {
  cube: Boxes,
  pulse: Activity,
  zap: Zap,
  pencil: Pencil,
  flag: Flag,
  shield: ShieldCheck,
} as const;

export const FiberRenderingFlowConnection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Repeat className="h-5 w-5" aria-hidden="true" />}
    />

    <NumberedStepList
      rows={content.steps.map((step) => {
        const Icon = iconMap[step.iconName];
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
