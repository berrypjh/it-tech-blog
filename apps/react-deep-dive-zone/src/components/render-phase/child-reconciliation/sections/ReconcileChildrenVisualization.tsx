import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReconcileChildrenContent, VisualNode } from '../content';
import { ArrowRightIcon, ChevronDownIcon, PlusIcon, StarIcon, WorkflowIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: ReconcileChildrenContent['visualization'] };

export const ReconcileChildrenVisualization = ({ content }: Props) => (
  <section
    id="visualization"
    aria-labelledby="heading-visualization"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="visualization"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/20 to-violet-50/20',
        'dark:from-[var(--term-bg)] dark:via-sky-950/12 dark:to-violet-950/12',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Flow */}
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2">
        {content.nodes.map((node, idx) => {
          const isLast = idx === content.nodes.length - 1;
          // Connector: between idx 0 and 1 use plus; others use arrow
          const useConnector = !isLast;
          const isPlus = idx === 0;
          return (
            <Fragment key={node.title}>
              <div className="flex-1 min-w-0">
                <VisualNodeCard node={node} />
              </div>
              {useConnector && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'flex shrink-0 items-center justify-center',
                    'xl:px-0.5 py-1 xl:py-0',
                    isPlus
                      ? 'text-teal-600 dark:text-teal-300'
                      : 'text-violet-500/80 dark:text-violet-300/80',
                  )}
                >
                  {isPlus ? (
                    <PlusIcon className="h-5 w-5" />
                  ) : (
                    <>
                      <ArrowRightIcon className="hidden xl:block h-5 w-5" />
                      <ChevronDownIcon className="xl:hidden h-5 w-5" />
                    </>
                  )}
                </span>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Bottom emphasis */}
      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-sky-200/80 bg-sky-50/70',
          'dark:border-sky-800/70 dark:bg-sky-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-sky-100 text-sky-700 border border-sky-200/80',
            'dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
          )}
        >
          <StarIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-sky-900 dark:text-sky-100 font-bold break-keep">
          {content.bottomEmphasis}
        </p>
      </aside>
    </article>
  </section>
);

const VisualNodeCard = ({ node }: { node: VisualNode }) => {
  const palette = tonePalette[node.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-2xl border-2 p-md',
        palette.border,
        palette.bg,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
      )}
    >
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', palette.text)}>
        {node.title}
      </h3>
      {node.subtitle && (
        <code className="font-mono text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-all">
          {node.subtitle}
        </code>
      )}
      {node.signature && (
        <code className="font-mono text-[10px] leading-snug text-[var(--term-muted)] break-all">
          {node.signature}
        </code>
      )}
      <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep mt-auto">
        {node.description}
      </p>
    </article>
  );
};
