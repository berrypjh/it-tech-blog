import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, DatabaseIcon, RepeatIcon } from '../icons';
import { toneAccent, toneCard, toneNumber } from '../styles';

type Props = { content: AdvancedWrapupContent['replay'] };

export const ReplayQueueConcept = ({ content }: Props) => (
  <section aria-labelledby="heading-replay">
    <NumberedSectionHeader
      id="replay"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<RepeatIcon className="h-5 w-5" />}
    />

    {/* 4-step flow */}
    <ol
      className={cn(
        'grid items-stretch gap-2 sm:gap-3 mb-md',
        'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
      )}
    >
      {content.flow.map((step, i) => {
        const isLast = i === content.flow.length - 1;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[step.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                'text-[11px] font-mono font-bold tabular-nums',
                toneNumber[step.tone],
              )}
            >
              {step.step}
            </span>
            <h3
              className={cn(
                'text-xsm sm:text-sm font-bold leading-tight break-keep',
                toneAccent[step.tone],
              )}
            >
              {step.title}
            </h3>
            <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
              {step.body}
            </p>

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>

    {/* Event buffer */}
    <article
      className={cn(
        'rounded-2xl border-2 p-md',
        'border-violet-300/80 bg-gradient-to-br from-violet-50/60 via-white to-blue-50/30',
        'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="flex items-center gap-2 mb-2">
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
        >
          <DatabaseIcon className="h-4 w-4" />
        </span>
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
          {content.bufferLabel}
        </span>
      </header>
      <ul className="flex flex-wrap items-center gap-2">
        {content.bufferItems.map((item) => (
          <li
            key={item}
            className="inline-flex items-center rounded-md border-2 border-violet-300/80 bg-white px-3 py-1 font-mono text-[11px] sm:text-xsm font-bold text-violet-700 shadow-sm hover:bg-violet-50 transition-colors dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200"
          >
            [{item}]
          </li>
        ))}
      </ul>
    </article>
  </section>
);
