export type Role = 'server' | 'client' | 'mismatch' | 'recovery' | 'suppress';

type Accent = {
  border: string;
  bg: string;
  text: string;
  chip: string;
  iconChip: string;
  solidBg: string;
};

export const roleAccent: Record<Role, Accent> = {
  server: {
    border: 'border-blue-300/80 dark:border-blue-700/70',
    bg: 'bg-blue-50/70 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    solidBg: 'bg-blue-600 dark:bg-blue-500',
  },
  client: {
    border: 'border-violet-300/80 dark:border-violet-700/70',
    bg: 'bg-violet-50/70 dark:bg-violet-950/30',
    text: 'text-violet-700 dark:text-violet-300',
    chip: 'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    iconChip:
      'bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    solidBg: 'bg-violet-600 dark:bg-violet-500',
  },
  mismatch: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
  },
  recovery: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
  },
  suppress: {
    border: 'border-amber-300/80 dark:border-amber-700/70',
    bg: 'bg-amber-50/70 dark:bg-amber-950/30',
    text: 'text-amber-700 dark:text-amber-300',
    chip: 'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
    iconChip:
      'bg-amber-100 text-amber-700 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
    solidBg: 'bg-amber-600 dark:bg-amber-500',
  },
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
