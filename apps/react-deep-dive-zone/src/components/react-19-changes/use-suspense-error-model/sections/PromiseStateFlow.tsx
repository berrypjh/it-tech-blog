import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowRightIcon, AtomIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['promiseFlow'] };

export const PromiseStateFlow = ({ content }: Props) => (
  <section aria-labelledby="promise-flow-heading" className="flex flex-col">
    <SectionHeader
      id="promise-flow-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-gradient-to-br from-white via-blue-50/40 to-white',
        'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-blue-950/20 dark:to-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,_4fr)_auto_minmax(0,_8fr)] items-center">
        {/* CENTER: use(Promise) card */}
        <article
          className={cn(
            'inline-flex flex-col items-center gap-2 rounded-2xl border-2 px-md py-md text-center',
            'border-blue-700/60 bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950',
            'text-white shadow-[0_4px_0_rgba(15,23,42,0.25)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-blue-300/40 bg-white/10 text-blue-100"
          >
            <AtomIcon className="h-5 w-5" />
          </span>
          <span className="font-mono text-md sm:text-lg font-bold">{content.centerTitle}</span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-blue-200/80 break-keep">
            {content.centerSubtitle}
          </span>
        </article>

        {/* ARROW (desktop) */}
        <span aria-hidden="true" className="hidden lg:flex items-center justify-center">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:text-slate-400">
            <ArrowRightIcon className="h-4 w-4" />
          </span>
        </span>

        {/* BRANCHES */}
        <ul className="flex flex-col gap-2">
          {content.branches.map((branch) => {
            const tone = stateTone[branch.state];
            const Icon = iconRegistry[branch.iconKey];
            return (
              <li key={branch.title}>
                <article
                  className={cn(
                    'grid grid-cols-1 gap-2 rounded-2xl border-2 p-3',
                    'sm:grid-cols-[auto_auto_minmax(0,_1fr)] sm:items-stretch sm:gap-3',
                    tone.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  {/* state badge */}
                  <div
                    className={cn('flex items-center gap-2 rounded-lg border px-3 py-2', tone.chip)}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                        tone.iconChip,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <span className={cn('font-mono text-xsm font-bold', tone.text)}>
                      {branch.title}
                    </span>
                  </div>

                  {/* handle */}
                  <div className="flex items-center">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1',
                        'font-mono text-[10px] font-bold',
                        tone.chip,
                      )}
                    >
                      {branch.handle}
                    </span>
                  </div>

                  {/* result */}
                  <div
                    className={cn(
                      'flex flex-col justify-center gap-0.5 rounded-lg border-2 px-3 py-2',
                      tone.borderStrong,
                      tone.bg,
                    )}
                  >
                    <span className={cn('text-xsm font-bold break-keep', tone.text)}>
                      {branch.resultLines[0]}
                    </span>
                    <span className="text-[10px] text-[var(--term-muted)] break-keep">
                      {branch.resultLines[1]}
                    </span>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  </section>
);
