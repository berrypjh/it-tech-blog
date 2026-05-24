import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../getting-started/_shared/SectionHeader';
import type { ReconcilerEntryContent } from '../content';
import { CircleHelpIcon, LightbulbIcon } from '../icons';

type Props = { content: ReconcilerEntryContent['question'] };

export const ReconcilerConceptQuestion = ({ content }: Props) => {
  return (
    <section aria-labelledby="heading-question" className="space-y-md">
      <SectionHeader
        id="question"
        eyebrow={content.eyebrow}
        title={content.title}
        icon={<CircleHelpIcon className="h-5 w-5" />}
      />

      <div
        className={cn(
          'relative overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
          'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
          'p-md sm:p-lg lg:p-xl',
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(251,191,36,0.16),transparent_55%),radial-gradient(circle_at_10%_70%,rgba(139,92,246,0.10),transparent_55%)]"
        />

        <div className="relative grid grid-cols-1 lg:grid-cols-[minmax(0,_0.58fr)_minmax(0,_0.42fr)] gap-md items-center">
          {/* 좌측 질문 */}
          <div className="flex items-start gap-md">
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-12 h-12 rounded-xl shrink-0',
                'border-2 border-violet-300 bg-violet-50 text-violet-700 font-bold text-xl',
                'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
              )}
            >
              Q
            </span>
            <p className="text-md sm:text-lg lg:text-xl font-bold tracking-tight text-[var(--term-fg)] break-keep">
              {content.question}
            </p>
          </div>

          {/* 우측 힌트 카드 */}
          <article
            className={cn(
              'flex items-start gap-sm rounded-xl border p-md',
              'border-amber-300 bg-amber-50/70 text-amber-900',
              'dark:border-amber-700/60 dark:bg-amber-950/30 dark:text-amber-100',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-9 h-9 rounded-md shrink-0',
                'bg-amber-400 text-amber-950 dark:bg-amber-300 dark:text-amber-950',
              )}
            >
              <LightbulbIcon className="h-5 w-5" />
            </span>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[10px] uppercase tracking-wider font-bold">
                {content.hintLabel}
              </span>
              <p className="text-xsm sm:text-sm leading-relaxed font-medium break-keep">
                {content.hint}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
