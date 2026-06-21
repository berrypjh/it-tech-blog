import { SectionHeader } from '../../../shared/SectionHeader';
import { ToneCardGrid, ToneCardItem } from '../../../shared/tone';
import type { WhySourceContent } from '../content';
import { iconByName, QuestionIcon } from '../icons';

type Props = { content: WhySourceContent['questions'] };

export const ReactQuestionCards = ({ content }: Props) => {
  return (
    <section id="section-questions" aria-labelledby="heading-questions" className="space-y-lg">
      <SectionHeader
        id="questions"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<QuestionIcon className="h-5 w-5" />}
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
