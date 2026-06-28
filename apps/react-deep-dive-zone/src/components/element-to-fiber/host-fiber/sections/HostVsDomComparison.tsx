import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import type { HostComponentFiberContent } from '../content';
import { GitBranchIcon, LightbulbIcon } from '../icons';

type Props = { content: HostComponentFiberContent['vsDom'] };

export const HostVsDomComparison = ({ content }: Props) => (
  <section id="vs-dom" aria-labelledby="heading-vs-dom" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      descriptionFullWidth
      id="vs-dom"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.headers.label, content.headers.fiber, content.headers.dom]}
      columnWidths={['18%', '41%', '41%']}
      rows={content.rows.map((row) => ({
        label: row.label,
        cells: [row.fiber, row.dom],
      }))}
    />

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>
      <span className="font-bold">{content.emphasisTitle}</span> — {content.emphasisBody}
    </SectionNote>
  </section>
);
