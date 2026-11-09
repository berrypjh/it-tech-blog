import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '틀려도 오류가 나지 않는 응답',
    deterministic: '결정적 함수와 확률 모델',
    contract: '응답 하나를 네 경계로 확인한다',
    variation: '출력이 달라지는 원인',
    layers: '"맞다"의 여섯 층',
    types: '정적 타입은 런타임 검증이 아니다',
    vocab: 'Validation · Evaluation · Monitoring',
    boundary: '모델 출력은 신뢰 경계 밖 데이터',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'A wrong response raises no error',
    deterministic: 'Deterministic functions and probabilistic models',
    contract: 'Checking one response at four boundaries',
    variation: 'Why output varies',
    layers: 'Six layers of "correct"',
    types: 'Static types are not runtime validation',
    vocab: 'Validation, Evaluation, Monitoring',
    boundary: 'Model output is data outside the trust boundary',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  problem: 'problem',
  deterministic: 'deterministic',
  contract: 'contract',
  variation: 'variation',
  layers: 'layers',
  types: 'types',
  vocab: 'vocabulary',
  boundary: 'trust-boundary',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);
