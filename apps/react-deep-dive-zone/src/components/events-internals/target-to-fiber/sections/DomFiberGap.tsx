import { Boxes, Lightbulb, MousePointerClick, SplitSquareHorizontal } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { TargetToFiberContent } from '../content';

type Props = { content: TargetToFiberContent['gap'] };

export const DomFiberGap = ({ content }: Props) => (
  <section id="gap" aria-labelledby="heading-gap" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="gap"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="sky"
        icon={MousePointerClick}
        title={content.dom.label}
        description={content.dom.caption}
        bullets={content.dom.bullets}
      />
      <CompareVs />
      <ToneDetailCard
        tone="indigo"
        icon={Boxes}
        title={content.fiber.label}
        description={content.fiber.caption}
        bullets={content.fiber.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
