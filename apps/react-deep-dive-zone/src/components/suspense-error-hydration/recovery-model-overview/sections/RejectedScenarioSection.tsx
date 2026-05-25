import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, SparklesIcon } from '../icons';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['rejected'] };

export const RejectedScenarioSection = ({ content }: Props) => (
  <section aria-labelledby="rejected-heading" className="flex flex-col gap-md">
    <SectionHeader id="rejected-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch">
      {/* description */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-rose-50/30 dark:border-rose-800/60 dark:bg-rose-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
            {content.situationLabel}
          </span>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{content.situation}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
            {content.judgementLabel}
          </span>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{content.judgement}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
            {content.recoveryLabel}
          </span>
          <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{content.recovery}</p>
        </div>
      </article>

      {/* flow + emphasis */}
      <div className="flex flex-col gap-md">
        <article
          className={cn(
            'rounded-2xl border-2 p-md',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <ol className="flex flex-wrap items-center gap-1.5">
            {content.flow.map((step, i) => {
              const accent = domainAccent[step.domain];
              return (
                <li key={step.label} className="flex items-center gap-1.5">
                  <span
                    className={cn(
                      'inline-flex items-center rounded-lg border bg-white px-2 py-1',
                      'dark:bg-[var(--term-bg)]',
                      'text-[11px] font-mono font-bold break-keep',
                      accent.border,
                      accent.text,
                    )}
                  >
                    {step.label}
                  </span>
                  {i < content.flow.length - 1 && (
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3 w-3 shrink-0 text-slate-400 dark:text-slate-500"
                    />
                  )}
                </li>
              );
            })}
          </ol>
        </article>

        <article
          className={cn(
            'flex items-start gap-2 rounded-2xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
          )}
        >
          <SparklesIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300"
          />
          <p className="text-xsm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.emphasis}
          </p>
        </article>
      </div>
    </div>
  </section>
);
