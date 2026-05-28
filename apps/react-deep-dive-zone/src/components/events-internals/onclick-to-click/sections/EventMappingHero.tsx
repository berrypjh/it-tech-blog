import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { OnClickClickContent } from '../content';
import { ArrowRightIcon, BracesIcon, GlobeIcon, LinkIcon } from '../icons';

type Props = { content: OnClickClickContent['hero'] };

const KEYWORDS = new Set(['function', 'const', 'return']);
const STRINGS = /^['"`].*['"`]$/;

const renderHeroToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'SaveButton' || tok === 'handleClick' || tok === 'console')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'log')
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'button')
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

export const EventMappingHero = ({ content }: Props) => {
  const lines = content.codeCard.code.split('\n');

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react-dom/events/onclick-to-click.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // click → onClick · focusin → onFocus · dblclick → onDoubleClick'}
          </span>
        }
      />

      {/* Top badges */}
      <ul className="mt-md flex flex-wrap items-center gap-2">
        {content.badges.map((badge) => (
          <li
            key={badge.label}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full px-3 py-1',
              'text-[10px] font-mono font-bold uppercase tracking-wider',
              badge.tone === 'blue' &&
                'bg-blue-600 text-white shadow-[0_1px_0_var(--term-border)] dark:bg-blue-500',
              badge.tone === 'cyan' &&
                'border border-cyan-300/80 bg-cyan-50 text-cyan-700 dark:border-cyan-700/70 dark:bg-cyan-950/50 dark:text-cyan-200',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'block h-1.5 w-1.5 rounded-full',
                badge.tone === 'blue' ? 'bg-white/90' : 'bg-cyan-500 dark:bg-cyan-400',
              )}
            />
            {badge.label}
          </li>
        ))}
      </ul>

      <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
        {/* LEFT */}
        <div className="flex flex-col gap-md">
          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-[3rem]',
              'font-bold leading-[1.14] tracking-tight break-keep',
            )}
          >
            <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
            <span className="block text-blue-600 dark:text-blue-400">{content.titleLines[1]}</span>
          </h1>

          <p className="text-sm sm:text-md leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
            {content.description}
          </p>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
              <div className="flex items-center gap-1.5">
                <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span
                  aria-hidden="true"
                  className="block h-2.5 w-2.5 rounded-full bg-amber-300/80"
                />
                <span
                  aria-hidden="true"
                  className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
                />
                <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {content.codeCard.fileLabel}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                jsx
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
                        className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                      >
                        {i + 1}
                      </span>
                      <span className="whitespace-pre">{tokens.map(renderHeroToken)}</span>
                    </div>
                  );
                })}
              </code>
            </pre>
          </div>
        </div>

        {/* RIGHT: mapping table diagram */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
            'border-blue-200/80 dark:border-blue-800/60 shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
              {content.diagram.title}
            </h2>
            <span
              aria-hidden="true"
              className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-blue-200/80 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800/60 dark:text-blue-200"
            >
              <BracesIcon className="h-3.5 w-3.5" />
            </span>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-md">
            {/* Mapping rows */}
            <div className="flex flex-col gap-2">
              {/* column headers */}
              <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 px-1">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
                  {content.diagram.columnLabels.native}
                </span>
                <span aria-hidden="true" className="text-blue-500 dark:text-blue-300">
                  →
                </span>
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {content.diagram.columnLabels.prop}
                </span>
              </div>

              <ul className="flex flex-col gap-2">
                {content.diagram.rows.map((row) => (
                  <li
                    key={`${row.native}-${row.prop}`}
                    className={cn(
                      'group grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 rounded-xl border bg-[var(--term-bg)] px-md py-2.5',
                      'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
                      'hover:border-blue-300/70 dark:hover:border-blue-700/70 transition-colors',
                    )}
                  >
                    <span className="flex items-center gap-1.5">
                      <span
                        aria-hidden="true"
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200"
                      >
                        <GlobeIcon className="h-3 w-3" />
                      </span>
                      <code className="font-mono text-xsm sm:text-sm font-bold text-sky-700 dark:text-sky-300 break-all">
                        {row.native}
                      </code>
                    </span>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="h-3.5 w-3.5 text-blue-500 dark:text-blue-300"
                    />
                    <code className="font-mono text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-300 break-all">
                      {row.prop}
                    </code>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right helper card */}
            <aside
              className={cn(
                'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 px-md py-md sm:py-lg sm:px-4 text-center',
                'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/30',
                'sm:max-w-[170px]',
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200"
              >
                <LinkIcon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {content.diagram.helper.title}
              </span>
              <p className="text-[11px] sm:text-xsm leading-snug text-[var(--term-fg)] break-keep">
                {content.diagram.helper.body}
              </p>
            </aside>
          </div>
        </article>
      </div>
    </section>
  );
};
