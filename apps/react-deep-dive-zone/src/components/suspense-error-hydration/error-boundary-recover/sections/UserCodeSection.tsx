import { cn } from '@it-tech-blog/utils';

import type { ErrorBoundaryRecoverContent } from '../content';
import { CheckCircleIcon, RotateCcwIcon, TriangleAlertIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ErrorBoundaryRecoverContent['userCode'] };

export const UserCodeSection = ({ content }: Props) => (
  <section aria-labelledby="usercode-heading" className="flex flex-col gap-md">
    <SectionHeader id="usercode-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-stretch">
      {/* code */}
      <article
        className={cn(
          'flex flex-col overflow-hidden rounded-2xl border-2',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.code.content} fileLabel={content.code.fileLabel} language="jsx" />
      </article>

      {/* right column */}
      <div className="flex flex-col gap-md">
        {/* fallback example */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-rose-200 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
            >
              <TriangleAlertIcon className="h-3.5 w-3.5" />
            </span>
            <h3 className="text-xsm font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
              {content.fallback.title}
            </h3>
          </header>
          <p className="text-md font-bold text-rose-800 dark:text-rose-100 break-keep">
            {content.fallback.heading}
          </p>
          <p className="text-xsm text-rose-700/80 dark:text-rose-200/80 break-keep">
            {content.fallback.body}
          </p>
          <button
            type="button"
            tabIndex={-1}
            aria-hidden="true"
            className={cn(
              'mt-2 inline-flex w-fit items-center gap-1.5 rounded-lg border-2 px-3 py-1.5',
              'border-rose-300 bg-white text-rose-700 font-bold text-xsm',
              'dark:border-rose-700 dark:bg-slate-900 dark:text-rose-200',
            )}
          >
            <RotateCcwIcon className="h-3.5 w-3.5" />
            {content.fallback.button}
          </button>
        </article>

        {/* key points */}
        <article
          className={cn(
            'flex flex-col gap-2 rounded-2xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
            {content.keypoint.title}
          </h3>
          <ul className="flex flex-col gap-2">
            {content.keypoint.items.map((item) => (
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
      </div>
    </div>
  </section>
);
