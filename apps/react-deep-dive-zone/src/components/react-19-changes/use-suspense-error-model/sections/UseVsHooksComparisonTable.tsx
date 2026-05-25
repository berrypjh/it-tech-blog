import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { CheckCircleIcon, XCircleIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['comparison'] };

export const UseVsHooksComparisonTable = ({ content }: Props) => (
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
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.legacy}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.useApi}
              </th>
              <th scope="col" className="px-md py-3 break-keep">
                {content.columns.note}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={row.topic}
                className={cn(
                  'border-t border-slate-200 dark:border-slate-700',
                  'transition-colors hover:bg-blue-50/40 dark:hover:bg-blue-950/20',
                  i % 2 === 1 && 'bg-slate-50/40 dark:bg-slate-900/30',
                )}
              >
                <th scope="row" className="px-md py-4 align-top">
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {row.topic}
                  </span>
                </th>
                <td className="px-md py-4 align-top">
                  <SupportTag value={row.legacy.value} supported={row.legacy.supported} />
                </td>
                <td className="px-md py-4 align-top">
                  <SupportTag value={row.useResult.value} supported={row.useResult.supported} />
                </td>
                <td className="px-md py-4 align-top text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {row.note}
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
              <MobileCell label={content.columns.legacy}>
                <SupportTag value={row.legacy.value} supported={row.legacy.supported} />
              </MobileCell>
              <MobileCell label={content.columns.useApi}>
                <SupportTag value={row.useResult.value} supported={row.useResult.supported} />
              </MobileCell>
            </div>
            <div>
              <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1">
                {content.columns.note}
              </p>
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {row.note}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

const SupportTag = ({ value, supported }: { value: string; supported: boolean }) => (
  <span
    className={cn(
      'inline-flex items-center gap-1.5 rounded-lg border px-2 py-1',
      'font-mono text-xsm font-bold',
      supported
        ? 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/70'
        : 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-800/70',
    )}
  >
    {supported ? (
      <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
    ) : (
      <XCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
    )}
    <span className="break-keep">{value}</span>
  </span>
);

const MobileCell = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div>
    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)] mb-1">
      {label}
    </p>
    {children}
  </div>
);
