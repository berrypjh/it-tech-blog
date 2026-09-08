import { Activity, CheckCircle2, Pause, Pencil, Workflow } from 'lucide-react';

import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CurrentWipAlternateContent } from '../content';

type Props = { content: CurrentWipAlternateContent['scenario'] };

const iconMap = {
  pulse: Activity,
  workflow: Workflow,
  pencil: Pencil,
  pause: Pause,
  check: CheckCircle2,
} as const;

export const RenderingScenarioFlow = ({ content }: Props) => (
  <section id="scenario" aria-labelledby="heading-scenario" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="scenario"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
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
