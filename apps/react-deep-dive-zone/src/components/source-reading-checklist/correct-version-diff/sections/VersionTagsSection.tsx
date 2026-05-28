import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { CorrectVersionDiffContent, VersionCompareSide } from '../content';
import { AlertTriangleIcon, CheckCircleIcon, GitBranchIcon, SparkIcon, TagIcon } from '../icons';

type Props = { content: CorrectVersionDiffContent['versionTags'] };

export const VersionTagsSection = ({ content }: Props) => {
  return (
    <section
      id="section-version-tags"
      aria-labelledby="heading-version-tags"
      className="space-y-lg"
    >
      <SectionHeader
        id="version-tags"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<TagIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
          <CompareCard side={content.left} variant="warning" />
          <CompareCard side={content.right} variant="stable" />
        </div>

        {/* Conclusion banner */}
        <aside
          className={cn(
            'mt-md flex items-start gap-3 rounded-xl border-2 p-md',
            'border-emerald-300 bg-emerald-50 text-emerald-900',
            'dark:border-emerald-700/70 dark:bg-emerald-950/30 dark:text-emerald-100',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
              'border border-emerald-300 bg-white text-emerald-700',
              'dark:border-emerald-700/70 dark:bg-[var(--term-bg)] dark:text-emerald-200',
            )}
          >
            <SparkIcon className="h-4 w-4" />
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug break-keep">
            {content.conclusion}
          </p>
        </aside>
      </div>
    </section>
  );
};

const CompareCard = ({
  side,
  variant,
}: {
  side: VersionCompareSide;
  variant: 'warning' | 'stable';
}) => {
  const isWarning = variant === 'warning';
  const Icon = isWarning ? GitBranchIcon : TagIcon;
  return (
    <article
      className={cn(
        'group flex h-full flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
        'bg-white dark:bg-[var(--term-bg)]',
        isWarning
          ? 'border-amber-300 dark:border-amber-700/70'
          : 'border-emerald-300 dark:border-emerald-700/70',
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-lg border-2',
              isWarning
                ? 'border-amber-300 bg-amber-100 text-amber-700 dark:border-amber-700/70 dark:bg-amber-900/60 dark:text-amber-200'
                : 'border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-900/60 dark:text-emerald-200',
            )}
          >
            <Icon className="h-4 w-4" />
          </span>
          <h3
            className={cn(
              'text-md font-bold leading-snug break-keep',
              isWarning
                ? 'text-amber-900 dark:text-amber-100'
                : 'text-emerald-900 dark:text-emerald-100',
            )}
          >
            {side.title}
          </h3>
        </div>
        <span
          className={cn(
            'inline-flex items-center rounded-full border-2 px-2.5 py-1',
            isWarning
              ? 'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200'
              : 'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {side.badge}
        </span>
      </header>

      <ul className="flex flex-col gap-1.5">
        {side.bullets.map((bullet) => (
          <li
            key={bullet}
            className={cn(
              'flex items-start gap-2 rounded-md border px-2.5 py-2',
              isWarning
                ? 'border-amber-200 bg-amber-50/40 dark:border-amber-800/60 dark:bg-amber-950/20'
                : 'border-emerald-200 bg-emerald-50/40 dark:border-emerald-800/60 dark:bg-emerald-950/20',
            )}
          >
            {isWarning ? (
              <AlertTriangleIcon
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600 dark:text-amber-400"
                aria-hidden="true"
              />
            ) : (
              <CheckCircleIcon
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
            )}
            <span className="text-xsm leading-snug text-[var(--term-fg)] break-keep">{bullet}</span>
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-sm text-xsm leading-relaxed text-[var(--term-muted)] break-keep border-t border-dashed border-[var(--term-border)]">
        {side.conclusion}
      </p>
    </article>
  );
};
