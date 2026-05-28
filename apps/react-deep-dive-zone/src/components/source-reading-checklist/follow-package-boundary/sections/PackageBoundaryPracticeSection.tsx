import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FollowPackageBoundaryContent } from '../content';
import { ArrowRightIcon, FileCodeIcon, ScanSearchIcon, TargetIcon } from '../icons';
import { PackageBadge } from '../PackageBadge';

type Props = { content: FollowPackageBoundaryContent['practice'] };

export const PackageBoundaryPracticeSection = ({ content }: Props) => {
  return (
    <section id="section-practice" aria-labelledby="heading-practice" className="space-y-lg">
      <SectionHeader
        id="practice"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<TargetIcon className="h-5 w-5" />}
      />

      <ul className="grid grid-cols-1 lg:grid-cols-3 gap-md">
        {content.cards.map((card) => (
          <li key={card.id}>
            <article
              className={cn(
                'group flex h-full flex-col gap-md rounded-2xl border-2 p-md',
                'bg-white dark:bg-[var(--term-bg)]',
                'border-slate-200 dark:border-slate-700',
                'shadow-[0_2px_0_var(--term-border)]',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'motion-safe:hover:border-blue-300 dark:motion-safe:hover:border-blue-700/70',
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 items-center justify-center rounded-md',
                    'border border-blue-300 bg-blue-50 text-blue-700',
                    'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
                  )}
                >
                  <TargetIcon className="h-3.5 w-3.5" />
                </span>
                <h3 className="text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
                  {card.topic}
                </h3>
              </header>

              <ul className="flex flex-col gap-1.5">
                {card.pairs.map((pair) => (
                  <li
                    key={pair.file}
                    className={cn(
                      'flex flex-wrap items-center gap-2 rounded-md border px-2.5 py-2',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                    )}
                  >
                    <code
                      className={cn(
                        'inline-flex items-center gap-1 font-mono text-[11px] text-[var(--term-fg)]',
                      )}
                    >
                      <FileCodeIcon
                        className="h-3 w-3 text-[var(--term-muted)]"
                        aria-hidden="true"
                      />
                      {pair.file}
                    </code>
                    <ArrowRightIcon
                      className="h-3 w-3 text-[var(--term-dim)] shrink-0"
                      aria-hidden="true"
                    />
                    <PackageBadge packageKey={pair.packageKey} size="sm" strong>
                      {pair.packageKey}
                    </PackageBadge>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-start gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
                <ScanSearchIcon
                  className="h-3.5 w-3.5 shrink-0 mt-0.5 text-blue-500"
                  aria-hidden="true"
                />
                <p className="text-[11px] leading-relaxed text-[var(--term-muted)] break-keep">
                  {card.readingPoint}
                </p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
