import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { HostComponentFiberContent } from '../content';
import { GitBranchIcon, LightbulbIcon, MonitorIcon } from '../icons';

type Props = { content: HostComponentFiberContent['vsDom'] };

export const HostVsDomComparison = ({ content }: Props) => (
  <section id="vs-dom" aria-labelledby="heading-vs-dom" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="vs-dom"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'rounded-2xl border bg-[var(--term-bg)] overflow-hidden',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <caption className="sr-only">{content.title}</caption>
          <thead>
            <tr>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-[10px] font-bold uppercase tracking-wider',
                  'text-[var(--term-muted)] bg-[var(--term-surface)] w-[18%]',
                )}
              >
                {content.headers.label}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-sky-50 text-sky-800',
                  'dark:bg-sky-950/40 dark:text-sky-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
                  />
                  {content.headers.fiber}
                </span>
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-slate-100 text-slate-800',
                  'dark:bg-slate-900 dark:text-slate-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <MonitorIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  {content.headers.dom}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={row.id}
                className={cn(
                  'align-top',
                  idx > 0 && 'border-t border-dashed border-[var(--term-border)]',
                )}
              >
                <th
                  scope="row"
                  className={cn(
                    'px-md py-3 text-xsm font-bold text-[var(--term-fg)] whitespace-nowrap',
                    'bg-[var(--term-surface)]',
                  )}
                >
                  {row.label}
                </th>
                <td
                  className={cn(
                    'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                    'bg-sky-50/30 dark:bg-sky-950/15',
                  )}
                >
                  {row.fiber}
                </td>
                <td
                  className={cn(
                    'px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep',
                    'bg-slate-50/60 dark:bg-slate-900/30',
                  )}
                >
                  {row.dom}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'border-sky-300/70 bg-sky-50/70',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
          'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
          'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
        )}
      >
        <LightbulbIcon className="h-6 w-6" />
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700 dark:text-sky-300">
          {content.emphasisTitle}
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
          {content.emphasisBody}
        </p>
      </div>
    </div>
  </section>
);
