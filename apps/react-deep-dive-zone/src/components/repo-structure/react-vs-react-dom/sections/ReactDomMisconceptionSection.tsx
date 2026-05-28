import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ReactVsReactDomContent } from '../content';
import { ArrowRightIcon, SparklesIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['misconception'] };

export const ReactDomMisconceptionSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-misconception" className="space-y-md">
      <SectionHeader
        id="misconception"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0 items-stretch">
          {/* 왼쪽 - 오해 */}
          <article
            className={cn(
              'flex flex-col gap-sm p-md sm:p-lg lg:p-xl',
              'bg-rose-50/70 dark:bg-rose-950/30',
            )}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
                'border-rose-300 bg-rose-100/80 text-rose-800',
                'dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200',
                'text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true">×</span>
              {content.leftBadge}
            </span>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-rose-900 dark:text-rose-100 break-keep">
              {content.leftQuote}
            </p>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.leftCaption}
            </p>
          </article>

          {/* 중앙 화살표 */}
          <div className="flex items-center justify-center px-md py-sm lg:py-md bg-gradient-to-r lg:bg-gradient-to-b from-rose-50/70 to-emerald-50/70 dark:from-rose-950/30 dark:to-emerald-950/30">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-10 h-10 rounded-full',
                'bg-[var(--term-bg)] border border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
                'text-[var(--term-accent)] rotate-90 lg:rotate-0',
              )}
            >
              <ArrowRightIcon className="h-5 w-5" />
            </span>
          </div>

          {/* 오른쪽 - 정확히 */}
          <article
            className={cn(
              'flex flex-col gap-sm p-md sm:p-lg lg:p-xl',
              'bg-emerald-50/70 dark:bg-emerald-950/30',
            )}
          >
            <span
              className={cn(
                'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
                'border-emerald-300 bg-emerald-100/80 text-emerald-800',
                'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
                'text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true">✓</span>
              {content.rightBadge}
            </span>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
              {content.rightQuote}
            </p>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.rightCaption}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};
