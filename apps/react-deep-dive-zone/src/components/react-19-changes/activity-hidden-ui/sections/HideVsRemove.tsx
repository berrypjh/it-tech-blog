import { EyeOff, Lightbulb, Split, Trash2 } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ActivityHiddenUiContent } from '../content';

type Props = { content: ActivityHiddenUiContent['versus'] };

export const HideVsRemove = ({ content }: Props) => (
  <section id="versus" aria-labelledby="heading-versus" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="versus"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={Trash2}
        title={content.conditional.title}
        badge={content.conditional.badge}
        description={content.conditional.description}
        bullets={content.conditional.bullets}
      />

      <CompareBridge
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="violet"
        icon={EyeOff}
        title={content.activity.title}
        badge={content.activity.badge}
        description={content.activity.description}
        bullets={content.activity.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
