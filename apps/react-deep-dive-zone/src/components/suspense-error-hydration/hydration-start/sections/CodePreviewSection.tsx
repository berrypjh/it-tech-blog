import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { ExternalLinkIcon, FileSearchIcon, GithubIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: HydrationStartContent['code'] };

export const CodePreviewSection = ({ content }: Props) => (
  <section aria-labelledby="code-heading" className="flex flex-col gap-md">
    <SectionHeader id="code-heading" number={content.number} title={content.title} />

    <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] items-stretch">
      <article
        className={cn(
          'overflow-hidden rounded-2xl border-2 bg-slate-950',
          'border-slate-800 shadow-[0_4px_0_var(--term-border)]',
          'transition-shadow motion-safe:hover:shadow-[0_6px_0_var(--term-border)]',
        )}
      >
        <CodeBlock code={content.content} fileLabel={content.fileLabel} language="js" />
      </article>

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <FileSearchIcon className="h-4 w-4" />
          </span>
          <div className="flex flex-col">
            <h3 className="text-md font-bold text-[var(--term-fg)]">{content.sideTitle}</h3>
            <span className="text-[11px] text-[var(--term-muted)] break-keep">
              {content.sideBody}
            </span>
          </div>
        </header>

        <ul className="flex flex-col gap-2">
          {content.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <span
                aria-hidden="true"
                className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
              />
              <span>{b}</span>
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
