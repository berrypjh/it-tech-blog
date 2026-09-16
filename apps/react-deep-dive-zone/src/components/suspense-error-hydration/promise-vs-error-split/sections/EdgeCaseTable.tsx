import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { PromiseVsErrorSplitContent } from '../content';

type Props = { content: PromiseVsErrorSplitContent['cases'] };

export const EdgeCaseTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono break-all">{row.thrown}</code>,
    cells: [row.branch, row.why],
  }));

  return (
    <section id="cases" aria-labelledby="heading-cases" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="cases"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Table2 className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        headers={content.headers}
        rows={rows}
        caption={content.title}
        columnWidths={['26%', '22%', '52%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
