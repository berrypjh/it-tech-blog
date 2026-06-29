import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent } from '../content';
import { LayersIcon, roleIconByName } from '../icons';

type Props = { content: EnsureRootScheduledContent['roles'] };

export const TwoRolesSection = ({ content }: Props) => (
  <section id="section-roles" aria-labelledby="heading-roles" className="space-y-md">
    <SectionHeader
      id="roles"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<LayersIcon className="h-5 w-5" />}
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
              className={cn(
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
