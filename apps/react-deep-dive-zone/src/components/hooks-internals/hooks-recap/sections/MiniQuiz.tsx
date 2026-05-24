import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { HooksRecapContent, QuizItem } from '../content';
import { CheckCircleIcon, HelpCircleIcon, TargetIcon } from '../icons';

type Props = { content: HooksRecapContent['quiz'] };

const QuizCard = ({ quiz, answerPrefix }: { quiz: QuizItem; answerPrefix: string }) => (
  <article
    className={cn(
      'h-full flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] transition-all',
      'hover:border-sky-300/70 dark:hover:border-sky-700/70',
    )}
  >
    <header className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700 border border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
      >
        <HelpCircleIcon className="h-4 w-4" />
      </span>
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug flex-1">
        {quiz.question}
      </h3>
    </header>

    <ul className="flex flex-col gap-1.5">
      {quiz.options.map((opt) => (
        <li
          key={opt.label}
          className={cn(
            'flex items-start gap-2 rounded-lg border px-3 py-2',
            opt.isAnswer
              ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30'
              : 'border-[var(--term-border)] bg-white dark:bg-slate-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums',
              opt.isAnswer
                ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900'
                : 'bg-[var(--term-border)]/30 text-[var(--term-muted)] border border-[var(--term-border)]',
            )}
          >
            {opt.label}
          </span>
          <span
            className={cn(
              'text-[11px] sm:text-xsm break-keep',
              opt.isAnswer
                ? 'font-bold text-emerald-800 dark:text-emerald-100'
                : 'text-[var(--term-fg)]',
            )}
          >
            {opt.text}
          </span>
          {opt.isAnswer && (
            <CheckCircleIcon
              aria-hidden="true"
              className="ml-auto h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400"
            />
          )}
        </li>
      ))}
    </ul>

    <aside
      className={cn(
        'mt-auto flex items-start gap-2 rounded-xl border-2 p-3',
        'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30',
      )}
      aria-live="polite"
    >
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900"
      >
        <CheckCircleIcon className="h-3.5 w-3.5" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <p className="text-xsm font-bold text-emerald-800 dark:text-emerald-100">
          {answerPrefix}: {quiz.answerLabel}
        </p>
        <p className="text-[10px] sm:text-[11px] leading-relaxed text-emerald-900/85 dark:text-emerald-100/85 break-keep">
          {quiz.answerExplain}
        </p>
      </div>
    </aside>
  </article>
);

export const MiniQuiz = ({ content }: Props) => (
  <section
    aria-labelledby="heading-quiz"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="quiz"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.quizzes.map((quiz, i) => (
        <li key={i} className="flex">
          <div className="flex-1">
            <QuizCard quiz={quiz} answerPrefix={content.answerPrefix} />
          </div>
        </li>
      ))}
    </ul>
  </section>
);
