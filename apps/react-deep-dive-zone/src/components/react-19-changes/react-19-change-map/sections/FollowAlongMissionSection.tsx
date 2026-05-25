'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { React19ChangeMapContent } from '../content';
import { CheckCircleIcon, ListChecksIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: React19ChangeMapContent['followAlongMission'] };

export const FollowAlongMissionSection = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <section aria-labelledby="follow-along-mission-heading" className="flex flex-col">
      <SectionHeader
        id="follow-along-mission-heading"
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
        <header className="flex items-center gap-2 mb-md">
          <span
            aria-hidden="true"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <ListChecksIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)]">Checklist</h3>
        </header>

        <ul className="flex flex-col gap-2">
          {content.missions.map((m, i) => {
            const isChecked = checked[i] === true;
            return (
              <li key={m.mission}>
                <button
                  type="button"
                  aria-pressed={isChecked}
                  onClick={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                  className={cn(
                    'group w-full text-left rounded-xl border-2 p-3 transition-all',
                    'grid grid-cols-[auto_minmax(0,_1fr)] sm:grid-cols-[auto_minmax(0,_1fr)_minmax(0,_1fr)] items-start gap-3',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                    isChecked
                      ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30'
                      : 'border-slate-200 bg-white hover:border-blue-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-blue-700/70',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2',
                      isChecked
                        ? 'border-emerald-500 bg-emerald-500 text-white'
                        : 'border-blue-400 bg-white text-blue-600 dark:border-blue-600 dark:bg-slate-900 dark:text-blue-300',
                    )}
                  >
                    {isChecked && <CheckCircleIcon className="h-3.5 w-3.5" />}
                  </span>

                  <span
                    className={cn(
                      'text-xsm sm:text-sm font-bold break-keep leading-snug',
                      isChecked
                        ? 'text-emerald-700 dark:text-emerald-200 line-through decoration-emerald-400/60'
                        : 'text-[var(--term-fg)]',
                    )}
                  >
                    {m.mission}
                  </span>

                  <span
                    className={cn(
                      'col-span-2 sm:col-span-1 text-xxsm leading-relaxed break-keep',
                      isChecked
                        ? 'text-emerald-700/80 dark:text-emerald-200/80'
                        : 'text-[var(--term-muted)]',
                    )}
                  >
                    {m.helper}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
