import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { EagerBailoutContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: EagerBailoutContent['scheduleTable'] };

export const UpdateVsRenderScheduleSection = ({ content }: Props) => (
  <section id="schedule" aria-labelledby="heading-schedule" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="schedule"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'overflow-hidden rounded-3xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full border-collapse text-left text-xsm sm:text-sm">
          <thead>
            <tr
              className={cn(
                'bg-slate-50/80 dark:bg-slate-900/40',
                'border-b border-[var(--term-border)]',
              )}
            >
              <th scope="col" className="px-md py-3 font-bold text-[var(--term-fg)] w-32 sm:w-40">
                {content.headers.label}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 font-bold border-l border-[var(--term-border)]',
                  'text-emerald-800 dark:text-emerald-200',
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-500" />
                  {content.headers.update}
                </span>
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 font-bold border-l border-[var(--term-border)]',
                  'text-sky-800 dark:text-sky-200',
                )}
              >
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-sky-500" />
                  {content.headers.schedule}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={row.label}
                className={cn(
                  idx < content.rows.length - 1 &&
                    'border-b border-dashed border-[var(--term-border)]',
                )}
              >
                <th
                  scope="row"
                  className="px-md py-3 align-top font-bold text-[var(--term-fg)] bg-slate-50/40 dark:bg-slate-900/20"
                >
                  {row.label}
                </th>
                <td
                  className={cn(
                    'px-md py-3 align-top border-l border-[var(--term-border)] break-keep',
                    row.mono ? 'font-mono text-xxsm' : 'text-[var(--term-fg)]',
                    'bg-emerald-50/30 dark:bg-emerald-950/15',
                  )}
                >
                  {row.updateValue}
                </td>
                <td
                  className={cn(
                    'px-md py-3 align-top border-l border-[var(--term-border)] break-keep',
                    row.mono ? 'font-mono text-xxsm' : 'text-[var(--term-fg)]',
                    'bg-sky-50/30 dark:bg-sky-950/15',
                  )}
                >
                  {row.scheduleValue}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile card list */}
      <ul className="md:hidden divide-y divide-[var(--term-border)]">
        {content.rows.map((row) => (
          <li key={row.label} className="flex flex-col gap-2 p-md">
            <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              {row.label}
            </span>
            <div className="flex flex-col gap-1.5 rounded-xl border border-emerald-200/70 bg-emerald-50/40 px-3 py-2 dark:border-emerald-800/60 dark:bg-emerald-950/20">
              <span className="text-[10px] uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-200">
                {content.headers.update}
              </span>
              <span
                className={cn(
                  'text-xsm break-keep',
                  row.mono && 'font-mono text-xxsm',
                  'text-[var(--term-fg)]',
                )}
              >
                {row.updateValue}
              </span>
            </div>
            <div className="flex flex-col gap-1.5 rounded-xl border border-sky-200/70 bg-sky-50/40 px-3 py-2 dark:border-sky-800/60 dark:bg-sky-950/20">
              <span className="text-[10px] uppercase tracking-wider font-bold text-sky-700 dark:text-sky-200">
                {content.headers.schedule}
              </span>
              <span
                className={cn(
                  'text-xsm break-keep',
                  row.mono && 'font-mono text-xxsm',
                  'text-[var(--term-fg)]',
                )}
              >
                {row.scheduleValue}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </article>

    {/* Bottom note */}
    <div
      className={cn(
        'flex items-start gap-sm rounded-2xl border-2 px-md py-3',
        'border-sky-200/80 bg-sky-50/70',
        'dark:border-sky-800/70 dark:bg-sky-950/40',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl',
          'bg-amber-100 text-amber-700 border border-amber-200/80',
          'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
        )}
      >
        <SparklesIcon className="h-4 w-4" />
      </span>
      <p className="text-xsm sm:text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);
