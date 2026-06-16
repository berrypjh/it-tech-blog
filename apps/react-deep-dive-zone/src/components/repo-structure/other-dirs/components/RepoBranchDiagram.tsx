import { cn } from '@it-tech-blog/utils';

import type { HeroBranchNode, SurroundingContent } from '../content';
import { houseToneByIndex } from '../houseTones';
import { FolderIcon, iconByName } from '../icons';

type Props = { content: SurroundingContent['hero'] };

/**
 * Hero 우측 분기 다이어그램.
 * 상단 facebook/react 허브 카드 → 점선 trunk + 가로 trunk → 3개 디렉터리 카드.
 * 각 분기는 위치별 3색 소프트 액센트(amber/sky/violet)로 가볍게 구분한다.
 */
export const RepoBranchDiagram = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'px-md py-lg sm:p-lg',
        'overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--term-surface)]/40"
      />

      <div className="relative flex flex-col items-center">
        {/* 허브 카드 */}
        <RepoRootCard label={content.rootLabel} caption={content.rootCaption} />

        {/* 세로 trunk */}
        <span
          aria-hidden="true"
          className="block w-px h-md border-l border-dashed border-[var(--term-border)]"
        />

        {/* 3개 분기 */}
        <div className="relative w-full">
          {/* 상단 가로 trunk */}
          <span
            aria-hidden="true"
            className="absolute top-0 left-[12%] right-[12%] border-t border-dashed border-[var(--term-border)]"
          />
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {content.branches.map((branch, idx) => (
              <li key={branch.id} className="flex flex-col items-center">
                <BranchConnector />
                <BranchCard node={branch} index={idx} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type RepoRootCardProps = { label: string; caption: string };

const RepoRootCard = ({ label, caption }: RepoRootCardProps) => (
  <div
    className={cn(
      'inline-flex flex-col items-center gap-1 rounded-xl border px-md py-md',
      'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-accent)]',
      'shadow-[0_3px_0_var(--term-border)]',
    )}
  >
    <span className="inline-flex items-center gap-2">
      <FolderIcon className="h-4 w-4" aria-hidden="true" />
      <span className="text-md font-bold font-mono tracking-tight">{label}</span>
    </span>
    <span className="text-[10px] uppercase tracking-wider text-[var(--term-muted)]">{caption}</span>
  </div>
);

const BranchConnector = () => (
  <span
    aria-hidden="true"
    className="block w-px h-md border-l border-dashed border-[var(--term-border)]"
  />
);

type BranchCardProps = { node: HeroBranchNode; index: number };

const BranchCard = ({ node, index }: BranchCardProps) => {
  const Icon = iconByName[node.icon];
  const tone = houseToneByIndex(index);

  return (
    <article
      className={cn(
        'group flex w-full flex-col items-center gap-1 rounded-lg border',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'px-3 py-3 text-center transition-all hover:-translate-y-0.5 hover:border-[var(--term-accent)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-8 h-8 rounded-md border',
          tone.chip,
        )}
      >
        <Icon className="h-4 w-4" />
      </span>
      <span className={cn('text-xsm font-bold font-mono tracking-tight', tone.text)}>
        {node.name}
      </span>
      <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
        {node.subtitle}
      </span>
    </article>
  );
};
