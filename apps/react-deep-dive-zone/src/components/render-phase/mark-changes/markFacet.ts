import { type ToneTokens, toneTokens } from '../../shared/tones';

import type { Tone } from './content';

/** 섹션에서 실제 쓰는 facet만 추린 형태(텍스트/칩/테두리/채움). */
type SemanticFacet = Pick<ToneTokens, 'text' | 'chip' | 'border' | 'fill'>;

/**
 * 삭제(Deletion)를 뜻하는 의미색 rose. §3 예외(상태/판정 색)라 toneTokens 밖에서 직접 정의한다.
 */
const roseFacet: SemanticFacet = {
  text: 'text-rose-600 dark:text-rose-300',
  chip: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/60 dark:text-rose-200 dark:border-rose-800/70',
  border: 'border-rose-200/70 dark:border-rose-800/60',
  fill: {
    bg: 'bg-rose-100/80 dark:bg-rose-950/60',
    border: 'border-rose-300 dark:border-rose-700',
    text: 'text-rose-900 dark:text-rose-100',
  },
};

/** 카테고리색은 toneTokens, 의미색 rose만 예외로 합성한다. */
export const facetFor = (tone: Tone): SemanticFacet =>
  tone === 'rose' ? roseFacet : toneTokens[tone];
