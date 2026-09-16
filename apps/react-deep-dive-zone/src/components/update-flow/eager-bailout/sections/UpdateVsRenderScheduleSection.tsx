import { Lightbulb, Table } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { EagerBailoutContent } from '../content';

type Props = { content: EagerBailoutContent['scheduleTable'] };

const toCell = (value: string, mono?: boolean) =>
  mono ? (
    <code className="font-mono text-xxsm break-all text-[var(--term-fg)]">{value}</code>
  ) : (
    <span>{value}</span>
  );

export const UpdateVsRenderScheduleSection = ({ content }: Props) => (
  <section id="schedule" aria-labelledby="heading-schedule" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="schedule"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Table className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.label, content.headers.update, content.headers.schedule]}
      columnWidths={['18%', '41%', '41%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [toCell(row.updateValue, row.mono), toCell(row.scheduleValue, row.mono)],
      }))}
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" />}>{content.note}</SectionNote>
  </section>
);
