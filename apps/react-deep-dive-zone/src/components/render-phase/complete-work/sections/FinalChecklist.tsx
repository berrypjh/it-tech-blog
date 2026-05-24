import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CompleteWorkContent } from '../content';
import { CheckSquareIcon, TrophyIcon } from '../icons';

type Props = { content: CompleteWorkContent['checklist'] };

export const FinalChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checklist"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<CheckSquareIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex h-full flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-200/80 bg-sky-50/40',
        'dark:border-sky-800/70 dark:bg-sky-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-1.5">
        {content.items.map((item, idx) => (
          <li
            key={item.text}
            className={cn(
              'flex items-start gap-3 rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
              'border-sky-200/70 dark:border-sky-800/60',
              'transition-colors hover:bg-sky-50 dark:hover:bg-sky-950/40',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border-2',
                'border-sky-300/80 bg-white text-sky-700',
                'dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-300',
              )}
            >
              <CheckSquareIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0 min-w-0">
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
                Q{String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] font-bold break-keep">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <aside
        className={cn(
          'flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-violet-200/80 bg-violet-50/70',
          'dark:border-violet-800/70 dark:bg-violet-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-violet-100 text-violet-700 border border-violet-200/80',
            'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
          )}
        >
          <TrophyIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-violet-900 dark:text-violet-100 font-bold break-keep">
          {content.completionNote}
        </p>
      </aside>
    </article>
  </section>
);
