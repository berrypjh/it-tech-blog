import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent, TreeNode } from '../content';
import {
  ArrowUpIcon,
  AtomIcon,
  BoxIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  UserIcon,
} from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ErrorBoundaryRecoverContent['search'] };

const nodeStyle = {
  app: {
    border: 'border-slate-300 dark:border-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-700 dark:text-slate-200',
    Icon: AtomIcon,
  },
  boundary: {
    border: 'border-teal-400 dark:border-teal-500',
    bg: 'bg-teal-50 dark:bg-teal-950/40',
    text: 'text-teal-700 dark:text-teal-200',
    Icon: ShieldCheckIcon,
  },
  card: {
    border: 'border-slate-300 dark:border-slate-600',
    bg: 'bg-slate-50 dark:bg-slate-900',
    text: 'text-slate-700 dark:text-slate-200',
    Icon: BoxIcon,
  },
  profile: {
    border: 'border-rose-400 dark:border-rose-500',
    bg: 'bg-rose-50 dark:bg-rose-950/40',
    text: 'text-rose-700 dark:text-rose-200',
    Icon: UserIcon,
  },
} as const;

const NodeCard = ({ node, highlight }: { node: TreeNode; highlight?: boolean }) => {
  const s = nodeStyle[node.kind];
  const Icon = s.Icon;
  return (
    <div
      className={cn(
        'flex items-center gap-2 rounded-xl border-2 px-3 py-2 w-full',
        s.border,
        s.bg,
        s.text,
        highlight && 'shadow-[0_0_0_4px_rgba(20,184,166,0.15)]',
      )}
    >
      <Icon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span className="font-mono text-xsm font-bold">{node.label}</span>
      {node.marker && (
        <span
          className={cn(
            'ml-auto text-[10px] font-mono font-bold break-keep',
            node.kind === 'boundary' && 'text-teal-600 dark:text-teal-300',
            node.kind === 'profile' && 'text-rose-600 dark:text-rose-300',
            node.kind === 'app' && 'text-slate-500 dark:text-slate-400',
            node.kind === 'card' && 'text-slate-500 dark:text-slate-400',
          )}
        >
          {node.marker}
        </span>
      )}
    </div>
  );
};

export const BoundarySearchSection = ({ content }: Props) => (
  <section aria-labelledby="search-heading" className="flex flex-col gap-md">
    <SectionHeader id="search-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-stretch">
      {/* tree diagram */}
      <article
        className={cn(
          'relative flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/70 bg-gradient-to-b from-blue-50/30 to-white',
          'dark:border-blue-800/60 dark:from-blue-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        {content.tree.map((node, i) => (
          <div key={node.label} className="flex flex-col items-stretch gap-1">
            <NodeCard node={node} highlight={node.kind === 'boundary'} />
            {i < content.tree.length - 1 && (
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex items-center justify-center text-[10px] font-mono font-bold uppercase tracking-wider',
                  'text-teal-600 dark:text-teal-300',
                )}
              >
                <ArrowUpIcon className="h-4 w-4 mr-1" />
                위로 이동
              </span>
            )}
          </div>
        ))}
      </article>

      {/* rules */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/30 dark:border-teal-800/60 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-teal-700 dark:text-teal-200 break-keep">
          {content.rulesTitle}
        </h3>
        <ul className="flex flex-col gap-2">
          {content.rules.map((rule) => (
            <li
              key={rule}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400"
              />
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
