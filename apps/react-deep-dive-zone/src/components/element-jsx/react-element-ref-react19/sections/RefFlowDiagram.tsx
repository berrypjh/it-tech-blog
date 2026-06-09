import { cn } from '@it-tech-blog/utils';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/FlowStepsGrid';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FlowStep, ReactElementRefReact19Content } from '../content';
import {
  BoxesIcon,
  CpuIcon,
  LayersIcon,
  MonitorIcon,
  SparklesIcon,
  UserIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: ReactElementRefReact19Content['flow'] };

const iconMap = {
  parent: UserIcon,
  middle: LayersIcon,
  child: BoxesIcon,
  dom: MonitorIcon,
} as const;

const toFlowStep = (step: FlowStep): FlowStepItem => {
  const Icon = iconMap[step.iconName] ?? CpuIcon;
  return { ...step, icon: <Icon className="h-5 w-5" /> };
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

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl px-md py-md',
        'bg-gradient-to-r from-sky-50 via-violet-50 to-teal-50',
        'dark:from-sky-950/40 dark:via-violet-950/40 dark:to-teal-950/40',
        'border border-sky-200/70 dark:border-sky-800/60',
      )}
    >
      <span
        aria-hidden="true"
        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-500/15 text-sky-700 dark:text-sky-300 shrink-0"
      >
        <SparklesIcon className="h-5 w-5" />
      </span>
      <p className="text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.emphasis}
      </p>
    </div>
  </section>
);
