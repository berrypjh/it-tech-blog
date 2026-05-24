import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { RepoTreeNode, WhyOpenSourceContent } from '../content';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
  FolderIcon,
  FolderOpenIcon,
  GithubIcon,
  InfoIcon,
} from '../icons';

type Props = { content: WhyOpenSourceContent['repoExplorer'] };

/** 단일 트리 노드 렌더링 — 재귀적으로 children 표시 */
const TreeNode = ({ node, depth }: { node: RepoTreeNode; depth: number }) => {
  const hasChildren = !!node.children?.length;
  const isOpen = node.open;
  const Icon = node.kind === 'file' ? FileIcon : isOpen ? FolderOpenIcon : FolderIcon;

  return (
    <li>
      <div
        className={cn(
          'group flex items-center gap-1.5 py-1 pr-2 rounded text-xsm font-mono',
          'transition-colors',
          node.active
            ? 'bg-sky-100 dark:bg-sky-950/60 text-sky-800 dark:text-sky-100 font-bold'
            : 'text-[var(--term-fg)] hover:bg-[var(--term-surface)]',
        )}
        style={{ paddingLeft: `${0.5 + depth * 0.875}rem` }}
        aria-current={node.active ? 'true' : undefined}
      >
        {hasChildren ? (
          <span aria-hidden="true" className="text-[var(--term-dim)] shrink-0">
            {isOpen ? (
              <ChevronDownIcon className="h-3 w-3" />
            ) : (
              <ChevronRightIcon className="h-3 w-3" />
            )}
          </span>
        ) : (
          <span aria-hidden="true" className="inline-block w-3 shrink-0" />
        )}
        <Icon
          className={cn(
            'h-3.5 w-3.5 shrink-0',
            node.active ? 'text-sky-600 dark:text-sky-300' : 'text-[var(--term-muted)]',
          )}
        />
        <span className="truncate">{node.name}</span>
        {node.active && (
          <span
            aria-hidden="true"
            className="ml-auto inline-flex items-center px-1.5 py-0.5 rounded text-[9px] font-bold bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
          >
            active
          </span>
        )}
      </div>

      {hasChildren && isOpen && node.children && (
        <ul>
          {node.children.map((child) => (
            <TreeNode key={child.name} node={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

export const RepositoryStructureExplorer = ({ content }: Props) => {
  return (
    <section id="section-explorer" aria-labelledby="heading-explorer" className="space-y-lg">
      <SectionHeader
        id="explorer"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderIcon className="h-5 w-5" />}
      />

      {/* 큰 white card 안 2열 */}
      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        {/* 상단 explorer toolbar */}
        <header className="flex items-center justify-between px-md py-2 border-b border-[var(--term-border)] bg-[var(--term-surface)]">
          <div className="flex items-center gap-2">
            <GithubIcon className="h-4 w-4 text-[var(--term-fg)]" />
            <span className="text-xsm font-mono font-bold text-[var(--term-fg)]">
              {content.repoLabel}
            </span>
            <span className="text-[10px] font-mono text-[var(--term-dim)]">/ main</span>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono text-[var(--term-muted)]">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500" />
            public
          </span>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.38fr)_minmax(0,_0.62fr)]">
          {/* 좌측: 트리 */}
          <aside
            aria-label="repository tree"
            className="border-b lg:border-b-0 lg:border-r border-[var(--term-border)] p-sm sm:p-md bg-[var(--color-canvas)]/30"
          >
            <ul className="flex flex-col gap-0.5">
              {content.tree.map((node) => (
                <TreeNode key={node.name} node={node} depth={0} />
              ))}
            </ul>
          </aside>

          {/* 우측: 상세 패널 */}
          <article className="p-md sm:p-lg flex flex-col gap-md">
            {/* 폴더 헤더 */}
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-300"
              >
                <FolderOpenIcon className="h-[1.125rem] w-[1.125rem]" />
              </span>
              <div className="flex flex-col">
                <h3 className="text-md sm:text-lg font-bold font-mono tracking-tight text-[var(--term-fg)]">
                  {content.detail.folder}
                </h3>
                <span className="text-[10px] font-mono text-[var(--term-muted)]">
                  packages/{content.detail.folder}
                </span>
              </div>
            </header>

            {/* lead */}
            <p className="text-sm sm:text-md font-bold text-[var(--term-fg)] leading-snug break-keep">
              {content.detail.lead}
            </p>
            <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep -mt-2">
              {content.detail.supporting}
            </p>

            {/* tag pills */}
            <ul className="flex flex-wrap gap-1.5">
              {content.detail.tags.map((tag) => (
                <li
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-bold border border-sky-200 dark:border-sky-800/70 bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-200"
                >
                  {tag}
                </li>
              ))}
            </ul>

            {/* bullet list */}
            <ul className="flex flex-col gap-1.5">
              {content.detail.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xsm sm:text-sm text-[var(--term-fg)]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 inline-block w-1 h-1 rounded-full bg-sky-500 dark:bg-sky-400 shrink-0"
                  />
                  <span className="leading-relaxed break-keep">{b}</span>
                </li>
              ))}
            </ul>

            {/* info callout */}
            <aside className="mt-auto flex items-start gap-sm rounded-md border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 p-sm sm:p-md">
              <span
                aria-hidden="true"
                className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
              >
                <InfoIcon className="h-4 w-4" />
              </span>
              <p className="text-xsm text-sky-900 dark:text-sky-100 leading-relaxed break-keep">
                {content.detail.callout}
              </p>
            </aside>
          </article>
        </div>
      </div>
    </section>
  );
};
