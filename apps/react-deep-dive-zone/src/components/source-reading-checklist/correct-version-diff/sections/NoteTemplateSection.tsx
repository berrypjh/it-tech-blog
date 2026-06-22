import { Fragment } from 'react';

import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../shared/section';
import type { CorrectVersionDiffContent, NoteField } from '../content';
import { FileTextIcon, NotebookTabsIcon, SparkIcon } from '../icons';
import { RoleBadge } from '../RoleBadge';

type Props = { content: CorrectVersionDiffContent['noteTemplate'] };

export const NoteTemplateSection = ({ content }: Props) => {
  return (
    <section
      id="section-note-template"
      aria-labelledby="heading-note-template"
      className="space-y-lg scroll-mt-24"
    >
      <SectionHeader
        id="note-template"
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.intro}
        icon={<NotebookTabsIcon className="h-5 w-5" />}
      />

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
            {content.templateTitle}
          </span>
        </header>

        {/* Fields */}
        <dl className="grid grid-cols-1 lg:grid-cols-[minmax(140px,_auto)_minmax(0,_1fr)] gap-x-md gap-y-0 px-md sm:px-lg py-md">
          {content.fields.map((field, idx) => (
            <Fragment key={field.label}>
              <dt
                className={cn(
                  'pt-3 pb-1 lg:py-3 text-[10px] font-mono uppercase tracking-wider text-[var(--term-muted)]',
                  'lg:border-t border-[var(--term-border)]',
                  idx === 0 && 'lg:border-t-0',
                  field.label === content.highlightFieldLabel &&
                    'lg:text-blue-600 dark:lg:text-blue-300 lg:font-bold',
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
                <NoteValue field={field} highlight={field.label === content.highlightFieldLabel} />
              </dd>
            </Fragment>
          ))}
        </dl>
      </article>
    </section>
  );
};

const NoteValue = ({ field, highlight }: { field: NoteField; highlight: boolean }) => {
  if (field.format === 'badge' && field.role) {
    return (
      <RoleBadge tone={field.role} size="md" strong>
        {field.value}
      </RoleBadge>
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

  if (field.format === 'list') {
    // Split by comma → mono code chips
    const items = field.value
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean);
    return (
      <ul className="flex flex-wrap gap-1.5">
        {items.map((v) => (
          <li key={v}>
            <code
              className={cn(
                'inline-flex items-center rounded-md border px-2 py-0.5',
                'border-blue-200 bg-blue-50 text-blue-800',
                'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
                'font-mono text-[11px]',
              )}
            >
              {v}
            </code>
          </li>
        ))}
      </ul>
    );
  }

  // text — with optional highlight emphasis
  if (highlight) {
    return (
      <div
        className={cn(
          'flex items-start gap-2 rounded-md border-2 p-3',
          'border-blue-300 bg-blue-50 text-blue-900',
          'dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-100',
        )}
      >
        <SparkIcon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
        <p className="text-xsm leading-relaxed font-bold break-keep">{field.value}</p>
      </div>
    );
  }

  return <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">{field.value}</p>;
};
