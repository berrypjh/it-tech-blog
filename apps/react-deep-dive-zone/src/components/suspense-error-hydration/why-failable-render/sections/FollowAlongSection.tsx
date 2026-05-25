import { cn } from '@it-tech-blog/utils';

import type { WhyFailableRenderContent } from '../content';
import { CodeIcon, FileSearchIcon, ListChecksIcon } from '../icons';

type Props = { content: WhyFailableRenderContent['followAlong'] };

export const FollowAlongSection = ({ content }: Props) => (
  <section
    aria-labelledby="follow-heading"
    className={cn(
      'grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,4fr)_minmax(0,6fr)]',
      'rounded-3xl border-2 p-md sm:p-lg',
      'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
      'shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    {/* LEFT: illustration */}
    <div
      aria-hidden="true"
      className={cn(
        'relative flex items-center justify-center min-h-[200px] lg:min-h-[260px] rounded-2xl border-2 overflow-hidden',
        'border-blue-200/80 bg-gradient-to-br from-blue-100 via-blue-50 to-violet-50/60',
        'dark:border-blue-800/60 dark:from-blue-950/40 dark:via-blue-950/20 dark:to-violet-950/30',
      )}
    >
      {/* browser top bar */}
      <div className="absolute top-3 left-3 right-3 flex items-center gap-1 rounded-lg bg-white/80 px-2 py-1.5 shadow-sm dark:bg-slate-900/70">
        <span className="block h-1.5 w-1.5 rounded-full bg-rose-400" />
        <span className="block h-1.5 w-1.5 rounded-full bg-amber-300" />
        <span className="block h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[9px] font-mono text-slate-500 dark:text-slate-400 truncate">
          {content.illustrationLabel}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* code bracket */}
        <span
          className={cn(
            'inline-flex h-16 w-16 items-center justify-center rounded-2xl border-2',
            'border-blue-300 bg-white text-blue-600 shadow-[0_4px_0_rgba(59,130,246,0.2)]',
            'dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300',
          )}
        >
          <CodeIcon className="h-8 w-8" />
        </span>
        {/* magnifier */}
        <span
          className={cn(
            'inline-flex h-20 w-20 items-center justify-center rounded-full border-2',
            'border-violet-300 bg-white text-violet-600 shadow-[0_4px_12px_rgba(139,92,246,0.25)]',
            'dark:border-violet-700 dark:bg-slate-900 dark:text-violet-300',
          )}
        >
          <FileSearchIcon className="h-10 w-10" />
        </span>
      </div>
    </div>

    {/* RIGHT: checklist */}
    <div className="flex flex-col gap-md">
      <header className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
        >
          <ListChecksIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.eyebrow}
          </span>
          <h2
            id="follow-heading"
            className="text-lg sm:text-xl font-bold text-[var(--term-fg)] break-keep"
          >
            {content.title}
          </h2>
        </div>
      </header>

      <ul className="flex flex-col gap-2.5">
        {content.items.map((item) => (
          <li
            key={item.label}
            className={cn(
              'flex flex-col gap-2 rounded-2xl border p-md',
              'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
            )}
          >
            <div className="flex items-start gap-2">
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-blue-400 bg-white text-blue-600 dark:border-blue-600 dark:bg-slate-900 dark:text-blue-300"
              >
                <span className="block h-2.5 w-2.5 rounded-sm" />
              </span>
              <span className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {item.label}
              </span>
            </div>
            <code
              className={cn(
                'overflow-x-auto rounded-lg border px-3 py-2 text-[11px] font-mono',
                'border-slate-300 bg-slate-950 text-slate-100',
                'dark:border-slate-700',
              )}
            >
              {item.codeExample}
            </code>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
