import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { RenderYieldingContent } from '../content';
import { ArrowRightIcon, GitBranchIcon, PauseCircleIcon, PlayCircleIcon } from '../icons';

type Props = { content: RenderYieldingContent['yieldMoment'] };

export const YieldConditionSection = ({ content }: Props) => (
  <section aria-labelledby="heading-yield-moment">
    <NumberedSectionHeader
      id="yield-moment"
      number={content.number}
      eyebrow={content.title}
      title={content.title}
      icon={<GitBranchIcon className="h-5 w-5" />}
    />

    <div className="flex flex-col gap-md">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
        {/* continue card */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30',
            'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60"
            >
              <PlayCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md sm:text-lg font-bold text-emerald-700 dark:text-emerald-300 break-keep">
              {content.continueCard.title}
            </h3>
          </header>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.continueCard.description}
          </p>
        </article>

        {/* yield card */}
        <article
          className={cn(
            'flex h-full flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
            'border-violet-300/80 bg-gradient-to-br from-violet-50/70 via-white to-blue-50/30',
            'dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60"
            >
              <PauseCircleIcon className="h-5 w-5" />
            </span>
            <h3 className="text-md sm:text-lg font-bold text-violet-700 dark:text-violet-300 break-keep">
              {content.yieldCard.title}
            </h3>
          </header>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.yieldCard.description}
          </p>
        </article>
      </div>

      {/* condition flow */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <p className="font-mono text-[10px] uppercase tracking-wider text-[var(--term-muted)]">
          condition flow
        </p>
        <ol className="flex flex-wrap items-center gap-2">
          {content.conditionFlow.map((step, i) => {
            const isLast = i === content.conditionFlow.length - 1;
            const isBreak = step === 'break';
            return (
              <li key={step} className="flex items-center gap-2">
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-1 font-mono text-[11px] sm:text-xsm font-semibold',
                    isBreak
                      ? 'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200 font-bold'
                      : 'border-blue-200/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
                  )}
                >
                  {step}
                </code>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-[var(--term-muted)] shrink-0"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
