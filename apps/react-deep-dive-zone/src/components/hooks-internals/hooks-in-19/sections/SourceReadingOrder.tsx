import {
  BookOpen,
  Download,
  Layers,
  Lightbulb,
  ListPlus,
  type LucideIcon,
  Radio,
} from 'lucide-react';

import { NumberedStepList, type StepRow } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19HooksContent, ReadStepId } from '../content';

type Props = { content: React19HooksContent['readingOrder'] };

const stepIcon: Record<ReadStepId, LucideIcon> = {
  foundation: Layers,
  'queue-based': ListPlus,
  'ref-based': Radio,
  suspense: Download,
};

export const SourceReadingOrder = ({ content }: Props) => {
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
    <section
      id="reading-order"
      aria-labelledby="heading-reading-order"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="reading-order"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
      />

      <NumberedStepList rows={rows} />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
