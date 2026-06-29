import { cn } from '@it-tech-blog/utils';

import { ComparisonTable } from '../../../shared/grid';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompareRow, CompleteWorkContent } from '../content';
import { directionIconByName, GitBranchIcon } from '../icons';

type Props = { content: CompleteWorkContent['compare'] };

export const BeginVsCompleteCompare = ({ content }: Props) => {
  const { columns } = content;
  return (
    <section id="compare" aria-labelledby="heading-compare" className="space-y-md">
      <SectionHeader
        id="compare"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<GitBranchIcon className="h-5 w-5" />}
      />

      <ComparisonTable
        caption={content.title}
        headers={[columns.direction, columns.fn, columns.role, columns.target]}
        columnWidths={['18%', '24%', 'auto', '20%']}
        rows={content.rows.map(toRow)}
      />
    </section>
  );
};

const toRow = (row: CompareRow) => {
  const t = toneTokens[row.tone];
  const Arrow = directionIconByName[row.direction.icon];
  return {
    label: (
      <span className="inline-flex items-center gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 items-center justify-center rounded-md border',
            t.chip,
          )}
        >
          <Arrow className="h-4 w-4" />
        </span>
        <span className="flex flex-col">
          <span className={cn('text-sm font-bold leading-tight', t.text)}>
            {row.direction.label}
          </span>
          <span className="text-xxsm font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {row.direction.detail}
          </span>
        </span>
      </span>
    ),
    cells: [
      <ul key="fn" className="flex flex-col gap-1">
        {row.fn.map((fn) => (
          <li key={fn}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)] px-2 py-0.5 font-mono text-xsm font-bold',
                t.text,
              )}
            >
              {fn}
            </code>
          </li>
        ))}
      </ul>,
      <ul key="role" className="flex flex-col gap-1">
        {row.role.map((r, idx) => (
          <li
            key={r}
            className={cn(
              'leading-snug break-keep',
              idx === 0 ? 'font-bold text-[var(--term-fg)]' : 'text-[var(--term-muted)]',
            )}
          >
            {r}
          </li>
        ))}
      </ul>,
      <span key="target" className={cn('font-bold break-keep', t.text)}>
        {row.target}
      </span>,
    ],
  };
};
