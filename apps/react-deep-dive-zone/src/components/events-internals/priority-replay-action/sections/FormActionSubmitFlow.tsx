import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { AdvancedWrapupContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  LoaderIcon,
  PuzzleIcon,
  RocketIcon,
  SendIcon,
  SparklesIcon,
  TargetIcon,
} from '../icons';

type Props = { content: AdvancedWrapupContent['formAction'] };

const KEYWORDS = new Set(['function', 'return', 'const']);

const renderToken = (tok: string, i: number) => {
  if (!tok) return null;
  if (KEYWORDS.has(tok))
    return (
      <span key={i} className="text-emerald-700 dark:text-emerald-300 font-semibold">
        {tok}
      </span>
    );
  if (tok === 'action' || tok === 'saveTodo' || tok === 'type' || tok === 'name')
    return (
      <span key={i} className="text-emerald-700 dark:text-emerald-300 font-bold">
        {tok}
      </span>
    );
  if (tok === 'form' || tok === 'input' || tok === 'button')
    return (
      <span key={i} className="text-rose-600 dark:text-rose-300">
        {tok}
      </span>
    );
  if (/^['"`].*['"`]$/.test(tok))
    return (
      <span key={i} className="text-amber-700 dark:text-amber-300">
        {tok}
      </span>
    );
  return (
    <span key={i} className="text-slate-700 dark:text-slate-200">
      {tok}
    </span>
  );
};

const flowIcons = [SendIcon, PuzzleIcon, TargetIcon, LoaderIcon, SparklesIcon];

export const FormActionSubmitFlow = ({ content }: Props) => {
  const lines = content.code.split('\n');

  return (
    <section aria-labelledby="heading-form-action">
      <NumberedSectionHeader
        id="form-action"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<RocketIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-emerald-300/80 bg-gradient-to-br from-emerald-50/70 via-white to-teal-50/40',
          'dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-md lg:gap-lg items-start">
          {/* LEFT: code */}
          <div className="flex flex-col gap-md">
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-[0_2px_0_rgba(16,185,129,0.3)] dark:bg-emerald-400 dark:text-slate-900"
              >
                <RocketIcon className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                {content.label}
              </span>
            </header>
            <article
              className={cn(
                'overflow-hidden rounded-2xl border bg-[var(--term-bg)] shadow-[0_1px_0_var(--term-border)]',
                'border-emerald-200/80 dark:border-emerald-800/60',
              )}
            >
              <pre className="overflow-x-auto px-md py-md text-[12px] sm:text-xsm leading-[1.85] font-mono">
                <code>
                  {lines.map((line, i) => {
                    const tokens = line.split(/(\s+|[(){}[\];,.<>=/])/);
                    return (
                      <div key={i} className="flex">
                        <span
                          aria-hidden="true"
                          className="select-none w-7 shrink-0 pr-3 text-right text-[var(--term-dim)] tabular-nums"
                        >
                          {i + 1}
                        </span>
                        <span className="whitespace-pre">{tokens.map(renderToken)}</span>
                      </div>
                    );
                  })}
                </code>
              </pre>
            </article>

            {/* pending pill */}
            <div
              className={cn(
                'flex items-center gap-2 rounded-2xl border-2 px-md py-3',
                'border-amber-300/80 bg-amber-50/60 dark:border-amber-700/60 dark:bg-amber-950/30',
              )}
            >
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900"
              >
                <LoaderIcon className="h-4 w-4 animate-pulse motion-reduce:animate-none" />
              </span>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                {content.pendingLabel}
              </span>
              <code className="ml-auto font-mono text-xsm sm:text-sm font-bold text-amber-800 dark:text-amber-200">
                {content.pendingText}
              </code>
            </div>
          </div>

          {/* RIGHT: 5-step flow */}
          <ol className="flex flex-col gap-1">
            {content.flow.map((step, i) => {
              const isLast = i === content.flow.length - 1;
              const Icon = flowIcons[i] ?? SendIcon;
              return (
                <li key={step.title} className="flex flex-col">
                  <div
                    className={cn(
                      'flex items-center gap-3 rounded-2xl border-2 px-md py-2.5 transition-colors',
                      'border-emerald-200/80 bg-white dark:border-emerald-700/60 dark:bg-slate-950/40',
                      'hover:border-emerald-400 dark:hover:border-emerald-500',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white text-[10px] font-mono font-bold dark:bg-emerald-400 dark:text-slate-900"
                    >
                      {step.step}
                    </span>
                    <span
                      aria-hidden="true"
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200"
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                      <code className="font-mono text-xsm sm:text-sm font-bold text-emerald-700 dark:text-emerald-200 break-keep">
                        {step.title}
                      </code>
                      <span className="text-[10px] sm:text-[11px] text-[var(--term-muted)] break-keep">
                        {step.body}
                      </span>
                    </div>
                    <ArrowRightIcon
                      aria-hidden="true"
                      className="hidden sm:block h-3.5 w-3.5 text-emerald-400 dark:text-emerald-500"
                    />
                  </div>
                  {!isLast && (
                    <span
                      aria-hidden="true"
                      className="self-center my-0.5 text-emerald-400 dark:text-emerald-500"
                    >
                      <ArrowDownIcon className="h-3.5 w-3.5" />
                    </span>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </article>
    </section>
  );
};
