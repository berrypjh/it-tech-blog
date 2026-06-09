import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/SectionBadgeHeader';
import { toneTokens } from '../../../shared/tones';
import type { Misconception, ReactElementKeySeparatedContent } from '../content';
import {
  ArrowDownIcon,
  CheckCircleIcon,
  HelpCircleIcon,
  MessageIcon,
  ShuffleIcon,
  XCircleIcon,
} from '../icons';

type Props = { content: ReactElementKeySeparatedContent['misconceptions'] };

const iconMap = {
  message: MessageIcon,
  shuffle: ShuffleIcon,
} as const;

export const KeyMisconceptions = ({ content }: Props) => (
  <section
    id="misconceptions"
    aria-labelledby="heading-misconceptions"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconceptions"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} wrongLabel={content.wrongLabel} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card, wrongLabel }: { card: Misconception; wrongLabel: string }) => {
  const t = toneTokens[card.tone];
  const SideIcon = iconMap[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5 hover:border-[var(--term-muted)]',
      )}
    >
      {/* 헤더: 주제 아이콘 + 오해 라벨 */}
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            t.chip,
          )}
        >
          <SideIcon className="h-[18px] w-[18px]" />
        </span>
        <span className="text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {wrongLabel} {card.index}
        </span>
      </header>

      {/* 오해: 취소선 처리한 잘못된 인식 */}
      <p className="flex items-start gap-2 text-sm font-medium leading-snug break-keep">
        <XCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-500 dark:text-rose-400" />
        <span className="text-[var(--term-muted)] line-through decoration-rose-400/60">
          {card.wrong}
        </span>
      </p>

      {/* 연결 화살표 */}
      <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-border)]" />

      {/* 정확한 설명 */}
      <div className="flex flex-1 flex-col gap-2">
        <p className="flex items-start gap-2 text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          <CheckCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500 dark:text-emerald-400" />
          <span>{card.correct}</span>
        </p>
        <ul className="flex flex-col gap-1 pl-6">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-1.5">
              <span
                aria-hidden="true"
                className={cn('mt-1.5 h-1 w-1 shrink-0 rounded-full', t.dot)}
              />
              <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
                {bullet}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};
