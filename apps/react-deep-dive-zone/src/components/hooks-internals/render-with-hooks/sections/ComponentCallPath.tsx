import { Code2, Cpu, Lightbulb, type LucideIcon, Route } from 'lucide-react';

import { CompareVs } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { CallSideId, RenderWithHooksContent } from '../content';

type Props = { content: RenderWithHooksContent['callPath'] };

const sideIcon: Record<CallSideId, LucideIcon> = {
  authored: Code2,
  internal: Cpu,
};

export const ComponentCallPath = ({ content }: Props) => {
  const [authored, internal] = content.sides;

  return (
    <section id="call-path" aria-labelledby="heading-call-path" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="call-path"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={authored.tone}
          icon={sideIcon[authored.id]}
          title={authored.title}
          badge={authored.badge}
          description={authored.description}
          bullets={authored.bullets}
        />
        <CompareVs />
        <ToneDetailCard
          tone={internal.tone}
          icon={sideIcon[internal.id]}
          title={internal.title}
          badge={internal.badge}
          description={internal.description}
          bullets={internal.bullets}
        />
      </div>

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
