import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { CallPathCompressionContent, NoteField } from '../content';
import { ArrowRightIcon, FileTextIcon, NotebookIcon } from '../icons';

type Props = { content: CallPathCompressionContent['readingNote'] };

export const ReadingNotePanelSection = ({ content }: Props) => {
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

      {/* Notebook-style card */}
      <article
        className={cn(
          'rounded-2xl border-2 overflow-hidden',
          'border-slate-200 bg-white shadow-[0_3px_0_var(--term-border)]',
          'dark:border-slate-700 dark:bg-[var(--term-bg)]',
        )}
      >
        {/* Notebook header */}
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
            reading-note
          </span>
        </header>

        {/* Fields */}
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
                  idx === 0 && 'lg:border-t-0 border-t-0',
                  'lg:border-t lg:border-solid',
                )}
              >
                <NoteValue field={field} />
              </dd>
            </Fragment>
          ))}
        </dl>
      </article>
    </section>
  );
};

const NoteValue = ({ field }: { field: NoteField }) => {
  if (field.format === 'text' && typeof field.value === 'string') {
    return (
      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-fg)] break-keep">
        {field.value}
      </p>
    );
  }

  if (field.format === 'code' && typeof field.value === 'string') {
    return (
      <code
        className={cn(
          'inline-flex items-center rounded-md border-2 px-2.5 py-1',
          'border-blue-300 bg-blue-50 text-blue-800',
          'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
          'font-mono text-xsm font-bold',
        )}
      >
        {field.value}
      </code>
    );
  }

  if (field.format === 'code-list' && Array.isArray(field.value)) {
    return (
      <ul className="flex flex-wrap gap-1.5">
        {field.value.map((v) => (
          <li key={v}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5',
                'border-[var(--term-border)] bg-[var(--term-surface)]',
                'font-mono text-[11px] text-[var(--term-fg)]',
              )}
            >
              {v}
            </code>
          </li>
        ))}
      </ul>
    );
  }

  if (field.format === 'flow' && Array.isArray(field.value)) {
    return (
      <ul className="flex flex-wrap items-center gap-1.5">
        {field.value.map((v, i) => (
          <li key={v} className="flex items-center gap-1.5">
            <code
              className={cn(
                'inline-flex items-center rounded-full border px-2 py-0.5',
                'border-violet-300 bg-violet-50 text-violet-800',
                'dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
                'font-mono text-[10.5px] font-bold uppercase tracking-wider',
              )}
            >
              {v}
            </code>
            {i < field.value.length - 1 && (
              <ArrowRightIcon
                className="h-3 w-3 text-violet-500 dark:text-violet-400"
                aria-hidden="true"
              />
            )}
          </li>
        ))}
      </ul>
    );
  }

  return null;
};
