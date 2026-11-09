import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '라우팅을 제안한 모델은 무엇인가?',
    axes: '분류 축은 하나가 아니다',
    generative: 'Generative AI와 Foundation Model',
    language: 'LM · LLM · Multimodal',
    signal: '학습 신호: 지도 학습과 자기지도 학습',
    compare: '용어별 축 · 질문 · 흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'What model suggested the route?',
    axes: 'There is more than one classification axis',
    generative: 'Generative AI and foundation models',
    language: 'LM, LLM, and multimodal',
    signal: 'Learning signal: supervised and self-supervised',
    compare: 'Axes, questions, and misconceptions per term',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  problem: 'problem',
  axes: 'axes',
  generative: 'generative-foundation',
  language: 'language-multimodal',
  signal: 'learning-signal',
  compare: 'compare',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);
