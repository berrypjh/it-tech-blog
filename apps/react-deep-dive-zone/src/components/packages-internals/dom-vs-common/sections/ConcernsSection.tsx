import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { DvcContent } from '../content';
import { dvcIcon, SparklesIcon } from '../icons';

type Props = { content: DvcContent['concerns'] };

export const ConcernsSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concerns" className="space-y-md">
      <SectionHeader
        id="concerns"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = dvcIcon[card.iconName];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3
                className={cn(
                  'text-md font-bold tracking-tight break-keep',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep break-words">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
