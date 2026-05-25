'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { MetadataResourceContent } from '../content';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  PlayCircleIcon,
  RotateCcwIcon,
  SparklesIcon,
} from '../icons';

import { CodePanel } from './_CodePanel';
import { DomMock } from './_DomMock';
import { SectionHeader } from './_SectionHeader';

type Props = { content: MetadataResourceContent['simulator'] };

export const HeadHoistingSimulator = ({ content }: Props) => {
  const [hoisted, setHoisted] = useState(false);

  return (
    <section aria-labelledby="simulator-heading" className="flex flex-col">
      <SectionHeader
        id="simulator-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_5fr)_auto_minmax(0,_6fr)] lg:gap-md items-stretch">
          {/* LEFT: React tree code */}
          <article className="flex flex-col gap-sm">
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <SparklesIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.leftTitle}
              </h3>
            </header>
            <CodePanel code={content.leftCode.code} langBadge={content.leftCode.langBadge} />
          </article>

          {/* CENTER: Hoisting action */}
          <div className="flex lg:flex-col items-center justify-center gap-2">
            <button
              type="button"
              aria-pressed={hoisted}
              onClick={() => setHoisted((prev) => !prev)}
              className={cn(
                'group inline-flex items-center justify-center gap-2 rounded-2xl border-2 px-4 py-3',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                hoisted
                  ? cn(
                      'border-emerald-500 bg-emerald-600 text-white dark:bg-emerald-500 dark:border-emerald-400',
                      'shadow-[0_3px_0_var(--term-border)]',
                    )
                  : cn(
                      'border-blue-500 bg-blue-600 text-white dark:bg-blue-500 dark:border-blue-400',
                      'shadow-[0_3px_0_var(--term-border)]',
                    ),
              )}
            >
              {hoisted ? (
                <RotateCcwIcon aria-hidden="true" className="h-4 w-4" />
              ) : (
                <PlayCircleIcon aria-hidden="true" className="h-4 w-4" />
              )}
              <span className="font-mono text-xsm font-bold break-keep">
                {hoisted ? 'Reset' : content.centerButton}
              </span>
              {!hoisted && (
                <span className="hidden lg:inline-flex">
                  <ArrowRightIcon className="h-3.5 w-3.5" />
                </span>
              )}
              {!hoisted && (
                <span className="inline-flex lg:hidden">
                  <ArrowDownIcon className="h-3.5 w-3.5" />
                </span>
              )}
            </button>
            <p className="text-[10px] text-[var(--term-muted)] text-center break-keep max-w-[160px]">
              {content.centerDescription}
            </p>
          </div>

          {/* RIGHT: DOM result */}
          <article className="flex flex-col gap-sm">
            <header className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
              >
                <GlobeIcon className="h-4 w-4" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
                {content.rightTitle}
              </h3>
            </header>
            <div
              className={cn(
                'rounded-2xl border-2 transition-all',
                hoisted
                  ? 'border-emerald-300/80 dark:border-emerald-700/70 shadow-[0_3px_0_var(--term-border)]'
                  : 'border-slate-200 dark:border-slate-700 opacity-60',
              )}
            >
              <DomMock dom={content.rightDom} ariaLabel={content.rightTitle} />
            </div>
          </article>
        </div>

        {/* Note */}
        <div
          className={cn(
            'mt-md flex items-start gap-2 rounded-xl border-2 px-3 py-3',
            'border-blue-300/80 bg-blue-50/40 dark:border-blue-700/70 dark:bg-blue-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <CheckCircleIcon className="h-3.5 w-3.5" />
          </span>
          <p className="text-xsm leading-relaxed text-blue-700 dark:text-blue-200 break-keep">
            {content.note}
          </p>
        </div>
      </div>
    </section>
  );
};
