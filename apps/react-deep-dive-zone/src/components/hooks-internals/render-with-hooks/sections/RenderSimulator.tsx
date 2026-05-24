import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { RenderWithHooksContent } from '../content';
import { ArrowDownIcon, PlayCircleIcon, RefreshCwIcon, SparklesIcon } from '../icons';

type Props = { content: RenderWithHooksContent['simulator'] };

const KEYWORDS = new Set(['import', 'from', 'export', 'default', 'function', 'const', 'return']);
const JSX_TAGS = new Set(['div', 'p', 'button']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'useState' || tok === 'setCount' || tok === 'count' || tok === 'c')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'Counter')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (JSX_TAGS.has(tok))
    return (
      <span key={i} className="text-cyan-300">
        {tok}
      </span>
    );
  if (tok === 'onClick' || tok === 'className')
    return (
      <span key={i} className="text-pink-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-emerald-300">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
    return (
      <span key={i} className="text-amber-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const RenderSimulator = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-simulator"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="simulator"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: code panel */}
        <article className="flex flex-col gap-md">
          <header className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 border border-blue-200/70 text-blue-700 dark:bg-blue-950/40 dark:border-blue-800/60 dark:text-blue-200 px-2.5 py-1 text-[10px] font-mono font-bold uppercase tracking-wider">
              <SparklesIcon aria-hidden="true" className="h-3 w-3" />
              {content.guide}
            </span>
          </header>

          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)] flex-1">
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
                <span className="ml-2 text-[10px] font-mono text-slate-500">
                  {content.codeFile}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                jsx
              </span>
            </div>
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
              <code>
                {lines.map((line, i) => {
                  const tokens = line.split(/(\s+|[(){}[\];,.<>=])/);
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

        {/* Right: simulator panel */}
        <div className="flex flex-col gap-md">
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-violet-200/80 bg-violet-50 text-violet-700 dark:border-violet-800/60 dark:bg-violet-950/40 dark:text-violet-200"
            >
              <PlayCircleIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)]">
              {content.rightTitle}
            </h3>
          </header>

          <ol className="flex flex-col gap-2">
            {content.cards.map((card, i) => {
              const isLast = i === content.cards.length - 1;
              const accent = card.tone === 'sky' ? accentStyles.sky : accentStyles.emerald;
              const Icon = i === 0 ? PlayCircleIcon : RefreshCwIcon;
              return (
                <li key={card.title} className="flex flex-col gap-2">
                  <article
                    className={cn(
                      'flex flex-col gap-sm rounded-2xl border-2 bg-[var(--term-bg)] p-md',
                      'shadow-[0_2px_0_var(--term-border)] transition-colors',
                      accent.border,
                    )}
                  >
                    <header className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                            accent.iconBox,
                          )}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className={cn('text-xsm sm:text-sm font-bold break-keep', accent.text)}>
                          {card.title}
                        </h4>
                      </div>
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
                          accent.chip,
                        )}
                      >
                        {card.badge}
                      </span>
                    </header>

                    <ul className="flex flex-col gap-1.5">
                      {card.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-[11px] sm:text-xsm text-[var(--term-fg)]"
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              'mt-1.5 inline-block h-1.5 w-1.5 rounded-full',
                              accent.dot,
                            )}
                          />
                          <span className="break-keep min-w-0 flex-1">
                            <span className="text-[var(--term-muted)] mr-1.5">{item.label}:</span>
                            {item.highlight ? (
                              <code className={cn('font-mono font-bold break-all', accent.text)}>
                                {item.value}
                              </code>
                            ) : (
                              <span className="break-keep">{item.value}</span>
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="flex justify-center text-[var(--term-muted)]"
                    >
                      <ArrowDownIcon className="h-5 w-5" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

const accentStyles = {
  sky: {
    border:
      'border-sky-300/80 dark:border-sky-700/70 hover:border-sky-400 dark:hover:border-sky-600',
    iconBox:
      'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200 border-sky-200/80 dark:border-sky-800/60',
    text: 'text-sky-700 dark:text-sky-200',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
    dot: 'bg-sky-500 dark:bg-sky-400',
  },
  emerald: {
    border:
      'border-emerald-300/80 dark:border-emerald-700/70 hover:border-emerald-400 dark:hover:border-emerald-600',
    iconBox:
      'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200 border-emerald-200/80 dark:border-emerald-800/60',
    text: 'text-emerald-700 dark:text-emerald-200',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
  },
};
