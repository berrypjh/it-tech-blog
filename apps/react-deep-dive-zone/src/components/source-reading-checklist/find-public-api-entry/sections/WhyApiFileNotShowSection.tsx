import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import { toneTokens } from '../../../getting-started/_shared/tones';
import type { FindPublicApiEntryContent } from '../content';
import { ArrowRightIcon, DoorOpenIcon, FileCodeIcon, SparkIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['whyApiFile'] };

export const WhyApiFileNotShowSection = ({ content }: Props) => {
  return (
    <section
      id="section-why-api-file"
      aria-labelledby="heading-why-api-file"
      className="space-y-lg"
    >
      <SectionHeader
        id="why-api-file"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<DoorOpenIcon className="h-5 w-5" />}
      />

      {/* Main statement card */}
      <article
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-amber-200 bg-amber-50/60',
          'dark:border-amber-800/60 dark:bg-amber-950/20',
          'shadow-[0_3px_0_var(--term-border)]',
        )}
        aria-labelledby="why-api-statement"
      >
        <div className="grid grid-cols-1 sm:grid-cols-[auto_minmax(0,_1fr)] gap-md items-start">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-12 w-12 items-center justify-center rounded-xl',
              'border-2 border-amber-300 bg-white text-amber-700',
              'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <DoorOpenIcon className="h-6 w-6" />
          </span>
          <div className="flex flex-col gap-1.5">
            <h3
              id="why-api-statement"
              className="text-md sm:text-lg font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep"
            >
              {content.statementHeadline}
            </h3>
            <p className="text-xsm leading-relaxed text-amber-900/80 dark:text-amber-100/80 break-keep">
              {content.statementSub}
            </p>
          </div>
        </div>
      </article>

      {/* 3-step flow */}
      <ol className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-md lg:gap-3 items-stretch">
        {content.steps.map((step, i) => {
          const t = toneTokens[step.tone];
          const isLast = i === content.steps.length - 1;
          return (
            <Fragment key={step.number}>
              <li>
                <article
                  className={cn(
                    'group flex h-full flex-col gap-sm rounded-xl border-2 p-md',
                    'bg-white dark:bg-[var(--term-bg)]',
                    t.border,
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                    t.borderHover,
                  )}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5',
                        t.chip,
                        'text-[10px] font-mono font-bold tabular-nums',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn('block h-1 w-1 rounded-full', t.dot)}
                      />
                      {step.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 items-center justify-center rounded-md border',
                        t.chip,
                      )}
                    >
                      <FileCodeIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>

                  <h4 className={cn('text-md font-bold tracking-tight break-keep', t.text)}>
                    {step.title}
                  </h4>

                  <code
                    className={cn(
                      'inline-flex w-fit items-center rounded-md border px-2 py-1',
                      'border-[var(--term-border)] bg-[var(--term-surface)]',
                      'font-mono text-[11px] text-[var(--term-fg)]',
                    )}
                  >
                    {step.code}
                  </code>

                  <p className="mt-auto text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.body}
                  </p>
                </article>
              </li>

              {!isLast && (
                <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                  <ArrowRightIcon className="h-5 w-5 text-cyan-500" />
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>

      {/* Emphasis banner */}
      <aside
        className={cn(
          'flex items-center gap-3 rounded-xl border-2 p-md',
          'border-blue-300 bg-blue-50 text-blue-900',
          'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
        aria-label="emphasis"
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
            'border border-blue-300 bg-white text-blue-700',
            'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-200',
          )}
        >
          <SparkIcon className="h-4 w-4" />
        </span>
        <p className="text-sm sm:text-md font-bold leading-snug break-keep">{content.emphasis}</p>
      </aside>
    </section>
  );
};
