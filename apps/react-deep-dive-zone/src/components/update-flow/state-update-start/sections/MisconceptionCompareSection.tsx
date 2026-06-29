import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { StateUpdateStartContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, XCircleIcon } from '../icons';

type Props = { content: StateUpdateStartContent['misconception'] };

export const MisconceptionCompareSection = ({ content }: Props) => (
  <section
    id="section-misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md"
  >
    <SectionHeader
      id="misconception"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <article className="overflow-hidden rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]">
      {/* 헤더: 오해(rose) / 실제(emerald) — 의미색 */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[var(--term-border)] bg-[var(--term-surface)]">
        <div className="flex items-center gap-2 px-md py-2 sm:px-lg sm:py-3 border-b md:border-b-0 md:border-r border-[var(--term-border)]">
          <XCircleIcon aria-hidden="true" className="h-4 w-4 text-rose-600 dark:text-rose-300" />
          <span className="text-xxsm sm:text-xsm font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300">
            {content.headerWrong}
          </span>
        </div>
        <div className="flex items-center gap-2 px-md py-2 sm:px-lg sm:py-3">
          <CheckCircleIcon
            aria-hidden="true"
            className="h-4 w-4 text-emerald-600 dark:text-emerald-300"
          />
          <span className="text-xxsm sm:text-xsm font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-300">
            {content.headerCorrect}
          </span>
        </div>
      </div>

      {/* 행 */}
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
              <XCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300"
              />
              <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-muted)] break-keep">
                {row.wrong}
              </p>
            </div>
            <div className="flex items-start gap-sm px-md py-3 sm:px-lg sm:py-4 bg-[var(--term-surface)]">
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-300"
              />
              <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
                {row.correct}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </article>
  </section>
);
