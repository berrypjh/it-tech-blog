import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { CircularStage, SetStateFlowContent } from '../content';
import { ArrowRightIcon, NetworkIcon, RotateCwIcon } from '../icons';

type Props = { content: SetStateFlowContent['queueCircular'] };

const StageCard = ({ stage }: { stage: CircularStage }) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-2xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5 hover:border-violet-300/70 dark:hover:border-violet-700/70',
    )}
  >
    <header className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-violet-500 text-white text-[11px] font-mono font-bold tabular-nums dark:bg-violet-400 dark:text-slate-900"
      >
        {stage.number}
      </span>
      <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
        {stage.title}
      </h3>
    </header>

    <code className="rounded-md border border-[var(--term-border)] bg-[var(--term-border)]/15 px-2 py-1 font-mono text-[10px] sm:text-[11px] text-[var(--term-muted)] break-all">
      {stage.caption}
    </code>

    {/* Diagram */}
    <div className="flex-1 flex items-center justify-center rounded-xl border border-[var(--term-border)] bg-gradient-to-br from-violet-50/40 to-white p-md dark:from-violet-950/30 dark:to-[var(--term-bg)] min-h-[160px]">
      {stage.nodes[0] === 'null' ? (
        <div className="flex flex-col items-center gap-2">
          <code className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            queue.pending
          </code>
          <ArrowRightIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-muted)]" />
          <code className="inline-flex items-center rounded-lg border-2 border-amber-300/80 bg-amber-50 px-3 py-1.5 font-mono text-xsm font-bold text-amber-700 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200">
            null
          </code>
        </div>
      ) : stage.selfLoop ? (
        <div className="flex flex-col items-center gap-2 relative">
          <code className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            queue.pending
          </code>
          <div className="relative">
            <code className="inline-flex items-center rounded-lg border-2 border-violet-300/80 bg-violet-50 px-3 py-1.5 font-mono text-xsm font-bold text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200">
              {stage.nodes[0]}
            </code>
            <span
              aria-hidden="true"
              className="absolute -right-9 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-cyan-400/70 bg-white dark:bg-slate-950/60"
            >
              <RotateCwIcon className="h-4 w-4 text-cyan-500 dark:text-cyan-300" />
            </span>
          </div>
          <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-300 mt-2">
            ↻ self
          </span>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3 w-full">
          <code className="font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
            queue.pending
          </code>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            {stage.nodes.map((node, i) => {
              const isLast = i === stage.nodes.length - 1;
              return (
                <span key={node} className="inline-flex items-center gap-1.5">
                  <code
                    className={cn(
                      'inline-flex items-center rounded-lg border-2 px-2.5 py-1.5 font-mono text-[11px] font-bold break-all',
                      isLast
                        ? 'border-violet-400 bg-violet-100 text-violet-800 dark:border-violet-600 dark:bg-violet-950/60 dark:text-violet-100'
                        : 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
                    )}
                  >
                    {node}
                    {isLast && <span className="ml-1 text-[9px] font-mono opacity-80">(last)</span>}
                  </code>
                  {!isLast && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-[var(--term-muted)]"
                    />
                  )}
                </span>
              );
            })}
          </div>
          {/* circular indicator */}
          <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300">
            <RotateCwIcon aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="text-[10px] font-mono">
              {stage.nodes[stage.nodes.length - 1]} → {stage.nodes[0]}
            </span>
          </div>
        </div>
      )}
    </div>
  </article>
);

export const QueuePendingCircularList = ({ content }: Props) => (
  <section
    aria-labelledby="heading-queue-circular"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="queue-circular"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<NetworkIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 md:grid-cols-3 gap-md items-stretch">
      {content.stages.map((stage) => (
        <li key={stage.number} className="flex">
          <div className="flex-1">
            <StageCard stage={stage} />
          </div>
        </li>
      ))}
    </ol>
  </section>
);
