import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, ShieldIcon } from '../icons';

type Props = { content: DispatchSelectionContent['updatePriority'] };

export const UpdatePriorityContext = ({ content }: Props) => (
  <section aria-labelledby="heading-update-priority">
    <NumberedSectionHeader
      id="update-priority"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ShieldIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-blue-200/80 bg-gradient-to-br from-blue-50/80 via-white to-violet-50/40',
        'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-center">
        {/* LEFT: main message */}
        <div className="flex flex-col gap-md">
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl',
                'bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500',
              )}
            >
              <ShieldIcon className="h-6 w-6" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              update-priority context
            </span>
          </header>
          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.mainMessage}
          </p>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.description}
          </p>
        </div>

        {/* RIGHT: 3-step flow */}
        <ol className="grid grid-cols-1 sm:grid-cols-3 gap-2 items-stretch">
          {content.flow.map((step, i) => {
            const isLast = i === content.flow.length - 1;
            return (
              <li key={step} className="relative flex">
                <div
                  className={cn(
                    'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 p-md w-full text-center',
                    'border-violet-300/80 bg-white dark:border-violet-700/60 dark:bg-slate-950/40',
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-violet-700 text-[10px] font-mono font-bold dark:bg-violet-950/60 dark:text-violet-200"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-keep">
                    {step}
                  </code>
                </div>
                {!isLast && (
                  <>
                    <span
                      aria-hidden="true"
                      className="hidden sm:inline-flex absolute -right-2.5 top-1/2 z-10 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-violet-200 bg-[var(--term-bg)] text-violet-600 shadow-[0_1px_0_var(--term-border)] dark:border-violet-700/60 dark:text-violet-300"
                    >
                      <ArrowRightIcon className="h-3 w-3" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="sm:hidden absolute left-1/2 -bottom-1.5 -translate-x-1/2 text-violet-500 dark:text-violet-300"
                    >
                      <ArrowDownIcon className="h-3 w-3" />
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </article>
  </section>
);
