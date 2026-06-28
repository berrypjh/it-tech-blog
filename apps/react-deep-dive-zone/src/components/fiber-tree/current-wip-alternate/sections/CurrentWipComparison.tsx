import { ComparisonTable } from '../../../shared/grid';
import { SectionNote } from '../../../shared/note';
import { SectionBadgeHeader } from '../../../shared/section';
import { formatInline } from '../../../shared/text';
import type { CurrentWipAlternateContent } from '../content';
import { LayersIcon, LightbulbIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['comparison'] };

export const CurrentWipComparison = ({ content }: Props) => (
  <section id="comparison" aria-labelledby="heading-comparison" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="comparison"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<LayersIcon className="h-5 w-5" />}
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

    <SectionNote icon={<LightbulbIcon className="h-4 w-4" />}>{content.emphasis}</SectionNote>
  </section>
);
