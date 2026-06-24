import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ReactVsReactDomContent } from '../content';
import { FileCodeIcon } from '../icons';

type Props = { content: ReactVsReactDomContent['comparison'] };

const toCell = (lines: string[]) => (
  <div className="flex flex-col gap-1">
    {lines.map((line, i) => (
      <span key={i}>{formatInline(line)}</span>
    ))}
  </div>
);

export const ReactDomComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison" className="space-y-lg">
    <SectionHeader
      id="comparison"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[
        content.columnLabels.axis,
        content.columnLabels.react,
        content.columnLabels.reactDom,
      ]}
      columnWidths={['20%', '40%', '40%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [toCell(row.reactValue), toCell(row.reactDomValue)],
      }))}
    />
  </section>
);
