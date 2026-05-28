import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import type { JsxRuntimeFunctionsContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: JsxRuntimeFunctionsContent['question'] };

export const RuntimeLearningQuestion = ({ content }: Props) => (
  <section aria-labelledby="heading-question" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="question"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <div
      className={cn(
        'grid grid-cols-1 lg:grid-cols-[minmax(0,_1.4fr)_minmax(0,_1fr)] gap-md items-stretch',
        'rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <div className="flex items-start gap-md">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full border shrink-0',
            'border-sky-300/80 bg-sky-50 text-sky-700',
            'dark:border-sky-800/70 dark:bg-sky-950/60 dark:text-sky-200',
          )}
        >
          <HelpCircleIcon className="h-7 w-7" />
        </span>
        <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
          {content.question}
        </p>
      </div>

      <aside
        className={cn(
          'flex items-start gap-md rounded-2xl border p-md',
          'border-amber-300/70 bg-amber-50/70',
          'dark:border-amber-800/70 dark:bg-amber-950/30',
        )}
      >
        <span
          aria-hidden="true"
          className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-amber-300/80 bg-amber-100 text-amber-700 dark:border-amber-800/70 dark:bg-amber-950/60 dark:text-amber-200 shrink-0"
        >
          <LightbulbIcon className="h-5 w-5" />
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span
            className={cn(
              'inline-flex w-fit items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
              'border-amber-300/80 bg-amber-100 text-amber-800',
              'dark:border-amber-800/70 dark:bg-amber-950/60 dark:text-amber-200',
            )}
          >
            {content.hintLabel}
          </span>
          <p className="text-xsm sm:text-sm leading-relaxed text-amber-900/90 dark:text-amber-100/90 break-keep">
            {content.hint}
          </p>
        </div>
      </aside>
    </div>
  </section>
);
