import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
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
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0 items-stretch divide-y divide-dashed divide-[var(--term-border)] lg:divide-y-0">
          {/* 왼쪽 - 오해 */}
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
                'bg-[var(--term-surface)] border-[var(--term-border)]',
                'text-rose-600 dark:text-rose-300',
                'text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true">×</span>
              {content.leftBadge}
            </span>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-rose-600 dark:text-rose-300 break-keep">
              {content.leftQuote}
            </p>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
              {content.leftCaption}
            </p>
          </article>

          {/* 중앙 화살표 */}
          <div className="flex items-center justify-center px-md py-sm lg:py-md border-y border-dashed border-[var(--term-border)] lg:border-y-0 lg:border-x">
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
          <article className="flex flex-col gap-sm p-md sm:p-lg lg:p-xl">
            <span
              className={cn(
                'inline-flex items-center gap-1.5 self-start rounded-full border px-2.5 py-1',
                'bg-[var(--term-surface)] border-[var(--term-border)]',
                'text-[var(--term-accent)]',
                'text-[10px] font-bold uppercase tracking-wider',
              )}
            >
              <span aria-hidden="true">✓</span>
              {content.rightBadge}
            </span>

            <p className="text-md sm:text-lg lg:text-xl font-bold leading-snug text-[var(--term-fg)] break-keep">
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
