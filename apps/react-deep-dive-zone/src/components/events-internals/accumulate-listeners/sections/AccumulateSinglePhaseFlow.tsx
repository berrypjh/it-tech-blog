import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ListenerCollectionContent, Tone } from '../content';
import { ArrowRightIcon, BoxIcon, LinkIcon, WorkflowIcon } from '../icons';

type Props = { content: ListenerCollectionContent['accumulate'] };

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/60 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/60 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/60 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet: 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/70 dark:bg-violet-950/30',
  blue: 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/60 dark:border-rose-700/70 dark:bg-rose-950/30',
};

const toneAccent: Record<Tone, string> = {
  sky: 'text-sky-700 dark:text-sky-300',
  cyan: 'text-cyan-700 dark:text-cyan-300',
  teal: 'text-teal-700 dark:text-teal-300',
  emerald: 'text-emerald-700 dark:text-emerald-300',
  violet: 'text-violet-700 dark:text-violet-300',
  blue: 'text-blue-700 dark:text-blue-300',
  amber: 'text-amber-700 dark:text-amber-300',
  rose: 'text-rose-700 dark:text-rose-300',
};

const toneNumber: Record<Tone, string> = {
  sky: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
  cyan: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
  teal: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  emerald: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
  violet: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  blue: 'bg-blue-500 text-white dark:bg-blue-400 dark:text-slate-900',
  amber: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
  rose: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
};

export const AccumulateSinglePhaseFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-accumulate">
    <NumberedSectionHeader
      id="accumulate"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-start">
      {/* LEFT: 5-step list */}
      <ol className="flex flex-col gap-2">
        {content.steps.map((step, i) => (
          <li
            key={step.title}
            className={cn(
              'group flex items-start gap-3 rounded-2xl border-2 p-md transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_1px_0_var(--term-border)]',
              toneCard[step.tone],
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full',
                'text-[11px] font-mono font-bold tabular-nums',
                toneNumber[step.tone],
              )}
            >
              {i + 1}
            </span>
            <div className="flex flex-col gap-0.5 min-w-0 flex-1">
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold break-keep',
                  toneAccent[step.tone],
                )}
              >
                {step.title}
              </code>
              <p className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                {step.body}
              </p>
            </div>
          </li>
        ))}
      </ol>

      {/* RIGHT: diagram + listeners */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-gradient-to-br from-blue-50/60 via-white to-violet-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
            {content.diagramTitle}
          </span>
        </header>

        <div className="grid grid-cols-[minmax(0,1.2fr)_auto_minmax(0,1fr)] items-center gap-3">
          {/* Fiber nodes */}
          <ul className="flex flex-col gap-2">
            {content.diagramNodes.map((node, i) => (
              <li
                key={node.name}
                style={{ marginLeft: `${i * 10}px` }}
                className={cn(
                  'flex items-center gap-2 rounded-xl border bg-white px-3 py-2',
                  'border-teal-200/70 dark:border-teal-800/60 dark:bg-slate-950/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200"
                >
                  <BoxIcon className="h-3.5 w-3.5" />
                </span>
                <code className="font-mono text-[11px] font-bold text-teal-700 dark:text-teal-200 break-all">
                  {node.name}
                </code>
              </li>
            ))}
          </ul>

          {/* Arrow between */}
          <span
            aria-hidden="true"
            className="self-center inline-flex h-9 w-9 items-center justify-center rounded-full bg-violet-500 text-white shadow-[0_2px_0_rgba(124,58,237,0.3)] dark:bg-violet-400 dark:text-slate-900"
          >
            <ArrowRightIcon className="h-4 w-4" />
          </span>

          {/* listeners[] */}
          <div
            className={cn(
              'flex flex-col gap-2 rounded-xl border-2 p-md',
              'border-violet-300/80 bg-white dark:border-violet-700/70 dark:bg-slate-950/40',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
              {content.listenersTitle}
            </span>
            <ul className="flex flex-col gap-1">
              {[0, 1].map((idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-1.5 rounded-md border border-violet-200/70 bg-violet-50/30 px-2 py-1 font-mono text-[10px] text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/20 dark:text-violet-200"
                >
                  <LinkIcon aria-hidden="true" className="h-3 w-3" />
                  <span>dispatchListener</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {content.notes.map((note) => (
            <aside
              key={note}
              className={cn(
                'rounded-xl border-2 p-md',
                'border-amber-200/80 bg-amber-50/50 dark:border-amber-800/60 dark:bg-amber-950/20',
              )}
            >
              <p className="text-[10px] sm:text-[11px] leading-snug text-amber-900 dark:text-amber-100 break-keep">
                {note}
              </p>
            </aside>
          ))}
        </div>
      </article>
    </div>
  </section>
);
