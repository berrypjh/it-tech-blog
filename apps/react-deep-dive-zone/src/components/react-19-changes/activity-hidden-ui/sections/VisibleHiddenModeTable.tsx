import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { EyeIcon, EyeOffIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['modeTable'] };

export const VisibleHiddenModeTable = ({ content }: Props) => (
  <section aria-labelledby="mode-table-heading" className="flex flex-col">
    <SectionHeader
      id="mode-table-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'overflow-hidden rounded-2xl border-2',
        'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Desktop / tablet: real table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/40 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              <th scope="col" className="px-md py-3 break-keep">
                {content.headerTopic}
              </th>
              <th
                scope="col"
                className="px-md py-3 break-keep bg-teal-50/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-200"
              >
                <div className="inline-flex items-center gap-1.5">
                  <EyeIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.headerVisible}
                </div>
              </th>
              <th
                scope="col"
                className="px-md py-3 break-keep bg-rose-50/60 dark:bg-rose-950/40 text-rose-700 dark:text-rose-200"
              >
                <div className="inline-flex items-center gap-1.5">
                  <EyeOffIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.headerHidden}
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={row.topic}
                className={cn(
                  'border-t border-slate-200 dark:border-slate-700',
                  i % 2 === 1 && 'bg-slate-50/40 dark:bg-slate-900/30',
                )}
              >
                <th scope="row" className="px-md py-3 align-top">
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {row.topic}
                  </span>
                </th>
                <td className="px-md py-3 align-top bg-teal-50/30 dark:bg-teal-950/20">
                  <span className="inline-flex items-center gap-1.5 text-xsm leading-relaxed text-teal-700 dark:text-teal-200 break-keep">
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-teal-500"
                    />
                    {row.visible}
                  </span>
                </td>
                <td className="px-md py-3 align-top bg-rose-50/30 dark:bg-rose-950/20">
                  <span className="inline-flex items-center gap-1.5 text-xsm leading-relaxed text-rose-700 dark:text-rose-200 break-keep">
                    <span
                      aria-hidden="true"
                      className="block h-1.5 w-1.5 rounded-full bg-rose-500"
                    />
                    {row.hidden}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: card rows */}
      <ul className="md:hidden flex flex-col">
        {content.rows.map((row, i) => (
          <li
            key={row.topic}
            className={cn(
              'flex flex-col gap-sm p-md',
              i > 0 && 'border-t border-slate-200 dark:border-slate-700',
            )}
          >
            <h3 className="text-xsm font-bold text-[var(--term-fg)] break-keep">{row.topic}</h3>
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-lg border-2 border-teal-200 bg-teal-50/60 dark:border-teal-800/60 dark:bg-teal-950/30 p-2">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200 mb-1 inline-flex items-center gap-1">
                  <EyeIcon aria-hidden="true" className="h-3 w-3" />
                  {content.headerVisible}
                </p>
                <p className="text-xsm text-teal-700 dark:text-teal-200 break-keep">
                  {row.visible}
                </p>
              </div>
              <div className="rounded-lg border-2 border-rose-200 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30 p-2">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200 mb-1 inline-flex items-center gap-1">
                  <EyeOffIcon aria-hidden="true" className="h-3 w-3" />
                  {content.headerHidden}
                </p>
                <p className="text-xsm text-rose-700 dark:text-rose-200 break-keep">{row.hidden}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
