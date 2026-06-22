import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CreateFiberFromElementContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BugIcon } from '../icons';

type Props = { content: CreateFiberFromElementContent['devInfo'] };

export const DevModeDebugInfo = ({ content }: Props) => (
  <section id="dev-info" aria-labelledby="heading-dev-info" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="dev-info"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<BugIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex flex-col gap-md">
        {/* Top description + DEV pill */}
        <div className="flex flex-col sm:flex-row gap-sm sm:items-center sm:justify-between">
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep max-w-[60ch]">
            {content.description}
          </p>
          <span
            className={cn(
              'inline-flex w-fit items-center gap-1.5 rounded-full border px-3 py-1 shrink-0',
              'text-[10px] font-bold uppercase tracking-wider font-mono',
              'border-amber-300/80 bg-amber-50 text-amber-800',
              'dark:border-amber-700/70 dark:bg-amber-950/60 dark:text-amber-200',
            )}
          >
            <BugIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.devPill}
          </span>
        </div>

        {/* Table */}
        <div
          className={cn(
            'rounded-2xl border bg-[var(--term-bg)] overflow-hidden',
            'border-[var(--term-border)]',
          )}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <caption className="sr-only">
                DEV 모드의 Element 필드와 Fiber로 전달되는 필드 매핑
              </caption>
              <thead>
                <tr>
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
                      {content.tableHeader.element}
                    </span>
                  </th>
                  <th
                    scope="col"
                    className={cn(
                      'px-md py-3 text-xsm font-bold tracking-tight',
                      'bg-teal-50 text-teal-800',
                      'dark:bg-teal-950/40 dark:text-teal-100',
                    )}
                  >
                    <span className="inline-flex items-center gap-1.5 font-mono">
                      <span
                        aria-hidden="true"
                        className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500 dark:bg-teal-400"
                      />
                      {content.tableHeader.fiber}
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {content.rows.map((row, idx) => (
                  <tr
                    key={row.id}
                    className={cn(idx > 0 && 'border-t border-dashed border-[var(--term-border)]')}
                  >
                    <td className="px-md py-3 text-xsm bg-sky-50/30 dark:bg-sky-950/15">
                      <code className="font-mono font-bold text-sky-800 dark:text-sky-200 break-all">
                        {row.element}
                      </code>
                    </td>
                    <td className="px-md py-3 text-xsm bg-teal-50/30 dark:bg-teal-950/15">
                      <code className="font-mono font-bold text-teal-800 dark:text-teal-200 break-all">
                        {row.fiber}
                      </code>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* DebugStack mapping visualization */}
        <div className="flex flex-col gap-sm">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)] font-bold">
            example
          </span>
          <p className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.mappingTitle}
          </p>
          <div
            className={cn(
              'grid items-stretch min-w-0',
              'grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
              'gap-sm',
            )}
          >
            <DebugCard
              variant="element"
              label={content.mappingLeftLabel}
              code={content.mappingLeftCode}
            />
            <div
              aria-hidden="true"
              className="flex items-center justify-center text-violet-600 dark:text-violet-300"
            >
              <span className="contents">
                <ArrowDownIcon className="h-5 w-5 sm:hidden" />
                <ArrowRightIcon className="h-5 w-5 hidden sm:block" />
              </span>
            </div>
            <DebugCard
              variant="fiber"
              label={content.mappingRightLabel}
              code={content.mappingRightCode}
            />
          </div>
        </div>

        <p className="text-[11px] text-[var(--term-muted)] italic text-right break-keep">
          {content.footnote}
        </p>
      </div>
    </article>
  </section>
);

const DebugCard = ({
  variant,
  label,
  code,
}: {
  variant: 'element' | 'fiber';
  label: string;
  code: string;
}) => (
  <article
    className={cn(
      'flex flex-col gap-1.5 rounded-xl border p-sm',
      variant === 'element'
        ? 'border-sky-200/80 bg-sky-50/60 dark:border-sky-800/60 dark:bg-sky-950/30'
        : 'border-teal-200/80 bg-teal-50/60 dark:border-teal-800/60 dark:bg-teal-950/30',
    )}
  >
    <code
      className={cn(
        'font-mono text-[11px] font-bold',
        variant === 'element'
          ? 'text-sky-700 dark:text-sky-300'
          : 'text-teal-700 dark:text-teal-300',
      )}
    >
      {label}
    </code>
    <pre
      className={cn(
        'rounded-md border border-slate-800 bg-slate-950',
        'px-sm py-2 font-mono text-[11px] leading-relaxed text-slate-100',
        'overflow-x-auto',
      )}
    >
      <code>{code}</code>
    </pre>
  </article>
);
