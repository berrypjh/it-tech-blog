import { cn } from '@it-tech-blog/utils';

import type { PluginEventSystemContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  BoxesIcon,
  DatabaseIcon,
  LayersIcon,
  MousePointerClickIcon,
  PuzzleIcon,
} from '../icons';
import { SectionFrame } from '../SectionFrame';
import { toneAccent, toneCard, toneIconBox, toneNumber } from '../styles';

type Props = { content: PluginEventSystemContent['queue'] };

const flowIcons = [MousePointerClickIcon, PuzzleIcon, LayersIcon, BoxesIcon];

export const DispatchQueueCreation = ({ content }: Props) => (
  <SectionFrame
    id="queue"
    sectionNumber={content.sectionNumber}
    title={content.title}
    icon={<DatabaseIcon className="h-5 w-5" />}
  >
    <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md items-start">
      {/* LEFT: 4-step horizontal flow */}
      <ol className={cn('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 sm:grid-cols-2')}>
        {content.flow.map((step, i) => {
          const isLast = i === content.flow.length - 1;
          const Icon = flowIcons[i] ?? MousePointerClickIcon;
          return (
            <li
              key={step.title}
              className={cn(
                'group relative flex flex-col gap-2 rounded-2xl border-2 p-md transition-all',
                'hover:-translate-y-0.5 motion-reduce:transform-none',
                'shadow-[0_1px_0_var(--term-border)]',
                toneCard[step.tone],
              )}
            >
              <div className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full',
                    'text-[10px] font-mono font-bold tabular-nums',
                    toneNumber[step.tone],
                  )}
                >
                  {i + 1}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                    toneIconBox[step.tone],
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold leading-tight break-keep',
                  toneAccent[step.tone],
                )}
              >
                {step.title}
              </code>
              <p className="text-[10px] sm:text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {step.description}
              </p>
              {step.example && (
                <code className="mt-auto inline-flex w-fit items-center rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]/60 px-2 py-0.5 font-mono text-[10px] text-[var(--term-fg)] break-all">
                  {step.example}
                </code>
              )}

              {!isLast && i % 2 === 0 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline-flex absolute -right-3.5 top-1/2 z-10 -translate-y-1/2 h-6 w-6 items-center justify-center rounded-full border border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-muted)] shadow-[0_1px_0_var(--term-border)]"
                >
                  <ArrowRightIcon className="h-3 w-3" />
                </span>
              )}
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="sm:hidden flex justify-center text-[var(--term-muted)] mt-1"
                >
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          );
        })}
      </ol>

      {/* RIGHT: queue entry visualization */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md',
          'border-violet-300/80 bg-gradient-to-br from-violet-50/60 via-white to-blue-50/30',
          'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500 text-white shadow-[0_2px_0_rgba(124,58,237,0.3)] dark:bg-violet-400 dark:text-slate-900"
          >
            <DatabaseIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {content.entry.title}
          </span>
        </header>

        {/* dispatchQueue array index pills */}
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            dispatchQueue
          </span>
          <ul className="mt-1 flex flex-wrap items-center gap-1.5">
            {content.indexLabels.map((idx) => (
              <li
                key={idx}
                className="inline-flex h-7 min-w-[28px] items-center justify-center rounded-md border-2 border-violet-300/70 bg-white px-2 font-mono text-[11px] font-bold text-violet-700 shadow-sm dark:border-violet-700/60 dark:bg-slate-950/40 dark:text-violet-200"
              >
                [{idx}]
              </li>
            ))}
          </ul>
        </div>

        {/* Entry structure */}
        <div className="rounded-xl border border-violet-200/70 bg-white p-md dark:border-violet-800/60 dark:bg-slate-950/40">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            entry
          </span>
          <ul className="mt-1 flex flex-col gap-1">
            {content.entry.fields.map((field) => (
              <li
                key={field}
                className="flex items-center gap-2 text-[11px] sm:text-xsm font-mono text-[var(--term-fg)]"
              >
                <span aria-hidden="true" className="text-violet-500 dark:text-violet-300">
                  →
                </span>
                <code className="break-all">{field}</code>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  </SectionFrame>
);
