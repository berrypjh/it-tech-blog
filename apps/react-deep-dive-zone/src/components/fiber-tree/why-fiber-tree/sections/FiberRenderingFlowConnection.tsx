import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberCentralContent } from '../content';
import {
  ActivityIcon,
  BoxesIcon,
  FlagIcon,
  PencilIcon,
  RepeatIcon,
  ShieldCheckIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FiberCentralContent['flow'] };

const iconMap = {
  cube: BoxesIcon,
  pulse: ActivityIcon,
  zap: ZapIcon,
  pencil: PencilIcon,
  flag: FlagIcon,
  shield: ShieldCheckIcon,
} as const;

export const FiberRenderingFlowConnection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RepeatIcon className="h-5 w-5" />}
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
