import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { FullFlowContent, ScenarioId } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  ClockIcon,
  GitMergeIcon,
  MousePointerClickIcon,
  RepeatIcon,
  RouteIcon,
} from '../icons';

type Props = { content: FullFlowContent['hero'] };

const sourceAccent: Record<
  ScenarioId,
  { tile: string; chip: string; dot: string; icon: typeof MousePointerClickIcon }
> = {
  click: {
    tile: 'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/40 dark:via-[var(--term-bg)] dark:to-blue-950/10',
    chip: 'bg-blue-600 text-white dark:bg-blue-500',
    dot: 'bg-blue-500',
    icon: MousePointerClickIcon,
  },
  transition: {
    tile: 'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/30 dark:border-teal-700/70 dark:from-teal-950/40 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
    chip: 'bg-teal-600 text-white dark:bg-teal-500',
    dot: 'bg-teal-500',
    icon: RepeatIcon,
  },
  deferred: {
    tile: 'border-violet-300/80 bg-gradient-to-br from-violet-50/80 via-white to-indigo-50/30 dark:border-violet-700/70 dark:from-violet-950/40 dark:via-[var(--term-bg)] dark:to-indigo-950/10',
    chip: 'bg-violet-600 text-white dark:bg-violet-500',
    dot: 'bg-violet-500',
    icon: ClockIcon,
  },
};

export const SchedulerFullFlowHero = ({ content }: Props) => (
  <section aria-labelledby="hero-heading" className="relative">
    <TerminalPrompt
      command="cat"
      path="scheduler/full-flow-review.md"
      suffix={
        <span className="text-[var(--term-dim)]">
          {' // click + transition + deferred → render'}
        </span>
      }
    />

    <ul className="mt-md flex flex-wrap items-center gap-2">
      {content.badges.map((badge) => (
        <li
          key={badge.label}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
            'text-[10px] font-mono font-bold uppercase tracking-wider',
            badge.tone === 'blue' &&
              'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500',
            badge.tone === 'cyan' &&
              'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'block h-1.5 w-1.5 rounded-full',
              badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
            )}
          />
          {badge.label}
        </li>
      ))}
    </ul>

    <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
      {/* LEFT */}
      <div className="flex flex-col gap-md justify-center">
        <h1
          id="hero-heading"
          className={cn(
            'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
            'font-bold leading-[1.18] tracking-tight break-keep',
          )}
        >
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
        </h1>

        <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[44ch]">
          {content.subtitle}
        </p>

        <ol className="hidden lg:flex flex-wrap items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[var(--term-dim)]">
          {content.pipeline.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span>{step}</span>
              {i < content.pipeline.length - 1 && <span aria-hidden="true">→</span>}
            </li>
          ))}
        </ol>
      </div>

      {/* RIGHT: 3 sources → merge → pipeline → commit */}
      <div
        className={cn(
          'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.diagramTitle}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-full border bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800/60"
          >
            <RouteIcon className="h-3.5 w-3.5" />
          </span>
        </header>

        {/* 3 source cards */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {content.sourceCards.map((card) => {
            const a = sourceAccent[card.id];
            const Icon = a.icon;
            return (
              <li key={card.id}>
                <article
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 p-2.5',
                    'shadow-[0_2px_0_var(--term-border)]',
                    a.tile,
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
                      a.chip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[11px] sm:text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {card.label}
                  </span>
                </article>
              </li>
            );
          })}
        </ul>

        {/* merge bridge */}
        <div className="flex flex-col items-center gap-1">
          <div
            aria-hidden="true"
            className="grid grid-cols-3 w-full max-w-md h-4 items-end justify-items-center"
          >
            <span className="block w-px h-full border-l border-dashed border-blue-400/70" />
            <span className="block w-px h-full border-l border-dashed border-teal-400/70" />
            <span className="block w-px h-full border-l border-dashed border-violet-400/70" />
          </div>
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-0.5',
              'font-mono text-[10px] font-bold uppercase tracking-wider',
              'border-blue-300 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
            )}
          >
            <GitMergeIcon aria-hidden="true" className="h-3 w-3" />
            {content.mergeLabel}
          </span>
        </div>

        {/* pipeline stack */}
        <ol className="flex flex-col gap-1.5">
          {content.pipeline.map((step, i) => {
            const isLast = i === content.pipeline.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-lg border-2 px-3 py-1.5',
                    'border-blue-200/80 bg-blue-50/60 dark:border-blue-800/60 dark:bg-blue-950/20',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[11px] sm:text-xsm font-medium text-[var(--term-fg)] break-keep">
                    {step}
                  </span>
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-2.5 my-0.5 inline-block w-px h-2 border-l border-dashed border-blue-300 dark:border-blue-700/70"
                  />
                )}
              </li>
            );
          })}
        </ol>

        {/* commit card */}
        <span aria-hidden="true" className="self-center inline-flex">
          <ArrowDownIcon className="h-4 w-4 text-blue-500 dark:text-blue-400" />
        </span>
        <article
          className={cn(
            'flex items-center justify-between gap-2 rounded-xl border-2 p-3',
            'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/30',
            'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span className="text-sm font-bold text-emerald-800 dark:text-emerald-200">
            {content.commitLabel}
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white dark:bg-emerald-500"
          >
            <CheckCircleIcon className="h-4 w-4" />
          </span>
        </article>
      </div>
    </div>
  </section>
);
