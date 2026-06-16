import { cn } from '@it-tech-blog/utils';

import { ListOrderedIcon } from '../icons';

type Props = { highLabel: string; lowLabel: string; className?: string };

/**
 * Hero 카드 아래 실행 타이밍 레일.
 * 좌측 빠른 실행 → 우측 늦은 실행. 중립 레일 위 4개 노드(amber/sky/violet 소프트).
 */
export const PriorityRail = ({ highLabel, lowLabel, className }: Props) => {
  return (
    <div className={cn('flex flex-col gap-2', className)}>
      {/* 레일 본체 */}
      <div className="relative h-6">
        <div
          aria-hidden="true"
          className={cn(
            'absolute inset-0 rounded-full',
            'bg-[var(--term-surface)]',
            'border border-[var(--term-border)]',
          )}
        />
        {/* 노드 4개 */}
        {[
          { left: '8%', color: 'bg-[var(--term-accent)]' },
          { left: '36%', color: 'bg-sky-400 dark:bg-sky-500' },
          { left: '64%', color: 'bg-violet-400 dark:bg-violet-500' },
          { left: '92%', color: 'bg-violet-400 dark:bg-violet-500' },
        ].map((node, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={cn(
              'absolute top-1/2 -translate-x-1/2 -translate-y-1/2',
              'inline-flex items-center justify-center w-4 h-4 rounded-full',
              'border-2 border-[var(--term-bg)]',
              'shadow-[0_1px_0_var(--term-border)]',
              node.color,
            )}
            style={{ left: node.left }}
          />
        ))}
      </div>

      {/* 라벨 */}
      <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-[var(--term-muted)] font-bold">
        <span className="inline-flex items-center gap-1">
          <ListOrderedIcon className="h-3 w-3" aria-hidden="true" />
          {highLabel}
        </span>
        <span>{lowLabel}</span>
      </div>
    </div>
  );
};
