import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { TestAsDocContent } from '../content';
import { BeakerIcon, FileCheckIcon, FileCodeIcon } from '../icons';

type Props = { content: TestAsDocContent['recommendedFiles'] };

export const RecommendedFilesSection = ({ content }: Props) => {
  return (
    <section
      id="section-recommended-files"
      aria-labelledby="heading-recommended-files"
      className="space-y-lg"
    >
      <SectionHeader
        id="recommended-files"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BeakerIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-md">
        {content.rows.map((row) => (
          <li key={row.id}>
            <article
              className={cn(
                'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                'border-violet-200 dark:border-violet-800/60',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:border-violet-400 motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                'dark:motion-safe:hover:border-violet-500/80',
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {content.topicLabel}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-md',
                    'border border-violet-300 bg-violet-100 text-violet-700',
                    'dark:border-violet-700/70 dark:bg-violet-900/60 dark:text-violet-200',
                  )}
                >
                  <FileCheckIcon className="h-3.5 w-3.5" />
                </span>
              </header>

              <h3 className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
                {row.topic}
              </h3>

              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                  {content.fileLabel}
                </span>
                <code
                  className={cn(
                    'flex items-center gap-1.5 overflow-x-auto rounded-md border-2 px-2.5 py-1.5',
                    'border-violet-300 bg-violet-50 text-violet-800',
                    'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
                    'font-mono text-xsm font-bold',
                    'shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <FileCodeIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span className="whitespace-nowrap">{row.testFile}</span>
                </code>
              </div>

              <div className="mt-auto pt-sm border-t border-dashed border-violet-300/70 dark:border-violet-700/60">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] block mb-1">
                  {content.takeawayLabel}
                </span>
                <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {row.takeaway}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
