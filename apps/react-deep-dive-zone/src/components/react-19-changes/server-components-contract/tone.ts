export type BoundaryKey = 'server' | 'client' | 'function' | 'react' | 'framework' | 'contract';

export type BoundaryTone = {
  text: string;
  border: string;
  borderStrong: string;
  bg: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const boundaryTone: Record<BoundaryKey, BoundaryTone> = {
  server: {
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
  client: {
    text: 'text-indigo-700 dark:text-indigo-200',
    border: 'border-indigo-200/80 dark:border-indigo-800/70',
    borderStrong: 'border-indigo-400/80 dark:border-indigo-500/70',
    bg: 'bg-indigo-50/70 dark:bg-indigo-950/30',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    iconChip:
      'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    solidBg: 'bg-indigo-600 dark:bg-indigo-500',
  },
  function: {
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
  react: {
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
  framework: {
    text: 'text-purple-700 dark:text-purple-200',
    border: 'border-purple-200/80 dark:border-purple-800/70',
    borderStrong: 'border-purple-400/80 dark:border-purple-500/70',
    bg: 'bg-purple-50/70 dark:bg-purple-950/30',
    chip: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800/70',
    iconChip:
      'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-950/60 dark:text-purple-200 dark:border-purple-800/70',
    dot: 'bg-purple-500 dark:bg-purple-400',
    solidBg: 'bg-purple-600 dark:bg-purple-500',
  },
  contract: {
    text: 'text-slate-700 dark:text-slate-200',
    border: 'border-slate-200/80 dark:border-slate-700/70',
    borderStrong: 'border-slate-400/80 dark:border-slate-500/70',
    bg: 'bg-slate-50/70 dark:bg-slate-900/30',
    chip: 'bg-slate-50 text-slate-700 border-slate-200 dark:bg-slate-900/60 dark:text-slate-200 dark:border-slate-700',
    iconChip:
      'bg-slate-100 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700',
    dot: 'bg-slate-500 dark:bg-slate-400',
    solidBg: 'bg-slate-700 dark:bg-slate-500',
  },
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
