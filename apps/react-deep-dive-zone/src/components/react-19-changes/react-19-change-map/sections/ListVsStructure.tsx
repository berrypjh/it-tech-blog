import { LayoutList, Lightbulb, Map, Shuffle } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['trap'] };

export const ListVsStructure = ({ content }: Props) => (
  <section id="trap" aria-labelledby="heading-trap" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="trap"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Shuffle className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={LayoutList}
        title={content.list.title}
        badge={content.list.badge}
        description={content.list.description}
        bullets={content.list.bullets}
      />

      <CompareBridge
        icon={<Shuffle className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="blue"
        icon={Map}
        title={content.structure.title}
        badge={content.structure.badge}
        description={content.structure.description}
        bullets={content.structure.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
