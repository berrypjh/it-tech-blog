import { Layers, Lightbulb } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { CurrentWipAlternateContent } from '../content';

type Props = { content: CurrentWipAlternateContent['comparison'] };

export const CurrentWipComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.columnLabel, content.currentLabel, content.wipLabel]}
      columnWidths={['16%', '42%', '42%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [formatInline(row.current), formatInline(row.workInProgress)],
      }))}
    />

    <SectionNote icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);
