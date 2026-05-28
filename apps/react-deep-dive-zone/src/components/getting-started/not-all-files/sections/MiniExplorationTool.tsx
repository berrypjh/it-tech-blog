'use client';

import { useMemo, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import type { ExplorerOption, NotAllFilesContent } from '../content';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  FileIcon,
  FolderOpenIcon,
  LightbulbIcon,
  PencilIcon,
  PinIcon,
  RouteIcon,
} from '../icons';

type Props = { content: NotAllFilesContent['miniTool'] };

const stepIcons = [FileIcon, PinIcon, RouteIcon, PencilIcon] as const;

const stepToneClasses = [
  // step 1 — sky
  {
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    label: 'text-sky-700 dark:text-sky-300',
  },
  // step 2 — violet
  {
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    label: 'text-violet-700 dark:text-violet-300',
  },
  // step 3 — teal
  {
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    label: 'text-teal-700 dark:text-teal-300',
  },
  // step 4 — coral
  {
    num: 'bg-rose-500 text-white dark:bg-rose-400 dark:text-slate-900',
    iconBg: 'bg-rose-100 dark:bg-rose-950/60',
    iconText: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-200/80 dark:border-rose-800/60',
    label: 'text-rose-700 dark:text-rose-300',
  },
];

const stepLabelByIdx = (labels: NotAllFilesContent['miniTool']['stepLabels'], idx: number) => {
  const order = [labels.file, labels.fn, labels.next, labels.draw];
  return order[idx];
};

export const MiniExplorationTool = ({ content }: Props) => {
  const [selectedId, setSelectedId] = useState<ExplorerOption['id']>(content.defaultOptionId);

  const current = useMemo(
    () => content.options.find((o) => o.id === selectedId) ?? content.options[0],
    [content.options, selectedId],
  );

  return (
    <section id="section-mini-tool" aria-labelledby="heading-mini-tool" className="space-y-lg">
      <SectionHeader
        id="mini-tool"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<FolderOpenIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.42fr)_minmax(0,_0.58fr)]">
          {/* 좌측: 질문 선택 */}
          <aside
            aria-label={content.selectLabel}
            className="p-md sm:p-lg flex flex-col gap-md border-b lg:border-b-0 lg:border-r border-[var(--term-border)] bg-[var(--color-canvas)]/30"
          >
            <label
              htmlFor="explorer-select"
              className="text-[10px] uppercase tracking-wider text-sky-600 dark:text-sky-300 font-bold"
            >
              {content.selectLabel}
            </label>

            {/* native select — 키보드 접근성 + 디자인 */}
            <div className="relative">
              <select
                id="explorer-select"
                value={selectedId}
                onChange={(e) => setSelectedId(e.target.value as ExplorerOption['id'])}
                className={cn(
                  'w-full appearance-none rounded-md border border-[var(--term-border)] bg-white dark:bg-slate-900',
                  'pl-md pr-9 py-3 text-xsm sm:text-sm font-bold text-[var(--term-fg)]',
                  'cursor-pointer transition-colors',
                  'hover:border-sky-400 dark:hover:border-sky-500',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
                )}
              >
                {content.options.map((opt) => (
                  <option key={opt.id} value={opt.id}>
                    {opt.question}
                  </option>
                ))}
              </select>
              <span
                aria-hidden="true"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--term-dim)] pointer-events-none"
              >
                <ChevronDownIcon className="h-4 w-4" />
              </span>
            </div>

            {/* TIP */}
            <aside className="flex items-start gap-sm rounded-md border border-sky-200 bg-sky-50 dark:border-sky-800/70 dark:bg-sky-950/40 p-sm">
              <span
                aria-hidden="true"
                className="inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-full bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900"
              >
                <LightbulbIcon className="h-4 w-4" />
              </span>
              <div className="flex flex-col gap-0.5 min-w-0">
                <span className="text-[10px] font-bold text-sky-700 dark:text-sky-200 uppercase tracking-wider">
                  {content.tipLabel}
                </span>
                <p className="text-xsm text-sky-900 dark:text-sky-100 leading-relaxed break-keep">
                  {content.tipBody}
                </p>
              </div>
            </aside>
          </aside>

          {/* 우측: 추천 경로 */}
          <article className="p-md sm:p-lg flex flex-col gap-md">
            <header className="flex items-center justify-between gap-sm">
              <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)]">
                {content.recommendedTitle}
              </h3>
              <span
                aria-live="polite"
                aria-atomic="true"
                className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-[var(--term-border)] bg-[var(--term-surface)] text-[10px] font-mono text-[var(--term-muted)] max-w-[28ch] truncate"
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full bg-teal-500"
                  aria-hidden="true"
                />
                {current.question}
              </span>
            </header>

            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-md lg:gap-1 items-stretch">
              {current.steps.map((step, idx) => {
                const t = stepToneClasses[idx] ?? stepToneClasses[0];
                const Icon = stepIcons[idx] ?? FileIcon;
                const isLast = idx === current.steps.length - 1;
                return [
                  <li key={idx} className="flex">
                    <article
                      className={cn(
                        'group relative flex flex-col w-full gap-sm rounded-md border bg-[var(--term-bg)]',
                        'p-md transition-all',
                        'hover:-translate-y-0.5 hover:shadow-[0_2px_0_var(--term-border)]',
                        t.border,
                      )}
                    >
                      {/* num + step label */}
                      <header className="flex items-center gap-2">
                        <span
                          aria-hidden="true"
                          className={cn(
                            'inline-flex items-center justify-center w-6 h-6 rounded-md text-[10px] font-bold tabular-nums',
                            t.num,
                          )}
                        >
                          {idx + 1}
                        </span>
                        <span
                          className={cn('text-[10px] uppercase tracking-wider font-bold', t.label)}
                        >
                          {stepLabelByIdx(content.stepLabels, idx)}
                        </span>
                      </header>

                      <span
                        aria-hidden="true"
                        className={cn(
                          'inline-flex items-center justify-center w-9 h-9 rounded-full',
                          t.iconBg,
                          t.iconText,
                        )}
                      >
                        <Icon className="h-4 w-4" />
                      </span>

                      <h4 className="text-xsm font-bold text-[var(--term-fg)] break-keep leading-snug">
                        {step.title}
                      </h4>

                      <p className="text-xsm text-[var(--term-muted)] leading-relaxed break-keep flex-1 font-mono">
                        {step.detail}
                      </p>
                    </article>
                  </li>,
                  !isLast && (
                    <li
                      key={`arrow-${idx}`}
                      aria-hidden="true"
                      className="hidden lg:flex items-center justify-center text-sky-500 dark:text-sky-400"
                    >
                      <ChevronRightIcon className="h-5 w-5" />
                    </li>
                  ),
                ];
              })}
            </ol>
          </article>
        </div>
      </div>
    </section>
  );
};
