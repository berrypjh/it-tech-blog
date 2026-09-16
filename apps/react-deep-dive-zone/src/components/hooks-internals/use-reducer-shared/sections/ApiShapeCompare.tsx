import { Layers, Lightbulb, type LucideIcon, Settings2, SplitSquareHorizontal } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ApiSideId, UseReducerSharedContent } from '../content';

type Props = { content: UseReducerSharedContent['apiShape'] };

const sideIcon: Record<ApiSideId, LucideIcon> = {
  state: Layers,
  reducer: Settings2,
};

export const ApiShapeCompare = ({ content }: Props) => {
  const [state, reducer] = content.sides;

  return (
    <section id="api-shape" aria-labelledby="heading-api-shape" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="api-shape"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SplitSquareHorizontal className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={state.tone}
          icon={sideIcon[state.id]}
          title={state.title}
          badge={state.badge}
          description={state.description}
          bullets={state.bullets}
        />
        <CompareVs />
        <ToneDetailCard
          tone={reducer.tone}
          icon={sideIcon[reducer.id]}
          title={reducer.title}
          badge={reducer.badge}
          description={reducer.description}
          bullets={reducer.bullets}
        />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
