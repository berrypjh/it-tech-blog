import { cn } from '@it-tech-blog/utils';

import type { RecoveryModelOverviewContent } from '../content';
import { ArrowRightIcon, FileCodeIcon } from '../icons';
import { domainAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: RecoveryModelOverviewContent['pending'] };

export const PendingScenarioSection = ({ content }: Props) => (
  <section aria-labelledby="pending-heading" className="flex flex-col gap-md">
    <SectionHeader id="pending-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch">
      {/* description */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-violet-200/80 bg-violet-50/30 dark:border-violet-800/60 dark:bg-violet-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {content.situationLabel}
          </span>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{content.situation}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {content.judgementLabel}
          </span>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{content.judgement}</p>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
            {content.recoveryLabel}
          </span>
          <p className="text-xsm font-bold text-[var(--term-fg)] break-keep">{content.recovery}</p>
        </div>
      </article>

      {/* flow + code hints */}
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
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/30',
          )}
        >
          <header className="flex items-center gap-2">
            <FileCodeIcon
              aria-hidden="true"
              className="h-4 w-4 text-slate-600 dark:text-slate-300"
            />
            <span className="text-xsm font-bold text-[var(--term-fg)]">
              {content.codeHintsLabel}
            </span>
          </header>
          <ul className="flex flex-col gap-2">
            {content.codeHints.map((hint) => (
              <li key={hint.file} className="flex flex-col gap-1">
                <code className="inline-flex w-fit items-center rounded border border-slate-200 bg-white px-1.5 py-0.5 text-[11px] font-mono font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {hint.file}
                </code>
                <ul className="flex flex-wrap gap-1">
                  {hint.functions.map((fn) => (
                    <li
                      key={fn}
                      className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200"
                    >
                      {fn}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </div>
  </section>
);
