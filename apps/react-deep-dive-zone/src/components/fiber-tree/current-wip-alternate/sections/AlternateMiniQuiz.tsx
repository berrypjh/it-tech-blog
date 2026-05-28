import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CurrentWipAlternateContent, QuizCard } from '../content';
import { CheckCircleIcon, HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['quiz'] };

const tone = {
  emerald: {
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    answerBox:
      'border-emerald-300/70 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/30',
    answerBadge: 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
    answerLabel: 'text-emerald-700 dark:text-emerald-200',
    answerText: 'text-emerald-900 dark:text-emerald-100',
    check: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  },
  violet: {
    border: 'border-violet-200/80 dark:border-violet-800/60',
    answerBox:
      'border-violet-300/70 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/30',
    answerBadge: 'bg-violet-600 text-white dark:bg-violet-500 dark:text-slate-950',
    answerLabel: 'text-violet-700 dark:text-violet-200',
    answerText: 'text-violet-900 dark:text-violet-100',
    check: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  },
} as const;

export const AlternateMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md">
      {content.cards.map((card) => (
        <li key={card.id}>
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

const QuizCardItem = ({
  card,
  questionLabel,
  answerLabel,
  explanationLabel,
}: {
  card: QuizCard;
  questionLabel: string;
  answerLabel: string;
  explanationLabel: string;
}) => {
  const t = tone[card.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        t.border,
      )}
    >
      <div className="flex items-start gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0',
            'bg-sky-100 text-sky-700 font-mono font-bold',
            'dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          Q
        </span>
        <div className="flex flex-col gap-1 min-w-0 flex-1">
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            {questionLabel}
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
            {card.question}
          </p>
        </div>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
            t.check,
          )}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
      </div>

      <div className={cn('flex items-start gap-sm rounded-2xl border-2 p-md', t.answerBox)}>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-lg shrink-0 font-mono font-bold',
            t.answerBadge,
          )}
        >
          A
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={cn('text-[10px] uppercase tracking-wider font-mono', t.answerLabel)}>
            {answerLabel}
          </span>
          <code
            className={cn(
              'font-mono text-sm sm:text-md font-bold leading-snug break-all',
              t.answerText,
            )}
          >
            {card.answer}
          </code>
        </div>
      </div>

      <div
        className={cn(
          'mt-auto flex items-start gap-sm rounded-xl border px-sm py-2',
          'border-amber-200/80 bg-amber-50/60',
          'dark:border-amber-800/60 dark:bg-amber-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
        >
          <LightbulbIcon className="h-4 w-4" />
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="text-[10px] uppercase tracking-wider font-mono text-amber-700/80 dark:text-amber-300/80">
            {explanationLabel}
          </span>
          <p className="text-[11.5px] leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
            {card.explanation}
          </p>
        </div>
      </div>
    </article>
  );
};
