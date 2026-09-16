import { AlertTriangle, type LucideIcon, Split, Timer } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PromiseVsErrorSplitContent, SideId } from '../content';

type Props = { content: PromiseVsErrorSplitContent['split'] };

const sideIcon: Record<SideId, LucideIcon> = {
  suspense: Timer,
  error: AlertTriangle,
};

export const TwoMeanings = ({ content }: Props) => {
  const [suspense, error] = content.sides;

  return (
    <section id="split" aria-labelledby="heading-split" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="split"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={suspense.tone}
          icon={sideIcon[suspense.id]}
          title={suspense.title}
          badge={suspense.badge}
          description={suspense.description}
          bullets={suspense.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={error.tone}
          icon={sideIcon[error.id]}
          title={error.title}
          badge={error.badge}
          description={error.description}
          bullets={error.bullets}
        />
      </div>
    </section>
  );
};
