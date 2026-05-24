import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { BeginWorkContent } from '../content';
import {
  ArrowDownIcon,
  ChevronDownIcon,
  FastForwardIcon,
  HelpCircleIcon,
  WorkflowIcon,
} from '../icons';

type Props = { content: BeginWorkContent['summary'] };

export const BeginWorkFlowSummary = ({ content }: Props) => (
  <section
    id="flow-summary"
    aria-labelledby="heading-flow-summary"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="flow-summary"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-violet-50/25',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <header className="mb-md flex flex-wrap items-center justify-between gap-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
          {'// bailout? → tag dispatch → reconcile'}
        </span>
        <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700/80 dark:text-sky-300/80 rounded-md border border-sky-200/70 dark:border-sky-800/60 px-2 py-0.5">
          whole flow
        </span>
      </header>

      <div className="flex flex-col items-center gap-2">
        {/* Start */}
        <article
          className={cn(
            'inline-flex w-full max-w-[420px] items-center justify-center rounded-2xl border-2 px-md py-3',
            'border-sky-300/80 bg-sky-50/60 text-sky-900',
            'dark:border-sky-700/70 dark:bg-sky-950/30 dark:text-sky-100',
            'shadow-[0_1px_0_var(--term-border)]',
          )}
        >
          <span className="text-xsm sm:text-sm font-bold leading-tight text-center break-keep">
            {content.start}
          </span>
        </article>

        <ChevronDownIcon
          aria-hidden="true"
          className="h-5 w-5 text-violet-500/80 dark:text-violet-300/80"
        />

        {/* Decision diamond */}
        <div className="relative flex h-24 w-[min(280px,100%)] items-center justify-center">
          <span
            aria-hidden="true"
            className={cn(
              'absolute inset-0 m-auto rotate-45',
              'h-[80%] w-[80%] rounded-xl border-2',
              'border-violet-400/80 bg-gradient-to-br from-sky-100 to-violet-100',
              'dark:border-violet-600/70 dark:from-sky-950/40 dark:to-violet-950/40',
              'shadow-[0_1px_0_var(--term-border)]',
            )}
          />
          <div className="relative flex flex-col items-center justify-center gap-1 text-center">
            <HelpCircleIcon
              aria-hidden="true"
              className="h-4 w-4 text-violet-700 dark:text-violet-200"
            />
            <span className="text-xsm sm:text-sm font-bold text-violet-900 dark:text-violet-100 break-keep">
              {content.decision}
            </span>
          </div>
        </div>

        {/* Two paths */}
        <div className="mt-2 grid w-full grid-cols-1 lg:grid-cols-2 gap-md">
          {/* Bailout path */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 border-dashed p-md',
              'border-violet-300/80 bg-violet-50/40 dark:border-violet-700/70 dark:bg-violet-950/20',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
                  'border-violet-300/70 bg-violet-100/70 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/60 font-bold',
                )}
              >
                <FastForwardIcon className="h-3 w-3" />
                yes
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300">
                bailout path
              </span>
            </header>
            <article
              className={cn(
                'inline-flex w-full items-center justify-center rounded-xl border px-md py-2',
                'border-violet-300/80 bg-white text-violet-900',
                'dark:border-violet-700/70 dark:bg-slate-950/40 dark:text-violet-100',
              )}
            >
              <code className="font-mono text-xsm sm:text-sm font-bold leading-tight text-center break-all">
                {content.bailout.title}
              </code>
            </article>
            <p className="text-[10px] sm:text-xsm leading-snug text-violet-900/80 dark:text-violet-100/80 text-center break-keep">
              {content.bailout.description}
            </p>
            <ArrowDownIcon
              aria-hidden="true"
              className="mx-auto h-4 w-4 text-violet-500/80 dark:text-violet-300/80"
            />
            <article
              className={cn(
                'inline-flex w-full items-center justify-center rounded-xl border px-md py-2',
                'border-violet-300/80 bg-violet-100/70 text-violet-900',
                'dark:border-violet-700/70 dark:bg-violet-950/50 dark:text-violet-100',
              )}
            >
              <span className="text-xsm sm:text-sm font-bold leading-tight text-center break-keep">
                {content.bailout.afterTitle}
              </span>
            </article>
          </article>

          {/* Normal path */}
          <article
            className={cn(
              'flex flex-col gap-2 rounded-2xl border-2 p-md',
              'border-sky-300/80 bg-sky-50/40 dark:border-sky-700/70 dark:bg-sky-950/20',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span
                className={cn(
                  'inline-flex items-center rounded-md border px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider',
                  'border-sky-300/70 bg-sky-100/70 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/60 font-bold',
                )}
              >
                no
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
                normal path
              </span>
            </header>
            <ol className="flex flex-col gap-1.5">
              {content.normalPath.map((step, idx) => {
                const isLast = idx === content.normalPath.length - 1;
                const isMono = step.title.includes('(') || step.title.includes('workInProgress');
                return (
                  <li key={step.title} className="flex flex-col items-stretch">
                    <article
                      className={cn(
                        'inline-flex w-full items-center justify-center rounded-xl border px-md py-2',
                        isLast
                          ? 'border-violet-300/80 bg-violet-100/70 text-violet-900 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100'
                          : 'border-sky-300/80 bg-white text-sky-900 dark:border-sky-700/70 dark:bg-slate-950/40 dark:text-sky-100',
                      )}
                    >
                      {isMono ? (
                        <code className="font-mono text-xsm sm:text-sm font-bold leading-tight text-center break-all">
                          {step.title}
                        </code>
                      ) : (
                        <span className="text-xsm sm:text-sm font-bold leading-tight text-center break-keep">
                          {step.title}
                        </span>
                      )}
                    </article>
                    {step.description && (
                      <span className="mt-1 text-[10px] font-mono uppercase tracking-wider text-violet-700 dark:text-violet-300 text-center">
                        {step.description}
                      </span>
                    )}
                    {idx < content.normalPath.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mx-auto my-1 inline-flex h-4 w-4 items-center justify-center text-sky-500/80 dark:text-sky-300/80"
                      >
                        <ArrowDownIcon className="h-4 w-4" />
                      </span>
                    )}
                  </li>
                );
              })}
            </ol>
          </article>
        </div>
      </div>
    </article>
  </section>
);
