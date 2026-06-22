import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { WhyReact19Content } from '../content';
import { SparkIcon, topicIconByName } from '../icons';

type Props = { content: WhyReact19Content['focusTopics'] };

export const React19FocusTopics = ({ content }: Props) => {
  return (
    <section id="section-focus" aria-labelledby="heading-focus" className="space-y-lg">
      <SectionHeader
        id="focus"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparkIcon className="h-5 w-5" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = topicIconByName[card.icon];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3
                className={cn(
                  'text-sm sm:text-md font-bold tracking-tight break-keep leading-snug',
                  toneTokens[card.tone].text,
                )}
              >
                {card.title}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep flex-1">
                {card.description}
              </p>

              <ul className="flex flex-wrap gap-1.5 mt-auto">
                {card.tags.map((tag) => (
                  <li
                    key={tag}
                    className={cn(
                      'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono border',
                      toneTokens[card.tone].chip,
                    )}
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
