import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementObjectStructureContent } from '../content';
import { SparklesIcon, TableIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['compare'] };

export const PlainObjectComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare-plain" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="compare-plain"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TableIcon className="h-5 w-5" />}
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

    <SectionNote icon={<SparklesIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);
