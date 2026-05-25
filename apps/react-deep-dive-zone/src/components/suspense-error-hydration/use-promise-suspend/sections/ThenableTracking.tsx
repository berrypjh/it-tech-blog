import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import { ArrowDownIcon, CheckCircleIcon, SparklesIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['thenable'] };

export const ThenableTracking = ({ content }: Props) => (
  <section aria-labelledby="thenable-heading" className="flex flex-col gap-md">
    <SectionHeader id="thenable-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* LEFT */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">{content.leftTitle}</h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.leftIntro}
        </p>
        <ul className="mt-auto flex flex-col gap-2">
          {content.leftBullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* CENTER: index diagram */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/70 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
          {content.centerTitle}
        </h3>

        <div className="overflow-x-auto">
          <div className="flex flex-col gap-2 min-w-[420px]">
            {/* row 1: Hook-like Index */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                Hook-like Index
              </span>
              <div className="grid grid-cols-5 gap-1">
                {content.indexes.map((idx, i) => (
                  <div
                    key={i}
                    className="inline-flex h-7 items-center justify-center rounded-md border border-slate-300 bg-slate-50 text-[11px] font-mono font-bold text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {idx}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-5 gap-1">
                {content.hookCalls.map((call, i) => (
                  <div
                    key={i}
                    className={cn(
                      'inline-flex h-9 items-center justify-center rounded-lg border px-1 text-[10.5px] font-mono font-bold break-all text-center',
                      i === 0
                        ? 'border-slate-300 bg-slate-50 text-slate-600 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300'
                        : 'border-violet-300 bg-violet-50 text-violet-700 dark:border-violet-700 dark:bg-violet-950/40 dark:text-violet-200',
                    )}
                  >
                    {call}
                  </div>
                ))}
              </div>
            </div>

            {/* connectors */}
            <div aria-hidden="true" className="grid grid-cols-5 gap-1">
              {content.indexes.map((_, i) => (
                <div key={i} className="flex justify-center">
                  <ArrowDownIcon
                    className={cn(
                      'h-4 w-4',
                      i === 0
                        ? 'text-slate-300 dark:text-slate-600'
                        : 'text-violet-400 dark:text-violet-500',
                    )}
                  />
                </div>
              ))}
            </div>

            {/* row 2: Tracked Thenables */}
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                Tracked Thenables
              </span>
              <div className="grid grid-cols-5 gap-1">
                {content.tracked.map((t, i) => (
                  <div
                    key={i}
                    className={cn(
                      'inline-flex h-9 items-center justify-center rounded-lg border text-xsm font-mono font-bold',
                      t === '-'
                        ? 'border-slate-200 bg-slate-50/50 text-slate-400 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-500'
                        : 'border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700 dark:bg-blue-950/40 dark:text-blue-200',
                    )}
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* RIGHT */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-violet-700 dark:text-violet-200 break-keep">
            {content.rightTitle}
          </h3>
        </header>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.rightBody}
        </p>
      </article>
    </div>
  </section>
);
