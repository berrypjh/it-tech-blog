import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FlowStep, ReactElementRefReact19Content } from '../content';
import { BoxesIcon, LayersIcon, MonitorIcon, SparklesIcon, UserIcon, WorkflowIcon } from '../icons';

type Props = { content: ReactElementRefReact19Content['flow'] };

const iconMap = {
  parent: UserIcon,
  middle: LayersIcon,
  child: BoxesIcon,
  dom: MonitorIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName];
  return {
    id: step.id,
    number: step.number,
    title: step.title,
    body: step.body,
    tone: step.tone,
    icon: <Icon className={cn('h-5 w-5', toneTokens[step.tone].text)} />,
  };
};

export const RefFlowDiagram = ({ content }: Props) => (
  <section id="flow" aria-labelledby="heading-flow" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="flow"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} columns={4} />

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-[var(--term-surface)] border border-[var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
