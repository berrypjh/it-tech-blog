'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../../usage-vs-internals/components/StepSectionHeader';
import type { QuizCard as QuizCardType, ReadingPerspectiveContent } from '../content';
import { CheckCircleIcon, XIcon } from '../icons';

type Props = { content: ReadingPerspectiveContent['quiz'] };

type Selection = QuizCardType['answerKey'] | null;

const QuizCard = ({
  card,
  answerPrefix,
  explainLabel,
  correctLabel,
  wrongLabel,
}: {
  card: QuizCardType;
  answerPrefix: string;
  explainLabel: string;
  correctLabel: string;
  wrongLabel: string;
}) => {
  const [selected, setSelected] = useState<Selection>(null);
  const revealed = selected !== null;
  const isCorrect = selected === card.answerKey;

  return (
    <article
      className={cn(
        'group flex flex-col w-full h-full gap-md rounded-lg border bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]',
        revealed && isCorrect
          ? 'border-emerald-300 dark:border-emerald-700'
          : revealed && !isCorrect
            ? 'border-rose-300 dark:border-rose-700'
            : 'border-[var(--term-border)] hover:border-sky-400 dark:hover:border-sky-500',
      )}
    >
      {/* 질문 */}
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug">
        {card.question.map((line, i) => (
          <span key={i} className="block">
            {line}
          </span>
        ))}
      </h3>

      {/* 선택지 */}
      <ul className="flex flex-col gap-1.5" role="radiogroup" aria-label="answer options">
        {card.options.map((opt) => {
          const isSelected = selected === opt.key;
          const isAnswer = opt.key === card.answerKey;
          const showCorrect = revealed && isAnswer;
          const showWrong = revealed && isSelected && !isAnswer;
          return (
            <li key={opt.key}>
              <button
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => setSelected(opt.key)}
                className={cn(
                  'w-full flex items-center gap-sm px-sm py-2 rounded-md border text-left text-xsm transition-all',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  showCorrect
                    ? 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100'
                    : showWrong
                      ? 'border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-950/40 dark:text-rose-100'
                      : isSelected
                        ? 'border-sky-400 bg-sky-50 text-sky-900 dark:bg-sky-950/40 dark:text-sky-100'
                        : 'border-[var(--term-border)] bg-white text-[var(--term-fg)] hover:border-sky-300 dark:bg-slate-900 dark:hover:border-sky-700',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums shrink-0',
                    showCorrect
                      ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900'
                      : showWrong
                        ? 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900'
                        : isSelected
                          ? 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900'
                          : 'bg-[var(--term-surface)] text-[var(--term-muted)] border border-[var(--term-border)]',
                  )}
                >
                  {opt.key}
                </span>
                <span className="break-keep">{opt.label}</span>
                {showCorrect && <CheckCircleIcon className="ml-auto h-4 w-4 text-emerald-500" />}
                {showWrong && <XIcon className="ml-auto h-4 w-4 text-rose-500" />}
              </button>
            </li>
          );
        })}
      </ul>

      {/* answer panel — 항상 보이되 정답 명시 (선택 이전엔 hint로) */}
      <aside
        className={cn(
          'mt-auto rounded-md border p-sm',
          revealed && isCorrect
            ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/40'
            : revealed && !isCorrect
              ? 'border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/40'
              : 'border-emerald-200/70 bg-emerald-50/50 dark:border-emerald-800/60 dark:bg-emerald-950/30',
        )}
        aria-live="polite"
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-6 h-6 rounded-full',
              revealed && !isCorrect
                ? 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900'
                : 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
            )}
          >
            {revealed && !isCorrect ? (
              <XIcon className="h-3.5 w-3.5" />
            ) : (
              <CheckCircleIcon className="h-4 w-4" />
            )}
          </span>
          <p className="text-xsm font-bold text-[var(--term-fg)]">
            {revealed
              ? isCorrect
                ? correctLabel
                : wrongLabel
              : `${answerPrefix}: ${card.answerKey}`}
            <span className="ml-1 font-normal text-[var(--term-muted)]">— {card.answerStage}</span>
          </p>
        </div>
        <p className="mt-1.5 text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--term-dim)] mr-1.5">
            {explainLabel}
          </span>
          {card.explanation}
        </p>
      </aside>
    </article>
  );
};

export const StageRecognitionQuiz = ({ content }: Props) => {
  return (
    <section id="section-quiz" aria-labelledby="heading-quiz" className="space-y-lg">
      <StepSectionHeader id="quiz" num={content.sectionNum} title={content.title} />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.id} className="flex">
            <QuizCard
              card={card}
              answerPrefix={content.answerPrefix}
              explainLabel={content.explainLabel}
              correctLabel={content.correctLabel}
              wrongLabel={content.wrongLabel}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
