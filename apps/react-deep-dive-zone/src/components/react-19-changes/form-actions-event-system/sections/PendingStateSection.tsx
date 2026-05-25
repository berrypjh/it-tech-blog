import { cn } from '@it-tech-blog/utils';

import type { FormActionsEventSystemContent } from '../content';
import { CodeIcon, HourglassIcon, LinkIcon } from '../icons';
import { pipelineTone } from '../tone';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: FormActionsEventSystemContent['pendingState'] };

export const PendingStateSection = ({ content }: Props) => {
  const tone = pipelineTone.pending;

  return (
    <section aria-labelledby="pending-state-heading" className="flex flex-col">
      <SectionHeader
        id="pending-state-heading"
        number={content.number}
        eyebrow={content.eyebrow}
        title={content.title}
        description={content.description}
      />

      <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_6fr)_minmax(0,_6fr)] lg:gap-lg items-stretch">
        {/* LEFT: pendingState code */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md',
            tone.border,
            'bg-white dark:bg-[var(--term-bg)]',
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
              <HourglassIcon className="h-4 w-4" />
            </span>
            <h3 className={cn('text-sm font-mono font-bold break-keep', tone.text)}>
              pendingState
            </h3>
          </header>
          <CodePanel code={content.code} langBadge="TS" toneBorder="border-indigo-700/70" />
        </article>

        {/* RIGHT: useFormStatus connection */}
        <article
          className={cn(
            'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
            'border-teal-300/80 bg-teal-50/40 dark:border-teal-700/70 dark:bg-teal-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-teal-200 bg-teal-100 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/60 dark:text-teal-200"
            >
              <LinkIcon className="h-4 w-4" />
            </span>
            <h3 className="text-sm font-bold text-teal-700 dark:text-teal-200 break-keep">
              {content.useFormStatusTitle}
            </h3>
          </header>

          <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
            {content.useFormStatusBody}
          </p>

          {/* small code pill */}
          <div
            className={cn(
              'flex items-center gap-2 rounded-xl border-2 px-3 py-2',
              'border-teal-200 bg-white dark:border-teal-800/60 dark:bg-[var(--term-bg)]',
            )}
          >
            <CodeIcon
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 text-teal-700 dark:text-teal-200"
            />
            <code className="font-mono text-xsm text-[var(--term-fg)] break-all">
              {content.useFormStatusCode}
            </code>
          </div>
        </article>
      </div>
    </section>
  );
};
