import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FlowStep, ReactCreateElementContent } from '../content';
import { AtomIcon, CodeIcon, LightbulbIcon, SlidersIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactCreateElementContent['flow'] };

const iconMap = {
  code: CodeIcon,
  sliders: SlidersIcon,
  workflow: WorkflowIcon,
  atom: AtomIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return { ...step, icon: <Icon className="h-5 w-5" /> };
};

export const CreateElementFlow = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
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
        'border border-[var(--term-border)] bg-[var(--term-surface)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] shrink-0"
      >
        <LightbulbIcon className="h-5 w-5" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.bottomNoteLine1}
        </p>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.bottomNoteLine2}
        </p>
      </div>
    </div>
  </section>
);
