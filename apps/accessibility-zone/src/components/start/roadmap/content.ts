export type RoadmapLocale = 'ko' | 'en';

export type StageStatus = 'done' | 'in-progress' | 'todo';

export type LearningStage = {
  index: number;
  id: string;
  iconId:
    | 'flag'
    | 'code'
    | 'keyboard'
    | 'speaker'
    | 'form'
    | 'cube'
    | 'palette'
    | 'check-list'
    | 'briefcase'
    | 'rocket';
  title: string;
  body: string;
  status: StageStatus;
};

export type RoadmapContent = {
  meta: {
    pageTitle: string;
  };
  hero: {
    title: string;
    subtitle: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    illustrationLabel: string;
    floatingChips: {
      checklist: string;
      thumb: string;
      typography: string;
      grid: string;
    };
    userLabels: {
      wheelchair: string;
      standing: string;
      sitting: string;
    };
  };
  stages: {
    title: string;
    description: string;
    items: LearningStage[];
  };
  finalCta: {
    eyebrow: string;
    title: string;
    body: string;
    primary: string;
    secondary: string;
    ariaPrimary: string;
  };
};

export const roadmapContent: Record<RoadmapLocale, RoadmapContent> = {
  ko: {
    meta: {
      pageTitle: '웹접근성 학습 로드맵 — A11y Lab',
    },
    hero: {
      title: '웹접근성 학습 로드맵',
      subtitle: '기초 개념부터 실무 테스트까지 단계별로 학습하세요',
      description:
        '이 로드맵은 웹접근성의 원리, 사용자 이해, 보조 기술, 실무 적용과 테스트까지 체계적으로 학습할 수 있도록 구성되었습니다.',
      primaryCta: '입문자 코스 보기',
      secondaryCta: '내 학습 시작하기',
      illustrationLabel:
        '굽이치는 학습 경로 위로 깃발과 학습자 3명, 체크리스트·이미지·타이포·갤러리 카드가 떠 있는 일러스트',
      floatingChips: {
        checklist: '체크리스트',
        thumb: '미리보기',
        typography: 'Aa',
        grid: '갤러리',
      },
      userLabels: {
        wheelchair: '휠체어를 사용하며 학습하는 사람',
        standing: '서서 노트북을 보는 학습자',
        sitting: '앉아서 노트북을 보는 학습자',
      },
    },
    stages: {
      title: '전체 학습 단계',
      description: '각 단계를 차근차근 따라가며 웹접근성 전문가가 되어보세요.',
      items: [
        {
          index: 1,
          id: 'intro',
          iconId: 'flag',
          title: '시작하기',
          body: '웹접근성의 개념과 기본 원칙을 이해합니다.',
          status: 'done',
        },
        {
          index: 2,
          id: 'semantic',
          iconId: 'code',
          title: 'HTML / 시맨틱',
          body: '의미 있는 마크업과 시맨틱 구조를 학습합니다.',
          status: 'in-progress',
        },
        {
          index: 3,
          id: 'keyboard',
          iconId: 'keyboard',
          title: '키보드 접근성',
          body: '키보드로 웹을 탐색하고 조작하는 방법을 학습합니다.',
          status: 'todo',
        },
        {
          index: 4,
          id: 'aria',
          iconId: 'speaker',
          title: '스크린 리더 / ARIA',
          body: '스크린 리더 동작 원리와 ARIA 사용법을 학습합니다.',
          status: 'todo',
        },
        {
          index: 5,
          id: 'form',
          iconId: 'form',
          title: '폼 접근성',
          body: '접근 가능한 폼 구조와 오류 처리 방법을 학습합니다.',
          status: 'todo',
        },
        {
          index: 6,
          id: 'components',
          iconId: 'cube',
          title: 'UI 컴포넌트 접근성',
          body: '버튼, 탭, 모달 등 컴포넌트 접근성 패턴을 학습합니다.',
          status: 'todo',
        },
        {
          index: 7,
          id: 'color-media',
          iconId: 'palette',
          title: '색상 / 미디어 접근성',
          body: '색 대비, 이미지 대체 텍스트, 미디어 접근성을 다룹니다.',
          status: 'todo',
        },
        {
          index: 8,
          id: 'testing',
          iconId: 'check-list',
          title: '접근성 테스트',
          body: '자동 검사 도구와 수동 테스트 방법을 학습합니다.',
          status: 'todo',
        },
        {
          index: 9,
          id: 'patterns',
          iconId: 'briefcase',
          title: '실무 패턴',
          body: '현업에서 자주 쓰는 접근성 패턴과 체크 포인트를 익힙니다.',
          status: 'todo',
        },
        {
          index: 10,
          id: 'practice',
          iconId: 'rocket',
          title: '실습',
          body: '종합 실습 프로젝트로 배운 내용을 적용해봅니다.',
          status: 'todo',
        },
      ],
    },
    finalCta: {
      eyebrow: '이제 시작할 준비가 되었어요!',
      title: '함께 더 나은 웹을 만들어가요',
      body: '작은 변화가 모든 사용자의 더 큰 경험으로 이어집니다. 지금 바로 1단계부터 시작해보세요.',
      primary: '시작하기 1단계로 이동 →',
      secondary: '전체 학습맵 저장하기',
      ariaPrimary: '1단계 시작하기 페이지로 이동',
    },
  },
  en: {
    meta: { pageTitle: 'Accessibility learning roadmap — A11y Lab' },
    hero: {
      title: 'Accessibility learning roadmap',
      subtitle: 'From fundamentals to real-world testing, learn step by step',
      description:
        'This roadmap walks you through accessibility principles, user empathy, assistive technology, and practical testing in a structured order.',
      primaryCta: 'See the beginner course',
      secondaryCta: 'Start my learning',
      illustrationLabel:
        'Illustration of a winding learning path with a goal flag, three learners, and floating checklist, image, typography, and gallery cards.',
      floatingChips: {
        checklist: 'Checklist',
        thumb: 'Preview',
        typography: 'Aa',
        grid: 'Gallery',
      },
      userLabels: {
        wheelchair: 'Wheelchair user studying',
        standing: 'Standing learner with a laptop',
        sitting: 'Seated learner with a laptop',
      },
    },
    stages: {
      title: 'All learning stages',
      description: 'Follow each stage one by one and become an accessibility expert.',
      items: [
        {
          index: 1,
          id: 'intro',
          iconId: 'flag',
          title: 'Getting started',
          body: 'Understand the meaning and core principles of web accessibility.',
          status: 'done',
        },
        {
          index: 2,
          id: 'semantic',
          iconId: 'code',
          title: 'HTML / Semantics',
          body: 'Learn meaningful markup and semantic structure.',
          status: 'in-progress',
        },
        {
          index: 3,
          id: 'keyboard',
          iconId: 'keyboard',
          title: 'Keyboard accessibility',
          body: 'Navigate and operate the web using the keyboard.',
          status: 'todo',
        },
        {
          index: 4,
          id: 'aria',
          iconId: 'speaker',
          title: 'Screen reader / ARIA',
          body: 'How screen readers work and how ARIA improves them.',
          status: 'todo',
        },
        {
          index: 5,
          id: 'form',
          iconId: 'form',
          title: 'Form accessibility',
          body: 'Accessible form structure and error handling.',
          status: 'todo',
        },
        {
          index: 6,
          id: 'components',
          iconId: 'cube',
          title: 'UI component accessibility',
          body: 'Accessibility patterns for buttons, tabs, modals, and more.',
          status: 'todo',
        },
        {
          index: 7,
          id: 'color-media',
          iconId: 'palette',
          title: 'Color / Media',
          body: 'Color contrast, alt text, and media accessibility.',
          status: 'todo',
        },
        {
          index: 8,
          id: 'testing',
          iconId: 'check-list',
          title: 'Accessibility testing',
          body: 'Automated tools and manual testing techniques.',
          status: 'todo',
        },
        {
          index: 9,
          id: 'patterns',
          iconId: 'briefcase',
          title: 'Real-world patterns',
          body: 'Patterns and checkpoints used in real production work.',
          status: 'todo',
        },
        {
          index: 10,
          id: 'practice',
          iconId: 'rocket',
          title: 'Practice project',
          body: 'Apply everything in a hands-on capstone project.',
          status: 'todo',
        },
      ],
    },
    finalCta: {
      eyebrow: 'You’re ready to begin!',
      title: 'Let’s build a better web together',
      body: 'Small changes lead to bigger experiences for every user. Start with step 1 now.',
      primary: 'Go to step 1 →',
      secondary: 'Save the full roadmap',
      ariaPrimary: 'Go to the first lesson',
    },
  },
};
