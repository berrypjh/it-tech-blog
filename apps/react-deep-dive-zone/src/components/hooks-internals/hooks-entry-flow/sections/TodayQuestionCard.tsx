import { cn } from '@it-tech-blog/utils';

import type { HooksEntryFlowContent } from '../content';
import { HelpCircleIcon, SearchIcon, SparklesIcon, TargetIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['question'] };

const toneStyle: Record<string, string> = {
  sky: 'border-sky-200/80 bg-white text-sky-700 dark:border-sky-800/60 dark:bg-slate-950/40 dark:text-sky-200',
  cyan: 'border-cyan-200/80 bg-white text-cyan-700 dark:border-cyan-800/60 dark:bg-slate-950/40 dark:text-cyan-200',
  emerald:
    'border-emerald-200/80 bg-white text-emerald-700 dark:border-emerald-800/60 dark:bg-slate-950/40 dark:text-emerald-200',
};

const goalIcons = [SearchIcon, TargetIcon, SparklesIcon];

export const TodayQuestionCard = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'relative rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
      'border-sky-200/70 bg-gradient-to-br from-sky-50/80 via-white to-cyan-50/40',
      'dark:border-sky-800/60 dark:from-sky-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="flex flex-col gap-md sm:flex-row sm:items-center sm:gap-lg">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.3)]',
          'dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-8 w-8 sm:h-10 sm:w-10" strokeWidth={2.5} />
      </span>

      <div className="flex flex-col gap-2 min-w-0">
        <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.eyebrow}
        </p>
        <h2
          id="question-heading"
          className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep"
        >
          {content.title}
        </h2>
      </div>
    </div>

    <ul className="mt-md sm:mt-lg flex flex-wrap items-center gap-2 sm:gap-3">
      {content.goals.map((goal, i) => {
        const Icon = goalIcons[i] ?? SparklesIcon;
        return (
          <li
            key={goal.label}
            className={cn(
              'inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-xsm font-medium',
              'shadow-[0_1px_0_var(--term-border)] transition-colors',
              toneStyle[goal.tone] ?? toneStyle.sky,
            )}
          >
            <Icon aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="break-keep">{goal.label}</span>
          </li>
        );
      })}
    </ul>
  </section>
);
