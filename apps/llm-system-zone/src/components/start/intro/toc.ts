import type { Locale } from '@it-tech-blog/preferences';
import type { TocItem } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '모델 응답과 업무 완료',
    whatIs: 'LM과 LLM 정의하기',
    roles: '모델 · 추론 API · 앱의 역할',
    flow: '요청이 업무 완료까지 가는 길',
    parts: 'Prompt · Context · Retrieval · Tools · Evaluation',
    example: '단일 호출과 시스템 흐름 비교',
    misconceptions: '흔한 오해',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'A model response is not a finished task',
    whatIs: 'Defining LM and LLM',
    roles: 'Roles of model, inference API, and app',
    flow: 'From request to a finished task',
    parts: 'Prompt, Context, Retrieval, Tools, Evaluation',
    example: 'Single call vs. system flow',
    misconceptions: 'Common misconceptions',
    summary: 'Key takeaways',
    references: 'References',
  },
};

type TocKey = keyof (typeof titles)['ko'];

const ids: Record<TocKey, string> = {
  problem: 'problem',
  whatIs: 'what-is-llm',
  roles: 'roles',
  flow: 'flow',
  parts: 'parts',
  example: 'example',
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
