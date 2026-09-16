import { type LucideIcon, Split, Timer, Wind } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ApiSideId, TransitionDeferredContent } from '../content';

type Props = { content: TransitionDeferredContent['apis'] };

const sideIcon: Record<ApiSideId, LucideIcon> = {
  transition: Timer,
  deferred: Wind,
};

export const TwoDeferApis = ({ content }: Props) => {
  const [transition, deferred] = content.sides;

  return (
    <section id="apis" aria-labelledby="heading-apis" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="apis"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={transition.tone}
          icon={sideIcon[transition.id]}
          title={transition.title}
          badge={transition.badge}
          description={transition.description}
          bullets={transition.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={deferred.tone}
          icon={sideIcon[deferred.id]}
          title={deferred.title}
          badge={deferred.badge}
          description={deferred.description}
          bullets={deferred.bullets}
        />
      </div>
    </section>
  );
};
