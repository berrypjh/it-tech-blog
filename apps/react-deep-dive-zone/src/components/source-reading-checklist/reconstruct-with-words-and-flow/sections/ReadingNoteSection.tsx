import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/SectionHeader';
import { AspectBadge } from '../AspectBadge';
import type { NoteField, ReconstructContent } from '../content';
import { FileTextIcon, MessageSquareTextIcon, NotebookIcon } from '../icons';

type Props = { content: ReconstructContent['readingNote'] };

export const ReadingNoteSection = ({ content }: Props) => {
  return (
    <section
      id="section-reading-note"
      aria-labelledby="heading-reading-note"
      className="space-y-lg"
    >
      <SectionHeader
        id="reading-note"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<NotebookIcon className="h-5 w-5" />}
      />

      <article
        className={cn(
          'rounded-2xl border-2 overflow-hidden',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        <header
          className={cn(
            'flex items-center justify-between gap-2 border-b-2 px-md py-3',
            'border-slate-200 bg-slate-50/80 dark:border-slate-700 dark:bg-slate-900/40',
          )}
        >
          <div className="flex items-center gap-2">
            <span aria-hidden="true" className="flex items-center gap-1.5">
              <span className="block h-2.5 w-2.5 rounded-full bg-red-400/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-amber-300/80" />
              <span className="block h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </span>
            <FileTextIcon
              className="h-3.5 w-3.5 text-slate-500 dark:text-slate-400"
              aria-hidden="true"
            />
            <code className="font-mono text-[11px] text-slate-700 dark:text-slate-300">
              {content.noteHeader}
            </code>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {content.noteTitle}
          </span>
        </header>

        <dl className="grid grid-cols-1 lg:grid-cols-[minmax(120px,_auto)_minmax(0,_1fr)] gap-x-md gap-y-0 px-md sm:px-lg py-md">
          {content.fields.map((field, idx) => (
            <Fragment key={field.label}>
              <dt
                className={cn(
                  'pt-3 pb-1 lg:py-3 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]',
                  'lg:border-t border-[var(--term-border)]',
                  idx === 0 && 'lg:border-t-0',
                )}
              >
                {field.label}
              </dt>
              <dd
                className={cn(
                  'pb-3 lg:py-3 border-t border-dashed border-[var(--term-border)] lg:border-t-0',
                  idx === 0 && 'border-t-0',
                  'lg:border-t lg:border-solid',
                )}
              >
                <NoteValue field={field} />
              </dd>
            </Fragment>
          ))}

          {/* Summary (highlighted) */}
          <dt
            className={cn(
              'pt-3 pb-1 lg:py-3 text-[10px] font-mono uppercase tracking-wider',
              'lg:border-t border-[var(--term-border)]',
              'text-emerald-700 dark:text-emerald-300 font-bold',
            )}
          >
            {content.summaryLabel}
          </dt>
          <dd className="pb-3 lg:py-3 border-t border-dashed border-[var(--term-border)] lg:border-solid">
            <div
              className={cn(
                'flex items-start gap-3 rounded-xl border-2 p-md',
                'border-emerald-300 bg-emerald-50/60 text-emerald-900',
                'dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-100',
              )}
            >
              <MessageSquareTextIcon
                className="mt-1 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400"
                aria-hidden="true"
              />
              <p className="text-sm sm:text-md font-bold leading-snug break-keep">
                {content.summaryValue}
              </p>
            </div>
          </dd>
        </dl>
      </article>
    </section>
  );
};

const NoteValue = ({ field }: { field: NoteField }) => {
  if (field.format === 'badge' && field.tone) {
    return (
      <AspectBadge tone={field.tone} size="md" strong>
        {field.value}
      </AspectBadge>
    );
  }

  if (field.format === 'code') {
    return (
      <code
        className={cn(
          'inline-flex items-center rounded-md border px-2 py-0.5',
          'border-[var(--term-border)] bg-[var(--term-surface)]',
          'font-mono text-[11px] text-[var(--term-fg)]',
        )}
      >
        {field.value}
      </code>
    );
  }

  return <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{field.value}</p>;
};
