import { History, type LucideIcon, Sparkles, Split } from 'lucide-react';

import { CompareBridge } from '../../../shared/compare';
import { ToneDetailCard } from '../../../shared/detail';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19ErrorReportingContent, SideId } from '../content';

type Props = { content: React19ErrorReportingContent['change'] };

const sideIcon: Record<SideId, LucideIcon> = {
  before: History,
  after: Sparkles,
};

export const WhatChanged = ({ content }: Props) => {
  const [before, after] = content.sides;

  return (
    <section id="change" aria-labelledby="heading-change" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="change"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Split className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md items-stretch">
        <ToneDetailCard
          tone={before.tone}
          icon={sideIcon[before.id]}
          title={before.title}
          badge={before.badge}
          description={before.description}
          bullets={before.bullets}
        />
        <CompareBridge
          icon={<Split className="h-5 w-5" aria-hidden="true" />}
          headline={content.bridge.headline}
          sub={content.bridge.sub}
        />
        <ToneDetailCard
          tone={after.tone}
          icon={sideIcon[after.id]}
          title={after.title}
          badge={after.badge}
          description={after.description}
          bullets={after.bullets}
        />
      </div>
    </section>
  );
};
