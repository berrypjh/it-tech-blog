import { cn } from '@it-tech-blog/utils';

import type { WhyNotImmediateContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, RotateCcwIcon, XCircleIcon } from '../icons';

import { NumberedSectionHeader } from './_NumberedSectionHeader';

type Props = { content: WhyNotImmediateContent['intuition'] };

export const IntuitionVsActualFlow = ({ content }: Props) => (
  <section aria-labelledby="heading-intuition">
    <NumberedSectionHeader
      id="intuition"
      number={2}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<RotateCcwIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* LEFT: wrong intuition */}
      <article
        className={cn(
          'group relative flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30',
          'dark:border-rose-800/60 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-rose-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
              'bg-rose-500 text-white shadow-[0_3px_0_rgba(225,29,72,0.3)] dark:bg-rose-500/90',
            )}
          >
            <XCircleIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-300">
              {content.wrong.label}
            </span>
            <span className="text-[10px] font-mono text-rose-600/80 dark:text-rose-300/70">
              misconception
            </span>
          </div>
        </header>

        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.wrong.title}
        </p>

        <ol className="flex flex-col gap-2">
          {content.wrong.flow.map((step, i) => {
            const isLast = i === content.wrong.flow.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 px-md py-2.5',
                    'border-rose-200/80 bg-rose-50/70 text-rose-900',
                    'dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-100',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                      'bg-white text-[10px] font-mono font-bold tabular-nums shadow-sm',
                      'dark:bg-slate-950/60 dark:text-rose-200',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xsm sm:text-sm font-bold leading-tight break-keep">
                    {step}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="ml-auto h-3.5 w-3.5 opacity-50 hidden sm:block"
                  />
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-3 inline-block w-px h-2 bg-rose-300/60 dark:bg-rose-700/60"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <div
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 border-dashed px-md py-3',
            'border-rose-300/80 bg-rose-50/60 text-rose-700',
            'dark:border-rose-700/60 dark:bg-rose-950/30 dark:text-rose-200',
          )}
        >
          <span aria-hidden="true" className="mt-0.5 text-rose-500 dark:text-rose-300 font-bold">
            !
          </span>
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
            {content.wrong.warning}
          </p>
        </div>
      </article>

      {/* RIGHT: real flow */}
      <article
        className={cn(
          'group relative flex flex-col gap-md rounded-3xl border-2 p-md sm:p-lg',
          'border-teal-200/80 bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/40',
          'dark:border-teal-800/60 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)] transition-colors hover:border-teal-300',
        )}
      >
        <header className="flex items-center gap-3">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full',
              'bg-teal-500 text-white shadow-[0_3px_0_rgba(13,148,136,0.3)] dark:bg-teal-500/90',
            )}
          >
            <CheckCircleIcon className="h-6 w-6" strokeWidth={2.2} />
          </span>
          <div className="flex flex-col">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
              {content.real.label}
            </span>
            <span className="text-[10px] font-mono text-teal-600/80 dark:text-teal-300/70">
              react-actual-flow
            </span>
          </div>
        </header>

        <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.real.title}
        </p>

        <ol className="flex flex-col gap-2">
          {content.real.flow.map((step, i) => {
            const isLast = i === content.real.flow.length - 1;
            return (
              <li key={step} className="flex flex-col">
                <div
                  className={cn(
                    'flex items-center gap-3 rounded-xl border-2 px-md py-2.5',
                    'border-teal-200/80 bg-teal-50/70 text-teal-900',
                    'dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-100',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                      'bg-white text-[10px] font-mono font-bold tabular-nums shadow-sm',
                      'dark:bg-slate-950/60 dark:text-teal-200',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span className="text-xsm sm:text-sm font-bold leading-tight break-keep">
                    {step}
                  </span>
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="ml-auto h-3.5 w-3.5 opacity-50 hidden sm:block"
                  />
                </div>
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="ml-3 inline-block w-px h-2 bg-teal-300/60 dark:bg-teal-700/60"
                  />
                )}
              </li>
            );
          })}
        </ol>

        <div
          className={cn(
            'mt-auto flex items-start gap-2 rounded-xl border-2 px-md py-3',
            'border-teal-300/80 bg-teal-50/60 text-teal-800',
            'dark:border-teal-700/60 dark:bg-teal-950/30 dark:text-teal-100',
          )}
        >
          <CheckCircleIcon
            aria-hidden="true"
            className="mt-0.5 h-4 w-4 shrink-0 text-teal-600 dark:text-teal-300"
          />
          <p className="text-[11px] sm:text-xsm leading-relaxed break-keep">
            {content.real.success}
          </p>
        </div>
      </article>
    </div>
  </section>
);
