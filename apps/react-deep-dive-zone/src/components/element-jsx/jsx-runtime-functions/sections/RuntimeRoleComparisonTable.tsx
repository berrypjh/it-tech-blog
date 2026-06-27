import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { JsxRuntimeFunctionsContent } from '../content';
import { TableIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['comparison'] };

export const RuntimeRoleComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-roles" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="roles"
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
  </section>
);
