import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { HookLinkedListContent, Tone } from '../content';
import { ArrowDownIcon, ArrowRightIcon, BracesIcon, NetworkIcon } from '../icons';

type Props = { content: HookLinkedListContent['breakdown'] };

const KEYWORDS = new Set(['null']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-orange-300">
        {tok}
      </span>
    );
  if (
    tok === 'tag' ||
    tok === 'type' ||
    tok === 'memoizedProps' ||
    tok === 'memoizedState' ||
    tok === 'updateQueue' ||
    tok === 'child' ||
    tok === 'sibling' ||
    tok === 'return'
  )
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (
    tok === 'FunctionComponent' ||
    tok === 'Profile' ||
    tok === 'Hook' ||
    tok === 'UpdateQueue' ||
    tok === 'Fiber'
  )
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
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

const toneCard: Record<Tone, string> = {
  sky: 'border-sky-300/80 bg-sky-50 text-sky-800 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-100',
  cyan: 'border-cyan-300/80 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-100',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-100',
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-100',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-100',
};

export const FiberStructureBreakdown = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-breakdown"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="breakdown"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BracesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: Fiber pseudo code */}
        <div className="flex flex-col gap-sm">
          <span className="inline-flex w-fit items-center rounded-full border border-[var(--term-border)] bg-[var(--term-border)]/20 px-2.5 py-0.5 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
            {content.leftLabel}
          </span>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
              <code>
                {lines.map((line, i) => {
                  const tokens = line.split(/(\s+|[(){}[\];,.])/);
                  const isHighlight = line.trim() === content.highlightLine;
                  return (
                    <div
                      key={i}
                      className={cn(
                        'flex',
                        isHighlight && 'bg-cyan-500/15 border-l-2 border-cyan-400 -ml-px pl-[5px]',
                      )}
                    >
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
        </div>

        {/* Right: memoizedState → linked list */}
        <div className="flex flex-col gap-md">
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-cyan-200/80 bg-cyan-50 text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-200"
            >
              <NetworkIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.rightTitle}
            </h3>
          </header>

          <ol className="flex flex-col gap-1.5">
            {content.flow.map((node, i) => {
              const isLast = i === content.flow.length - 1;
              return (
                <li key={node.label} className="flex flex-col gap-1.5">
                  <article
                    className={cn(
                      'flex items-center justify-between gap-2 rounded-xl border-2 px-md py-2.5',
                      toneCard[node.tone],
                    )}
                  >
                    <code className="font-mono text-xsm sm:text-sm font-bold break-all">
                      {node.label}
                    </code>
                    {node.sub && (
                      <span className="font-mono text-[10px] opacity-80 break-all">{node.sub}</span>
                    )}
                  </article>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="flex justify-center text-[var(--term-muted)]"
                    >
                      <ArrowDownIcon className="h-4 w-4 sm:hidden" />
                      <ArrowRightIcon className="hidden sm:block h-4 w-4 rotate-90" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>

          <div className="mt-1 flex items-center gap-2">
            <span
              aria-hidden="true"
              className="flex-1 border-t-2 border-dashed border-[var(--term-border)]"
            />
            <span className="text-[10px] sm:text-xsm font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.bottomLabel}
            </span>
            <span
              aria-hidden="true"
              className="flex-1 border-t-2 border-dashed border-[var(--term-border)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
