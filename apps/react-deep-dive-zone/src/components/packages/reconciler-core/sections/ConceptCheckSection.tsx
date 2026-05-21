import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ReconcilerContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: ReconcilerContent['concept'] };

export const ConceptCheckSection = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-concept" className="space-y-md">
      <SectionHeader
        id="concept"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<HelpCircleIcon className="h-5 w-5" />}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
        {/* Q */}
        <article
          className={cn(
            'flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full',
            'border-violet-300/80 bg-violet-50/60',
            'dark:border-violet-800/70 dark:bg-violet-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          <header className="flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-full',
                'border border-violet-300/80 bg-violet-100 text-violet-700',
                'dark:border-violet-800/70 dark:bg-violet-950/60 dark:text-violet-200',
                'text-base font-bold font-mono',
              )}
            >
              Q.
            </span>
            <h3 className="text-xsm uppercase tracking-wider font-bold font-mono text-violet-700 dark:text-violet-300">
              Question
            </h3>
          </header>

          <p className="text-md sm:text-lg font-bold leading-snug text-[var(--term-fg)] break-keep">
            {content.question}
          </p>
        </article>

        {/* A */}
        <article
          className={cn(
            'relative flex flex-col gap-md rounded-2xl border p-md sm:p-lg h-full overflow-hidden',
            'border-teal-300/80 bg-teal-50/70',
            'dark:border-teal-800/70 dark:bg-teal-950/30',
            'shadow-[0_2px_0_var(--term-border)]',
          )}
        >
          {/* lightbulb 장식 */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -right-4 -top-2 text-teal-200/70 dark:text-teal-800/40"
          >
            <LightbulbIcon className="h-20 w-20" />
          </span>

          <header className="relative flex items-center gap-sm">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-full',
                'border border-teal-300/80 bg-teal-100 text-teal-700',
                'dark:border-teal-800/70 dark:bg-teal-950/60 dark:text-teal-200',
                'text-base font-bold font-mono',
              )}
            >
              A.
            </span>
            <h3 className="text-xsm uppercase tracking-wider font-bold font-mono text-teal-700 dark:text-teal-300">
              Answer
            </h3>
          </header>

          <p className="relative text-md font-bold leading-snug text-teal-900 dark:text-teal-100 break-keep">
            {content.answer}
          </p>

          <p className="relative text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
            {content.answerDetail}
          </p>
        </article>
      </div>
    </section>
  );
};
