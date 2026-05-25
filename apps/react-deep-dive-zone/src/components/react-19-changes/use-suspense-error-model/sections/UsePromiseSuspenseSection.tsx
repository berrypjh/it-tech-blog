import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { HourglassIcon, ShieldCheckIcon, SparklesIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['suspenseConnection'] };

export const UsePromiseSuspenseSection = ({ content }: Props) => (
  <section aria-labelledby="suspense-connection-heading" className="flex flex-col">
    <SectionHeader
      id="suspense-connection-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
      {/* LEFT: code + explanation */}
      <div className="flex flex-col gap-md">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
        />

        <div
          className={cn(
            'flex items-start gap-2 rounded-xl border-2 px-3 py-3',
            'border-blue-200 bg-blue-50/60 dark:border-blue-800/60 dark:bg-blue-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <SparklesIcon className="h-3.5 w-3.5" />
          </span>
          <p className="text-xsm leading-relaxed text-blue-700 dark:text-blue-200 break-keep">
            {content.explanation}
          </p>
        </div>
      </div>

      {/* RIGHT: Suspense fallback mock */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <ShieldCheckIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.fallback.title}
          </h3>
        </header>

        {/* skeleton card */}
        <div
          className={cn(
            'flex flex-col gap-3 rounded-xl border-2 p-md',
            'border-blue-200/80 bg-blue-50/30',
            'dark:border-blue-800/60 dark:bg-blue-950/20',
          )}
        >
          <div className="flex items-center gap-3">
            {/* skeleton avatar */}
            <span
              aria-hidden="true"
              className="block h-12 w-12 shrink-0 rounded-full bg-blue-200/70 dark:bg-blue-800/40"
            />
            <div className="flex flex-1 flex-col gap-1.5">
              <span
                aria-hidden="true"
                className="block h-3 w-3/4 rounded-full bg-blue-200/70 dark:bg-blue-800/40"
              />
              <span
                aria-hidden="true"
                className="block h-2.5 w-1/2 rounded-full bg-blue-200/50 dark:bg-blue-800/30"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <span
              aria-hidden="true"
              className="block h-2.5 w-full rounded-full bg-blue-200/50 dark:bg-blue-800/30"
            />
            <span
              aria-hidden="true"
              className="block h-2.5 w-5/6 rounded-full bg-blue-200/40 dark:bg-blue-800/30"
            />
          </div>
        </div>

        {/* loading text */}
        <div className="flex items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 dark:border-blue-800/60 dark:bg-blue-950/40">
          <HourglassIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 text-blue-700 dark:text-blue-200"
          />
          <span className="font-mono text-xsm font-bold text-blue-700 dark:text-blue-200">
            {content.fallback.loadingText}
          </span>
        </div>
      </article>
    </div>
  </section>
);
