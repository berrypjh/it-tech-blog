import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { ChecklistItem, HostComponentFiberContent } from '../content';
import { CheckCircleIcon, ListChecksIcon } from '../icons';

type Props = { content: HostComponentFiberContent['checklist'] };

export const QuickChecklist = ({ content }: Props) => (
  <section id="checklist" aria-labelledby="heading-checklist" className="space-y-md scroll-mt-xl">
    <SectionBadgeHeader
      id="checklist"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      icon={<ListChecksIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-md items-stretch">
      {content.items.map((item) => (
        <li key={item.id} className="flex">
          <Card item={item} />
        </li>
      ))}
    </ul>
  </section>
);

const Card = ({ item }: { item: ChecklistItem }) => (
  <article
    className={cn(
      'group flex flex-1 items-start gap-sm rounded-2xl border p-md',
      'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
      'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
      'hover:border-emerald-300/80 dark:hover:border-emerald-700/60',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
        'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
        'shadow-[0_6px_18px_-6px_rgba(16,185,129,0.55)]',
      )}
    >
      <CheckCircleIcon className="h-5 w-5" />
    </span>
    <p className="text-xsm leading-relaxed text-[var(--term-fg)] break-keep font-bold">
      {item.text}
    </p>
  </article>
);
