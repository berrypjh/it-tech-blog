export type PromiseState = 'pending' | 'fulfilled' | 'rejected';

type Accent = {
  border: string;
  bg: string;
  text: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const stateAccent: Record<PromiseState, Accent> = {
  pending: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
  },
  fulfilled: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
  rejected: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    dot: 'bg-rose-500 dark:bg-rose-400',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
};

export const sectionNumberBadge =
  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
