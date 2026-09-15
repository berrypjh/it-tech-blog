import { cx } from '@berrypjh/react-ui';
import { Code2, Split, Zap } from 'lucide-react';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { TransitionDeferredContent } from '../content';
import {
  responseCardBorder,
  responseIconBox,
  responsePill,
  responseTextStrong,
} from '../responseAccent';

type Props = { content: TransitionDeferredContent['startTransition'] };

const KEYWORDS = new Set(['const', 'function', 'return']);
const FN_NAMES = new Set(['useTransition', 'startTransition', 'setInput', 'setFilteredQuery']);

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
        className={cx(
          tok === 'useTransition' && 'text-cyan-300 font-semibold',
          tok === 'startTransition' && 'text-emerald-300 font-semibold',
          tok === 'setInput' && 'text-emerald-300 font-semibold',
          tok === 'setFilteredQuery' && 'text-amber-200 font-semibold',
        )}
      >
        {tok}
      </span>
    );
  if (tok === 'isPending' || tok === 'next' || tok === 'handleChange')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const StartTransitionUserCode = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section aria-labelledby="heading-start-transition">
      <NumberedSectionHeader
        id="start-transition"
        number={content.number}
        eyebrow={content.title}
        title={content.title}
        icon={<Code2 className="h-5 w-5" aria-hidden="true" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
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
                SearchBox.tsx
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              tsx
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
                    <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* state separation diagram */}
        <article
          className={cx(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-[var(--term-border)] bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60"
            >
              <Split className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="text-sm sm:text-md font-bold text-[var(--term-fg)] break-keep">
              {content.stateSeparationTitle}
            </h3>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-3 items-stretch">
            {/* input state */}
            <article
              className={cx(
                'flex h-full flex-col gap-2 rounded-xl border-2 p-3',
                responseCardBorder.emerald,
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                    responseIconBox.emerald,
                  )}
                >
                  <Zap className="h-4 w-4" aria-hidden="true" />
                </span>
                <span
                  className={cx(
                    'font-mono text-[10px] uppercase tracking-wider',
                    responseTextStrong.emerald,
                  )}
                >
                  {content.inputState.subtitle}
                </span>
              </header>
              <h4
                className={cx(
                  'text-xsm sm:text-sm font-bold break-keep',
                  responseTextStrong.emerald,
                )}
              >
                {content.inputState.title}
              </h4>
              <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)]">
                {content.inputState.value}
              </code>
              <code className="font-mono text-[10px] text-[var(--term-muted)]">
                {content.inputState.action}()
              </code>
              <span
                className={cx(
                  'mt-auto inline-flex items-center self-start rounded-full border px-2 py-0.5',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                  responsePill.emerald,
                )}
              >
                {content.inputState.badge}
              </span>
            </article>

            {/* separator */}
            <div className="flex flex-col items-center justify-center gap-2 sm:py-2">
              <span
                aria-hidden="true"
                className="hidden sm:block h-full w-px border-l-2 border-dashed border-[var(--term-border)]"
              />
              <span className="inline-flex items-center rounded-full border-2 border-[var(--term-border)] bg-[var(--term-bg)] px-3 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-[var(--term-muted)]">
                {content.separatorLabel}
              </span>
              <span
                aria-hidden="true"
                className="hidden sm:block h-full w-px border-l-2 border-dashed border-[var(--term-border)]"
              />
            </div>

            {/* list state */}
            <article
              className={cx(
                'flex h-full flex-col gap-2 rounded-xl border-2 p-3',
                responseCardBorder.blue,
              )}
            >
              <header className="flex items-center justify-between gap-2">
                <span
                  aria-hidden="true"
                  className={cx(
                    'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                    responseIconBox.blue,
                  )}
                >
                  <Split className="h-4 w-4" aria-hidden="true" />
                </span>
                <span
                  className={cx(
                    'font-mono text-[10px] uppercase tracking-wider',
                    responseTextStrong.blue,
                  )}
                >
                  {content.listState.subtitle}
                </span>
              </header>
              <h4
                className={cx('text-xsm sm:text-sm font-bold break-keep', responseTextStrong.blue)}
              >
                {content.listState.title}
              </h4>
              <code className="font-mono text-[11px] sm:text-xsm text-[var(--term-fg)]">
                {content.listState.value}
              </code>
              <span
                className={cx(
                  'mt-auto inline-flex items-center self-start rounded-full border px-2 py-0.5',
                  'text-[10px] font-mono font-bold uppercase tracking-wider',
                  responsePill.blue,
                )}
              >
                {content.listState.badge}
              </span>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};
