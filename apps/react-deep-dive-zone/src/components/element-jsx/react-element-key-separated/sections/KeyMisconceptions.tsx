import { cx } from '@berrypjh/react-ui';
import {
  ArrowDown,
  CheckCircle2,
  HelpCircle,
  MessageSquareWarning,
  Shuffle,
  XCircle,
} from 'lucide-react';

import { SectionBadgeHeader } from '../../../shared/section';
import { toneTokens } from '../../../shared/tones';
import type { Misconception, ReactElementKeySeparatedContent } from '../content';

type Props = { content: ReactElementKeySeparatedContent['misconceptions'] };

const iconMap = {
  message: MessageSquareWarning,
  shuffle: Shuffle,
} as const;

export const KeyMisconceptions = ({ content }: Props) => (
  <section
    id="misconceptions"
    aria-labelledby="heading-misconceptions"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      descriptionFullWidth
      id="misconceptions"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircle className="h-5 w-5" aria-hidden="true" />}
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
  const SideIcon = iconMap[card.iconName];
  return (
    <article
      className={cx(
        'group flex flex-1 flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      {/* 헤더: 주제 아이콘 + 오해 라벨 */}
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cx(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl border',
            toneTokens[card.tone].chip,
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
        <XCircle
          className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300"
          aria-hidden="true"
        />
        <span className="text-[var(--term-muted)] line-through decoration-rose-400/60">
          {card.wrong}
        </span>
      </p>

      {/* 연결 화살표 */}
      <ArrowDown aria-hidden="true" className="h-4 w-4 text-[var(--term-border)]" />

      {/* 정확한 설명 */}
      <div className="flex flex-1 flex-col gap-2">
        <p className="flex items-start gap-2 text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          <CheckCircle2
            className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]"
            aria-hidden="true"
          />
          <span>{card.correct}</span>
        </p>
        <ul className="flex flex-col gap-1 pl-6">
          {card.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-1.5">
              <span
                aria-hidden="true"
                className={cx('mt-1.5 h-1 w-1 shrink-0 rounded-full', toneTokens[card.tone].dot)}
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
