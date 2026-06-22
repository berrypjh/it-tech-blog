import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { FunctionComponentContent } from '../content';
import { FileCodeIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: FunctionComponentContent['userCode'] };

export const UserCodeExample = ({ content }: Props) => (
  <section id="user-code" aria-labelledby="heading-user-code" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="user-code"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<FileCodeIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1.45fr)_minmax(0,_1fr)] gap-md lg:gap-lg items-stretch">
      {/* Code card */}
      <article
        className={cn(
          'overflow-hidden rounded-2xl border bg-slate-50 dark:bg-slate-950',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header
          className={cn(
            'flex items-center justify-between gap-2 border-b border-[var(--term-border)] px-md py-2',
            'bg-white/80 dark:bg-slate-950/60',
          )}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5" aria-hidden="true">
              <span className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <code className="font-mono text-xsm font-bold text-[var(--term-fg)] break-all">
              {content.fileTab}
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            jsx
          </span>
        </header>
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono text-slate-800 dark:text-slate-100">
          <code>
            {content.code.split('\n').map((line, idx) => (
              <div key={idx} className="flex">
                <span
                  aria-hidden="true"
                  className="select-none w-8 shrink-0 pr-3 text-right text-slate-400 dark:text-slate-500 tabular-nums"
                >
                  {idx + 1}
                </span>
                <span className="whitespace-pre">{highlight(line)}</span>
              </div>
            ))}
          </code>
        </pre>
      </article>

      {/* Callouts */}
      <ol className="flex flex-col gap-2">
        {content.callouts.map((callout, idx) => {
          const palette = tonePalette[callout.tone];
          return (
            <li key={callout.title} className="flex">
              <article
                className={cn(
                  'flex w-full items-center gap-3 rounded-2xl border-2 border-dashed p-md',
                  palette.border,
                  palette.bg,
                  'shadow-[0_1px_0_var(--term-border)]',
                  'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 items-center justify-center rounded-xl border font-mono font-bold text-xsm',
                    palette.chip,
                  )}
                >
                  {idx + 1}
                </span>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span
                    className={cn(
                      'text-xsm sm:text-sm font-bold leading-tight break-keep',
                      palette.text,
                    )}
                  >
                    {callout.title}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {idx === 0 ? 'definition' : idx === 1 ? 'jsx return' : 'fiber entry'}
                  </span>
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  </section>
);

const KEYWORDS = new Set([
  'function',
  'return',
  'const',
  'let',
  'var',
  'if',
  'else',
  'true',
  'false',
  'null',
]);

const highlight = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){}[\]<>;,.:=])/);
  const nodes: React.ReactNode[] = [];
  tokens.forEach((tok, idx) => {
    if (!tok) return;
    if (/^['"`].*['"`]$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-emerald-700 dark:text-emerald-300">
          {tok}
        </span>,
      );
    } else if (KEYWORDS.has(tok)) {
      nodes.push(
        <span key={idx} className="text-sky-700 dark:text-sky-300 font-bold">
          {tok}
        </span>,
      );
    } else if (/^[A-Z][A-Za-z0-9_$]*$/.test(tok)) {
      nodes.push(
        <span key={idx} className="text-amber-700 dark:text-amber-200">
          {tok}
        </span>,
      );
    } else if (/^[a-z_$][\w$]*$/i.test(tok)) {
      nodes.push(
        <span key={idx} className="text-slate-800 dark:text-slate-100">
          {tok}
        </span>,
      );
    } else {
      nodes.push(
        <span key={idx} className="text-slate-500 dark:text-slate-400">
          {tok}
        </span>,
      );
    }
  });
  return nodes;
};
