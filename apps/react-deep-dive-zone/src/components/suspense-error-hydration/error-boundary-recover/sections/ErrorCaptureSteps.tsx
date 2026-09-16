import {
  AlertTriangle,
  ArrowUp,
  CheckCircle2,
  Lightbulb,
  ListPlus,
  type LucideIcon,
  Search,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CaptureStepId, ErrorBoundaryRecoverContent } from '../content';

type Props = { content: ErrorBoundaryRecoverContent['capture'] };

const stepIcon: Record<CaptureStepId, LucideIcon> = {
  throw: AlertTriangle,
  climb: ArrowUp,
  qualify: Search,
  enqueue: ListPlus,
  rerender: CheckCircle2,
};

export const ErrorCaptureSteps = ({ content }: Props) => {
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
    <section id="capture" aria-labelledby="heading-capture" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="capture"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ArrowUp className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
