import { FileCode, Lightbulb } from 'lucide-react';

import { type ComparisonRow, ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { SchedulerOverallFlowContent } from '../content';

type Props = { content: SchedulerOverallFlowContent['files'] };

export const FileMapTable = ({ content }: Props) => {
  const rows: ComparisonRow[] = content.rows.map((row) => ({
    label: <code className="font-mono break-all">{row.file}</code>,
    cells: [
      row.owns,
      <code key="fn" className="font-mono break-all">
        {row.functions}
      </code>,
    ],
  }));

  return (
    <section id="files" aria-labelledby="heading-files" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        descriptionFullWidth
        id="files"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<FileCode className="h-5 w-5" aria-hidden="true" />}
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
