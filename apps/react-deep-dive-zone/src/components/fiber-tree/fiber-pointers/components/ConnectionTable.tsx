import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../shared/tones';
import type { ConnectionRow } from '../content';

import { pointerDashed, pointerTone } from './pointerStyles';

type Props = {
  childSiblingRows: ConnectionRow[];
  returnRows: ConnectionRow[];
  /** Optional label printed above the rows */
  label?: string;
  /** wide: child/sibling 그룹과 return 그룹을 md+에서 2열로 나란히 배치(넓은 슬롯용). */
  wide?: boolean;
};

export const ConnectionTable = ({ childSiblingRows, returnRows, label, wide }: Props) => (
  <div className="flex flex-col gap-sm font-mono text-xsm min-w-0">
    {label && (
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {`// ${label}`}
      </h3>
    )}

    {wide ? (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
        <RowList rows={childSiblingRows} />
        <div
          className={cn(
            'border-t border-dashed border-[var(--term-border)] pt-sm',
            'md:border-t-0 md:border-l md:pt-0 md:pl-md',
          )}
        >
          <RowList rows={returnRows} />
        </div>
      </div>
    ) : (
      <>
        <RowList rows={childSiblingRows} />
        <hr className="border-t border-dashed border-[var(--term-border)]" />
        <RowList rows={returnRows} />
      </>
    )}
  </div>
);

const RowList = ({ rows }: { rows: ConnectionRow[] }) => (
  <ul className="flex flex-col gap-1">
    {rows.map((row) => (
      <ConnectionRowItem key={`${row.from}-${row.pointer}-${row.to}`} row={row} />
    ))}
  </ul>
);

const ConnectionRowItem = ({ row }: { row: ConnectionRow }) => {
  const t = toneTokens[pointerTone[row.pointer]];
  return (
    <li className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'block h-px w-4 border-t-2 shrink-0',
          t.border,
          pointerDashed[row.pointer] ? 'border-dashed' : 'border-solid',
        )}
      />
      <span className="text-[var(--term-fg)] break-all">
        <span className="text-[var(--term-fg)]">{row.from}</span>.
        <span
          className={cn('inline-flex items-center rounded-md border px-1.5 py-0 font-bold', t.chip)}
        >
          {row.pointer}
        </span>
        <span className="mx-1 text-[var(--term-muted)]">→</span>
        <span className="text-[var(--term-fg)]">{row.to}</span>
      </span>
    </li>
  );
};
