import type { AxisAccent } from '../priority-axes/content';

export const axisCardBorder: Record<AxisAccent, string> = {
  blue: 'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
  teal: 'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-teal-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
  violet:
    'border-violet-300/80 bg-gradient-to-br from-violet-50/80 via-white to-violet-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
};

export const axisIconBox: Record<AxisAccent, string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
};

export const axisNumberBadge: Record<AxisAccent, string> = {
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
};

export const axisTextStrong: Record<AxisAccent, string> = {
  blue: 'text-blue-700 dark:text-blue-300',
  teal: 'text-teal-700 dark:text-teal-300',
  violet: 'text-violet-700 dark:text-violet-300',
};

export const axisPill: Record<AxisAccent, string> = {
  blue: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
};

export const axisCoreBox: Record<AxisAccent, string> = {
  blue: 'border-blue-200/80 bg-blue-50/60 text-blue-900 dark:border-blue-800/60 dark:bg-blue-950/30 dark:text-blue-100',
  teal: 'border-teal-200/80 bg-teal-50/60 text-teal-900 dark:border-teal-800/60 dark:bg-teal-950/30 dark:text-teal-100',
  violet:
    'border-violet-200/80 bg-violet-50/60 text-violet-900 dark:border-violet-800/60 dark:bg-violet-950/30 dark:text-violet-100',
};

export const axisRowTint: Record<AxisAccent, string> = {
  blue: 'bg-blue-50/40 dark:bg-blue-950/20',
  teal: 'bg-teal-50/40 dark:bg-teal-950/20',
  violet: 'bg-violet-50/40 dark:bg-violet-950/20',
};
