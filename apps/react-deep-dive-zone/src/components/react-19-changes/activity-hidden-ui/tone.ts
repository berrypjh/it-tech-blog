export type ActivityKey =
  | 'visible'
  | 'hidden'
  | 'scheduler'
  | 'offscreen'
  | 'activity'
  | 'child'
  | 'preservation';

export type ActivityTone = {
  text: string;
  border: string;
  borderStrong: string;
  bg: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const activityTone: Record<ActivityKey, ActivityTone> = {
  visible: {
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
  hidden: {
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
  scheduler: {
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
  offscreen: {
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
  activity: {
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
  child: {
    text: 'text-sky-700 dark:text-sky-200',
    border: 'border-sky-200/80 dark:border-sky-800/70',
    borderStrong: 'border-sky-400/80 dark:border-sky-500/70',
    bg: 'bg-sky-50/70 dark:bg-sky-950/30',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    iconChip:
      'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    dot: 'bg-sky-500 dark:bg-sky-400',
    solidBg: 'bg-sky-600 dark:bg-sky-500',
  },
  preservation: {
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
};
