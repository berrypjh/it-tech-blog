import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { ReactVsReactDomContent } from '../content';
import { FileCodeIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['comparison']; sectionId?: string };

export const ReactDomComparisonTable = ({ content, sectionId }: Props) => {
  return (
    <section
      id={sectionId}
      aria-labelledby="heading-comparison"
      className="space-y-md scroll-mt-24"
    >
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      {/* 데스크톱: real table. 모바일: card-stacked variant */}
      <div
        className={cn(
          'overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <table className="hidden md:table w-full border-collapse text-xsm sm:text-sm">
          <caption className="sr-only">{content.title}</caption>
          <thead>
            <tr className="text-left">
              <th
                scope="col"
                className={cn(
                  'w-[18%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)] text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]',
                )}
              >
                {content.columnLabels.axis}
              </th>
              <th
                scope="col"
                className={cn(
                  'w-[41%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)]',
                  'text-[var(--term-accent)] text-sm font-bold font-mono tracking-tight',
                )}
              >
                {content.columnLabels.react}
              </th>
              <th
                scope="col"
                className={cn(
                  'w-[41%] px-md py-md border-b border-[var(--term-border)]',
                  'bg-[var(--term-surface)]',
                  'text-sky-600 dark:text-sky-300 text-sm font-bold font-mono tracking-tight',
                )}
              >
                {content.columnLabels.reactDom}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => {
              const isLast = idx === content.rows.length - 1;
              const rowBorder = isLast ? '' : 'border-b border-dashed border-[var(--term-border)]';
              return (
                <tr key={row.id} className="align-top">
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
                    <CellLines lines={row.reactValue} />
                  </td>
                  <td
                    className={cn(
                      'px-md py-md text-[var(--term-fg)] leading-relaxed break-keep',
                      rowBorder,
                    )}
                  >
                    <CellLines lines={row.reactDomValue} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Mobile: card stack */}
        <ul className="md:hidden divide-y divide-dashed divide-[var(--term-border)]">
          {content.rows.map((row) => (
            <li key={row.id} className="p-md flex flex-col gap-sm">
              <span className="text-[10px] uppercase tracking-wider font-bold text-[var(--term-muted)]">
                {row.label}
              </span>
              <div className="grid grid-cols-1 gap-2">
                <MobileCell
                  label={content.columnLabels.react}
                  lines={row.reactValue}
                  toneClass="bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]"
                />
                <MobileCell
                  label={content.columnLabels.reactDom}
                  lines={row.reactDomValue}
                  toneClass="bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

type CellLinesProps = { lines: string[] };

const CellLines = ({ lines }: CellLinesProps) => (
  <div className="flex flex-col gap-1 text-xsm sm:text-sm">
    {lines.map((line, i) => (
      <span key={i}>{line}</span>
    ))}
  </div>
);

type MobileCellProps = { label: string; lines: string[]; toneClass: string };

const MobileCell = ({ label, lines, toneClass }: MobileCellProps) => (
  <div className={cn('rounded-md border px-3 py-2 flex flex-col gap-1', toneClass)}>
    <span className="text-[10px] uppercase tracking-wider font-bold font-mono">{label}</span>
    {lines.map((line, i) => (
      <span key={i} className="text-xsm text-[var(--term-fg)] break-keep">
        {line}
      </span>
    ))}
  </div>
);
