import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, AtomIcon, BellRingIcon, GlobeIcon, TriangleAlertIcon } from '../icons';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['hydrationMismatch'] };

export const HydrationMismatchScenarioSection = ({ content }: Props) => (
  <section aria-labelledby="hydration-mismatch-heading" className="flex flex-col gap-md">
    <SectionHeader id="hydration-mismatch-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch">
      {/* server / client comparison */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-3',
            'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <GlobeIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.serverLabel}
            </span>
          </header>
          <code className="rounded-lg bg-slate-950 px-3 py-2 text-xsm font-mono font-bold text-blue-200">
            {content.serverValue}
          </code>
        </div>

        <div className="flex items-center justify-center gap-2">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
              'border-rose-300 bg-rose-50 text-rose-700 text-xsm font-bold',
              'dark:border-rose-700 dark:bg-rose-950/40 dark:text-rose-200',
            )}
          >
            <TriangleAlertIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.mismatchLabel}
          </span>
        </div>

        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-3',
            'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-violet-200 bg-violet-100 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/60 dark:text-violet-200"
            >
              <AtomIcon className="h-3.5 w-3.5" />
            </span>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
              {content.clientLabel}
            </span>
          </header>
          <code className="rounded-lg bg-slate-950 px-3 py-2 text-xsm font-mono font-bold text-violet-200">
            {content.clientValue}
          </code>
        </div>
      </article>

      {/* recovery flow */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/30 dark:border-teal-800/60 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-teal-700 dark:text-teal-200 break-keep">
          {content.flowTitle}
        </h3>
        <ol className="flex flex-col gap-1.5">
          {content.flow.map((step, i) => {
            const accent = domainAccent[step.domain];
            const isLast = i === content.flow.length - 1;
            return (
              <li key={step.label} className="flex flex-col gap-0.5">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border-2 px-3 py-2',
                    accent.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-5 w-5 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                      accent.solidBg,
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className={cn('text-xsm font-mono font-bold break-keep', accent.text)}>
                    {step.label}
                  </span>
                </div>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3 w-3 ml-3 rotate-90 text-teal-400 dark:text-teal-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
        <p
          className={cn(
            'mt-auto rounded-xl border p-3 text-xsm text-[var(--term-fg)] break-keep',
            'border-teal-200 bg-white/60 dark:border-teal-800/60 dark:bg-teal-950/40',
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-teal-700 dark:text-teal-300 font-bold mr-1">
            <BellRingIcon className="h-3.5 w-3.5" aria-hidden="true" />
            note ·
          </span>
          {content.note}
        </p>
      </article>
    </div>
  </section>
);
