export type Domain =
  | 'pending'
  | 'rejected'
  | 'error'
  | 'boundary'
  | 'hydration'
  | 'server'
  | 'recovery'
  | 'navy'
  | 'completion';

type Accent = {
  border: string;
  bg: string;
  text: string;
  chip: string;
  iconChip: string;
  solidBg: string;
};

export const domainAccent: Record<Domain, Accent> = {
  pending: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
  },
  rejected: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
  error: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
  boundary: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  hydration: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  server: {
    border: 'border-cyan-300/80 dark:border-cyan-700/70',
    bg: 'bg-cyan-50/70 dark:bg-cyan-950/30',
    text: 'text-cyan-700 dark:text-cyan-300',
    chip: 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    iconChip:
      'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    solidBg: 'bg-cyan-600 dark:bg-cyan-500',
  },
  recovery: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
  navy: {
    border: 'border-slate-700 dark:border-slate-500',
    bg: 'bg-slate-900 dark:bg-slate-900',
    text: 'text-slate-200 dark:text-slate-100',
    chip: 'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600',
    iconChip:
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-600',
    solidBg: 'bg-slate-700 dark:bg-slate-600',
  },
  completion: {
    border: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/70 dark:bg-emerald-950/30',
    text: 'text-emerald-700 dark:text-emerald-300',
    chip: 'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    iconChip:
      'bg-emerald-100 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    solidBg: 'bg-emerald-600 dark:bg-emerald-500',
  },
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
