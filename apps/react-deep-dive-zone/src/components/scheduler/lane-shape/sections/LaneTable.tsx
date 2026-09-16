import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { LaneShapeContent } from '../content';

type Props = { content: LaneShapeContent['lanes'] };

export const LaneTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono break-all">{row.name}</code>,
    cells: [
      <code key="bits" className="font-mono break-all">
        {row.bits}
      </code>,
      row.meaning,
    ],
  }));

  return (
    <section id="lanes" aria-labelledby="heading-lanes" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="lanes"
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
        columnWidths={['24%', '20%', '56%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
