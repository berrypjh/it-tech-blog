import { cx } from '@berrypjh/react-ui';
import { FileText, Folder } from 'lucide-react';

import type { RepoTreeRow } from '../content';

type Props = {
  header: string;
  rows: RepoTreeRow[];
  className?: string;
};

export const RepoTreeCard = ({ header, rows, className }: Props) => (
  <div
    className={cx(
      'flex flex-col rounded-lg border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      'border-[var(--term-border)] overflow-hidden',
      className,
    )}
  >
    {/* repo header */}
    <div className="flex items-center justify-between gap-sm px-md py-2 border-b border-dashed border-[var(--term-border)] bg-[var(--term-surface)]">
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className="inline-flex h-5 w-5 items-center justify-center rounded bg-[var(--term-accent)] text-[var(--term-bg)] text-[10px] font-bold"
        >
          R
        </span>
        <span className="text-xsm font-bold text-[var(--term-fg)] truncate">{header}</span>
      </div>
      <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[var(--term-border)] text-[10px] text-[var(--term-muted)] tabular-nums">
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
        />
        main
      </span>
    </div>

    <ul className="py-1.5">
      {rows.map((row, idx) => {
        const Icon = row.kind === 'dir' ? Folder : FileText;
        return (
          <li
            key={row.id}
            className="flex items-center gap-2 px-md py-1.5 text-xsm leading-none text-[var(--term-muted)]"
          >
            <span
              aria-hidden="true"
              className="shrink-0 tabular-nums text-[10px] text-[var(--term-dim)] w-5"
            >
              {idx === rows.length - 1 ? '└─' : '├─'}
            </span>
            <Icon aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[var(--term-dim)]" />
            <span className="truncate">{row.name}</span>
          </li>
        );
      })}
    </ul>
  </div>
);
