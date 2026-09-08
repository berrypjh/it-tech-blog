import { Table } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { JsxIsNotHtmlContent } from '../content';

type Props = { content: JsxIsNotHtmlContent['comparison'] };

export const JsxHtmlComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Table className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.columns.label, content.columns.jsx, content.columns.html]}
      columnWidths={['20%', '40%', '40%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [formatInline(row.jsx), formatInline(row.html)],
      }))}
    />
  </section>
);
