import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { FragmentModeFiberContent, QuizCard } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: FragmentModeFiberContent['understanding'] };

const accentTokens = {
  purple: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    surface: 'bg-violet-50 border-violet-300/80 dark:bg-violet-950/40 dark:border-violet-700/70',
    text: 'text-violet-700 dark:text-violet-300',
    answerText: 'text-violet-900 dark:text-violet-100',
    chip: 'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
    check: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
  },
  green: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    surface:
      'bg-emerald-50 border-emerald-300/80 dark:bg-emerald-950/40 dark:border-emerald-700/70',
    text: 'text-emerald-700 dark:text-emerald-300',
    answerText: 'text-emerald-900 dark:text-emerald-100',
    chip: 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
    check: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
  },
} as const;

export const UnderstandingCheck = ({ content }: Props) => (
  <section
    id="understanding"
    aria-labelledby="heading-understanding"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="understanding"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <QuizCardView
            card={card}
            answerLabel={content.answerLabel}
            reasonLabel={content.reasonLabel}
          />
        </li>
      ))}
    </ul>
  </section>
);

const QuizCardView = ({
  card,
  answerLabel,
  reasonLabel,
}: {
  card: QuizCard;
  answerLabel: string;
  reasonLabel: string;
}) => {
  const a = accentTokens[card.accent];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        a.border,
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex items-center justify-center min-w-[2.25rem] h-7 rounded-md px-2',
            'font-mono text-xsm font-bold tabular-nums tracking-wider border',
            a.chip,
          )}
          aria-hidden="true"
        >
          {card.badge}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
          question
        </span>
      </header>

      <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.question}
      </p>

      <div className={cn('flex items-start gap-sm rounded-xl border p-md', a.surface)}>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
            a.check,
          )}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className={cn('text-[10px] uppercase tracking-wider font-mono font-bold', a.text)}>
            {answerLabel}
          </span>
          <p className={cn('text-sm sm:text-md font-bold leading-snug break-keep', a.answerText)}>
            {card.answer}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
          {reasonLabel}
        </span>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.reason}
        </p>
      </div>
    </article>
  );
};
