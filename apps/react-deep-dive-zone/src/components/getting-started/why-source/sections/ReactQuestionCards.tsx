import { Clock, Gauge, HelpCircle, Key, type LucideIcon, Zap } from 'lucide-react';

import { SectionHeader } from '../../../shared/section';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import type { QuestionCard, WhySourceContent } from '../content';

type Props = { content: WhySourceContent['questions'] };

const cardIcon: Record<QuestionCard['id'], LucideIcon> = {
  'set-state': Clock,
  'use-effect': Zap,
  key: Key,
  transition: Gauge,
};

export const ReactQuestionCards = ({ content }: Props) => {
  return (
    <section id="section-questions" aria-labelledby="heading-questions" className="space-y-lg">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
      />

      <ToneCardGrid>
        {content.cards.map((card) => {
          const Icon = cardIcon[card.id];

          return (
            <ToneCardItem
              key={card.id}
              tone={card.tone}
              icon={<Icon className="h-5 w-5" aria-hidden="true" />}
              topRight={card.number}
              badge={card.badge}
            >
              <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.question.map((line, i) => (
                  <span key={i} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </ToneCardItem>
          );
        })}
      </ToneCardGrid>
    </section>
  );
};
