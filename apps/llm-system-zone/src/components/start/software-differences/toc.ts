import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '틀려도 오류가 나지 않는 응답',
    deterministic: '결정적 함수와 확률 모델',
    variation: '출력이 달라지는 원인',
    layers: '"맞다"의 여섯 층',
    types: '정적 타입은 런타임 검증이 아니다',
    vocab: 'Validation · Evaluation · Monitoring',
    boundary: '모델 출력은 신뢰 경계 밖 데이터',
    misconceptions: '흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'A wrong response raises no error',
    deterministic: 'Deterministic functions and probabilistic models',
    variation: 'Why output varies',
    layers: 'Six layers of "correct"',
    types: 'Static types are not runtime validation',
    vocab: 'Validation, Evaluation, Monitoring',
    boundary: 'Model output is data outside the trust boundary',
    misconceptions: 'Common misconceptions',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  problem: 'problem',
  deterministic: 'deterministic',
  variation: 'variation',
  layers: 'layers',
  types: 'types',
  vocab: 'vocabulary',
  boundary: 'trust-boundary',
  misconceptions: 'misconceptions',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id·제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = (locale: Locale) =>
  Object.fromEntries(
    (Object.keys(ids) as TocKey[]).map((key) => [
      key,
      { id: ids[key], title: titles[locale][key] },
    ]),
  ) as Record<TocKey, TocItem>;
