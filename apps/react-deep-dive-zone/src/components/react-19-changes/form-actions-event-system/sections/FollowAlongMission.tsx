'use client';

import { Fragment, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { BookOpenIcon, CheckCircleIcon, ListChecksIcon } from '../icons';

import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['mission'] };

/** [[token]] 형태의 토큰을 강조 chip으로 분해. */
const splitHighlights = (body: string): { text: string; emphasis: boolean }[] => {
  const parts: { text: string; emphasis: boolean }[] = [];
  const regex = /\[\[([^\]]+)\]\]/g;
  let last = 0;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(body)) !== null) {
    if (match.index > last) parts.push({ text: body.slice(last, match.index), emphasis: false });
    parts.push({ text: match[1] ?? '', emphasis: true });
    last = match.index + match[0].length;
  }
  if (last < body.length) parts.push({ text: body.slice(last), emphasis: false });
  return parts;
};

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

      <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
        {/* LEFT: checklist */}
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
              <ListChecksIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)]">Checklist</h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.checklist.map((item, i) => {
              const isChecked = checked[i] === true;
              return (
                <li key={item}>
                  <button
                    type="button"
                    aria-pressed={isChecked}
                    onClick={() => setChecked((prev) => ({ ...prev, [i]: !prev[i] }))}
                    className={cn(
                      'group w-full text-left rounded-xl border-2 p-3 transition-all',
                      'flex items-start gap-2.5',
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
                        'text-xsm font-bold break-keep leading-snug',
                        isChecked
                          ? 'text-emerald-700 dark:text-emerald-200 line-through decoration-emerald-400/60'
                          : 'text-[var(--term-fg)]',
                      )}
                    >
                      {item}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </article>

        {/* RIGHT: reading guide */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-teal-50/30 dark:border-teal-700/70 dark:bg-teal-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
            >
              <BookOpenIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200">
              {content.readingGuideTitle}
            </h3>
          </header>

          <ul className="flex flex-col gap-2">
            {content.readingGuide.map((g) => {
              const parts = splitHighlights(g.body);
              return (
                <li
                  key={g.body}
                  className={cn(
                    'flex items-start gap-2 rounded-xl border px-3 py-2.5',
                    'border-teal-200 bg-white dark:border-teal-800/60 dark:bg-[var(--term-bg)]',
                  )}
                >
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600 dark:text-teal-300"
                  />
                  <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
                    {parts.map((p, idx) => (
                      <Fragment key={idx}>
                        {p.emphasis ? (
                          <code className="rounded-md border border-teal-200 bg-teal-50 px-1.5 py-0.5 font-mono text-[12px] font-bold text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200">
                            {p.text}
                          </code>
                        ) : (
                          <span>{p.text}</span>
                        )}
                      </Fragment>
                    ))}
                  </p>
                </li>
              );
            })}
          </ul>
        </article>
      </div>
    </section>
  );
};
