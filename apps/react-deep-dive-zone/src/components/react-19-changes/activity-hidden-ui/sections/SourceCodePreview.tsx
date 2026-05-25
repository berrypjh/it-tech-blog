import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import {
  CheckCircleIcon,
  ExternalLinkIcon,
  FileCodeIcon,
  GithubIcon,
  SparklesIcon,
} from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['sourceCode'] };

export const SourceCodePreview = ({ content }: Props) => (
  <section aria-labelledby="source-code-heading" className="flex flex-col">
    <SectionHeader
      id="source-code-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_minmax(0,_4fr)_minmax(0,_3fr)] lg:gap-lg items-stretch">
      <div className="flex">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
          toneBorder="border-purple-700/70"
        />
      </div>

      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-purple-200/80 bg-purple-50/30 dark:border-purple-700/70 dark:bg-purple-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-purple-200 bg-purple-100 text-purple-700 dark:border-purple-800/60 dark:bg-purple-950/60 dark:text-purple-200"
          >
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-purple-700 dark:text-purple-200 break-keep">
            {content.explanationTitle}
          </h3>
        </header>
        <ul className="flex flex-col gap-1.5">
          {content.explanationPoints.map((p) => (
            <li
              key={p}
              className="flex items-start gap-2 text-xsm leading-relaxed text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-purple-600 dark:text-purple-300"
              />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </article>

      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-gradient-to-br from-white via-purple-50/30 to-white',
          'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-purple-950/20 dark:to-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            <FileCodeIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.fileCard.title}
          </h3>
        </header>

        <div
          className={cn(
            'rounded-xl border-2 px-3 py-3',
            'border-slate-200 bg-slate-50/50 dark:border-slate-700 dark:bg-slate-900/40',
          )}
        >
          <p className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
            {content.fileCard.fileName}
          </p>
        </div>

        <a
          href={content.fileCard.href}
          target="_blank"
          rel="noreferrer"
          className={cn(
            'group mt-auto inline-flex items-center justify-center gap-2 rounded-xl border-2 px-4 py-2.5',
            'border-slate-900 bg-slate-900 text-white',
            'dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900',
            'font-mono text-xsm font-bold',
            'transition-all motion-safe:hover:-translate-y-0.5',
            'shadow-[0_2px_0_rgba(0,0,0,0.25)]',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
          )}
        >
          <GithubIcon className="h-3.5 w-3.5" />
          <span>{content.fileCard.buttonLabel}</span>
          <ExternalLinkIcon
            aria-hidden="true"
            className="h-3 w-3 opacity-70 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
          />
        </a>
      </article>
    </div>
  </section>
);
