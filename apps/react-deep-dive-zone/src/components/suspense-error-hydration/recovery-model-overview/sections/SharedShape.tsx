import {
  ArrowUp,
  Flag,
  Lightbulb,
  type LucideIcon,
  RotateCcw,
  Search,
  Workflow,
  Zap,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RecoveryModelOverviewContent, ShapeStepId } from '../content';

type Props = { content: RecoveryModelOverviewContent['shape'] };

const stepIcon: Record<ShapeStepId, LucideIcon> = {
  interrupt: Zap,
  mark: Search,
  climb: ArrowUp,
  capture: Flag,
  recover: RotateCcw,
};

export const SharedShape = ({ content }: Props) => {
  const rows: StepRow[] = content.steps.map((step) => {
    const Icon = stepIcon[step.id];
    return {
      id: step.id,
      num: step.num,
      tone: step.tone,
      icon: <Icon className="h-[1.125rem] w-[1.125rem]" />,
      title: step.title,
      description: step.description,
    };
  });

  return (
    <section id="shape" aria-labelledby="heading-shape" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="shape"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Workflow className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
