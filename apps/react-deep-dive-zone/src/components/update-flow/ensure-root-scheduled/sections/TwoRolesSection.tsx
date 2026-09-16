import { cx } from '@berrypjh/react-ui';
import { CalendarCheck, Clock, Layers, type LucideIcon } from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent, RoleIcon } from '../content';

const roleIconByName: Record<RoleIcon, LucideIcon> = {
  calendarCheck: CalendarCheck,
  clock: Clock,
};

type Props = { content: EnsureRootScheduledContent['roles'] };

export const TwoRolesSection = ({ content }: Props) => (
  <section id="roles" aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="roles"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md">
      {content.cards.map((card) => {
        const Icon = roleIconByName[card.icon];

        return (
          <ToneCardItem
            key={card.number}
            tone={card.tone}
            icon={<Icon className="h-5 w-5" />}
            topRight={card.number}
            badge={card.badge}
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
