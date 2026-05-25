import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { ArrowRightIcon, CodeIcon, DatabaseIcon, SparklesIcon } from '../icons';
import { pipelineTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['formData'] };

export const FormDataCreationSection = ({ content }: Props) => {
  const tone = pipelineTone.formData;

  return (
    <section aria-labelledby="form-data-heading" className="flex flex-col">
      <SectionHeader
        id="form-data-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div
        className={cn(
          'grid grid-cols-1 gap-md items-stretch',
          'lg:grid-cols-[minmax(0,_1fr)_auto_minmax(0,_1fr)_auto_minmax(0,_1fr)] lg:gap-3',
        )}
      >
        {/* LEFT: input example */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            'border-slate-200 bg-white dark:border-slate-700 dark:bg-[var(--term-bg)]',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-slate-100 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              <CodeIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
              {content.inputTitle}
            </h3>
          </header>
          <CodePanel code={content.inputCode} langBadge="TSX" />
        </article>

        {/* Arrow 1 */}
        <ArrowSpacer />

        {/* MIDDLE: FormData object visualization */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            tone.borderStrong,
            tone.bg,
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex h-8 w-8 items-center justify-center rounded-lg border',
                tone.iconChip,
              )}
            >
              <DatabaseIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-mono font-bold break-keep', tone.text)}>
              {content.objectTitle}
            </h3>
          </header>
          <pre
            className={cn(
              'overflow-x-auto rounded-xl border bg-white px-3 py-3',
              'dark:bg-[var(--term-bg)]',
              tone.border,
              'font-mono text-[12px] leading-relaxed sm:text-[13px]',
            )}
          >
            <code className={cn('block whitespace-pre', tone.text)}>
              {content.objectLines.map((line, idx) => (
                <span key={idx} className="block">
                  {line}
                </span>
              ))}
            </code>
          </pre>
        </article>

        {/* Arrow 2 */}
        <ArrowSpacer />

        {/* RIGHT: description card */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            'border-blue-200/80 bg-blue-50/40 dark:border-blue-800/60 dark:bg-blue-950/20',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
            >
              <SparklesIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-200 break-keep">
              FormData → action
            </h3>
          </header>
          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.descriptionBody}
          </p>
        </article>
      </div>
    </section>
  );
};

const ArrowSpacer = () => (
  <span aria-hidden="true" className="hidden lg:flex items-center justify-center">
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-800/60 dark:bg-cyan-950/40 dark:text-cyan-200">
      <ArrowRightIcon className="h-3.5 w-3.5" />
    </span>
  </span>
);
