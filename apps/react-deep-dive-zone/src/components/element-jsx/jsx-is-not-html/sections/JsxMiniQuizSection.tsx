import { cn } from '@it-tech-blog/utils';

import { CodePanel } from '../../../shared/CodePanel';
import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { JsxIsNotHtmlContent, QuizCard } from '../content';
import { CheckCircleIcon, ListChecksIcon } from '../icons';

type Props = { content: JsxIsNotHtmlContent['quiz'] };

export const JsxMiniQuizSection = ({ content }: Props) => (
  <section aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <QuizCardView card={card} answerLabel={content.answerLabel} />
        </li>
      ))}
    </ul>
  </section>
);

const QuizCardView = ({ card, answerLabel }: { card: QuizCard; answerLabel: string }) => {
  const t = toneTokens[card.tone];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {card.question}
      </p>

      {card.code && <CodePanel code={card.code} language="JSX" />}

      <div
        role="group"
        aria-label={answerLabel}
        className={cn(
          'flex items-start justify-between gap-md rounded-lg border px-md py-3 mt-auto',
          'border-emerald-300/80 bg-emerald-50',
          'dark:border-emerald-800/70 dark:bg-emerald-950/40',
        )}
      >
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              'border-emerald-300/80 bg-emerald-100 text-emerald-700',
              'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
            )}
          >
            {answerLabel}
          </span>
          <p className="text-xsm font-bold text-emerald-900 dark:text-emerald-100 break-keep">
            {card.answer}
          </p>
          <p className="text-xsm leading-relaxed text-emerald-800/90 dark:text-emerald-200/80 break-keep">
            {card.explanation}
          </p>
        </div>
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 shrink-0"
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
      </div>
    </article>
  );
};
