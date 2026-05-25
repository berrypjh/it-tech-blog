'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { ActivityHiddenUiContent } from '../content';
import { CheckCircleIcon } from '../icons';

import { iconRegistry } from './_iconRegistry';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActivityHiddenUiContent['mission'] };

export const FollowAlongMission = ({ content }: Props) => {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  return (
    <section aria-labelledby="mission-heading" className="flex flex-col">
      <SectionHeader
        id="mission-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {content.missions.map((m, i) => {
          const isChecked = checked[i] === true;
          const Icon = iconRegistry[m.iconKey];
          return (
            <li key={m.number} className="h-full">
              <button
                type="button"
                aria-pressed={isChecked}
                onClick={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                className={cn(
                  'group w-full h-full text-left rounded-2xl border-2 p-md transition-all',
                  'flex flex-col gap-sm',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 focus-visible:ring-offset-2',
                  isChecked
                    ? 'border-emerald-300 bg-emerald-50 dark:border-emerald-700 dark:bg-emerald-950/30 shadow-[0_3px_0_var(--term-border)]'
                    : 'border-slate-200 bg-white hover:border-blue-300 dark:border-slate-700 dark:bg-[var(--term-bg)] dark:hover:border-blue-700/70 shadow-[0_2px_0_var(--term-border)]',
                )}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      'inline-flex h-10 w-10 items-center justify-center rounded-xl border',
                      isChecked
                        ? 'border-emerald-300 bg-emerald-100 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/60 dark:text-emerald-200'
                        : 'border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200',
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-7 items-center px-1.5 rounded-md font-mono text-[10px] font-bold tabular-nums',
                        isChecked
                          ? 'bg-emerald-600 text-white dark:bg-emerald-500'
                          : 'border-2 border-blue-300 bg-blue-50 text-blue-700 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
                      )}
                    >
                      {m.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'inline-flex h-5 w-5 items-center justify-center rounded border-2',
                        isChecked
                          ? 'border-emerald-500 bg-emerald-500 text-white'
                          : 'border-blue-400 bg-white text-blue-600 dark:border-blue-600 dark:bg-slate-900 dark:text-blue-300',
                      )}
                    >
                      {isChecked && <CheckCircleIcon className="h-3.5 w-3.5" />}
                    </span>
                  </span>
                </div>

                <h3
                  className={cn(
                    'text-xsm sm:text-sm font-bold break-keep leading-snug',
                    isChecked ? 'text-emerald-700 dark:text-emerald-200' : 'text-[var(--term-fg)]',
                  )}
                >
                  {m.title}
                </h3>

                <p
                  className={cn(
                    'text-xxsm leading-relaxed break-keep',
                    isChecked
                      ? 'text-emerald-700/80 dark:text-emerald-200/80'
                      : 'text-[var(--term-muted)]',
                  )}
                >
                  {m.helper}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
