import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { ToneIconBox } from '../../../shared/tone';
import { toneTokens } from '../../../shared/tones';
import type { HeroFlagIcon, MutationPhaseContent, SummaryRow } from '../content';
import { ListChecksIcon, PencilIcon, PlusIcon, TrashIcon } from '../icons';

type Props = { content: MutationPhaseContent['summary'] };

const iconMap: Record<HeroFlagIcon, typeof PencilIcon> = {
  plus: PlusIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
};

export const MutationSummaryTableSection = ({ content }: Props) => (
  <section
    id="summary-table"
    aria-labelledby="heading-summary-table"
    className="space-y-md scroll-mt-xl"
  >
    <SectionHeader
      id="summary-table"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<ListChecksIcon className="h-5 w-5" />}
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
  const Icon = iconMap[row.iconName];
  const t = toneTokens[row.tone];
  return (
    <div className="flex items-center gap-2">
      <ToneIconBox tone={row.tone} size="sm">
        <Icon className="h-4 w-4" />
      </ToneIconBox>
      <code className={cn('text-xsm font-bold font-mono', t.text)}>{row.flag}</code>
    </div>
  );
};

const MeaningBadge = ({ row }: { row: SummaryRow }) => {
  const t = toneTokens[row.tone];
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border px-2 py-0.5 text-xsm font-bold',
        t.chip,
      )}
    >
      {row.meaning}
    </span>
  );
};
