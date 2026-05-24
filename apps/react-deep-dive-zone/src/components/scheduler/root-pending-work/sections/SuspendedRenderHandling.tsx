import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootPendingWorkContent } from '../content';
import {
  ArrowRightIcon,
  LightbulbIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  RefreshIcon,
  RotateCcwIcon,
  ZapIcon,
} from '../icons';

type Props = { content: RootPendingWorkContent['suspended'] };

export const SuspendedRenderHandling = ({ content }: Props) => (
  <section aria-labelledby="heading-suspended">
    <NumberedSectionHeader
      id="suspended"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<RefreshIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-md items-stretch">
      {/* Left description */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
          >
            <PauseCircleIcon className="h-5 w-5" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-teal-700 dark:text-teal-300 break-keep">
            Suspended → Fresh start
          </h3>
        </header>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.description}
        </p>

        <ul className="mt-auto flex flex-wrap gap-2">
          {['SuspendedOnData', 'SuspendedOnAction', 'fresh stack'].map((kw) => (
            <li key={kw}>
              <code
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-1 font-mono text-[10px] sm:text-[11px] font-semibold',
                  'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
                )}
              >
                {kw}
              </code>
            </li>
          ))}
        </ul>
      </article>

      {/* Right diagram */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
          {/* Suspended (left) */}
          <div
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-rose-300/80 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30',
              'dark:border-rose-700/70 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
              'opacity-90',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60"
              >
                <PauseCircleIcon className="h-4 w-4" />
              </span>
              <h4 className="text-xsm font-bold text-rose-700 dark:text-rose-300 break-keep">
                {content.leftTitle}
              </h4>
            </header>
            <code className="font-mono text-[11px] text-rose-700 dark:text-rose-300 line-through decoration-1 break-keep">
              {content.leftFlow}
            </code>
          </div>

          {/* Middle: new update */}
          <div className="flex flex-col items-center gap-2">
            <span
              aria-hidden="true"
              className="hidden md:inline-flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue-300 bg-white text-blue-700 shadow-[0_2px_0_var(--term-border)] dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200"
            >
              <ZapIcon className="h-4 w-4" />
            </span>
            <p className="text-center font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300 break-keep">
              {content.middleTitle}
            </p>
            <span
              aria-hidden="true"
              className="hidden md:inline-flex text-blue-500 dark:text-blue-400"
            >
              <ArrowRightIcon className="h-4 w-4" />
            </span>
          </div>

          {/* Fresh stack (right) */}
          <div
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-emerald-50/30',
              'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
              >
                <PlayCircleIcon className="h-4 w-4" />
              </span>
              <h4 className="text-xsm font-bold text-teal-700 dark:text-teal-300 break-keep">
                {content.rightTitle}
              </h4>
            </header>
            <code className="font-mono text-[11px] text-teal-700 dark:text-teal-300 break-keep">
              {content.rightFlow}
            </code>
          </div>
        </div>

        {/* Core point */}
        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-2xl border-2 p-md',
            'border-amber-300/80 bg-amber-50/60 text-amber-900',
            'dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-100',
          )}
        >
          <LightbulbIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-amber-600 dark:text-amber-300"
          />
          <div className="flex flex-col gap-1">
            <p className="font-mono text-[10px] sm:text-xsm font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
              {content.corePointTitle}
            </p>
            <p className="text-xsm leading-relaxed break-keep">{content.corePointBody}</p>
          </div>
          <RotateCcwIcon
            aria-hidden="true"
            className="hidden sm:block ml-auto h-5 w-5 text-amber-500 dark:text-amber-300"
          />
        </aside>
      </article>
    </div>
  </section>
);
