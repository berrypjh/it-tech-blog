import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { FiberEffectTree } from '../components/FiberEffectTree';
import type { FiberFlagsContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberFlagsContent['hero'] };

export const FlagsEffectsHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactFiberFlags.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.82fr)_minmax(0,_1.18fr)] gap-xl lg:gap-2xl items-start">
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
          className="text-2xl sm:text-3xl lg:text-[2.25rem] font-bold leading-[1.25] tracking-tight text-[var(--term-fg)] break-keep"
        >
          <span className="block">{content.title.line1}</span>
          <span className="block">{content.title.line2}</span>
          <span className="block">
            {content.title.line3.split(content.emphasis).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className={cn(
                      'bg-gradient-to-r from-emerald-600 via-sky-500 to-rose-500 bg-clip-text text-transparent',
                      'dark:from-emerald-300 dark:via-sky-300 dark:to-rose-300',
                    )}
                  >
                    {content.emphasis}
                  </span>
                )}
              </span>
            ))}
          </span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] max-w-[62ch] break-keep">
          {content.description}
        </p>
      </div>

      <div className="order-first lg:order-none min-w-0">
        <FiberEffectTree tree={content.tree} legend={content.legend} />
      </div>
    </div>
  </section>
);
