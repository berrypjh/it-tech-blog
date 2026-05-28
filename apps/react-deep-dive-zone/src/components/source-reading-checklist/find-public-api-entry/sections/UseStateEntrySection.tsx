import { cn } from '@it-tech-blog/utils';

import { CodePreviewPanel } from '../../../shared/CodePreviewPanel';
import { SectionHeader } from '../../../shared/SectionHeader';
import type { FindPublicApiEntryContent } from '../content';
import { FileCodeIcon, RouteIcon, SparkIcon, TargetIcon } from '../icons';

type Props = { content: FindPublicApiEntryContent['useStateEntry'] };

export const UseStateEntrySection = ({ content }: Props) => {
  return (
    <section
      id="section-use-state-entry"
      aria-labelledby="heading-use-state-entry"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="use-state-entry"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<RouteIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_5fr)_minmax(0,_7fr)] gap-md lg:gap-lg items-start">
        {/* LEFT — User code card + Source file card */}
        <div className="flex flex-col gap-md">
          {/* User code card */}
          <article
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-sky-200 bg-sky-50/60',
              'dark:border-sky-800/60 dark:bg-sky-950/30',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-center gap-2 mb-sm">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-md',
                  'border border-sky-300 bg-sky-100 text-sky-700',
                  'dark:border-sky-700/70 dark:bg-sky-900/60 dark:text-sky-200',
                )}
              >
                <TargetIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                {content.userCodeLabel}
              </span>
            </div>
            <pre
              className={cn(
                'overflow-x-auto rounded-md border px-3 py-2.5',
                'border-sky-200 bg-white dark:border-sky-800/70 dark:bg-[var(--term-bg)]',
                'font-mono text-xsm leading-relaxed text-[var(--term-fg)]',
              )}
            >
              <code>{content.userCode}</code>
            </pre>
            <p className="mt-sm text-xsm leading-relaxed text-sky-900/80 dark:text-sky-100/80 break-keep">
              {content.userCodeBody}
            </p>
          </article>

          {/* Source file card */}
          <article
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-blue-200 bg-blue-50/60',
              'dark:border-blue-800/60 dark:bg-blue-950/30',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <div className="flex items-center gap-2 mb-sm">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-7 w-7 items-center justify-center rounded-md',
                  'border border-blue-300 bg-blue-100 text-blue-700',
                  'dark:border-blue-700/70 dark:bg-blue-900/60 dark:text-blue-200',
                )}
              >
                <FileCodeIcon className="h-3.5 w-3.5" />
              </span>
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.sourceLabel}
              </span>
            </div>
            <code
              className={cn(
                'flex items-center gap-1.5 overflow-x-auto rounded-md border-2 px-2.5 py-2',
                'border-blue-300 bg-white text-blue-900',
                'dark:border-blue-700/70 dark:bg-[var(--term-bg)] dark:text-blue-100',
                'font-mono text-xsm font-bold',
                'shadow-[0_2px_0_var(--term-border)]',
              )}
            >
              <SparkIcon className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              <span className="whitespace-nowrap">{content.sourceFile}</span>
            </code>
            <p className="mt-sm text-xsm leading-relaxed text-blue-900/80 dark:text-blue-100/80 break-keep">
              {content.sourceBody}
            </p>
          </article>
        </div>

        {/* RIGHT — code preview panel */}
        <div className="flex flex-col gap-md">
          <CodePreviewPanel code={content.code} language="js" />

          {/* Key point */}
          <aside
            className={cn(
              'rounded-2xl border-2 p-md sm:p-lg',
              'border-amber-200 bg-amber-50/60',
              'dark:border-amber-800/60 dark:bg-amber-950/30',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
            aria-label="key-point"
          >
            <div className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg',
                  'border border-amber-300 bg-white text-amber-700',
                  'dark:border-amber-700/70 dark:bg-[var(--term-bg)] dark:text-amber-200',
                )}
              >
                <SparkIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-sm sm:text-md font-bold leading-snug text-amber-900 dark:text-amber-100 break-keep">
                  {content.keyPoint.headline}
                </h3>
                <p className="text-xsm leading-relaxed text-amber-900/80 dark:text-amber-100/80 break-keep">
                  {content.keyPoint.body}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
