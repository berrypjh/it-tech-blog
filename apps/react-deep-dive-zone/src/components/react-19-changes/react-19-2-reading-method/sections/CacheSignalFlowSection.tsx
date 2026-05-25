import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { ArrowRightIcon, DatabaseIcon, SparklesIcon } from '../icons';
import { tone } from '../tone';

import { CodePanel } from './_CodePanel';
import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['cacheSignal'] };

export const CacheSignalFlowSection = ({ content }: Props) => (
  <section aria-labelledby="cache-signal-heading" className="flex flex-col">
    <SectionHeader
      id="cache-signal-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
      {/* LEFT: code */}
      <div className="flex">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
          toneBorder="border-blue-700/70"
        />
      </div>

      {/* RIGHT: flow + state */}
      <div className="flex flex-col gap-md">
        {/* Flow */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-blue-200/80 bg-blue-50/30 dark:border-blue-700/70 dark:bg-blue-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <DatabaseIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200 break-keep">
              {content.flowTitle}
            </h3>
          </header>

          <ol className="flex flex-col gap-2">
            {content.flow.map((step, idx) => {
              const t = tone[step.tone];
              const Icon = iconRegistry[step.iconKey];
              const isLast = idx === content.flow.length - 1;
              return (
                <Fragment key={step.title}>
                  <li>
                    <article
                      className={cn(
                        'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                        t.border,
                        'bg-white dark:bg-[var(--term-bg)]',
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                          t.iconChip,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="flex flex-col">
                        <span className={cn('text-xsm font-bold break-keep', t.text)}>
                          {step.title}
                        </span>
                        <span className="text-[10px] text-[var(--term-muted)] break-keep">
                          {step.body}
                        </span>
                      </div>
                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex h-6 items-center px-1 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                          t.chip,
                        )}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </article>
                  </li>
                  {!isLast && (
                    <li aria-hidden="true" className="flex justify-center">
                      <span className="inline-flex h-5 w-5 items-center justify-center text-slate-400 dark:text-slate-500">
                        <ArrowRightIcon className="h-3.5 w-3.5 rotate-90" />
                      </span>
                    </li>
                  )}
                </Fragment>
              );
            })}
          </ol>
        </article>

        {/* AbortSignal states */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <SparklesIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.stateTitle}
            </h3>
          </header>

          <ol className="grid grid-cols-3 gap-2">
            {content.states.map((state) => {
              const t = tone[state.tone];
              return (
                <li key={state.state}>
                  <article
                    className={cn(
                      'flex flex-col items-center gap-1 rounded-xl border-2 px-2 py-2 text-center',
                      t.borderStrong,
                      t.bg,
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn('inline-flex h-2 w-2 rounded-full', t.dot)}
                    />
                    <code className={cn('font-mono text-xsm font-bold', t.text)}>
                      {state.label}
                    </code>
                    <span className="text-[10px] text-[var(--term-muted)] break-keep">
                      {state.body}
                    </span>
                  </article>
                </li>
              );
            })}
          </ol>

          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.summary}
          </p>
        </article>
      </div>
    </div>
  </section>
);
