import { ToneBadge } from '../../_shared/ToneBadge';
import { ToneCard } from '../../_shared/ToneCard';
import { ToneIconBox } from '../../_shared/ToneIconBox';
import { SectionHeader } from '../components/SectionHeader';
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

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md">
        {content.cards.map((card) => {
          const Icon = iconByName[card.icon];

          return (
            <li key={card.id}>
              <ToneCard tone={card.tone} className="relative">
                <div className="flex items-start justify-between">
                  <ToneIconBox tone={card.tone}>
                    <Icon className="h-5 w-5" />
                  </ToneIconBox>
                  <span className="text-xxsm tabular-nums text-[var(--term-muted)] font-bold">
                    {card.number}
                  </span>
                </div>

                <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                  {card.question.map((line, i) => (
                    <span key={i} className="block">
                      {line}
                    </span>
                  ))}
                </p>

                <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
                  <ToneBadge tone={card.tone}>{card.badge}</ToneBadge>
                </div>
              </ToneCard>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
