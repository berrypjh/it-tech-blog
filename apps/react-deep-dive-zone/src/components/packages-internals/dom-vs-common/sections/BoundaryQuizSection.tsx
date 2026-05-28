import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { toneTokens } from '../../../shared/tones';
import type { DvcContent, QuizCard } from '../content';
import { CheckCircleIcon, HelpCircleIcon, XCircleIcon } from '../icons';

type Props = { content: DvcContent['quiz'] };

export const BoundaryQuizSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="flex">
            <QuizCardView card={card} index={index + 1} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const QuizCardView = ({ card, index }: { card: QuizCard; index: number }) => {
  const tone = toneTokens[card.tone];
  const answerIcon = card.positive ? CheckCircleIcon : XCircleIcon;
  const AnswerIcon = answerIcon;

  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        tone.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-sm">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono font-bold tabular-nums">
          Q{String(index).padStart(2, '0')}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full',
            card.positive
              ? 'border border-emerald-300/80 bg-emerald-100 text-emerald-700 dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300'
              : 'border border-red-300/80 bg-red-100 text-red-700 dark:border-red-800/70 dark:bg-red-950/60 dark:text-red-300',
          )}
        >
          <AnswerIcon className="h-5 w-5" />
        </span>
      </header>

      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        Q. {card.question}
      </p>

      <div
        role="group"
        aria-label="answer"
        className={cn('flex items-center gap-sm rounded-lg border px-md py-3', tone.chip)}
      >
        <span
          className={cn(
            'text-[10px] uppercase tracking-wider font-bold font-mono shrink-0',
            tone.text,
          )}
        >
          A.
        </span>
        <span className={cn('text-sm font-bold break-words', tone.text)}>{card.answer}</span>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.explanation}
      </p>

      <span
        className={cn(
          'mt-auto inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-mono font-bold',
          'border-dashed border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
        )}
      >
        <span aria-hidden="true" className="text-[var(--term-accent)]">
          ●
        </span>
        {card.relatedFile}
      </span>
    </article>
  );
};
