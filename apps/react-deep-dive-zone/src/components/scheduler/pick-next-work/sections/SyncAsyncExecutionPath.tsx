import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootSchedulerContent } from '../content';
import { ArrowDownIcon, ClockIcon, GitForkIcon, HelpCircleIcon, ZapIcon } from '../icons';

type Props = { content: RootSchedulerContent['syncAsync'] };

const FlowList = ({
  steps,
  accent,
}: {
  steps: { label: string; isCode?: boolean }[];
  accent: 'blue' | 'teal';
}) => (
  <ol className="flex flex-col gap-1.5">
    {steps.map((s, i) => {
      const isLast = i === steps.length - 1;
      return (
        <li key={s.label} className="flex flex-col">
          <div
            className={cn(
              'flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
              'border-[var(--term-border)] bg-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white text-[10px] font-mono font-bold tabular-nums',
                accent === 'blue' ? 'bg-blue-600 dark:bg-blue-500' : 'bg-teal-600 dark:bg-teal-500',
              )}
            >
              {i + 1}
            </span>
            {s.isCode ? (
              <code
                className={cn(
                  'font-mono text-[11px] sm:text-xsm font-bold break-all',
                  accent === 'blue'
                    ? 'text-blue-700 dark:text-blue-300'
                    : 'text-teal-700 dark:text-teal-300',
                )}
              >
                {s.label}
              </code>
            ) : (
              <span className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">
                {s.label}
              </span>
            )}
          </div>
          {!isLast && (
            <span
              aria-hidden="true"
              className="ml-2.5 my-0.5 inline-block w-px h-2 border-l border-dashed border-[var(--term-border)]"
            />
          )}
        </li>
      );
    })}
  </ol>
);

export const SyncAsyncExecutionPath = ({ content }: Props) => (
  <section aria-labelledby="heading-sync-async">
    <NumberedSectionHeader
      id="sync-async"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GitForkIcon className="h-5 w-5" />}
    />

    {/* Branch question card */}
    <div className="mb-md flex justify-center">
      <div
        className={cn(
          'inline-flex items-center gap-2 rounded-2xl border-2 px-md py-2',
          'border-blue-300 bg-white text-blue-800 shadow-[0_3px_0_var(--term-border)]',
          'dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-500"
        >
          <HelpCircleIcon className="h-4 w-4" />
        </span>
        <code className="font-mono text-xsm sm:text-sm font-bold">{content.branchQuestion}</code>
      </div>
    </div>

    <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-md items-stretch">
      {/* SYNC */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30',
          'dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <ZapIcon className="h-5 w-5" />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-blue-300/80 bg-blue-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200">
            Yes
          </span>
        </header>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-md sm:text-lg font-bold text-blue-700 dark:text-blue-300 break-keep">
            {content.sync.title}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.sync.subtitle}
          </p>
        </div>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.sync.description}
        </p>
        <FlowList steps={content.sync.flow} accent="blue" />
      </article>

      {/* center vs */}
      <div aria-hidden="true" className="hidden lg:flex items-center justify-center self-center">
        <span
          className={cn(
            'inline-flex h-14 w-14 items-center justify-center rounded-full',
            'border-2 border-blue-300 bg-white text-blue-700 font-mono font-bold text-sm',
            'shadow-[0_3px_0_var(--term-border)]',
            'dark:border-blue-700/70 dark:bg-slate-950/40 dark:text-blue-200',
          )}
        >
          VS
        </span>
      </div>
      <div className="lg:hidden flex items-center justify-center -my-2">
        <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-muted)]" />
      </div>

      {/* ASYNC */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/30',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center justify-between gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
          >
            <ClockIcon className="h-5 w-5" />
          </span>
          <span className="inline-flex items-center gap-1 rounded-full border border-teal-300/80 bg-teal-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200">
            No
          </span>
        </header>
        <div className="flex flex-col gap-0.5">
          <h3 className="text-md sm:text-lg font-bold text-teal-700 dark:text-teal-300 break-keep">
            {content.async.title}
          </h3>
          <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
            {content.async.subtitle}
          </p>
        </div>
        <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.async.description}
        </p>
        <FlowList steps={content.async.flow} accent="teal" />
      </article>
    </div>
  </section>
);
