import { cx } from '@berrypjh/react-ui';
import { CircleHelp, Clock, type LucideIcon, Puzzle, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { NeedCard, SchedulerContent } from '../content';

const cardIcon: Record<NeedCard['id'], LucideIcon> = {
  input: Zap,
  split: Puzzle,
  defer: Clock,
};

type Props = { content: SchedulerContent['need'] };

export const SchedulerNeedCards = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-need" className="space-y-lg">
      <SectionHeader
        id="need"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<CircleHelp className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              badge={card.example}
            >
              <h3
                className={cx(
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
