import { cn } from '@it-tech-blog/utils';

import {
  CalendarClock,
  Code2,
  Database,
  FilePlus,
  Flag,
  Layers,
  Loader,
  MousePointer,
  Play,
  Sparkles,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { InternalFlowStep, StateUpdateStartContent } from '../content';

const flowIconByName = {
  mouse: MousePointer,
  play: Play,
  code: Code2,
  flag: Flag,
  filePlus: FilePlus,
  database: Database,
  calendar: CalendarClock,
  loader: Loader,
} as const;

type Props = { content: StateUpdateStartContent['internalFlow'] };

const amber = toneTokens.amber;

const toFlowStep = (step: InternalFlowStep): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.label,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const InternalFlowPreviewSection = ({ content }: Props) => (
  <section
    id="section-internal-flow"
    aria-labelledby="heading-internal-flow"
    className="space-y-md"
  >
    <SectionHeader
      id="internal-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <div
      className={cn(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
      </ToneIconBox>
      <p className="text-xsm sm:text-sm font-semibold leading-snug text-[var(--term-fg)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);
