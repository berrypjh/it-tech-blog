'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { After192Content, Quiz } from '../content';
import { CheckCircleIcon, CircleHelpIcon, XCircleIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['quiz'] };

type Selected = Record<string, 'A' | 'B' | 'C' | 'D'>;

export const FinalQuizSection = ({ content }: Props) => {
  const [selected, setSelected] = useState<Selected>({});

  return (
    <section aria-labelledby="quiz-heading" className="flex flex-col">
      <SectionHeader
        id="quiz-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <ul className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
        {content.questions.map((quiz) => (
          <li key={quiz.number} className="h-full">
            <QuizCard
              quiz={quiz}
              picked={selected[quiz.number]}
              onPick={(label) => setSelected((prev) => ({ ...prev, [quiz.number]: label }))}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

const QuizCard = ({
  quiz,
  picked,
  onPick,
}: {
  quiz: Quiz;
  picked?: 'A' | 'B' | 'C' | 'D';
  onPick: (label: 'A' | 'B' | 'C' | 'D') => void;
}) => (
  <article
    className={cn(
      'flex h-full flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
      'border-blue-200/80 bg-white dark:border-blue-800/70 dark:bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
      'transition-all motion-safe:hover:-translate-y-0.5',
      'hover:border-blue-400 dark:hover:border-blue-600',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-8 items-center px-2 rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200 font-mono text-xsm font-bold"
      >
        {quiz.number}
      </span>
      <CircleHelpIcon aria-hidden="true" className="h-4 w-4 text-blue-600 dark:text-blue-300" />
    </header>

    <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep leading-snug">
      {quiz.question}
    </h3>

    <ul className="flex flex-col gap-1.5 mt-auto">
      {quiz.options.map((opt) => {
        const isPicked = picked === opt.label;
        const isCorrect = opt.label === quiz.correct;
        const showResult = picked !== undefined && isPicked;
        const correctReveal = showResult && isCorrect;
        const wrongReveal = showResult && !isCorrect;
        return (
          <li key={opt.label}>
            <button
              type="button"
              aria-pressed={isPicked}
              onClick={() => onPick(opt.label)}
              className={cn(
                'group w-full inline-flex items-start gap-2 rounded-xl border-2 px-3 py-2 text-left',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                correctReveal &&
                  'border-emerald-400 bg-emerald-50 dark:border-emerald-500/70 dark:bg-emerald-950/40',
                wrongReveal &&
                  'border-rose-400 bg-rose-50 dark:border-rose-500/70 dark:bg-rose-950/40',
                !showResult &&
                  isPicked &&
                  'border-blue-400 bg-blue-50/60 dark:border-blue-500/70 dark:bg-blue-950/40',
                !isPicked &&
                  'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)] hover:border-blue-300 dark:hover:border-blue-700/70',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 font-mono text-[10px] font-bold',
                  correctReveal && 'border-emerald-500 bg-emerald-500 text-white',
                  wrongReveal && 'border-rose-500 bg-rose-500 text-white',
                  !showResult && isPicked && 'border-blue-500 bg-blue-500 text-white',
                  !isPicked &&
                    'border-slate-300 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-300',
                )}
              >
                {correctReveal ? (
                  <CheckCircleIcon className="h-3.5 w-3.5" />
                ) : wrongReveal ? (
                  <XCircleIcon className="h-3.5 w-3.5" />
                ) : (
                  opt.label
                )}
              </span>
              <span
                className={cn(
                  'text-xsm leading-snug break-keep',
                  correctReveal && 'text-emerald-700 dark:text-emerald-200 font-bold',
                  wrongReveal && 'text-rose-700 dark:text-rose-200',
                  !showResult && 'text-[var(--term-fg)]',
                )}
              >
                {opt.body}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  </article>
);
