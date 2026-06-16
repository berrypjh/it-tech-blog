import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/FlowStepsGrid';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberFlowStep, ReactElementKeySeparatedContent } from '../content';
import { KeyIcon, RecycleIcon, SparklesIcon, SplitIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementKeySeparatedContent['fiber'] };

const iconMap = {
  key: KeyIcon,
  workflow: WorkflowIcon,
  recycle: RecycleIcon,
  split: SplitIcon,
} as const;

const toFlowStep = (step: FiberFlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return { ...step, icon: <Icon className="h-5 w-5" /> };
};

export const FiberReuseConnection = ({ content }: Props) => (
  <section id="fiber" aria-labelledby="heading-fiber" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="fiber"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-accent)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
