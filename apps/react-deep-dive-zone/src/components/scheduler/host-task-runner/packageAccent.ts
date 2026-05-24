import type { PkgAccent } from './content';

/**
 * Class tokens for 5 accents used on the host-task-runner page.
 * - blue: Root Scheduler / Immediate / ReactFiber
 * - teal: scheduler package / UserBlocking / Normal
 * - violet: scheduleCallback bridge / Low
 * - slate: Idle
 * - amber: host callback / timerQueue
 */

export const pkgCardBorder: Record<PkgAccent, string> = {
  blue: 'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
  teal: 'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-teal-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
  violet:
    'border-violet-300/80 bg-gradient-to-br from-violet-50/80 via-white to-violet-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
  slate:
    'border-slate-300/80 bg-gradient-to-br from-slate-50/80 via-white to-slate-50/30 dark:border-slate-700/70 dark:from-slate-900/30 dark:via-[var(--term-bg)] dark:to-slate-900/10',
  amber:
    'border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
};

export const pkgIconBox: Record<PkgAccent, string> = {
  blue: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  teal: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  violet:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  slate:
    'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700/60',
  amber:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
};

export const pkgTextStrong: Record<PkgAccent, string> = {
  blue: 'text-blue-700 dark:text-blue-300',
  teal: 'text-teal-700 dark:text-teal-300',
  violet: 'text-violet-700 dark:text-violet-300',
  slate: 'text-slate-700 dark:text-slate-300',
  amber: 'text-amber-700 dark:text-amber-300',
};

export const pkgNumberBadge: Record<PkgAccent, string> = {
  blue: 'bg-blue-600 text-white dark:bg-blue-500',
  teal: 'bg-teal-600 text-white dark:bg-teal-500',
  violet: 'bg-violet-600 text-white dark:bg-violet-500',
  slate: 'bg-slate-600 text-white dark:bg-slate-500',
  amber: 'bg-amber-600 text-white dark:bg-amber-500',
};

export const pkgPill: Record<PkgAccent, string> = {
  blue: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  teal: 'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  violet:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  slate:
    'border-slate-300/80 bg-slate-50 text-slate-800 dark:border-slate-700/70 dark:bg-slate-900/40 dark:text-slate-200',
  amber:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
};

export const pkgDot: Record<PkgAccent, string> = {
  blue: 'bg-blue-500 dark:bg-blue-400',
  teal: 'bg-teal-500 dark:bg-teal-400',
  violet: 'bg-violet-500 dark:bg-violet-400',
  slate: 'bg-slate-500 dark:bg-slate-400',
  amber: 'bg-amber-500 dark:bg-amber-400',
};
