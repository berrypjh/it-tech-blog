import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, ServerIcon, WaypointsIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['fallbackHtml'] };

export const FallbackHtmlSection = ({ content }: Props) => (
  <section aria-labelledby="fallback-html-heading" className="flex flex-col gap-md">
    <SectionHeader id="fallback-html-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-3 items-stretch">
      {/* code */}
      <article
        className={cn(
          'flex flex-col gap-2 overflow-hidden rounded-2xl border-2',
          'border-violet-200/80 bg-white dark:border-violet-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="html" />
        <span
          className={cn(
            'mx-md mb-md inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5',
            'border-violet-200 bg-violet-50 text-violet-700 text-[10px] font-mono font-bold uppercase tracking-wider',
            'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
          )}
        >
          Suspense marker 포함
        </span>
      </article>

      {/* description */}
      <article
        className={cn(
          'flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
          {content.descriptionTitle}
        </h3>
        <p className="text-xsm text-[var(--term-muted)] break-keep">{content.description}</p>
        <ul className="mt-auto flex flex-col gap-2">
          {content.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-teal-500 dark:text-teal-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>

      {/* streaming flow */}
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
            <WaypointsIcon className="h-4 w-4" />
          </span>
          <h3 className="text-md font-bold text-blue-700 dark:text-blue-200 break-keep">
            {content.streamingTitle}
          </h3>
        </header>
        <ol className="flex flex-col gap-1.5">
          {content.streamingSteps.map((step, i) => {
            const isLast = i === content.streamingSteps.length - 1;
            return (
              <li key={step} className="flex flex-col gap-0.5">
                <div
                  className={cn(
                    'inline-flex items-center gap-2 rounded-lg border bg-white px-3 py-2',
                    'dark:bg-[var(--term-bg)] border-blue-200 dark:border-blue-800/60',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold tabular-nums dark:bg-blue-500"
                  >
                    {i + 1}
                  </span>
                  {i === 0 && (
                    <ServerIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-blue-600 dark:text-blue-300"
                    />
                  )}
                  <span className="text-xsm font-mono font-bold text-blue-700 dark:text-blue-200 break-keep">
                    {step}
                  </span>
                </div>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 ml-3 rotate-90 text-blue-400 dark:text-blue-500"
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
