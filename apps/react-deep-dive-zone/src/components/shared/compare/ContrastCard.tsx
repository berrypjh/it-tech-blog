import { cn } from '@it-tech-blog/utils';

import type { ReactNode } from 'react';

import { ArrowDivider } from './ArrowDivider';

type Props = {
  /** 좌측 패널(문제/오해). */
  left: ReactNode;
  /** 우측 패널(해결/정확). */
  right: ReactNode;
  /** 하단 전체 폭 영역(예시 등). 없으면 생략. */
  footer?: ReactNode;
};

/**
 * 1:1 대비 카드 셸.
 * rounded-2xl 카드 + `[1fr_auto_1fr]` 분할 그리드(좌 · 가운데 ArrowDivider · 우) + 선택적 하단 footer.
 * 패널 내용은 호출부가 left/right로 주입한다.
 */
export const ContrastCard = ({ left, right, footer }: Props) => (
  <div
    className={cn(
      'relative overflow-hidden rounded-2xl border bg-[var(--term-bg)]',
      'border-[var(--term-border)] shadow-[0_2px_0_var(--term-border)]',
    )}
  >
    <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] gap-0 items-stretch divide-y divide-dashed divide-[var(--term-border)] lg:divide-y-0">
      {left}
      <ArrowDivider />
      {right}
    </div>

    {footer}
  </div>
);
