import { cn } from '@it-tech-blog/utils';

import type { WhyFailableRenderContent } from '../content';
import { ArrowRightIcon, HelpCircleIcon, WorkflowIcon } from '../icons';
import { toneChip } from '../tone';

type Props = {
  question: WhyFailableRenderContent['question'];
  normalRender: WhyFailableRenderContent['normalRender'];
};

export const QuestionAndNormalRender = ({ question, normalRender }: Props) => (
  <section
    aria-labelledby="question-heading"
    className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch"
  >
    {/* Today's question */}
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
        >
          <HelpCircleIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {question.eyebrow}
          </span>
          <h2
            id="question-heading"
            className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep"
          >
            {question.title}
          </h2>
        </div>
      </header>

      <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
        {question.question}
      </p>

      <ul className="mt-auto flex flex-wrap gap-2">
        {question.badges.map((badge) => (
          <li
            key={badge.label}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'text-xsm font-mono font-bold',
              toneChip[badge.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'block h-1.5 w-1.5 rounded-full',
                badge.tone === 'blue' && 'bg-blue-500',
                badge.tone === 'red' && 'bg-rose-500',
                badge.tone === 'green' && 'bg-emerald-500',
                badge.tone === 'cyan' && 'bg-cyan-500',
              )}
            />
            {badge.label}
          </li>
        ))}
      </ul>
    </article>

    {/* Happy-path render flow */}
    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/60 dark:text-emerald-200"
        >
          <WorkflowIcon className="h-5 w-5" />
        </span>
        <h2 className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep">
          {normalRender.title}
        </h2>
      </header>

      <ol className="flex flex-wrap items-center gap-2">
        {normalRender.steps.map((step, i) => (
          <li key={step.label} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex items-center rounded-xl border-2 px-3 py-2',
                'border-slate-200 bg-slate-50 text-slate-700 font-mono text-xsm font-bold',
                'dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200',
              )}
            >
              {step.label}
            </span>
            {i < normalRender.steps.length - 1 && (
              <ArrowRightIcon
                aria-hidden="true"
                className="h-4 w-4 text-slate-400 dark:text-slate-500"
              />
            )}
          </li>
        ))}
      </ol>

      <p className="mt-auto text-center text-xsm text-[var(--term-muted)] break-keep">
        {normalRender.caption}
      </p>
    </article>
  </section>
);
