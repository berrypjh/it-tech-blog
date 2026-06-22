import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { WhyOpenSourceContent } from '../content';
import { DocIcon, perspectiveIconByName } from '../icons';

type Props = { content: WhyOpenSourceContent['perspectives'] };

export const GitHubPerspectiveCards = ({ content }: Props) => {
  return (
    <section
      id="section-perspectives"
      aria-labelledby="heading-perspectives"
      className="space-y-lg"
    >
      <SectionHeader
        id="perspectives"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<DocIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = perspectiveIconByName[card.icon];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
                {card.title}
              </h3>

              <p className={cn('text-xsm font-bold', toneTokens[card.tone].text)}>
                {card.subtitle}
              </p>

              <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1">
                {card.description}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
