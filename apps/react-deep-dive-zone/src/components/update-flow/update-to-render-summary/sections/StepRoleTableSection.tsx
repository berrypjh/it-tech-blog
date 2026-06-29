import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import type { UpdateToRenderSummaryContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: UpdateToRenderSummaryContent['roleTable'] };

export const StepRoleTableSection = ({ content }: Props) => (
  <section id="section-role-table" aria-labelledby="heading-role-table" className="space-y-md">
    <SectionHeader
      id="role-table"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[
        content.columns.order,
        content.columns.fn,
        content.columns.role,
        content.columns.point,
      ]}
      columnWidths={['8%', '28%', '28%', '36%']}
      rows={content.rows.map((row) => ({
        label: row.order,
        cells: [
          <code
            key="fn"
            className="inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold text-[var(--term-fg)] break-all"
          >
            {row.fn}
          </code>,
          <span key="role" className="font-medium text-[var(--term-fg)]">
            {row.role}
          </span>,
          row.point,
        ],
      }))}
    />
  </section>
);
