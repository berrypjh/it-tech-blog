import { cn } from '@it-tech-blog/utils';

import { ToneIconBox } from '../ToneIconBox';
import type { ToneKey } from '../tones';

import { ToneBadge } from './ToneBadge';
import { ToneCard } from './ToneCard';

type GridProps = {
  children: React.ReactNode;
  className?: string;
};

/** 톤 카드 패턴 공통 그리드. 1 → 2 → 4열 반응형. 자식은 <ToneCardItem>. */
export const ToneCardGrid = ({ children, className }: GridProps) => (
  <ul className={cn('grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-md', className)}>
    {children}
  </ul>
);

type ItemProps = {
  tone: ToneKey;
  /** 상단 아이콘 박스에 담길 아이콘 */
  icon: React.ReactNode;
  /** 하단 배지 텍스트. 없으면 배지 푸터 자체를 생략. */
  badge?: React.ReactNode;
  /** 아이콘 우측 보조 슬롯(예: 번호). 없으면 생략. */
  topRight?: React.ReactNode;
  /** 카드 본문. 섹션마다 자유롭게 구성. */
  children: React.ReactNode;
  className?: string;
};

/**
 * 톤 카드 한 장: 상단 아이콘(+보조) · 본문 슬롯 · 하단 배지.
 * <ToneCardGrid>의 자식으로 사용하며 key는 호출부에서 부여한다.
 */
export const ToneCardItem = ({ tone, icon, badge, topRight, children, className }: ItemProps) => (
  <li>
    <ToneCard tone={tone} className={className}>
      <div className="flex items-start justify-between">
        <ToneIconBox tone={tone}>{icon}</ToneIconBox>
        {topRight != null && (
          <span className="text-xxsm tabular-nums font-bold text-[var(--term-muted)]">
            {topRight}
          </span>
        )}
      </div>

      {children}

      {badge != null && (
        <div className="mt-auto pt-sm border-t border-dashed border-[var(--term-border)]">
          <ToneBadge tone={tone}>{badge}</ToneBadge>
        </div>
      )}
    </ToneCard>
  </li>
);
