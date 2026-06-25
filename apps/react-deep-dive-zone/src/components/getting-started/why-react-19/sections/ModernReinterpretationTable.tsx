import { MappingRowCard } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { WhyReact19Content } from '../content';
import { ArrowDownIcon, ArrowRightIcon, RefreshIcon } from '../icons';

type Props = { content: WhyReact19Content['reinterpret'] };

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
            <MappingRowCard
              columns="md:grid-cols-[minmax(0,0.9fr)_auto_minmax(0,1.5fr)]"
              arrow={
                <>
                  <ArrowRightIcon className="h-4 w-4 hidden md:block" />
                  <ArrowDownIcon className="h-4 w-4 md:hidden" />
                </>
              }
              left={
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
                    {content.headers.legacy}
                  </span>
                  <code className="inline-flex w-fit items-center px-2 py-1 rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] text-xsm sm:text-sm font-mono font-bold text-[var(--term-muted)] break-all">
                    {row.legacy}
                  </code>
                </div>
              }
              right={
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
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
