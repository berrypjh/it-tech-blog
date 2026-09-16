import { CalendarClock, type LucideIcon, Split, Zap } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PathSideId, PickNextWorkContent } from '../content';

type Props = { content: PickNextWorkContent['paths'] };

const sideIcon: Record<PathSideId, LucideIcon> = {
  sync: Zap,
  async: CalendarClock,
};

export const SyncAsyncPaths = ({ content }: Props) => {
  const [sync, async] = content.sides;

  return (
    <section id="paths" aria-labelledby="heading-paths" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="paths"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={sync.tone}
          icon={sideIcon[sync.id]}
          title={sync.title}
          badge={sync.badge}
          description={sync.description}
          bullets={sync.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={async.tone}
          icon={sideIcon[async.id]}
          title={async.title}
          badge={async.badge}
          description={async.description}
          bullets={async.bullets}
        />
      </div>
    </section>
  );
};
