import { cn } from '@it-tech-blog/utils';

import type { UsePromiseSuspendContent } from '../content';
import { ExternalLinkIcon, GithubIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: UsePromiseSuspendContent['code'] };

const KEYWORDS = new Set(['export', 'function', 'const', 'if', 'return']);
const TYPES = new Set(['undefined']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (TYPES.has(tok))
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'trackUsedThenable' || tok === 'getThenablesFromState')
    return (
      <span key={i} className="text-cyan-200">
        {tok}
      </span>
    );
  if (
    tok === 'thenableState' ||
    tok === 'thenable' ||
    tok === 'index' ||
    tok === 'trackedThenables' ||
    tok === 'previous'
  )
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'push')
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const CodePreview = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="code-heading" className="flex flex-col gap-md">
      <SectionHeader id="code-heading" number={content.number} title={content.title} />

      <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,6fr)_minmax(0,4fr)] items-stretch">
        {/* LEFT: code editor */}
        <article
          className={cn(
            'overflow-hidden rounded-2xl border-2 bg-slate-950',
            'border-slate-800 shadow-[0_4px_0_var(--term-border)]',
            'transition-shadow motion-safe:hover:shadow-[0_6px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2.5">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                {content.fileLabel}
              </span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              ts
            </span>
          </header>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-8 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </article>

        {/* RIGHT: explanation */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <h3 className="text-md font-bold text-[var(--term-fg)]">{content.explanationTitle}</h3>
          <ul className="flex flex-col gap-2">
            {content.bullets.map((b) => (
              <li
                key={b.name}
                className="flex items-start gap-2 text-xsm text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
                />
                <span>
                  <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-[11px] font-bold text-blue-700 dark:bg-blue-950/50 dark:text-blue-200">
                    {b.name}
                  </code>
                  <span className="ml-1.5 text-[var(--term-muted)]">{b.description}</span>
                </span>
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
};
