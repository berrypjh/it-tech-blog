import { cx } from '@berrypjh/react-ui';
import { CheckSquare, Trophy } from 'lucide-react';

import { SectionNote } from '../../../shared/note';
import { SectionHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CompleteWorkContent } from '../content';

type Props = { content: CompleteWorkContent['checklist'] };

export const FinalChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md">
    <SectionHeader
      id="checklist"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.subtitle}
      icon={<CheckSquare className="h-5 w-5" aria-hidden="true" />}
    />

    <article
      className={cx(
        'flex h-full flex-col gap-md rounded-lg border p-md sm:p-lg bg-[var(--term-bg)]',
        toneTokens.sky.border,
        'shadow-[0_2px_0_var(--term-border)]',
      )}
    >
      <ul className="flex flex-col gap-1.5">
        {content.items.map((item, idx) => (
          <li
            key={item.text}
            className={cx(
              'flex items-start gap-3 rounded-lg border bg-[var(--term-bg)] p-sm sm:p-md',
              toneTokens.sky.border,
              'transition-colors hover:bg-[var(--term-surface)]',
            )}
          >
            <span
              aria-hidden="true"
              className={cx(
                'mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md border',
                toneTokens.sky.chip,
              )}
            >
              <CheckSquare className="h-4 w-4" aria-hidden="true" />
            </span>
            <div className="flex flex-col gap-0 min-w-0">
              <span
                className={cx('text-xxsm font-mono uppercase tracking-wider', toneTokens.sky.text)}
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

      <SectionNote icon={<Trophy className="h-4 w-4" aria-hidden="true" />} className="mt-auto">
        {content.completionNote}
      </SectionNote>
    </article>
  </section>
);
