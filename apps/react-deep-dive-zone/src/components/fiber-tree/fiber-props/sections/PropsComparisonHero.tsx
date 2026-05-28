import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import { PropsCompareCard } from '../components/PropsCompareCard';
import type { FiberPropsContent } from '../content';
import { SparklesIcon } from '../icons';

type Props = { content: FiberPropsContent['hero'] };

export const PropsComparisonHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt command="cat" path="packages/react-reconciler/src/ReactInternalTypes.js" />

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,_0.85fr)_minmax(0,_1.15fr)] gap-xl lg:gap-2xl items-start">
      {/* Left text */}
      <div className="flex flex-col gap-md min-w-0">
        <div className="flex items-center gap-sm">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-9 h-9 rounded-full',
              'bg-sky-600 text-white font-mono font-bold text-md',
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
            CHAPTER 17
          </span>
        </div>

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
                      'bg-gradient-to-r from-sky-600 via-violet-500 to-emerald-500 bg-clip-text text-transparent',
                      'dark:from-sky-300 dark:via-violet-300 dark:to-emerald-300',
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

      {/* Right comparison */}
      <div className="order-first lg:order-none min-w-0">
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-sm items-stretch">
          <PropsCompareCard
            kind="memoizedProps"
            title={content.memoizedCard.title}
            subtitle={content.memoizedCard.subtitle}
            badge={content.memoizedCard.badge}
            exampleLabel={content.memoizedCard.exampleLabel}
            example={content.memoizedCard.example}
          />
          <VsBadge label={content.vs} />
          <PropsCompareCard
            kind="pendingProps"
            title={content.pendingCard.title}
            subtitle={content.pendingCard.subtitle}
            badge={content.pendingCard.badge}
            exampleLabel={content.pendingCard.exampleLabel}
            example={content.pendingCard.example}
          />
        </div>
      </div>
    </div>
  </section>
);

const VsBadge = ({ label }: { label: string }) => (
  <div className="flex items-center justify-center">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-12 h-12 rounded-full',
        'bg-slate-900 text-white border-2 border-slate-700',
        'dark:bg-slate-950 dark:border-slate-700',
        'shadow-[0_8px_20px_-8px_rgba(15,23,42,0.55)]',
        'font-bold text-sm tracking-wider',
      )}
    >
      {label}
    </span>
  </div>
);
