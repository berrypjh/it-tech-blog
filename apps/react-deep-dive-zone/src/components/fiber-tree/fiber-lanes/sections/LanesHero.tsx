import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import { LanesDiagram } from '../components/LanesDiagram';
import type { FiberLanesContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberLanesContent['hero'] };

export const LanesHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactFiberLane.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center min-w-[2.25rem] px-2 py-1',
              'rounded-md text-xxsm font-bold tabular-nums tracking-wider',
              'bg-sky-600 text-white',
              'dark:bg-sky-500 dark:text-slate-950',
              'shadow-[0_4px_12px_-4px_rgba(2,132,199,0.5)]',
            )}
          >
            {content.badge}
          </span>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'text-xxsm font-bold uppercase tracking-wider',
              'border-sky-300/80 bg-sky-50 text-sky-700',
              'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
            )}
          >
            <SparklesIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.pill}
          </span>
        </div>

        <h1
          id="hero-heading"
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.25] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">
            {content.title.line1.split(content.emphasis).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className={cn(
                      'bg-gradient-to-r from-emerald-600 via-violet-500 to-sky-500 bg-clip-text text-transparent',
                      'dark:from-emerald-300 dark:via-violet-300 dark:to-sky-300',
                    )}
                  >
                    {content.emphasis}
                  </span>
                )}
              </span>
            ))}
          </span>
          <span className="block">{content.title.line2}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[62ch] break-keep">
          {content.description}
        </p>
      </div>

      <div className="order-first lg:order-none min-w-0">
        <LanesDiagram
          cardLabel={content.cardLabel}
          fields={content.fields}
          stackTitle={content.stackTitle}
          items={content.items}
        />
      </div>
    </div>
  </section>
);
