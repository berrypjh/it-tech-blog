import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { FullFlowContent } from '../content';
import {
  ArrowDownIcon,
  ChevronRightIcon,
  ClockIcon,
  CpuIcon,
  HelpCircleIcon,
  ZapIcon,
} from '../icons';

type Props = { content: FullFlowContent['schedulerExec'] };

export const SchedulerExecutionSection = ({ content }: Props) => (
  <section aria-labelledby="heading-scheduler-exec">
    <NumberedSectionHeader
      id="scheduler-exec"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<CpuIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
        'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* top pipeline */}
      <ol className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr md:items-stretch gap-2 md:gap-1">
        {content.topPipeline.map((step, i) => {
          const isLast = i === content.topPipeline.length - 1;
          return (
            <li key={step} className="contents">
              <div className="flex md:flex-col items-stretch gap-1">
                <article
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 px-3 py-2 flex-1 min-w-0',
                    'border-blue-300/80 bg-blue-50/70 dark:border-blue-700/70 dark:bg-blue-950/30',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-700 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  <span className="font-mono text-xsm sm:text-sm font-bold text-blue-800 dark:text-blue-200 break-words leading-snug">
                    {step}
                  </span>
                </article>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="self-center inline-flex text-blue-500 dark:text-blue-400"
                  >
                    <span className="md:hidden">
                      <ArrowDownIcon className="h-4 w-4" />
                    </span>
                    <span className="hidden md:inline-flex">
                      <ChevronRightIcon className="h-4 w-4" />
                    </span>
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* decision badge */}
      <div className="flex items-center justify-center">
        <span
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1',
            'font-mono text-[10px] font-bold uppercase tracking-wider',
            'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
          )}
        >
          <HelpCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
          {content.decisionLabel}
        </span>
      </div>

      {/* 2-column comparison */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {/* sync */}
        <article
          className={cn(
            'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
            'border-blue-300/80 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/30',
            'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
            >
              <ZapIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-blue-800 dark:text-blue-200 break-keep">
              {content.sync.title}
            </h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.sync.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500"
                />
                {point}
              </li>
            ))}
          </ul>
        </article>

        {/* async */}
        <article
          className={cn(
            'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
            'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-teal-50/20',
            'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white dark:bg-violet-500"
            >
              <ClockIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-violet-800 dark:text-violet-200 break-keep">
              {content.async.title}
            </h3>
          </header>
          <ul className="flex flex-col gap-1.5">
            {content.async.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-2 text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500"
                />
                {point}
              </li>
            ))}
          </ul>
        </article>
      </div>
    </article>
  </section>
);
