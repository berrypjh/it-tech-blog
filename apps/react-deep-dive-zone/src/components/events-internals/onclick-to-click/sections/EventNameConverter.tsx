'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { NumberedSectionHeader } from '../../_shared/NumberedSectionHeader';
import type { OnClickClickContent } from '../content';
import {
  ArrowRightIcon,
  CheckCircleIcon,
  GlobeIcon,
  MousePointerClickIcon,
  RepeatIcon,
} from '../icons';

type Props = { content: OnClickClickContent['converter'] };

export const EventNameConverter = ({ content }: Props) => {
  const [selectedNative, setSelectedNative] = useState(content.defaultNative);
  const selectedPair =
    content.options.find((o) => o.native === selectedNative) ?? content.options[0];
  const isSpecial = selectedPair.native !== selectedPair.prop.replace(/^on/, '').toLowerCase();

  return (
    <section aria-labelledby="heading-converter">
      <NumberedSectionHeader
        id="converter"
        step={content.step}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.hint}
        icon={<RepeatIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-3xl border-2 p-md sm:p-lg lg:p-xl',
          'border-blue-200/70 bg-gradient-to-br from-blue-50/60 via-white to-cyan-50/30',
          'dark:border-blue-800/60 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/20',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-md lg:gap-lg">
          {/* Left: native event selector */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              choose a native event
            </span>
            <div
              role="radiogroup"
              aria-label={content.resultLabels.native}
              className="grid grid-cols-2 sm:grid-cols-3 gap-2"
            >
              {content.options.map((option) => {
                const isSelected = option.native === selectedNative;
                return (
                  <button
                    key={option.native}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => setSelectedNative(option.native)}
                    className={cn(
                      'group inline-flex items-center justify-center gap-1.5 rounded-xl border-2 px-3 py-2.5',
                      'font-mono text-xsm sm:text-sm font-bold transition-all',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                      'hover:-translate-y-0.5 motion-reduce:transform-none',
                      isSelected
                        ? 'border-blue-600 bg-blue-600 text-white shadow-[0_3px_0_rgba(29,78,216,0.35)] dark:border-blue-500 dark:bg-blue-500'
                        : 'border-blue-200/80 bg-white text-blue-700 hover:border-blue-400 hover:bg-blue-50 dark:border-blue-800/60 dark:bg-slate-950/40 dark:text-blue-200 dark:hover:bg-blue-950/40',
                    )}
                  >
                    <GlobeIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0',
                        isSelected ? 'text-white/90' : 'text-blue-500 dark:text-blue-300',
                      )}
                    />
                    <span>{option.native}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Center: animated arrow */}
          <div className="flex items-center justify-center" aria-hidden="true">
            <span
              className={cn(
                'inline-flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full',
                'bg-blue-600 text-white shadow-[0_4px_0_rgba(29,78,216,0.35)] dark:bg-blue-500',
              )}
            >
              <ArrowRightIcon
                className="h-6 w-6 sm:h-7 sm:w-7 lg:rotate-0 rotate-90"
                strokeWidth={2.4}
              />
            </span>
          </div>

          {/* Right: result */}
          <article
            className={cn(
              'flex flex-col gap-3 rounded-2xl border-2 p-md',
              'border-teal-300/80 bg-white dark:border-teal-700/60 dark:bg-slate-950/40',
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            <header className="flex items-center justify-between gap-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-teal-700 dark:text-teal-300">
                {content.resultLabels.result}
              </span>
              <span
                aria-hidden="true"
                className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200"
              >
                <MousePointerClickIcon className="h-3.5 w-3.5" />
              </span>
            </header>

            <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-stretch gap-2">
              <div className="flex flex-col gap-1 rounded-xl border border-sky-200/70 bg-sky-50/60 px-3 py-2 text-center dark:border-sky-800/60 dark:bg-sky-950/30">
                <span className="text-[9px] font-mono uppercase tracking-wider text-sky-700 dark:text-sky-300">
                  {content.resultLabels.native}
                </span>
                <code
                  aria-live="polite"
                  className="font-mono text-md sm:text-lg font-bold text-sky-700 dark:text-sky-200 break-all"
                >
                  {selectedPair.native}
                </code>
              </div>
              <ArrowRightIcon
                aria-hidden="true"
                className="self-center h-4 w-4 text-blue-500 dark:text-blue-300"
              />
              <div className="flex flex-col gap-1 rounded-xl border border-teal-200/70 bg-teal-50/60 px-3 py-2 text-center dark:border-teal-800/60 dark:bg-teal-950/30">
                <span className="text-[9px] font-mono uppercase tracking-wider text-teal-700 dark:text-teal-300">
                  {content.resultLabels.prop}
                </span>
                <code
                  aria-live="polite"
                  className="font-mono text-md sm:text-lg font-bold text-teal-700 dark:text-teal-200 break-all"
                >
                  {selectedPair.prop}
                </code>
              </div>
            </div>

            <div
              className={cn(
                'flex items-center gap-2 rounded-xl border px-3 py-2 text-[11px] sm:text-xsm',
                isSpecial
                  ? 'border-amber-300/80 bg-amber-50/60 text-amber-900 dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-100'
                  : 'border-emerald-300/80 bg-emerald-50/60 text-emerald-900 dark:border-emerald-700/60 dark:bg-emerald-950/30 dark:text-emerald-100',
              )}
            >
              <CheckCircleIcon aria-hidden="true" className="h-4 w-4 shrink-0" />
              <span className="break-keep">
                {isSpecial ? content.resultLabels.note : content.resultLabels.simpleNote}
              </span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
