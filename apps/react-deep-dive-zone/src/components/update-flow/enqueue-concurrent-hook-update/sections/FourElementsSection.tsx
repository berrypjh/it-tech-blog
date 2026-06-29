import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnqueueConcurrentHookUpdateContent } from '../content';
import { elementIconByName, LayersIcon } from '../icons';

type Props = { content: EnqueueConcurrentHookUpdateContent['elements'] };

export const FourElementsSection = ({ content }: Props) => (
  <section id="section-elements" aria-labelledby="heading-elements" className="space-y-md">
    <SectionHeader
      id="elements"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
      {content.cards.map((card) => {
        const Icon = elementIconByName[card.icon];
        const t = toneTokens[card.tone];

        return (
          <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
            <h3
              className={cn(
                'text-md sm:text-lg font-bold font-mono tracking-tight break-keep',
                t.text,
              )}
            >
              {card.title}
            </h3>

            <p className={cn('text-xsm font-bold leading-snug break-keep', t.text)}>
              {card.question}
            </p>

            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.body}
            </p>
          </ToneCardItem>
        );
      })}
    </ul>
  </section>
);
