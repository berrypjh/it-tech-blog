import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../react-elements/_shared/SectionBadgeHeader';
import type { CoreFiveItem, FiberWhyNeededContent } from '../content';
import { ListChecksIcon } from '../icons';

type Props = { content: FiberWhyNeededContent['coreFive'] };

const accentTokens = {
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    badge: 'bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
    text: 'text-sky-700 dark:text-sky-300',
    surface: 'bg-sky-50/40 dark:bg-sky-950/15',
  },
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    badge: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    text: 'text-emerald-700 dark:text-emerald-300',
    surface: 'bg-emerald-50/40 dark:bg-emerald-950/15',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    badge: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    text: 'text-violet-700 dark:text-violet-300',
    surface: 'bg-violet-50/40 dark:bg-violet-950/15',
  },
  amber: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    borderHover: 'hover:border-amber-400 dark:hover:border-amber-500/70',
    badge: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-950',
    text: 'text-amber-700 dark:text-amber-300',
    surface: 'bg-amber-50/40 dark:bg-amber-950/15',
  },
} as const;

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
  const a = accentTokens[item.accent];
  return (
    <article
      className={cn(
        'group flex items-start gap-sm rounded-2xl border-2 p-md sm:p-lg',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        a.border,
        a.borderHover,
        a.surface,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0',
          'font-mono text-md font-extrabold tabular-nums',
          'shadow-[0_8px_22px_-10px_rgba(0,0,0,0.35)]',
          a.badge,
        )}
      >
        {item.number}
      </span>
      <div className="flex flex-col gap-1 min-w-0">
        <h3 className={cn('text-sm sm:text-md font-extrabold tracking-tight break-keep', a.text)}>
          {item.title}
        </h3>
        <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep">
          {item.description}
        </p>
      </div>
    </article>
  );
};
