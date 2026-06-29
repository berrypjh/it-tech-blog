import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent, LaneFlowStep } from '../content';
import { CrosshairIcon, laneFlowIconByName, LightbulbIcon } from '../icons';

type Props = { content: DispatchSetStateEntryContent['laneReason'] };

const amber = toneTokens.amber;

const toFlowStep = (step: LaneFlowStep): FlowStepItem => {
  const Icon = laneFlowIconByName[step.icon];
  return {
    id: step.number,
    number: step.number,
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const LaneFirstReasonSection = ({ content }: Props) => (
  <section id="section-lane-reason" aria-labelledby="heading-lane-reason" className="space-y-md">
    <SectionHeader
      id="lane-reason"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CrosshairIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <LightbulbIcon className="h-3.5 w-3.5" />
      </ToneIconBox>
      <p className="text-xsm sm:text-sm font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
        {content.intro}
      </p>
    </div>

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
