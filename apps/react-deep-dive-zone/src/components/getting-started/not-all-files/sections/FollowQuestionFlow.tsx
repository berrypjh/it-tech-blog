import { cn } from '@it-tech-blog/utils';

import {
  Anchor,
  Box,
  CircleCheck,
  Clock,
  Database,
  FunctionSquare,
  type LucideIcon,
  Network,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, NotAllFilesContent } from '../content';

const stepIcon: Record<FlowStep['num'], LucideIcon> = {
  '1': Anchor,
  '2': FunctionSquare,
  '3': Database,
  '4': Clock,
  '5': Box,
  '6': CircleCheck,
};

type Props = { content: NotAllFilesContent['followFlow'] };

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = stepIcon[step.num];
  return {
    id: step.num,
    number: step.num,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const FollowQuestionFlow = ({ content }: Props) => (
  <section id="section-follow-flow" aria-labelledby="heading-follow-flow" className="space-y-lg">
    <SectionHeader
      id="follow-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Network className="h-5 w-5" aria-hidden="true" />}
    />

    {/* 메인 질문 카드 */}
    <div className="rounded-2xl border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)] text-center">
      <p className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold mb-1">
        main question
      </p>
      <h3 className="text-lg sm:text-xl lg:text-xxl font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
        {content.mainQuestion}
      </h3>
    </div>

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
