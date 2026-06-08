import { cn } from '@it-tech-blog/utils';

import { ArrowRightIcon, LinkIcon } from '../icons';

/** Connection diagram 전용: 가운데 alternate 핵심 카드 + 위/아래 화살표 */
export const VerticalAlternateLink = ({ label }: { label: string }) => (
  <div className="flex flex-col items-center justify-center gap-1" aria-hidden="true">
    <ArrowRightIcon className="h-4 w-4 rotate-[-90deg] text-sky-600 dark:text-sky-300" />
    <span
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-full border-2 px-3 py-1.5',
        'bg-gradient-to-br from-sky-50 to-emerald-50',
        'dark:from-sky-950/40 dark:to-emerald-950/40',
        'border-sky-400 dark:border-sky-500/70',
        'shadow-[0_8px_22px_-10px_rgba(2,132,199,0.55)]',
      )}
    >
      <LinkIcon className="h-4 w-4 text-sky-700 dark:text-sky-300" />
      <code className="font-mono text-sm font-extrabold tracking-tight text-sky-800 dark:text-sky-100">
        {label}
      </code>
    </span>
    <ArrowRightIcon className="h-4 w-4 rotate-90 text-sky-600 dark:text-sky-300" />
  </div>
);
