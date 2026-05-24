'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../_shared/SectionHeader';
import type { NotAllFilesContent } from '../content';
import { BoltIcon, CheckIcon, TrophyIcon } from '../icons';

type Props = { content: NotAllFilesContent['mission'] };

export const TenMinuteMission = ({ content }: Props) => {
  const [done, setDone] = useState<Record<string, boolean>>({});

  const total = content.items.length;
  const completed = Object.values(done).filter(Boolean).length;

  return (
    <section id="section-mission" aria-labelledby="heading-mission" className="space-y-lg">
      <SectionHeader
        id="mission"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<BoltIcon className="h-5 w-5" />}
      />

      <div className="rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] overflow-hidden shadow-[0_2px_0_var(--term-border)]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.32fr)_minmax(0,_0.68fr)]">
          {/* 좌측 motivational block */}
          <aside
            aria-label="motivation"
            className="p-md sm:p-lg lg:p-xl flex flex-col gap-md bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-amber-950/30 dark:via-transparent dark:to-orange-950/30 border-b lg:border-b-0 lg:border-r border-[var(--term-border)]"
          >
            <span
              aria-hidden="true"
              className="inline-flex w-fit items-center justify-center w-12 h-12 rounded-full bg-amber-400 text-amber-950 shadow-[0_2px_0_var(--term-border)] dark:bg-amber-300 dark:text-amber-950"
            >
              <TrophyIcon className="h-[1.25rem] w-[1.25rem]" />
            </span>

            <h3 className="text-md sm:text-lg font-bold tracking-tight text-[var(--term-fg)] break-keep leading-snug">
              {content.motivation.title.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </h3>

            <p className="text-xsm sm:text-sm text-[var(--term-muted)] leading-relaxed break-keep">
              {content.motivation.body.map((line, i) => (
                <span key={i} className="block">
                  {line}
                </span>
              ))}
            </p>

            {/* progress */}
            <div className="mt-auto flex items-center gap-sm" aria-live="polite">
              <span className="text-[10px] font-mono font-bold text-amber-700 dark:text-amber-300 tabular-nums">
                {completed}/{total}
              </span>
              <div className="flex-1 h-1.5 rounded-full bg-amber-100 dark:bg-amber-950/60 overflow-hidden">
                <div
                  className="h-full bg-amber-500 dark:bg-amber-400 transition-all"
                  style={{ width: `${(completed / total) * 100}%` }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </aside>

          {/* 우측 checklist */}
          <ol className="divide-y divide-[var(--term-border)]">
            {content.items.map((item) => {
              const isDone = !!done[item.num];
              return (
                <li key={item.num}>
                  <label
                    className={cn(
                      'group flex items-start gap-sm p-md sm:p-lg cursor-pointer transition-colors',
                      'hover:bg-[var(--term-surface)]',
                      isDone && 'bg-emerald-50/40 dark:bg-emerald-950/20',
                    )}
                  >
                    {/* num pill */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex shrink-0 items-center justify-center w-7 h-7 rounded-md border text-xsm font-bold tabular-nums',
                        isDone
                          ? 'border-emerald-500 bg-emerald-500 text-white dark:border-emerald-400 dark:bg-emerald-400 dark:text-slate-900'
                          : 'border-sky-200 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
                      )}
                    >
                      {item.num}
                    </span>

                    {/* content */}
                    <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                      <p
                        className={cn(
                          'text-xsm sm:text-sm font-bold text-[var(--term-fg)] break-keep leading-snug',
                          isDone && 'line-through text-[var(--term-muted)]',
                        )}
                      >
                        {item.title}
                      </p>
                      <p className="text-xsm font-mono text-[var(--term-muted)] leading-relaxed break-all">
                        {item.detail}
                      </p>
                    </div>

                    {/* checkbox */}
                    <input
                      type="checkbox"
                      checked={isDone}
                      onChange={(e) =>
                        setDone((prev) => ({ ...prev, [item.num]: e.target.checked }))
                      }
                      aria-label={`${content.checkboxLabel}: ${item.title}`}
                      className="sr-only"
                    />
                    <span
                      aria-hidden="true"
                      className={cn(
                        'shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-md border transition-all',
                        isDone
                          ? 'border-emerald-500 bg-emerald-500 text-white dark:border-emerald-400 dark:bg-emerald-400 dark:text-slate-900'
                          : 'border-[var(--term-border)] bg-white dark:bg-slate-900 group-hover:border-sky-400',
                      )}
                    >
                      {isDone && <CheckIcon className="h-4 w-4" />}
                    </span>
                  </label>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};
