import { cn } from '@it-tech-blog/utils';

import type { MismatchDetectRecoverContent } from '../content';
import { ExternalLinkIcon, FileCodeIcon, GithubIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MismatchDetectRecoverContent['code'] };

export const CodePreviewSection = ({ content }: Props) => (
  <section aria-labelledby="code-heading" className="flex flex-col gap-md">
    <SectionHeader id="code-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,3fr)] items-stretch">
      {/* Code A */}
      <article
        className={cn(
          'flex flex-col gap-2 overflow-hidden rounded-2xl border-2',
          'border-rose-200/80 bg-white dark:border-rose-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-start justify-between gap-2 px-md pt-md">
          <span className="text-xsm font-mono font-bold text-rose-700 dark:text-rose-300 break-keep">
            {content.cardALabel}
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200">
            {content.cardABadge}
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock code={content.cardACode} language="js" />
        </div>
      </article>

      {/* Code B */}
      <article
        className={cn(
          'flex flex-col gap-2 overflow-hidden rounded-2xl border-2',
          'border-teal-200/80 bg-white dark:border-teal-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-start justify-between gap-2 px-md pt-md">
          <span className="text-xsm font-mono font-bold text-teal-700 dark:text-teal-300 break-keep">
            {content.cardBLabel}
          </span>
          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-200">
            {content.cardBBadge}
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock code={content.cardBCode} language="js" />
        </div>
      </article>

      {/* Related file */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
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
            {content.relatedTitle}
          </h3>
        </header>

        <code
          className={cn(
            'inline-flex w-fit items-center rounded-lg border px-2 py-1',
            'border-blue-200 bg-white text-blue-700 text-[11px] font-mono font-bold break-all',
            'dark:border-blue-800/60 dark:bg-slate-900 dark:text-blue-200',
          )}
        >
          {content.relatedFile}
        </code>

        <a
          href={content.button.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'mt-auto group inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-3',
            'text-xsm font-bold transition-all',
            'border-blue-300 bg-white text-blue-700',
            'dark:border-blue-700 dark:bg-[var(--term-bg)] dark:text-blue-300',
            'motion-safe:hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-[0_2px_0_rgba(59,130,246,0.2)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
          )}
        >
          <GithubIcon className="h-4 w-4" />
          <span>{content.button.label}</span>
          <ExternalLinkIcon
            aria-hidden="true"
            className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
        </a>
      </article>
    </div>
  </section>
);
