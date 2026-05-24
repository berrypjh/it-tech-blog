import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent } from '../content';
import { GaugeIcon, LightbulbIcon, PauseCircleIcon, PlayCircleIcon, TimerIcon } from '../icons';

type Props = { content: RenderYieldingContent['shouldYield'] };

export const ShouldYieldToHostSection = ({ content }: Props) => (
  <section aria-labelledby="heading-shouldyield">
    <NumberedSectionHeader
      id="shouldyield"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GaugeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* concept + formula */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-teal-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <TimerIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md sm:text-lg font-bold text-blue-700 dark:text-blue-300 break-keep">
            {content.mainConcept}
          </h3>
        </header>

        <div
          className={cn(
            'overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 px-md py-md',
          )}
        >
          <code className="font-mono text-xsm sm:text-sm text-slate-100 break-all">
            <span className="text-pink-300">const </span>
            <span className="text-violet-300">timeElapsed</span>{' '}
            <span className="text-slate-300">=</span>{' '}
            <span className="text-cyan-300">getCurrentTime</span>
            <span className="text-slate-300">()</span> <span className="text-slate-300">-</span>{' '}
            <span className="text-amber-200">startTime</span>
            <span className="text-slate-300">;</span>
          </code>
        </div>

        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-3 py-2',
            'border-blue-300/80 bg-blue-50/60 text-blue-800 dark:border-blue-700/60 dark:bg-blue-950/30 dark:text-blue-100',
          )}
        >
          <LightbulbIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300"
          />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">{content.note}</p>
        </aside>
      </article>

      {/* condition cards */}
      <div className="flex h-full flex-col gap-3">
        {/* Continue */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30',
            'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
            >
              <PlayCircleIcon className="h-4 w-4" />
            </span>
            <h4 className="text-xsm sm:text-sm font-bold text-emerald-700 dark:text-emerald-300 break-keep">
              {content.continueCase.title}
            </h4>
          </header>
          <code className="font-mono text-[11px] sm:text-xsm font-bold text-emerald-700 dark:text-emerald-300 break-all">
            {content.continueCase.condition}
          </code>
          <ul className="flex flex-col gap-0.5">
            {content.continueCase.result.map((r) => (
              <li
                key={r}
                className="flex items-start gap-1.5 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-emerald-500"
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </article>

        {/* Yield */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
            'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60"
            >
              <PauseCircleIcon className="h-4 w-4" />
            </span>
            <h4 className="text-xsm sm:text-sm font-bold text-violet-700 dark:text-violet-300 break-keep">
              {content.yieldCase.title}
            </h4>
          </header>
          <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-300 break-all">
            {content.yieldCase.condition}
          </code>
          <ul className="flex flex-col gap-0.5">
            {content.yieldCase.result.map((r) => (
              <li
                key={r}
                className="flex items-start gap-1.5 text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-violet-500"
                />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>

    {/* formula bottom: just the bare formula text for screen readers and clarity */}
    <p className="sr-only">{content.formula}</p>
  </section>
);
