import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ChangelogContent } from '../content';
import { BookOpenIcon } from '../icons';

type Props = { content: ChangelogContent['comparison'] };

export const ChangelogReleasesComparisonTable = ({ content }: Props) => (
  <section aria-labelledby="heading-comparison" className="space-y-lg">
    <SectionHeader
      id="comparison"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BookOpenIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.columnLabel, content.changelogLabel, content.releasesLabel]}
      columnWidths={['20%', '40%', '40%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [formatInline(row.changelog), formatInline(row.releases)],
      }))}
    />
  </section>
);
