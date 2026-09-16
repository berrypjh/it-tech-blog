import { cx } from '@berrypjh/react-ui';
import { FunctionSquare, type LucideIcon, Network, Target, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FunctionFlowIcon, FunctionFlowStep, ScheduleUpdateOnFiberContent } from '../content';

const flowIconByName: Record<FunctionFlowIcon, LucideIcon> = {
  function: FunctionSquare,
  workflow: Workflow,
  network: Network,
  target: Target,
};

type Props = { content: ScheduleUpdateOnFiberContent['flow'] };

const amber = toneTokens.amber;

const toFlowStep = (step: FunctionFlowStep, idx: number): FlowStepItem => {
  const Icon = flowIconByName[step.icon];
  return {
    id: step.id,
    number: String(idx + 1),
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const FunctionPositionFlowSection = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <div
      className={cx(
        'flex flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        amber.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <ToneIconBox tone="amber" size="sm">
          <Target className="h-[18px] w-[18px]" aria-hidden="true" />
        </ToneIconBox>
        <span
          className={cx('text-[10px] uppercase tracking-wider font-mono font-bold', amber.text)}
        >
          {content.keyPointTitle}
        </span>
      </header>
      <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.keyPointBody}
      </p>
    </div>
  </section>
);
