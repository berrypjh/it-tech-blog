import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { SharedContent } from '../content';
import { CheckCircleIcon, HelpCircleIcon } from '../icons';

type Props = { content: SharedContent['quiz'] };

export const QuizSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-quiz" className="space-y-md">
      <SectionHeader
        id="quiz"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
        {content.cards.map((card, index) => (
          <li key={card.id} className="flex">
            <article
              className={cn(
                'group flex flex-1 flex-col gap-md rounded-2xl border p-md sm:p-lg',
                'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
                'hover:border-cyan-300/70 dark:hover:border-cyan-700/60',
              )}
            >
              <header className="flex items-center justify-between gap-sm">
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] font-mono font-bold tabular-nums">
                  Q{String(index + 1).padStart(2, '0')}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex items-center justify-center w-9 h-9 rounded-full',
                    'border border-emerald-300/80 bg-emerald-100 text-emerald-700',
                    'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-300',
                  )}
                >
                  <CheckCircleIcon className="h-5 w-5" />
                </span>
              </header>

              <p className="text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                {card.question}
              </p>

              <div
                role="group"
                aria-label="answer"
                className={cn(
                  'flex items-center gap-sm rounded-lg border px-md py-3',
                  'border-violet-300/80 bg-violet-50 text-violet-900',
                  'dark:border-violet-800/70 dark:bg-violet-950/40 dark:text-violet-100',
                )}
              >
                <span className="text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-300 font-bold font-mono shrink-0">
                  A.
                </span>
                <span className="text-sm font-bold font-mono break-words text-violet-800 dark:text-violet-100">
                  {card.answer}
                </span>
                <span
                  aria-hidden="true"
                  className="ml-auto shrink-0 text-emerald-600 dark:text-emerald-300"
                >
                  <CheckCircleIcon className="h-4 w-4" />
                </span>
              </div>

              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {card.explanation}
              </p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
