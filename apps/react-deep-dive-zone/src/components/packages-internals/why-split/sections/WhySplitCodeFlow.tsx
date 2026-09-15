import { cx } from '@berrypjh/react-ui';
import {
  ArrowRight,
  Atom,
  Boxes,
  Clock,
  Code,
  Layers,
  type LucideIcon,
  Monitor,
} from 'lucide-react';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, WhySplitContent } from '../content';

type Props = { content: WhySplitContent['codeFlow'] };

const stepIcon: Record<FlowStep['id'], LucideIcon> = {
  useState: Atom,
  element: Code,
  render: Boxes,
  'dom-connect': Monitor,
  scheduler: Clock,
  shared: Layers,
};

const toFlowStep = (step: FlowStep, index: number): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return {
    id: step.id,
    number: String(index + 1),
    title: step.title,
    body: formatInline(`→ \`${step.pkg}\` · ${step.description}`),
    tone: step.tone,
    icon: <Icon className={cx('h-5 w-5', toneTokens[step.tone].text)} aria-hidden="true" />,
  };
};

export const WhySplitCodeFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-code-flow" className="space-y-md">
    <SectionHeader
      id="code-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
    />

    <CodePreviewPanel
      code={content.code}
      header={content.codeCaption}
      caption={content.codeLabel}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
