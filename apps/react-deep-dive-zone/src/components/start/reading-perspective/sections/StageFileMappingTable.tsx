import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { ReadingPerspectiveContent } from '../content';
import { FileIcon } from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['mapping'] };

export const StageFileMappingTable = ({ content }: Props) => {
  return (
    <section id="section-mapping" aria-labelledby="heading-mapping" className="space-y-lg">
      <SectionHeader
        id="mapping"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {/* 데스크톱 테이블 */}
        <table className="hidden md:table w-full text-left">
          <thead>
            <tr className="bg-sky-50/70 dark:bg-sky-950/30 border-b border-[var(--term-border)]">
              <th
                scope="col"
                className="px-md py-3 w-[28%] text-xsm font-bold text-[var(--term-fg)]"
              >
                {content.headers.stage}
              </th>
              <th
                scope="col"
                className="px-md py-3 w-[32%] text-xsm font-bold text-[var(--term-fg)]"
              >
                <span className="inline-flex items-center gap-1.5">
                  <FileIcon className="h-3 w-3 text-[var(--term-dim)]" />
                  {content.headers.file}
                </span>
              </th>
              <th scope="col" className="px-md py-3 text-xsm font-bold text-[var(--term-fg)]">
                {content.headers.role}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row) => {
              const t = stageTones[row.tone];
              return (
                <tr
                  key={row.id}
                  className="border-t border-[var(--term-border)] hover:bg-[var(--term-surface)] transition-colors"
                >
                  <th scope="row" className="px-md py-4 align-top">
                    <div className="flex items-center gap-sm">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex items-center justify-center w-7 h-7 rounded-md text-xsm font-bold tabular-nums shrink-0',
                          t.num,
                        )}
                      >
                        {row.num}
                      </span>
                      <span className={cn('text-xsm font-bold tracking-tight', t.text)}>
                        {row.stage}
                      </span>
                    </div>
                  </th>
                  <td className="px-md py-4 align-top border-l border-[var(--term-border)]/60">
                    <ul className="flex flex-col gap-1">
                      {row.files.map((f) => (
                        <li key={f}>
                          <code className="inline-flex items-center gap-1.5 px-2 py-1 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[11px] font-mono font-bold text-[var(--term-fg)] break-all">
                            <FileIcon className="h-2.5 w-2.5 text-[var(--term-muted)] shrink-0" />
                            {f}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-md py-4 align-top border-l border-[var(--term-border)]/60">
                    <p className="text-xsm sm:text-sm text-[var(--term-fg)] leading-snug break-keep">
                      {row.roleTitle}
                    </p>
                    {row.roleHint && (
                      <p className="mt-1 text-[11px] font-mono text-[var(--term-accent)]">
                        {row.roleHint}
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* 모바일 카드형 */}
        <ul className="md:hidden divide-y divide-[var(--term-border)]">
          {content.rows.map((row) => {
            const t = stageTones[row.tone];
            return (
              <li key={row.id} className="p-md flex flex-col gap-sm">
                <header className="flex items-center gap-sm">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex items-center justify-center w-8 h-8 rounded-md text-sm font-bold tabular-nums',
                      t.num,
                    )}
                  >
                    {row.num}
                  </span>
                  <h3 className={cn('text-sm font-bold tracking-tight', t.text)}>{row.stage}</h3>
                </header>

                <div className="pl-1 flex flex-col gap-sm">
                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)] inline-flex items-center gap-1">
                      <FileIcon className="h-3 w-3" />
                      {content.headers.file}
                    </span>
                    <ul className="flex flex-wrap gap-1">
                      {row.files.map((f) => (
                        <li key={f}>
                          <code className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-mono font-bold text-[var(--term-fg)] break-all">
                            <FileIcon className="h-2.5 w-2.5 text-[var(--term-muted)]" />
                            {f}
                          </code>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
                      {content.headers.role}
                    </span>
                    <p className="text-xsm text-[var(--term-fg)] leading-snug break-keep">
                      {row.roleTitle}
                    </p>
                    {row.roleHint && (
                      <p className="text-[11px] font-mono text-[var(--term-accent)]">
                        {row.roleHint}
                      </p>
                    )}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
