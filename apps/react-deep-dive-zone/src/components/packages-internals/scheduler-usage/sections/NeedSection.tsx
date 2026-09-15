import { cx } from '@berrypjh/react-ui';
import { Clock, Keyboard, type LucideIcon, Puzzle, Sparkles } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { NeedCard, SchedulerContent } from '../content';

type Props = { content: SchedulerContent['needs'] };

const needIcon: Record<NeedCard['id'], LucideIcon> = {
  input: Keyboard,
  split: Puzzle,
  defer: Clock,
};

export const NeedSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-needs" className="space-y-md">
      <SectionHeader
        id="needs"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Sparkles className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = needIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3
                className={cx(
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
