import type { Tone } from '../content';

export type TonePalette = {
  border: string;
  bg: string;
  chip: string;
  text: string;
  dot: string;
};

export const tonePalette: Record<Tone, TonePalette> = {
  sky: {
    border: 'border-sky-300/80 dark:border-sky-700/70',
    bg: 'bg-sky-50/60 dark:bg-sky-950/25',
    chip: 'bg-sky-100 text-sky-700 border-sky-200/80 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/60',
    text: 'text-sky-800 dark:text-sky-100',
    dot: 'bg-sky-500 dark:bg-sky-400',
  },
  teal: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/60 dark:bg-teal-950/25',
    chip: 'bg-teal-100 text-teal-700 border-teal-200/80 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/60',
    text: 'text-teal-800 dark:text-teal-100',
    dot: 'bg-teal-500 dark:bg-teal-400',
  },
  violet: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/60 dark:bg-violet-950/25',
    chip: 'bg-violet-100 text-violet-700 border-violet-200/80 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/60',
    text: 'text-violet-800 dark:text-violet-100',
    dot: 'bg-violet-500 dark:bg-violet-400',
  },
  indigo: {
    border: 'border-indigo-300/80 dark:border-indigo-700/70',
    bg: 'bg-indigo-50/60 dark:bg-indigo-950/25',
    chip: 'bg-indigo-100 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/60',
    text: 'text-indigo-800 dark:text-indigo-100',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
  },
  amber: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    bg: 'bg-amber-50/60 dark:bg-amber-950/25',
    chip: 'bg-amber-100 text-amber-700 border-amber-200/80 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/60',
    text: 'text-amber-800 dark:text-amber-100',
    dot: 'bg-amber-500 dark:bg-amber-400',
  },
  rose: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/60 dark:bg-rose-950/25',
    chip: 'bg-rose-100 text-rose-700 border-rose-200/80 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/60',
    text: 'text-rose-800 dark:text-rose-100',
    dot: 'bg-rose-500 dark:bg-rose-400',
  },
};
