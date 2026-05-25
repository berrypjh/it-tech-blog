export type DomainKey =
  | 'head'
  | 'body'
  | 'hoisting'
  | 'problem'
  | 'internals'
  | 'ssr'
  | 'title'
  | 'meta'
  | 'link'
  | 'script'
  | 'style';

export type DomainTone = {
  text: string;
  border: string;
  borderStrong: string;
  bg: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const domainTone: Record<DomainKey, DomainTone> = {
  head: {
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
  body: {
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
  hoisting: {
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
  problem: {
    text: 'text-rose-700 dark:text-rose-200',
    border: 'border-rose-200/80 dark:border-rose-800/70',
    borderStrong: 'border-rose-400/80 dark:border-rose-500/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    dot: 'bg-rose-500 dark:bg-rose-400',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
  internals: {
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
  ssr: {
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
  title: {
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
  meta: {
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
  link: {
    text: 'text-cyan-700 dark:text-cyan-200',
    border: 'border-cyan-200/80 dark:border-cyan-800/70',
    borderStrong: 'border-cyan-400/80 dark:border-cyan-500/70',
    bg: 'bg-cyan-50/70 dark:bg-cyan-950/30',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    iconChip:
      'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    solidBg: 'bg-cyan-600 dark:bg-cyan-500',
  },
  script: {
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
  style: {
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

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
