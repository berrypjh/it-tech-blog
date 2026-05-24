import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { SchedulerPackageContent } from '../content';
import { CpuIcon, PackageIcon, ScanSearchIcon } from '../icons';
import { pkgIconBox, pkgTextStrong } from '../packageAccent';

type Props = { content: SchedulerPackageContent['comparison'] };

const ColumnHeader = ({
  icon,
  title,
  accent,
}: {
  icon: React.ReactNode;
  title: string;
  accent: 'blue' | 'teal';
}) => (
  <div className="flex items-center gap-2">
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
        pkgIconBox[accent],
      )}
    >
      {icon}
    </span>
    <span
      className={cn('text-xsm sm:text-sm font-bold break-keep font-mono', pkgTextStrong[accent])}
    >
      {title}
    </span>
  </div>
);

export const RoleComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison">
    <NumberedSectionHeader
      id="comparison"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<ScanSearchIcon className="h-5 w-5" />}
    />

    {/* DESKTOP table */}
    <div
      className={cn(
        'hidden md:block overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-blue-50/70 dark:bg-blue-950/30">
            <th className="px-md py-3 text-[11px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:text-blue-200 w-[18%]">
              {content.columns.label}
            </th>
            <th className="px-md py-3 w-[41%]">
              <ColumnHeader
                icon={<CpuIcon className="h-4 w-4" />}
                title={content.columns.root}
                accent="blue"
              />
            </th>
            <th className="px-md py-3 w-[41%]">
              <ColumnHeader
                icon={<PackageIcon className="h-4 w-4" />}
                title={content.columns.scheduler}
                accent="teal"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {content.rows.map((row) => (
            <tr key={row.label} className="align-top">
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top bg-[var(--term-surface)]/40">
                <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {row.label}
                </span>
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep bg-blue-50/30 dark:bg-blue-950/15">
                {row.root}
              </td>
              <td className="border-t border-[var(--term-border)] px-md py-3 align-top text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep bg-teal-50/30 dark:bg-teal-950/15">
                {row.scheduler}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* MOBILE cards */}
    <ul className="md:hidden flex flex-col gap-3">
      {content.rows.map((row) => (
        <li key={row.label}>
          <article className="flex flex-col gap-3 rounded-2xl border-2 border-[var(--term-border)] bg-[var(--term-bg)] p-md shadow-[0_2px_0_var(--term-border)]">
            <p className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {row.label}
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-1 rounded-xl border border-blue-200/80 bg-blue-50/40 p-3 dark:border-blue-700/70 dark:bg-blue-950/20">
                <ColumnHeader
                  icon={<CpuIcon className="h-3.5 w-3.5" />}
                  title={content.columns.root}
                  accent="blue"
                />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.root}
                </p>
              </div>
              <div className="flex flex-col gap-1 rounded-xl border border-teal-200/80 bg-teal-50/40 p-3 dark:border-teal-700/70 dark:bg-teal-950/20">
                <ColumnHeader
                  icon={<PackageIcon className="h-3.5 w-3.5" />}
                  title={content.columns.scheduler}
                  accent="teal"
                />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {row.scheduler}
                </p>
              </div>
            </div>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
