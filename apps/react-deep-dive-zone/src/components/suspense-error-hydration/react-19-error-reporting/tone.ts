export type CallbackKind = 'caught' | 'uncaught' | 'recoverable';

type Accent = {
  border: string;
  bg: string;
  text: string;
  chip: string;
  iconChip: string;
  solidBg: string;
  pillBg: string;
  pillText: string;
};

export const callbackAccent: Record<CallbackKind, Accent> = {
  caught: {
    border: 'border-blue-300/80 dark:border-blue-700/70',
    bg: 'bg-blue-50/70 dark:bg-blue-950/30',
    text: 'text-blue-700 dark:text-blue-300',
    chip: 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    iconChip:
      'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    solidBg: 'bg-blue-600 dark:bg-blue-500',
    pillBg: 'bg-blue-50 dark:bg-blue-950/40',
    pillText: 'text-blue-700 dark:text-blue-200',
  },
  uncaught: {
    border: 'border-rose-300/80 dark:border-rose-700/70',
    bg: 'bg-rose-50/70 dark:bg-rose-950/30',
    text: 'text-rose-700 dark:text-rose-300',
    chip: 'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    iconChip:
      'bg-rose-100 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
    solidBg: 'bg-rose-600 dark:bg-rose-500',
    pillBg: 'bg-rose-50 dark:bg-rose-950/40',
    pillText: 'text-rose-700 dark:text-rose-200',
  },
  recoverable: {
    border: 'border-teal-300/80 dark:border-teal-700/70',
    bg: 'bg-teal-50/70 dark:bg-teal-950/30',
    text: 'text-teal-700 dark:text-teal-300',
    chip: 'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    iconChip:
      'bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    solidBg: 'bg-teal-600 dark:bg-teal-500',
    pillBg: 'bg-teal-50 dark:bg-teal-950/40',
    pillText: 'text-teal-700 dark:text-teal-200',
  },
};

export type Severity = 'low' | 'medium' | 'critical';

export const severityBadge: Record<Severity, { label: string; className: string }> = {
  low: {
    label: 'Low',
    className:
      'border-emerald-200 bg-emerald-100 text-emerald-700 dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-200',
  },
  medium: {
    label: 'Medium',
    className:
      'border-amber-200 bg-amber-100 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200',
  },
  critical: {
    label: 'Critical',
    className:
      'border-rose-200 bg-rose-100 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200',
  },
};

export type LogLevel = 'info' | 'warn' | 'error';

export const logLevelBadge: Record<LogLevel, string> = {
  info: 'border-teal-200 bg-teal-50 text-teal-700 dark:border-teal-800/60 dark:bg-teal-950/40 dark:text-teal-200',
  warn: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800/60 dark:bg-amber-950/40 dark:text-amber-200',
  error:
    'border-rose-200 bg-rose-50 text-rose-700 dark:border-rose-800/60 dark:bg-rose-950/40 dark:text-rose-200',
};

export const sectionNumberBadge =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white font-mono text-xsm font-bold tabular-nums dark:bg-blue-500';
