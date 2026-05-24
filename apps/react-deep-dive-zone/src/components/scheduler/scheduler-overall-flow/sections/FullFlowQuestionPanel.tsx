import { cn } from '@it-tech-blog/utils';

import type { FullFlowContent } from '../content';
import { GitBranchIcon, GitMergeIcon, HelpCircleIcon, ZapIcon } from '../icons';

type Props = { content: FullFlowContent['question'] };

const cardIcons = [GitBranchIcon, GitMergeIcon, ZapIcon];

export const FullFlowQuestionPanel = ({ content }: Props) => (
  <section aria-labelledby="question-heading">
    <article
      className={cn(
        'grid grid-cols-1 lg:grid-cols-[auto_minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-center',
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-cyan-50/30',
        'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/10',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-16 w-16 shrink-0 items-center justify-center rounded-full',
          'bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.4)] dark:bg-blue-500',
        )}
      >
        <HelpCircleIcon className="h-8 w-8" strokeWidth={2.2} />
      </span>

      <div className="flex flex-col gap-2">
        <span className="font-mono text-[10px] uppercase tracking-wider text-blue-700 dark:text-blue-300">
          {content.eyebrow}
        </span>
        <h2
          id="question-heading"
          className="text-lg sm:text-xl lg:text-xxl font-bold leading-snug text-[var(--term-fg)] break-keep"
        >
          {content.question}
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          {content.iconNote}
        </p>
      </div>

      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
        {content.cards.map((card, i) => {
          const Icon = cardIcons[i] ?? HelpCircleIcon;
          return (
            <li key={card.title}>
              <article
                className={cn(
                  'flex h-full flex-col gap-1.5 rounded-xl border-2 p-3',
                  'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <header className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800/60"
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                    {card.title}
                  </h3>
                </header>
                <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.description}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </article>
  </section>
);
