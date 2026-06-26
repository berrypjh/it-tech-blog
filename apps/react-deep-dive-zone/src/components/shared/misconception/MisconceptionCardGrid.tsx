import { cn } from '@it-tech-blog/utils';

import { ArrowDown, CheckCircle2, XCircle } from 'lucide-react';
import type { ComponentType } from 'react';

/**
 * 오해 카드 한 장의 데이터.
 * tone 자체가 아니라 폴더 로컬 톤 헬퍼로 해석한 `accentClassName`을 받아,
 * 마크업은 공유하되 색 시스템은 각 폴더 컨벤션을 따른다.
 */
export type MisconceptionItem = {
  id: string;
  /** 주제 아이콘 컴포넌트(폴더 iconByName 맵에서 해석) */
  icon: ComponentType<{ className?: string }>;
  /** 주제 톤 텍스트 액센트 클래스(폴더 로컬 톤 헬퍼에서 해석) */
  accentClassName: string;
  /** 오해 라벨(작은 대문자) */
  badgeWrong: string;
  /** 잘못된 인식(취소선) */
  wrong: string;
  /** 정확한 설명 */
  right: string;
  /** 보충 설명 */
  note: string;
};

type Props = { items: MisconceptionItem[] };

/** 오해 → 정정 카드 그리드 (1→2→3열). 링크·핸들러 없는 컨텐츠 카드(box). */
export const MisconceptionCardGrid = ({ items }: Props) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-md items-stretch">
    {items.map((item) => (
      <li key={item.id} className="flex">
        <MisconceptionCard item={item} />
      </li>
    ))}
  </ul>
);

const MisconceptionCard = ({ item }: { item: MisconceptionItem }) => {
  const { icon: Icon } = item;
  return (
    <article
      className={cn(
        'flex flex-1 flex-col gap-md rounded-2xl border bg-[var(--term-bg)] p-md',
        'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
        'transition-all hover:-translate-y-0.5',
      )}
    >
      {/* 헤더: 주제 아이콘 + 오해 라벨 */}
      <header className="flex items-center gap-sm">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex h-9 w-9 items-center justify-center rounded-xl',
            'bg-[var(--term-surface)] border border-[var(--term-border)]',
            item.accentClassName,
          )}
        >
          <Icon className="h-[18px] w-[18px]" />
        </span>
        <span className="text-xsm font-bold uppercase tracking-wider text-[var(--term-muted)]">
          {item.badgeWrong}
        </span>
      </header>

      {/* 오해: 취소선 처리한 잘못된 인식 */}
      <p className="flex items-start gap-2 text-sm font-medium leading-snug break-keep">
        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-300" />
        <span className="text-[var(--term-muted)] line-through decoration-rose-600/50 dark:decoration-rose-300/50">
          {item.wrong}
        </span>
      </p>

      {/* 연결 화살표 */}
      <ArrowDown aria-hidden="true" className="h-4 w-4 text-[var(--term-border)]" />

      {/* 정확한 설명 */}
      <div className="flex flex-1 flex-col gap-2">
        <p className="flex items-start gap-2 text-sm font-bold leading-snug text-[var(--term-fg)] break-keep">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--term-accent)]" />
          <span>{item.right}</span>
        </p>
        <p className="pl-6 text-xsm leading-relaxed text-[var(--term-muted)] break-keep">
          {item.note}
        </p>
      </div>
    </article>
  );
};
