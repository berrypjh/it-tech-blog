import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { DispatchQueueOrderContent } from '../content';
import { ArrowRightIcon, DatabaseIcon, HourglassIcon, ListOrderedIcon } from '../icons';

type Props = { content: DispatchQueueOrderContent['hero'] };

const toneBadge = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet')
    return 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200';
  if (tone === 'teal')
    return 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200';
  return 'border-rose-300/80 bg-rose-50 text-rose-700 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200';
};

const toneNumber = (tone: 'violet' | 'teal' | 'rose') => {
  if (tone === 'violet') return 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900';
  if (tone === 'teal') return 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900';
  return 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900';
};

export const DispatchQueueHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="react-dom/events/dispatch-queue.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // collect → dispatchQueue → execute (capture / bubble)'}
        </span>
      }
    />

    <ul className="mt-md flex flex-wrap items-center gap-2">
      {content.badges.map((badge) => (
        <li
          key={badge.label}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            badge.tone === 'blue' &&
              'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500',
            badge.tone === 'cyan' &&
              'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-1.5 w-1.5 rounded-full',
              badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
            )}
          />
          {badge.label}
        </li>
      ))}
    </ul>

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
      {/* LEFT */}
      <div className="flex flex-col gap-md">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
            'font-bold leading-[1.14] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
          {content.description}
        </p>

        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
            >
              <ListOrderedIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.listenerTitle}
            </span>
          </header>
          <ol className="flex flex-col gap-1.5">
            {content.collected.map((entry) => (
              <li
                key={entry.label}
                className={cn(
                  'flex items-center gap-2 rounded-lg border px-3 py-2',
                  toneBadge(entry.tone),
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold',
                    toneNumber(entry.tone),
                  )}
                >
                  {entry.step}
                </span>
                <code className="font-mono text-[11px] sm:text-xsm font-bold break-all flex-1">
                  {entry.label}
                </code>
                <code className="font-mono text-[10px] uppercase tracking-wider opacity-80">
                  {entry.phase}
                </code>
              </li>
            ))}
          </ol>
        </article>
      </div>

      {/* RIGHT: dispatchQueue → timeline diagram */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
          'border-violet-300/80 dark:border-violet-700/70 shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.diagram.title}
          </h2>
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
          >
            <HourglassIcon className="h-4 w-4" />
          </span>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-md">
          {/* Queue card */}
          <div
            className={cn(
              'rounded-2xl border-2 bg-white p-md',
              'border-violet-200/80 dark:border-violet-700/60 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200"
              >
                <DatabaseIcon className="h-3.5 w-3.5" />
              </span>
              <code className="font-mono text-xsm font-bold text-violet-700 dark:text-violet-200">
                {content.diagram.queueTitle}
              </code>
            </div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-violet-600/80 dark:text-violet-300/70">
              event
            </div>
            <code className="block rounded-md border border-violet-100/80 bg-violet-50/40 px-2 py-1 mt-0.5 font-mono text-[11px] text-violet-700 dark:border-violet-800/40 dark:bg-violet-950/30 dark:text-violet-200 break-all">
              {content.diagram.eventLabel}
            </code>
            <div className="mt-2 text-[10px] font-mono uppercase tracking-wider text-violet-600/80 dark:text-violet-300/70">
              {content.diagram.listenersLabel}
            </div>
            <ul className="mt-0.5 flex flex-col gap-1">
              {content.diagram.listeners.map((entry) => (
                <li
                  key={entry.label}
                  className="flex items-center gap-1.5 rounded-md border border-violet-100/80 bg-violet-50/40 px-2 py-1 font-mono text-[10px] text-violet-700 dark:border-violet-800/40 dark:bg-violet-950/30 dark:text-violet-200"
                >
                  <span aria-hidden="true">#{entry.step}</span>
                  <span className="break-all">{entry.label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <span
            aria-hidden="true"
            className="self-center inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-[0_2px_0_rgba(124,58,237,0.3)] sm:rotate-0 rotate-90"
          >
            <ArrowRightIcon className="h-5 w-5" strokeWidth={2.4} />
          </span>

          {/* Timeline */}
          <div
            className={cn(
              'rounded-2xl border-2 bg-white p-md',
              'border-blue-200/80 dark:border-blue-700/60 dark:bg-slate-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <ListOrderedIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.diagram.timelineTitle}
              </span>
            </div>
            <ol className="flex flex-col gap-1.5">
              {content.diagram.timeline.map((entry) => (
                <li
                  key={entry.label}
                  className={cn(
                    'flex items-center gap-2 rounded-md border px-2.5 py-1.5',
                    toneBadge(entry.tone),
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold',
                      toneNumber(entry.tone),
                    )}
                  >
                    {entry.step}
                  </span>
                  <code className="font-mono text-[11px] font-bold break-all flex-1">
                    {entry.label}
                  </code>
                  {entry.phase && (
                    <code className="font-mono text-[9px] uppercase tracking-wider opacity-80">
                      {entry.phase}
                    </code>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </article>
    </div>
  </section>
);
