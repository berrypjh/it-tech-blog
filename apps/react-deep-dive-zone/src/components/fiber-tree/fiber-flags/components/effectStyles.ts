import type { EffectKind } from '../content';

export const effectBadge: Record<EffectKind, string> = {
  placement:
    'bg-emerald-50 text-emerald-700 border-emerald-300/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
  update:
    'bg-sky-50 text-sky-700 border-sky-300/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
  childDeletion:
    'bg-rose-50 text-rose-700 border-rose-300/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
};

export const effectText: Record<EffectKind, string> = {
  placement: 'text-emerald-700 dark:text-emerald-300',
  update: 'text-sky-700 dark:text-sky-300',
  childDeletion: 'text-rose-700 dark:text-rose-300',
};

export const effectNodeBorder: Record<EffectKind, string> = {
  placement: 'border-emerald-300/80 ring-2 ring-emerald-200/60',
  update: 'border-sky-300/80 ring-2 ring-sky-200/60',
  childDeletion: 'border-rose-300/80 border-dashed ring-2 ring-rose-200/60',
};

export const effectIconWrap: Record<EffectKind, string> = {
  placement: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  update: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  childDeletion: 'bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-200',
};
