import { cn } from '@it-tech-blog/utils';

import {
  axisCardBorder,
  axisIconBox,
  axisNumberBadge,
  axisPill,
  axisTextStrong,
} from '../../_shared/axisAccent';
import type { ThreePriorityAxesContent } from '../content';
import { ClockIcon, LayersIcon, LightbulbIcon, ZapIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['detail'] };

const KIND_PILL: Record<string, string> = {
  Discrete:
    'border-blue-300/80 bg-blue-100 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  Continuous:
    'border-cyan-300/80 bg-cyan-100 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  Default:
    'border-amber-300/80 bg-amber-100 text-amber-900 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
};

const SchedulerName: Record<string, string> = {
  Immediate: 'text-rose-700 dark:text-rose-300',
  UserBlocking: 'text-amber-700 dark:text-amber-300',
  Normal: 'text-violet-700 dark:text-violet-300',
  Low: 'text-sky-700 dark:text-sky-300',
};

export const PriorityAxisDetailGrid = ({ content }: Props) => (
  <section aria-label="priority-axis-details">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-md items-stretch">
      {/* Event Priority */}
      <article
        aria-labelledby="heading-event-priority"
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)] transition-colors',
          axisCardBorder.blue,
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
              'text-sm font-mono font-bold tabular-nums',
              axisNumberBadge.blue,
            )}
          >
            {content.event.number}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
              axisIconBox.blue,
            )}
          >
            <ZapIcon className="h-4 w-4" />
          </span>
          <h2
            id="heading-event-priority"
            className={cn(
              'text-sm sm:text-md font-bold leading-tight break-keep',
              axisTextStrong.blue,
            )}
          >
            {content.event.title}
          </h2>
        </header>

        <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.event.description}
        </p>

        <ul className="flex flex-col divide-y divide-blue-100 dark:divide-blue-900/40 rounded-xl border border-blue-100 dark:border-blue-900/40 overflow-hidden bg-white/40 dark:bg-slate-950/30">
          {content.event.rows.map((row) => (
            <li
              key={row.event}
              className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.2fr_auto_1.4fr] items-center gap-2 px-3 py-2.5"
            >
              <code className="font-mono text-xsm sm:text-sm text-[var(--term-fg)] break-all">
                {row.event}
              </code>
              <span
                className={cn(
                  'inline-flex items-center self-start rounded-full border px-2 py-0.5',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                  KIND_PILL[row.kind],
                )}
              >
                {row.kind}
              </span>
              <p className="col-span-2 sm:col-span-1 text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {row.description}
              </p>
            </li>
          ))}
        </ul>
      </article>

      {/* Lane */}
      <article
        aria-labelledby="heading-lane"
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)] transition-colors',
          axisCardBorder.teal,
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
              'text-sm font-mono font-bold tabular-nums',
              axisNumberBadge.teal,
            )}
          >
            {content.lane.number}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
              axisIconBox.teal,
            )}
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <h2
            id="heading-lane"
            className={cn(
              'text-sm sm:text-md font-bold leading-tight break-keep',
              axisTextStrong.teal,
            )}
          >
            {content.lane.title}
          </h2>
        </header>

        <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.lane.description}
        </p>

        <ul className="flex flex-col gap-2">
          {content.lane.rows.map((row, i) => (
            <li
              key={row.name}
              className={cn(
                'flex items-center gap-3 rounded-xl border-2 p-3',
                'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
              )}
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums',
                  axisNumberBadge.teal,
                )}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                <code
                  className={cn(
                    'font-mono text-xsm sm:text-sm font-bold break-keep',
                    axisTextStrong.teal,
                  )}
                >
                  {row.name}
                </code>
                <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                  {row.description}
                </p>
              </div>
              <code
                className={cn(
                  'inline-flex shrink-0 items-center rounded-md border px-2 py-1 font-mono text-[10px] sm:text-[11px]',
                  axisPill.teal,
                )}
              >
                {row.bitmask}
              </code>
            </li>
          ))}
        </ul>

        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-md py-3',
            'border-teal-300/80 bg-teal-50/60 text-teal-800',
            'dark:border-teal-700/60 dark:bg-teal-950/30 dark:text-teal-100',
          )}
        >
          <LightbulbIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">{content.lane.note}</p>
        </aside>
      </article>

      {/* Scheduler Priority */}
      <article
        aria-labelledby="heading-scheduler-priority"
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'shadow-[0_2px_0_var(--term-border)] transition-colors',
          axisCardBorder.violet,
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full',
              'text-sm font-mono font-bold tabular-nums',
              axisNumberBadge.violet,
            )}
          >
            {content.scheduler.number}
          </span>
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
              axisIconBox.violet,
            )}
          >
            <ClockIcon className="h-4 w-4" />
          </span>
          <h2
            id="heading-scheduler-priority"
            className={cn(
              'text-sm sm:text-md font-bold leading-tight break-keep',
              axisTextStrong.violet,
            )}
          >
            {content.scheduler.title}
          </h2>
        </header>

        <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {content.scheduler.description}
        </p>

        <ol className="flex flex-col divide-y divide-violet-100 dark:divide-violet-900/40 rounded-xl border border-violet-100 dark:border-violet-900/40 overflow-hidden bg-white/40 dark:bg-slate-950/30">
          {content.scheduler.rows.map((row, i) => (
            <li key={row.name} className="flex items-center gap-3 px-3 py-2.5">
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-mono font-bold tabular-nums border border-violet-200 text-violet-700 bg-violet-50 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200"
              >
                {i + 1}
              </span>
              <code
                className={cn(
                  'font-mono text-xsm sm:text-sm font-bold whitespace-nowrap',
                  SchedulerName[row.name] ?? axisTextStrong.violet,
                )}
              >
                {row.name}
              </code>
              <p className="ml-auto text-right text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                {row.description}
              </p>
            </li>
          ))}
        </ol>

        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-md py-3',
            'border-violet-300/80 bg-violet-50/60 text-violet-800',
            'dark:border-violet-700/60 dark:bg-violet-950/30 dark:text-violet-100',
          )}
        >
          <LightbulbIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
            {content.scheduler.note}
          </p>
        </aside>
      </article>
    </div>
  </section>
);
