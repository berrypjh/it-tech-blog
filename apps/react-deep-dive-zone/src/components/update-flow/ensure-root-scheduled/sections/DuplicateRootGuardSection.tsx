import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { EnsureRootScheduledContent } from '../content';
import {
  ArrowDownIcon,
  BadgeCheckIcon,
  CopyXIcon,
  ListChecksIcon,
  NetworkIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: EnsureRootScheduledContent['duplicate'] };

export const DuplicateRootGuardSection = ({ content }: Props) => (
  <section id="duplicate" aria-labelledby="heading-duplicate" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="duplicate"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CopyXIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.35fr)] gap-md lg:gap-lg items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-sky-200/80 dark:border-sky-800/70',
          'bg-gradient-to-br from-white via-sky-50/40 to-emerald-50/25',
          'dark:from-[var(--term-bg)] dark:via-sky-950/25 dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-2xl border',
              'bg-amber-100 text-amber-700 border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <BadgeCheckIcon className="h-5 w-5" />
          </span>
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            de-dupe guarantee
          </span>
        </header>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep whitespace-pre-line">
          {content.description}
        </p>

        <div
          className={cn(
            'mt-auto flex items-start gap-sm rounded-2xl border-2 px-md py-3',
            'border-emerald-200/80 bg-emerald-50/60',
            'dark:border-emerald-800/70 dark:bg-emerald-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-xl',
              'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950',
            )}
          >
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
          <p className="text-xsm sm:text-sm font-bold leading-snug text-emerald-900 dark:text-emerald-100 break-keep">
            {content.highlight}
          </p>
        </div>
      </article>

      {/* Right diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border p-md sm:p-lg',
          'border-[var(--term-border)] bg-gradient-to-br from-white via-emerald-50/15 to-sky-50/25',
          'dark:from-[var(--term-bg)] dark:via-emerald-950/15 dark:to-sky-950/15',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-sm">
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
            {content.diagramTitle}
          </h3>
          <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80 rounded-md border border-emerald-200/70 dark:border-emerald-800/60 px-2 py-0.5">
            3 → 1
          </span>
        </header>

        {/* Updates list */}
        <ul className="flex flex-col gap-2">
          {content.updates.map((upd) => (
            <li
              key={upd}
              className={cn(
                'flex items-center gap-2 rounded-xl border bg-[var(--term-bg)] px-3 py-2',
                'border-emerald-200/80 dark:border-emerald-800/60',
                'shadow-[0_1px_0_var(--term-border)]',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                  'bg-emerald-100 text-emerald-700 border-emerald-200/80',
                  'dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
                )}
              >
                <NetworkIcon className="h-4 w-4" />
              </span>
              <span className="text-xsm sm:text-sm font-mono font-bold text-emerald-800 dark:text-emerald-100">
                {upd}
              </span>
            </li>
          ))}
        </ul>

        {/* Down arrow */}
        <span aria-hidden="true" className="my-0 flex justify-center text-[var(--term-dim)]">
          <ArrowDownIcon className="h-4 w-4" />
        </span>

        {/* Middle dedupe box */}
        <div
          className={cn(
            'flex items-center gap-sm rounded-2xl border-2 p-md',
            'border-amber-300/70 bg-amber-50/60',
            'dark:border-amber-700/70 dark:bg-amber-950/25',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-10 w-10 items-center justify-center rounded-xl',
              'bg-amber-600 text-white dark:bg-amber-500 dark:text-slate-950',
            )}
          >
            <CopyXIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col min-w-0">
            <code
              className={cn(
                'inline-flex w-fit items-center rounded-md border px-2 py-0.5 font-mono text-[11px] font-bold',
                'border-slate-800 bg-slate-950 text-slate-100',
              )}
            >
              <span className="text-amber-300">{content.middleLabel}</span>
            </code>
            <span className="text-[10px] text-amber-900/85 dark:text-amber-100/85 leading-snug break-keep mt-1">
              {content.middleSub}
            </span>
          </div>
        </div>

        {/* Down arrow */}
        <span aria-hidden="true" className="my-0 flex justify-center text-[var(--term-dim)]">
          <ArrowDownIcon className="h-4 w-4" />
        </span>

        {/* Result */}
        <div
          className={cn(
            'flex items-center gap-sm rounded-2xl border-2 p-md',
            'border-sky-800 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-slate-100',
            'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.55)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 text-sky-200"
          >
            <ListChecksIcon className="h-5 w-5" />
          </span>
          <div className="flex flex-col min-w-0 flex-1">
            <span className="text-[10px] uppercase tracking-wider font-mono text-sky-200/80">
              {content.resultTitle}
            </span>
            <code
              className={cn(
                'inline-flex w-fit items-center rounded-md border-2 px-3 py-1 font-mono text-md font-bold',
                'border-sky-300/60 bg-white/10 text-white',
              )}
            >
              {content.resultValue}
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-200/80 text-right break-keep">
            {content.resultBody}
          </span>
        </div>
      </article>
    </div>
  </section>
);
