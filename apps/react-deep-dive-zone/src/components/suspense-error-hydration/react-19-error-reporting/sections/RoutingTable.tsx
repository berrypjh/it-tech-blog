import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19ErrorReportingContent } from '../content';

type Props = { content: React19ErrorReportingContent['routing'] };

export const RoutingTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: row.scenario,
    cells: [
      <code key="cb" className="font-mono break-all">
        {row.callback}
      </code>,
      row.ui,
    ],
  }));

  return (
    <section id="routing" aria-labelledby="heading-routing" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="routing"
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
        columnWidths={['32%', '24%', '44%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
