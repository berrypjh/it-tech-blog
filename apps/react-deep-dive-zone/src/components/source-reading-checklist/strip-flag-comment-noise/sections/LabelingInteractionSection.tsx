'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { LabelingOption, StripFlagCommentNoiseContent } from '../content';
import { CheckCircleIcon, FileCodeIcon, ScanLineIcon, SparkIcon, TagsIcon } from '../icons';
import { getLabelClasses, LabelChip } from '../LabelChip';

type Props = { content: StripFlagCommentNoiseContent['labelingInteraction'] };

const priorityTone: Record<LabelingOption['priority'], 'indigo' | 'emerald' | 'amber'> = {
  first: 'indigo',
  support: 'emerald',
  later: 'amber',
};

const priorityClasses = {
  indigo:
    'border-indigo-300 bg-indigo-50 text-indigo-800 dark:border-indigo-700/70 dark:bg-indigo-950/40 dark:text-indigo-100',
  emerald:
    'border-emerald-300 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
  amber:
    'border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-100',
} as const;

export const LabelingInteractionSection = ({ content }: Props) => {
  const [activeId, setActiveId] = useState(content.options[0].id);
  const active = content.options.find((o) => o.id === activeId) ?? content.options[0];
  const t = getLabelClasses(active.label);
  const pri = priorityTone[active.priority];

  return (
    <section
      id="section-labeling-interaction"
      aria-labelledby="heading-labeling-interaction"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="labeling-interaction"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<ScanLineIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'rounded-2xl border-2 p-md sm:p-lg',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_9fr)_minmax(0,_11fr)] gap-md lg:gap-lg">
          {/* LEFT — Label list + bucket map */}
          <div className="flex flex-col gap-md">
            <div className="flex flex-col gap-sm">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.listLabel}
              </span>
              <div className="flex flex-col gap-2">
                {content.options.map((opt) => {
                  const isActive = opt.id === activeId;
                  const ot = getLabelClasses(opt.label);
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      aria-pressed={isActive}
                      aria-controls="labeling-result"
                      onClick={() => setActiveId(opt.id)}
                      className={cn(
                        'group flex items-center justify-between gap-3 rounded-xl border-2 p-3 text-left',
                        'transition-all',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                        isActive
                          ? cn(ot.chip, ot.border, 'shadow-[0_2px_0_var(--term-border)]')
                          : cn(
                              'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                              'hover:border-blue-300 dark:hover:border-blue-700/70',
                              'motion-safe:hover:-translate-y-0.5',
                            ),
                      )}
                    >
                      <span className="flex items-center gap-2 min-w-0">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2',
                            isActive
                              ? cn(ot.border, 'bg-white dark:bg-[var(--term-bg)]')
                              : 'border-[var(--term-border)] bg-white dark:bg-[var(--term-bg)]',
                          )}
                        >
                          {isActive && (
                            <span className={cn('block h-2 w-2 rounded-full', ot.dot)} />
                          )}
                        </span>
                        <LabelChip label={opt.label} size="md" strong={isActive} />
                      </span>
                      <span
                        className={cn(
                          'inline-flex items-center rounded-full border px-2 py-0.5',
                          priorityClasses[priorityTone[opt.priority]],
                          'text-[10px] font-mono font-bold uppercase tracking-wider',
                        )}
                      >
                        {content.buckets[opt.priority]}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bucket map */}
            <div className="flex flex-col gap-2 pt-sm border-t border-dashed border-[var(--term-border)]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.bucketLabel}
              </span>
              <ul className="grid grid-cols-3 gap-1.5">
                {(['first', 'support', 'later'] as const).map((p) => (
                  <li key={p}>
                    <span
                      className={cn(
                        'flex items-center justify-center gap-1 rounded-md border-2 px-2 py-1 text-center',
                        priorityClasses[priorityTone[p]],
                        'text-[10px] font-mono font-bold uppercase tracking-wider',
                      )}
                    >
                      {content.buckets[p]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT — Result panel */}
          <article
            id="labeling-result"
            aria-live="polite"
            className={cn(
              'flex flex-col gap-md rounded-xl border-2 p-md sm:p-lg',
              t.border,
              t.chip,
              'shadow-[0_2px_0_var(--term-border)]',
            )}
          >
            {/* Label */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.label}
              </span>
              <LabelChip label={active.label} size="md" strong>
                {active.label === 'core' || active.label === 'type' ? active.label : undefined}
              </LabelChip>
            </div>

            {/* Priority */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.priority}
              </span>
              <div
                className={cn(
                  'inline-flex items-center gap-2 rounded-md border-2 p-2.5 self-start',
                  priorityClasses[pri],
                  'shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <CheckCircleIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span className="text-md font-bold uppercase tracking-wider">
                  {content.buckets[active.priority]}
                </span>
              </div>
            </div>

            {/* Reason */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.reason}
              </span>
              <div
                className={cn(
                  'flex items-start gap-2 rounded-md border-2 p-3',
                  'bg-white dark:bg-[var(--term-bg)]',
                  t.border,
                )}
              >
                <SparkIcon className={cn('mt-0.5 h-4 w-4 shrink-0', t.text)} aria-hidden="true" />
                <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                  {active.reason}
                </p>
              </div>
            </div>

            {/* Example code */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]">
                {content.labels.example}
              </span>
              <pre
                className={cn(
                  'overflow-x-auto rounded-md border-2 px-3 py-2.5',
                  'border-slate-700 bg-slate-900 text-slate-100',
                  'dark:border-slate-700',
                  'font-mono text-xsm leading-relaxed',
                )}
              >
                <code className="flex items-start gap-2">
                  <FileCodeIcon
                    className={cn('mt-0.5 h-3.5 w-3.5 shrink-0', t.text)}
                    aria-hidden="true"
                  />
                  <span className="whitespace-pre">{active.exampleCode}</span>
                </code>
              </pre>
            </div>
          </article>
        </div>

        {/* Tags hint */}
        <p
          className={cn(
            'mt-md flex items-center justify-center gap-2 rounded-md border border-dashed p-2',
            'border-[var(--term-border)] text-[var(--term-muted)]',
          )}
        >
          <TagsIcon className="h-3 w-3" aria-hidden="true" />
          <span className="text-[10px] font-mono uppercase tracking-wider">
            label first → group by priority → read core path
          </span>
        </p>
      </div>
    </section>
  );
};
