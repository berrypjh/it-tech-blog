import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { RvrContent } from '../content';
import { rvrIcon } from '../icons';

type Props = { content: RvrContent['comparison'] };

export const ComparisonSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-comparison" className="space-y-md">
      <SectionHeader
        id="comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<rvrIcon.table className="h-5 w-5" />}
      />

      <ComparisonTable
        caption={content.title}
        headers={['항목', content.columns.reconciler, content.columns.renderer]}
        columnWidths={['20%', '40%', '40%']}
        rows={content.rows.map((row) => ({
          label: row.label,
          cells: [formatInline(row.reconciler), formatInline(row.renderer)],
        }))}
      />
    </section>
  );
};
