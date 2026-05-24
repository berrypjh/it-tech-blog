import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchSelectionContent } from '../content';
import {
  ChevronRightIcon,
  CodeIcon,
  ExternalLinkIcon,
  FileTextIcon,
  GitBranchIcon,
  SparklesIcon,
} from '../icons';

type Props = { content: DispatchSelectionContent['realCode'] };

const KEYWORDS = new Set([
  'function',
  'const',
  'let',
  'switch',
  'case',
  'break',
  'default',
  'return',
]);
const STRINGS = /^['"`].*['"`]$/;

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (
    tok === 'createEventListenerWrapperWithPriority' ||
    tok === 'getEventPriority' ||
    tok === 'dispatchDiscreteEvent' ||
    tok === 'dispatchContinuousEvent' ||
    tok === 'dispatchEvent' ||
    tok === 'DiscreteEventPriority' ||
    tok === 'ContinuousEventPriority'
  )
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (
    tok === 'listenerWrapper' ||
    tok === 'eventPriority' ||
    tok === 'targetContainer' ||
    tok === 'domEventName' ||
    tok === 'eventSystemFlags'
  )
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (tok === 'bind' || tok === 'null')
    return (
      <span key={i} className="text-amber-200">
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

const HIGHLIGHT_KEYWORDS = ['dispatchDiscreteEvent', 'dispatchContinuousEvent'];

export const RealCodePreview = ({ content }: Props) => {
  const lines = content.code.split('\n');

  return (
    <section aria-labelledby="heading-real-code">
      <NumberedSectionHeader
        id="real-code"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CodeIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] gap-md items-stretch">
        {/* Dark code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">{content.fileLabel}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\];,.])/);
                const isComment = /^\s*\/\//.test(line);
                const isHighlight =
                  !isComment && HIGHLIGHT_KEYWORDS.some((kw) => line.includes(kw));
                return (
                  <div
                    key={i}
                    className={cn(
                      'flex',
                      isHighlight && 'bg-violet-950/40 -mx-md px-md border-l-2 border-violet-400',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="select-none w-7 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    {isComment ? (
                      <span className="text-slate-500 italic whitespace-pre">{line}</span>
                    ) : (
                      <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                    )}
                  </div>
                );
              })}
            </code>
          </pre>
        </div>

        {/* Right-side stack */}
        <div className="flex flex-col gap-md">
          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-200 dark:border-blue-800/60"
              >
                <FileTextIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                {content.explanation.label}
              </span>
            </header>
            <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
              {content.explanation.body}
            </p>
          </article>

          <article
            className={cn(
              'flex flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-violet-200 bg-violet-50 text-violet-700 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60"
              >
                <SparklesIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-violet-700 dark:text-violet-300">
                {content.relatedLabel}
              </span>
            </header>
            <ul className="flex flex-wrap gap-1.5">
              {content.related.map((fn) => (
                <li
                  key={fn}
                  className="inline-flex items-center gap-1.5 rounded-full border border-violet-200/80 bg-violet-50 px-2.5 py-1 font-mono text-[10px] sm:text-[11px] font-bold text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200"
                >
                  <span
                    aria-hidden="true"
                    className="block h-1.5 w-1.5 rounded-full bg-violet-500 dark:bg-violet-400"
                  />
                  {fn}
                </li>
              ))}
            </ul>
          </article>

          <a
            href={content.button.href}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
              'group flex items-center gap-3 rounded-2xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
              'transition-all hover:-translate-y-0.5 hover:border-blue-300/70 dark:hover:border-blue-700/70',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
            )}
          >
            <span
              aria-hidden="true"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[var(--term-border)] bg-white text-[var(--term-fg)] dark:bg-slate-950/50"
            >
              <GitBranchIcon className="h-4 w-4" />
            </span>
            <span className="flex flex-col min-w-0 flex-1">
              <span className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.button.label}
              </span>
              <span className="flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                GitHub <ExternalLinkIcon className="h-3 w-3" aria-hidden="true" />
              </span>
            </span>
            <ChevronRightIcon
              aria-hidden="true"
              className="h-4 w-4 shrink-0 text-[var(--term-muted)] transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
