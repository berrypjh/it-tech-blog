import { Layers, Lightbulb, Server, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React192ReadingMethodContent } from '../content';

type Props = { content: React192ReadingMethodContent['resume'] };

export const PrerenderResume = ({ content }: Props) => (
  <section id="resume" aria-labelledby="heading-resume" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="resume"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={Server}
        title={content.once.title}
        badge={content.once.badge}
        description={content.once.description}
        bullets={content.once.bullets}
      />

      <CompareBridge
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="emerald"
        icon={Layers}
        title={content.split.title}
        badge={content.split.badge}
        description={content.split.description}
        bullets={content.split.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
