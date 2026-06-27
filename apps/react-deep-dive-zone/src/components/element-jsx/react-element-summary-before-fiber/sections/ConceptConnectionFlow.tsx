import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { AnswerStep, ReactElementSummaryBeforeFiberContent } from '../content';
import { BoxIcon, CheckCircleIcon, CodeIcon, NetworkIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['conceptFlow'] };

const stepIconByIndex = [CodeIcon, WorkflowIcon, BoxIcon, NetworkIcon];

const toFlowStep = (step: AnswerStep, idx: number): FlowStepItem => {
  const Icon = stepIconByIndex[idx % stepIconByIndex.length];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const ConceptConnectionFlow = ({ content }: Props) => (
  <section
    id="concept-flow"
    aria-labelledby="heading-concept-flow"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="concept-flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* 한 줄 JSX가 거치는 변환 흐름 */}
      <FlowStepsGrid steps={content.answerSteps.map(toFlowStep)} columns={4} />

      {/* 결론 */}
      <div
        className={cn(
          'flex items-center gap-sm rounded-xl border p-md',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.emphasis}
        </p>
      </div>
    </div>
  </section>
);
