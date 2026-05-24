import { cn } from '@it-tech-blog/utils';

import type { RenderWithHooksContent } from '../content';
import { ArrowDownIcon, CodeIcon } from '../icons';

type Props = { content: RenderWithHooksContent['compare'] };

export const ComponentExecutionCompare = ({ content }: Props) => (
  <section
    aria-label="component-execution-compare"
    className={cn(
      'relative rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: what we see */}
      <article className="flex flex-col gap-md">
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-sky-200/80 bg-sky-50 text-sky-700 dark:border-sky-800/60 dark:bg-sky-950/40 dark:text-sky-200"
          >
            <CodeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
        </header>

        <div className="flex flex-1 flex-col gap-sm">
          <div className="flex flex-1 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950 px-md py-lg sm:py-2xl">
            <code className="font-mono text-lg sm:text-xl lg:text-2xl text-cyan-300">
              <span className="text-slate-500">&lt;</span>
              <span className="text-cyan-300">Counter</span>
              <span className="text-slate-400"> /</span>
              <span className="text-slate-500">&gt;</span>
            </code>
          </div>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.leftCaption}
          </p>
        </div>
      </article>

      {/* Center VS badge */}
      <div aria-hidden="true" className="flex items-center justify-center lg:px-2">
        <span
          className={cn(
            'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full',
            'bg-slate-900 text-white font-mono text-sm sm:text-md font-bold tracking-wider',
            'border-4 border-[var(--term-bg)] shadow-[0_3px_0_var(--term-border)]',
            'dark:bg-slate-200 dark:text-slate-900',
          )}
        >
          {content.centerBadge}
        </span>
      </div>

      {/* Right: what happens inside */}
      <article className="flex flex-col gap-md">
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200/80 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200"
          >
            <CodeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.rightTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.rightFlow.map((step, i) => {
            const isLast = i === content.rightFlow.length - 1;
            return (
              <li key={step.label} className="flex flex-col gap-2">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 px-md py-3',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-500 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-400 dark:text-slate-900"
                  >
                    {step.number}
                  </span>
                  <code className="font-mono text-xsm sm:text-sm font-bold text-slate-100 break-all">
                    {step.label}
                  </code>
                </div>
                {!isLast && (
                  <span aria-hidden="true" className="flex justify-center text-[var(--term-muted)]">
                    <ArrowDownIcon className="h-4 w-4" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.rightCaption}
        </p>
      </article>
    </div>
  </section>
);
