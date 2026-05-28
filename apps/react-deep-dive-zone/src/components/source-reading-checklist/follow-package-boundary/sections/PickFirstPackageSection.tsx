import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FollowPackageBoundaryContent } from '../content';
import { CompassIcon, FileCodeIcon } from '../icons';
import { PackageBadge } from '../PackageBadge';

type Props = { content: FollowPackageBoundaryContent['pickFirst'] };

export const PickFirstPackageSection = ({ content }: Props) => {
  return (
    <section
      id="section-pick-first"
      aria-labelledby="heading-pick-first"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="pick-first"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<CompassIcon className="h-5 w-5" />}
      />

      {/* Desktop table card */}
      <div
        className={cn(
          'hidden lg:block rounded-2xl border-2 overflow-hidden',
          'border-slate-200 dark:border-slate-700',
          'bg-white dark:bg-[var(--term-bg)]',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
      >
        <table className="w-full text-sm">
          <thead
            className={cn(
              'border-b-2 border-slate-200 dark:border-slate-700',
              'bg-slate-50/80 dark:bg-slate-900/40',
            )}
          >
            <tr>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.questionLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.pickedLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.fileLabel}
              </th>
              <th
                scope="col"
                className="text-left px-md py-3 text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
              >
                {content.reasonLabel}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, i) => (
              <tr
                key={row.question}
                className={cn(
                  i !== 0 && 'border-t border-slate-200 dark:border-slate-800',
                  'transition-colors motion-safe:hover:bg-blue-50/40 dark:motion-safe:hover:bg-blue-950/20',
                )}
              >
                <td className="px-md py-3 align-top">
                  <p className="text-xsm font-bold text-[var(--term-fg)] break-keep max-w-[34ch]">
                    {row.question}
                  </p>
                </td>
                <td className="px-md py-3 align-top">
                  <PackageBadge packageKey={row.pickedPackage} size="md" strong>
                    {row.pickedPackage}
                  </PackageBadge>
                </td>
                <td className="px-md py-3 align-top">
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md border px-2 py-1',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-[11px] text-[var(--term-fg)]',
                    )}
                  >
                    <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                    {row.file}
                  </code>
                </td>
                <td className="px-md py-3 align-top">
                  <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {row.reason}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile / tablet card list */}
      <ul className="lg:hidden flex flex-col gap-md">
        {content.rows.map((row) => (
          <li key={row.question}>
            <article
              className={cn(
                'rounded-xl border-2 p-md',
                'border-slate-200 dark:border-slate-700',
                'bg-white dark:bg-[var(--term-bg)]',
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <p className="text-xsm font-bold text-[var(--term-fg)] break-keep mb-sm">
                {row.question}
              </p>

              <dl className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-3 gap-y-2 text-xsm">
                <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                  {content.pickedLabel}
                </dt>
                <dd>
                  <PackageBadge packageKey={row.pickedPackage} size="md" strong>
                    {row.pickedPackage}
                  </PackageBadge>
                </dd>

                <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                  {content.fileLabel}
                </dt>
                <dd>
                  <code
                    className={cn(
                      'inline-flex items-center gap-1.5 rounded-md border px-2 py-1',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-[11px] text-[var(--term-fg)]',
                    )}
                  >
                    <FileCodeIcon className="h-3 w-3" aria-hidden="true" />
                    {row.file}
                  </code>
                </dd>

                <dt className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)] mt-1">
                  {content.reasonLabel}
                </dt>
                <dd className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {row.reason}
                </dd>
              </dl>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
