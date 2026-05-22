import { cn } from '@it-tech-blog/utils';

import { ArrowDownIcon, ArrowRightIcon } from '../icons';

type Props = {
  label: string;
  /** desktop 방향. mobile 에서는 자동으로 아래 방향으로 전환. */
  direction?: 'horizontal' | 'vertical';
};

/**
 * Element → Fiber 확장 화살표. 보라색 그라데이션 라인 + 라벨.
 * direction='horizontal' 이면 lg 이상에서 가로, 그 이하에서는 세로.
 */
export const ExpansionArrow = ({ label, direction = 'horizontal' }: Props) => (
  <div
    className={cn(
      'flex items-center justify-center gap-2 shrink-0',
      direction === 'horizontal' ? 'flex-row lg:flex-col' : 'flex-col',
    )}
    aria-hidden="true"
  >
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'w-9 h-9 sm:w-10 sm:h-10',
        'bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white',
        'shadow-[0_6px_18px_-6px_rgba(139,92,246,0.55)]',
      )}
    >
      {direction === 'horizontal' ? (
        <span className="contents">
          <ArrowDownIcon className="h-4 w-4 lg:hidden" />
          <ArrowRightIcon className="h-4 w-4 hidden lg:block" />
        </span>
      ) : (
        <ArrowDownIcon className="h-4 w-4" />
      )}
    </span>
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-0.5',
        'border border-violet-300/70 bg-violet-50 text-violet-700',
        'dark:border-violet-700/60 dark:bg-violet-950/40 dark:text-violet-200',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
      )}
    >
      {label}
    </span>
  </div>
);
