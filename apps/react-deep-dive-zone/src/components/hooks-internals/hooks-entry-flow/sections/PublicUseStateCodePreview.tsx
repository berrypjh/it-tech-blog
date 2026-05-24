import { cn } from '@it-tech-blog/utils';

import type { HooksEntryFlowContent } from '../content';
import { ChevronRightIcon, ExternalLinkIcon, FileSearchIcon, GithubIcon } from '../icons';

type Props = { content: HooksEntryFlowContent['realCode'] };

const KEYWORDS = new Set(['export', 'function', 'const', 'return']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'useState' || tok === 'resolveDispatcher' || tok === 'dispatcher')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'initialState')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-amber-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const PublicUseStateCodePreview = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="real-code-heading" className="flex flex-col gap-md">
      {/* Title row */}
      <header className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white dark:bg-blue-500">
          <span aria-hidden="true" className="block h-1.5 w-1.5 rounded-full bg-white/90" />
          {content.badge}
        </span>
        <h2
          id="real-code-heading"
          className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)]"
        >
          {content.title}
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-md">
        {/* Code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">{content.fileName}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Explanation card */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200/80 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200"
            >
              <FileSearchIcon className="h-4 w-4" />
            </span>
            <code className="font-mono text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
              {content.fileName}
            </code>
          </div>
          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.description}
          </p>
          <ul className="mt-1 flex flex-col gap-1.5">
            <li className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-sky-500 dark:bg-sky-400"
              />
              <span className="break-keep">
                <code className="font-mono">resolveDispatcher()</code>로 현재 Dispatcher 획득
              </span>
            </li>
            <li className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]">
              <span
                aria-hidden="true"
                className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
              />
              <span className="break-keep">
                <code className="font-mono">dispatcher.useState(initialState)</code> 위임 호출
              </span>
            </li>
          </ul>
        </article>
      </div>

      {/* Link cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
        {content.links.map((link, i) => {
          const Icon = i === 0 ? GithubIcon : ExternalLinkIcon;
          return (
            <a
              key={link.title}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noreferrer noopener' : undefined}
              className={cn(
                'group flex items-center gap-3 rounded-2xl border bg-[var(--term-bg)] p-md',
                'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
                'transition-all hover:-translate-y-0.5 hover:border-sky-300/70 dark:hover:border-sky-700/70',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--term-border)] bg-white text-[var(--term-fg)] dark:bg-slate-950/50"
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-col min-w-0 flex-1">
                <span className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                  {link.title}
                </span>
                <span className="text-[11px] sm:text-xsm text-[var(--term-muted)] break-keep">
                  {link.description}
                </span>
              </div>
              <ChevronRightIcon
                aria-hidden="true"
                className="h-4 w-4 shrink-0 text-[var(--term-muted)] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
              />
            </a>
          );
        })}
      </div>
    </section>
  );
};
