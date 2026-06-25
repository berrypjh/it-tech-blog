import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from '../../../shared/tones';
import type { HeroPriorityCard, PriorityKey, SchedulerContent } from '../content';
import { iconByName } from '../icons';

import { PriorityRail } from './PriorityRail';

type Props = { content: SchedulerContent['hero'] };

/** priority → 표준 ToneKey 매핑. 실제 색 클래스는 toneTokens에서만 합성한다. */
export const priorityTone: Record<PriorityKey, ToneKey> = {
  immediate: 'amber',
  normal: 'sky',
  low: 'violet',
};

/** 중립 칩 크롬(surface bg + border). 색은 toneTokens[t].text로 합성. */
const chipChrome = 'bg-[var(--term-surface)] border border-[var(--term-border)]';

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
          <span className={cn('inline-flex items-center gap-1.5', toneTokens.sky.text)}>
            {content.priorityLowLabel}
            <span
              aria-hidden="true"
              className={cn('inline-block w-1.5 h-1.5 rounded-full', toneTokens.sky.dot)}
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
  const t = toneTokens[priorityTone[card.id]];
  const Icon = iconByName[card.icon];

  return (
    <article
      className={cn(
        'flex flex-col gap-2 rounded-xl border p-3',
        'border-[var(--term-border)] bg-[var(--term-surface)]',
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <header className="flex flex-wrap items-center justify-between gap-2">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex shrink-0 items-center justify-center w-8 h-8 rounded-md',
            chipChrome,
            t.text,
          )}
        >
          <Icon className="h-4 w-4" />
        </span>
        <span
          className={cn(
            'inline-flex min-w-0 items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider',
            chipChrome,
            t.text,
          )}
        >
          <span
            aria-hidden="true"
            className={cn('inline-block shrink-0 w-1 h-1 rounded-full', t.dot)}
          />
          <span className="truncate">{card.badge}</span>
        </span>
      </header>
      <h3 className={cn('text-xsm font-bold tracking-tight break-keep', t.text)}>{card.title}</h3>
      <p className="text-[11px] leading-snug text-[var(--term-muted)] break-keep">
        {card.description}
      </p>
    </article>
  );
};
