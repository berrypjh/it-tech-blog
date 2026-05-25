import { cn } from '@it-tech-blog/utils';

import type { HydrationStartContent } from '../content';
import { CheckCircleIcon, GlobeIcon, LoaderIcon } from '../icons';

import { CodeBlock } from './_CodeBlock';
import { SectionHeader } from './_SectionHeader';

type Props = {
  serverHtml: HydrationStartContent['serverHtml'];
  hydrateCall: HydrationStartContent['hydrateCall'];
};

export const ServerHtmlAndCallSection = ({ serverHtml, hydrateCall }: Props) => (
  <div className="grid grid-cols-1 gap-md lg:grid-cols-2 items-stretch">
    {/* server html */}
    <section aria-labelledby="server-html-heading" className="flex flex-col gap-md">
      <SectionHeader id="server-html-heading" number={serverHtml.number} title={serverHtml.title} />
      <article
        className={cn(
          'flex flex-col gap-md h-full rounded-2xl border-2 p-md sm:p-lg',
          'border-blue-200/70 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <GlobeIcon className="h-3.5 w-3.5" />
          </span>
          <h3 className="text-xsm font-bold text-blue-700 dark:text-blue-200 break-keep">
            {serverHtml.codeLabel}
          </h3>
        </div>
        <CodeBlock code={serverHtml.code} language="html" />
        <ul className="mt-auto flex flex-col gap-1.5">
          {serverHtml.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
            >
              <CheckCircleIcon
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 shrink-0 text-blue-500 dark:text-blue-400"
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </article>
    </section>

    {/* hydrateRoot call */}
    <section aria-labelledby="hydrate-call-heading" className="flex flex-col gap-md">
      <SectionHeader
        id="hydrate-call-heading"
        number={hydrateCall.number}
        title={hydrateCall.title}
      />
      <div
        className={cn(
          'flex flex-col gap-md h-full rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <CodeBlock
          code={hydrateCall.code.content}
          fileLabel={hydrateCall.code.fileLabel}
          language="ts"
        />
        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-md',
            'border-teal-200/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
            >
              <LoaderIcon className="h-3.5 w-3.5 motion-safe:animate-spin" />
            </span>
            <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
              {hydrateCall.statusTitle}
            </h3>
          </header>
          <p className="text-xsm text-[var(--term-fg)] break-keep">{hydrateCall.statusBody}</p>
          <code
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2.5 py-0.5',
              'border-teal-200 bg-white text-teal-700 text-[11px] font-mono font-bold',
              'dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200',
            )}
          >
            {hydrateCall.statusPill}
          </code>
        </div>
      </div>
    </section>
  </div>
);
