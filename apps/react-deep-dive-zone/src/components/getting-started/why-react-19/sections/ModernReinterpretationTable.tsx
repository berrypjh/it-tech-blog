import { SectionHeader } from '../../../shared/section';
import type { WhyReact19Content } from '../content';
import { ArrowDownIcon, ArrowRightIcon, RefreshIcon } from '../icons';

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

      <ul className="flex flex-col gap-md">
        {content.rows.map((row, idx) => (
          <li key={idx}>
            <article className="group rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)] hover:border-[var(--term-accent)]">
              <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.5fr)] gap-sm md:gap-md items-center">
                {/* 과거에는 */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-dim)]">
                    {content.headers.legacy}
                  </span>
                  <code className="inline-flex w-fit items-center px-2 py-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-xsm sm:text-sm font-mono font-bold text-[var(--term-muted)] break-all">
                    {row.legacy}
                  </code>
                </div>

                {/* 전환 화살표 (md+ 오른쪽 · 모바일 아래) */}
                <span
                  aria-hidden="true"
                  className="justify-self-start md:justify-self-center inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-4 w-4 hidden md:block" />
                  <ArrowDownIcon className="h-4 w-4 md:hidden" />
                </span>

                {/* 지금은 */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-accent)]">
                    {content.headers.modern}
                  </span>
                  <p className="text-xsm sm:text-sm font-bold text-[var(--term-accent)] leading-snug break-keep">
                    {formatInline(row.modernTitle)}
                  </p>
                  <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep">
                    {row.modernBody}
                  </p>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
