import { Layers } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import type { ElementVsFiberContent } from '../content';

type Props = { content: ElementVsFiberContent['comparison'] };

export const ElementFiberComparisonTable = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<Layers className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.aspectLabel, content.columns[0].label, content.columns[1].label]}
      columnWidths={['20%', '40%', '40%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [row.element, row.fiber],
      }))}
    />
  </section>
);
