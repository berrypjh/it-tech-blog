import type { PointerKind } from '../content';

export const pointerChip: Record<PointerKind, string> = {
  child:
    'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  sibling:
    'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
  return:
    'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
};

export const pointerText: Record<PointerKind, string> = {
  child: 'text-emerald-700 dark:text-emerald-300',
  sibling: 'text-violet-700 dark:text-violet-300',
  return: 'text-sky-700 dark:text-sky-300',
};

export const pointerLine: Record<PointerKind, string> = {
  child: 'border-emerald-500/80 dark:border-emerald-400/70',
  sibling: 'border-violet-500/80 dark:border-violet-400/70',
  return: 'border-sky-500/80 dark:border-sky-400/70',
};

export const pointerLineStyle: Record<PointerKind, 'solid' | 'dashed'> = {
  child: 'solid',
  sibling: 'solid',
  return: 'dashed',
};

export const pointerCardBorder: Record<PointerKind, string> = {
  child:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  sibling:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  return:
    'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
};

export const pointerIconBg: Record<PointerKind, string> = {
  child: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  sibling: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  return: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
};
