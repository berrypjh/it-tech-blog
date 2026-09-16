import { Boxes, Lightbulb, PackageOpen, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { MetadataResourceContent } from '../content';

type Props = { content: MetadataResourceContent['before'] };

export const HeadOwnership = ({ content }: Props) => (
  <section id="before" aria-labelledby="heading-before" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="before"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={PackageOpen}
        title={content.outside.title}
        badge={content.outside.badge}
        description={content.outside.description}
        bullets={content.outside.bullets}
      />

      <CompareBridge
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="indigo"
        icon={Boxes}
        title={content.inside.title}
        badge={content.inside.badge}
        description={content.inside.description}
        bullets={content.inside.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
