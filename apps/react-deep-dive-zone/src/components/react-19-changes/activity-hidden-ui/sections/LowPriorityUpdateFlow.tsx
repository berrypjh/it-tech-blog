import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { ArrowRightIcon, SparklesIcon } from '../icons';
import { activityTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['priorityFlow'] };

export const LowPriorityUpdateFlow = ({ content }: Props) => (
  <section aria-labelledby="priority-flow-heading" className="flex flex-col">
    <SectionHeader
      id="priority-flow-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-2 items-stretch',
      )}
    >
      {content.steps.map((step, idx) => {
        const tone = activityTone[step.activity];
        const Icon = iconRegistry[step.iconKey];
        const isLast = idx === content.steps.length - 1;
        return (
          <Fragment key={step.title}>
            <li>
              <article
                className={cn(
                  'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                  tone.border,
                  'bg-white dark:bg-[var(--term-bg)]',
                  'shadow-[0_2px_0_var(--term-border)]',
                  'transition-all motion-safe:hover:-translate-y-0.5',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-7 items-center px-1.5 rounded-md border font-mono text-[10px] font-bold tabular-nums',
                      tone.chip,
                    )}
                  >
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', tone.text)}>
                  {step.title}
                </h3>
                <p className="text-xxsm leading-relaxed text-[var(--term-muted)] break-keep">
                  {step.body}
                </p>
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

    {/* Footer label */}
    <div
      className={cn(
        'mt-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
        'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <span
        aria-hidden="true"
        className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
      >
        <SparklesIcon className="h-3.5 w-3.5" />
      </span>
      <p className="text-xsm leading-relaxed text-blue-700 dark:text-blue-200 break-keep">
        {content.footer}
      </p>
    </div>
  </section>
);
