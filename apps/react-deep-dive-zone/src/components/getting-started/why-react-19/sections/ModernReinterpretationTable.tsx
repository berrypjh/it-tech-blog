import { SectionHeader } from '../../../shared/SectionHeader';
import type { WhyReact19Content } from '../content';
import { ArrowLongRightIcon, ArrowRightIcon, RefreshIcon } from '../icons';

type Props = { content: WhyReact19Content['reinterpret'] };

const formatInline = (text: string): React.ReactNode => {
  const parts = text.split(/(`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={i}
          className="px-1 py-0.5 rounded border border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)] text-[0.9em] font-mono"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export const ModernReinterpretationTable = ({ content }: Props) => {
  return (
    <section id="section-reinterpret" aria-labelledby="heading-reinterpret" className="space-y-lg">
      <SectionHeader
        id="reinterpret"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RefreshIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {/* 데스크톱 테이블 */}
        <table className="hidden md:table w-full text-left">
          <thead>
            <tr className="bg-[var(--term-surface)] border-b border-[var(--term-border)]">
              <th
                scope="col"
                className="px-md py-3 w-[30%] text-xsm font-bold text-[var(--term-fg)]"
              >
                {content.headers.legacy}
              </th>
              <th
                scope="col"
                className="px-2 py-3 w-[40px] text-center text-[var(--term-dim)]"
                aria-hidden="true"
              >
                <ArrowLongRightIcon className="h-3 w-7 mx-auto" />
              </th>
              <th scope="col" className="px-md py-3 text-xsm font-bold text-[var(--term-accent)]">
                {content.headers.modern}
              </th>
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr
                key={idx}
                className="border-t border-[var(--term-border)] hover:bg-[var(--term-surface)] transition-colors"
              >
                <th scope="row" className="px-md py-4 align-top">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-dim)]"
                    />
                    <code className="text-xsm font-mono font-bold text-[var(--term-fg)] break-all">
                      {row.legacy}
                    </code>
                  </span>
                </th>
                <td
                  className="px-2 py-4 align-middle text-center text-[var(--term-accent)]"
                  aria-hidden="true"
                >
                  <ArrowRightIcon className="h-4 w-4 mx-auto" />
                </td>
                <td className="px-md py-4 align-top border-l border-[var(--term-border)]/60">
                  <div className="flex flex-col gap-1">
                    <p className="text-xsm sm:text-sm font-bold text-[var(--term-accent)] leading-snug break-keep">
                      {formatInline(row.modernTitle)}
                    </p>
                    <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                      {row.modernBody}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* 모바일 카드형 */}
        <ul className="md:hidden divide-y divide-[var(--term-border)]">
          {content.rows.map((row, idx) => (
            <li key={idx} className="p-md flex flex-col gap-sm">
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-dim)]"
                />
                <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
                  {content.headers.legacy}
                </span>
              </header>
              <code className="text-sm font-mono font-bold text-[var(--term-fg)] break-all">
                {row.legacy}
              </code>

              <span
                aria-hidden="true"
                className="self-start inline-flex items-center gap-1 text-[10px] font-bold text-[var(--term-accent)]"
              >
                <ArrowRightIcon className="h-3 w-3" />
                {content.headers.modern}
              </span>

              <div className="flex flex-col gap-1 pl-3 border-l-2 border-[var(--term-border)]">
                <p className="text-xsm font-bold text-[var(--term-accent)] leading-snug break-keep">
                  {formatInline(row.modernTitle)}
                </p>
                <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                  {row.modernBody}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
