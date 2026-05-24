import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SyntheticEventContent } from '../content';
import { AtomIcon, CornerDownRightIcon } from '../icons';

type Props = { content: SyntheticEventContent['structure'] };

export const SyntheticEventStructure = ({ content }: Props) => (
  <section aria-labelledby="heading-structure">
    <NumberedSectionHeader
      id="structure"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<AtomIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/40',
        'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-md lg:gap-lg">
        {/* Tree */}
        <div
          className={cn(
            'rounded-2xl border bg-white p-md',
            'border-violet-200/70 dark:border-violet-800/60 dark:bg-slate-950/40',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900"
            >
              <AtomIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-sm sm:text-md font-bold text-violet-700 dark:text-violet-200">
              SyntheticEvent
            </code>
          </div>
          <ul className="flex flex-col gap-1.5">
            {content.rows.map((row, i) => {
              const isLast = i === content.rows.length - 1;
              return (
                <li
                  key={row.name}
                  className="flex items-center gap-2 rounded-lg border border-violet-100/80 bg-violet-50/30 px-3 py-1.5 dark:border-violet-800/40 dark:bg-violet-950/20"
                >
                  <span
                    aria-hidden="true"
                    className="font-mono text-[10px] text-violet-500 dark:text-violet-300/80"
                  >
                    {isLast ? '└─' : '├─'}
                  </span>
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-all">
                    {row.name}
                  </code>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Descriptions */}
        <div
          className={cn(
            'rounded-2xl border bg-white p-md',
            'border-[var(--term-border)] dark:bg-slate-950/40',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2 mb-md">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/40 dark:text-blue-200"
            >
              <CornerDownRightIcon className="h-4 w-4" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              descriptions
            </span>
          </div>
          <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-md gap-y-1.5">
            {content.rows.map((row) => (
              <div key={row.name} className="contents">
                <dt className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-all">
                  {row.name}
                </dt>
                <dd className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                  {row.meaning}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </article>
  </section>
);
