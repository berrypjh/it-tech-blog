import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HydrationStartContent } from '../content';

type Props = { content: HydrationStartContent['states'] };

export const ModuleStateTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono break-all">{row.name}</code>,
    cells: [row.meaning, row.effect],
  }));

  return (
    <section id="states" aria-labelledby="heading-states" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="states"
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
        columnWidths={['28%', '26%', '46%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
