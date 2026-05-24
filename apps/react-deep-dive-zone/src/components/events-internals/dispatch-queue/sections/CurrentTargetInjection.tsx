import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { DispatchQueueOrderContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ClockIcon,
  PlayCircleIcon,
  TargetIcon,
  TerminalIcon,
} from '../icons';

type Props = { content: DispatchQueueOrderContent['currentTarget'] };

const stepIcons = [ClockIcon, PlayCircleIcon, TargetIcon];

export const CurrentTargetInjection = ({ content }: Props) => (
  <section aria-labelledby="heading-current-target">
    <NumberedSectionHeader
      id="current-target"
      step={content.step}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<TargetIcon className="h-5 w-5" />}
    />

    <ol className={cn('grid items-stretch gap-2 sm:gap-3', 'grid-cols-1 lg:grid-cols-3')}>
      {content.steps.map((step, i) => {
        const isLast = i === content.steps.length - 1;
        const Icon = stepIcons[i] ?? ClockIcon;
        return (
          <li
            key={step.title}
            className={cn(
              'group relative flex flex-col gap-3 rounded-2xl border-2 p-md sm:p-lg transition-all',
              'hover:-translate-y-0.5 motion-reduce:transform-none',
              'shadow-[0_2px_0_var(--term-border)]',
              'border-blue-200/80 bg-white dark:border-blue-700/70 dark:bg-slate-950/40',
            )}
          >
            <header className="flex items-center gap-3">
              <span
                aria-hidden="true"
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500"
              >
                <Icon className="h-5 w-5" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">
                  step {i + 1}
                </span>
                <h3 className="text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep">
                  {step.title}
                </h3>
              </div>
            </header>

            <code className="block rounded-md border border-[var(--term-border)] bg-[var(--term-surface)]/60 px-3 py-2 font-mono text-[11px] sm:text-xsm text-[var(--term-fg)] break-all">
              {step.body}
            </code>

            {step.inspector && (
              <div className={cn('rounded-xl border-2 bg-slate-950 p-md', 'border-slate-800')}>
                <div className="flex items-center gap-2 mb-1">
                  <TerminalIcon aria-hidden="true" className="h-3.5 w-3.5 text-slate-400" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    {step.inspectorTitle}
                  </span>
                </div>
                <dl className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-3">
                  {step.inspector.map((row) => (
                    <div key={row.key} className="contents">
                      <dt className="font-mono text-[10px] text-slate-500">{row.key}:</dt>
                      <dd
                        className={cn(
                          'font-mono text-[11px] sm:text-xsm break-all',
                          row.highlight
                            ? row.value === 'null'
                              ? 'text-amber-300 font-bold'
                              : 'text-blue-300 font-bold'
                            : 'text-slate-200',
                        )}
                      >
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {step.code && (
              <pre className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 px-md py-2 font-mono text-[11px] leading-[1.7] text-slate-100">
                <code className="whitespace-pre">{step.code}</code>
              </pre>
            )}

            {!isLast && (
              <>
                <span
                  aria-hidden="true"
                  className="hidden lg:inline-flex absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-[var(--term-bg)] text-blue-600 shadow-[0_1px_0_var(--term-border)] dark:border-blue-700/60 dark:text-blue-300"
                >
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
                <span
                  aria-hidden="true"
                  className="lg:hidden flex justify-center text-blue-500 dark:text-blue-300 mt-1"
                >
                  <ArrowDownIcon className="h-4 w-4" />
                </span>
              </>
            )}
          </li>
        );
      })}
    </ol>
  </section>
);
