import { Brackets, Lightbulb, Split, Zap } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UseEffectEventContent } from '../content';

type Props = { content: UseEffectEventContent['deps'] };

export const DependencySplit = ({ content }: Props) => (
  <section id="deps" aria-labelledby="heading-deps" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="deps"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={Brackets}
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
        tone="violet"
        icon={Zap}
        title={content.after.title}
        badge={content.after.badge}
        description={content.after.description}
        bullets={content.after.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
