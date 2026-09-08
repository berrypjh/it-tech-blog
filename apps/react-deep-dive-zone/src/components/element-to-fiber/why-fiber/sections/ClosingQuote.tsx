import { cn } from '@it-tech-blog/utils';

import { Hexagon, Quote } from 'lucide-react';

import { toneTokens } from '../../../shared/tones';
import type { FiberWhyNeededContent } from '../content';

type Props = { content: FiberWhyNeededContent['quote'] };

const symbolBox =
  'inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border shrink-0';

export const ClosingQuote = ({ content }: Props) => (
  <section id="closing-quote" aria-labelledby="heading-closing-quote" className="scroll-mt-xl">
    <div
      className={cn(
        'rounded-3xl border p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[auto_minmax(0,_1fr)_auto] gap-md lg:gap-lg items-center">
        {/* Left big quote mark */}
        <span aria-hidden="true" className={cn(symbolBox, toneTokens.sky.chip)}>
          <Quote className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
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
          className={cn(symbolBox, 'rotate-[-8deg]', toneTokens.violet.chip)}
        >
          <Hexagon className="h-8 w-8 sm:h-10 sm:w-10" aria-hidden="true" />
        </span>
      </div>
    </div>
  </section>
);
