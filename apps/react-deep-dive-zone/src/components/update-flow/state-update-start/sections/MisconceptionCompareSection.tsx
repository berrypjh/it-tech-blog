import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { StateUpdateStartContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, XCircleIcon } from '../icons';

type Props = { content: StateUpdateStartContent['misconception'] };

export const MisconceptionCompareSection = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconception"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'overflow-hidden rounded-3xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Header */}
      <div
        className={cn(
          'grid grid-cols-1 md:grid-cols-2 border-b',
          'border-[var(--term-border)]',
          'bg-slate-50/70 dark:bg-slate-900/40',
        )}
      >
        <div className="flex items-center gap-2 px-md py-2 sm:px-lg sm:py-3 border-b md:border-b-0 md:border-r border-[var(--term-border)]">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-6 w-6 items-center justify-center rounded-full',
              'bg-rose-100 text-rose-700 border border-rose-200/80',
              'dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
            )}
          >
            <XCircleIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xxsm sm:text-xsm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
            {content.headerWrong}
          </span>
        </div>
        <div className="flex items-center gap-2 px-md py-2 sm:px-lg sm:py-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-6 w-6 items-center justify-center rounded-full',
              'bg-emerald-100 text-emerald-700 border border-emerald-200/80',
              'dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
            )}
          >
            <CheckCircleIcon className="h-3.5 w-3.5" />
          </span>
          <span className="text-xxsm sm:text-xsm font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-200">
            {content.headerCorrect}
          </span>
        </div>
      </div>

      {/* Rows */}
      <ul>
        {content.rows.map((row, idx) => (
          <li
            key={row.id}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2',
              idx < content.rows.length - 1 && 'border-b border-[var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-sm px-md py-3 sm:px-lg sm:py-4 border-b md:border-b-0 md:border-r border-dashed border-[var(--term-border)]">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-50 text-rose-600 border border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60"
              >
                <XCircleIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]/90 break-keep leading-snug">
                {row.wrong}
              </p>
            </div>
            <div className="flex items-start gap-sm px-md py-3 sm:px-lg sm:py-4 bg-emerald-50/30 dark:bg-emerald-950/15">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60"
              >
                <CheckCircleIcon className="h-3.5 w-3.5" />
              </span>
              <p className="text-xsm sm:text-sm font-bold text-emerald-900/90 dark:text-emerald-100/90 break-keep leading-snug">
                {row.correct}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  </section>
);
