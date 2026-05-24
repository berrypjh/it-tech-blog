import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { ListenerCollectionContent } from '../content';
import { BoxIcon, GitBranchIcon } from '../icons';

type Props = { content: ListenerCollectionContent['hero'] };

const KEYWORDS = new Set(['function', 'return', 'const']);
const STRINGS = /^['"`].*['"`]$/;

const renderHeroToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'handleSectionCapture' || tok === 'handleDivClick' || tok === 'handleButtonClick')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'onClickCapture')
    return (
      <span key={i} className="text-violet-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'onClick')
    return (
      <span key={i} className="text-cyan-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'section' || tok === 'div' || tok === 'button')
    return (
      <span key={i} className="text-rose-300">
        {tok}
      </span>
    );
  if (STRINGS.test(tok))
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

export const ListenerCollectionHero = ({ content }: Props) => {
  const lines = content.code.code.split('\n');

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react-dom/events/accumulate-listeners.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // targetFiber → instance.return → listeners[]'}
          </span>
        }
      />

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
              'text-3xl sm:text-4xl lg:text-[2.4rem] xl:text-[2.8rem]',
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
                  {content.code.fileLabel}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                jsx
              </span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
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

        {/* RIGHT: Fiber tree diagram */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
            'border-teal-300/80 dark:border-teal-700/70 shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.diagram.title}
            </h2>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-teal-500 text-white shadow-[0_2px_0_rgba(13,148,136,0.3)] dark:bg-teal-400 dark:text-slate-900"
            >
              <GitBranchIcon className="h-4 w-4" />
            </span>
          </header>

          <ul className="flex flex-col gap-2">
            {content.diagram.nodes.map((node, i) => (
              <li
                key={node.name}
                style={{ marginLeft: `${i * 16}px` }}
                className={cn(
                  'flex items-center gap-3 rounded-2xl border-2 p-md transition-colors',
                  'shadow-[0_1px_0_var(--term-border)]',
                  'border-teal-200/80 bg-white dark:border-teal-800/60 dark:bg-slate-950/40',
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                    'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
                  )}
                >
                  <BoxIcon className="h-4 w-4" />
                </span>
                <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                  <code className="font-mono text-xsm sm:text-sm font-bold text-teal-700 dark:text-teal-200 break-all">
                    {node.name}
                  </code>
                  <span className="text-[10px] font-mono text-[var(--term-muted)]">
                    {node.type}
                  </span>
                </div>
                <code
                  className={cn(
                    'inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[10px] sm:text-[11px] font-bold whitespace-nowrap',
                    node.propKind === 'capture'
                      ? 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200'
                      : 'border-teal-300/80 bg-teal-50 text-teal-700 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
                  )}
                >
                  {node.prop}
                </code>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
};
