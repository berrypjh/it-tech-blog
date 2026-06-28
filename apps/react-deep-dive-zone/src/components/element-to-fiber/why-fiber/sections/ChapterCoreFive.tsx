import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { CoreFiveItem, FiberWhyNeededContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['coreFive'] };

export const ChapterCoreFive = ({ content }: Props) => (
  <section
    id="core-five"
    aria-labelledby="heading-core-five"
    className="space-y-md scroll-mt-xl h-full"
  >
    <SectionBadgeHeader
      id="core-five"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="flex flex-col gap-sm">
      {content.items.map((item) => (
        <li key={item.id}>
          <ItemCard item={item} />
        </li>
      ))}
    </ul>
  </section>
);

const ItemCard = ({ item }: { item: CoreFiveItem }) => {
  const t = toneTokens[item.accent];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        t.fill.border,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-full border shrink-0',
          'font-mono text-md font-extrabold tabular-nums',
          t.chip,
        )}
      >
        {item.number}
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-extrabold tracking-tight break-keep', t.text)}>
          {item.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {item.description}
        </p>
      </div>
    </article>
  );
};
