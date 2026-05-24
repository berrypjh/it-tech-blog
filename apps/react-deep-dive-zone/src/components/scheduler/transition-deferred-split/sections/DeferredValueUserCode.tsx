import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ResponseAccent, TransitionDeferredContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  HourglassIcon,
  LayersIcon,
  SparklesIcon,
  ZapIcon,
} from '../icons';
import { responseCardBorder, responseIconBox, responseTextStrong } from '../responseAccent';

type Props = { content: TransitionDeferredContent['deferredValue'] };

const cardIcon: Record<ResponseAccent, typeof ZapIcon> = {
  emerald: ZapIcon,
  blue: ClockIcon,
  violet: HourglassIcon,
  rose: ZapIcon,
  teal: SparklesIcon,
};

export const DeferredValueUserCode = ({ content }: Props) => (
  <section aria-labelledby="heading-deferred-value">
    <NumberedSectionHeader
      id="deferred-value"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md items-stretch">
      {/* inline code panel */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            useDeferredValue
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
            tsx
          </span>
        </header>

        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950 px-md py-md">
          <code className="font-mono text-xsm sm:text-sm leading-relaxed">
            <span className="text-pink-300 font-semibold">const</span>{' '}
            <span className="text-violet-300">deferredQuery</span>{' '}
            <span className="text-slate-300">=</span>{' '}
            <span className="text-cyan-300 font-semibold">useDeferredValue</span>
            <span className="text-slate-300">(</span>
            <span className="text-amber-200">query</span>
            <span className="text-slate-300">);</span>
          </code>
        </div>

        <div
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 px-md py-3',
            'border-blue-300/80 bg-blue-50/60 text-blue-900',
            'dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
          )}
        >
          <SparklesIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300"
          />
          <p className="text-xsm sm:text-sm leading-relaxed break-keep">{content.mainMessage}</p>
        </div>
      </article>

      {/* 3-card flow */}
      <ol className="grid grid-cols-1 md:grid-cols-3 gap-3 relative">
        {content.cards.map((c, i) => {
          const isLast = i === content.cards.length - 1;
          const Icon = cardIcon[c.accent];
          return (
            <li
              key={c.title}
              className={cn(
                'relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-colors',
                'motion-safe:hover:-translate-y-0.5 motion-reduce:transform-none',
                responseCardBorder[c.accent],
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                    responseIconBox[c.accent],
                  )}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    'font-mono text-[10px] uppercase tracking-wider',
                    responseTextStrong[c.accent],
                  )}
                >
                  step {i + 1}
                </span>
              </header>
              <h3
                className={cn(
                  'text-xsm sm:text-sm font-bold leading-tight break-keep',
                  responseTextStrong[c.accent],
                )}
              >
                {c.title}
              </h3>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                {c.description}
              </p>
              <p
                className={cn(
                  'mt-auto font-mono text-[10px] font-bold uppercase tracking-wider break-keep',
                  responseTextStrong[c.accent],
                )}
              >
                {c.bottom}
              </p>

              {!isLast && (
                <>
                  <span
                    aria-hidden="true"
                    className="hidden md:inline-flex absolute -right-3 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                  >
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);
