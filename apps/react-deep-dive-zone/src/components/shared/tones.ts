export type ToneKey = 'sky' | 'cyan' | 'violet' | 'emerald' | 'blue' | 'teal' | 'indigo' | 'amber';

export type ToneFill = {
  bg: string;
  border: string;
  text: string;
};

export type ToneTokens = {
  /** 텍스트 강조 */
  text: string;
  /** 옅은 칩(틴트 배경 + 텍스트 + 테두리) */
  chip: string;
  /** 작은 점/마커 solid */
  dot: string;
  /** 옅은 테두리 */
  border: string;
  /** hover 테두리 */
  borderHover: string;
  /** 다이어그램 SVG stroke(옅게) */
  stroke: string;
  /** 채움(solid) 블록: 진한 배경 위 진한 글자/테두리 */
  fill: ToneFill;
};

export const toneTokens: Record<ToneKey, ToneTokens> = {
  sky: {
    text: 'text-sky-600 dark:text-sky-300',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    dot: 'bg-sky-500 dark:bg-sky-400',
    border: 'border-sky-200/70 dark:border-sky-800/60',
    borderHover: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
    stroke: 'text-sky-400 dark:text-sky-600',
    fill: {
      bg: 'bg-sky-100/80 dark:bg-sky-950/60',
      border: 'border-sky-300 dark:border-sky-700',
      text: 'text-sky-900 dark:text-sky-100',
    },
  },
  cyan: {
    text: 'text-cyan-600 dark:text-cyan-300',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    border: 'border-cyan-200/70 dark:border-cyan-800/60',
    borderHover: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
    stroke: 'text-cyan-400 dark:text-cyan-600',
    fill: {
      bg: 'bg-cyan-100/80 dark:bg-cyan-950/60',
      border: 'border-cyan-300 dark:border-cyan-700',
      text: 'text-cyan-900 dark:text-cyan-100',
    },
  },
  violet: {
    text: 'text-violet-600 dark:text-violet-300',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    border: 'border-violet-200/70 dark:border-violet-800/60',
    borderHover: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
    stroke: 'text-violet-400 dark:text-violet-600',
    fill: {
      bg: 'bg-violet-100/80 dark:bg-violet-950/60',
      border: 'border-violet-300 dark:border-violet-700',
      text: 'text-violet-900 dark:text-violet-100',
    },
  },
  emerald: {
    text: 'text-emerald-600 dark:text-emerald-300',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    border: 'border-emerald-200/70 dark:border-emerald-800/60',
    borderHover: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
    stroke: 'text-emerald-400 dark:text-emerald-600',
    fill: {
      bg: 'bg-emerald-100/80 dark:bg-emerald-950/60',
      border: 'border-emerald-300 dark:border-emerald-700',
      text: 'text-emerald-900 dark:text-emerald-100',
    },
  },
  blue: {
    text: 'text-blue-600 dark:text-blue-300',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    border: 'border-blue-200/70 dark:border-blue-800/60',
    borderHover: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
    stroke: 'text-blue-400 dark:text-blue-600',
    fill: {
      bg: 'bg-blue-100/80 dark:bg-blue-950/60',
      border: 'border-blue-300 dark:border-blue-700',
      text: 'text-blue-900 dark:text-blue-100',
    },
  },
  teal: {
    text: 'text-teal-600 dark:text-teal-300',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    dot: 'bg-teal-500 dark:bg-teal-400',
    border: 'border-teal-200/70 dark:border-teal-800/60',
    borderHover: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
    stroke: 'text-teal-400 dark:text-teal-600',
    fill: {
      bg: 'bg-teal-100/80 dark:bg-teal-950/60',
      border: 'border-teal-300 dark:border-teal-700',
      text: 'text-teal-900 dark:text-teal-100',
    },
  },
  indigo: {
    text: 'text-indigo-600 dark:text-indigo-300',
    chip: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/60 dark:text-indigo-200 dark:border-indigo-800/70',
    dot: 'bg-indigo-500 dark:bg-indigo-400',
    border: 'border-indigo-200/70 dark:border-indigo-800/60',
    borderHover: 'hover:border-indigo-400/70 dark:hover:border-indigo-500/60',
    stroke: 'text-indigo-400 dark:text-indigo-600',
    fill: {
      bg: 'bg-indigo-100/80 dark:bg-indigo-950/60',
      border: 'border-indigo-300 dark:border-indigo-700',
      text: 'text-indigo-900 dark:text-indigo-100',
    },
  },
  amber: {
    text: 'text-amber-700 dark:text-amber-300',
    chip: 'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-950/60 dark:text-amber-200 dark:border-amber-800/70',
    dot: 'bg-amber-500 dark:bg-amber-400',
    border: 'border-amber-200/70 dark:border-amber-800/60',
    borderHover: 'hover:border-amber-400/70 dark:hover:border-amber-500/60',
    stroke: 'text-amber-400 dark:text-amber-600',
    fill: {
      bg: 'bg-amber-100/80 dark:bg-amber-950/60',
      border: 'border-amber-300 dark:border-amber-700',
      text: 'text-amber-900 dark:text-amber-100',
    },
  },
};
