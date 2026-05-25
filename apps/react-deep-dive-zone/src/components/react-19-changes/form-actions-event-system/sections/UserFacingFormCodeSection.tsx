import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { SendIcon, SparklesIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['userFormCode'] };

export const UserFacingFormCodeSection = ({ content }: Props) => (
  <section aria-labelledby="user-form-code-heading" className="flex flex-col">
    <SectionHeader
      id="user-form-code-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-2 lg:gap-lg items-stretch">
      {/* LEFT: code */}
      <div className="flex">
        <CodePanel
          code={content.code.code}
          fileName={content.code.fileName}
          langBadge={content.code.langBadge}
          ariaLabel={content.title}
        />
      </div>

      {/* RIGHT: rendered form mock — NOT a real submit */}
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
            <SparklesIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-[var(--term-fg)] break-keep">
            {content.mock.title}
          </h3>
        </header>

        {/* Form mock — preventDefault inside button (type=button) and form onSubmit prevented */}
        <div
          className={cn(
            'flex flex-col gap-2 rounded-xl border-2 p-md',
            'border-slate-200 bg-slate-50/40',
            'dark:border-slate-700 dark:bg-slate-900/30',
          )}
          role="group"
          aria-label={content.mock.title}
        >
          <label
            htmlFor="user-form-mock-title"
            className="text-[10px] font-mono font-bold uppercase tracking-wider text-[var(--term-muted)]"
          >
            {content.mock.label}
          </label>
          <input
            id="user-form-mock-title"
            type="text"
            placeholder={content.mock.placeholder}
            readOnly
            className={cn(
              'w-full rounded-lg border-2 px-3 py-2 font-mono text-xsm',
              'border-slate-200 bg-white text-[var(--term-fg)] placeholder:text-[var(--term-dim)]',
              'dark:border-slate-700 dark:bg-[var(--term-bg)]',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60',
            )}
          />
          <button
            type="button"
            disabled
            className={cn(
              'mt-1 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2',
              'bg-blue-600 text-white font-bold text-xsm dark:bg-blue-500',
              'shadow-[0_2px_0_rgba(15,23,42,0.25)]',
              'opacity-90 cursor-default',
            )}
          >
            <SendIcon aria-hidden="true" className="h-3.5 w-3.5" />
            {content.mock.button}
          </button>
        </div>

        {/* info bar */}
        <div
          className={cn(
            'flex items-start gap-2 rounded-xl border px-3 py-2.5',
            'border-blue-200 bg-blue-50/60 dark:border-blue-800/60 dark:bg-blue-950/30',
          )}
        >
          <span
            aria-hidden="true"
            className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-blue-200 bg-blue-100 text-blue-700 dark:border-blue-800/60 dark:bg-blue-950/60 dark:text-blue-200"
          >
            <SparklesIcon className="h-3 w-3" />
          </span>
          <p className="text-xsm leading-relaxed text-blue-700 dark:text-blue-200 break-keep">
            {content.mock.info}
          </p>
        </div>
      </article>
    </div>
  </section>
);
