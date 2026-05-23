import type { LaneTone } from '../content';

export const laneIconBg: Record<LaneTone, string> = {
  emerald: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-200',
  sky: 'bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-200',
  cyan: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-200',
  violet: 'bg-violet-100 text-violet-700 dark:bg-violet-950/60 dark:text-violet-200',
  amber: 'bg-amber-100 text-amber-700 dark:bg-amber-950/60 dark:text-amber-200',
  slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200',
};

export const laneTitleText: Record<LaneTone, string> = {
  emerald: 'text-emerald-800 dark:text-emerald-100',
  sky: 'text-sky-800 dark:text-sky-100',
  cyan: 'text-cyan-800 dark:text-cyan-100',
  violet: 'text-violet-800 dark:text-violet-100',
  amber: 'text-amber-900 dark:text-amber-100',
  slate: 'text-slate-800 dark:text-slate-100',
};

export const laneBorder: Record<LaneTone, string> = {
  emerald:
    'border-emerald-200/80 dark:border-emerald-800/60 hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  sky: 'border-sky-200/80 dark:border-sky-800/60 hover:border-sky-400/70 dark:hover:border-sky-500/60',
  cyan: 'border-cyan-200/80 dark:border-cyan-800/60 hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  violet:
    'border-violet-200/80 dark:border-violet-800/60 hover:border-violet-400/70 dark:hover:border-violet-500/60',
  amber:
    'border-amber-200/80 dark:border-amber-800/60 hover:border-amber-400/70 dark:hover:border-amber-500/60',
  slate:
    'border-slate-200/80 dark:border-slate-700/60 hover:border-slate-400/70 dark:hover:border-slate-500/60',
};

export const laneBgTint: Record<LaneTone, string> = {
  emerald: 'bg-emerald-50/60 dark:bg-emerald-950/30',
  sky: 'bg-sky-50/60 dark:bg-sky-950/30',
  cyan: 'bg-cyan-50/60 dark:bg-cyan-950/30',
  violet: 'bg-violet-50/60 dark:bg-violet-950/30',
  amber: 'bg-amber-50/60 dark:bg-amber-950/30',
  slate: 'bg-slate-50/60 dark:bg-slate-900/40',
};

export const bitText: Record<LaneTone, string> = {
  emerald: 'text-emerald-300',
  sky: 'text-sky-300',
  cyan: 'text-cyan-300',
  violet: 'text-violet-300',
  amber: 'text-amber-300',
  slate: 'text-slate-300',
};
