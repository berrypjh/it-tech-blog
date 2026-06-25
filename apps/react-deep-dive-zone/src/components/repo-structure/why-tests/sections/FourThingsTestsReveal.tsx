import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { TestCodeContent } from '../content';
import { iconByName, SparklesIcon } from '../icons';

type Props = { content: TestCodeContent['insights'] };

export const FourThingsTestsReveal = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-insights" className="space-y-lg">
      <SectionHeader
        id="insights"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" />}
              topRight={card.number}
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
      </ToneCardGrid>
    </section>
  );
};
