import { cx } from '@berrypjh/react-ui';
import { Flag, Layers, type LucideIcon, Repeat2, User } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { ResponsibilityIcon, ScheduleUpdateOnFiberContent } from '../content';

const responsibilityIconByName: Record<ResponsibilityIcon, LucideIcon> = {
  flag: Flag,
  user: User,
  repeat: Repeat2,
};

type Props = { content: ScheduleUpdateOnFiberContent['responsibilities'] };

export const CoreResponsibilitiesSection = ({ content }: Props) => (
  <section
    id="responsibilities"
    aria-labelledby="heading-responsibilities"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="responsibilities"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-3 gap-md">
      {content.cards.map((card) => {
        const Icon = responsibilityIconByName[card.icon];

        return (
          <ToneCardItem
            key={card.number}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
          >
            <h3
              className={cx(
                'text-md sm:text-lg font-bold tracking-tight leading-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
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
