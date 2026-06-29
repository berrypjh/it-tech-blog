import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ComparisonRow, RenderPhaseIntroContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, XIcon } from '../icons';

type Props = { content: RenderPhaseIntroContent['comparison'] };

export const PhaseComparisonTable = ({ content }: Props) => {
  const { columns } = content;
  return (
    <section
      id="phase-comparison"
      aria-labelledby="heading-phase-comparison"
      className="space-y-md"
    >
      <SectionHeader
        id="phase-comparison"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <ComparisonTable
        caption={content.title}
        headers={[columns.label, columns.render, columns.commit]}
        columnWidths={['18%', 'auto', 'auto']}
        rows={content.rows.map(toRow)}
      />
    </section>
  );
};

const toRow = (row: ComparisonRow) => ({
  label: row.label,
  cells: [
    <Cell key="render" value={row.render} kind="render" row={row} />,
    <Cell key="commit" value={row.commit} kind="commit" row={row} />,
  ],
});

const Cell = ({
  value,
  kind,
  row,
}: {
  value: string | string[];
  kind: 'render' | 'commit';
  row: ComparisonRow;
}) => {
  const t = kind === 'render' ? toneTokens.sky : toneTokens.teal;

  if (Array.isArray(value)) {
    return (
      <ul className="flex flex-col gap-1">
        {value.map((item) => (
          <li key={item} className="flex items-start gap-2 break-keep">
            <span
              aria-hidden="true"
              className={cn('mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full', t.dot)}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (row.emphasis && row.iconKind === 'cross-check') {
    const isRender = kind === 'render';
    return (
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xsm font-bold',
          isRender
            ? 'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/70 dark:bg-rose-950/40 dark:text-rose-200'
            : cn(toneTokens.teal.chip),
        )}
      >
        {isRender ? <XIcon className="h-3.5 w-3.5" /> : <CheckCircleIcon className="h-3.5 w-3.5" />}
        {value}
      </span>
    );
  }

  return <span className={cn('block break-keep font-medium', t.text)}>{value}</span>;
};
