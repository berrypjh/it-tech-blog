import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { DvcContent } from '../content';
import { ScaleIcon } from '../icons';

type Props = { content: DvcContent['table'] };

export const ComparisonTableSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-table" className="space-y-md scroll-mt-2xl">
      <SectionHeader
        id="table"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ScaleIcon className="h-5 w-5" />}
      />

      <ComparisonTable
        caption={content.title}
        headers={[content.headers.item, content.headers.common, content.headers.domSpecific]}
        columnWidths={['20%', '40%', '40%']}
        rows={content.rows.map((row) => ({
          label: row.label,
          cells: [formatInline(row.common), formatInline(row.domSpecific)],
        }))}
      />
    </section>
  );
};
