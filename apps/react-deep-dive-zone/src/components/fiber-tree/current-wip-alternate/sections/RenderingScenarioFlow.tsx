import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CurrentWipAlternateContent } from '../content';
import { ActivityIcon, CheckCircleIcon, PauseIcon, PencilIcon, WorkflowIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['scenario'] };

const iconMap = {
  pulse: ActivityIcon,
  workflow: WorkflowIcon,
  pencil: PencilIcon,
  pause: PauseIcon,
  check: CheckCircleIcon,
} as const;

export const RenderingScenarioFlow = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
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
