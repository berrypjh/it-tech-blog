import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { StripFlagCommentNoiseContent } from '../content';
import { AlertTriangleIcon, BugIcon, SparkIcon } from '../icons';
import { LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['devBranch'] };

export const DevBranchSection = ({ content }: Props) => {
  return (
    <section id="section-dev-branch" aria-labelledby="heading-dev-branch" className="space-y-lg">
      <SectionHeader
        id="dev-branch"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<BugIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)] gap-md lg:gap-lg items-start">
        {/* Left — Code */}
        <article
          className={cn(
            'rounded-2xl border-2 overflow-hidden',
            'border-amber-300 bg-slate-900 text-slate-100',
            'dark:border-amber-700/70',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2 border-b border-slate-700 px-md py-2.5">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <LabelChip label="dev" size="sm" />
          </header>
          <pre className="overflow-x-auto px-md py-md text-xsm leading-relaxed font-mono">
            <code>{content.code}</code>
          </pre>
        </article>

        {/* Right — Explanation */}
        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-amber-300 bg-amber-50/60',
              'dark:border-amber-700/70 dark:bg-amber-950/30',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2',
                  'border-amber-400 bg-white text-amber-700',
                  'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <SparkIcon className="h-5 w-5" />
              </span>
              <h3 className="text-md sm:text-lg font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
                {content.mainPoint}
              </h3>
            </div>
          </article>

          {/* Caution */}
          <aside
            className={cn(
              'rounded-xl border-2 p-md',
              'border-slate-300 bg-slate-50/60',
              'dark:border-slate-700 dark:bg-slate-900/40',
            )}
            aria-label="caution"
          >
            <div className="flex items-start gap-2">
              <AlertTriangleIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-slate-500 dark:text-slate-400"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  {content.cautionTitle}
                </span>
                <p className="text-xsm leading-relaxed text-slate-700 dark:text-slate-300 break-keep">
                  {content.cautionBody}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
