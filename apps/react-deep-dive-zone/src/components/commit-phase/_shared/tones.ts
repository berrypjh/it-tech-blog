export type CommitToneKey =
  | 'sky'
  | 'blue'
  | 'cyan'
  | 'teal'
  | 'violet'
  | 'indigo'
  | 'rose'
  | 'amber'
  | 'orange'
  | 'emerald';

export type CommitTonePalette = {
  border: string;
  borderStrong: string;
  bg: string;
  bgSoft: string;
  chip: string;
  chipSolid: string;
  text: string;
  textStrong: string;
  dot: string;
  borderHover: string;
};

export const commitToneTokens: Record<CommitToneKey, CommitTonePalette> = {
  sky: {
    border: 'border-sky-200/70 dark:border-sky-800/60',
    borderStrong: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/60 dark:bg-sky-950/25',
    bgSoft: 'bg-sky-50/40 dark:bg-sky-950/15',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    chipSolid:
      'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    text: 'text-sky-700 dark:text-sky-300',
    textStrong: 'text-sky-800 dark:text-sky-100',
    dot: 'bg-sky-500 dark:bg-sky-400',
    borderHover: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  },
  blue: {
    border: 'border-blue-200/70 dark:border-blue-800/60',
    borderStrong: 'border-blue-300/80 dark:border-blue-700/70',
    bg: 'bg-blue-50/60 dark:bg-blue-950/25',
    bgSoft: 'bg-blue-50/40 dark:bg-blue-950/15',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    chipSolid:
      'bg-blue-100 text-blue-700 border-blue-200/80 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/60',
    text: 'text-blue-700 dark:text-blue-300',
    textStrong: 'text-blue-800 dark:text-blue-100',
    dot: 'bg-blue-500 dark:bg-blue-400',
    borderHover: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  },
  cyan: {
    border: 'border-cyan-200/70 dark:border-cyan-800/60',
    borderStrong: 'border-cyan-300/80 dark:border-cyan-700/70',
    bg: 'bg-cyan-50/60 dark:bg-cyan-950/25',
    bgSoft: 'bg-cyan-50/40 dark:bg-cyan-950/15',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    chipSolid:
      'bg-cyan-100 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/60',
    text: 'text-cyan-700 dark:text-cyan-300',
    textStrong: 'text-cyan-800 dark:text-cyan-100',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    borderHover: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  },
  teal: {
    border: 'border-teal-200/70 dark:border-teal-800/60',
    borderStrong: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/60 dark:bg-teal-950/25',
    bgSoft: 'bg-teal-50/40 dark:bg-teal-950/15',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    chipSolid:
      'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-700 dark:text-teal-300',
    textStrong: 'text-teal-800 dark:text-teal-100',
    dot: 'bg-teal-500 dark:bg-teal-400',
    borderHover: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  },
  violet: {
    border: 'border-violet-200/70 dark:border-violet-800/60',
    borderStrong: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/60 dark:bg-violet-950/25',
    bgSoft: 'bg-violet-50/40 dark:bg-violet-950/15',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    chipSolid:
      'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-700 dark:text-violet-300',
    textStrong: 'text-violet-800 dark:text-violet-100',
    dot: 'bg-violet-500 dark:bg-violet-400',
    borderHover: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  },
  indigo: {
    border: 'border-indigo-200/70 dark:border-indigo-800/60',
    borderStrong: 'border-indigo-300/80 dark:border-indigo-700/70',
    bg: 'bg-indigo-50/60 dark:bg-indigo-950/25',
    bgSoft: 'bg-indigo-50/40 dark:bg-indigo-950/15',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    chipSolid:
      'bg-indigo-100 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
    text: 'text-indigo-700 dark:text-indigo-300',
    textStrong: 'text-indigo-800 dark:text-indigo-100',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    borderHover: 'hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
  },
  rose: {
    border: 'border-rose-200/70 dark:border-rose-800/60',
    borderStrong: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/60 dark:bg-rose-950/25',
    bgSoft: 'bg-rose-50/40 dark:bg-rose-950/15',
    chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    chipSolid:
      'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    text: 'text-rose-700 dark:text-rose-300',
    textStrong: 'text-rose-800 dark:text-rose-100',
    dot: 'bg-rose-500 dark:bg-rose-400',
    borderHover: 'hover:border-rose-400/70 dark:hover:border-rose-500/60',
  },
  amber: {
    border: 'border-amber-200/70 dark:border-amber-800/60',
    borderStrong: 'border-amber-300/80 dark:border-amber-700/70',
    bg: 'bg-amber-50/60 dark:bg-amber-950/25',
    bgSoft: 'bg-amber-50/40 dark:bg-amber-950/15',
    chip: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
    chipSolid:
      'bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
    text: 'text-amber-700 dark:text-amber-300',
    textStrong: 'text-amber-800 dark:text-amber-100',
    dot: 'bg-amber-500 dark:bg-amber-400',
    borderHover: 'hover:border-amber-400/70 dark:hover:border-amber-500/60',
  },
  orange: {
    border: 'border-orange-200/70 dark:border-orange-800/60',
    borderStrong: 'border-orange-300/80 dark:border-orange-700/70',
    bg: 'bg-orange-50/60 dark:bg-orange-950/25',
    bgSoft: 'bg-orange-50/40 dark:bg-orange-950/15',
    chip: 'bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800/70',
    chipSolid:
      'bg-orange-100 text-orange-700 border-orange-200/80 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800/60',
    text: 'text-orange-700 dark:text-orange-300',
    textStrong: 'text-orange-800 dark:text-orange-100',
    dot: 'bg-orange-500 dark:bg-orange-400',
    borderHover: 'hover:border-orange-400/70 dark:hover:border-orange-500/60',
  },
  emerald: {
    border: 'border-emerald-200/70 dark:border-emerald-800/60',
    borderStrong: 'border-emerald-300/80 dark:border-emerald-700/70',
    bg: 'bg-emerald-50/60 dark:bg-emerald-950/25',
    bgSoft: 'bg-emerald-50/40 dark:bg-emerald-950/15',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    chipSolid:
      'bg-emerald-100 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/60',
    text: 'text-emerald-700 dark:text-emerald-300',
    textStrong: 'text-emerald-800 dark:text-emerald-100',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    borderHover: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  },
};
