import { cn } from '@it-tech-blog/utils';

import { HeroDescription } from '../../../shared/HeroDescription';
import { HeroSection as HeroShell } from '../../../shared/HeroSection';
import { HeroTextColumn } from '../../../shared/HeroTextColumn';
import { HeroTitle } from '../../../shared/HeroTitle';
import { HeroVisualColumn } from '../../../shared/HeroVisualColumn';
import { TerminalBadge } from '../../../shared/TerminalBadge';
import type { UsePromiseSuspendContent } from '../content';
import { CheckCircleIcon, HourglassIcon, TriangleAlertIcon } from '../icons';
import type { PromiseState } from '../tone';
import { stateAccent } from '../tone';

type Props = { content: UsePromiseSuspendContent['hero'] };

const stateIcon: Record<PromiseState, React.ComponentType<{ className?: string }>> = {
  pending: HourglassIcon,
  fulfilled: CheckCircleIcon,
  rejected: TriangleAlertIcon,
};

const KEYWORDS = new Set(['function', 'const', 'return']);
const STRINGS = /^['"`].*['"`]$/;

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'use')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (tok === 'Message' || tok === 'messagePromise' || tok === 'message')
    return (
      <span key={i} className="text-sky-300">
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

export const HeroSection = ({ content }: Props) => {
  const lines = content.code.content.split('\n');
  return (
    <HeroShell
      promptCommand="cat"
      promptPath="react-reconciler/ReactFiberThenable.js"
      promptSuffix={
        <span className="text-[var(--term-dim)]">
          {' // use(Promise) → pending|fulfilled|rejected'}
        </span>
      }
      gridColumns="lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)]"
    >
      <HeroTextColumn>
        <TerminalBadge size="md" className="w-fit">
          {content.badge}
        </TerminalBadge>

        <HeroTitle>
          <span className="block text-[var(--term-accent)]">{content.titleLines[0]}</span>
          <span className="block text-[var(--term-fg)]">{content.titleLines[1]}</span>
        </HeroTitle>

        <HeroDescription maxWidth="max-w-[40ch]">{content.description}</HeroDescription>
      </HeroTextColumn>

      <HeroVisualColumn>
        <div className="grid grid-cols-1 gap-md lg:gap-lg lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-stretch">
          {/* user code */}
          <article
            className={cn(
              'flex flex-col rounded-3xl border-2 overflow-hidden',
              'border-blue-200/70 bg-white dark:border-blue-800/60 dark:bg-[var(--term-bg)]',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2 border-b border-slate-200 px-md py-3 dark:border-slate-700">
              <span className="text-xsm font-bold text-[var(--term-fg)]">{content.code.label}</span>
              <span className="inline-flex items-center rounded-full border border-violet-200 bg-violet-50 px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/50 dark:text-violet-200">
                {content.code.pill}
              </span>
            </header>
            <div className="overflow-hidden bg-slate-950">
              <div className="flex items-center gap-1.5 border-b border-slate-800 px-md py-2">
                <span className="block h-2 w-2 rounded-full bg-rose-400/80" />
                <span className="block h-2 w-2 rounded-full bg-amber-300/80" />
                <span className="block h-2 w-2 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-[10px] font-mono uppercase tracking-wider text-slate-500">
                  {content.code.fileLabel}
                </span>
              </div>
              <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
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
                        <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                      </div>
                    );
                  })}
                </code>
              </pre>
            </div>
          </article>

          {/* 3-branch flow */}
          <article
            className={cn(
              'flex flex-col gap-3 rounded-3xl border-2 p-md sm:p-lg',
              'border-blue-200/70 bg-gradient-to-br from-blue-50/50 to-violet-50/30',
              'dark:border-blue-800/60 dark:from-blue-950/30 dark:to-violet-950/20',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <h2 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.flowCard.title}
            </h2>

            {/* Root */}
            <div className="flex flex-col items-center gap-1">
              <div
                className={cn(
                  'inline-flex items-center rounded-xl border-2 px-4 py-2',
                  'border-blue-400/80 bg-white text-blue-700 shadow-[0_2px_0_rgba(59,130,246,0.15)]',
                  'dark:border-blue-600/70 dark:bg-blue-950/40 dark:text-blue-200',
                  'font-mono text-xsm font-bold',
                )}
              >
                {content.flowCard.rootLabel}
              </div>
              <div aria-hidden="true" className="h-3 w-px bg-blue-300/80 dark:bg-blue-700/60" />
            </div>

            {/* States */}
            <ul className="flex flex-col gap-1.5">
              {content.flowCard.states.map((s) => {
                const accent = stateAccent[s.state];
                const Icon = stateIcon[s.state];
                return (
                  <li
                    key={s.state}
                    className={cn(
                      'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
                      accent.border,
                      accent.bg,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border',
                        accent.iconChip,
                      )}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span className={cn('text-xsm font-mono font-bold', accent.text)}>
                        {s.label}
                      </span>
                      <span className="text-[11px] text-[var(--term-muted)] break-keep">
                        {s.result}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </HeroVisualColumn>
    </HeroShell>
  );
};
