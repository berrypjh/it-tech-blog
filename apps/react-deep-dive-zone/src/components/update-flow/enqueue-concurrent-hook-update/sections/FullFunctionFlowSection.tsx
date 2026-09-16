import { cx } from '@berrypjh/react-ui';
import { Database, FunctionSquare, type LucideIcon, Network, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type {
  EnqueueConcurrentHookUpdateContent,
  FunctionFlowIcon,
  FunctionFlowStep,
} from '../content';

const flowIconByName: Record<FunctionFlowIcon, LucideIcon> = {
  function: FunctionSquare,
  workflow: Workflow,
  database: Database,
  network: Network,
};

type Props = { content: EnqueueConcurrentHookUpdateContent['flow'] };

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

export const FullFunctionFlowSection = ({ content }: Props) => (
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
  </section>
);
