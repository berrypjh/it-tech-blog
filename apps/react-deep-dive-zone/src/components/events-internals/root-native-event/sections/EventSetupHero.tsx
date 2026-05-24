import { cn } from '@it-tech-blog/utils';

import { TerminalPrompt } from '../../../getting-started/_shared/TerminalPrompt';
import type { RootNativeEventContent } from '../content';
import { ArrowRightIcon, ContainerIcon, GlobeIcon, MousePointerIcon } from '../icons';
import { ListenerPill } from '../ListenerPill';

type Props = { content: RootNativeEventContent['hero'] };

const KEYWORDS = new Set(['const', 'function', 'import', 'from', 'return']);

const renderHeroToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
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
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (tok === 'App')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const EventSetupHero = ({ content }: Props) => {
  const lines = content.codeCard.code.split('\n');
  const domLines = content.diagram.rootDom.split('\n');

  return (
    <section aria-labelledby="hero-heading" className="relative">
      <TerminalPrompt
        command="cat"
        path="react-dom/events/root-native-event.md"
        suffix={
          <span className="text-[var(--term-dim)]">
            {' // createRoot → listenToAllSupportedEvents'}
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
        {/* LEFT: heading + description + code */}
        <div className="flex flex-col gap-md">
          <h1
            id="hero-heading"
            className={cn(
              'text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.9rem]',
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

        {/* RIGHT: Browser → root container → listener pills diagram */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
            'border-blue-200/80 dark:border-blue-800/60 shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center gap-md">
            {/* Browser card */}
            <div
              className={cn(
                'flex flex-col gap-1.5 rounded-2xl border-2 px-md py-3 text-center',
                'border-sky-300/80 bg-sky-50/70 dark:border-sky-700/70 dark:bg-sky-950/30',
              )}
            >
              <span
                aria-hidden="true"
                className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-xl border border-sky-200 bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60"
              >
                <GlobeIcon className="h-4 w-4" />
              </span>
              <h3 className="text-xsm font-bold text-[var(--term-fg)]">
                {content.diagram.browserTitle}
              </h3>
              <ul className="flex flex-col gap-0.5">
                {content.diagram.browserBullets.map((b) => (
                  <li
                    key={b}
                    className="text-[10px] font-mono text-sky-700 dark:text-sky-200 leading-snug"
                  >
                    {b}
                  </li>
                ))}
              </ul>
              <span
                aria-hidden="true"
                className="mx-auto mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900 dark:text-sky-200"
              >
                <MousePointerIcon className="h-3 w-3" />
              </span>
            </div>

            {/* Arrow between Browser and root */}
            <span
              aria-hidden="true"
              className="hidden md:flex items-center justify-center text-blue-500 dark:text-blue-300"
            >
              <span className="block w-full border-t-2 border-dashed border-blue-300/80" />
              <ArrowRightIcon className="h-5 w-5 -ml-2" />
            </span>

            {/* Root container card */}
            <div
              className={cn(
                'flex flex-col gap-2 rounded-2xl border-2 p-md',
                'border-violet-300/90 bg-gradient-to-br from-violet-50 to-blue-50/60',
                'dark:border-violet-600/80 dark:from-violet-950/40 dark:to-blue-950/30',
                'shadow-[0_3px_0_var(--term-border)]',
              )}
            >
              <header className="flex items-center gap-2">
                <span
                  aria-hidden="true"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-violet-200 bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60"
                >
                  <ContainerIcon className="h-4 w-4" />
                </span>
                <h3 className="text-xsm font-bold text-[var(--term-fg)]">
                  {content.diagram.rootTitle}
                </h3>
              </header>
              <pre className="overflow-x-auto rounded-lg border border-violet-200/70 bg-white px-2 py-2 font-mono text-[10px] sm:text-[11px] leading-[1.55] text-slate-700 dark:border-violet-800/60 dark:bg-slate-950/40 dark:text-slate-200">
                <code className="whitespace-pre">{domLines.join('\n')}</code>
              </pre>
              <div
                aria-hidden="true"
                className="rounded-md border border-dashed border-violet-300/70 px-2 py-1 text-center text-[10px] font-mono text-violet-600 dark:border-violet-700/60 dark:text-violet-300"
              >
                rootContainerElement
              </div>
            </div>
          </div>

          {/* dashed connector lines + listener pills row */}
          <div className="flex flex-col gap-2">
            <span aria-hidden="true" className="self-center text-blue-500 dark:text-blue-300 -mt-1">
              <ArrowRightIcon className="h-4 w-4 rotate-90" />
            </span>
            <ul className="flex flex-wrap items-center justify-center gap-2">
              {content.diagram.listeners.map((l) => (
                <li key={l.label}>
                  <ListenerPill label={l.label} kind={l.kind} size="sm" />
                </li>
              ))}
            </ul>
          </div>

          <p className="text-[11px] sm:text-xsm text-center text-[var(--term-muted)] break-keep">
            {content.diagram.caption}
          </p>
        </article>
      </div>
    </section>
  );
};
