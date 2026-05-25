import { cn } from '@it-tech-blog/utils';

import type { MismatchDetectRecoverContent } from '../content';
import { ArrowDownIcon, CheckCircleIcon, FileCodeIcon, ShieldAlertIcon, ZapIcon } from '../icons';
import { roleAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['throwFlow'] };

export const ThrowFlowSection = ({ content }: Props) => (
  <section aria-labelledby="throw-heading" className="flex flex-col gap-md">
    <SectionHeader id="throw-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* left flow */}
      <article
        className={cn(
          'flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <ol className="flex flex-col items-center gap-2">
          {content.steps.map((step, i) => {
            const accent = roleAccent[step.role];
            const isLast = i === content.steps.length - 1;
            const isMiddle = i === 1;
            return (
              <li key={step.title} className="flex flex-col items-center gap-1.5 w-full">
                <div
                  className={cn(
                    'flex flex-col items-start gap-1 rounded-xl border-2 px-3 py-2.5 w-full',
                    accent.border,
                    accent.bg,
                    isMiddle &&
                      'shadow-[0_4px_0_rgba(244,63,94,0.25)] ring-1 ring-rose-200/60 dark:ring-rose-800/40',
                    'transition-transform motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <div className="flex items-center gap-1.5">
                    {isMiddle && (
                      <ZapIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-rose-600 dark:text-rose-300"
                      />
                    )}
                    <span className={cn('text-xsm font-mono font-bold break-keep', accent.text)}>
                      {step.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-[var(--term-muted)] break-keep">
                    {step.caption}
                  </span>
                </div>
                {!isLast && (
                  <ArrowDownIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-slate-400 dark:text-slate-500"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </article>

      {/* center key point */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <ShieldAlertIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.keypointTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-2">
          {content.keypointItems.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* right code location */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <FileCodeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-blue-700 dark:text-blue-200 break-keep">
            {content.locationTitle}
          </h3>
        </header>
        <code
          className={cn(
            'inline-flex w-fit items-center rounded-lg border px-2 py-1',
            'border-blue-200 bg-white text-blue-700 text-[11px] font-mono font-bold',
            'dark:border-blue-800/60 dark:bg-slate-900 dark:text-blue-200',
          )}
        >
          {content.locationFile}
        </code>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {content.locationBody}
        </p>
      </article>
    </div>
  </section>
);
