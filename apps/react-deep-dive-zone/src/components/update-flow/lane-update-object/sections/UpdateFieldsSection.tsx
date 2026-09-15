import { cx } from '@berrypjh/react-ui';
import { Crosshair, Gauge, Link2, Package, Sparkles, Undo2, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { LaneUpdateObjectContent } from '../content';

const updateFieldIconByName = {
  crosshair: Crosshair,
  zap: Zap,
  undo: Undo2,
  gauge: Gauge,
  sparkles: Sparkles,
  link: Link2,
} as const;

type Props = { content: LaneUpdateObjectContent['fields'] };

export const UpdateFieldsSection = ({ content }: Props) => (
  <section id="section-fields" aria-labelledby="heading-fields" className="space-y-md">
    <SectionHeader
      id="fields"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Package className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = updateFieldIconByName[card.icon];

        return (
          <ToneCardItem
            key={card.name}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={card.badge}
          >
            <h3
              className={cx(
                'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.name}
            </h3>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
