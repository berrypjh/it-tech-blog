import { cx } from '@berrypjh/react-ui';
import { Code2, ListChecks, type LucideIcon, Search, ShieldCheck } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReadingStep, TestCodeContent } from '../content';

const stepIcon: Record<ReadingStep['number'], LucideIcon> = {
  '1': ListChecks,
  '2': Search,
  '3': ShieldCheck,
  '4': Code2,
};

type Props = { content: TestCodeContent['steps'] };

const toFlowStep = (step: ReadingStep): FlowStepItem => {
  const Icon = stepIcon[step.number];
  return {
    id: step.number,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const TestReadingSteps = ({ content }: Props) => (
  <section aria-labelledby="heading-steps" className="space-y-md">
    <SectionHeader
      id="steps"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
