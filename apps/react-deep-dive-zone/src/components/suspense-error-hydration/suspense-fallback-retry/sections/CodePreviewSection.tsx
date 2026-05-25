import { cn } from '@it-tech-blog/utils';

import type { SuspenseFallbackRetryContent } from '../content';
import { ExternalLinkIcon, GithubIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: SuspenseFallbackRetryContent['code'] };

export const CodePreviewSection = ({ content }: Props) => (
  <section aria-labelledby="code-heading" className="flex flex-col gap-md">
    <SectionHeader id="code-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)] items-stretch">
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
          'border-emerald-200/80 bg-white dark:border-emerald-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-start justify-between gap-2 px-md pt-md">
          <span className="text-xsm font-mono font-bold text-emerald-700 dark:text-emerald-300 break-keep">
            {content.cardBLabel}
          </span>
          <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200">
            {content.cardBBadge}
          </span>
        </header>
        <div className="px-md pb-md">
          <CodeBlock code={content.cardBCode} language="js" />
        </div>
      </article>

      {/* Explanation */}
      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <h3 className="text-md font-bold text-[var(--term-fg)]">{content.explanationTitle}</h3>
        <ul className="flex flex-col gap-2">
          {content.explanationBullets.map((b) => (
            <li
              key={b.tag}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-bold text-white',
                  b.tag === 'A'
                    ? 'bg-teal-600 dark:bg-teal-500'
                    : 'bg-emerald-600 dark:bg-emerald-500',
                )}
              >
                {b.tag}
              </span>
              <span>{b.body}</span>
            </li>
          ))}
        </ul>

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
