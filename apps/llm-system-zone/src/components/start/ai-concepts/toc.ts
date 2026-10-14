import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '"우리 기능은 AI인가, LLM인가?"',
    axes: '분류 축은 하나가 아니다',
    generative: 'Generative AI와 Foundation Model',
    language: 'LM · LLM · Multimodal',
    compare: '용어별 축 · 질문 · 흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: '"Is our feature AI or an LLM?"',
    axes: 'There is more than one classification axis',
    generative: 'Generative AI and foundation models',
    language: 'LM, LLM, and multimodal',
    compare: 'Axes, questions, and misconceptions per term',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  problem: 'problem',
  axes: 'axes',
  generative: 'generative-foundation',
  language: 'language-multimodal',
  compare: 'compare',
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
