import { cn } from '@it-tech-blog/utils';

import { toneTokens } from '../../../getting-started/_shared/tones';
import type { RepoTreeRow } from '../content';
import { FileTextIcon, FolderIcon } from '../icons';

type Props = {
  header: string;
  rows: RepoTreeRow[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  className?: string;
  /** 헤더 옆에 표시되는 작은 분기 텍스트. 기본값 'main'. */
  branchLabel?: string;
};

/**
 * 저장소 루트 트리 카드. selection이 없으면 정적 트리, 있으면 인터랙티브 트리.
 */
export const RepoTreeCard = ({
  header,
  rows,
  selectedId,
  onSelect,
  className,
  branchLabel = 'main',
}: Props) => {
  const interactive = typeof onSelect === 'function';

  return (
    <div
      className={cn(
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
          {branchLabel}
        </span>
      </div>

      <ul className="py-1.5">
        {rows.map((row, idx) => {
          const isSelected = selectedId === row.id;
          const isLast = idx === rows.length - 1;
          const branch = isLast ? '└─' : '├─';
          const tone = row.tone ? toneTokens[row.tone] : null;
          const Icon = row.kind === 'dir' ? FolderIcon : FileTextIcon;

          const baseClass = cn(
            'group w-full flex items-center gap-2 px-md py-1.5 text-xsm leading-none transition-colors',
            'text-left',
            interactive &&
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[var(--term-accent)]',
            isSelected
              ? cn(
                  tone ? tone.chip : 'bg-[var(--term-accent-soft)] text-[var(--term-fg)]',
                  'font-bold',
                )
              : 'text-[var(--term-muted)] hover:bg-[var(--term-surface)] hover:text-[var(--term-fg)]',
          );

          const content = (
            <>
              <span
                aria-hidden="true"
                className={cn(
                  'shrink-0 tabular-nums text-[10px] text-[var(--term-dim)] w-5',
                  isSelected && tone ? tone.text : undefined,
                )}
              >
                {isSelected ? '▸ ' : branch}
              </span>
              <Icon
                aria-hidden="true"
                className={cn(
                  'h-3.5 w-3.5 shrink-0',
                  isSelected && tone ? tone.text : 'text-[var(--term-dim)]',
                )}
              />
              <span className="truncate">{row.name}</span>
            </>
          );

          return (
            <li key={row.id}>
              {interactive ? (
                <button
                  type="button"
                  onClick={() => onSelect?.(row.id)}
                  aria-pressed={isSelected}
                  className={baseClass}
                >
                  {content}
                </button>
              ) : (
                <div className={baseClass}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
