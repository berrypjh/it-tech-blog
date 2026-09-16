import { Braces, Lightbulb, Monitor, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ServerComponentsContractContent } from '../content';

type Props = { content: ServerComponentsContractContent['directives'] };

export const TwoDirectives = ({ content }: Props) => (
  <section id="directives" aria-labelledby="heading-directives" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="directives"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Split className="h-5 w-5" aria-hidden="true" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
      <ToneDetailCard
        tone="cyan"
        icon={Monitor}
        title={content.client.title}
        badge={content.client.badge}
        description={content.client.description}
        bullets={content.client.bullets}
      />

      <CompareBridge
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
        headline={content.bridge.headline}
        sub={content.bridge.sub}
      />

      <ToneDetailCard
        tone="teal"
        icon={Braces}
        title={content.server.title}
        badge={content.server.badge}
        description={content.server.description}
        bullets={content.server.bullets}
      />
    </div>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
