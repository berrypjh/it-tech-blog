import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { FiberCentralContent } from '../content';
import { ClipboardIcon, StarIcon } from '../icons';

type Props = { content: FiberCentralContent['checklist'] };

export const FiberFinalChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checklist"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ClipboardIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-start justify-between gap-sm mb-md">
        <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
          {content.cardTitle}
        </h3>
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <ClipboardIcon className="h-6 w-6" />
        </span>
      </header>

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        {content.items.map((item) => (
          <li key={item}>
            <div
              className={cn(
                'flex items-start gap-2 rounded-xl border px-sm py-2',
                'border-[var(--term-border)] bg-slate-50/50 dark:bg-slate-900/40',
                'transition-colors motion-safe:hover:bg-sky-50/60 dark:motion-safe:hover:bg-sky-950/30',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center w-5 h-5 rounded border-2 shrink-0 mt-0.5',
                  'border-sky-300/80 bg-white dark:border-sky-700/70 dark:bg-slate-900',
                )}
              />
              <p className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{item}</p>
            </div>
          </li>
        ))}
      </ul>

      <div
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-300/80 bg-sky-50/70',
          'dark:border-sky-800/60 dark:bg-sky-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 shrink-0"
        >
          <StarIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.bottomEmphasis}
        </p>
      </div>
    </article>
  </section>
);
