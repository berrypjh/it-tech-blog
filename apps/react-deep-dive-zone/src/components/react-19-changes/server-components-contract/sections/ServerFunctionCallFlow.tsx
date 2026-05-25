import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ServerComponentsContractContent } from '../content';
import { ArrowRightIcon } from '../icons';
import { boundaryTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ServerComponentsContractContent['callFlow'] };

export const ServerFunctionCallFlow = ({ content }: Props) => (
  <section aria-labelledby="call-flow-heading" className="flex flex-col">
    <SectionHeader
      id="call-flow-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <ol
      className={cn(
        'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
        'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3 items-stretch',
      )}
    >
      {content.steps.map((step, idx) => {
        const tone = boundaryTone[step.boundary];
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
                  'motion-safe:hover:shadow-[0_4px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-11 w-11 items-center justify-center rounded-full border-2 font-mono text-sm font-bold',
                      tone.iconChip,
                    )}
                  >
                    {String(idx + 1)}
                  </span>
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-4 w-4" />
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
  </section>
);
