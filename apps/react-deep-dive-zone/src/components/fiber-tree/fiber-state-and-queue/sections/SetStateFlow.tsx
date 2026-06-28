import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberStateAndQueueContent } from '../content';
import { ListIcon, MouseClickIcon, PackageIcon, SparklesIcon, ZapIcon } from '../icons';

type Props = { content: FiberStateAndQueueContent['setStateFlow'] };

const iconMap = {
  cursor: MouseClickIcon,
  zap: ZapIcon,
  package: PackageIcon,
  list: ListIcon,
  sparkles: SparklesIcon,
} as const;

export const SetStateFlow = ({ content }: Props) => (
  <section id="setstate" aria-labelledby="heading-setstate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="setstate"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ZapIcon className="h-5 w-5" />}
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
