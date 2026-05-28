import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ExperimentResult, UseEffectInternalsContent } from '../content';
import { ArrowRightIcon, CheckCircleIcon, PauseCircleIcon, SparklesIcon } from '../icons';

type Props = { content: UseEffectInternalsContent['depsExperiment'] };

const KEYWORDS = new Set(['return']);

const renderCodeLine = (line: string, key: number) => {
  const tokens = line.split(/(\s+|[(){}[\];,.=>])/);
  return (
    <div key={key} className="whitespace-pre">
      {tokens.map((tok, i) => {
        if (!tok) return null;
        if (KEYWORDS.has(tok))
          return (
            <span key={i} className="text-sky-300">
              {tok}
            </span>
          );
        if (tok === 'useEffect')
          return (
            <span key={i} className="text-violet-300">
              {tok}
            </span>
          );
        if (tok === 'console' || tok === 'log')
          return (
            <span key={i} className="text-teal-300">
              {tok}
            </span>
          );
        if (tok === 'count')
          return (
            <span key={i} className="text-amber-200">
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
      })}
    </div>
  );
};

const ResultCard = ({
  result,
  runLabel,
  skipLabel,
}: {
  result: ExperimentResult;
  runLabel: string;
  skipLabel: string;
}) => {
  const isRun = result.result === 'run';
  return (
    <article
      className={cn(
        'flex flex-col gap-sm rounded-2xl border-2 p-md',
        'shadow-[0_2px_0_var(--term-border)] transition-all',
        'motion-safe:hover:-translate-y-0.5',
        isRun
          ? 'border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/60 dark:bg-emerald-950/30'
          : 'border-violet-300/80 bg-violet-50/60 dark:border-violet-700/60 dark:bg-violet-950/30',
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <code
          className={cn(
            'font-mono text-xsm sm:text-sm font-bold break-all',
            isRun
              ? 'text-emerald-800 dark:text-emerald-100'
              : 'text-violet-800 dark:text-violet-100',
          )}
        >
          {result.transition}
        </code>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-wider',
            isRun
              ? 'border-emerald-300/80 bg-emerald-100 text-emerald-800 dark:border-emerald-700/60 dark:bg-emerald-950/60 dark:text-emerald-100'
              : 'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/60 dark:bg-violet-950/60 dark:text-violet-100',
          )}
        >
          {isRun ? (
            <CheckCircleIcon aria-hidden="true" className="h-3 w-3" />
          ) : (
            <PauseCircleIcon aria-hidden="true" className="h-3 w-3" />
          )}
          {isRun ? runLabel : skipLabel}
        </span>
      </header>
      <ul className="flex flex-col gap-1">
        {result.body.map((line) => (
          <li
            key={line}
            className="flex items-start gap-2 rounded-lg border border-[var(--term-border)] bg-white px-2.5 py-1.5 dark:bg-slate-950/40"
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-1.5 inline-block h-1.5 w-1.5 rounded-full shrink-0',
                isRun ? 'bg-emerald-500 dark:bg-emerald-400' : 'bg-violet-500 dark:bg-violet-400',
              )}
            />
            <span className="text-[11px] sm:text-xsm text-[var(--term-fg)] break-keep">{line}</span>
          </li>
        ))}
      </ul>
    </article>
  );
};

export const DependenciesExperiment = ({ content }: Props) => {
  const lines = content.code.split('\n');
  // Parse count flow into nodes
  const flowNodes = content.countFlow.split(/\s*→\s*/);
  return (
    <section
      aria-labelledby="heading-deps-experiment"
      className={cn(
        'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <SectionHeader
        id="deps-experiment"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<SparklesIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-md lg:gap-lg">
        {/* Left: code */}
        <article className="flex flex-col gap-md">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
            {content.codeLabel}
          </span>
          <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 shadow-[0_2px_0_var(--term-border)]">
            <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.7] font-mono">
              <code>{lines.map((line, i) => renderCodeLine(line, i))}</code>
            </pre>
          </div>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.codeDescription}
          </p>
        </article>

        {/* Right: count flow + results */}
        <div className="flex flex-col gap-md">
          <div
            className={cn(
              'flex flex-col gap-2 rounded-2xl border bg-[var(--term-bg)] p-md',
              'border-[var(--term-border)] shadow-[0_1px_0_var(--term-border)]',
            )}
          >
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
              {content.countFlowLabel}
            </span>
            <div className="flex items-center flex-wrap gap-1.5">
              {flowNodes.map((node, i) => {
                const isLast = i === flowNodes.length - 1;
                return (
                  <span key={i} className="inline-flex items-center gap-1.5">
                    <code className="inline-flex items-center rounded-md border border-sky-300/70 bg-sky-50 px-2 py-1 font-mono text-[11px] font-bold text-sky-800 dark:border-sky-700/60 dark:bg-sky-950/40 dark:text-sky-100">
                      {node}
                    </code>
                    {!isLast && (
                      <ArrowRightIcon
                        aria-hidden="true"
                        className="h-3.5 w-3.5 text-[var(--term-muted)]"
                      />
                    )}
                  </span>
                );
              })}
            </div>
          </div>

          <ol className="flex flex-col gap-2">
            {content.results.map((r) => (
              <li key={r.transition}>
                <ResultCard result={r} runLabel={content.runLabel} skipLabel={content.skipLabel} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};
