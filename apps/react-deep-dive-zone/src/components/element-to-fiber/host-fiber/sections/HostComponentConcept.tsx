import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { HostComponentFiberContent, TreeNode } from '../content';
import { ArrowRightIcon, LayersIcon, MonitorIcon } from '../icons';

type Props = { content: HostComponentFiberContent['concept'] };

export const HostComponentConcept = ({ content }: Props) => (
  <section id="concept" aria-labelledby="heading-concept" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="concept"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description1}
      icon={<LayersIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1.1fr)] gap-md items-stretch">
        {/* Left: description */}
        <div className="flex flex-col gap-md">
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[58ch]">
            {content.description1}
          </p>
          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-fg)] break-keep max-w-[58ch]">
            브라우저에서는{' '}
            <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">div</code>,{' '}
            <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
              button
            </code>
            ,{' '}
            <code className="font-mono font-bold text-emerald-700 dark:text-emerald-300">
              input
            </code>{' '}
            같은 DOM 요소와 이어집니다.
          </p>
          <div
            className={cn(
              'mt-auto inline-flex items-center gap-sm rounded-xl border-2 px-md py-3',
              'border-sky-300/80 bg-sky-50/70',
              'dark:border-sky-700/70 dark:bg-sky-950/30',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950 shrink-0"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-sky-800 dark:text-sky-100 break-keep">
              {content.bridgeLabel}
            </code>
          </div>
        </div>

        {/* Right: tree + browser */}
        <div
          className={cn(
            'rounded-2xl border p-md',
            'border-[var(--term-border)] bg-[var(--term-surface)]',
            'flex flex-col gap-md',
          )}
        >
          <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-[var(--term-muted)]">
            host tree → DOM
          </span>

          <ul className="flex flex-col gap-1.5" aria-label="Host fiber tree example">
            {content.treeNodes.map((node) => (
              <li key={node.id}>
                <TreeRow node={node} />
              </li>
            ))}
          </ul>

          <div
            className={cn(
              'mt-2 flex items-center gap-sm rounded-xl border-2 p-md',
              'border-sky-300/70 bg-white',
              'dark:border-sky-700/70 dark:bg-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-2xl shrink-0',
                'bg-gradient-to-br from-sky-500 to-blue-600 text-white',
                'dark:from-sky-500 dark:to-blue-600 dark:text-slate-50',
                'shadow-[0_8px_22px_-8px_rgba(2,132,199,0.55)]',
              )}
            >
              <MonitorIcon className="h-6 w-6" />
            </span>
            <div className="flex flex-col gap-0.5 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-mono font-bold text-sky-700/80 dark:text-sky-300/80">
                output
              </span>
              <code className="font-mono text-sm font-bold text-sky-800 dark:text-sky-200">
                {content.domLabel}
              </code>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
);

const TreeRow = ({ node }: { node: TreeNode }) => {
  const prefix =
    node.depth === 0 ? '' : '│  '.repeat(node.depth - 1) + (node.isLast ? '└─ ' : '├─ ');
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-md border px-sm py-2',
        'border-emerald-200/80 bg-emerald-50/60',
        'dark:border-emerald-800/60 dark:bg-emerald-950/30',
        'transition-colors hover:border-emerald-400/80 dark:hover:border-emerald-500/70',
      )}
    >
      <code className="font-mono text-[11px] text-[var(--term-muted)] whitespace-pre">
        {prefix}
      </code>
      <code className="font-mono text-xsm font-bold text-emerald-800 dark:text-emerald-200 break-all">
        {node.label}
      </code>
    </div>
  );
};
