import { Lightbulb, Puzzle } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ActionsUpdateFlowContent } from '../content';

type Props = { content: ActionsUpdateFlowContent['hooks'] };

export const ThreeHooksTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono break-all">{row.hook}</code>,
    cells: [
      row.role,
      <code key="returns" className="font-mono break-all">
        {row.returns}
      </code>,
    ],
  }));

  return (
    <section id="hooks" aria-labelledby="heading-hooks" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="hooks"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<Puzzle className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        headers={content.headers}
        rows={rows}
        caption={content.title}
        columnWidths={['24%', '44%', '32%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
