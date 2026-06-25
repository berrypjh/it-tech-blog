import { cn } from '@it-tech-blog/utils';

import type { ComponentProps } from 'react';

import { ToneDetailPanel } from './ToneDetailPanel';

type Props = ComponentProps<typeof ToneDetailPanel> & { className?: string };

/**
 * 1:1 비교 그리드용 톤 상세 카드.
 * surface 카드 셸(border + lift hover) 안에 <ToneDetailPanel>을 그대로 렌더한다.
 */
export const ToneDetailCard = ({ className, ...panel }: Props) => (
  <article
    className={cn(
      'flex flex-col gap-md rounded-xl border p-md sm:p-lg transition-all hover:-translate-y-0.5',
      'shadow-[0_2px_0_var(--term-border)]',
      'bg-[var(--term-surface)] border-[var(--term-border)]',
      className,
    )}
  >
    <ToneDetailPanel {...panel} />
  </article>
);
