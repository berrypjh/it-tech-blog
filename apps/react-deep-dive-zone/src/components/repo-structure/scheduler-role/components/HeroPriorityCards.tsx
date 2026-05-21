import { cn } from '@it-tech-blog/utils';

import type { HeroPriorityCard, PriorityKey, SchedulerContent } from '../content';
import { iconByName } from '../icons';

import { PriorityRail } from './PriorityRail';

type Props = { content: SchedulerContent['hero'] };

/** priority별 색조 매핑 (rose/blue/violet — toneTokens에 rose가 없어 직접 클래스 사용) */
const tintByPriority: Record<
  PriorityKey,
  { card: string; chip: string; text: string; dot: string }
> = {
  immediate: {
    card: 'bg-rose-50/80 border-rose-300 dark:bg-rose-950/30 dark:border-rose-700/60',
    chip: 'bg-rose-100 text-rose-800 border-rose-300 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-700/60',
    text: 'text-rose-700 dark:text-rose-300',
    dot: 'bg-rose-500 dark:bg-rose-400',
  },
  normal: {
    card: 'bg-blue-50/80 border-blue-300 dark:bg-blue-950/30 dark:border-blue-700/60',
    chip: 'bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-700/60',
    text: 'text-blue-700 dark:text-blue-300',
    dot: 'bg-blue-500 dark:bg-blue-400',
  },
  low: {
    card: 'bg-violet-50/80 border-violet-300 dark:bg-violet-950/30 dark:border-violet-700/60',
    chip: 'bg-violet-100 text-violet-800 border-violet-300 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/60',
    text: 'text-violet-700 dark:text-violet-300',
    dot: 'bg-violet-500 dark:bg-violet-400',
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
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(244,63,94,0.08),transparent_40%,transparent_60%,rgba(139,92,246,0.08))]"
      />

      <div className="relative flex flex-col gap-md">
        {/* 상단 라벨 */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold">
          <span className="inline-flex items-center gap-1.5 text-rose-700 dark:text-rose-300">
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-rose-500"
            />
            {content.priorityHighLabel}
          </span>
          <span className="inline-flex items-center gap-1.5 text-violet-700 dark:text-violet-300">
            {content.priorityLowLabel}
            <span
              aria-hidden="true"
              className="inline-block w-1.5 h-1.5 rounded-full bg-violet-500"
            />
          </span>
        </div>

        {/* 3개 카드 */}
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {content.priorityCards.map((card) => (
            <li key={card.id}>
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
      <header className="flex items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-8 h-8 rounded-md border',
            tint.chip,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            tint.chip,
          )}
        >
          <span aria-hidden="true" className={cn('inline-block w-1 h-1 rounded-full', tint.dot)} />
          {card.badge}
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
