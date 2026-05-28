import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { KeyFiberReuseContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: KeyFiberReuseContent['quiz'] };

export const KeyMiniQuiz = ({ content }: Props) => (
  <section id="quiz" aria-labelledby="heading-quiz" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="quiz"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-emerald-300/80 dark:border-emerald-700/70',
      )}
    >
      <header className="flex items-center gap-sm">
        <span
          className={cn(
            'inline-flex items-center justify-center min-w-[2.25rem] h-7 rounded-md px-2',
            'font-mono text-xsm font-bold tabular-nums tracking-wider border',
            'border-emerald-300/80 bg-emerald-100 text-emerald-800',
            'dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200',
          )}
          aria-hidden="true"
        >
          {content.questionLabel}
        </span>
        <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
          question
        </span>
      </header>

      <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.question}
      </p>

      <div
        className={cn(
          'flex items-start gap-sm rounded-xl border-2 p-md',
          'border-emerald-300/80 bg-emerald-50',
          'dark:border-emerald-700/70 dark:bg-emerald-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-10 h-10 rounded-full shrink-0',
            'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
            'shadow-[0_8px_22px_-8px_rgba(16,185,129,0.55)]',
          )}
        >
          <CheckCircleIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-emerald-700 dark:text-emerald-300">
            {content.answerLabel}
          </span>
          <p className="text-md sm:text-lg font-extrabold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
            {content.answer}
          </p>
        </div>
      </div>

      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {content.description}
      </p>
    </article>
  </section>
);
