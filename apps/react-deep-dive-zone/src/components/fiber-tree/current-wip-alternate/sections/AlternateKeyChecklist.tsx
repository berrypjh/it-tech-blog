import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CurrentWipAlternateContent } from '../content';
import { CheckCircleIcon } from '../icons';

type Props = { content: CurrentWipAlternateContent['checklist'] };

export const AlternateKeyChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checklist"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<CheckCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-sm">
      {content.items.map((item) => (
        <li key={item}>
          <article
            className={cn(
              'flex items-start gap-sm h-full rounded-xl border bg-[var(--term-bg)] p-sm sm:p-md',
              'border-emerald-200/80 dark:border-emerald-800/60',
              'shadow-[0_2px_0_var(--term-border)]',
              'transition-all motion-safe:hover:-translate-y-0.5',
              'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'inline-flex items-center justify-center w-7 h-7 rounded-full shrink-0',
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
              )}
            >
              <CheckCircleIcon className="h-4 w-4" />
            </span>
            <p className="text-[12px] sm:text-xsm leading-snug font-medium text-[var(--term-fg)] break-keep">
              {item}
            </p>
          </article>
        </li>
      ))}
    </ul>
  </section>
);
