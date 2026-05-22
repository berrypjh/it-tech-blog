import { cn } from '@it-tech-blog/utils';

import { TagIcon } from '../icons';

type Props = {
  code: string;
  type: string;
};

/**
 * `<div /> / type: 'div'` 형태의 DOM 태그 카드. green/mint 톤.
 */
export const DomTagCard = ({ code, type }: Props) => (
  <article
    className={cn(
      'flex items-center gap-sm rounded-xl border-2 p-sm pl-md',
      'bg-white shadow-[0_2px_0_var(--term-border)]',
      'border-emerald-300/80 dark:border-emerald-700/70',
      'dark:bg-[var(--term-bg)]',
      'transition-all hover:-translate-y-0.5 hover:border-emerald-400 dark:hover:border-emerald-500/70',
    )}
  >
    <span
      aria-hidden="true"
      className={cn(
        'inline-flex items-center justify-center w-9 h-9 rounded-lg border shrink-0',
        'border-emerald-300/80 bg-emerald-50 text-emerald-700',
        'dark:border-emerald-800/70 dark:bg-emerald-950/60 dark:text-emerald-200',
      )}
    >
      <TagIcon className="h-4 w-4" />
    </span>
    <div className="flex flex-col gap-0.5 min-w-0">
      <code className="font-mono text-sm font-bold text-emerald-700 dark:text-emerald-300 break-all">
        {code}
      </code>
      <code className="font-mono text-[11px] text-[var(--term-muted)] break-all">{type}</code>
    </div>
  </article>
);
