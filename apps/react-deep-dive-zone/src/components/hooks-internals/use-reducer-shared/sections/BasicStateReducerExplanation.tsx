import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { UseReducerSharedContent } from '../content';
import { CheckCircleIcon, LightbulbIcon, RepeatIcon } from '../icons';

type Props = { content: UseReducerSharedContent['basicReducer'] };

const KEYWORDS = new Set(['function', 'return', 'typeof']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'basicStateReducer' || tok === 'action')
    return (
      <span key={i} className="text-teal-300">
        {tok}
      </span>
    );
  if (tok === 'state')
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
  return (
    <span key={i} className="text-slate-200">
      {tok}
    </span>
  );
};

export const BasicStateReducerExplanation = ({ content }: Props) => {
  const lines = content.code.split('\n');
  return (
    <section
      aria-labelledby="heading-basic-reducer"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="basic-reducer"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RepeatIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Code panel */}
        <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
          <div className="flex items-center justify-between gap-2 border-b border-slate-800 px-md py-2">
            <div className="flex items-center gap-1.5">
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span aria-hidden="true" className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span
                aria-hidden="true"
                className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80"
              />
              <span className="ml-2 text-[10px] font-mono text-slate-500">basicStateReducer</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
              js
            </span>
          </div>
          <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
            <code>
              {lines.map((line, i) => {
                const tokens = line.split(/(\s+|[(){}[\]:;,.?])/);
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

        {/* Explanation card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-teal-50/40 dark:border-teal-800/60 dark:bg-teal-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-start gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900"
            >
              <LightbulbIcon className="h-4 w-4" />
            </span>
            <h3 className="text-xsm sm:text-sm font-bold text-teal-800 dark:text-teal-100 leading-snug break-keep">
              {content.explanationTitle}
            </h3>
          </header>

          <ul className="flex flex-col gap-1.5">
            {content.items.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 rounded-lg border border-teal-200/70 bg-white px-3 py-2 dark:border-teal-800/60 dark:bg-teal-950/30"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-teal-500 dark:bg-teal-400 shrink-0"
                />
                <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {item}
                </p>
              </li>
            ))}
          </ul>

          <span
            className={cn(
              'mt-auto inline-flex items-center gap-2 self-start rounded-full border-2 px-3 py-1.5',
              'border-emerald-400/70 bg-emerald-50 text-emerald-700 text-[11px] sm:text-xsm font-bold',
              'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
            )}
          >
            <CheckCircleIcon aria-hidden="true" className="h-3.5 w-3.5" />
            <span className="break-keep">{content.bottomEmphasis}</span>
          </span>
        </article>
      </div>
    </section>
  );
};
