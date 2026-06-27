import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
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

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);
