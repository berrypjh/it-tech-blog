import { type LucideIcon, RefreshCw, Rocket, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { DispatcherSideId, RenderWithHooksContent } from '../content';

type Props = { content: RenderWithHooksContent['dispatcherSwitch'] };

const sideIcon: Record<DispatcherSideId, LucideIcon> = {
  mount: Rocket,
  update: RefreshCw,
};

export const DispatcherSwitchCompare = ({ content }: Props) => {
  const [mount, update] = content.sides;

  return (
    <section
      id="dispatcher-switch"
      aria-labelledby="heading-dispatcher-switch"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="dispatcher-switch"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={mount.tone}
          icon={sideIcon[mount.id]}
          title={mount.title}
          badge={mount.badge}
          description={mount.description}
          bullets={mount.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={update.tone}
          icon={sideIcon[update.id]}
          title={update.title}
          badge={update.badge}
          description={update.description}
          bullets={update.bullets}
        />
      </div>
    </section>
  );
};
