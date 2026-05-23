import { cn } from '@it-tech-blog/utils';

import type { ConnectionRow } from '../content';

import { pointerChip, pointerLine, pointerLineStyle } from './pointerStyles';

type Props = {
  childSiblingRows: ConnectionRow[];
  returnRows: ConnectionRow[];
  /** Optional label printed above the rows */
  label?: string;
};

export const ConnectionTable = ({ childSiblingRows, returnRows, label }: Props) => (
  <div className="flex flex-col gap-sm font-mono text-xsm min-w-0">
    {label && (
      <h3 className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
        {`// ${label}`}
      </h3>
    )}
    <ul className="flex flex-col gap-1">
      {childSiblingRows.map((row) => (
        <ConnectionRowItem key={`${row.from}-${row.pointer}-${row.to}`} row={row} />
      ))}
    </ul>
    <hr className="border-t border-dashed border-[var(--term-border)]" />
    <ul className="flex flex-col gap-1">
      {returnRows.map((row) => (
        <ConnectionRowItem key={`${row.from}-${row.pointer}-${row.to}`} row={row} />
      ))}
    </ul>
  </div>
);

const ConnectionRowItem = ({ row }: { row: ConnectionRow }) => (
  <li className="flex items-center gap-2">
    <span
      aria-hidden="true"
      className={cn(
        'block h-px w-4 border-t-2 shrink-0',
        pointerLine[row.pointer],
        pointerLineStyle[row.pointer] === 'dashed' ? 'border-dashed' : 'border-solid',
      )}
    />
    <span className="text-[var(--term-fg)] break-all">
      <span className="text-[var(--term-fg)]">{row.from}</span>.
      <span
        className={cn(
          'inline-flex items-center rounded-md border px-1.5 py-0 font-bold',
          pointerChip[row.pointer],
        )}
      >
        {row.pointer}
      </span>
      <span className="mx-1 text-[var(--term-muted)]">→</span>
      <span className="text-[var(--term-fg)]">{row.to}</span>
    </span>
  </li>
);
