import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { ReconcileChildrenContent, VisualNode } from '../content';
import { ArrowRightIcon, ChevronDownIcon, PlusIcon, StarIcon, WorkflowIcon } from '../icons';

type Props = { content: ReconcileChildrenContent['visualization'] };

export const ReconcileChildrenVisualization = ({ content }: Props) => (
  <section id="visualization" aria-labelledby="heading-visualization" className="space-y-md">
    <SectionHeader
      id="visualization"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
      <div className="flex flex-col xl:flex-row items-stretch xl:items-center gap-2">
        {content.nodes.map((node, idx) => {
          const isLast = idx === content.nodes.length - 1;
          const isPlus = idx === 0;
          return (
            <Fragment key={node.title}>
              <div className="flex-1 min-w-0">
                <VisualNodeCard node={node} />
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="flex shrink-0 items-center justify-center py-1 xl:py-0 xl:px-0.5 text-[var(--term-accent)]"
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

      <SectionNote icon={<StarIcon className="h-4 w-4" />} className="mt-md">
        {content.bottomEmphasis}
      </SectionNote>
    </article>
  </section>
);

const VisualNodeCard = ({ node }: { node: VisualNode }) => {
  const t = toneTokens[node.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-1.5 rounded-lg border p-md',
        'shadow-[0_1px_0_var(--term-border)] transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.fill.bg,
        t.fill.border,
      )}
    >
      <h3 className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', t.fill.text)}>
        {node.title}
      </h3>
      {node.subtitle && (
        <code className="font-mono text-xxsm sm:text-xsm leading-snug text-[var(--term-muted)] break-all">
          {node.subtitle}
        </code>
      )}
      {node.signature && (
        <code className="font-mono text-xxsm leading-snug text-[var(--term-muted)] break-all">
          {node.signature}
        </code>
      )}
      <p className="mt-auto text-xsm leading-snug text-[var(--term-muted)] break-keep">
        {node.description}
      </p>
    </article>
  );
};
