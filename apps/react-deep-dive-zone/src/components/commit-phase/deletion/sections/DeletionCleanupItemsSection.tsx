import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import { commitToneTokens } from '../../_shared/tones';
import type { CleanupCard, CleanupCardIcon, DeletionContent } from '../content';
import { ClockIcon, MonitorIcon, SparklesIcon, TrashIcon, UnlinkIcon } from '../icons';

type Props = { content: DeletionContent['cleanup'] };

const iconMap: Record<CleanupCardIcon, typeof UnlinkIcon> = {
  brokenLink: UnlinkIcon,
  monitor: MonitorIcon,
  clock: ClockIcon,
  trash: TrashIcon,
};

export const DeletionCleanupItemsSection = ({ content }: Props) => (
  <section
    id="cleanup-items"
    aria-labelledby="heading-cleanup-items"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="cleanup-items"
      number={content.number}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<SparklesIcon className="h-5 w-5" />}
    />

    <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {content.cards.map((card, idx) => (
        <li key={card.title} className="flex h-full">
          <Card card={card} index={idx + 1} />
        </li>
      ))}
    </ol>
  </section>
);

const Card = ({ card, index }: { card: CleanupCard; index: number }) => {
  const Icon = iconMap[card.iconName];
  const t = commitToneTokens[card.tone];
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
            'text-[10px] font-mono uppercase tracking-wider tabular-nums rounded-md border px-1.5 py-0.5',
            t.chipSolid,
          )}
        >
          {String(index).padStart(2, '0')}
        </span>
      </header>

      <h3 className={cn('text-sm sm:text-md font-bold leading-tight break-keep', t.textStrong)}>
        {card.title}
      </h3>

      <p className="text-xsm sm:text-sm leading-relaxed text-[var(--term-muted)] break-keep">
        {card.description}
      </p>

      <code
        className={cn(
          'mt-auto inline-block self-start rounded-md border px-2 py-1 text-[11px] font-mono break-all',
          t.chip,
        )}
      >
        {card.codePill}
      </code>
    </article>
  );
};
