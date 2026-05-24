import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import { toneTokens } from '../../../start/_shared/tones';
import type { EnsureRootScheduledContent } from '../content';
import { ArrowRightIcon, ListChecksIcon, NetworkIcon, WorkflowIcon } from '../icons';

type Props = { content: EnsureRootScheduledContent['visualization'] };

export const RootScheduleVisualizationSection = ({ content }: Props) => (
  <section
    id="visualization"
    aria-labelledby="heading-visualization"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="visualization"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<WorkflowIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-sky-50/25 to-emerald-50/15',
        'dark:from-[var(--term-bg)] dark:via-sky-950/15 dark:to-emerald-950/10',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)] gap-md lg:gap-sm items-stretch">
        {/* Left: Roots */}
        <div className="flex flex-col gap-sm">
          <span className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
            {content.leftTitle}
          </span>
          <ul className="flex flex-col gap-2">
            {content.leftRoots.map((root) => {
              const t = toneTokens[root.tone];
              return (
                <li
                  key={root.id}
                  className={cn(
                    'flex items-center gap-2 rounded-xl border-2 bg-[var(--term-bg)] px-3 py-2',
                    t.border,
                    'shadow-[0_1px_0_var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                      t.chip,
                    )}
                  >
                    <NetworkIcon className="h-4 w-4" />
                  </span>
                  <span className={cn('text-xsm sm:text-sm font-bold font-mono', t.text)}>
                    {root.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn('ml-auto block h-2 w-2 rounded-full', t.dot)}
                  />
                </li>
              );
            })}
          </ul>
          <p className="text-xxsm text-[var(--term-muted)] leading-snug break-keep">
            {content.leftBody}
          </p>
        </div>

        {/* Middle: register arrow */}
        <div className="flex lg:flex-col items-center justify-center gap-2 px-1">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center rounded-full border-2',
              'h-12 w-12',
              'border-sky-300/80 bg-white text-sky-600',
              'dark:border-sky-700/70 dark:bg-slate-950/60 dark:text-sky-300',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <ArrowRightIcon className="h-5 w-5 rotate-90 lg:rotate-0" />
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-700 dark:text-sky-200">
            {content.middleLabel}
          </span>
        </div>

        {/* Right: Queue */}
        <div
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            'border-sky-800 bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-slate-100',
            'shadow-[0_18px_40px_-20px_rgba(2,6,23,0.55)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-400/10 text-sky-200"
              >
                <ListChecksIcon className="h-4 w-4" />
              </span>
              <span className="text-xsm sm:text-sm font-bold text-white">{content.rightTitle}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-sky-200/80">
              FIFO
            </span>
          </header>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-md border px-2.5 py-1 font-mono text-sm sm:text-md font-bold',
              'border-sky-400/40 bg-white/10 text-white',
            )}
          >
            {content.rightQueue}
          </code>
          <p className="text-xxsm text-sky-200/85 leading-snug break-keep">{content.rightBody}</p>
        </div>
      </div>
    </article>
  </section>
);
