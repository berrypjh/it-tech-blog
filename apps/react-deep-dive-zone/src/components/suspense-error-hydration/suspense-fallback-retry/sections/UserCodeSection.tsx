import { cn } from '@it-tech-blog/utils';

import type { SuspenseFallbackRetryContent } from '../content';
import { ArrowDownIcon, AtomIcon, BoxIcon, ShieldCheckIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['userCode'] };

const treeAccent = {
  app: 'border-slate-300 bg-slate-50 text-slate-700 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-200',
  suspense:
    'border-teal-400 bg-teal-50 text-teal-700 dark:border-teal-600 dark:bg-teal-950/40 dark:text-teal-200',
  profile:
    'border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700 dark:bg-blue-950/40 dark:text-blue-200',
} as const;

const treeIcon = {
  app: AtomIcon,
  suspense: ShieldCheckIcon,
  profile: BoxIcon,
} as const;

export const UserCodeSection = ({ content }: Props) => (
  <section aria-labelledby="usercode-heading" className="flex flex-col gap-md">
    <SectionHeader id="usercode-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,3fr)] items-stretch">
      {/* description */}
      <article
        className={cn(
          'flex flex-col justify-center rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.description}
        </p>
      </article>

      {/* code */}
      <article
        className={cn(
          'flex flex-col overflow-hidden rounded-2xl border-2',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="jsx" />
      </article>

      {/* tree */}
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
        <ol className="flex flex-col items-center gap-1">
          {content.tree.map((node, i) => {
            const Icon = treeIcon[node.kind];
            return (
              <li key={node.label} className="flex flex-col items-center gap-1 w-full">
                <div
                  className={cn(
                    'inline-flex items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-2 w-full text-center',
                    'font-mono text-[11px] font-bold break-keep',
                    treeAccent[node.kind],
                  )}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{node.label}</span>
                </div>
                {i < content.tree.length - 1 && (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-400 dark:text-slate-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
