import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  Repeat2Icon,
} from '../icons';

type Props = { content: FullFlowContent['yielding'] };

export const YieldingContinuationSection = ({ content }: Props) => (
  <section aria-labelledby="heading-yielding">
    <NumberedSectionHeader
      id="yielding"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<Repeat2Icon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md items-stretch">
      {/* left: flow + note */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="flex flex-col gap-1.5">
          {content.flow.map((step, i) => {
            const isLast = i === content.flow.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-lg border-2 px-3 py-1.5',
                    'border-[var(--term-border)] bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  <span
                    className={cn(
                      'text-[11px] sm:text-xsm font-medium break-keep',
                      isLast
                        ? 'text-violet-700 dark:text-violet-300 font-bold'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    {step}
                  </span>
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-2.5 my-0.5 inline-block w-px h-2 border-l border-dashed border-blue-300 dark:border-blue-700/70"
                  />
                )}
              </li>
            );
          })}
        </ol>
        <p
          className={cn(
            'rounded-xl border-2 p-3 text-xsm sm:text-sm leading-relaxed break-keep',
            'border-blue-200/80 bg-blue-50/80 text-blue-900 dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
          )}
        >
          {content.note}
        </p>
      </article>

      {/* right: Frame 1 / bridge / Frame 2 */}
      <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
            'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60"
            >
              <PauseCircleIcon className="h-4 w-4" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-violet-700 dark:text-violet-300">
              {content.frame1.title}
            </span>
          </header>
          <ul className="flex flex-col gap-1">
            {content.frame1.items.map((item, i) => {
              const isYield = i === content.frame1.items.length - 1;
              return (
                <li
                  key={item}
                  className={cn(
                    'flex items-center gap-1.5 text-[11px] sm:text-xsm leading-snug break-keep',
                    isYield
                      ? 'text-violet-700 dark:text-violet-300 font-bold'
                      : 'text-[var(--term-fg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-block h-1.5 w-1.5 rounded-full',
                      isYield ? 'bg-violet-500' : 'bg-blue-500',
                    )}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
          <span className="mt-auto inline-flex items-center self-start gap-1.5 rounded-full border-2 border-violet-300/80 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200">
            <PauseCircleIcon aria-hidden="true" className="h-3 w-3" />
            {content.frame1.tag}
          </span>
        </article>

        {/* bridge */}
        <div className="flex flex-col items-center justify-center gap-2">
          <span
            aria-hidden="true"
            className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)] dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200"
          >
            <Repeat2Icon className="h-4 w-4" />
          </span>
          <p className="text-center font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)] break-keep">
            {content.bridge.top}
            <br />
            {content.bridge.bottom}
          </p>
          <span className="md:hidden flex text-[var(--term-muted)]">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
          <span className="hidden md:inline-flex text-blue-500 dark:text-blue-400">
            <ChevronRightIcon className="h-4 w-4" />
          </span>
        </div>

        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30',
            'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
            >
              <PlayCircleIcon className="h-4 w-4" />
            </span>
            <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {content.frame2.title}
            </span>
          </header>
          <ul className="flex flex-col gap-1">
            {content.frame2.items.map((item, i) => {
              const isComplete = i === content.frame2.items.length - 1;
              return (
                <li
                  key={item}
                  className={cn(
                    'flex items-center gap-1.5 text-[11px] sm:text-xsm leading-snug break-keep',
                    isComplete
                      ? 'text-emerald-700 dark:text-emerald-300 font-bold'
                      : 'text-[var(--term-fg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-block h-1.5 w-1.5 rounded-full',
                      isComplete ? 'bg-emerald-500' : 'bg-teal-500',
                    )}
                  />
                  {item}
                </li>
              );
            })}
          </ul>
          <span className="mt-auto inline-flex items-center self-start gap-1.5 rounded-full border-2 border-emerald-300/80 bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200">
            <CheckCircleIcon aria-hidden="true" className="h-3 w-3" />
            {content.frame2.tag}
          </span>
        </article>
      </div>
    </div>
  </section>
);
