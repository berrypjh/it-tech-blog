import { cn } from '@it-tech-blog/utils';

import { type ToneKey, toneTokens } from './tones';

export type FeatureCardItem = {
  id: string;
  title: string;
  body: string;
  tone: ToneKey;
  icon: React.ReactNode;
};

type Props = { items: FeatureCardItem[]; className?: string };

/** 원형 아이콘 + 제목 + 본문 카드를 3열 그리드로 보여주는 공통 특징/이점 카드. */
export const FeatureCardGrid = ({ items, className }: Props) => (
  <ul
    className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch', className)}
  >
    {items.map((item) => (
      <li key={item.id} className="flex min-w-0">
        <FeatureCard item={item} />
      </li>
    ))}
  </ul>
);

const FeatureCard = ({ item }: { item: FeatureCardItem }) => {
  const t = toneTokens[item.tone];
  return (
    <article
      className={cn(
        'group flex min-w-0 flex-1 flex-col gap-md rounded-2xl border p-md',
        'bg-[var(--term-bg)] shadow-[0_2px_0_var(--term-border)]',
        'border-[var(--term-border)] transition-all hover:-translate-y-0.5',
        t.borderHover,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          'inline-flex items-center justify-center w-14 h-14 rounded-full border',
          t.chip,
        )}
      >
        {item.icon}
      </span>
      <h3 className={cn('text-sm font-bold tracking-tight break-keep', t.text)}>{item.title}</h3>
      <p className="text-xsm leading-relaxed text-[var(--term-muted)] break-keep">{item.body}</p>
    </article>
  );
};
