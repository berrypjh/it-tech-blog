import { cn } from '@it-tech-blog/utils';

import { SectionBadgeHeader } from '../../../shared/section';
import type { JsxIsNotHtmlContent, MisconceptionCard } from '../content';
import {
  ArrowDownIcon,
  BoxesIcon,
  CheckCircleIcon,
  HelpCircleIcon,
  MonitorIcon,
  NetworkIcon,
  XCircleIcon,
} from '../icons';
import { accentText, chromeChip, chromeHover } from '../toneLocal';

type Props = { content: JsxIsNotHtmlContent['misconception'] };

const sideIcon = {
  box: BoxesIcon,
  network: NetworkIcon,
  browser: MonitorIcon,
} as const;

export const MisconceptionCards = ({ content }: Props) => (
  <section
    id="misconception"
    aria-labelledby="heading-misconception"
    className="space-y-md scroll-mt-xl"
  >
    <SectionBadgeHeader
      id="misconception"
      number={content.badge}
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      icon={<HelpCircleIcon className="h-5 w-5" />}
    />

    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
      {content.cards.map((card) => (
        <li key={card.id} className="flex">
          <CardView card={card} />
        </li>
      ))}
    </ul>
  </section>
);

const CardView = ({ card }: { card: MisconceptionCard }) => {
  const SideIcon = sideIcon[card.iconName];
  return (
    <article
      className={cn(
        'group flex flex-1 flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
        chromeHover,
      )}
    >
      {/* 헤더: 주제 아이콘 + 오해 라벨 */}
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl',
            chromeChip,
            accentText(card.iconTone),
          )}
        >
          <SideIcon className="h-[18px] w-[18px]" />
        </span>
        <span className="text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {card.badgeWrong}
        </span>
      </header>

      {/* 오해: 취소선 처리한 잘못된 인식 */}
      <p className="flex items-start gap-2 text-sm font-medium leading-snug break-keep">
        <XCircleIcon className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300" />
        <span className="text-[var(--term-muted)] line-through decoration-rose-400/60">
          {card.wrong}
        </span>
      </p>

      {/* 연결 화살표 */}
      <ArrowDownIcon aria-hidden="true" className="h-4 w-4 text-[var(--term-border)]" />

      {/* 정확한 설명 */}
      <div className="flex flex-1 flex-col gap-2">
        <p className="flex items-start gap-2 text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          <CheckCircleIcon className={cn('mt-0.5 h-4 w-4 shrink-0', accentText(card.iconTone))} />
          <span>{card.right}</span>
        </p>
        <p className="pl-6 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {card.note}
        </p>
      </div>
    </article>
  );
};
