import { cn } from '@it-tech-blog/utils';

import { ClipboardList, Gauge, Network, PauseCircle, ShieldCheck } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { FiberWhyNeededContent } from '../content';

type Props = { content: FiberWhyNeededContent['problems'] };

const iconMap = {
  network: Network,
  clipboard: ClipboardList,
  gauge: Gauge,
  pause: PauseCircle,
} as const;

export const FiberProblemCards = ({ content }: Props) => (
  <section id="problems" aria-labelledby="heading-problems" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="problems"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ShieldCheck className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = iconMap[card.iconName];
        return (
          <ToneCardItem key={card.id} tone={card.accent} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-sm sm:text-md font-extrabold tracking-tight break-keep whitespace-pre-line',
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
