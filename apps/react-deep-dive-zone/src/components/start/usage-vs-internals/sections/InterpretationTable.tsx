import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../components/StepSectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['table'] };

export const InterpretationTable = ({ content }: Props) => {
  return (
    <section id="section-table" aria-labelledby="heading-table" className="space-y-lg">
      <StepSectionHeader id="table" num={content.sectionNum} title={content.title} />

      {/* 데스크톱: 테이블 / 모바일: 카드형 */}
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden">
        {/* 데스크톱 테이블 */}
        <table className="hidden md:table w-full text-left">
          <thead>
            <tr className="bg-sky-50/60 dark:bg-sky-950/30 border-b border-[var(--term-border)]">
              {[content.headers.phenomenon, content.headers.usage, content.headers.internal].map(
                (h, i) => (
                  <th
                    key={i}
                    scope="col"
                    className={cn(
                      'px-md py-3 text-xsm font-bold text-[var(--term-fg)]',
                      i === 0 && 'w-[20%]',
                      i === 1 && 'w-[40%]',
                      i === 2 && 'w-[40%]',
                    )}
                  >
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={idx}
                className={cn(
                  'border-t border-[var(--term-border)] hover:bg-[var(--term-surface)] transition-colors',
                )}
              >
                <th
                  scope="row"
                  className="px-md py-3 align-top text-xsm font-bold text-[var(--term-fg)]"
                >
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"
                    />
                    {row.phenomenon}
                  </span>
                </th>
                <td className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-muted)] border-l border-[var(--term-border)]/60">
                  {formatInline(row.usage)}
                </td>
                <td className="px-md py-3 align-top text-xsm leading-relaxed text-[var(--term-muted)] border-l border-[var(--term-border)]/60">
                  {formatInline(row.internal)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 모바일 카드형 */}
        <ul className="md:hidden divide-y divide-[var(--term-border)]">
          {content.rows.map((row, idx) => (
            <li key={idx} className="p-md flex flex-col gap-sm">
              <header className="flex items-center gap-1.5">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500"
                />
                <span className="text-xxsm uppercase tracking-wider text-[var(--term-dim)]">
                  {content.headers.phenomenon}
                </span>
              </header>
              <p className="text-sm font-bold text-[var(--term-fg)]">{row.phenomenon}</p>

              <dl className="flex flex-col gap-sm">
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase tracking-wider text-teal-600 dark:text-teal-300 font-bold">
                    {content.headers.usage}
                  </dt>
                  <dd className="text-xsm leading-relaxed text-[var(--term-muted)]">
                    {formatInline(row.usage)}
                  </dd>
                </div>
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold">
                    {content.headers.internal}
                  </dt>
                  <dd className="text-xsm leading-relaxed text-[var(--term-muted)]">
                    {formatInline(row.internal)}
                  </dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
