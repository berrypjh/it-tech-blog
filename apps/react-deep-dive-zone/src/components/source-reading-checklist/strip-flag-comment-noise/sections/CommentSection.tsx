import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { StripFlagCommentNoiseContent } from '../content';
import { AlertTriangleIcon, MessageSquareIcon, QuoteIcon, SparkIcon } from '../icons';
import { LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['comment'] };

export const CommentSection = ({ content }: Props) => {
  return (
    <section id="section-comment" aria-labelledby="heading-comment" className="space-y-lg">
      <SectionHeader
        id="comment"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<MessageSquareIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)] gap-md lg:gap-lg items-start">
        {/* Left — comment block */}
        <article
          className={cn(
            'rounded-2xl border-2 overflow-hidden',
            'border-emerald-300 bg-slate-900 text-slate-100',
            'dark:border-emerald-700/70',
            'shadow-[0_3px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2 border-b border-slate-700 px-md py-2.5">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
              <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
            </div>
            <LabelChip label="comment" size="sm" />
          </header>
          <pre className="overflow-x-auto px-md py-md text-xsm leading-relaxed font-mono text-emerald-200">
            <code>{content.code}</code>
          </pre>
        </article>

        {/* Right — Interpretation card */}
        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-emerald-300 bg-emerald-50/60',
              'dark:border-emerald-700/70 dark:bg-emerald-950/30',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                  'border border-emerald-300 bg-white text-emerald-700',
                  'dark:border-emerald-700/70 dark:bg-[var(--term-bg)] dark:text-emerald-200',
                )}
              >
                <QuoteIcon className="h-4 w-4" />
              </span>
              <p className="text-xsm sm:text-sm leading-relaxed text-emerald-900 dark:text-emerald-100 break-keep">
                {content.interpretation}
              </p>
            </div>
          </article>

          {/* Main point */}
          <article
            className={cn(
              'rounded-xl border-2 p-md',
              'border-emerald-300 bg-white',
              'dark:border-emerald-700/70 dark:bg-[var(--term-bg)]',
            )}
          >
            <div className="flex items-start gap-2">
              <SparkIcon
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <p className="text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
                {content.mainPoint}
              </p>
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
