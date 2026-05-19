import type { Tone } from './content';

export type ToneClasses = {
  iconBg: string;
  iconText: string;
  border: string;
  hoverBorder: string;
  num: string;
  text: string;
  chip: string;
  ribbon: string;
};

export const tones: Record<Tone, ToneClasses> = {
  blue: {
    iconBg: 'bg-sky-100 dark:bg-sky-950/60',
    iconText: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-200/80 dark:border-sky-800/60',
    hoverBorder: 'hover:border-sky-400 dark:hover:border-sky-500',
    num: 'bg-sky-500 text-white dark:bg-sky-400 dark:text-slate-900',
    text: 'text-sky-700 dark:text-sky-200',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    ribbon: 'bg-sky-500 dark:bg-sky-400',
  },
  teal: {
    iconBg: 'bg-teal-100 dark:bg-teal-950/60',
    iconText: 'text-teal-600 dark:text-teal-300',
    border: 'border-teal-200/80 dark:border-teal-800/60',
    hoverBorder: 'hover:border-teal-400 dark:hover:border-teal-500',
    num: 'bg-teal-500 text-white dark:bg-teal-400 dark:text-slate-900',
    text: 'text-teal-700 dark:text-teal-200',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    ribbon: 'bg-teal-500 dark:bg-teal-400',
  },
  lavender: {
    iconBg: 'bg-violet-100 dark:bg-violet-950/60',
    iconText: 'text-violet-600 dark:text-violet-300',
    border: 'border-violet-200/80 dark:border-violet-800/60',
    hoverBorder: 'hover:border-violet-400 dark:hover:border-violet-500',
    num: 'bg-violet-500 text-white dark:bg-violet-400 dark:text-slate-900',
    text: 'text-violet-700 dark:text-violet-200',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    ribbon: 'bg-violet-500 dark:bg-violet-400',
  },
  cyan: {
    iconBg: 'bg-cyan-100 dark:bg-cyan-950/60',
    iconText: 'text-cyan-600 dark:text-cyan-300',
    border: 'border-cyan-200/80 dark:border-cyan-800/60',
    hoverBorder: 'hover:border-cyan-400 dark:hover:border-cyan-500',
    num: 'bg-cyan-500 text-white dark:bg-cyan-400 dark:text-slate-900',
    text: 'text-cyan-700 dark:text-cyan-200',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    ribbon: 'bg-cyan-500 dark:bg-cyan-400',
  },
  mint: {
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/60',
    iconText: 'text-emerald-600 dark:text-emerald-300',
    border: 'border-emerald-200/80 dark:border-emerald-800/60',
    hoverBorder: 'hover:border-emerald-400 dark:hover:border-emerald-500',
    num: 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-slate-900',
    text: 'text-emerald-700 dark:text-emerald-200',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    ribbon: 'bg-emerald-500 dark:bg-emerald-400',
  },
  coral: {
    iconBg: 'bg-orange-100 dark:bg-orange-950/60',
    iconText: 'text-orange-600 dark:text-orange-300',
    border: 'border-orange-200/80 dark:border-orange-800/60',
    hoverBorder: 'hover:border-orange-400 dark:hover:border-orange-500',
    num: 'bg-orange-500 text-white dark:bg-orange-400 dark:text-slate-900',
    text: 'text-orange-700 dark:text-orange-200',
    chip: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/60 dark:text-orange-200 dark:border-orange-800/70',
    ribbon: 'bg-orange-500 dark:bg-orange-400',
  },
  indigo: {
    iconBg: 'bg-indigo-100 dark:bg-indigo-950/60',
    iconText: 'text-indigo-600 dark:text-indigo-300',
    border: 'border-indigo-200/80 dark:border-indigo-800/60',
    hoverBorder: 'hover:border-indigo-400 dark:hover:border-indigo-500',
    num: 'bg-indigo-500 text-white dark:bg-indigo-400 dark:text-slate-900',
    text: 'text-indigo-700 dark:text-indigo-200',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    ribbon: 'bg-indigo-500 dark:bg-indigo-400',
  },
};
