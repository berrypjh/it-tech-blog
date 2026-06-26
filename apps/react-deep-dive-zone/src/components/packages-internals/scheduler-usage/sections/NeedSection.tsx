import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SchedulerContent } from '../content';
import { schedulerIcon, SparklesIcon } from '../icons';

type Props = { content: SchedulerContent['needs'] };

export const NeedSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-needs" className="space-y-md">
      <SectionHeader
        id="needs"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = schedulerIcon[card.iconName];

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

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
