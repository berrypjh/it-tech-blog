'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { QuizAnswer, QuizItem, WhyReadNextSourceContent } from '../content';
import { SplitIcon } from '../icons';

type Props = { content: WhyReadNextSourceContent['quiz'] };

const order: QuizAnswer[] = ['react', 'next', 'both'];

const optionTone: Record<QuizAnswer, string> = {
  react:
    'border-indigo-400 bg-indigo-50 text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-100',
  next: 'border-cyan-400 bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100',
  both: 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100',
};

const QuizCard = ({
  item,
  categories,
  labels,
}: {
  item: QuizItem;
  categories: WhyReadNextSourceContent['quiz']['categories'];
  labels: WhyReadNextSourceContent['quiz']['labels'];
}) => {
  const [selected, setSelected] = useState<QuizAnswer | null>(null);
  const revealed = selected !== null;
  const isCorrect = selected === item.answer;

  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-lg border bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]',
        revealed && isCorrect
          ? 'border-emerald-300 dark:border-emerald-700'
          : revealed
            ? 'border-rose-300 dark:border-rose-700'
            : 'border-[var(--term-border)]',
      )}
    >
      <div className="flex items-center justify-between gap-2">
        <code className="rounded border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-1 font-mono text-xsm font-bold text-[var(--term-fg)] [overflow-wrap:anywhere]">
          {item.label}
        </code>
        {revealed && (
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="text-[10px] font-bold text-[var(--term-muted)] hover:text-[var(--term-accent)] underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] rounded px-1"
          >
            {labels.reset}
          </button>
        )}
      </div>

      <div role="radiogroup" aria-label={item.label} className="grid grid-cols-3 gap-1">
        {order.map((cat) => {
          const isSelected = selected === cat;
          const isAnswer = cat === item.answer;
          const showCorrect = revealed && isAnswer;
          const showWrong = revealed && isSelected && !isAnswer;
          return (
            <button
              key={cat}
              type="button"
              role="radio"
              aria-checked={isSelected}
              onClick={() => setSelected(cat)}
              className={cn(
                'rounded-md border px-1.5 py-2 text-[11px] font-bold leading-tight break-keep transition-colors',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-1 focus-visible:ring-offset-[var(--term-bg)]',
                showCorrect || showWrong || isSelected
                  ? optionTone[cat]
                  : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
              )}
            >
              {categories[cat]}
            </button>
          );
        })}
      </div>

      {/* 피드백 */}
      <div
        aria-live="polite"
        className={cn(
          'mt-auto rounded-md border p-sm',
          revealed && isCorrect
            ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30'
            : revealed
              ? 'border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/30'
              : 'border-[var(--term-border)] bg-[var(--term-surface)]',
        )}
      >
        {revealed ? (
          <>
            <p
              className={cn(
                'text-xsm font-bold',
                isCorrect
                  ? 'text-emerald-700 dark:text-emerald-200'
                  : 'text-rose-700 dark:text-rose-200',
              )}
            >
              {isCorrect ? labels.correct : labels.wrong}
              <span className="ml-1 font-normal text-[var(--term-muted)]">
                — {categories[item.answer]}
              </span>
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
              <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--term-dim)]">
                {labels.answer}
              </span>
              {item.explanation}
            </p>
          </>
        ) : (
          <p className="text-[11px] text-[var(--term-muted)]">{labels.prompt}</p>
        )}
      </div>
    </article>
  );
};

export const ResponsibilityQuiz = ({ content }: Props) => {
  return (
    <section id="section-quiz" aria-labelledby="heading-quiz" className="space-y-lg">
      <SectionHeader
        id="quiz"
        eyebrow="02 · classify"
        title={content.title}
        description={content.description}
        icon={<SplitIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md">
        {content.items.map((item) => (
          <li key={item.id} className="flex">
            <QuizCard item={item} categories={content.categories} labels={content.labels} />
          </li>
        ))}
      </ul>
    </section>
  );
};
