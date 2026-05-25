import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { CheckCircleIcon, ServerIcon, SparklesIcon, XCircleIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['batching'] };

export const SuspenseBatchingSection = ({ content }: Props) => (
  <section aria-labelledby="batching-heading" className="flex flex-col">
    <SectionHeader
      id="batching-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_minmax(0,_5fr)_minmax(0,_4fr)] lg:gap-md items-stretch">
      {/* Before */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-rose-50/40 dark:border-rose-800/70 dark:bg-rose-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <XCircleIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-rose-700 dark:text-rose-200 break-keep">
            {content.before.title}
          </h3>
        </header>

        {/* Server stream */}
        <div
          className={cn(
            'rounded-xl border-2 px-3 py-3',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <ServerIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 text-rose-700 dark:text-rose-200"
            />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
              {content.before.serverLabel}
            </span>
          </div>
          <ol className="flex flex-col gap-1.5">
            {content.before.serverLines.map((line, idx) => (
              <li
                key={line}
                className="flex items-center gap-2 rounded-md border border-rose-200/60 bg-rose-50/50 px-2 py-1 text-xsm font-mono text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/30 dark:text-rose-200"
              >
                <span aria-hidden="true" className="text-[10px] font-bold tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Client */}
        <div
          className={cn(
            'rounded-xl border-2 px-3 py-3',
            'border-rose-200/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/30',
          )}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
            {content.before.clientLabel}
          </span>
          {/* skeletons appearing separately */}
          <div className="mt-2 flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-2 w-3/4 rounded-full bg-rose-200/70 dark:bg-rose-800/40" />
            <span className="block h-2 w-1/2 rounded-full bg-rose-200/50 dark:bg-rose-800/30" />
            <span className="block h-2 w-2/3 rounded-full bg-rose-200/40 dark:bg-rose-800/30" />
          </div>
          <p className="mt-2 text-xsm text-rose-700 dark:text-rose-200 break-keep">
            {content.before.clientBody}
          </p>
        </div>
      </article>

      {/* After */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.after.title}
          </h3>
        </header>

        {/* Server stream */}
        <div
          className={cn(
            'rounded-xl border-2 px-3 py-3',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          )}
        >
          <div className="flex items-center gap-2 mb-2">
            <ServerIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 text-teal-700 dark:text-teal-200"
            />
            <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200">
              {content.after.serverLabel}
            </span>
          </div>
          <ol className="flex flex-col gap-1.5">
            {content.after.serverLines.map((line, idx) => (
              <li
                key={line}
                className="flex items-center gap-2 rounded-md border border-teal-200/60 bg-teal-50/50 px-2 py-1 text-xsm font-mono text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-200"
              >
                <span aria-hidden="true" className="text-[10px] font-bold tabular-nums">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{line}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Client */}
        <div
          className={cn(
            'rounded-xl border-2 px-3 py-3',
            'border-teal-200/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/30',
          )}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200">
            {content.after.clientLabel}
          </span>
          <div className="mt-2 flex flex-col gap-1.5" aria-hidden="true">
            <span className="block h-2 w-full rounded-full bg-teal-200/70 dark:bg-teal-800/40" />
            <span className="block h-2 w-full rounded-full bg-teal-200/70 dark:bg-teal-800/40" />
            <span className="block h-2 w-5/6 rounded-full bg-teal-200/70 dark:bg-teal-800/40" />
          </div>
          <p className="mt-2 text-xsm text-teal-700 dark:text-teal-200 break-keep">
            {content.after.clientBody}
          </p>
        </div>
      </article>

      {/* Expected effects */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200 break-keep">
            {content.expectedTitle}
          </h3>
        </header>

        <ul className="flex flex-col gap-1.5">
          {content.expectedItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-600 dark:text-blue-300"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
