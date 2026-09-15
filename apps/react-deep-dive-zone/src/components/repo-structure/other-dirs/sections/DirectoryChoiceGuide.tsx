import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  Cuboid,
  FlaskConical,
  type LucideIcon,
  MapPinned,
  Sparkles,
  TerminalSquare,
} from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneChoiceCard } from '../../../shared/tone';
import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { SurroundingContent } from '../content';

const dirIcon: Record<'fixtures' | 'scripts' | 'compiler', LucideIcon> = {
  fixtures: FlaskConical,
  scripts: TerminalSquare,
  compiler: Cuboid,
};

type Props = { content: SurroundingContent['choice'] };

const toneCycle: ToneKey[] = ['amber', 'sky', 'violet'];

export const DirectoryChoiceGuide = ({ content }: Props) => {
  return (
    <section id="choice" aria-labelledby="heading-choice" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="choice"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<MapPinned className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, idx) => {
          const toneKey = toneCycle[idx % toneCycle.length];
          const Icon = dirIcon[card.id];
          return (
            <li key={card.id} className="flex">
              <ToneChoiceCard
                tone={toneKey}
                icon={<Icon className="h-5 w-5" aria-hidden="true" />}
                question={card.question}
                resultTone={toneKey}
                result={card.destination}
                lead={
                  <ArrowDown
                    className={cx(
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

      <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
        {content.banner}
      </SectionNote>
    </section>
  );
};
