import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { RenderPhaseIntroContent } from '../content';
import { SparklesIcon, workIconByName } from '../icons';

type Props = { content: RenderPhaseIntroContent['work'] };

export const RenderPhaseWorkCards = ({ content }: Props) => (
  <section id="work-cards" aria-labelledby="heading-work-cards" className="space-y-md">
    <SectionHeader
      id="work-cards"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ToneCardGrid>
      {content.cards.map((card, idx) => {
        const Icon = workIconByName[card.icon];
        return (
          <ToneCardItem
            key={card.title}
            tone={card.tone}
            icon={<Icon className={cn('h-5 w-5', toneTokens[card.tone].text)} />}
            topRight={idx + 1}
          >
            <h3
              className={cn(
                'text-sm sm:text-md font-bold leading-tight break-keep',
                toneTokens[card.tone].text,
              )}
            >
              {card.title}
            </h3>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {card.description}
            </p>
          </ToneCardItem>
        );
      })}
    </ToneCardGrid>
  </section>
);
