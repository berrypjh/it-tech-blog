import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/code';
import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, WhySplitContent } from '../content';
import { architectureIcon, ArrowRightIcon } from '../icons';

type Props = { content: WhySplitContent['codeFlow'] };

const toFlowStep = (step: FlowStep, index: number): FlowStepItem => {
  const Icon = architectureIcon[step.iconName];
  return {
    id: step.id,
    number: String(index + 1),
    title: step.title,
    body: formatInline(`→ \`${step.pkg}\` · ${step.description}`),
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const WhySplitCodeFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-code-flow" className="space-y-md">
    <SectionHeader
      id="code-flow"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowRightIcon className="h-5 w-5" />}
    />

    <CodePreviewPanel code={content.code} header={content.codeCaption} caption="사용자 코드 예시" />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={3} />
  </section>
);
