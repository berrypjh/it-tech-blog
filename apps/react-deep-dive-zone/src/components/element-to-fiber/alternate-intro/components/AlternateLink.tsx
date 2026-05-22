import { cn } from '@it-tech-blog/utils';

import { ArrowLeftRightIcon, ArrowRightIcon, ArrowUpDownIcon, LinkIcon } from '../icons';

type Props = {
  forwardLabel: string;
  backwardLabel: string;
  /** lg에서 가로 화살표 (Hero) / 세로 화살표 (Connection diagram) */
  orientation?: 'horizontal' | 'vertical';
};

/**
 * 두 Fiber 사이의 양방향 alternate 연결 표시.
 * - 위쪽 라벨: alternate (primary blue)
 * - 아래쪽 라벨: 양방향 연결 (보조)
 */
export const AlternateLink = ({
  forwardLabel,
  backwardLabel,
  orientation = 'horizontal',
}: Props) => (
  <div className="flex flex-col items-center justify-center gap-2 min-w-0" aria-hidden="true">
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        'border-sky-300/80 bg-sky-50 text-sky-700',
        'dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
      )}
    >
      <LinkIcon className="h-3 w-3" />
      {forwardLabel}
    </span>
    <span
      className={cn(
        'inline-flex items-center justify-center rounded-full',
        'w-11 h-11 bg-gradient-to-br from-sky-500 to-emerald-500 text-white',
        'dark:from-sky-400 dark:to-emerald-400 dark:text-slate-950',
        'shadow-[0_10px_24px_-10px_rgba(2,132,199,0.55)]',
      )}
    >
      {orientation === 'horizontal' ? (
        <span className="contents">
          <ArrowUpDownIcon className="h-5 w-5 lg:hidden" />
          <ArrowLeftRightIcon className="h-5 w-5 hidden lg:block" />
        </span>
      ) : (
        <ArrowUpDownIcon className="h-5 w-5" />
      )}
    </span>
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5',
        'text-[10px] font-bold uppercase tracking-wider font-mono',
        'border-[var(--term-border)] bg-[var(--term-surface)] text-[var(--term-muted)]',
      )}
    >
      ↔ {backwardLabel}
    </span>
  </div>
);

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
