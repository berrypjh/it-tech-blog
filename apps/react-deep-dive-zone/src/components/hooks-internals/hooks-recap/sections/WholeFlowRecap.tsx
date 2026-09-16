import {
  Boxes,
  CalendarClock,
  Database,
  Lightbulb,
  Link2,
  type LucideIcon,
  PlayCircle,
  Repeat,
  Route,
  Workflow,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FlowStepId, HooksRecapContent } from '../content';

type Props = { content: HooksRecapContent['fullFlow'] };

const stepIcon: Record<FlowStepId, LucideIcon> = {
  call: PlayCircle,
  resolve: Route,
  'render-with-hooks': Boxes,
  link: Link2,
  store: Database,
  dispatch: CalendarClock,
  reprocess: Repeat,
  effects: Workflow,
};

export const WholeFlowRecap = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      num: step.num,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
    };
  });

  return (
    <section id="full-flow" aria-labelledby="heading-full-flow" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="full-flow"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
