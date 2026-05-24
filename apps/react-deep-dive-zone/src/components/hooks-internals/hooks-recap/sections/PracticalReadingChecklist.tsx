import { cn } from '@it-tech-blog/utils';

import { SectionHeader } from '../../../start/_shared/SectionHeader';
import type { ChecklistItem, HooksRecapContent } from '../content';
import { CheckCircleIcon, ListChecksIcon } from '../icons';

import { toneCardBg, toneIconBox, toneText } from './_shared/tones';

type Props = { content: HooksRecapContent['checklist'] };

const Item = ({ item }: { item: ChecklistItem }) => (
  <article
    className={cn(
      'h-full flex flex-col gap-2 rounded-2xl border-2 p-md sm:p-lg',
      'shadow-[0_2px_0_var(--term-border)] transition-all',
      'motion-safe:hover:-translate-y-0.5',
      toneCardBg[item.tone],
    )}
  >
    <header className="flex items-start gap-2">
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border',
          toneIconBox[item.tone],
        )}
      >
        <CheckCircleIcon className="h-4 w-4" />
      </span>
      <h3
        className={cn(
          'text-xsm sm:text-sm font-bold leading-snug break-keep flex-1',
          toneText[item.tone],
        )}
      >
        {item.title}
      </h3>
    </header>
    <p className="text-[11px] sm:text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
      {item.detail}
    </p>
  </article>
);

export const PracticalReadingChecklist = ({ content }: Props) => (
  <section
    aria-labelledby="heading-checklist"
    className={cn(
      'rounded-3xl border bg-[var(--term-bg)] p-md sm:p-lg lg:p-xl',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <SectionHeader
      id="checklist"
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
      {content.items.map((item) => (
        <li key={item.title}>
          <Item item={item} />
        </li>
      ))}
    </ul>
  </section>
);
