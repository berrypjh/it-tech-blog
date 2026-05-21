import { cn } from '@it-tech-blog/utils';

import { ListOrderedIcon } from '../icons';

type Props = { highLabel: string; lowLabel: string; className?: string };

/**
 * Hero 카드 아래 실행 타이밍 레일.
 * 좌측 빨강(빠른 실행) → 중간 블루 → 우측 보라(늦은 실행) 그라데이션과 4개 노드.
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
            'bg-gradient-to-r from-rose-300/80 via-blue-300/80 to-violet-300/80',
            'dark:from-rose-700/60 dark:via-blue-700/60 dark:to-violet-700/60',
            'border border-[var(--term-border)]',
          )}
        />
        {/* 노드 4개 */}
        {[
          { left: '8%', color: 'bg-rose-500 dark:bg-rose-400' },
          { left: '36%', color: 'bg-blue-500 dark:bg-blue-400' },
          { left: '64%', color: 'bg-violet-500 dark:bg-violet-400' },
          { left: '92%', color: 'bg-violet-400 dark:bg-violet-300' },
        ].map((node, i) => (
          <span
            key={i}
            aria-hidden="true"
            className={cn(
              'absolute top-1/2 -translate-x-1/2 -translate-y-1/2',
              'inline-flex items-center justify-center w-4 h-4 rounded-full',
              'border-2 border-white dark:border-slate-900',
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
