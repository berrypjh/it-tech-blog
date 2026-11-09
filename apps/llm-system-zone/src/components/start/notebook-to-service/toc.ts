import { tocOf } from '@it-tech-blog/ui';

const titles = {
  ko: {
    purpose: 'Notebook은 무엇을 위한 환경인가',
    inspection: 'Dataset Inspection',
    experiment: 'Prompt Experiment와 Error Analysis',
    threshold: 'threshold는 어떤 score에 적용하는가',
    record: '실험 기록에 남길 것',
    compare: 'Notebook과 서비스 코드의 요구 비교',
    handoff: '실험에서 계약으로',
    flow: '실험과 서비스의 흐름과 환류',
    transfer: '최종 과업: 시설 고장 신고',
    summary: '핵심 요약',
    references: '참고 자료',
  },
  en: {
    purpose: 'What a notebook is for',
    inspection: 'Dataset Inspection',
    experiment: 'Prompt Experiment and Error Analysis',
    threshold: 'Which score a threshold applies to',
    record: 'What to record from an experiment',
    compare: 'Notebook vs. service code requirements',
    handoff: 'From experiment to contract',
    flow: 'Flow and feedback between experiment and service',
    transfer: 'Final task: facility fault reports',
    summary: 'Key takeaways',
    references: 'References',
  },
};

const ids = {
  purpose: 'purpose',
  inspection: 'dataset-inspection',
  experiment: 'prompt-experiment',
  threshold: 'threshold',
  record: 'experiment-record',
  compare: 'notebook-vs-service',
  handoff: 'handoff',
  flow: 'flow',
  transfer: 'transfer',
  summary: 'summary',
  references: 'references',
};

/** 로케일에 맞는 섹션 id · 제목. id는 로케일과 무관해 앵커 링크가 유지된다. */
export const getToc = tocOf(ids, titles);
