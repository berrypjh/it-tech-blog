export type Phase = 'pending' | 'capture' | 'retry';

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

export const phaseAccent: Record<Phase, Accent> = {
  pending: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
    connector: 'bg-violet-400 dark:bg-violet-500',
  },
  capture: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    dot: 'bg-teal-500 dark:bg-teal-400',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
    connector: 'bg-teal-400 dark:bg-teal-500',
  },
  retry: {
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
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
