import { cn } from '@it-tech-blog/utils';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent } from '../content';
import { CheckSquareIcon, TrophyIcon } from '../icons';

type Props = { content: CompleteWorkContent['checklist'] };

export const FinalChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md">
    <SectionHeader
      id="checklist"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<CheckSquareIcon className="h-5 w-5" />}
    />

    <article
      className={cn(
        'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg bg-[var(--term-bg)]',
        toneTokens.sky.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-1.5">
        {content.items.map((item, idx) => (
          <li
            key={item.text}
            className={cn(
              'flex items-start gap-3 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
              toneTokens.sky.border,
              'transition-colors hover:bg-[var(--term-surface)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                toneTokens.sky.chip,
              )}
            >
              <CheckSquareIcon className="h-4 w-4" />
            </span>
            <div className="flex flex-col gap-0 min-w-0">
              <span
                className={cn('text-xxsm font-mono uppercase tracking-wider', toneTokens.sky.text)}
              >
                Q{String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-xsm sm:text-sm leading-snug text-[var(--term-fg)] font-bold break-keep">
                {item.text}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <SectionNote icon={<TrophyIcon className="h-4 w-4" />} className="mt-auto">
        {content.completionNote}
      </SectionNote>
    </article>
  </section>
);
