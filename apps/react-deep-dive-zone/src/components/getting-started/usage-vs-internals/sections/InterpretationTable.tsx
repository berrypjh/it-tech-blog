import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { UsageVsInternalsContent } from '../content';
import { FxIcon } from '../icons';
import { formatInline } from '../utils/inlineCode';

type Props = { content: UsageVsInternalsContent['table'] };

export const InterpretationTable = ({ content }: Props) => (
  <section id="section-table" aria-labelledby="heading-table" className="space-y-lg">
    <SectionHeader
      id="table"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FxIcon className="h-5 w-5" />}
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
