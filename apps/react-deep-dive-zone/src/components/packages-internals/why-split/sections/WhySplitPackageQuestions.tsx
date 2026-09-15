import { cx } from '@berrypjh/react-ui';
import { Atom, Boxes, Clock, HelpCircle, Layers, type LucideIcon, Monitor } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardItem } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { QuestionCard, WhySplitContent } from '../content';

type Props = { content: WhySplitContent['questions'] };

const questionIcon: Record<QuestionCard['id'], LucideIcon> = {
  react: Atom,
  'react-dom': Monitor,
  'react-reconciler': Boxes,
  renderer: Monitor,
  scheduler: Clock,
  shared: Layers,
};

export const WhySplitPackageQuestions = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-questions" className="space-y-md">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => {
          const Icon = questionIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
            >
              <h3
                className={cx(
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
