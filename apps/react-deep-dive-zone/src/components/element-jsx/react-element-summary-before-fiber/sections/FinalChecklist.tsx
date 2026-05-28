'use client';

import { useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { ReactElementSummaryBeforeFiberContent } from '../content';
import { CheckCircleIcon, ListChecksIcon, SparklesIcon, TrophyIcon } from '../icons';

type Props = { content: ReactElementSummaryBeforeFiberContent['checklist'] };

export const FinalChecklist = ({ content }: Props) => {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const toggle = (id: string) =>
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const completed = checked.size === content.items.length;

  return (
    <section aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
      <SectionBadgeHeader
        id="checklist"
        number={content.badge}
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<ListChecksIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,_0.7fr)_minmax(0,_1.3fr)_minmax(0,_0.6fr)] gap-md items-stretch">
        {/* left description */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200"
          >
            <ListChecksIcon className="h-5 w-5" />
          </span>
          <h3 className="text-md font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.leftTitle}
          </h3>
          <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.leftBody}
          </p>
          <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
            <p className="text-[10px] uppercase tracking-wider font-mono text-[var(--term-muted)]">
              progress
            </p>
            <p className="text-sm font-bold text-[var(--term-fg)] tabular-nums">
              {checked.size} / {content.items.length}
            </p>
          </div>
        </article>

        {/* checklist */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border p-md',
            'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
            'border-[var(--term-border)]',
          )}
        >
          <ul
            className="grid grid-cols-1 md:grid-cols-2 gap-2"
            role="group"
            aria-label={content.title}
          >
            {content.items.map((item) => {
              const isChecked = checked.has(item.id);
              return (
                <li key={item.id}>
                  <label
                    className={cn(
                      'flex items-center gap-sm rounded-xl border p-sm cursor-pointer transition-colors',
                      isChecked
                        ? 'border-emerald-300/80 bg-emerald-50 dark:border-emerald-800/70 dark:bg-emerald-950/40'
                        : 'border-[var(--term-border)] bg-[var(--term-bg)] hover:border-sky-300/70',
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggle(item.id)}
                      className="h-4 w-4 rounded border-[var(--term-border)] text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                    />
                    <span
                      className={cn(
                        'text-xsm leading-relaxed break-keep',
                        isChecked
                          ? 'line-through text-emerald-800/80 dark:text-emerald-200/80'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item.text}
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
        </article>

        {/* completion card */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md text-center items-center justify-center',
            completed
              ? 'border-2 border-emerald-300/80 bg-emerald-50/60 dark:border-emerald-700/70 dark:bg-emerald-950/30'
              : 'border-[var(--term-border)] bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <span
            aria-hidden="true"
            className={cn(
              'inline-flex items-center justify-center w-16 h-16 rounded-full border-2',
              completed
                ? 'border-emerald-400/80 bg-emerald-100 text-emerald-700 dark:border-emerald-600/70 dark:bg-emerald-950/60 dark:text-emerald-200'
                : 'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
            )}
          >
            {completed ? <TrophyIcon className="h-7 w-7" /> : <SparklesIcon className="h-7 w-7" />}
          </span>
          <h3
            className={cn(
              'text-sm font-bold tracking-tight break-keep',
              completed ? 'text-emerald-800 dark:text-emerald-100' : 'text-[var(--term-fg)]',
            )}
          >
            {content.completionTitle}
          </h3>
          <p
            className={cn(
              'text-xsm leading-relaxed break-keep',
              completed
                ? 'text-emerald-800/90 dark:text-emerald-200/80'
                : 'text-[var(--term-muted)]',
            )}
          >
            {content.completionBody}
          </p>
          {completed && (
            <span
              aria-hidden="true"
              className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-300"
            >
              <CheckCircleIcon className="h-3.5 w-3.5" />
              ready
            </span>
          )}
        </article>
      </div>
    </section>
  );
};
