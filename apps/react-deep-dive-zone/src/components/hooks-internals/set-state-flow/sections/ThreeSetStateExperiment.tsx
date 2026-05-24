import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ExperimentSide, SetStateFlowContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, RotateCwIcon, SparklesIcon, XCircleIcon } from '../icons';

type Props = { content: SetStateFlowContent['experiment'] };

const KEYWORDS = new Set(['const', 'let', 'var', 'function', 'return']);
const COMMENT_PREFIX = '//';

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-sky-300">
        {tok}
      </span>
    );
  if (tok === 'useState')
    return (
      <span key={i} className="text-violet-300">
        {tok}
      </span>
    );
  if (tok === 'setCount' || tok === 'count' || tok === 'c')
    return (
      <span key={i} className="text-amber-200">
        {tok}
      </span>
    );
  if (/^\d+$/.test(tok))
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

const ExperimentCard = ({ side }: { side: ExperimentSide }) => {
  const lines = side.code.split('\n');
  const isSuccess = side.tone === 'emerald';
  return (
    <article
      className={cn(
        'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        isSuccess
          ? 'border-emerald-300/80 bg-emerald-50/40 dark:border-emerald-700/60 dark:bg-emerald-950/20'
          : 'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/60 dark:bg-rose-950/20',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex h-9 w-9 items-center justify-center rounded-full',
              isSuccess
                ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900'
                : 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
            )}
          >
            {isSuccess ? (
              <CheckCircleIcon className="h-5 w-5" />
            ) : (
              <XCircleIcon className="h-5 w-5" />
            )}
          </span>
          <h3
            className={cn(
              'text-sm sm:text-md font-bold break-keep',
              isSuccess
                ? 'text-emerald-800 dark:text-emerald-100'
                : 'text-rose-800 dark:text-rose-100',
            )}
          >
            {side.title}
          </h3>
        </div>
        <code
          className={cn(
            'inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[10px] font-bold break-all',
            isSuccess
              ? 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-100'
              : 'border-rose-300/80 bg-rose-100 text-rose-800 dark:border-rose-700/60 dark:bg-rose-950/60 dark:text-rose-100',
          )}
        >
          {side.badge}
        </code>
      </header>

      <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950">
        <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.75] font-mono">
          <code>
            {lines.map((line, i) => {
              if (line.trim().startsWith(COMMENT_PREFIX)) {
                return (
                  <div key={i} className="flex">
                    <span
                      aria-hidden="true"
                      className="select-none w-6 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
                    >
                      {i + 1}
                    </span>
                    <span className="whitespace-pre text-emerald-400 italic">{line}</span>
                  </div>
                );
              }
              const tokens = line.split(/(\s+|[(){}[\];,.=>])/);
              return (
                <div key={i} className="flex">
                  <span
                    aria-hidden="true"
                    className="select-none w-6 shrink-0 pr-3 text-right text-slate-600 tabular-nums"
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

      <aside
        className={cn(
          'rounded-xl border p-md',
          isSuccess
            ? 'border-emerald-300/70 bg-white dark:border-emerald-800/60 dark:bg-emerald-950/30'
            : 'border-rose-300/70 bg-white dark:border-rose-800/60 dark:bg-rose-950/30',
        )}
      >
        <p
          className={cn(
            'text-sm sm:text-md font-bold mb-1',
            isSuccess
              ? 'text-emerald-800 dark:text-emerald-100'
              : 'text-rose-800 dark:text-rose-100',
          )}
        >
          {side.resultValue}
        </p>
        <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {side.resultReason}
        </p>
      </aside>
    </article>
  );
};

export const ThreeSetStateExperiment = ({ content }: Props) => (
  <section
    aria-labelledby="heading-experiment"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="experiment"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
      <ExperimentCard side={content.left} />
      <ExperimentCard side={content.right} />
    </div>

    {/* Bottom queue visualization */}
    <aside
      className={cn(
        'mt-md rounded-2xl border-2 p-md',
        'border-cyan-300/70 bg-cyan-50/40 dark:border-cyan-800/60 dark:bg-cyan-950/20',
      )}
    >
      <div className="flex flex-col gap-sm">
        <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-700 dark:text-cyan-300">
          {content.queueLabel}
        </p>
        <div className="flex flex-wrap items-center gap-1.5">
          {content.queueNodes.map((node, i) => {
            const isLast = i === content.queueNodes.length - 1;
            return (
              <span key={node} className="inline-flex items-center gap-1.5">
                <code className="inline-flex items-center rounded-lg border-2 border-cyan-300/80 bg-white px-2.5 py-1.5 font-mono text-[11px] font-bold text-cyan-800 dark:border-cyan-700/60 dark:bg-cyan-950/60 dark:text-cyan-100 break-all">
                  {node}
                </code>
                {!isLast && (
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-cyan-700 dark:text-cyan-300"
                  />
                )}
              </span>
            );
          })}
          <span
            aria-hidden="true"
            className="inline-flex items-center gap-1 text-cyan-700 dark:text-cyan-300 ml-1"
          >
            <RotateCwIcon className="h-3.5 w-3.5" />
          </span>
        </div>
        <p className="text-xsm leading-relaxed text-cyan-900 dark:text-cyan-100 break-keep">
          {content.bottomExplanation}
        </p>
      </div>
    </aside>
  </section>
);
