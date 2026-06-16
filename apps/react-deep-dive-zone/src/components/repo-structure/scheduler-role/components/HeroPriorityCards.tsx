import { cn } from '@it-tech-blog/utils';

import type { HeroPriorityCard, PriorityKey, SchedulerContent } from '../content';
import { iconByName } from '../icons';

import { PriorityRail } from './PriorityRail';

type Props = { content: SchedulerContent['hero'] };

/** priority별 색조 매핑 — 중립 크롬 + 3색 소프트 텍스트 순환(amber/sky/violet) */
const tintByPriority: Record<
  PriorityKey,
  { card: string; chip: string; text: string; dot: string }
> = {
  immediate: {
    card: 'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-[var(--term-accent)]',
    text: 'text-[var(--term-accent)]',
    dot: 'bg-[var(--term-accent)]',
  },
  normal: {
    card: 'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-sky-600 dark:text-sky-300',
    text: 'text-sky-600 dark:text-sky-300',
    dot: 'bg-sky-400 dark:bg-sky-500',
  },
  low: {
    card: 'bg-[var(--term-surface)] border-[var(--term-border)] hover:border-[var(--term-accent)]',
    chip: 'bg-[var(--term-surface)] border-[var(--term-border)] text-violet-600 dark:text-violet-300',
    text: 'text-violet-600 dark:text-violet-300',
    dot: 'bg-violet-400 dark:bg-violet-500',
  },
};

export { tintByPriority };

export const HeroPriorityCards = ({ content }: Props) => {
  return (
    <div
      className={cn(
        'relative w-full rounded-2xl border bg-[var(--term-bg)]',
        'border-[var(--term-border)] shadow-[0_3px_0_var(--term-border)]',
        'p-md sm:p-lg overflow-hidden',
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[var(--term-surface)]/40"
      />

      <div className="relative flex flex-col gap-md">
        {/* 상단 라벨 */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold">
          <span className="inline-flex items-center gap-1.5 text-[var(--term-accent)]">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-[var(--term-accent)]"
            />
            {content.priorityHighLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 text-sky-600 dark:text-sky-300">
            {content.priorityLowLabel}
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-sky-400 dark:bg-sky-500"
            />
          </span>
        </div>

        {/* 3개 카드 */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {content.priorityCards.map((card) => (
            <li key={card.id} className="min-w-0">
              <PriorityCard card={card} />
            </li>
          ))}
        </ul>

        {/* 실행 타이밍 레일 */}
        <PriorityRail highLabel={content.railHighLabel} lowLabel={content.railLowLabel} />
      </div>
    </div>
  );
};

type CardProps = { card: HeroPriorityCard };

const PriorityCard = ({ card }: CardProps) => {
  const tint = tintByPriority[card.id];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border p-3',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
        tint.card,
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-md border',
            tint.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex min-w-0 items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            tint.chip,
          )}
        >
          <span
            aria-hidden="true"
            className={cn('inline-block shrink-0 w-1 h-1 rounded-full', tint.dot)}
          />
          <span className="truncate">{card.badge}</span>
        </span>
      </header>
      <h3 className={cn('text-xsm font-bold tracking-tight break-keep', tint.text)}>
        {card.title}
      </h3>
      <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
