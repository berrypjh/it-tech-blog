import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../_shared/SectionBadgeHeader';
import type { ReactElementObjectStructureContent } from '../content';
import { HelpCircleIcon, LightbulbIcon } from '../icons';

type Props = { content: ReactElementObjectStructureContent['learningCheck'] };

export const ElementLearningCheck = ({ content }: Props) => (
  <section aria-labelledby="heading-check" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="check"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-md items-stretch">
      {/* Q card */}
      <article
        className={cn(
          'flex items-start gap-md rounded-2xl border p-md',
          'border-sky-200/80 bg-sky-50/60',
          'dark:border-sky-800/70 dark:bg-sky-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full shrink-0',
            'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
            'font-mono font-bold text-lg',
          )}
        >
          {content.questionLabel}
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[10px] uppercase tracking-wider font-mono text-sky-700/80 dark:text-sky-300/80">
            question
          </span>
          <p className="text-md font-bold leading-snug text-sky-900 dark:text-sky-100 break-keep">
            {content.question}
          </p>
        </div>
      </article>

      {/* A card */}
      <article
        className={cn(
          'flex items-start gap-md rounded-2xl border p-md',
          'border-teal-200/80 bg-teal-50/60',
          'dark:border-teal-800/70 dark:bg-teal-950/30',
          'shadow-[0_2px_0_var(--term-border)]',
        )}
      >
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-14 h-14 rounded-full shrink-0',
            'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
            'font-mono font-bold text-lg',
          )}
        >
          {content.answerLabel}
        </span>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-mono text-teal-700/80 dark:text-teal-300/80">
            <LightbulbIcon className="h-3.5 w-3.5" aria-hidden="true" />
            answer
          </span>
          <p className="text-sm sm:text-md font-bold leading-snug text-teal-900 dark:text-teal-100 break-keep">
            {content.answer}
          </p>
          <p className="text-xsm leading-relaxed text-teal-800/90 dark:text-teal-200/80 break-keep">
            {content.answerNote}
          </p>
        </div>
      </article>
    </div>
  </section>
);
