import { GitCompare, Lightbulb, Sparkles, Wrench } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ActionsUpdateFlowContent } from '../content';

type Props = { content: ActionsUpdateFlowContent['before'] };

export const ManualVsAction = ({ content }: Props) => (
  <section id="before" aria-labelledby="heading-before" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="before"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="amber"
        icon={Wrench}
        title={content.manual.title}
        badge={content.manual.badge}
        description={content.manual.description}
        bullets={content.manual.bullets}
      />

      <CompareBridge
        icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="cyan"
        icon={Sparkles}
        title={content.action.title}
        badge={content.action.badge}
        description={content.action.description}
        bullets={content.action.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
