import type { GroupTone } from '../content';

export const groupBorder: Record<GroupTone, string> = {
  sky: 'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
  rose: 'border-rose-200/80 dark:border-rose-800/60 hover:border-rose-400/70 dark:hover:border-rose-500/60',
  teal: 'border-teal-200/80 dark:border-teal-800/60 hover:border-teal-400/70 dark:hover:border-teal-500/60',
};

export const groupIconBg: Record<GroupTone, string> = {
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
  rose: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
  teal: 'bg-teal-100 text-teal-700 dark:bg-teal-950/60 dark:text-teal-200',
};

export const groupTitle: Record<GroupTone, string> = {
  sky: 'text-sky-900 dark:text-sky-100',
  emerald: 'text-emerald-900 dark:text-emerald-100',
  violet: 'text-violet-900 dark:text-violet-100',
  amber: 'text-amber-900 dark:text-amber-100',
  rose: 'text-rose-900 dark:text-rose-100',
  teal: 'text-teal-900 dark:text-teal-100',
};

export const groupFieldChip: Record<GroupTone, string> = {
  sky: 'bg-sky-50 text-sky-800 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-200 dark:border-sky-800/60',
  emerald:
    'bg-emerald-50 text-emerald-800 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-200 dark:border-emerald-800/60',
  violet:
    'bg-violet-50 text-violet-800 border-violet-200/80 dark:bg-violet-950/40 dark:text-violet-200 dark:border-violet-800/60',
  amber:
    'bg-amber-50 text-amber-800 border-amber-200/80 dark:bg-amber-950/40 dark:text-amber-200 dark:border-amber-800/60',
  rose: 'bg-rose-50 text-rose-800 border-rose-200/80 dark:bg-rose-950/40 dark:text-rose-200 dark:border-rose-800/60',
  teal: 'bg-teal-50 text-teal-800 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-200 dark:border-teal-800/60',
};
