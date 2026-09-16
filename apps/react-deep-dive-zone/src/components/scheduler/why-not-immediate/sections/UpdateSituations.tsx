import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { WhyNotImmediateContent } from '../content';

type Props = { content: WhyNotImmediateContent['situations'] };

export const UpdateSituations = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: row.situation,
    cells: [row.example, row.handling, row.goal],
  }));

  return (
    <section
      id="situations"
      aria-labelledby="heading-situations"
      className="space-y-md scroll-mt-xl"
    >
      <SectionBadgeHeader
        descriptionFullWidth
        id="situations"
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
        columnWidths={['18%', '26%', '28%', '28%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
