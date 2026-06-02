'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { QuizAnswer, ReactNextBoundaryContent } from '../content';
import { QuizIcon } from '../icons';

type Props = { content: ReactNextBoundaryContent['quiz'] };

const order: QuizAnswer[] = ['react', 'next', 'both'];

const catTone: Record<QuizAnswer, string> = {
  react:
    'border-indigo-400 bg-indigo-50 text-indigo-900 dark:bg-indigo-950/40 dark:text-indigo-100',
  next: 'border-cyan-400 bg-cyan-50 text-cyan-900 dark:bg-cyan-950/40 dark:text-cyan-100',
  both: 'border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-100',
};

export const ResponsibilityQuiz = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState(content.items[0].id);
  const [answers, setAnswers] = useState<Record<string, QuizAnswer>>({});

  const selected = content.items.find((i) => i.id === selectedId) ?? content.items[0];
  const chosen = answers[selected.id] ?? null;
  const revealed = chosen !== null;
  const isCorrect = chosen === selected.answer;

  return (
    <section id="section-quiz" aria-labelledby="heading-quiz" className="space-y-lg">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<QuizIcon className="h-5 w-5" />}
      />

      {/* 문제 카드 칩 */}
      <ul className="flex flex-wrap gap-2" aria-label="quiz items">
        {content.items.map((item) => {
          const answered = answers[item.id];
          const itemCorrect = answered === item.answer;
          const isActive = item.id === selected.id;
          return (
            <li key={item.id}>
              <button
                type="button"
                aria-pressed={isActive}
                onClick={() => setSelectedId(item.id)}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-xsm font-bold transition-colors [overflow-wrap:anywhere]',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                  isActive
                    ? 'border-[var(--term-accent)] bg-[var(--term-accent-soft)] text-[var(--term-accent)] ring-1 ring-[var(--term-accent)]'
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                )}
              >
                {item.label}
                {answered && (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'text-[10px]',
                      itemCorrect ? 'text-emerald-500' : 'text-rose-500',
                    )}
                  >
                    {itemCorrect ? '✓' : '✗'}
                  </span>
                )}
              </button>
            </li>
          );
        })}
      </ul>

      {/* 분류 + 피드백 패널 */}
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-surface)] p-md sm:p-lg space-y-md">
        <div className="flex items-center gap-sm">
          <code className="rounded border border-[var(--term-border)] bg-[var(--term-bg)] px-2 py-1 font-mono text-sm font-bold text-[var(--term-fg)] [overflow-wrap:anywhere]">
            {selected.label}
          </code>
          <span className="text-[11px] text-[var(--term-muted)]">{content.labels.prompt}</span>
        </div>

        <div
          role="radiogroup"
          aria-label={selected.label}
          className="grid grid-cols-1 sm:grid-cols-3 gap-2"
        >
          {order.map((cat) => {
            const isChosen = chosen === cat;
            const isAnswer = cat === selected.answer;
            const showCorrect = revealed && isAnswer;
            const showWrong = revealed && isChosen && !isAnswer;
            return (
              <button
                key={cat}
                type="button"
                role="radio"
                aria-checked={isChosen}
                onClick={() => setAnswers((prev) => ({ ...prev, [selected.id]: cat }))}
                className={cn(
                  'rounded-md border px-3 py-2.5 text-xsm font-bold break-keep transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--term-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-surface)]',
                  showCorrect || showWrong || isChosen
                    ? catTone[cat]
                    : 'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] hover:border-[var(--term-accent)] hover:text-[var(--term-fg)]',
                )}
              >
                {content.categories[cat]}
              </button>
            );
          })}
        </div>

        {/* 피드백 */}
        <div
          aria-live="polite"
          className={cn(
            'rounded-md border p-md',
            revealed && isCorrect
              ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30'
              : revealed
                ? 'border-rose-300 bg-rose-50 dark:border-rose-700 dark:bg-rose-950/30'
                : 'border-[var(--term-border)] bg-[var(--term-bg)]',
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
                {isCorrect ? content.labels.correct : content.labels.wrong}
                <span className="ml-1 font-normal text-[var(--term-muted)]">
                  — {content.labels.answer}: {content.categories[selected.answer]}
                </span>
              </p>
              <p className="mt-1.5 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                <span className="mr-1.5 text-[10px] font-bold uppercase tracking-wider text-[var(--term-dim)]">
                  {content.labels.explain}
                </span>
                {selected.explanation}
              </p>
            </>
          ) : (
            <p className="text-[11px] text-[var(--term-muted)]">{content.labels.prompt}</p>
          )}
        </div>
      </div>
    </section>
  );
};
