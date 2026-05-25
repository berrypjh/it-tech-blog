import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { UseEffectEventContent } from '../content';
import { ArrowRightIcon, LayersIcon } from '../icons';
import { effectTone } from '../tone';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: UseEffectEventContent['dependency'] };

export const DependencyReductionSection = ({ content }: Props) => (
  <section aria-labelledby="dependency-heading" className="flex flex-col">
    <SectionHeader
      id="dependency-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_8fr)_minmax(0,_4fr)] lg:gap-md items-stretch">
      {/* LEFT: 3-step flow */}
      <ol
        className={cn(
          'grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3',
          'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-2 items-stretch',
        )}
      >
        {content.flow.map((step, idx) => {
          const tone = effectTone[step.tone];
          const Icon = iconRegistry[step.iconKey];
          const isLast = idx === content.flow.length - 1;
          return (
            <Fragment key={step.title}>
              <li>
                <article
                  className={cn(
                    'flex h-full flex-col gap-2 rounded-2xl border-2 p-md',
                    tone.border,
                    'bg-white dark:bg-[var(--term-bg)]',
                    'shadow-[0_2px_0_var(--term-border)]',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      tone.iconChip,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
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

      {/* RIGHT: Dependency 변화 카드 */}
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
            className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <LayersIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.dependencyCardTitle}
          </h3>
        </header>

        {/* Before row */}
        <div
          className={cn(
            'flex flex-col gap-1 rounded-xl border-2 px-3 py-2',
            'border-rose-300/80 bg-rose-50/40 dark:border-rose-700/70 dark:bg-rose-950/30',
          )}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-200">
            {content.beforeLabel}
          </span>
          <code className="font-mono text-xsm font-bold text-rose-700 dark:text-rose-200 break-all">
            {content.beforeValue}
          </code>
          <span className="text-[10px] text-rose-700/80 dark:text-rose-200/80 break-keep">
            {content.beforeBody}
          </span>
        </div>

        {/* After row */}
        <div
          className={cn(
            'flex flex-col gap-1 rounded-xl border-2 px-3 py-2',
            'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/30',
          )}
        >
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-teal-700 dark:text-teal-200">
            {content.afterLabel}
          </span>
          <code className="font-mono text-xsm font-bold text-teal-700 dark:text-teal-200 break-all">
            {content.afterValue}
          </code>
          <span className="text-[10px] text-teal-700/80 dark:text-teal-200/80 break-keep">
            {content.afterBody}
          </span>
        </div>
      </article>
    </div>
  </section>
);
