import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReconcileChildrenContent } from '../content';
import { CheckCircleIcon, ListChecksIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['goal'] };

export const ReconciliationGoal = ({ content }: Props) => (
  <section id="goal" aria-labelledby="heading-goal" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="goal"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-200/80 bg-white',
        'dark:border-sky-800/70 dark:bg-slate-950/40',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {content.items.map((item, idx) => (
          <li
            key={item}
            className={cn(
              'flex items-start gap-3 rounded-xl border bg-[var(--term-bg)] p-md',
              'border-sky-200/70 dark:border-sky-800/60',
              'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
                'bg-teal-100 text-teal-700 border-teal-200/80',
                'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
              )}
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
                goal {idx + 1}
              </span>
              <p className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] font-bold break-keep">
                {item}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  </section>
);
