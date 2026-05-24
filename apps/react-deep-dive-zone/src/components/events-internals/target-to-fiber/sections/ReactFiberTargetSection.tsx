import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TargetFiberContent } from '../content';
import { BoxIcon, CheckCircleIcon, ComponentIcon } from '../icons';

type Props = { content: TargetFiberContent['fiberTarget'] };

export const ReactFiberTargetSection = ({ content }: Props) => (
  <section aria-labelledby="heading-fiber-target">
    <NumberedSectionHeader
      id="fiber-target"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BoxIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/70 via-white to-emerald-50/30',
          'dark:border-teal-800/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500 text-white shadow-[0_2px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
          >
            <CheckCircleIcon className="h-4 w-4" strokeWidth={2.4} />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            react needs
          </span>
        </header>

        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        <p className="mt-auto text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
          {content.caption}
        </p>
      </article>

      {/* Fiber table */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-white dark:border-teal-700/70 dark:bg-slate-950/40',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200"
          >
            <ComponentIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
            {content.fiberCardTitle}
          </span>
        </header>

        <dl
          className={cn(
            'grid grid-cols-[auto_minmax(0,1fr)] rounded-xl border border-teal-200/70 bg-[var(--term-bg)]',
            'dark:border-teal-800/60',
            'overflow-hidden',
          )}
        >
          {content.rows.map((row, i) => (
            <div key={row.key} className="contents">
              <dt
                className={cn(
                  'px-md py-2.5 text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                )}
              >
                {row.key}
              </dt>
              <dd
                className={cn(
                  'px-md py-2.5 font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all',
                  i > 0 && 'border-t border-teal-100/80 dark:border-teal-800/40',
                  row.key === 'memoizedProps' && 'text-violet-700 dark:text-violet-300 font-bold',
                )}
              >
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </article>
    </div>
  </section>
);
