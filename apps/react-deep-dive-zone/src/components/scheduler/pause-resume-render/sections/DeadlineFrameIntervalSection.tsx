import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DeadlineMarker, RenderYieldingContent } from '../content';
import { ArrowDownIcon, ClockIcon, PauseCircleIcon, TimerResetIcon, ZapIcon } from '../icons';

type Props = { content: RenderYieldingContent['deadline'] };

const phaseDot: Record<DeadlineMarker['phase'], string> = {
  work: 'bg-blue-500 dark:bg-blue-400 border-blue-600 dark:border-blue-500',
  budget: 'bg-teal-500 dark:bg-teal-400 border-teal-600 dark:border-teal-500',
  overflow: 'bg-amber-500 dark:bg-amber-400 border-amber-600 dark:border-amber-500',
  yield: 'bg-violet-500 dark:bg-violet-400 border-violet-600 dark:border-violet-500',
};

const phaseText: Record<DeadlineMarker['phase'], string> = {
  work: 'text-blue-700 dark:text-blue-300',
  budget: 'text-teal-700 dark:text-teal-300',
  overflow: 'text-amber-700 dark:text-amber-300',
  yield: 'text-violet-700 dark:text-violet-300 font-bold',
};

const segmentBg: Record<DeadlineMarker['phase'], string> = {
  work: 'bg-blue-400/70 dark:bg-blue-500/70',
  budget: 'bg-teal-400/70 dark:bg-teal-500/70',
  overflow: 'bg-amber-400/70 dark:bg-amber-500/70',
  yield: 'bg-violet-400/70 dark:bg-violet-500/70',
};

export const DeadlineFrameIntervalSection = ({ content }: Props) => (
  <section aria-labelledby="heading-deadline">
    <NumberedSectionHeader
      id="deadline"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      description={content.description}
      icon={<TimerResetIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* legend */}
      <ul className="flex flex-wrap gap-2 text-[10px] font-mono uppercase tracking-wider">
        {(['work', 'budget', 'overflow', 'yield'] as DeadlineMarker['phase'][]).map((p) => (
          <li
            key={p}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
              p === 'work' &&
                'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
              p === 'budget' &&
                'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
              p === 'overflow' &&
                'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
              p === 'yield' &&
                'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
            )}
          >
            <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', phaseDot[p])} />
            {p === 'work' && 'frame work'}
            {p === 'budget' && 'frame budget'}
            {p === 'overflow' && 'interval exceeded'}
            {p === 'yield' && 'yield consider'}
          </li>
        ))}
      </ul>

      {/* progress bar with phase segments */}
      <div
        aria-hidden="true"
        className="grid grid-cols-4 h-7 rounded-full overflow-hidden border border-[var(--term-border)]"
      >
        <div className={cn('h-full', segmentBg.work)} />
        <div className={cn('h-full', segmentBg.budget)} />
        <div className={cn('h-full', segmentBg.overflow)} />
        <div className={cn('h-full', segmentBg.yield)} />
      </div>

      {/* threshold marker line */}
      <div aria-hidden="true" className="relative h-3">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-[var(--term-border)]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1 rounded-full border border-amber-300 bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-amber-800 dark:border-amber-700/70 dark:bg-slate-950/40 dark:text-amber-200">
          <PauseCircleIcon className="h-3 w-3" />
          deadline · frame interval
        </div>
      </div>

      {/* horizontal markers desktop */}
      <ol
        className="hidden md:grid items-start relative"
        style={{ gridTemplateColumns: `repeat(${content.markers.length}, minmax(0, 1fr))` }}
      >
        {content.markers.map((m, i) => (
          <li key={m.label} className="flex flex-col items-center gap-2 relative">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-5 w-5 items-center justify-center rounded-full border-2 z-10',
                phaseDot[m.phase],
              )}
            />
            {i < content.markers.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute left-1/2 top-2 h-1 w-full bg-[var(--term-border)]"
              />
            )}
            <span
              className={cn(
                'mt-2 text-center text-xsm font-bold leading-snug break-keep',
                phaseText[m.phase],
              )}
            >
              {m.label}
            </span>
          </li>
        ))}
      </ol>

      {/* mobile vertical timeline */}
      <ol className="md:hidden flex flex-col gap-3">
        {content.markers.map((m, i) => {
          const isLast = i === content.markers.length - 1;
          return (
            <li key={m.label} className="flex flex-col">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                    phaseDot[m.phase],
                  )}
                />
                <span
                  className={cn('text-xsm font-bold leading-tight break-keep', phaseText[m.phase])}
                >
                  {m.label}
                </span>
              </div>
              {!isLast && (
                <span
                  aria-hidden="true"
                  className="ml-2 my-1 inline-block h-3 w-0.5 bg-[var(--term-border)]"
                />
              )}
            </li>
          );
        })}
      </ol>

      {/* icon hints */}
      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-[var(--term-muted)]">
        <span className="inline-flex items-center gap-1.5">
          <ZapIcon aria-hidden="true" className="h-3.5 w-3.5 text-blue-600" />
          start
        </span>
        <ArrowDownIcon
          aria-hidden="true"
          className="hidden md:inline h-3.5 w-3.5 rotate-[-90deg]"
        />
        <span className="inline-flex items-center gap-1.5">
          yield consider
          <ClockIcon aria-hidden="true" className="h-3.5 w-3.5 text-violet-600" />
        </span>
      </div>
    </article>
  </section>
);
