import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { IdentityDiagram } from '../components/IdentityDiagram';
import type { FiberIdentityFieldsContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberIdentityFieldsContent['hero'] };

export const IdentityHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactInternalTypes.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.92fr)_minmax(0,_1.08fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
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
          <span className="block">
            {content.title.line2.split(content.emphasis).map((part, i, arr) => (
              <span key={i}>
                {part}
                {i < arr.length - 1 && (
                  <span
                    className={cn(
                      'bg-gradient-to-r from-sky-600 via-violet-500 to-amber-500 bg-clip-text text-transparent',
                      'dark:from-sky-300 dark:via-violet-300 dark:to-amber-300',
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

      {/* Right diagram */}
      <div className="order-first lg:order-none min-w-0">
        <IdentityDiagram
          cardLabel={content.cardLabel}
          fields={content.fiberFields}
          extraNote={content.extraNote}
        />
      </div>
    </div>
  </section>
);
