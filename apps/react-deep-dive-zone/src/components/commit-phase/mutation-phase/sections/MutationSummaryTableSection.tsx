import { cx } from '@berrypjh/react-ui';
import { ListChecks, type LucideIcon, Pencil, Plus, Trash2 } from 'lucide-react';

import { ComparisonTable } from '../../../shared/grid';
import { SectionBadgeHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlagId, MutationPhaseContent, SummaryRow } from '../content';

type Props = { content: MutationPhaseContent['summary'] };

const iconMap: Record<HeroFlagId, LucideIcon> = {
  plus: Plus,
  pencil: Pencil,
  trash: Trash2,
};

export const MutationSummaryTableSection = ({ content }: Props) => (
  <section
    id="summary-table"
    aria-labelledby="heading-summary-table"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="summary-table"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecks className="h-5 w-5" aria-hidden="true" />}
    />

    <ComparisonTable
      caption={content.title}
      headers={[content.columns.flag, content.columns.meaning, content.columns.description]}
      columnWidths={['24%', '26%', '50%']}
      rows={content.rows.map((row) => ({
        label: <FlagLabel row={row} />,
        cells: [<MeaningBadge key="m" row={row} />, <span key="d">{row.description}</span>],
      }))}
    />
  </section>
);

const FlagLabel = ({ row }: { row: SummaryRow }) => {
  const Icon = iconMap[row.id];
  const t = toneTokens[row.tone];
  return (
    <div className="flex items-center gap-2">
      <ToneIconBox tone={row.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <code className={cx('text-xsm font-bold font-mono', t.text)}>{row.flag}</code>
    </div>
  );
};

const MeaningBadge = ({ row }: { row: SummaryRow }) => {
  const t = toneTokens[row.tone];
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xsm font-bold',
        t.chip,
      )}
    >
      {row.meaning}
    </span>
  );
};
