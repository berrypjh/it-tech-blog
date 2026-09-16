import { cx } from '@berrypjh/react-ui';
import { Box, Layers, Lightbulb, type LucideIcon, Timer, Zap } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { CarrierId, UpdateToLaneContent } from '../content';

type Props = { content: UpdateToLaneContent['carriers'] };

const carrierIcon: Record<CarrierId, LucideIcon> = {
  priority: Zap,
  transition: Timer,
  'render-lanes': Layers,
};

export const ContextCarriers = ({ content }: Props) => (
  <section id="carriers" aria-labelledby="heading-carriers" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="carriers"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Box className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.items.map((carrier) => {
        const Icon = carrierIcon[carrier.id];
        return (
          <ToneCardItem
            key={carrier.id}
            tone={carrier.tone}
            icon={<Icon className="h-5 w-5" />}
            badge={carrier.role}
          >
            <div className="flex flex-col gap-2 min-w-0">
              <code
                className={cx(
                  'font-mono text-xsm font-bold tracking-tight break-all',
                  toneTokens[carrier.tone].text,
                )}
              >
                {carrier.name}
              </code>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {carrier.description}
              </p>
            </div>
          </ToneCardItem>
        );
      })}
    </ul>

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
