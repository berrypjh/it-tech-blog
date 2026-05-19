import type { ToneKey } from './content';

/**
 * 정보 계층용 accent 톤 매핑. 프로젝트 베이스(amber/터미널)는 유지하되,
 * 디자인 스펙의 파랑/민트/보라/초록 정보 위계를 카드 accent로 표현한다.
 *
 * - text: 글자/아이콘 색
 * - chip: pill 배경 (라이트/다크 모두 은은하게)
 * - dot: 작은 dot 마커
 * - border: 카드 강조 시 사용하는 left/border 강조선
 * - softText: 본문 톤
 */
export type ToneTokens = {
  text: string;
  chip: string;
  dot: string;
  border: string;
  borderHover: string;
};

export const toneTokens: Record<ToneKey, ToneTokens> = {
  sky: {
    text: 'text-sky-600 dark:text-sky-300',
    chip: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/60 dark:text-sky-200 dark:border-sky-800/70',
    dot: 'bg-sky-500 dark:bg-sky-400',
    border: 'border-sky-200/70 dark:border-sky-800/60',
    borderHover: 'hover:border-sky-400/70 dark:hover:border-sky-500/60',
  },
  cyan: {
    text: 'text-cyan-600 dark:text-cyan-300',
    chip: 'bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/60 dark:text-cyan-200 dark:border-cyan-800/70',
    dot: 'bg-cyan-500 dark:bg-cyan-400',
    border: 'border-cyan-200/70 dark:border-cyan-800/60',
    borderHover: 'hover:border-cyan-400/70 dark:hover:border-cyan-500/60',
  },
  violet: {
    text: 'text-violet-600 dark:text-violet-300',
    chip: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/60 dark:text-violet-200 dark:border-violet-800/70',
    dot: 'bg-violet-500 dark:bg-violet-400',
    border: 'border-violet-200/70 dark:border-violet-800/60',
    borderHover: 'hover:border-violet-400/70 dark:hover:border-violet-500/60',
  },
  emerald: {
    text: 'text-emerald-600 dark:text-emerald-300',
    chip: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-200 dark:border-emerald-800/70',
    dot: 'bg-emerald-500 dark:bg-emerald-400',
    border: 'border-emerald-200/70 dark:border-emerald-800/60',
    borderHover: 'hover:border-emerald-400/70 dark:hover:border-emerald-500/60',
  },
  blue: {
    text: 'text-blue-600 dark:text-blue-300',
    chip: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/60 dark:text-blue-200 dark:border-blue-800/70',
    dot: 'bg-blue-500 dark:bg-blue-400',
    border: 'border-blue-200/70 dark:border-blue-800/60',
    borderHover: 'hover:border-blue-400/70 dark:hover:border-blue-500/60',
  },
  teal: {
    text: 'text-teal-600 dark:text-teal-300',
    chip: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/60 dark:text-teal-200 dark:border-teal-800/70',
    dot: 'bg-teal-500 dark:bg-teal-400',
    border: 'border-teal-200/70 dark:border-teal-800/60',
    borderHover: 'hover:border-teal-400/70 dark:hover:border-teal-500/60',
  },
};
