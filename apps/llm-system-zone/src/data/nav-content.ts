import type { DocSidebarStrings, NavGroup } from '@it-tech-blog/ui';
import { commonSidebarStrings } from '@it-tech-blog/ui';

export const navData: Record<'ko' | 'en', NavGroup[]> = {
  ko: [
    {
      title: '문제 정의와 학습 출발점',
      items: [
        { id: 'intro', label: '01.1 LLM 시스템 시작하기', type: 'link' },
        { id: 'ai-concepts', label: '01.2 AI · ML · DL · 생성형 AI', type: 'link' },
        { id: 'software-differences', label: '01.3 LLM 앱과 일반 소프트웨어', type: 'link' },
        { id: 'when-to-use-llms', label: '01.4 LLM을 쓸 문제와 쓰지 않을 문제', type: 'link' },
        { id: 'success-criteria', label: '01.5 AI 기능의 성공 조건 정의', type: 'link' },
        { id: 'failure-diagnosis', label: '01.6 실패하는 AI 기능 진단', type: 'link' },
        { id: 'notebook-to-service', label: '01.7 Notebook과 서비스 코드', type: 'link' },
      ],
    },
  ],
  en: [
    {
      title: 'Defining the Problem',
      items: [
        { id: 'intro', label: '01.1 Getting started with LLM systems', type: 'link' },
        { id: 'ai-concepts', label: '01.2 AI, ML, DL, generative AI', type: 'link' },
        { id: 'software-differences', label: '01.3 LLM apps vs. software', type: 'link' },
        { id: 'when-to-use-llms', label: '01.4 When to (not) use LLMs', type: 'link' },
        { id: 'success-criteria', label: '01.5 Defining success criteria', type: 'link' },
        { id: 'failure-diagnosis', label: '01.6 Diagnosing AI failures', type: 'link' },
        { id: 'notebook-to-service', label: '01.7 Notebook vs. service code', type: 'link' },
      ],
    },
  ],
};

export const sidebarStrings: Record<'ko' | 'en', DocSidebarStrings> = {
  ko: {
    ...commonSidebarStrings.ko,
    title: 'LLM System',
    subtitle: '모델에서 시스템까지, LLM 소프트웨어 학습',
  },
  en: {
    ...commonSidebarStrings.en,
    title: 'LLM System',
    subtitle: 'From model to system, learning LLM software',
  },
};
