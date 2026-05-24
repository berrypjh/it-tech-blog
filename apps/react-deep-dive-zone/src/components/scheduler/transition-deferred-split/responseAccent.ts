import type { ResponseAccent } from './content';

/**
 * Class tokens for the 5 response accents used on this page.
 * - emerald: immediate input / transition (mint/green)
 * - blue: deferred / later / scheduler
 * - rose: general update problem (the "bad" path)
 * - violet: transition context / abstraction layer
 * - teal: gauge / neutral
 */

export const responseCardBorder: Record<ResponseAccent, string> = {
  emerald:
    'border-emerald-300/80 bg-gradient-to-br from-emerald-50/80 via-white to-emerald-50/30 dark:border-emerald-700/70 dark:from-emerald-950/30 dark:via-[var(--term-bg)] dark:to-emerald-950/10',
  blue: 'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
  rose: 'border-rose-300/80 bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30 dark:border-rose-700/70 dark:from-rose-950/30 dark:via-[var(--term-bg)] dark:to-rose-950/10',
  violet:
    'border-violet-300/80 bg-gradient-to-br from-violet-50/80 via-white to-violet-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
  teal: 'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-teal-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
};

export const responseIconBox: Record<ResponseAccent, string> = {
  emerald:
    'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  rose: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
};

export const responseTextStrong: Record<ResponseAccent, string> = {
  emerald: 'text-emerald-700 dark:text-emerald-300',
  blue: 'text-blue-700 dark:text-blue-300',
  rose: 'text-rose-700 dark:text-rose-300',
  violet: 'text-violet-700 dark:text-violet-300',
  teal: 'text-teal-700 dark:text-teal-300',
};

export const responseNumberBadge: Record<ResponseAccent, string> = {
  emerald: 'bg-emerald-600 text-white dark:bg-emerald-500',
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  rose: 'bg-rose-600 text-white dark:bg-rose-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
};

export const responsePill: Record<ResponseAccent, string> = {
  emerald:
    'border-emerald-300/80 bg-emerald-50 text-emerald-800 dark:border-emerald-700/70 dark:bg-emerald-950/40 dark:text-emerald-200',
  blue: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  rose: 'border-rose-300/80 bg-rose-50 text-rose-800 dark:border-rose-700/70 dark:bg-rose-950/40 dark:text-rose-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
};

export const responseDot: Record<ResponseAccent, string> = {
  emerald: 'bg-emerald-500 dark:bg-emerald-400',
  blue: 'bg-blue-500 dark:bg-blue-400',
  rose: 'bg-rose-500 dark:bg-rose-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
};

export const responseSoftBg: Record<ResponseAccent, string> = {
  emerald: 'bg-emerald-50/60 dark:bg-emerald-950/20',
  blue: 'bg-blue-50/60 dark:bg-blue-950/20',
  rose: 'bg-rose-50/60 dark:bg-rose-950/20',
  violet: 'bg-violet-50/60 dark:bg-violet-950/20',
  teal: 'bg-teal-50/60 dark:bg-teal-950/20',
};
