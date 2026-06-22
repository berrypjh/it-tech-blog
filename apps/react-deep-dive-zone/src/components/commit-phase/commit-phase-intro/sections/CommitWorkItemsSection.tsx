import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { CommitPhaseIntroContent, WorkItem, WorkItemIcon } from '../content';
import {
  LinkIcon,
  MonitorIcon,
  PencilIcon,
  PlusSquareIcon,
  SparklesIcon,
  TrashIcon,
  ZapIcon,
} from '../icons';
import { commitToneTokens } from '../palette';

type Props = { content: CommitPhaseIntroContent['work'] };

const iconMap: Record<WorkItemIcon, typeof PencilIcon> = {
  plusSquare: PlusSquareIcon,
  pencil: PencilIcon,
  trash: TrashIcon,
  link: LinkIcon,
  monitor: MonitorIcon,
  zap: ZapIcon,
};

export const CommitWorkItemsSection = ({ content }: Props) => (
  <section
    id="commit-work-items"
    aria-labelledby="heading-commit-work-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="commit-work-items"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {content.items.map((item, idx) => (
        <li key={item.title} className="flex h-full">
          <ItemCard item={item} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const ItemCard = ({ item, index }: { item: WorkItem; index: number }) => {
  const Icon = iconMap[item.iconName];
  const t = commitToneTokens[item.tone];
  return (
    <article
      className={cn(
        'flex h-full flex-col gap-sm rounded-2xl border bg-[var(--term-bg)] p-md sm:p-lg',
        t.border,
        'shadow-[0_1px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 motion-reduce:transform-none',
        t.borderHover,
      )}
    >
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-11 w-11 items-center justify-center rounded-2xl border',
            t.chipSolid,
          )}
        >
          <Icon className="h-5 w-5" />
        </span>
        <span
          className={cn(
            'text-[10px] font-mono uppercase tracking-wider tabular-nums',
            'rounded-md border px-1.5 py-0.5',
            t.chipSolid,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>

      <div className="flex flex-col gap-1">
        <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
          {item.title}
        </h3>
        <span
          className={cn(
            'inline-flex items-center gap-1 self-start rounded-md border px-2 py-0.5',
            'text-[10px] font-mono uppercase tracking-wider',
            t.chip,
          )}
        >
          {item.subtitle}
        </span>
      </div>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {item.description}
      </p>
    </article>
  );
};
