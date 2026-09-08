import { FunctionSquare } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { UsageVsInternalsContent } from '../content';

type Props = { content: UsageVsInternalsContent['table'] };

export const InterpretationTable = ({ content }: Props) => (
  <section id="section-table" aria-labelledby="heading-table" className="space-y-lg">
    <SectionHeader
      id="table"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FunctionSquare className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.phenomenon, content.headers.usage, content.headers.internal]}
      columnWidths={['20%', '40%', '40%']}
      rows={content.rows.map((row) => ({
        label: row.phenomenon,
        cells: [formatInline(row.usage), formatInline(row.internal)],
      }))}
    />
  </section>
);
