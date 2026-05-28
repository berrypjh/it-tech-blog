import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { FlowBlock, PhaseDetectionContent } from '../content';
import { ArrowDownIcon, MousePointerClickIcon, RouteIcon } from '../icons';
import { getPhaseClasses, PhaseBadge } from '../PhaseBadge';

type Props = { content: PhaseDetectionContent['updateFlow'] };

export const UpdateFlowSection = ({ content }: Props) => {
  return (
    <section id="section-update-flow" aria-labelledby="heading-update-flow" className="space-y-lg">
      <SectionHeader
        id="update-flow"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <ol className="flex flex-col gap-0">
          {/* setState start */}
          <li>
            <div
              className={cn(
                'flex items-center gap-3 rounded-xl border-2 px-3 py-3',
                'border-amber-300 bg-amber-50',
                'dark:border-amber-700/70 dark:bg-amber-950/30',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 items-center justify-center rounded-md',
                  'border-2 border-amber-400 bg-white text-amber-700',
                  'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
                )}
              >
                <MousePointerClickIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-800 dark:text-amber-200">
                  start
                </span>
                <code className="font-mono text-md font-bold text-[var(--term-fg)]">
                  {content.flowStart}
                </code>
              </div>
            </div>
          </li>

          {content.blocks.map((block, i) => (
            <Fragment key={block.phase}>
              <li>
                <span aria-hidden="true" className="flex items-center justify-center py-2">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full border border-blue-300 bg-white text-blue-600 dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-300">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                </span>
              </li>
              <li>
                <FlowBlockCard block={block} index={i + 1} />
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
};

const FlowBlockCard = ({ block, index }: { block: FlowBlock; index: number }) => {
  const t = getPhaseClasses(block.phase);
  return (
    <article
      className={cn(
        'group rounded-xl border-2 p-md',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'shadow-[0_2px_0_var(--term-border)]',
        'transition-all motion-safe:hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2 mb-sm">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-7 w-7 items-center justify-center rounded-full border-2',
              t.border,
              t.chip,
              'font-mono text-[11px] font-bold tabular-nums',
            )}
          >
            {index}
          </span>
          <PhaseBadge phase={block.phase} size="md" strong />
        </div>
      </header>

      <ul className="flex flex-wrap gap-1.5">
        {block.functions.map((fn) => (
          <li key={fn}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border-2 px-2 py-0.5',
                t.border,
                'bg-white dark:bg-[var(--term-bg)]',
                t.text,
                'font-mono text-[11px] font-bold',
              )}
            >
              {fn}
            </code>
          </li>
        ))}
      </ul>

      <p
        className={cn(
          'mt-md text-xsm leading-relaxed break-keep pt-sm border-t border-dashed',
          'border-[var(--term-border)]',
          'text-[var(--term-muted)]',
        )}
      >
        {block.note}
      </p>
    </article>
  );
};
