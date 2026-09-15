import { Key, type LucideIcon, Recycle, Sparkles, Split, Workflow } from 'lucide-react';

import { type FlowStepItem, FlowStepsGrid } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FiberFlowStep, ReactElementKeySeparatedContent } from '../content';

type Props = { content: ReactElementKeySeparatedContent['fiber'] };

const stepIcon: Record<FiberFlowStep['id'], LucideIcon> = {
  'element-key': Key,
  reconciliation: Workflow,
  reuse: Recycle,
  decision: Split,
};

const toFlowStep = (step: FiberFlowStep): FlowStepItem => {
  const Icon = stepIcon[step.id];
  return { ...step, icon: <Icon className="h-5 w-5" /> };
};

export const FiberReuseConnection = ({ content }: Props) => (
  <section id="fiber" aria-labelledby="heading-fiber" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="fiber"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
    />

    <FlowStepsGrid steps={content.steps.map(toFlowStep)} />

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);
