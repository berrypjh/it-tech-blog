import { cx } from '@berrypjh/react-ui';
import {
  Box,
  CircleCheck,
  Database,
  FunctionSquare,
  History,
  type LucideIcon,
  MousePointer2,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, UsageVsInternalsContent } from '../content';

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  click: MousePointer2,
  dispatch: FunctionSquare,
  queue: Database,
  schedule: History,
  render: Box,
  commit: CircleCheck,
};

type Props = { content: UsageVsInternalsContent['flow'] };

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return {
    ...step,
    body: formatInline(step.body),
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const CounterUpdateFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<MousePointer2 className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
