import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../shared/TerminalPrompt';
import type { Tone, WhyEventSystemContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, AtomIcon, CodeIcon, PlayCircleIcon } from '../icons';

type Props = { content: WhyEventSystemContent['hero'] };

const toneColumn: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/30',
  cyan: 'border-cyan-300/80 bg-cyan-50/70 dark:border-cyan-700/70 dark:bg-cyan-950/30',
  teal: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/30',
  emerald:
    'border-emerald-300/80 bg-emerald-50/70 dark:border-emerald-700/70 dark:bg-emerald-950/30',
  violet:
    'border-violet-300/90 bg-gradient-to-br from-violet-50 to-blue-50/60 dark:border-violet-600/80 dark:from-violet-950/40 dark:to-blue-950/30',
  blue: 'border-blue-300/80 bg-blue-50/70 dark:border-blue-700/70 dark:bg-blue-950/30',
  amber: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/30',
  rose: 'border-rose-300/80 bg-rose-50/70 dark:border-rose-700/70 dark:bg-rose-950/30',
};

const toneIcon: Record<Tone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
};

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

export const EventSystemHero = ({ content }: Props) => {
  const lines = content.codeCard.code.split('\n');

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react-dom/events/why-event-system.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // root → event system → Fiber → handler'}
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

      {/* Two-column layout */}
      <div className="mt-lg grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-stretch">
        {/* LEFT: heading + description + dark code card */}
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

          <p className="text-sm sm:text-md font-bold leading-relaxed text-blue-700 dark:text-blue-300 break-keep">
            {content.highlight}
          </p>

          <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep max-w-[55ch]">
            {content.description}
          </p>

          {/* Dark code card */}
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

        {/* RIGHT: 3-step diagram card */}
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
              <AtomIcon className="h-3.5 w-3.5" />
            </span>
          </header>

          <ol className="grid grid-cols-1 md:grid-cols-3 items-stretch gap-2 sm:gap-3 relative">
            {content.diagram.columns.map((col, i) => {
              const isLast = i === content.diagram.columns.length - 1;
              const isMiddle = i === 1;
              const Icon = i === 0 ? CodeIcon : i === 1 ? AtomIcon : PlayCircleIcon;
              return (
                <li
                  key={col.title}
                  className={cn(
                    'relative flex flex-col gap-2 rounded-2xl border-2 p-3 sm:p-md transition-colors',
                    'hover:-translate-y-0.5 motion-reduce:transform-none',
                    toneColumn[col.tone],
                    isMiddle && 'md:scale-[1.02] md:shadow-[0_4px_0_var(--term-border)]',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        toneIcon[col.tone],
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                      step {i + 1}
                    </span>
                  </div>

                  <h3 className="text-xsm sm:text-sm font-bold leading-tight text-[var(--term-fg)] break-keep">
                    {col.title}
                  </h3>

                  {col.kind === 'code' && col.code && (
                    <pre className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950 px-2 py-2 font-mono text-[10px] sm:text-[11px] leading-[1.55] text-slate-100">
                      <code className="whitespace-pre">{col.code}</code>
                    </pre>
                  )}

                  {col.kind === 'bullet' && col.bullets && (
                    <ul className="flex flex-col gap-1">
                      {col.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-1.5 text-[10px] sm:text-[11px] text-[var(--term-fg)]"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500 dark:bg-violet-400"
                          />
                          <span className="break-keep">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-auto text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                    {col.subtitle}
                  </p>

                  {!isLast && (
                    <>
                      <span
                        aria-hidden="true"
                        className="hidden md:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200/80 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-800/60 dark:text-blue-300"
                      >
                        <ArrowRightIcon className="h-3.5 w-3.5" />
                      </span>
                      <span
                        aria-hidden="true"
                        className="md:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                      >
                        <ArrowDownIcon className="h-4 w-4" />
                      </span>
                    </>
                  )}
                </li>
              );
            })}
          </ol>

          {/* Visually-hidden text alt for the diagram */}
          <p className="sr-only">{content.diagram.columns.map((c) => c.title).join(' → ')}</p>
        </article>
      </div>
    </section>
  );
};
