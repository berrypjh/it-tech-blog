import { cx } from '@berrypjh/react-ui';
import {
  BookOpen,
  FileText,
  FlaskConical,
  type LucideIcon,
  MousePointer2,
  Search,
  Tag,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { RoutineStep, WhyOpenSourceContent } from '../content';

const stepIcon: Record<RoutineStep['num'], LucideIcon> = {
  '1': FileText,
  '2': Search,
  '3': MousePointer2,
  '4': FlaskConical,
  '5': Tag,
};

type Props = { content: WhyOpenSourceContent['routine'] };

const toFlowStep = (step: RoutineStep): FlowStepItem => {
  const Icon = stepIcon[step.num];
  return {
    id: step.num,
    number: step.num,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const GitHubLearningRoutine = ({ content }: Props) => (
  <section id="section-routine" aria-labelledby="heading-routine" className="space-y-lg">
    <SectionHeader
      id="routine"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
