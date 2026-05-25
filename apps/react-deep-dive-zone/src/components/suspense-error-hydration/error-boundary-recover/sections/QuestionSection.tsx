import { cn } from '@it-tech-blog/utils';

import type { ConceptCard, ErrorBoundaryRecoverContent } from '../content';
import {
  AlertTriangleIcon,
  CircleHelpIcon,
  RefreshCcwIcon,
  ShieldCheckIcon,
  TargetIcon,
} from '../icons';
import { sectionNumberBadge } from '../tone';

type Props = { content: ErrorBoundaryRecoverContent['question'] };

const conceptIcon: Record<ConceptCard['icon'], React.ComponentType<{ className?: string }>> = {
  shield: ShieldCheckIcon,
  target: TargetIcon,
  update: RefreshCcwIcon,
  alert: AlertTriangleIcon,
};

const conceptTone: Record<ConceptCard['icon'], string> = {
  shield:
    'text-teal-600 bg-teal-100 border-teal-200 dark:text-teal-300 dark:bg-teal-950/60 dark:border-teal-800/60',
  target:
    'text-blue-600 bg-blue-100 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/60',
  update:
    'text-violet-600 bg-violet-100 border-violet-200 dark:text-violet-300 dark:bg-violet-950/60 dark:border-violet-800/60',
  alert:
    'text-rose-600 bg-rose-100 border-rose-200 dark:text-rose-300 dark:bg-rose-950/60 dark:border-rose-800/60',
};

export const QuestionSection = ({ content }: Props) => (
  <section
    aria-labelledby="question-heading"
    className={cn(
      'rounded-3xl border-2 p-md sm:p-lg',
      'border-blue-200/80 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="flex items-center gap-3 mb-md">
      <span aria-hidden="true" className={sectionNumberBadge}>
        {content.number}
      </span>
      <h2
        id="question-heading"
        className="text-md sm:text-lg font-bold text-[var(--term-fg)] break-keep"
      >
        {content.title}
      </h2>
    </header>

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1.4fr)] items-center">
      <div
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full mx-auto lg:mx-0',
          'bg-blue-100 text-blue-600 shadow-[inset_0_-2px_0_rgba(59,130,246,0.15)]',
          'dark:bg-blue-950/60 dark:text-blue-300',
        )}
      >
        <CircleHelpIcon className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={2.2} />
      </div>

      <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
        {content.question}
      </p>

      <ul className="grid grid-cols-2 gap-2">
        {content.concepts.map((c) => {
          const Icon = conceptIcon[c.icon];
          return (
            <li
              key={c.question}
              className={cn(
                'flex flex-col items-start gap-1.5 rounded-xl border bg-slate-50/50 p-2.5',
                'dark:bg-slate-900/30 dark:border-slate-700',
                'border-slate-200',
                'transition-colors motion-safe:hover:border-blue-300/70',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-lg border',
                  conceptTone[c.icon],
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                {c.question}
              </span>
              <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {c.answer}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
