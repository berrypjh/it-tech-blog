import { Droplets, type LucideIcon, Split, Sprout } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HydrationStartContent, SideId } from '../content';

type Props = { content: HydrationStartContent['compare'] };

const sideIcon: Record<SideId, LucideIcon> = {
  create: Sprout,
  hydrate: Droplets,
};

export const RootCompare = ({ content }: Props) => {
  const [create, hydrate] = content.sides;

  return (
    <section id="compare" aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="compare"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={create.tone}
          icon={sideIcon[create.id]}
          title={create.title}
          badge={create.badge}
          description={create.description}
          bullets={create.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={hydrate.tone}
          icon={sideIcon[hydrate.id]}
          title={hydrate.title}
          badge={hydrate.badge}
          description={hydrate.description}
          bullets={hydrate.bullets}
        />
      </div>
    </section>
  );
};
