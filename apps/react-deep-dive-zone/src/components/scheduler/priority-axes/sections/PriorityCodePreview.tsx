import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { ThreePriorityAxesContent } from '../content';
import { ExternalLinkIcon, FileCodeIcon, GitBranchIcon, SparklesIcon } from '../icons';

type Props = { content: ThreePriorityAxesContent['code'] };

const KEYWORDS = new Set(['export', 'function', 'return']);
const TYPES = new Set(['Fiber', 'Lane']);
const FN_NAMES = new Set(['requestUpdateLane', 'eventPriorityToLane', 'resolveUpdatePriority']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (tok.startsWith('//'))
    return (
      <span key={i} className="text-emerald-400/70 italic">
        {tok}
      </span>
    );
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-pink-300 font-semibold">
        {tok}
      </span>
    );
  if (FN_NAMES.has(tok))
    return (
      <span
        key={i}
        className={cn(
          tok === 'requestUpdateLane' && 'text-cyan-300 font-semibold',
          tok === 'eventPriorityToLane' && 'text-emerald-300 font-semibold',
          tok === 'resolveUpdatePriority' && 'text-amber-200 font-semibold',
        )}
      >
        {tok}
      </span>
    );
  if (TYPES.has(tok))
    return (
      <span key={i} className="text-violet-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'fiber')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const PriorityCodePreview = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="heading-code">
      <NumberedSectionHeader
        id="code"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<FileCodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-md items-stretch">
        {/* code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {content.fileLabel}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              ts
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.<>:=/])/);
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

        {/* explanation */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/80 bg-gradient-to-br from-blue-50/70 via-white to-violet-50/40',
            'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.3)] dark:bg-blue-500"
            >
              <SparklesIcon className="h-5 w-5" strokeWidth={2.2} />
            </span>
            <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
              {content.explanationTitle}
            </p>
          </header>

          <ul className="flex flex-col gap-2">
            {content.explanation.map((line) => (
              <li
                key={line}
                className="flex items-start gap-2 text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep"
              >
                <span
                  aria-hidden="true"
                  className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500 dark:bg-blue-400"
                />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-2">
            {content.apiBadges.map((api) => (
              <li key={api}>
                <code
                  className={cn(
                    'inline-flex items-center rounded-md border px-2 py-1 font-mono',
                    'border-violet-200/80 bg-violet-50 text-violet-800 text-[11px] sm:text-xsm font-semibold',
                    'dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200',
                  )}
                >
                  {api}()
                </code>
              </li>
            ))}
          </ul>

          <a
            href={content.button.href}
            target="_blank"
            rel="noreferrer"
            className={cn(
              'mt-auto group inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3',
              'border-2 border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)] font-bold text-xsm sm:text-sm',
              'shadow-[0_2px_0_var(--term-border)] transition-all',
              'motion-safe:hover:-translate-y-0.5 hover:border-blue-300 dark:hover:border-blue-700',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <GitBranchIcon aria-hidden="true" className="h-4 w-4" />
            <span className="break-keep">{content.button.label}</span>
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
