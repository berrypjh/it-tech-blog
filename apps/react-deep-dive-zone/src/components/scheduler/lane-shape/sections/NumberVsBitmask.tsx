import { Binary, Hash, Lightbulb, type LucideIcon, SplitSquareHorizontal } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { LaneShapeContent, SideId } from '../content';

type Props = { content: LaneShapeContent['whyBits'] };

const sideIcon: Record<SideId, LucideIcon> = {
  number: Hash,
  bitmask: Binary,
};

export const NumberVsBitmask = ({ content }: Props) => {
  const [number, bitmask] = content.sides;

  return (
    <section id="why-bits" aria-labelledby="heading-why-bits" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="why-bits"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={number.tone}
          icon={sideIcon[number.id]}
          title={number.title}
          badge={number.badge}
          description={number.description}
          bullets={number.bullets}
        />
        <CompareVs />
        <ToneDetailCard
          tone={bitmask.tone}
          icon={sideIcon[bitmask.id]}
          title={bitmask.title}
          badge={bitmask.badge}
          description={bitmask.description}
          bullets={bitmask.bullets}
        />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
