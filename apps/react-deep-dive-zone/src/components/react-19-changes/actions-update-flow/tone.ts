export type StateKey = 'pending' | 'error' | 'form' | 'optimistic';

export type StateTone = {
  text: string;
  border: string;
  borderStrong: string;
  bg: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const stateTone: Record<StateKey, StateTone> = {
  pending: {
    text: 'text-teal-700 dark:text-teal-200',
    border: 'border-teal-200/80 dark:border-teal-800/70',
    borderStrong: 'border-teal-400/80 dark:border-teal-500/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    dot: 'bg-teal-500 dark:bg-teal-400',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  error: {
    text: 'text-violet-700 dark:text-violet-200',
    border: 'border-violet-200/80 dark:border-violet-800/70',
    borderStrong: 'border-violet-400/80 dark:border-violet-500/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
  },
  form: {
    text: 'text-blue-700 dark:text-blue-200',
    border: 'border-blue-200/80 dark:border-blue-800/70',
    borderStrong: 'border-blue-400/80 dark:border-blue-500/70',
    bg: 'bg-blue-50/70 dark:bg-blue-950/30',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    solidBg: 'bg-blue-600 dark:bg-blue-500',
  },
  optimistic: {
    text: 'text-emerald-700 dark:text-emerald-200',
    border: 'border-emerald-200/80 dark:border-emerald-800/70',
    borderStrong: 'border-emerald-400/80 dark:border-emerald-500/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
};

/** 실패/문제 카드 톤 (Before 섹션, 실패 시나리오) */
export const danger = {
  text: 'text-rose-700 dark:text-rose-200',
  border: 'border-rose-200/80 dark:border-rose-800/70',
  borderStrong: 'border-rose-400/80 dark:border-rose-500/70',
  bg: 'bg-rose-50/70 dark:bg-rose-950/30',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  iconChip:
    'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  dot: 'bg-rose-500 dark:bg-rose-400',
  solidBg: 'bg-rose-600 dark:bg-rose-500',
};

export const cardSurface =
  'rounded-2xl border-2 border-slate-200 bg-white shadow-[0_2px_0_var(--term-border)] dark:border-slate-700 dark:bg-[var(--term-bg)]';
