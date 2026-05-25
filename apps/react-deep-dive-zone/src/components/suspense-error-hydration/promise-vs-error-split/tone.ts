export type Path = 'thenable' | 'error';

type Accent = {
  border: string;
  bg: string;
  text: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
  connector: string;
};

export const pathAccent: Record<Path, Accent> = {
  thenable: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
    connector: 'bg-emerald-400 dark:bg-emerald-500',
  },
  error: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    dot: 'bg-rose-500 dark:bg-rose-400',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
    connector: 'bg-rose-400 dark:bg-rose-500',
  },
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';

export const sectionNumberBadgeSmall =
  'inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-blue-600 text-white font-mono text-[11px] font-bold tabular-nums dark:bg-blue-500';
