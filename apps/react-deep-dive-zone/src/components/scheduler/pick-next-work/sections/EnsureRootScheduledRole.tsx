import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RootSchedulerContent } from '../content';
import { ArrowDownIcon, ClockIcon, CogIcon, DatabaseIcon, LinkIcon, TimerIcon } from '../icons';

type Props = { content: RootSchedulerContent['ensure'] };

export const EnsureRootScheduledRole = ({ content }: Props) => (
  <section aria-labelledby="heading-ensure">
    <NumberedSectionHeader
      id="ensure"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<LinkIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* LEFT: 3-step flow */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
          >
            <CogIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
            {content.flowTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.flowSteps.map((step, i) => {
            const isLast = i === content.flowSteps.length - 1;
            return (
              <li key={step.title} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-start gap-3 rounded-xl border px-3 py-2.5',
                    'border-[var(--term-border)] bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white text-[10px] font-mono font-bold tabular-nums dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  <div className="flex flex-col min-w-0">
                    <h4 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                      {step.title}
                    </h4>
                    <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
                      {step.description}
                    </p>
                  </div>
                </div>
                {!isLast && (
                  <span aria-hidden="true" className="self-center my-0.5 text-[var(--term-muted)]">
                    <ArrowDownIcon className="h-3.5 w-3.5" />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* RIGHT: microtask flow */}
      <article
        className={cn(
          'flex h-full flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-blue-50/30',
          'dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60"
          >
            <TimerIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm sm:text-md font-bold text-teal-700 dark:text-teal-300 break-keep">
            {content.microTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.microSteps.map((step, i) => {
            const isLast = i === content.microSteps.length - 1;
            return (
              <li key={step.label} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 px-3 py-2',
                    i === content.microSteps.length - 1
                      ? 'border-blue-300/80 bg-blue-50/60 dark:border-blue-700/70 dark:bg-blue-950/30'
                      : 'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-white text-[11px] font-mono font-bold tabular-nums',
                      isLast ? 'bg-blue-600 dark:bg-blue-500' : 'bg-teal-600 dark:bg-teal-500',
                    )}
                  >
                    {i + 1}
                  </span>
                  {step.isCode ? (
                    <code className="font-mono text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-300 break-all">
                      {step.label}
                    </code>
                  ) : (
                    <span
                      className={cn(
                        'text-xsm sm:text-sm font-medium break-keep',
                        isLast
                          ? 'text-blue-700 dark:text-blue-300 font-bold'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {step.label}
                    </span>
                  )}
                  {isLast && (
                    <ClockIcon
                      aria-hidden="true"
                      className="ml-auto h-4 w-4 text-blue-600 dark:text-blue-300"
                    />
                  )}
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-3 my-0.5 inline-block w-px h-3 border-l border-dashed border-[var(--term-border)]"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <aside
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-3 py-2',
            'border-teal-300/80 bg-teal-50/60 text-teal-800 dark:border-teal-700/60 dark:bg-teal-950/30 dark:text-teal-100',
          )}
        >
          <DatabaseIcon aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
            현재 이벤트 처리가 끝난 직후 microtask로 root scheduling을 일괄 처리합니다.
          </p>
        </aside>
      </article>
    </div>
  </section>
);
