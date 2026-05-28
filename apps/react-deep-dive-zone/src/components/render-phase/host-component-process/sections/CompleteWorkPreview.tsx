import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { CompleteWorkFlowNode, HostComponentContent } from '../content';
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ChevronDownIcon,
  LightbulbIcon,
  SparklesIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: HostComponentContent['completeWork'] };

export const CompleteWorkPreview = ({ content }: Props) => (
  <section
    id="complete-work-preview"
    aria-labelledby="heading-complete-work-preview"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="complete-work-preview"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Left: explanation card */}
      <article
        className={cn(
          'flex items-start gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-amber-200/80 bg-amber-50/70',
          'dark:border-amber-800/70 dark:bg-amber-950/40',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border',
            'bg-amber-100 text-amber-700 border-amber-200/80',
            'dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
          )}
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-amber-900 dark:text-amber-100 font-bold break-keep">
          {content.description}
        </p>
      </article>

      {/* Center: flow */}
      <article
        className={cn(
          'flex flex-col gap-2 rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {'// down → ... → up'}
          </span>
          <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
            two-way work
          </span>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.flow.map((node, idx) => (
            <li key={node.title} className="flex flex-col items-stretch">
              <FlowNode node={node} />
              {idx < content.flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className={cn(
                    'mx-auto my-1 flex h-4 items-center justify-center',
                    content.flow[idx + 1].direction === 'up'
                      ? 'text-violet-500/80 dark:text-violet-300/80'
                      : 'text-teal-500/80 dark:text-teal-300/80',
                  )}
                >
                  {content.flow[idx + 1].direction === 'up' ? (
                    <ArrowUpIcon className="h-4 w-4" />
                  ) : (
                    <ChevronDownIcon className="h-4 w-4" />
                  )}
                </span>
              )}
            </li>
          ))}
        </ol>
      </article>

      {/* Right: work items */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-violet-300/80 bg-violet-50/40',
          'dark:border-violet-700/70 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
        aria-labelledby="completework-card-title"
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
              'bg-violet-100 text-violet-700 border-violet-200/80',
              'dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
            )}
          >
            <SparklesIcon className="h-5 w-5" />
          </span>
          <h3
            id="completework-card-title"
            className="text-sm sm:text-md font-bold text-violet-800 dark:text-violet-100 break-keep"
          >
            {content.workCardTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.workItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xsm sm:text-sm leading-snug text-violet-900 dark:text-violet-100 break-keep"
            >
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);

const palette = {
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/60 dark:bg-sky-950/25',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    text: 'text-sky-800 dark:text-sky-100',
  },
  teal: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/60 dark:bg-teal-950/25',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-800 dark:text-teal-100',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/60 dark:bg-violet-950/25',
    chip: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-800 dark:text-violet-100',
  },
} as const;

const FlowNode = ({ node }: { node: CompleteWorkFlowNode }) => {
  const p = palette[node.tone];
  const Arrow =
    node.direction === 'up'
      ? ArrowUpIcon
      : node.direction === 'down'
        ? ArrowDownIcon
        : ChevronDownIcon;
  return (
    <article
      className={cn(
        'grid grid-cols-[auto_minmax(0,_1fr)] items-center gap-2 rounded-xl border-2 p-sm sm:p-md',
        p.border,
        p.bg,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className={cn('inline-flex h-9 w-9 items-center justify-center rounded-lg border', p.chip)}
      >
        <Arrow className="h-4 w-4" />
      </span>
      <div className="flex flex-col gap-0.5 min-w-0">
        <span className={cn('text-xsm sm:text-sm font-bold leading-tight break-keep', p.text)}>
          {node.title}
        </span>
        <span className="text-[10px] leading-snug text-[var(--term-muted)] break-keep">
          {node.description}
        </span>
      </div>
    </article>
  );
};
