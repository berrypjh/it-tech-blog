import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { QuizCard, ReactDomContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: ReactDomContent['quiz'] };

const answerStyle = (answer: string): string => {
  if (answer.startsWith('react-dom')) {
    return 'border-teal-300/80 bg-teal-50 text-teal-900 dark:border-teal-800/70 dark:bg-teal-950/40 dark:text-teal-100';
  }
  return 'border-sky-300/80 bg-sky-50 text-sky-900 dark:border-sky-800/70 dark:bg-sky-950/40 dark:text-sky-100';
};

const answerTextColor = (answer: string): string => {
  if (answer.startsWith('react-dom')) {
    return 'text-teal-800 dark:text-teal-100';
  }
  return 'text-sky-800 dark:text-sky-100';
};

export const QuickQuizSection = ({ content }: Props) => {
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
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        'hover:border-teal-300/70 dark:hover:border-teal-700/60',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full',
            'border border-emerald-300/80 bg-emerald-100 text-emerald-700',
            'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
          )}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] tabular-nums font-mono">
          Quiz {String(index).padStart(2, '0')}
        </span>
      </header>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-mono font-bold">
          Q.
        </span>
        <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          {card.question}
        </p>
      </div>

      <div
        role="group"
        aria-label="answer"
        className={cn(
          'flex items-start gap-sm rounded-lg border px-md py-3',
          answerStyle(card.answer),
        )}
      >
        <span className="text-[10px] uppercase tracking-wider font-bold font-mono pt-0.5 opacity-80">
          A.
        </span>
        <span
          className={cn('text-sm font-bold font-mono break-words', answerTextColor(card.answer))}
        >
          {card.answer}
        </span>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.explanation}
      </p>
    </article>
  );
};
