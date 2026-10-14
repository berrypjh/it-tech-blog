import type { DocSidebarStrings, NavGroup } from '@it-tech-blog/ui';
import { commonSidebarStrings } from '@it-tech-blog/ui';

export const navData: Record<'ko' | 'en', NavGroup[]> = {
  ko: [
    {
      title: '시작하기',
      items: [
        { id: 'intro', label: 'LLM 시스템 시작하기', type: 'link' },
        { id: 'software-differences', label: 'LLM 앱과 일반 소프트웨어', type: 'link' },
        { id: 'ai-concepts', label: 'AI · ML · DL · 생성형 AI', type: 'link' },
        { id: 'when-to-use-llms', label: 'LLM을 쓸 문제와 쓰지 않을 문제', type: 'link' },
        { id: 'failure-diagnosis', label: '실패하는 AI 기능 진단', type: 'link' },
        { id: 'success-criteria', label: 'AI 기능의 성공 조건 정의', type: 'link' },
        { id: 'notebook-to-service', label: 'Notebook과 서비스 코드', type: 'link' },
      ],
    },
  ],
  en: [
    {
      title: 'Getting Started',
      items: [
        { id: 'intro', label: 'Getting Started with LLM Systems', type: 'link' },
        { id: 'software-differences', label: 'LLM Apps vs. Software', type: 'link' },
        { id: 'ai-concepts', label: 'AI, ML, DL, Generative AI', type: 'link' },
        { id: 'when-to-use-llms', label: 'When to (not) use LLMs', type: 'link' },
        { id: 'failure-diagnosis', label: 'Diagnosing AI failures', type: 'link' },
        { id: 'success-criteria', label: 'Defining success criteria', type: 'link' },
        { id: 'notebook-to-service', label: 'Notebook vs. service code', type: 'link' },
      ],
    },
  ],
};

export const sidebarStrings: Record<'ko' | 'en', DocSidebarStrings> = {
  ko: {
    ...commonSidebarStrings.ko,
    title: 'LLM Lab',
    subtitle: '모델에서 시스템까지, LLM 소프트웨어 실험실',
  },
  en: {
    ...commonSidebarStrings.en,
    title: 'LLM Lab',
    subtitle: 'From model to system, an LLM software lab',
  },
};
