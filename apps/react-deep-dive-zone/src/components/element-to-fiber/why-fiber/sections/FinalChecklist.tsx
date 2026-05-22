import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { FiberWhyNeededContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, SquareIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['checklist'] };

export const FinalChecklist = ({ content }: Props) => (
  <section
    id="checklist"
    aria-labelledby="heading-checklist"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="checklist"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-sm pb-md border-b border-dashed border-[var(--term-border)]">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
          )}
        >
          <CheckCircleIcon className="h-6 w-6" />
        </span>
        <h3 className="text-md sm:text-lg font-extrabold tracking-tight text-sky-900 dark:text-sky-100">
          {content.cardTitle}
        </h3>
      </header>

      <ul className="flex flex-col gap-2 mt-md">
        {content.items.map((item, idx) => {
          const checkboxId = `wf-checklist-${idx}`;
          return (
            <li
              key={item}
              className={cn(
                'flex items-center gap-sm rounded-xl border p-sm pl-md',
                'border-[var(--term-border)] bg-[var(--term-surface)]',
                'transition-colors hover:border-sky-300/80 dark:hover:border-sky-700/60',
              )}
            >
              <label
                htmlFor={checkboxId}
                className="flex items-center gap-sm cursor-pointer flex-1 min-w-0"
              >
                <span className="relative inline-flex items-center justify-center w-6 h-6 shrink-0">
                  <input
                    id={checkboxId}
                    type="checkbox"
                    className="peer appearance-none w-6 h-6 rounded-md border-2 border-[var(--term-border)] bg-[var(--term-bg)] checked:bg-sky-600 checked:border-sky-600 dark:checked:bg-sky-500 dark:checked:border-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)] transition-colors"
                  />
                  <SquareIcon
                    className="absolute h-3.5 w-3.5 text-transparent peer-checked:text-white pointer-events-none opacity-0 peer-checked:opacity-0"
                    aria-hidden="true"
                  />
                  <CheckCircleIcon
                    className="absolute h-4 w-4 text-white opacity-0 peer-checked:opacity-100 pointer-events-none"
                    aria-hidden="true"
                  />
                </span>
                <span className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] break-keep font-bold">
                  {item}
                </span>
              </label>
            </li>
          );
        })}
      </ul>
    </article>
  </section>
);
