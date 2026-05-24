import type { LaneAccent } from '../lane-shape/content';

/**
 * Class tokens for the 6 Lane families used in the lane-shape page.
 * - sync: blue
 * - inputContinuous: cyan
 * - default: teal
 * - transition: violet
 * - retry: cyan (slightly different role from inputContinuous, reuse cyan family)
 * - offscreen: amber (orange family)
 */

export const laneCardBorder: Record<LaneAccent, string> = {
  sync: 'border-blue-300/80 bg-gradient-to-br from-blue-50/80 via-white to-blue-50/30 dark:border-blue-700/70 dark:from-blue-950/30 dark:via-[var(--term-bg)] dark:to-blue-950/10',
  inputContinuous:
    'border-cyan-300/80 bg-gradient-to-br from-cyan-50/80 via-white to-cyan-50/30 dark:border-cyan-700/70 dark:from-cyan-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/10',
  default:
    'border-teal-300/80 bg-gradient-to-br from-teal-50/80 via-white to-teal-50/30 dark:border-teal-700/70 dark:from-teal-950/30 dark:via-[var(--term-bg)] dark:to-teal-950/10',
  transition:
    'border-violet-300/80 bg-gradient-to-br from-violet-50/80 via-white to-violet-50/30 dark:border-violet-700/70 dark:from-violet-950/30 dark:via-[var(--term-bg)] dark:to-violet-950/10',
  retry:
    'border-cyan-300/80 bg-gradient-to-br from-cyan-50/80 via-white to-cyan-50/30 dark:border-cyan-700/70 dark:from-cyan-950/30 dark:via-[var(--term-bg)] dark:to-cyan-950/10',
  offscreen:
    'border-amber-300/80 bg-gradient-to-br from-amber-50/80 via-white to-amber-50/30 dark:border-amber-700/70 dark:from-amber-950/30 dark:via-[var(--term-bg)] dark:to-amber-950/10',
};

export const laneIconBox: Record<LaneAccent, string> = {
  sync: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
  inputContinuous:
    'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  default:
    'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
  transition:
    'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
  retry:
    'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
  offscreen:
    'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
};

export const laneTextStrong: Record<LaneAccent, string> = {
  sync: 'text-blue-700 dark:text-blue-300',
  inputContinuous: 'text-cyan-700 dark:text-cyan-300',
  default: 'text-teal-700 dark:text-teal-300',
  transition: 'text-violet-700 dark:text-violet-300',
  retry: 'text-cyan-700 dark:text-cyan-300',
  offscreen: 'text-amber-700 dark:text-amber-300',
};

export const laneBitOn: Record<LaneAccent, string> = {
  sync: 'bg-blue-500 border-blue-500 text-white dark:bg-blue-400 dark:border-blue-400 dark:text-slate-900',
  inputContinuous:
    'bg-cyan-500 border-cyan-500 text-white dark:bg-cyan-400 dark:border-cyan-400 dark:text-slate-900',
  default:
    'bg-teal-500 border-teal-500 text-white dark:bg-teal-400 dark:border-teal-400 dark:text-slate-900',
  transition:
    'bg-violet-500 border-violet-500 text-white dark:bg-violet-400 dark:border-violet-400 dark:text-slate-900',
  retry:
    'bg-cyan-500 border-cyan-500 text-white dark:bg-cyan-400 dark:border-cyan-400 dark:text-slate-900',
  offscreen:
    'bg-amber-500 border-amber-500 text-white dark:bg-amber-400 dark:border-amber-400 dark:text-slate-900',
};

export const lanePill: Record<LaneAccent, string> = {
  sync: 'border-blue-300/80 bg-blue-50 text-blue-800 dark:border-blue-700/70 dark:bg-blue-950/40 dark:text-blue-200',
  inputContinuous:
    'border-cyan-300/80 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  default:
    'border-teal-300/80 bg-teal-50 text-teal-800 dark:border-teal-700/70 dark:bg-teal-950/40 dark:text-teal-200',
  transition:
    'border-violet-300/80 bg-violet-50 text-violet-800 dark:border-violet-700/70 dark:bg-violet-950/40 dark:text-violet-200',
  retry:
    'border-cyan-300/80 bg-cyan-50 text-cyan-800 dark:border-cyan-700/70 dark:bg-cyan-950/40 dark:text-cyan-200',
  offscreen:
    'border-amber-300/80 bg-amber-50 text-amber-800 dark:border-amber-700/70 dark:bg-amber-950/40 dark:text-amber-200',
};

export const laneNumberBadge: Record<LaneAccent, string> = {
  sync: 'bg-blue-600 text-white dark:bg-blue-500',
  inputContinuous: 'bg-cyan-600 text-white dark:bg-cyan-500',
  default: 'bg-teal-600 text-white dark:bg-teal-500',
  transition: 'bg-violet-600 text-white dark:bg-violet-500',
  retry: 'bg-cyan-600 text-white dark:bg-cyan-500',
  offscreen: 'bg-amber-600 text-white dark:bg-amber-500',
};

export const laneDot: Record<LaneAccent, string> = {
  sync: 'bg-blue-500 dark:bg-blue-400',
  inputContinuous: 'bg-cyan-500 dark:bg-cyan-400',
  default: 'bg-teal-500 dark:bg-teal-400',
  transition: 'bg-violet-500 dark:bg-violet-400',
  retry: 'bg-cyan-500 dark:bg-cyan-400',
  offscreen: 'bg-amber-500 dark:bg-amber-400',
};
