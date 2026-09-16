import {
  Droplets,
  FileCode,
  Lightbulb,
  type LucideIcon,
  Package,
  Radio,
  SquareDashed,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { StreamStepId, SuspenseHydrationLinkContent } from '../content';

type Props = { content: SuspenseHydrationLinkContent['streaming'] };

const stepIcon: Record<StreamStepId, LucideIcon> = {
  shell: FileCode,
  comment: SquareDashed,
  resolve: Radio,
  inject: Package,
  claim: Droplets,
};

export const StreamingSteps = ({ content }: Props) => {
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
    <section id="streaming" aria-labelledby="heading-streaming" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="streaming"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Radio className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
