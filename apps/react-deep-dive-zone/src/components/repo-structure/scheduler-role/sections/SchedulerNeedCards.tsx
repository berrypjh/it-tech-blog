import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { SchedulerContent } from '../content';
import { CircleHelpIcon, iconByName } from '../icons';

type Props = { content: SchedulerContent['need'] };

export const SchedulerNeedCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-need" className="space-y-lg">
      <SectionHeader
        id="need"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              badge={card.example}
            >
              <h3
                className={cn(
                  'text-md sm:text-lg font-bold tracking-tight break-keep whitespace-pre-line',
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
