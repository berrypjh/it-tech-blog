import { cx } from '@berrypjh/react-ui';
import {
  CalendarClock,
  Code2,
  Database,
  FilePlus,
  Flag,
  Layers,
  Lightbulb,
  Loader,
  type LucideIcon,
  MousePointer,
  Play,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { InternalFlowIcon, InternalFlowStep, StateUpdateStartContent } from '../content';

const flowIconByName: Record<InternalFlowIcon, LucideIcon> = {
  mouse: MousePointer,
  play: Play,
  code: Code2,
  flag: Flag,
  filePlus: FilePlus,
  database: Database,
  calendar: CalendarClock,
  loader: Loader,
};

type Props = { content: StateUpdateStartContent['internalFlow'] };

const toFlowStep = (step: InternalFlowStep): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.label,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const InternalFlowPreviewSection = ({ content }: Props) => (
  <section
    id="internal-flow"
    aria-labelledby="heading-internal-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="internal-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
