import type { BranchKey } from '../content';

export type BranchTokens = {
  /** badge / accent text color */
  text: string;
  /** background tint */
  surface: string;
  /** border */
  border: string;
  /** hover border */
  borderHover: string;
  /** small dot / accent bar */
  dot: string;
  /** chip background (label) */
  chip: string;
  /** label text shown above each branch */
  label: string;
};

export const branchTokens: Record<BranchKey, BranchTokens> = {
  string: {
    text: 'text-emerald-700 dark:text-emerald-300',
    surface: 'bg-emerald-50/60 dark:bg-emerald-950/30',
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    borderHover: 'hover:border-emerald-400 dark:hover:border-emerald-500/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    chip: 'bg-emerald-100 text-emerald-800 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-700/70',
    label: 'string branch',
  },
  function: {
    text: 'text-sky-700 dark:text-sky-300',
    surface: 'bg-sky-50/60 dark:bg-sky-950/30',
    border: 'border-sky-300/80 dark:border-sky-700/70',
    borderHover: 'hover:border-sky-400 dark:hover:border-sky-500/70',
    dot: 'bg-sky-500 dark:bg-sky-400',
    chip: 'bg-sky-100 text-sky-800 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-700/70',
    label: 'function branch',
  },
  fragment: {
    text: 'text-violet-700 dark:text-violet-300',
    surface: 'bg-violet-50/60 dark:bg-violet-950/30',
    border: 'border-violet-300/80 dark:border-violet-700/70',
    borderHover: 'hover:border-violet-400 dark:hover:border-violet-500/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    chip: 'bg-violet-100 text-violet-800 border-violet-300/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-700/70',
    label: 'symbol branch',
  },
  mode: {
    text: 'text-cyan-700 dark:text-cyan-300',
    surface: 'bg-cyan-50/60 dark:bg-cyan-950/30',
    border: 'border-cyan-300/80 dark:border-cyan-700/70',
    borderHover: 'hover:border-cyan-400 dark:hover:border-cyan-500/70',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    chip: 'bg-cyan-100 text-cyan-800 border-cyan-300/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-700/70',
    label: 'symbol branch',
  },
};
