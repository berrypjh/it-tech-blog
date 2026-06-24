import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ChangelogContent } from '../content';
import { BookOpenIcon, TagIcon } from '../icons';

type Props = { content: ChangelogContent['comparison'] };

export const ChangelogReleasesComparisonTable = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-comparison" className="space-y-md">
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<BookOpenIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {/* Desktop table */}
        <table className="hidden md:table w-full border-collapse text-xsm sm:text-sm">
          <caption className="sr-only">{content.title}</caption>
          <thead>
            <tr className="text-left">
              <th
                scope="col"
                className={cn(
                  'w-[20%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)] text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]',
                )}
              >
                {content.columnLabel}
              </th>
              <th
                scope="col"
                className={cn(
                  'w-[40%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)]',
                  'text-[var(--term-accent)] text-sm font-bold font-mono tracking-tight',
                )}
              >
                <span className="inline-flex items-center gap-1.5">
                  <BookOpenIcon className="h-4 w-4" aria-hidden="true" />
                  {content.changelogLabel}
                </span>
              </th>
              <th
                scope="col"
                className={cn(
                  'w-[40%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)]',
                  toneTokens.sky.text,
                  'text-sm font-bold font-mono tracking-tight',
                )}
              >
                <span className="inline-flex items-center gap-1.5">
                  <TagIcon className="h-4 w-4" aria-hidden="true" />
                  {content.releasesLabel}
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => {
              const isLast = idx === content.rows.length - 1;
              const rowBorder = isLast ? '' : 'border-b border-dashed border-[var(--term-border)]';
              return (
                <tr key={row.label} className="align-top hover:bg-[var(--term-surface)]/60">
                  <th
                    scope="row"
                    className={cn(
                      'px-md py-md text-left bg-[var(--term-surface)]',
                      'text-xsm font-bold text-[var(--term-fg)] break-keep',
                      rowBorder,
                    )}
                  >
                    {row.label}
                  </th>
                  <td
                    className={cn(
                      'px-md py-md text-[var(--term-fg)] leading-relaxed break-keep',
                      rowBorder,
                    )}
                  >
                    {row.changelog}
                  </td>
                  <td
                    className={cn(
                      'px-md py-md text-[var(--term-fg)] leading-relaxed break-keep',
                      rowBorder,
                    )}
                  >
                    {row.releases}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Mobile card stack */}
        <ul className="md:hidden divide-y divide-dashed divide-[var(--term-border)]">
          {content.rows.map((row) => (
            <li key={row.label} className="p-md flex flex-col gap-sm">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
                {row.label}
              </span>
              <div className="grid grid-cols-1 gap-2">
                <MobileCell
                  label={content.changelogLabel}
                  icon={<BookOpenIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                  text={row.changelog}
                  toneClass="bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]"
                />
                <MobileCell
                  label={content.releasesLabel}
                  icon={<TagIcon className="h-3.5 w-3.5" aria-hidden="true" />}
                  text={row.releases}
                  toneClass={cn(
                    'bg-[var(--term-surface)] border-[var(--term-border)]',
                    toneTokens.sky.text,
                  )}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

type MobileCellProps = {
  label: string;
  icon: React.ReactNode;
  text: string;
  toneClass: string;
};

const MobileCell = ({ label, icon, text, toneClass }: MobileCellProps) => (
  <div className={cn('rounded-md border px-3 py-2 flex flex-col gap-1', toneClass)}>
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold font-mono">
      {icon}
      {label}
    </span>
    <span className="text-xsm text-[var(--term-fg)] leading-relaxed break-keep">{text}</span>
  </div>
);
