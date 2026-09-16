import {
  AlertTriangle,
  Lightbulb,
  type LucideIcon,
  Monitor,
  RefreshCw,
  Send,
  ShieldAlert,
  Unlink,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { MismatchDetectRecoverContent, RecoverStepId } from '../content';

type Props = { content: MismatchDetectRecoverContent['recover'] };

const stepIcon: Record<RecoverStepId, LucideIcon> = {
  'claim-fail': Unlink,
  throw: AlertTriangle,
  catch: ShieldAlert,
  'client-render': Monitor,
  report: Send,
};

export const RecoverySteps = ({ content }: Props) => {
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
    <section id="recover" aria-labelledby="heading-recover" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="recover"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<RefreshCw className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
