import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { After192Content } from '../content';
import { ArrowRightIcon } from '../icons';
import { tone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: After192Content['resume'] };

export const ResumeFlowSection = ({ content }: Props) => (
  <section aria-labelledby="resume-heading" className="flex flex-col">
    <SectionHeader
      id="resume-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div
      className={cn(
        'rounded-2xl border-2 p-md sm:p-lg',
        'border-blue-200/80 bg-blue-50/30 dark:border-blue-700/70 dark:bg-blue-950/20',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ol
        className={cn(
          'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
          'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
        )}
      >
        {content.steps.map((step, idx) => {
          const t = tone[step.tone];
          const Icon = iconRegistry[step.iconKey];
          const isLast = idx === content.steps.length - 1;
          return (
            <Fragment key={step.title}>
              <li>
                <article
                  className={cn(
                    'flex h-full flex-col items-center gap-2 rounded-2xl border-2 p-md text-center',
                    t.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                    'transition-all motion-safe:hover:-translate-y-0.5',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-full border-2',
                      t.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className={cn('text-xsm sm:text-sm font-bold break-keep', t.text)}>
                    {step.title}
                  </h3>
                  <p className="text-[10px] leading-relaxed text-[var(--term-muted)] break-keep">
                    {step.body}
                  </p>
                </article>
              </li>
              {!isLast && (
                <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
                  <span className="inline-flex h-7 items-center justify-center text-blue-500 dark:text-blue-300">
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </span>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </div>
  </section>
);
