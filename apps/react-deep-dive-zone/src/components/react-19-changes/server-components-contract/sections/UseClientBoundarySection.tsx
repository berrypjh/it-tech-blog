import { cn } from '@it-tech-blog/utils';

import type { ServerComponentsContractContent } from '../content';
import { BookOpenIcon, CheckCircleIcon, FolderIcon } from '../icons';
import { boundaryTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['useClient'] };

const nodeColor: Record<
  ServerComponentsContractContent['useClient']['tree'][number]['kind'],
  string
> = {
  server: 'text-blue-300',
  client: 'text-indigo-300',
  action: 'text-purple-300',
  'boundary-note': 'text-amber-300 italic',
};

const legendColor: Record<
  ServerComponentsContractContent['useClient']['legendItems'][number]['kind'],
  { tag: string; chip: string }
> = {
  server: { tag: 'text-blue-700 dark:text-blue-200', chip: boundaryTone.server.chip },
  client: { tag: 'text-indigo-700 dark:text-indigo-200', chip: boundaryTone.client.chip },
  boundary: {
    tag: 'text-amber-700 dark:text-amber-200',
    chip: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/70',
  },
};

export const UseClientBoundarySection = ({ content }: Props) => (
  <section aria-labelledby="use-client-heading" className="flex flex-col">
    <SectionHeader
      id="use-client-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_6fr)_minmax(0,_4fr)_minmax(0,_3fr)] lg:gap-md items-stretch">
      {/* Module Tree (dark navy) */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md',
          'border-slate-700/80 bg-slate-950',
          'shadow-[0_2px_0_rgba(0,0,0,0.25)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900 text-slate-300"
          >
            <FolderIcon className="h-4 w-4" />
          </span>
          <h3 className="font-mono text-xsm font-bold uppercase tracking-wider text-slate-200">
            {content.treeTitle}
          </h3>
        </header>
        <pre
          role="img"
          aria-label={content.treeTitle}
          className="overflow-x-auto font-mono text-[12px] leading-relaxed sm:text-[13px]"
        >
          <code className="block whitespace-pre">
            {content.tree.map((node) => {
              const indent = '  '.repeat(node.indent);
              return (
                <span key={node.label} className="block">
                  <span className="text-slate-600">{indent}</span>
                  <span className={cn('font-bold', nodeColor[node.kind])}>{node.label}</span>
                </span>
              );
            })}
          </code>
        </pre>
      </article>

      {/* Explanation card */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-teal-50/30 dark:border-teal-700/70 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <BookOpenIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200">
            {content.explanationTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.explanationPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* Legend card */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.legendTitle}
          </span>
        </header>
        <ul className="flex flex-col gap-2">
          {content.legendItems.map((l) => {
            const color = legendColor[l.kind];
            return (
              <li key={l.tag} className="flex flex-col gap-0.5">
                <code
                  className={cn(
                    'inline-flex w-fit items-center rounded-md border px-1.5 py-0.5',
                    color.chip,
                    'font-mono text-[11px] font-bold',
                  )}
                >
                  {l.tag}
                </code>
                <span className="text-xxsm text-[var(--term-muted)] break-keep">{l.meaning}</span>
              </li>
            );
          })}
        </ul>
      </article>
    </div>
  </section>
);
