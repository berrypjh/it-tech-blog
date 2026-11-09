import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    problem: '모델 응답과 업무 완료',
    whatIs: 'LM과 LLM 정의하기',
    roles: '모델 · 추론 API · 앱의 역할',
    flow: 'IT 문의가 담당 큐에 접수되기까지',
    counter: '반례: 접수 완료라고 썼지만 기록이 없다',
    parts: 'Prompt · Context · Retrieval · Tools · Evaluation',
    example: '단일 호출과 시스템 흐름 비교',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    problem: 'A model response is not a finished task',
    whatIs: 'Defining LM and LLM',
    roles: 'Roles of model, inference API, and app',
    flow: 'From an IT request to a queue record',
    counter: 'Counterexample: it said “filed” but nothing was recorded',
    parts: 'Prompt, Context, Retrieval, Tools, Evaluation',
    example: 'Single call vs. system flow',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  problem: 'problem',
  whatIs: 'what-is-llm',
  roles: 'roles',
  flow: 'flow',
  counter: 'counterexample',
  parts: 'parts',
  example: 'example',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);
