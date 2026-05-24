import { cn } from '@it-tech-blog/utils';

import type { RootNativeEventContent } from '../content';
import { CheckCircleIcon, FileTextIcon } from '../icons';
import { NumberedSectionHeader } from '../NumberedSectionHeader';

type Props = { content: RootNativeEventContent['createRoot'] };

const KEYWORDS = new Set(['import', 'from', 'const', 'function', 'return']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-blue-600 dark:text-blue-400 font-semibold">
        {tok}
      </span>
    );
  if (
    tok === 'createRoot' ||
    tok === 'root' ||
    tok === 'render' ||
    tok === 'document' ||
    tok === 'getElementById'
  )
    return (
      <span key={i} className="text-violet-700 dark:text-violet-300 font-semibold">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-700 dark:text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'App')
    return (
      <span key={i} className="text-amber-700 dark:text-amber-300 font-semibold">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-700 dark:text-slate-200">
      {tok}
    </span>
  );
};

export const CreateRootCodeStart = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="heading-create-root">
      <NumberedSectionHeader
        id="create-root"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FileTextIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-md items-stretch">
        {/* Code card */}
        <div
          className={cn(
            'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)] hover:border-blue-300/70 dark:hover:border-blue-700/70 transition-colors',
          )}
        >
          <div className="flex items-center gap-2 border-b border-[var(--term-border)] bg-blue-50/50 px-md py-2 dark:bg-blue-950/20">
            <span
              aria-hidden="true"
              className="inline-flex h-6 w-6 items-center justify-center rounded-md border border-blue-200/80 bg-white text-blue-700 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200"
            >
              <FileTextIcon className="h-3.5 w-3.5" />
            </span>
            <code className="font-mono text-[11px] sm:text-xsm font-bold text-[var(--term-fg)]">
              {content.fileLabel}
            </code>
            <span className="ml-auto text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-[var(--term-dim)] tabular-nums border-r border-[var(--term-border)] mr-3"
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

        {/* Explanation */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
            'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            'hover:border-emerald-300/70 dark:hover:border-emerald-700/70 transition-colors',
          )}
        >
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_3px_0_rgba(5,150,105,0.25)] dark:bg-emerald-400 dark:text-slate-900"
            >
              <CheckCircleIcon className="h-5 w-5" strokeWidth={2.4} />
            </span>
            <p className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
              {content.explanation.label}
            </p>
          </div>

          <p className="text-sm sm:text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.explanation.body}
          </p>

          <ul className="mt-auto flex flex-wrap gap-2">
            {content.badges.map((b) => (
              <li
                key={b}
                className={cn(
                  'inline-flex items-center gap-1.5 rounded-full border px-3 py-1',
                  'border-emerald-200/80 bg-emerald-50/60 text-emerald-800 text-[11px] sm:text-xsm font-medium',
                  'dark:border-emerald-800/60 dark:bg-emerald-950/30 dark:text-emerald-200',
                )}
              >
                <span
                  aria-hidden="true"
                  className="block h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"
                />
                <span className="break-keep">{b}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
