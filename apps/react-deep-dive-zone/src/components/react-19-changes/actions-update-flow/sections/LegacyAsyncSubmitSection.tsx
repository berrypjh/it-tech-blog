import { cn } from '@it-tech-blog/utils';

import type { ActionsUpdateFlowContent } from '../content';
import { TriangleAlertIcon, XIcon } from '../icons';

import { CodePanel } from './_CodePanel';
import { SectionHeader } from './_SectionHeader';

type Props = { content: ActionsUpdateFlowContent['legacySubmit'] };

export const LegacyAsyncSubmitSection = ({ content }: Props) => (
  <section aria-labelledby="legacy-submit-heading" className="flex flex-col">
    <SectionHeader
      id="legacy-submit-heading"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
    />

    <div className="grid grid-cols-1 gap-md lg:grid-cols-[minmax(0,_7fr)_minmax(0,_5fr)] lg:gap-lg items-stretch">
      {/* LEFT: dark code panel */}
      <div className="flex">
        <CodePanel
          code={content.code}
          fileName={content.codeFile}
          langBadge="JS"
          ariaLabel={content.title}
        />
      </div>

      {/* RIGHT: red problem card */}
      <article
        className={cn(
          'flex flex-col gap-sm rounded-2xl border-2 p-md sm:p-lg',
          'border-rose-200/80 bg-rose-50/60 dark:border-rose-800/70 dark:bg-rose-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <header className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/60 dark:text-rose-200"
          >
            <TriangleAlertIcon className="h-4 w-4" />
          </span>
          <h3 className="text-sm font-bold text-rose-700 dark:text-rose-200 break-keep">
            {content.problemTitle}
          </h3>
        </header>

        <ul className="flex flex-col gap-1.5">
          {content.problems.map((p) => (
            <li
              key={p}
              className={cn(
                'flex items-start gap-2 rounded-lg border px-3 py-2',
                'border-rose-200 bg-white dark:border-rose-800/60 dark:bg-[var(--term-bg)]',
              )}
            >
              <span
                aria-hidden="true"
                className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/60 dark:text-rose-300"
              >
                <XIcon className="h-3 w-3" strokeWidth={3} />
              </span>
              <span className="text-xsm text-[var(--term-fg)] break-keep leading-snug">{p}</span>
            </li>
          ))}
        </ul>
      </article>
    </div>
  </section>
);
