import { FileInput, Lightbulb, MousePointerClick, Scale } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { FormActionsEventSystemContent } from '../content';

type Props = { content: FormActionsEventSystemContent['which'] };

export const WhichActionWins = ({ content }: Props) => (
  <section id="which" aria-labelledby="heading-which" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="which"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Scale className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="cyan"
        icon={FileInput}
        title={content.form.title}
        badge={content.form.badge}
        description={content.form.description}
        bullets={content.form.bullets}
      />

      <CompareBridge
        icon={<Scale className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="violet"
        icon={MousePointerClick}
        title={content.button.title}
        badge={content.button.badge}
        description={content.button.description}
        bullets={content.button.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
