import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { UpdateToLaneContent } from '../content';

type Props = { content: UpdateToLaneContent['results'] };

export const SameCallResults = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: row.context,
    cells: [
      <code key="code" className="font-mono break-all">
        {row.code}
      </code>,
      <code key="lane" className="font-mono break-all">
        {row.lane}
      </code>,
      row.why,
    ],
  }));

  return (
    <section id="results" aria-labelledby="heading-results" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="results"
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
        columnWidths={['16%', '28%', '20%', '36%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
