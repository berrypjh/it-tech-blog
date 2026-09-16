import { cx } from '@berrypjh/react-ui';
import { Crosshair, Database, Lightbulb, type LucideIcon, PenTool, Server } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DispatchSetStateEntryContent, LaneFlowIcon, LaneFlowStep } from '../content';

const laneFlowIconByName: Record<LaneFlowIcon, LucideIcon> = {
  crosshair: Crosshair,
  database: Database,
  server: Server,
  penTool: PenTool,
};

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
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const LaneFirstReasonSection = ({ content }: Props) => (
  <section
    id="lane-reason"
    aria-labelledby="heading-lane-reason"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="lane-reason"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Crosshair className="h-5 w-5" aria-hidden="true" />}
    />

    <div
      className={cx(
        'flex items-start gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <ToneIconBox tone="amber" size="sm">
        <Lightbulb className="h-3.5 w-3.5" aria-hidden="true" />
      </ToneIconBox>
      <p className="text-xsm sm:text-sm font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
        {content.intro}
      </p>
    </div>

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
