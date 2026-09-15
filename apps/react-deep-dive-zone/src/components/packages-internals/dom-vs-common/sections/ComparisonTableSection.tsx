import { Scale } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { DvcContent } from '../content';

type Props = { content: DvcContent['table'] };

export const ComparisonTableSection = ({ content }: Props) => {
  return (
    <section id="table" aria-labelledby="heading-table" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="table"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Scale className="h-5 w-5" aria-hidden="true" />}
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
