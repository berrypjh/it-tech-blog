import { tocOf } from '@it-tech-blog/ui';

export const getToc = tocOf(
  {
    structure: 'carousel-structure',
    rotation: 'rotation-rules',
    practice: 'carousel-practice',
    task: 'final-task',
    summary: 'summary',
    references: 'references',
  },
  {
    ko: {
      structure: '보이는 안내 하나와 그 위치를 알린다',
      rotation: '자동 넘김은 사용자가 시작하고 사용자가 멈춘다',
      practice: '넘김을 시작하고 멈추고 직접 옮기기',
      task: '최종 과업: 행사 안내에 맞는 패턴 조합하기',
      summary: '핵심 요약',
      references: '참고 자료',
    },
    en: {
      structure: 'Convey the one visible guide and its position',
      rotation: 'The user starts rotation and the user stops it',
      practice: 'Starting, stopping, and moving by hand',
      task: 'Final task: combining the patterns that fit an event guide',
      summary: 'Key takeaways',
      references: 'References',
    },
  },
);
