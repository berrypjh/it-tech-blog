import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { SyntheticEventContent } from '../content';
import { AtomIcon, LinkIcon } from '../icons';

type Props = { content: SyntheticEventContent['hero'] };

const KEYWORDS = new Set(['function', 'return', 'const']);

const renderHeroToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'SaveButton' || tok === 'stopPropagation')
    return (
      <span key={i} className="text-violet-300">
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
  if (tok === 'e')
    return (
      <span key={i} className="text-cyan-300 font-semibold">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const SyntheticEventHero = ({ content }: Props) => {
  const lines = content.code.code.split('\n');

  return (
    <HeroSection
      promptCommand="cat"
      promptPath="react-dom/events/synthetic-event.md"
      promptSuffix={
        <span className="text-[var(--term-dim)]">
          {' // nativeEvent → SyntheticEvent → handler'}
        </span>
      }
      gridColumns="lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block text-[var(--term-fg)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-accent)]">{content.titleLines[1]}</span>
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[55ch]">{content.description}</HeroDescription>

        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
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
      </HeroTextColumn>

      <HeroVisualColumn>
        {/* SyntheticEvent structure diagram */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-3xl border-2 bg-[var(--term-bg)] p-md sm:p-lg',
            'border-violet-300/80 dark:border-violet-700/70 shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center justify-between gap-2">
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.diagram.title}
            </h2>
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-violet-500 text-white shadow-[0_2px_0_rgba(124,58,237,0.3)] dark:bg-violet-400 dark:text-slate-900"
            >
              <AtomIcon className="h-4 w-4" />
            </span>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-md">
            {/* property + meaning rows */}
            <ul className="flex flex-col gap-1.5">
              {content.diagram.properties.map((row) => (
                <li
                  key={row.name}
                  className={cn(
                    'grid grid-cols-[minmax(0,0.55fr)_minmax(0,1fr)] items-start gap-2 rounded-lg border bg-white px-3 py-2',
                    'border-violet-200/70 dark:border-violet-800/60 dark:bg-slate-950/40',
                  )}
                >
                  <code className="font-mono text-[11px] sm:text-xsm font-bold text-violet-700 dark:text-violet-200 break-all">
                    {row.name}
                  </code>
                  <p className="text-[10px] sm:text-[11px] text-[var(--term-fg)] break-keep">
                    {row.meaning}
                  </p>
                </li>
              ))}
            </ul>

            {/* Helper card */}
            <aside
              className={cn(
                'flex flex-col items-center justify-center gap-2 rounded-2xl border-2 px-md py-md sm:px-3 sm:py-lg text-center',
                'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/60 dark:bg-teal-950/30',
                'sm:max-w-[180px]',
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
              >
                <LinkIcon className="h-5 w-5" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                helper
              </span>
              <p className="text-[11px] sm:text-xsm font-bold text-[var(--term-fg)] break-keep">
                {content.diagram.helper.title}
              </p>
              <p className="text-[10px] sm:text-[11px] text-[var(--term-muted)] break-keep">
                {content.diagram.helper.body}
              </p>
            </aside>
          </div>
        </article>
      </HeroVisualColumn>
    </HeroSection>
  );
};
