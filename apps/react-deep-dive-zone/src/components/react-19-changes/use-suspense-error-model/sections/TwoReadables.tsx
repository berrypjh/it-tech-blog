import { Boxes, Layers, Lightbulb, Loader } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UseSuspenseErrorModelContent } from '../content';

type Props = { content: UseSuspenseErrorModelContent['readable'] };

export const TwoReadables = ({ content }: Props) => (
  <section id="readable" aria-labelledby="heading-readable" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="readable"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="teal"
        icon={Loader}
        title={content.promise.title}
        badge={content.promise.badge}
        description={content.promise.description}
        bullets={content.promise.bullets}
      />

      <CompareBridge
        icon={<Layers className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="indigo"
        icon={Boxes}
        title={content.context.title}
        badge={content.context.badge}
        description={content.context.description}
        bullets={content.context.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
