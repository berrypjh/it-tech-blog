import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent, TreeNode } from '../content';
import { AtomIcon, BoxIcon, ShieldCheckIcon, TriangleAlertIcon, UserIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ErrorBoundaryRecoverContent['childThrow'] };

const treeStyle = {
  app: {
    box: 'border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200',
    Icon: AtomIcon,
  },
  boundary: {
    box: 'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-200',
    Icon: ShieldCheckIcon,
  },
  card: {
    box: 'border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200',
    Icon: BoxIcon,
  },
  profile: {
    box: 'border-rose-400 bg-rose-50 text-rose-700 dark:border-rose-600 dark:bg-rose-950/40 dark:text-rose-200',
    Icon: UserIcon,
  },
} as const;

const TreeRow = ({ node, depth }: { node: TreeNode; depth: number }) => {
  const style = treeStyle[node.kind];
  const Icon = style.Icon;
  return (
    <div className="flex items-center gap-1.5" style={{ paddingLeft: `${depth * 16}px` }}>
      {depth > 0 && (
        <span
          aria-hidden="true"
          className="text-[10px] font-mono text-slate-400 dark:text-slate-500"
        >
          └─
        </span>
      )}
      <span
        className={cn(
          'inline-flex items-center gap-1.5 rounded-lg border-2 px-2.5 py-1.5',
          'font-mono text-[11px] font-bold break-keep',
          style.box,
        )}
      >
        <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
        <span>{node.label}</span>
      </span>
      {node.marker && (
        <span className="text-[10px] font-bold text-rose-600 dark:text-rose-300 break-keep">
          {node.marker}
        </span>
      )}
    </div>
  );
};

export const ChildThrowSection = ({ content }: Props) => (
  <section aria-labelledby="childthrow-heading" className="flex flex-col gap-md">
    <SectionHeader id="childthrow-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* left: code */}
      <article
        className={cn(
          'flex flex-col overflow-hidden rounded-2xl border-2',
          'border-rose-200/80 bg-white dark:border-rose-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="jsx" />
      </article>

      {/* center: emphasis */}
      <article
        className={cn(
          'flex flex-col items-center justify-center gap-3 rounded-2xl border-2 p-md sm:p-lg text-center',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
        >
          <TriangleAlertIcon className="h-6 w-6" />
        </span>
        <h3 className="text-md font-bold text-[var(--term-fg)] break-keep">
          {content.middle.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.middle.body}
        </p>
      </article>

      {/* right: tree */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {content.treeTitle}
        </h3>
        <div className="flex flex-col gap-1.5">
          {content.tree.map((node, i) => (
            <TreeRow key={node.label} node={node} depth={i} />
          ))}
        </div>
      </article>
    </div>
  </section>
);
