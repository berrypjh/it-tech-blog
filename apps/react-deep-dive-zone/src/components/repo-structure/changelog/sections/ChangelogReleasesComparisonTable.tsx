import { BookOpen } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { ChangelogContent } from '../content';

type Props = { content: ChangelogContent['comparison'] };

export const ChangelogReleasesComparisonTable = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<BookOpen className="h-5 w-5" aria-hidden="true" />}
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
