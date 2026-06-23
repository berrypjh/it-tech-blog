export type PipelineKey = 'submit' | 'plugin' | 'action' | 'formData' | 'pending' | 'transition';

export type PipelineTone = {
  text: string;
  border: string;
  borderStrong: string;
  bg: string;
  chip: string;
  iconChip: string;
  dot: string;
  solidBg: string;
};

export const pipelineTone: Record<PipelineKey, PipelineTone> = {
  submit: {
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
  plugin: {
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
  action: {
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
  formData: {
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
  pending: {
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
  transition: {
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
