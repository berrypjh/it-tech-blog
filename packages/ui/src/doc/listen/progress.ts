import { blockText } from './blocks';
import type { Segment } from './segments';

/** 합성 음성이 1분에 읽는 대략의 글자 수. 남은 시간 추정에만 쓴다. */
const CHARS_PER_MINUTE: Record<string, number> = { ko: 350, en: 900 };

/** 지금 세그먼트가 속한 섹션 제목. 앞쪽으로 가장 가까운 h2(없으면 h1)의 글. */
export const chapterOf = (segments: Segment[], index: number) => {
  for (let i = Math.min(index, segments.length - 1); i >= 0; i -= 1) {
    const { el } = segments[i];
    if (el.tagName === 'H2' || el.tagName === 'H1') return blockText(el);
  }
  return '';
};

const secondsOf = (seg: Segment, perMinute: number) => (seg.text.length / perMinute) * 60;

/** 동영상의 "1:38 / 3:17"처럼 지금까지와 전체의 대략의 재생 시간(초). 글자 수로 추정한다. */
export const timeline = (segments: Segment[], index: number, rate: number, lang: string) => {
  const perMinute = (CHARS_PER_MINUTE[lang] ?? CHARS_PER_MINUTE.en) * rate;
  const seconds = segments.map((seg) => secondsOf(seg, perMinute));
  const sum = (list: number[]) => Math.round(list.reduce((a, b) => a + b, 0));
  return { elapsed: sum(seconds.slice(0, Math.max(index, 0))), total: sum(seconds) };
};

/** 초를 m:ss로. */
export const formatTime = (seconds: number) =>
  `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

const isSectionStart = (seg: Segment) => seg.el.tagName === 'H2' || seg.el.tagName === 'H1';

/** 섹션이 시작하는 세그먼트의 위치들. 진행 바의 챕터 눈금과 섹션 건너뛰기에 쓴다. */
export const sectionStarts = (segments: Segment[]) =>
  segments.flatMap((seg, i) => (isSectionStart(seg) ? [i] : []));

/** 동영상의 이전 챕터처럼, 섹션 중간이면 그 섹션 처음으로, 처음이면 이전 섹션으로 간다. */
export const prevSection = (segments: Segment[], index: number) => {
  const starts = sectionStarts(segments);
  const current = starts.filter((i) => i <= index).at(-1) ?? 0;
  if (index > current) return current;
  return starts.filter((i) => i < current).at(-1) ?? 0;
};

/** 다음 섹션의 시작. 없으면 끝(재생 종료)으로 간다. */
export const nextSection = (segments: Segment[], index: number) =>
  sectionStarts(segments).find((i) => i > index) ?? segments.length;
