import { Layers, Lightbulb, PackageOpen, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RefAsPropElementShapeContent } from '../content';

type Props = { content: RefAsPropElementShapeContent['wrapper'] };

export const WrapperGap = ({ content }: Props) => (
  <section id="wrapper" aria-labelledby="heading-wrapper" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="wrapper"
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
        title={content.before.title}
        badge={content.before.badge}
        description={content.before.description}
        bullets={content.before.bullets}
      />

      <CompareBridge
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="teal"
        icon={Layers}
        title={content.after.title}
        badge={content.after.badge}
        description={content.after.description}
        bullets={content.after.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
