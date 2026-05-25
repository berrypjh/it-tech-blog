import { cn } from '@it-tech-blog/utils';

import type { UseEffectEventContent } from '../content';
import { CheckCircleIcon, XCircleIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['comparison'] };

export const BeforeAfterBehaviorTable = ({ content }: Props) => (
  <section aria-labelledby="comparison-heading" className="flex flex-col">
    <SectionHeader
      id="comparison-heading"
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
        <table className="w-full min-w-[860px] border-collapse text-left">
          <thead>
            <tr className="bg-blue-50/70 dark:bg-blue-950/40 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-200">
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.topic}
              </th>
              <th
                scope="col"
                className="px-md py-3 break-keep bg-rose-50/60 dark:bg-rose-950/40 text-rose-700 dark:text-rose-200"
              >
                <div className="inline-flex items-center gap-1.5">
                  <XCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.columns.before}
                </div>
              </th>
              <th
                scope="col"
                className="px-md py-3 break-keep bg-teal-50/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-200"
              >
                <div className="inline-flex items-center gap-1.5">
                  <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
                  {content.columns.after}
                </div>
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.explanation}
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
                <td className="px-md py-3 align-top bg-rose-50/30 dark:bg-rose-950/20">
                  <ul className="flex flex-col gap-1">
                    {row.beforeLines.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-1.5 text-xsm text-rose-700 dark:text-rose-200 break-keep"
                      >
                        <XCircleIcon aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-md py-3 align-top bg-teal-50/30 dark:bg-teal-950/20">
                  <ul className="flex flex-col gap-1">
                    {row.afterLines.map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-1.5 text-xsm text-teal-700 dark:text-teal-200 break-keep"
                      >
                        <CheckCircleIcon aria-hidden="true" className="mt-0.5 h-3 w-3 shrink-0" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {row.explanation}
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
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">{row.topic}</h3>
            <div className="grid grid-cols-1 gap-2">
              <div className="rounded-lg border-2 border-rose-200 bg-rose-50/60 p-2 dark:border-rose-800/60 dark:bg-rose-950/30">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200 mb-1 inline-flex items-center gap-1">
                  <XCircleIcon aria-hidden="true" className="h-3 w-3" />
                  {content.columns.before}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {row.beforeLines.map((line) => (
                    <li key={line} className="text-xsm text-rose-700 dark:text-rose-200 break-keep">
                      • {line}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border-2 border-teal-200 bg-teal-50/60 p-2 dark:border-teal-800/60 dark:bg-teal-950/30">
                <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200 mb-1 inline-flex items-center gap-1">
                  <CheckCircleIcon aria-hidden="true" className="h-3 w-3" />
                  {content.columns.after}
                </p>
                <ul className="flex flex-col gap-0.5">
                  {row.afterLines.map((line) => (
                    <li key={line} className="text-xsm text-teal-700 dark:text-teal-200 break-keep">
                      • {line}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
              {row.explanation}
            </p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
