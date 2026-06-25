import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { ToneChoiceCard } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';
import { ArrowDownIcon, iconByName, MapPinnedIcon, SparklesIcon } from '../icons';

type Props = { content: SurroundingContent['choice'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const DirectoryChoiceGuide = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-choice" className="space-y-md">
      <SectionHeader
        id="choice"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapPinnedIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, idx) => {
          const toneKey = toneCycle[idx % toneCycle.length];
          const Icon = iconByName[card.icon];
          return (
            <li key={card.id} className="flex">
              <ToneChoiceCard
                tone={toneKey}
                icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                question={card.question}
                resultTone={toneKey}
                result={card.destination}
                lead={
                  <ArrowDownIcon
                    className={cn(
                      'h-5 w-5 my-2 transition-transform group-hover:translate-y-0.5',
                      toneTokens[toneKey].text,
                    )}
                    aria-hidden="true"
                  />
                }
              />
            </li>
          );
        })}
      </ul>

      <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.banner}</SectionNote>
    </section>
  );
};
