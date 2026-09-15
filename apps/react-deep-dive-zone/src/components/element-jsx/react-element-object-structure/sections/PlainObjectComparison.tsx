import { Sparkles, Table } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementObjectStructureContent } from '../content';

type Props = { content: ReactElementObjectStructureContent['compare'] };

export const PlainObjectComparison = ({ content }: Props) => (
  <section
    id="compare-plain"
    aria-labelledby="heading-compare-plain"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="compare-plain"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Table className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.aspect, content.headers.plain, content.headers.element]}
      columnWidths={['22%', '39%', '39%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [formatInline(row.plain), formatInline(row.element)],
      }))}
    />

    <SectionNote icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
      {content.emphasis}
    </SectionNote>
  </section>
);
