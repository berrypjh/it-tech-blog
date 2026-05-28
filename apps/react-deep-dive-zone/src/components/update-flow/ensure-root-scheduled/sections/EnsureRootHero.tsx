import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { toneTokens } from '../../../shared/tones';
import type { EnsureRootScheduledContent, HeroRootCard } from '../content';
import { ArrowDownIcon, ClockIcon, LightbulbIcon, ListChecksIcon, NetworkIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['hero'] };

export const EnsureRootHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="grep -n"
      path="ensureRootIsScheduled"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' '}
          packages/react-reconciler/src/ReactFiberRootScheduler.js
        </span>
      }
    />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <ul className="flex flex-wrap items-center gap-2">
          {content.pills.map((pill) => (
            <li
              key={pill.label}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                'text-[10px] font-mono font-bold uppercase tracking-wider',
                pill.tone === 'sky' &&
                  'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                pill.tone === 'slate' &&
                  'border-[var(--term-border)] bg-white text-[var(--term-muted)] dark:bg-slate-950/40',
              )}
            >
              {pill.tone === 'sky' && (
                <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-sky-500" />
              )}
              {pill.label}
            </li>
          ))}
        </ul>

        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.7rem]',
            'font-bold leading-[1.2] tracking-tight text-[var(--term-fg)] break-keep',
          )}
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span
            className={cn(
              'block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent',
              'dark:from-sky-300 dark:via-cyan-300 dark:to-teal-300',
            )}
          >
            {content.title.line3}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[58ch] break-keep">
          {content.description}
        </p>

        <aside
          className={cn(
            'mt-sm flex items-start gap-sm rounded-2xl border-2 p-md',
            'border-sky-200/80 bg-sky-50/70',
            'dark:border-sky-800/70 dark:bg-sky-950/40',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
              'bg-amber-100 text-amber-700 border border-amber-200/80',
              'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
            )}
          >
            <LightbulbIcon className="h-4 w-4" />
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.callout}
          </p>
        </aside>
      </div>

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <HeroDiagram diagram={content.diagram} />
      </div>
    </div>
  </section>
);

