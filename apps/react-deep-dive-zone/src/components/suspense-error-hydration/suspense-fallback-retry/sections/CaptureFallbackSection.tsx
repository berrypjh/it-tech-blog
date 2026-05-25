import { cn } from '@it-tech-blog/utils';

import type { SuspenseFallbackRetryContent } from '../content';
import { ArrowRightIcon, LoaderIcon, ShieldCheckIcon } from '../icons';
import { phaseAccent } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['capture'] };

export const CaptureFallbackSection = ({ content }: Props) => {
  const capture = phaseAccent.capture;
  const pending = phaseAccent.pending;
  return (
    <section aria-labelledby="capture-heading" className="flex flex-col gap-md">
      <SectionHeader id="capture-heading" number={content.number} title={content.title} />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,3fr)_auto_minmax(0,3fr)_auto_minmax(0,2fr)_auto_minmax(0,2fr)] items-stretch">
        {/* 1. Internal state changes */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            capture.border,
            capture.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className={cn('text-xsm font-bold uppercase tracking-wider', capture.text)}>
            {content.internalTitle}
          </h3>
          <ol className="flex flex-col gap-1.5">
            {content.internalSteps.map((step) => (
              <li key={step.number} className="flex items-start gap-2">
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold tabular-nums text-white',
                    capture.solidBg,
                  )}
                >
                  {step.number}
                </span>
                <div className="flex flex-col min-w-0">
                  <span className="text-xsm font-bold text-[var(--term-fg)] break-keep">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-[var(--term-muted)] break-keep">
                    {step.description}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        </article>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
        >
          <ArrowRightIcon className="hidden lg:block h-4 w-4" />
          <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
        </span>

        {/* 2. Boundary state */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <ShieldCheckIcon
              aria-hidden="true"
              className="h-4 w-4 text-teal-600 dark:text-teal-300"
            />
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.stateTitle}
            </h3>
          </header>
          <dl
            className={cn(
              'rounded-xl border bg-slate-950 p-3 font-mono text-[11px] leading-[1.7]',
              'border-slate-800 text-slate-100',
            )}
          >
            {content.stateLines.map((line) => (
              <div key={line.key} className="flex items-baseline gap-2">
                <dt className="text-violet-300">{line.key}</dt>
                <span className="text-slate-500">:</span>
                <dd className={cn(line.highlight ? 'text-teal-300 font-bold' : 'text-slate-200')}>
                  {line.value}
                </dd>
              </div>
            ))}
          </dl>
        </article>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
        >
          <ArrowRightIcon className="hidden lg:block h-4 w-4" />
          <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
        </span>

        {/* 3. Fallback pass */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            pending.border,
            pending.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className={cn('text-sm font-bold break-keep', pending.text)}>
            {content.fallbackTitle}
          </h3>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{content.fallbackBody}</p>
        </article>

        {/* arrow */}
        <span
          aria-hidden="true"
          className="self-center inline-flex items-center justify-center text-blue-500 dark:text-blue-300"
        >
          <ArrowRightIcon className="hidden lg:block h-4 w-4" />
          <ArrowRightIcon className="lg:hidden h-4 w-4 rotate-90 mx-auto" />
        </span>

        {/* 4. UI result */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-violet-200/80 bg-violet-50/40 dark:border-violet-800/60 dark:bg-violet-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-sm font-bold text-violet-700 dark:text-violet-200 break-keep">
            {content.resultTitle}
          </h3>
          <div
            className={cn(
              'flex flex-col items-center gap-2 rounded-xl border-2 p-3',
              'border-violet-200 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
            )}
          >
            <LoaderIcon
              aria-hidden="true"
              className="h-6 w-6 motion-safe:animate-spin text-violet-600 dark:text-violet-300"
            />
            <span className="font-mono text-[11px] font-bold text-violet-700 dark:text-violet-200">
              {content.resultSpinnerLabel}
            </span>
            <div className="w-full space-y-1">
              <span
                aria-hidden="true"
                className="block h-1.5 w-full rounded bg-violet-100 dark:bg-violet-900/40"
              />
              <span
                aria-hidden="true"
                className="block h-1.5 w-3/5 rounded bg-violet-100 dark:bg-violet-900/40"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
