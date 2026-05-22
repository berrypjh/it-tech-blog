import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { FiberStoredInformationContent } from '../content';
import { ArrowRightIcon, LightbulbIcon, TagIcon } from '../icons';

type Props = { content: FiberStoredInformationContent['mapping'] };

export const ElementFiberMappingTable = ({ content }: Props) => (
  <section id="mapping" aria-labelledby="heading-mapping" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="mapping"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ArrowRightIcon className="h-5 w-5" />}
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
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-emerald-50 text-emerald-800',
                  'dark:bg-emerald-950/40 dark:text-emerald-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                  />
                  {content.headers.element}
                </span>
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-[10px] uppercase tracking-wider font-bold',
                  'text-[var(--term-muted)] bg-[var(--term-surface)]',
                )}
              >
                {content.headers.description}
              </th>
              <th
                scope="col"
                className={cn(
                  'px-md py-3 text-xsm font-bold tracking-tight',
                  'bg-violet-50 text-violet-800',
                  'dark:bg-violet-950/40 dark:text-violet-100',
                )}
              >
                <span className="inline-flex items-center gap-1.5 font-mono">
                  <span
                    aria-hidden="true"
                    className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
                  />
                  {content.headers.fiber}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={row.id}
                className={cn(
                  'align-middle',
                  idx > 0 && 'border-t border-dashed border-[var(--term-border)]',
                )}
              >
                <td className={cn('px-md py-3 bg-emerald-50/30 dark:bg-emerald-950/15')}>
                  <code className="font-mono text-xsm font-bold text-emerald-800 dark:text-emerald-200 break-all">
                    {row.element}
                  </code>
                </td>
                <td className="px-md py-3 text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.description}
                </td>
                <td className={cn('px-md py-3 bg-violet-50/30 dark:bg-violet-950/15')}>
                  <div className="flex items-center gap-2">
                    <ArrowRightIcon
                      className="h-3.5 w-3.5 text-sky-600 dark:text-sky-300 shrink-0"
                      aria-hidden="true"
                    />
                    <code className="font-mono text-xsm font-bold text-violet-800 dark:text-violet-200 break-all">
                      {row.fiber}
                    </code>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    <div
      className={cn(
        'flex items-center gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'border-sky-300/70 bg-sky-50/70',
        'dark:border-sky-700/70 dark:bg-sky-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
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
      <p className="text-sm sm:text-md font-extrabold leading-snug text-sky-900 dark:text-sky-100 break-keep">
        {content.note}
      </p>
      <TagIcon
        className="hidden sm:block ml-auto h-6 w-6 text-sky-300 dark:text-sky-700 shrink-0"
        aria-hidden="true"
      />
    </div>
  </section>
);
