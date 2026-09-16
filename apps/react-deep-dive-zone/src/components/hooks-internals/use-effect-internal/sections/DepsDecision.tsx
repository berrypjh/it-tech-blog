import { type LucideIcon, PlayCircle, Scale, SkipForward } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { DepsSideId, UseEffectInternalsContent } from '../content';

type Props = { content: UseEffectInternalsContent['deps'] };

const sideIcon: Record<DepsSideId, LucideIcon> = {
  same: SkipForward,
  different: PlayCircle,
};

export const DepsDecision = ({ content }: Props) => {
  const [same, different] = content.sides;

  return (
    <section id="deps" aria-labelledby="heading-deps" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="deps"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Scale className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={same.tone}
          icon={sideIcon[same.id]}
          title={same.title}
          badge={same.badge}
          description={same.description}
          bullets={same.bullets}
        />
        <CompareBridge
          icon={<Scale className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={different.tone}
          icon={sideIcon[different.id]}
          title={different.title}
          badge={different.badge}
          description={different.description}
          bullets={different.bullets}
        />
      </div>
    </section>
  );
};
