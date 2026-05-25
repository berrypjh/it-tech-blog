import { cn } from '@it-tech-blog/utils';

import type { ConceptCard, PromiseVsErrorSplitContent } from '../content';
import {
  ChevronRightIcon,
  CircleHelpIcon,
  FilterIcon,
  GitBranchIcon,
  LoaderIcon,
  ShieldCheckIcon,
} from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: PromiseVsErrorSplitContent['question'] };

const conceptIcon: Record<ConceptCard['icon'], React.ComponentType<{ className?: string }>> = {
  filter: FilterIcon,
  spinner: LoaderIcon,
  shield: ShieldCheckIcon,
  branch: GitBranchIcon,
};

const conceptTone: Record<ConceptCard['icon'], string> = {
  filter:
    'text-blue-600 bg-blue-100 border-blue-200 dark:text-blue-300 dark:bg-blue-950/60 dark:border-blue-800/60',
  spinner:
    'text-emerald-600 bg-emerald-100 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-950/60 dark:border-emerald-800/60',
  shield:
    'text-rose-600 bg-rose-100 border-rose-200 dark:text-rose-300 dark:bg-rose-950/60 dark:border-rose-800/60',
  branch:
    'text-violet-600 bg-violet-100 border-violet-200 dark:text-violet-300 dark:bg-violet-950/60 dark:border-violet-800/60',
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
    <SectionHeader id="question-heading" number={content.number} title={content.title} />

    <div className="mt-md grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[auto_minmax(0,1.2fr)_auto_minmax(0,2fr)] items-center">
      {/* big ? */}
      <div
        aria-hidden="true"
        className={cn(
          'inline-flex h-14 w-14 items-center justify-center rounded-full mx-auto lg:mx-0',
          'bg-blue-100 text-blue-600 shadow-[inset_0_-2px_0_rgba(59,130,246,0.15)]',
          'dark:bg-blue-950/60 dark:text-blue-300',
        )}
      >
        <CircleHelpIcon className="h-8 w-8" strokeWidth={2.2} />
      </div>

      <p className="text-md sm:text-lg leading-snug font-bold text-[var(--term-fg)] break-keep">
        {content.question}
      </p>

      {/* chevron separator (desktop) */}
      <span aria-hidden="true" className="hidden lg:inline-flex items-center justify-center">
        <ChevronRightIcon className="h-5 w-5 text-blue-400 dark:text-blue-500" />
      </span>

      <ul className="grid grid-cols-2 gap-2 lg:grid-cols-4">
        {content.concepts.map((c) => {
          const Icon = conceptIcon[c.icon];
          return (
            <li
              key={c.label}
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
              <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">{c.label}</span>
              <span className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {c.description}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
