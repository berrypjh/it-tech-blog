import { cx } from '@berrypjh/react-ui';
import { Boxes, Code2, Lightbulb, type LucideIcon, Route, Settings2, Target } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ChangeId, RefAsPropElementShapeContent } from '../content';

type Props = { content: RefAsPropElementShapeContent['changes'] };

const cardIcon: Record<ChangeId, LucideIcon> = {
  declaration: Code2,
  route: Route,
  shape: Boxes,
  imperative: Settings2,
};

export const WhatMovedCards = ({ content }: Props) => (
  <section id="changes" aria-labelledby="heading-changes" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="changes"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Target className="h-5 w-5" aria-hidden="true" />}
    />

    <ToneCardGrid>
      {content.cards.map((card) => {
        const Icon = cardIcon[card.id];
        return (
          <ToneCardItem
            key={card.id}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.badge}
          >
            <div className="flex min-w-0 flex-col gap-2">
              <h3
                className={cx(
                  'text-sm sm:text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>
              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                {card.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
