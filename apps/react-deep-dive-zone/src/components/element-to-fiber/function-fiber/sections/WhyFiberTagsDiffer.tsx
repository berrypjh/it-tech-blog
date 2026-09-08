import { cn } from '@it-tech-blog/utils';

import { Database, HelpCircle, Phone, Zap } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FunctionClassComponentFiberContent } from '../content';

type Props = { content: FunctionClassComponentFiberContent['reasons'] };

const iconMap = {
  phone: Phone,
  database: Database,
  zap: Zap,
} as const;

export const WhyFiberTagsDiffer = ({ content }: Props) => (
  <section id="reasons" aria-labelledby="heading-reasons" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="reasons"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];

        return (
          <ToneCardItem key={card.id} tone={card.accent} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-sm sm:text-md font-bold tracking-tight break-keep',
                toneTokens[card.accent].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
