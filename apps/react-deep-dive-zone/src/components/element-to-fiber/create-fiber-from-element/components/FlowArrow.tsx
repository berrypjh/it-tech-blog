import { cn } from '@it-tech-blog/utils';

import { ArrowDownIcon, ArrowRightIcon } from '../icons';

type Props = {
  className?: string;
};

/**
 * 카드 사이의 화살표. lg 이상에서는 오른쪽(→), 모바일에서는 아래(↓).
 * Primary blue.
 */
export const FlowArrow = ({ className }: Props) => (
  <div
    aria-hidden="true"
    className={cn('flex items-center justify-center shrink-0 py-1 @2xl:py-0', className)}
  >
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'w-9 h-9 bg-sky-600 text-white dark:bg-sky-500 dark:text-slate-950',
        'shadow-[0_4px_10px_-4px_rgba(2,132,199,0.55)]',
      )}
    >
      <span className="contents">
        <ArrowDownIcon className="h-4 w-4 @2xl:hidden" />
        <ArrowRightIcon className="h-4 w-4 hidden @2xl:block" />
      </span>
    </span>
  </div>
);
