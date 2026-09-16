import { Ban, type LucideIcon, ShieldOff, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ControlSideId, SyntheticEventContent } from '../content';

type Props = { content: SyntheticEventContent['control'] };

const sideIcon: Record<ControlSideId, LucideIcon> = {
  prevent: Ban,
  stop: ShieldOff,
};

export const PreventVsStop = ({ content }: Props) => {
  const [prevent, stop] = content.sides;

  return (
    <section id="control" aria-labelledby="heading-control" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="control"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={prevent.tone}
          icon={sideIcon[prevent.id]}
          title={prevent.title}
          badge={prevent.badge}
          description={prevent.description}
          bullets={prevent.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={stop.tone}
          icon={sideIcon[stop.id]}
          title={stop.title}
          badge={stop.badge}
          description={stop.description}
          bullets={stop.bullets}
        />
      </div>
    </section>
  );
};
