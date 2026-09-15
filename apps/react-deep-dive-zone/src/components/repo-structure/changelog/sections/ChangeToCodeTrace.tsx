import { cx } from '@berrypjh/react-ui';
import {
  FileCode2,
  FileText,
  GitPullRequest,
  type LucideIcon,
  Package,
  Sparkles,
} from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ChangelogContent, TraceStep } from '../content';

const stepIcon: Record<TraceStep['id'], LucideIcon> = {
  note: FileText,
  pr: GitPullRequest,
  package: Package,
  file: FileCode2,
};

type Props = { content: ChangelogContent['trace'] };

const toFlowStep = (step: TraceStep): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.description,
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const ChangeToCodeTrace = ({ content }: Props) => (
  <section aria-labelledby="heading-trace" className="space-y-lg">
    <SectionHeader
      id="trace"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />
  </section>
);
