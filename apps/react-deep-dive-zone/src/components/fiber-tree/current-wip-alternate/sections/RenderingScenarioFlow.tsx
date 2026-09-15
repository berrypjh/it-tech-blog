import { Activity, CheckCircle2, type LucideIcon, Pause, Pencil, Workflow } from 'lucide-react';

import { NumberedStepList } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CurrentWipAlternateContent, ScenarioStep } from '../content';

type Props = { content: CurrentWipAlternateContent['scenario'] };

const stepIcon: Record<ScenarioStep['id'], LucideIcon> = {
  update: Activity,
  prepare: Workflow,
  render: Pencil,
  keepCurrent: Pause,
  switch: CheckCircle2,
};

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
