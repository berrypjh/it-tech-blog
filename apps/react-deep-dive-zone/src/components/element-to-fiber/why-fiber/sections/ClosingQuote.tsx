import { cn } from '@it-tech-blog/utils';

import type { FiberWhyNeededContent } from '../content';
import { HexagonIcon, QuoteIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['quote'] };

export const ClosingQuote = ({ content }: Props) => (
  <section id="closing-quote" aria-labelledby="heading-closing-quote" className="scroll-mt-xl">
    <div
      className={cn(
        'relative overflow-hidden rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-sky-300/70 dark:border-sky-700/70',
        'bg-gradient-to-br from-sky-50 via-white to-violet-50/60',
        'dark:from-sky-950/40 dark:via-[var(--term-bg)] dark:to-violet-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 w-48 h-48 rounded-full bg-violet-300/20 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-sky-300/20 blur-3xl"
      />

      <div className="relative grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
        {/* Left big quote mark */}
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0',
            'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
            'shadow-[0_12px_30px_-12px_rgba(2,132,199,0.55)]',
          )}
        >
          <QuoteIcon className="h-8 w-8 sm:h-10 sm:w-10" />
        </span>

        {/* Center text */}
        <div className="flex flex-col gap-sm min-w-0 text-center lg:text-left">
          <h2
            id="heading-closing-quote"
            className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-tight tracking-tight text-[var(--term-fg)] break-keep"
          >
            “{content.quote}”
          </h2>
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep">
            {content.supporting}
          </p>
        </div>

        {/* Right cube/Fiber symbol */}
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl shrink-0',
            'bg-gradient-to-br from-violet-500 to-violet-600 text-white',
            'dark:from-violet-400 dark:to-violet-500 dark:text-slate-950',
            'shadow-[0_12px_30px_-12px_rgba(139,92,246,0.55)]',
            'rotate-[-8deg]',
          )}
        >
          <HexagonIcon className="h-8 w-8 sm:h-10 sm:w-10" />
        </span>
      </div>
    </div>
  </section>
);
