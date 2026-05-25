import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UseSuspenseErrorModelContent } from '../content';
import { ArrowDownIcon, ArrowRightIcon, GitBranchIcon } from '../icons';
import { stateTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseSuspenseErrorModelContent['thenableTracking'] };

export const ThenableTrackingSection = ({ content }: Props) => (
  <section aria-labelledby="thenable-tracking-heading" className="flex flex-col">
    <SectionHeader
      id="thenable-tracking-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-slate-200 bg-gradient-to-br from-white via-purple-50/30 to-white',
        'dark:border-slate-700 dark:from-[var(--term-bg)] dark:via-purple-950/20 dark:to-[var(--term-bg)]',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      {/* Main 3 steps */}
      <ol
        className={cn(
          'grid grid-cols-1 gap-2',
          'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1.4fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
        )}
      >
        {content.steps.map((step, idx) => {
          const tone = stateTone[step.state];
          const Icon = iconRegistry[step.iconKey];
          const isLast = idx === content.steps.length - 1;
          return (
            <Fragment key={step.title}>
              <li>
                <article
                  className={cn(
                    'flex h-full flex-col gap-sm rounded-2xl border-2 p-md',
                    tone.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <div className="flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                        tone.iconChip,
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>
                      {step.title}
                    </h3>
                  </div>
                  {step.caption && (
                    <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                      {step.caption}
                    </p>
                  )}
                  {step.items && (
                    <ul className="flex flex-col gap-1.5">
                      {step.items.map((item) => (
                        <li
                          key={item}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5',
                            tone.chip,
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn('block h-1.5 w-1.5 rounded-full', tone.dot)}
                          />
                          <code
                            className={cn('font-mono text-[11px] font-bold break-all', tone.text)}
                          >
                            {item}
                          </code>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              </li>
              {!isLast && (
                <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                  <span
                    className={cn(
                      'inline-flex h-7 w-7 items-center justify-center rounded-full border',
                      tone.iconChip,
                    )}
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>

      {/* Splitter */}
      <div aria-hidden="true" className="my-md flex flex-col items-center gap-1">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white text-slate-500 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:text-slate-400">
          <GitBranchIcon className="h-3.5 w-3.5" />
        </span>
        <span className="inline-flex h-6 w-6 items-center justify-center text-slate-400 dark:text-slate-500">
          <ArrowDownIcon className="h-3.5 w-3.5" />
        </span>
      </div>

      {/* Branches */}
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 items-stretch">
        {content.branches.map((branch) => {
          const tone = stateTone[branch.state];
          const Icon = iconRegistry[branch.iconKey];
          return (
            <li key={branch.title} className="h-full">
              <article
                className={cn(
                  'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                  tone.borderStrong,
                  tone.bg,
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>
                    {branch.title}
                  </h3>
                </div>
                <p className="text-xxsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {branch.caption}
                </p>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  </section>
);
