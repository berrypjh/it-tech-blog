import { Lightbulb, Route } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { React19ChangeMapContent } from '../content';

type Props = { content: React19ChangeMapContent['bridgeMap'] };

export const PreviousChapterMap = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: row.question,
    cells: [
      <code key="feature" className="font-mono break-all">
        {row.feature}
      </code>,
      row.reading,
    ],
  }));

  return (
    <section id="bridge" aria-labelledby="heading-bridge" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="bridge"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Route className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        headers={content.headers}
        rows={rows}
        caption={content.title}
        columnWidths={['30%', '20%', '50%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
