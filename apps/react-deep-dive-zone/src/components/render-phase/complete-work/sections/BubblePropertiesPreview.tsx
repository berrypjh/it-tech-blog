import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../element-jsx/_shared/SectionBadgeHeader';
import type { CompleteWorkContent } from '../content';
import { ArrowRightIcon, ArrowUpIcon, CheckCircleIcon, ChevronDownIcon } from '../icons';

import { tonePalette } from './tone-palette';

type Props = { content: CompleteWorkContent['bubble'] };

export const BubblePropertiesPreview = ({ content }: Props) => (
  <section id="bubble" aria-labelledby="heading-bubble" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="bubble"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ArrowUpIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'rounded-3xl border p-md sm:p-lg',
        'border-[var(--term-border)] bg-gradient-to-br from-white via-teal-50/20 to-violet-50/25',
        'dark:from-[var(--term-bg)] dark:via-teal-950/12 dark:to-violet-950/15',
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <p className="mb-md text-sm sm:text-md leading-relaxed text-[var(--term-fg)] font-bold break-keep">
        {content.description}
      </p>

      {/* Flow */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] items-stretch gap-2">
        {content.flow.map((node, idx) => {
          const palette = tonePalette[node.tone];
          return (
            <Fragment key={node.title}>
              <article
                className={cn(
                  'flex h-full flex-col items-center justify-center gap-1 rounded-2xl border-2 p-md text-center',
                  palette.border,
                  palette.bg,
                  'shadow-[0_1px_0_var(--term-border)]',
                  'transition-transform hover:-translate-y-0.5 motion-reduce:transform-none',
                )}
              >
                <h3
                  className={cn(
                    'text-sm sm:text-md font-bold leading-tight break-keep',
                    palette.text,
                  )}
                >
                  {node.title}
                </h3>
                <p className="text-[10px] sm:text-xsm leading-snug text-[var(--term-muted)] break-keep">
                  {node.subtitle}
                </p>
              </article>
              {idx < content.flow.length - 1 && (
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center text-violet-500/80 dark:text-violet-300/80 py-1 lg:py-0"
                >
                  <ArrowRightIcon className="hidden lg:block h-5 w-5" />
                  <ChevronDownIcon className="lg:hidden h-5 w-5" />
                </span>
              )}
            </Fragment>
          );
        })}
      </div>

      {/* Bottom note */}
      <aside
        className={cn(
          'mt-md flex items-start gap-sm rounded-2xl border-2 p-md',
          'border-teal-200/80 bg-teal-50/70',
          'dark:border-teal-800/70 dark:bg-teal-950/40',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
            'bg-teal-100 text-teal-700 border border-teal-200/80',
            'dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
          )}
        >
          <CheckCircleIcon className="h-4 w-4" />
        </span>
        <p className="text-xsm sm:text-sm leading-relaxed text-teal-900 dark:text-teal-100 font-bold break-keep">
          {content.bottomNote}
        </p>
      </aside>
    </article>
  </section>
);
