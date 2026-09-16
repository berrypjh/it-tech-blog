import { Lightbulb, Table2 } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { RulesOfHooksContent } from '../content';

type Props = { content: RulesOfHooksContent['matching'] };

export const SlotMatchingDiff = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono">{row.slot}</code>,
    cells: [
      <code key="before" className="font-mono break-all">
        {row.before}
      </code>,
      <code key="after" className="font-mono break-all">
        {row.after}
      </code>,
      row.result,
    ],
  }));

  return (
    <section id="matching" aria-labelledby="heading-matching" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="matching"
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
        columnWidths={['12%', '24%', '24%', '40%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
