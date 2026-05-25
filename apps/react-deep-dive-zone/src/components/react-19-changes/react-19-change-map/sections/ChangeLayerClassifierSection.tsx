'use client';

import { useState } from 'react';
import Link from 'next/link';

import { cn } from '@it-tech-blog/utils';

import type { ClassifierTabKey, React19ChangeMapContent } from '../content';
import { ArrowRightIcon, ChevronRightIcon, FilterIcon, WorkflowIcon } from '../icons';
import { layerTone } from '../tone';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['changeLayerClassifier'] };

export const ChangeLayerClassifierSection = ({ content }: Props) => {
  const [active, setActive] = useState<ClassifierTabKey>(content.defaultTab);
  const result = content.results[active];
  const tone = layerTone[result.layer];

  const tabKeys = Object.keys(content.results) as ClassifierTabKey[];

  return (
    <section aria-labelledby="change-layer-classifier-heading" className="flex flex-col">
      <SectionHeader
        id="change-layer-classifier-heading"
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
        <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_4fr)_minmax(0,_8fr)] lg:gap-lg items-stretch">
          {/* LEFT: tab buttons */}
          <div className="flex flex-col gap-sm">
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="inline-flex h-7 w-7 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
              >
                <FilterIcon className="h-3.5 w-3.5" />
              </span>
              <h3 className="text-sm font-bold text-[var(--term-fg)]">{content.tabLabel}</h3>
            </div>

            <div
              role="tablist"
              aria-label={content.tabLabel}
              className="grid grid-cols-2 gap-2 sm:grid-cols-1"
            >
              {tabKeys.map((key) => {
                const r = content.results[key];
                const tabTone = layerTone[r.layer];
                const isActive = key === active;
                return (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActive(key)}
                    className={cn(
                      'group inline-flex items-center justify-between gap-2 rounded-xl border-2 px-3 py-2.5 text-left',
                      'transition-all motion-safe:hover:-translate-y-0.5',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                      isActive
                        ? cn(
                            'text-white shadow-[0_3px_0_var(--term-border)]',
                            tabTone.solidBg,
                            'border-transparent',
                          )
                        : cn(
                            'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                            'border-slate-200 dark:border-slate-700',
                            'hover:border-blue-300 dark:hover:border-blue-700/70',
                          ),
                    )}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'block h-2 w-2 rounded-full',
                          isActive ? 'bg-white/90' : tabTone.dot,
                        )}
                      />
                      <span className="font-mono text-xsm font-bold break-keep">{r.label}</span>
                    </span>
                    <ChevronRightIcon
                      aria-hidden="true"
                      className={cn(
                        'h-3.5 w-3.5 shrink-0 transition-transform',
                        isActive
                          ? 'translate-x-0.5'
                          : 'group-hover:translate-x-0.5 motion-reduce:transform-none',
                      )}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT: result */}
          <article
            className={cn(
              'flex flex-col gap-md rounded-2xl border-2 p-md sm:p-lg',
              tone.border,
              tone.plate,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* head */}
            <div className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className={cn(
                  'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                  tone.iconChip,
                )}
              >
                <WorkflowIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]">
                  {content.resultLabel}
                </span>
                <h3 className={cn('text-md sm:text-lg font-bold break-keep', tone.text)}>
                  {result.resultTitle}
                </h3>
              </div>
            </div>

            {/* flow */}
            <ol
              className={cn(
                'grid grid-cols-1 gap-2 sm:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] sm:items-center sm:gap-2',
              )}
            >
              {result.flow.map((step, idx) => (
                <FlowNode
                  key={step}
                  label={step}
                  toneText={tone.text}
                  toneBorder={tone.borderStrong}
                  toneDot={tone.dot}
                  withArrow={idx < result.flow.length - 1}
                />
              ))}
            </ol>

            {/* description */}
            <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
              {result.description}
            </p>

            {/* cta */}
            <Link
              href={result.cta.href}
              className={cn(
                'group inline-flex items-center gap-1.5 self-start rounded-xl border-2 px-3 py-2',
                'bg-white text-[var(--term-fg)] dark:bg-[var(--term-bg)]',
                tone.borderStrong,
                'font-mono text-xxsm font-bold',
                'transition-all motion-safe:hover:-translate-y-0.5',
                'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
              )}
            >
              <span>{result.cta.label}</span>
              <ArrowRightIcon
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
              />
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
};

const FlowNode = ({
  label,
  toneText,
  toneBorder,
  toneDot,
  withArrow,
}: {
  label: string;
  toneText: string;
  toneBorder: string;
  toneDot: string;
  withArrow: boolean;
}) => (
  <>
    <li
      className={cn(
        'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
        'bg-white dark:bg-[var(--term-bg)]',
        toneBorder,
        'shadow-[0_1px_0_var(--term-border)]',
      )}
    >
      <span aria-hidden="true" className={cn('block h-2 w-2 rounded-full', toneDot)} />
      <span className={cn('font-mono text-xxsm font-bold break-keep', toneText)}>{label}</span>
    </li>
    {withArrow && (
      <span
        aria-hidden="true"
        className="hidden sm:flex items-center justify-center text-slate-400 dark:text-slate-500"
      >
        <ArrowRightIcon className="h-3.5 w-3.5" />
      </span>
    )}
  </>
);