const HeroDiagram = ({ diagram }: { diagram: EnsureRootScheduledContent['hero']['diagram'] }) => (
  <div
    className={cn(
      'relative rounded-3xl border p-md sm:p-lg',
      'border-[var(--term-border)] bg-gradient-to-br from-sky-50/40 via-white to-emerald-50/30',
      'dark:from-sky-950/20 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <header className="mb-md flex items-center justify-between gap-2">
      <h2 className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-tight">
        {diagram.title}
      </h2>
      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
        4 roots
      </span>
    </header>

    {/* Root cards */}
    <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {diagram.roots.map((root) => (
        <li key={root.id} className="flex">
          <RootCard root={root} />
        </li>
      ))}
    </ul>

    {/* Converging connectors A/B/C only */}
    <div aria-hidden="true" className="relative h-8 sm:h-10">
      <svg
        viewBox="0 0 400 48"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        {/* Root A → */}
        <line
          x1="50"
          y1="0"
          x2="200"
          y2="44"
          className="text-emerald-300 dark:text-emerald-700"
          stroke="currentColor"
          strokeDasharray="3 3"
        />
        {/* Root B → */}
        <line
          x1="150"
          y1="0"
          x2="200"
          y2="44"
          className="text-sky-300 dark:text-sky-700"
          stroke="currentColor"
          strokeDasharray="3 3"
        />
        {/* Root C → */}
        <line
          x1="250"
          y1="0"
          x2="200"
          y2="44"
          className="text-violet-300 dark:text-violet-700"
          stroke="currentColor"
          strokeDasharray="3 3"
        />
        {/* Root D — NO line */}
        <polygon
          points="195,38 205,38 200,48"
          className="text-sky-400 dark:text-sky-500"
          fill="currentColor"
        />
      </svg>
    </div>

    {/* Root Schedule Queue */}
    <div
      className={cn(
        'rounded-3xl border-2 p-md',
        'border-sky-800 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-slate-100',
        'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.55)]',
      )}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-sky-400/40 bg-sky-400/10 text-sky-200"
          >
            <ListChecksIcon className="h-4 w-4" />
          </span>
          <span className="text-xsm sm:text-sm font-bold tracking-tight text-white">
            {diagram.scheduleQueueTitle}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-200/80">FIFO</span>
      </header>

      <ol className="flex flex-wrap items-center gap-2" aria-label={diagram.scheduleQueueTitle}>
        {diagram.scheduleQueueItems.map((item, idx) => (
          <li key={item} className="flex items-center gap-2">
            <span
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-xl border-2',
                'border-sky-300/60 bg-white/10 text-white font-mono font-bold text-md',
              )}
            >
              {item}
            </span>
            {idx < diagram.scheduleQueueItems.length - 1 && (
              <span aria-hidden="true" className="text-sky-300/80 font-mono">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>

    {/* Dashed connector to microtask */}
    <div aria-hidden="true" className="relative h-8 my-1">
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[length:1px_6px] [background-image:linear-gradient(to_bottom,var(--term-border)_50%,transparent_50%)]" />
      <ArrowDownIcon className="absolute left-1/2 bottom-0 -translate-x-1/2 h-3.5 w-3.5 text-[var(--term-dim)]" />
    </div>

    {/* Microtask Queue */}
    <div
      className={cn(
        'rounded-2xl border-2 p-md',
        'border-emerald-300/70 bg-emerald-50/60',
        'dark:border-emerald-700/70 dark:bg-emerald-950/30',
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
              'bg-emerald-100 text-emerald-700 border-emerald-200/80',
              'dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
            )}
          >
            <ClockIcon className="h-4 w-4" />
          </span>
          <span className="text-xsm sm:text-sm font-bold text-emerald-900 dark:text-emerald-100">
            {diagram.microtaskQueueTitle}
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700/80 dark:text-emerald-300/80">
          reserved
        </span>
      </header>
      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-2 py-1 font-mono text-[11px] font-bold',
          'border-slate-800 bg-slate-950 text-slate-100',
        )}
      >
        <span className="text-amber-300">{diagram.microtaskFunction}</span>
      </code>
      <p className="mt-1 text-xxsm text-emerald-900/85 dark:text-emerald-100/85 break-keep">
        {diagram.microtaskBody}
      </p>
    </div>
  </div>
);

const RootCard = ({ root }: { root: HeroRootCard }) => {
  const t = toneTokens[root.tone];
  return (
    <article
      className={cn(
        'flex flex-col gap-1.5 rounded-2xl border-2 bg-[var(--term-bg)] p-sm w-full',
        root.inactive ? 'border-dashed border-[var(--term-border)] opacity-60' : t.border,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center justify-between gap-1.5">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
            root.inactive
              ? 'border-[var(--term-border)] bg-slate-100 text-slate-400 dark:bg-slate-900/60 dark:text-slate-500'
              : t.chip,
          )}
        >
          <NetworkIcon className="h-4 w-4" />
        </span>
        {!root.inactive && (
          <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', t.dot)} />
        )}
      </header>
      <span
        className={cn(
          'font-mono text-xsm font-bold',
          root.inactive ? 'text-[var(--term-muted)]' : t.text,
        )}
      >
        {root.title}
      </span>
      <code
        className={cn(
          'inline-flex w-fit items-center rounded-md border px-1.5 py-0.5 font-mono text-[10px]',
          'border-slate-800 bg-slate-950',
          root.inactive ? 'text-slate-400' : 'text-amber-300',
        )}
      >
        {root.state}
      </code>
      {root.body && (
        <span className="text-[10px] text-[var(--term-muted)] leading-snug break-keep">
          {root.body}
        </span>
      )}
    </article>
  );
};
