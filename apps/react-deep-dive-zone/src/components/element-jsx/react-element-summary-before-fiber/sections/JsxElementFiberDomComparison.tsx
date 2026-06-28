import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { StarIcon, TableIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['compare'] };

export const JsxElementFiberDomComparison = ({ content }: Props) => (
  <section aria-labelledby="heading-compare" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="compare"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<TableIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.aspectLabel, ...content.columns.map((col) => col.label)]}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: content.columns.map((col) => formatInline(row.values[col.id])),
      }))}
    />

    <SectionNote icon={<StarIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);
