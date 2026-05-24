import type { PriorityKey } from './content';

export const priorityCard: Record<PriorityKey, string> = {
  discrete: 'border-teal-300/80 bg-teal-50/70 dark:border-teal-700/70 dark:bg-teal-950/30',
  continuous:
    'border-violet-300/80 bg-violet-50/70 dark:border-violet-700/70 dark:bg-violet-950/30',
  default: 'border-amber-300/80 bg-amber-50/70 dark:border-amber-700/70 dark:bg-amber-950/30',
};

export const priorityBadge: Record<PriorityKey, string> = {
  discrete:
    'border-teal-300/80 bg-teal-100 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/60 dark:text-teal-200',
  continuous:
    'border-violet-300/80 bg-violet-100 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/60 dark:text-violet-200',
  default:
    'border-amber-300/80 bg-amber-100 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/60 dark:text-amber-200',
};

export const priorityIconBox: Record<PriorityKey, string> = {
  discrete: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
  continuous: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
  default: 'bg-amber-500 text-white dark:bg-amber-400 dark:text-slate-900',
};

export const priorityText: Record<PriorityKey, string> = {
  discrete: 'text-teal-700 dark:text-teal-300',
  continuous: 'text-violet-700 dark:text-violet-300',
  default: 'text-amber-700 dark:text-amber-300',
};

export const priorityBorder: Record<PriorityKey, string> = {
  discrete: 'border-teal-300/80 dark:border-teal-700/70',
  continuous: 'border-violet-300/80 dark:border-violet-700/70',
  default: 'border-amber-300/80 dark:border-amber-700/70',
};
