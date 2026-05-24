import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { FiberObjectGroupCard } from '../components/FiberObjectGroupCard';
import type { FiberNodeOverviewContent } from '../content';
import { CircuitBoardIcon, SparklesIcon } from '../icons';

type Props = { content: FiberNodeOverviewContent['hero'] };

export const FiberHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactInternalTypes.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text column */}
      <div className="flex flex-col gap-md min-w-0">
        <span
          className={cn(
            'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1',
            'text-xxsm font-bold uppercase tracking-wider',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
          {content.badge}
        </span>

        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.22] tracking-tight text-[var(--term-fg)] break-keep"
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

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[60ch] break-keep">
          {content.description}
        </p>

        <div className="flex items-center gap-sm pt-xs text-xxsm text-[var(--term-muted)]">
          <CircuitBoardIcon className="h-4 w-4 text-sky-500" aria-hidden="true" />
          <span className="font-mono">
            {'// '}
            <span className="text-sky-700 dark:text-sky-300 font-bold">{content.emphasis}</span>
          </span>
        </div>
      </div>

      {/* Right Fiber object structure card */}
      <div className="order-first lg:order-none min-w-0">
        <div
          className={cn(
            'relative rounded-3xl p-md sm:p-lg',
            'bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900',
            'border border-slate-800/80',
            'shadow-[0_24px_48px_-24px_rgba(2,6,23,0.7),0_2px_0_var(--term-border)]',
          )}
        >
          <header className="mb-sm flex items-center justify-between">
            <h2 className="text-xsm sm:text-sm font-bold tracking-tight text-slate-100">
              {content.cardTitle}
            </h2>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 rounded-md border border-slate-700/70 px-2 py-0.5">
              {content.cardLabel}
            </span>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {content.groups.map((group) => (
              <FiberObjectGroupCard key={group.id} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);
