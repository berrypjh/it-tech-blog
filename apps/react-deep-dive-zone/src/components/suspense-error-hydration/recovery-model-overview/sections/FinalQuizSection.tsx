'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { QuizCard, RecoveryModelOverviewContent } from '../content';
import { CheckCircleIcon, InfoIcon, XCircleIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['quiz'] };

type QuizState = { picked?: QuizCard['answer'] };

const QuizCardView = ({
  card,
  state,
  onPick,
  labels,
}: {
  card: QuizCard;
  state: QuizState;
  onPick: (key: QuizCard['answer']) => void;
  labels: {
    selectLabel: string;
    correctLabel: string;
    incorrectLabel: string;
    explanationLabel: string;
  };
}) => {
  const picked = state.picked;
  const isAnswered = picked !== undefined;
  const isCorrect = isAnswered && picked === card.answer;

  return (
    <article
      className={cn(
        'flex flex-col gap-md h-full rounded-3xl border-2 p-md sm:p-lg',
        isAnswered
          ? isCorrect
            ? 'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/70 dark:bg-emerald-950/20'
            : 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/20'
          : 'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-colors',
      )}
    >
      <header className="flex items-center gap-2">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white text-xsm font-mono font-bold uppercase tracking-wider dark:bg-blue-500"
        >
          {card.id.toUpperCase()}
        </span>
        {isAnswered &&
          (isCorrect ? (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200">
              <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
              {labels.correctLabel}
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-2.5 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200">
              <XCircleIcon className="h-3 w-3" aria-hidden="true" />
              {labels.incorrectLabel}
            </span>
          ))}
      </header>
      <h3 className="text-md font-bold text-[var(--term-fg)] break-keep leading-snug">
        {card.question}
      </h3>
      <div className="flex flex-col gap-1">
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {labels.selectLabel}
        </span>
        <ul className="flex flex-col gap-1.5">
          {card.options.map((opt) => {
            const isPicked = picked === opt.key;
            const isAnswerHere = isAnswered && opt.key === card.answer;
            return (
              <li key={opt.key}>
                <button
                  type="button"
                  aria-pressed={isPicked}
                  onClick={() => onPick(opt.key)}
                  className={cn(
                    'w-full text-left rounded-xl border-2 p-2.5 transition-all',
                    'flex items-center gap-2',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isAnswered
                      ? isAnswerHere
                        ? 'border-emerald-400 bg-emerald-50 dark:border-emerald-500 dark:bg-emerald-950/40'
                        : isPicked
                          ? 'border-rose-400 bg-rose-50 dark:border-rose-500 dark:bg-rose-950/40'
                          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)] opacity-70'
                      : isPicked
                        ? 'border-blue-400 bg-blue-50 dark:border-blue-500 dark:bg-blue-950/40'
                        : 'border-slate-200 bg-white hover:border-slate-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-slate-600',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border font-mono text-[10px] font-bold uppercase',
                      isAnswered && isAnswerHere
                        ? 'border-emerald-400 bg-emerald-100 text-emerald-700 dark:border-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-200'
                        : isPicked && isAnswered
                          ? 'border-rose-400 bg-rose-100 text-rose-700 dark:border-rose-600 dark:bg-rose-950/60 dark:text-rose-200'
                          : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200',
                    )}
                  >
                    {opt.key.toUpperCase()}
                  </span>
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep flex-1">
                    {opt.label}
                  </span>
                  {isAnswered && isAnswerHere && (
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-emerald-600 dark:text-emerald-300 shrink-0"
                    />
                  )}
                  {isAnswered && isPicked && !isAnswerHere && (
                    <XCircleIcon
                      aria-hidden="true"
                      className="h-4 w-4 text-rose-600 dark:text-rose-300 shrink-0"
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      {isAnswered && (
        <div
          aria-live="polite"
          className={cn(
            'mt-auto rounded-xl border p-3 text-xsm break-keep',
            isCorrect
              ? 'border-emerald-200 bg-emerald-50/60 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200'
              : 'border-rose-200 bg-rose-50/60 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/30 dark:text-rose-200',
          )}
        >
          <span className="inline-flex items-center gap-1.5 font-bold mr-1">
            <InfoIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {labels.explanationLabel} ·
          </span>
          {card.explanation}
        </div>
      )}
    </article>
  );
};

export const FinalQuizSection = ({ content }: Props) => {
  const [state, setState] = useState<Record<QuizCard['id'], QuizState>>({
    q1: {},
    q2: {},
    q3: {},
  });

  return (
    <section aria-labelledby="quiz-heading" className="flex flex-col gap-md">
      <SectionHeader id="quiz-heading" number={content.number} title={content.title} />

      <ul className="grid grid-cols-1 gap-md md:grid-cols-3">
        {content.cards.map((card) => (
          <li key={card.id}>
            <QuizCardView
              card={card}
              state={state[card.id]}
              onPick={(key) =>
                setState((prev) => ({
                  ...prev,
                  [card.id]: { picked: key },
                }))
              }
              labels={{
                selectLabel: content.selectLabel,
                correctLabel: content.correctLabel,
                incorrectLabel: content.incorrectLabel,
                explanationLabel: content.explanationLabel,
              }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
