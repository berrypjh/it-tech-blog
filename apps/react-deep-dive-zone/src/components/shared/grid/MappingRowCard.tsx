import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

type Props = {
  /** 좌측 컬럼(과거/구현 등). */
  left: ReactNode;
  /** 우측 컬럼(현재/테스트 등). */
  right: ReactNode;
  /** 가운데 원형 배지 속 화살표 아이콘(들). `h-4 w-4` 권장. */
  arrow: ReactNode;
  /** md+ 그리드 열 템플릿. 기본 대칭 `[1fr_auto_1fr]`. */
  columns?: string;
};

/**
 * 양쪽 매핑 행 카드: 단일 box hover 카드 안에 [좌 · 가운데 화살표 배지 · 우] 내부 그리드.
 * 모바일은 세로 스택, md+는 가로. 좌/우 내용은 호출부가 주입한다.
 */
export const MappingRowCard = ({
  left,
  right,
  arrow,
  columns = 'md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]',
}: Props) => (
  <article className="group rounded-lg border border-[var(--term-border)] bg-[var(--term-bg)] p-md sm:p-lg transition-all hover:-translate-y-px hover:shadow-[0_2px_0_var(--term-border)]">
    <div className={cn('grid grid-cols-1 gap-sm md:gap-md items-center', columns)}>
      {left}
      <span
        aria-hidden="true"
        className="justify-self-start md:justify-self-center inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--term-surface)] border border-[var(--term-border)] text-[var(--term-accent)] shadow-[0_1px_0_var(--term-border)]"
      >
        {arrow}
      </span>
      {right}
    </div>
  </article>
);
