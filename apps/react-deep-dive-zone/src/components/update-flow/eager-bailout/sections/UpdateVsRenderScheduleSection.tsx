import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { EagerBailoutContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: EagerBailoutContent['scheduleTable'] };

const toCell = (value: string, mono?: boolean) =>
  mono ? (
    <code className="font-mono text-xxsm break-all text-[var(--term-fg)]">{value}</code>
  ) : (
    <span>{value}</span>
  );

export const UpdateVsRenderScheduleSection = ({ content }: Props) => (
  <section id="section-schedule" aria-labelledby="heading-schedule" className="space-y-md">
    <SectionHeader
      id="schedule"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.label, content.headers.update, content.headers.schedule]}
      columnWidths={['18%', '41%', '41%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [toCell(row.updateValue, row.mono), toCell(row.scheduleValue, row.mono)],
      }))}
    />

    <div className="flex items-start gap-sm rounded-lg border border-[var(--term-border)] border-l-[3px] border-l-[var(--term-accent)] bg-[var(--term-surface)] p-md">
      <SparklesIcon
        aria-hidden="true"
        className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
      />
      <p className="text-xsm sm:text-sm font-semibold leading-relaxed text-[var(--term-fg)] break-keep">
        {content.bottomNote}
      </p>
    </div>
  </section>
);
