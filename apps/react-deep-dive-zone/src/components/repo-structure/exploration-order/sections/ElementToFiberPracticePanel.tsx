'use client';

import { useId, useState } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ExplorationContent, PracticeStep } from '../content';
import { CheckCircleIcon, PencilIcon } from '../icons';

type Props = { content: ExplorationContent['practice2'] };

export const ElementToFiberPracticePanel = ({ content }: Props) => {
  const [note, setNote] = useState('');
  const textareaId = useId();
  const max = content.noteMax;
  const count = note.length;

  return (
    <section aria-labelledby="heading-practice2" className="space-y-md">
      <SectionHeader
        id="practice2"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CheckCircleIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'flex flex-col gap-md rounded-2xl border bg-[var(--term-bg)]',
          'border-teal-200/80 dark:border-teal-700/60',
          'shadow-[0_2px_0_var(--term-border)] p-md sm:p-lg',
        )}
      >
        <ol className="relative flex flex-col gap-sm">
          <span
            aria-hidden="true"
            className="hidden sm:block absolute left-[14px] top-3 bottom-3 w-px border-l border-dashed border-teal-300/70 dark:border-teal-700/60"
          />
          {content.steps.map((step) => (
            <li key={step.badge}>
              <PracticeRow step={step} />
            </li>
          ))}
        </ol>

        {/* Note area */}
        <div className="flex flex-col gap-2 rounded-xl border border-teal-200/80 bg-teal-50/40 dark:border-teal-700/60 dark:bg-teal-950/20 p-md">
          <label
            htmlFor={textareaId}
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-teal-800 dark:text-teal-200"
          >
            <PencilIcon className="h-3.5 w-3.5" aria-hidden="true" />
            {content.noteLabel}
          </label>
          <textarea
            id={textareaId}
            value={note}
            onChange={(e) => setNote(e.target.value.slice(0, max))}
            placeholder={content.notePlaceholder}
            rows={5}
            maxLength={max}
            className={cn(
              'w-full rounded-md border px-3 py-2 text-xsm leading-relaxed font-mono resize-y',
              'border-[var(--term-border)] bg-[var(--term-bg)] text-[var(--term-fg)]',
              'placeholder:text-[var(--term-dim)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--term-bg)]',
              'hover:border-teal-400 transition-colors',
            )}
          />
          <span
            className={cn(
              'self-end text-[10px] font-mono tabular-nums',
              count >= max ? 'text-rose-600 dark:text-rose-300' : 'text-[var(--term-muted)]',
            )}
          >
            {count} / {max}
          </span>
        </div>
      </article>
    </section>
  );
};

type RowProps = { step: PracticeStep };

const PracticeRow = ({ step }: RowProps) => (
  <div
    className={cn(
      'relative flex items-center gap-md rounded-lg border bg-[var(--term-bg)]',
      'border-[var(--term-border)] p-md transition-colors hover:bg-teal-50/40 dark:hover:bg-teal-950/20',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'relative z-10 inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0',
        'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-950',
      )}
    >
      <CheckCircleIcon className="h-4 w-4" />
    </span>

    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
        'border-teal-300 bg-teal-100 text-teal-800',
        'dark:border-teal-700/60 dark:bg-teal-950/40 dark:text-teal-200',
      )}
    >
      {step.badge}
    </span>

    <div className="flex flex-col gap-0.5 flex-1 min-w-0">
      <h3 className="text-sm sm:text-md font-bold tracking-tight text-[var(--term-fg)] break-keep">
        {step.title}
      </h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
        {step.description}
      </p>
    </div>

    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider shrink-0',
        'border-emerald-300 bg-emerald-100 text-emerald-800',
        'dark:border-emerald-700/60 dark:bg-emerald-950/40 dark:text-emerald-200',
      )}
    >
      <CheckCircleIcon className="h-3 w-3" aria-hidden="true" />
      {step.status}
    </span>
  </div>
);
