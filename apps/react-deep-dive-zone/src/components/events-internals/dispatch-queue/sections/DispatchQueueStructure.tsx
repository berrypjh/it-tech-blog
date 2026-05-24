import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchQueueOrderContent } from '../content';
import { BoxIcon, DatabaseIcon, LayersIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['structure'] };

export const DispatchQueueStructure = ({ content }: Props) => (
  <section aria-labelledby="heading-structure">
    <NumberedSectionHeader
      id="structure"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* Queue card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
          'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
          >
            <DatabaseIcon className="h-5 w-5" />
          </span>
          <code className="font-mono text-sm sm:text-md font-bold text-violet-700 dark:text-violet-200">
            {content.queue.title}
          </code>
        </header>

        <div className="rounded-2xl border border-violet-200/70 bg-white p-md dark:border-violet-800/60 dark:bg-slate-950/40">
          <code className="block text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {content.queue.entry}
          </code>
          <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            event
          </div>
          <code className="block rounded-md border border-violet-200/70 bg-violet-50/40 px-2 py-1 mt-0.5 font-mono text-[11px] sm:text-xsm text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-200 break-all">
            {content.queue.event}
          </code>
          <div className="mt-3 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.queue.listenersLabel}
          </div>
          <ul className="mt-0.5 flex flex-col gap-1">
            {content.queue.listeners.map((entry) => (
              <li
                key={entry}
                className="flex items-center gap-2 rounded-md border border-violet-200/70 bg-violet-50/40 px-2 py-1.5 font-mono text-[11px] sm:text-xsm text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-200 break-all"
              >
                <BoxIcon aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
                <span>{entry}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Listener card */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
          >
            <BoxIcon className="h-5 w-5" />
          </span>
          <code className="font-mono text-sm sm:text-md font-bold text-teal-700 dark:text-teal-200">
            {content.listener.title}
          </code>
        </header>

        <dl
          className={cn(
            'grid grid-cols-[auto_minmax(0,1fr)] rounded-2xl border bg-white',
            'border-teal-200/70 dark:border-teal-800/60 dark:bg-slate-950/40',
            'overflow-hidden',
          )}
        >
          {content.listener.rows.map((row, i) => (
            <div key={row.key} className="contents">
              <dt
                className={cn(
                  'px-md py-2.5 font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                )}
              >
                {row.key}
              </dt>
              <dd
                className={cn(
                  'px-md py-2.5 font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                )}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  </section>
);
