import { GitCompare, Lightbulb } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { SchedulerOverallFlowContent } from '../content';

type Props = { content: SchedulerOverallFlowContent['scenarios'] };

export const ScenarioTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: row.scenario,
    cells: [
      <code key="lane" className="font-mono break-all">
        {row.lane}
      </code>,
      row.path,
      row.yielding,
    ],
  }));

  return (
    <section id="scenarios" aria-labelledby="heading-scenarios" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="scenarios"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<GitCompare className="h-5 w-5" aria-hidden="true" />}
      />

      <ComparisonTable
        headers={content.headers}
        rows={rows}
        caption={content.title}
        columnWidths={['26%', '20%', '28%', '26%']}
      />

      <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
    </section>
  );
};
