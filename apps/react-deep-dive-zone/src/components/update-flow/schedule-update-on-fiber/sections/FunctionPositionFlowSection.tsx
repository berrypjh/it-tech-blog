import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FunctionFlowStep, ScheduleUpdateOnFiberContent } from '../content';
import { flowIconByName, TargetIcon, WorkflowIcon } from '../icons';

type Props = { content: ScheduleUpdateOnFiberContent['flow'] };

const amber = toneTokens.amber;
const violet = toneTokens.violet;
const sky = toneTokens.sky;

const toFlowStep = (step: FunctionFlowStep, idx: number): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.id,
    number: String(idx + 1),
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className="h-5 w-5" />,
  };
};

export const FunctionPositionFlowSection = ({ content }: Props) => (
  <section id="section-flow" aria-labelledby="heading-flow" className="space-y-md">
    <SectionHeader
      id="flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <div
      className={cn(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="amber" size="sm">
          <TargetIcon className="h-[18px] w-[18px]" />
        </ToneIconBox>
        <span
          className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', amber.text)}
        >
          {content.keyPointTitle}
        </span>
      </header>
      <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.keyPointBody}
      </p>
      <ul className="flex flex-wrap items-center gap-1.5">
        <li className={cn('rounded-md border px-2 py-0.5 text-[10px] font-mono', violet.chip)}>
          Fiber-level
        </li>
        <li className="text-[10px] font-mono text-[var(--term-muted)]">→</li>
        <li className={cn('rounded-md border px-2 py-0.5 text-[10px] font-mono', sky.chip)}>
          Root pending
        </li>
      </ul>
    </div>
  </section>
);
