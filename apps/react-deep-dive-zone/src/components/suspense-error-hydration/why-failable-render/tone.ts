import type { BranchKind, Tone } from './content';

export const branchAccent: Record<
  BranchKind,
  { border: string; bg: string; text: string; chip: string; dot: string; ring: string }
> = {
  suspense: {
    border: 'border-blue-300/80 dark:border-blue-700/70',
    bg: 'bg-blue-50/70 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    ring: 'ring-blue-400/60 dark:ring-blue-500/50',
  },
  error: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    dot: 'bg-rose-500 dark:bg-rose-400',
    ring: 'ring-rose-400/60 dark:ring-rose-500/50',
  },
  hydration: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    ring: 'ring-emerald-400/60 dark:ring-emerald-500/50',
  },
};

export const toneChip: Record<Tone, string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
  red: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  green:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  purple:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
};

export const toneNumberBadge: Record<Tone, string> = {
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  red: 'bg-rose-600 text-white dark:bg-rose-500',
  green: 'bg-emerald-600 text-white dark:bg-emerald-500',
  purple: 'bg-violet-600 text-white dark:bg-violet-500',
  cyan: 'bg-cyan-600 text-white dark:bg-cyan-500',
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500',
  rose: 'bg-rose-600 text-white dark:bg-rose-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
};

export const toneCardSoft: Record<Tone, string> = {
  blue: 'border-blue-200/70 bg-blue-50/60 dark:border-blue-800/60 dark:bg-blue-950/30',
  red: 'border-rose-200/70 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30',
  green: 'border-emerald-200/70 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
  purple: 'border-violet-200/70 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
  cyan: 'border-cyan-200/70 bg-cyan-50/60 dark:border-cyan-800/60 dark:bg-cyan-950/30',
  emerald:
    'border-emerald-200/70 bg-emerald-50/60 dark:border-emerald-800/60 dark:bg-emerald-950/30',
  rose: 'border-rose-200/70 bg-rose-50/60 dark:border-rose-800/60 dark:bg-rose-950/30',
  violet: 'border-violet-200/70 bg-violet-50/60 dark:border-violet-800/60 dark:bg-violet-950/30',
};
