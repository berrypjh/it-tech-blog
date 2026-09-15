import { Table } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { RvrContent } from '../content';

type Props = { content: RvrContent['comparison'] };

export const ComparisonSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-comparison" className="space-y-md">
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Table className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        caption={content.title}
        headers={[content.columns.item, content.columns.reconciler, content.columns.renderer]}
        columnWidths={['20%', '40%', '40%']}
        rows={content.rows.map((row) => ({
          label: row.label,
          cells: [formatInline(row.reconciler), formatInline(row.renderer)],
        }))}
      />
    </section>
  );
};
