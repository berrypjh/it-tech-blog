import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { StepSectionHeader } from '../../usage-vs-internals/components/StepSectionHeader';
import type { ReadingPerspectiveContent } from '../content';
import { ArrowRightIcon } from '../icons';
import { stageTones } from '../tones';

type Props = { content: ReadingPerspectiveContent['example'] };

/** mini dark code panel for the App.js example */
const CodePanel = ({ filename, code }: { filename: string; code: string }) => {
  const lines = code.split('\n');
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-950 overflow-hidden shadow-[0_2px_0_var(--term-border)]">
      <div className="flex items-center justify-between border-b border-slate-800 px-md py-2">
        <div className="flex items-center gap-1.5">
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-red-400/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-amber-300/80" />
          <span aria-hidden="true" className="block h-2 w-2 rounded-full bg-emerald-400/80" />
        </div>
        <span className="text-[10px] font-mono text-slate-400">{filename}</span>
      </div>
      <pre className="overflow-x-auto px-md py-md text-[11.5px] sm:text-[12px] leading-[1.7] font-mono text-slate-100">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span
                aria-hidden="true"
                className="select-none w-6 shrink-0 pr-2 text-right text-slate-600 tabular-nums"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre">{colorize(line)}</span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
};

const KEYWORDS = new Set(['function', 'return']);
const colorize = (line: string): React.ReactNode => {
  const tokens = line.split(/(\s+|[(){};<>/])/);
  return tokens.map((tok, i) => {
    if (!tok) return null;
    if (KEYWORDS.has(tok))
      return (
        <span key={i} className="text-sky-300">
          {tok}
        </span>
      );
    if (/^h[1-6]$/.test(tok))
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    if (/^[A-Z][A-Za-z]*$/.test(tok))
      return (
        <span key={i} className="text-amber-200">
          {tok}
        </span>
      );
    if (/^[a-z_$][\w$]*$/.test(tok))
      return (
        <span key={i} className="text-slate-100">
          {tok}
        </span>
      );
    return (
      <span key={i} className="text-slate-400">
        {tok}
      </span>
    );
  });
};

export const ExampleFlowWalkthrough = ({ content }: Props) => {
  return (
    <section id="section-example" aria-labelledby="heading-example" className="space-y-lg">
      <StepSectionHeader id="example" num={content.sectionNum} title={content.title} />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.68fr)] gap-md lg:gap-lg items-start">
        {/* 좌측 code panel */}
        <CodePanel filename={content.codeFile} code={content.code} />

        {/* 우측 flow board */}
        <article className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg shadow-[0_2px_0_var(--term-border)]">
          {/* 상단 dotted progress line + blue nodes */}
          <div className="relative h-6 mb-md hidden lg:block" aria-hidden="true">
            <span className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-px border-t border-dashed border-sky-300 dark:border-sky-700" />
            <div className="absolute inset-0 grid grid-cols-5">
              {content.steps.map((s, i) => (
                <div key={s.num} className="relative flex items-center justify-center">
                  <span
                    className={cn(
                      'inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                      stageTones[s.tone].num,
                    )}
                  >
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 단계 카드 + 사이 arrow */}
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-1 items-stretch">
            {content.steps.map((step, idx) => {
              const t = stageTones[step.tone];
              const isLast = idx === content.steps.length - 1;
              return (
                <Fragment key={step.num}>
                  <li className="flex">
                    <article
                      className={cn(
                        'flex flex-col items-center text-center w-full gap-1 rounded-md border bg-white dark:bg-slate-900 p-sm transition-all',
                        'hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)]',
                        t.border,
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'lg:hidden inline-flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold tabular-nums',
                          t.num,
                        )}
                      >
                        {step.num}
                      </span>
                      <h4 className={cn('text-xsm font-bold tracking-tight', t.text)}>
                        {step.title}
                      </h4>
                      <div className="text-[11px] text-[var(--term-muted)] leading-relaxed break-keep font-mono">
                        {step.body.map((line, i) => (
                          <span key={i} className="block">
                            {line}
                          </span>
                        ))}
                      </div>
                    </article>
                  </li>
                  {!isLast && (
                    <li
                      aria-hidden="true"
                      className="hidden lg:flex items-center justify-center text-sky-500 dark:text-sky-400"
                    >
                      <ArrowRightIcon className="h-4 w-4" />
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ol>

          <p className="mt-md text-center text-[10px] text-[var(--term-muted)]">
            {'//'} one JSX line, translated through every internal stage
          </p>
        </article>
      </div>
    </section>
  );
};
