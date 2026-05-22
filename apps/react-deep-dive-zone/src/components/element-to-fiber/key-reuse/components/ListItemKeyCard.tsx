import { cn } from '@it-tech-blog/utils';

import type { ListItem } from '../content';
import { KeyRoundIcon } from '../icons';

type Tone = ListItem['tone'];

const toneTokens = {
  emerald: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    avatar: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-950',
    chip: 'border-emerald-300/80 bg-emerald-50 text-emerald-700 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
    avatarText: 'text-emerald-700 dark:text-emerald-200',
  },
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    avatar: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-950',
    chip: 'border-sky-300/80 bg-sky-50 text-sky-700 dark:border-sky-700/70 dark:bg-sky-950/40 dark:text-sky-200',
    avatarText: 'text-sky-700 dark:text-sky-200',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    avatar: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-950',
    chip: 'border-violet-300/80 bg-violet-50 text-violet-700 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
    avatarText: 'text-violet-700 dark:text-violet-200',
  },
} as const;

type Props = {
  label: string;
  keyValue: string;
  tone: Tone;
};

/**
 * Hero/시각 시뮬레이션용 작은 목록 항목 카드.
 * 좌측: 라벨 원형 avatar, 우측: key=N chip
 */
export const ListItemKeyCard = ({ label, keyValue, tone }: Props) => {
  const t = toneTokens[tone];
  return (
    <article
      className={cn(
        'flex items-center justify-between gap-sm rounded-xl border-2 p-sm pl-md min-w-0',
        'bg-white dark:bg-[var(--term-bg)]',
        t.border,
        'shadow-[0_2px_0_var(--term-border)] transition-all hover:-translate-y-0.5',
      )}
    >
      <div className="flex items-center gap-sm min-w-0">
        <span
          aria-hidden="true"
          className={cn(
            'inline-flex items-center justify-center w-9 h-9 rounded-full shrink-0',
            'font-mono text-sm font-extrabold',
            t.avatar,
          )}
        >
          {label}
        </span>
        <code className={cn('font-mono text-sm font-extrabold', t.avatarText)}>{label}</code>
      </div>
      <span
        className={cn(
          'inline-flex items-center gap-1 rounded-md border px-2 py-0.5',
          'font-mono text-[11px] font-bold',
          t.chip,
        )}
      >
        <KeyRoundIcon className="h-3 w-3" aria-hidden="true" />
        {keyValue}
      </span>
    </article>
  );
};
