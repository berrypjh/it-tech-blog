import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { FiberFlagsContent, QuizCard } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: FiberFlagsContent['quiz'] };

export const FlagsMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <QuizCardItem
            card={card}
            questionLabel={content.questionLabel}
            answerLabel={content.answerLabel}
            explanationLabel={content.explanationLabel}
          />
        </li>
      ))}
    </ul>
  </section>
);

type ItemProps = {
  card: QuizCard;
  questionLabel: string;
  answerLabel: string;
  explanationLabel: string;
};

const QuizCardItem = ({ card, questionLabel, answerLabel, explanationLabel }: ItemProps) => (
  <article
    className={cn(
      'flex h-full flex-1 flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
    )}
  >
    <div className="flex items-start gap-sm">
      <LetterBadge tone="sky">Q</LetterBadge>
      <div className="flex flex-col gap-1 min-w-0">
        <span className={cn('text-[10px] uppercase tracking-wider font-mono', toneTokens.sky.text)}>
          {questionLabel}
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {card.question}
        </p>
      </div>
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-xl border p-md bg-[var(--term-surface)]',
        toneTokens.emerald.border,
      )}
    >
      <LetterBadge tone="emerald">A</LetterBadge>
      <div className="flex flex-col gap-1 min-w-0">
        <span
          className={cn('text-[10px] uppercase tracking-wider font-mono', toneTokens.emerald.text)}
        >
          {answerLabel}
        </span>
        <code
          className={cn(
            'font-mono text-sm sm:text-md font-bold leading-snug break-all',
            toneTokens.emerald.text,
          )}
        >
          {card.answer}
        </code>
      </div>
    </div>

    <SectionNote className="mt-auto" icon={<LightbulbIcon className="h-4 w-4" />}>
      <span className="font-normal">
        <span className="font-bold">{explanationLabel}</span> — {card.explanation}
      </span>
    </SectionNote>
  </article>
);

const LetterBadge = ({
  tone,
  children,
}: {
  tone: 'sky' | 'emerald';
  children: React.ReactNode;
}) => (
  <span
    aria-hidden="true"
    className={cn(
      'inline-flex items-center justify-center w-9 h-9 rounded-full border shrink-0 font-mono text-sm font-bold',
      toneTokens[tone].chip,
    )}
  >
    {children}
  </span>
);
