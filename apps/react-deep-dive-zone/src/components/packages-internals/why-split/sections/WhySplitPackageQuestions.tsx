import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { WhySplitContent } from '../content';
import { architectureIcon, HelpCircleIcon } from '../icons';

type Props = { content: WhySplitContent['questions'] };

export const WhySplitPackageQuestions = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-questions" className="space-y-md">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = architectureIcon[card.iconName];

          return (
            <ToneCardItem key={card.id} tone={card.tone} icon={<Icon className="h-5 w-5" />}>
              <h3
                className={cn(
                  'text-md sm:text-lg font-bold font-mono tracking-tight break-keep [overflow-wrap:anywhere]',
                  toneTokens[card.tone].text,
                )}
              >
                {card.name}
              </h3>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.question}
              </p>
            </ToneCardItem>
          );
        })}
      </ul>
    </section>
  );
};
