import { Lightbulb, type LucideIcon, PenLine, Repeat, SplitSquareHorizontal } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { NamingSideId, OnClickToClickContent } from '../content';

type Props = { content: OnClickToClickContent['naming'] };

const sideIcon: Record<NamingSideId, LucideIcon> = {
  simple: Repeat,
  special: PenLine,
};

export const RuleVsException = ({ content }: Props) => {
  const [simple, special] = content.sides;

  return (
    <section id="naming" aria-labelledby="heading-naming" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="naming"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={simple.tone}
          icon={sideIcon[simple.id]}
          title={simple.title}
          badge={simple.badge}
          description={simple.description}
          bullets={simple.bullets}
        />
        <CompareVs />
        <ToneDetailCard
          tone={special.tone}
          icon={sideIcon[special.id]}
          title={special.title}
          badge={special.badge}
          description={special.description}
          bullets={special.bullets}
        />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
