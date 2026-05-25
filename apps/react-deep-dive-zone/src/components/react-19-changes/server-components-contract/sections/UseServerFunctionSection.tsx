import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ServerComponentsContractContent } from '../content';
import { ArrowDownIcon, BracesIcon } from '../icons';
import { boundaryTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['useServer'] };

export const UseServerFunctionSection = ({ content }: Props) => (
  <section aria-labelledby="use-server-heading" className="flex flex-col">
    <SectionHeader
      id="use-server-heading"
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
          toneBorder="border-teal-700/70"
        />
      </div>

      {/* RIGHT: server function flow */}
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
          >
            <BracesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.flowTitle}
          </h3>
        </header>

        <ol className="flex flex-col gap-2">
          {content.flow.map((step, idx) => {
            const tone = boundaryTone[step.boundary];
            const Icon = iconRegistry[step.iconKey];
            const isLast = idx === content.flow.length - 1;
            return (
              <Fragment key={step.title}>
                <li>
                  <article
                    className={cn(
                      'grid grid-cols-[auto_minmax(0,_1fr)_auto] items-center gap-2 rounded-xl border-2 px-3 py-2',
                      tone.border,
                      'bg-white dark:bg-[var(--term-bg)]',
                      'shadow-[0_1px_0_var(--term-border)]',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-lg border',
                        tone.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className={cn('text-xsm font-bold break-keep', tone.text)}>
                        {step.title}
                      </span>
                      <span className="text-[10px] text-[var(--term-muted)] break-keep">
                        {step.body}
                      </span>
                    </div>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                        tone.chip,
                      )}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </article>
                </li>
                {!isLast && (
                  <li aria-hidden="true" className="flex justify-center">
                    <span
                      className={cn(
                        'inline-flex h-6 w-6 items-center justify-center rounded-full border',
                        tone.iconChip,
                      )}
                    >
                      <ArrowDownIcon className="h-3 w-3" />
                    </span>
                  </li>
                )}
              </Fragment>
            );
          })}
        </ol>
      </article>
    </div>
  </section>
);
