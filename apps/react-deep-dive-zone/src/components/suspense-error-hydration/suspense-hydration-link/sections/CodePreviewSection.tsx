import { cn } from '@it-tech-blog/utils';

import type { SuspenseHydrationLinkContent } from '../content';
import { ExternalLinkIcon, GithubIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseHydrationLinkContent['code'] };

export const CodePreviewSection = ({ content }: Props) => (
  <section aria-labelledby="code-heading" className="flex flex-col gap-md">
    <SectionHeader id="code-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,4fr)_minmax(0,4fr)_minmax(0,3fr)] items-stretch">
      {/* Code A */}
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
            {content.cardALabel}
          </span>
          <span className="inline-flex items-center rounded-full border border-teal-200 bg-teal-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-200">
            JS
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock code={content.cardACode} fileLabel={content.cardAFile} language="js" />
        </div>
        <a
          href={content.button.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'mx-md mb-md inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
            'text-[11px] font-bold transition-all',
            'border-teal-300 bg-white text-teal-700',
            'dark:border-teal-700 dark:bg-[var(--term-bg)] dark:text-teal-300',
            'motion-safe:hover:-translate-y-0.5 hover:border-teal-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
          )}
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span>{content.button.label}</span>
          <ExternalLinkIcon className="h-3 w-3 opacity-70" aria-hidden="true" />
        </a>
      </article>

      {/* Code B */}
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
            {content.cardBLabel}
          </span>
          <span className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-rose-700 dark:border-rose-700/60 dark:bg-rose-950/40 dark:text-rose-200">
            JS
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock code={content.cardBCode} fileLabel={content.cardBFile} language="js" />
        </div>
        <a
          href={content.button.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'mx-md mb-md inline-flex items-center justify-center gap-2 rounded-xl border-2 px-3 py-2',
            'text-[11px] font-bold transition-all',
            'border-rose-300 bg-white text-rose-700',
            'dark:border-rose-700 dark:bg-[var(--term-bg)] dark:text-rose-300',
            'motion-safe:hover:-translate-y-0.5 hover:border-rose-500',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
          )}
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span>{content.button.label}</span>
          <ExternalLinkIcon className="h-3 w-3 opacity-70" aria-hidden="true" />
        </a>
      </article>

      {/* Related concepts */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/80 bg-blue-50/30 dark:border-blue-800/60 dark:bg-blue-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-blue-700 dark:text-blue-200 break-keep">
          {content.relatedTitle}
        </h3>
        <ul className="flex flex-col gap-3">
          {content.related.map((r) => (
            <li key={r.name} className="flex flex-col gap-0.5">
              <code
                className={cn(
                  'inline-flex w-fit items-center rounded border px-1.5 py-0.5',
                  'border-blue-200 bg-white text-blue-700 text-[11px] font-mono font-bold',
                  'dark:border-blue-800/60 dark:bg-slate-900 dark:text-blue-200',
                )}
              >
                {r.name}
              </code>
              <span className="text-[11px] text-[var(--term-muted)] break-keep">
                {r.description}
              </span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
