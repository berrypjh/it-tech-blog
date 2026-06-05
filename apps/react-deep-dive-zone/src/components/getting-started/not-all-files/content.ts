import type { Locale } from '@it-tech-blog/preferences';

export type ApproachItem = {
  num: string;
  icon: 'x' | 'open' | 'brain' | 'check' | 'pin' | 'route' | 'pencil';
  title: string;
  description: string;
};

export type QuestionCard = {
  id: 'jsx' | 'element' | 'setstate' | 'dom';
  icon: 'code' | 'cube' | 'bolt' | 'monitor';
  tone: 'blue' | 'lavender' | 'mint' | 'coral';
  title: string[];
  tags: string[];
};

export type MappingRow = {
  id: 'jsx' | 'element' | 'setstate' | 'dom';
  tone: 'blue' | 'lavender' | 'mint' | 'coral';
  question: string;
  file1: string;
  fn1: string;
  file2: string;
  fn2: string;
};

export type FlowStep = {
  num: string;
  icon: 'hook' | 'fx' | 'database' | 'clock' | 'cube' | 'check';
  tone: 'sky' | 'blue' | 'indigo' | 'violet' | 'mint' | 'teal';
  title: string;
  description: string;
};

export type NotAllFilesContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    visual: {
      stackLabel: string;
      fileNames: string[];
      pathLabels: { start: string; question: string; corePath: string; answer: string };
      repoTitle: string;
      repoPackages: { name: string; active?: boolean }[];
    };
  };
  approaches: {
    eyebrow: string;
    title: string;
    wrong: {
      title: string;
      items: ApproachItem[];
    };
    good: {
      title: string;
      items: ApproachItem[];
    };
  };
  questions: {
    eyebrow: string;
    title: string;
    cards: QuestionCard[];
  };
  mapping: {
    eyebrow: string;
    title: string;
    rows: MappingRow[];
    labels: { question: string; file: string; fn: string };
  };
  followFlow: {
    eyebrow: string;
    title: string;
    mainQuestion: string;
    steps: FlowStep[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const notAllFilesContent: Record<Locale, NotAllFilesContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 5/6단계',
      title: ['React 저장소는', '처음부터 끝까지 읽는 책이 아닙니다.'],
      description: [
        '핵심은 모든 파일을 이해하는 것이 아니라,',
        '내가 가진 질문에 필요한 흐름만 찾아가는 것입니다.',
      ],
      visual: {
        stackLabel: 'noisy/files',
        fileNames: [
          'ReactRoot...',
          'ReactFiberLane.js',
          'ReactFiber...',
          'ReactFizzServer.js',
          'ReactHookForm.js',
          'ReactTestUtils.js',
        ],
        pathLabels: {
          start: 'Start',
          question: '질문',
          corePath: '핵심 경로',
          answer: 'Answer',
        },
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
      },
    },
    approaches: {
      eyebrow: '01 · compare',
      title: '잘못된 접근 vs 좋은 접근',
      wrong: {
        title: '잘못된 접근',
        items: [
          {
            num: '1',
            icon: 'open',
            title: 'packages부터 순서대로 모두 읽기',
            description: '너무 방대해서 금방 지치게 됩니다.',
          },
          {
            num: '2',
            icon: 'x',
            title: '파일명을 보고 무작정 열기',
            description: '맥락 없이 읽으면 이해가 더 어렵습니다.',
          },
          {
            num: '3',
            icon: 'brain',
            title: '한 번에 전체를 외우려 하기',
            description: '모두를 기억할 필요는 없습니다.',
          },
        ],
      },
      good: {
        title: '좋은 접근',
        items: [
          {
            num: '1',
            icon: 'check',
            title: '질문 정하기',
            description: '내가 궁금한 것을 먼저 정의합니다.',
          },
          {
            num: '2',
            icon: 'pin',
            title: '진입 파일 찾기',
            description: '질문과 관련된 시작점을 찾습니다.',
          },
          {
            num: '3',
            icon: 'route',
            title: '관련 함수만 따라가기',
            description: '흐름을 파악할 때 필요한 부분만 읽습니다.',
          },
          {
            num: '4',
            icon: 'pencil',
            title: '흐름도로 재정리하기',
            description: '이해한 내용을 스스로 정리하며 완성합니다.',
          },
        ],
      },
    },
    questions: {
      eyebrow: '02 · question-first',
      title: '질문 중심 독해법',
      cards: [
        {
          id: 'jsx',
          icon: 'code',
          tone: 'blue',
          title: ['JSX는 어떻게', 'React Element가 되는가?'],
          tags: ['ReactJSXElement.js', 'ReactElement.js'],
        },
        {
          id: 'element',
          icon: 'cube',
          tone: 'lavender',
          title: ['Element는 어떻게', 'Fiber가 되는가?'],
          tags: ['ReactFiber.js', 'ReactChildFiber.js'],
        },
        {
          id: 'setstate',
          icon: 'bolt',
          tone: 'mint',
          title: ['setState는 어떻게', '업데이트를 시작하는가?'],
          tags: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
        },
        {
          id: 'dom',
          icon: 'monitor',
          tone: 'coral',
          title: ['DOM은 언제', '실제로 바뀌는가?'],
          tags: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
        },
      ],
    },
    mapping: {
      eyebrow: '03 · mapping',
      title: '질문 → 파일 → 핵심 함수 매핑',
      labels: { question: '질문', file: '파일', fn: '함수' },
      rows: [
        {
          id: 'jsx',
          tone: 'blue',
          question: 'JSX는 어떻게 React Element가 되는가?',
          file1: 'ReactJSXElement.js',
          fn1: 'jsx / jsxDEV',
          file2: 'ReactElement.js',
          fn2: 'ReactElement',
        },
        {
          id: 'element',
          tone: 'lavender',
          question: 'Element는 어떻게 Fiber가 되는가?',
          file1: 'ReactChildFiber.js',
          fn1: 'reconcileChildFibers',
          file2: 'ReactFiber.js',
          fn2: 'createFiberFromElement',
        },
        {
          id: 'setstate',
          tone: 'mint',
          question: 'setState는 어떻게 업데이트를 시작하는가?',
          file1: 'ReactFiberHooks.js',
          fn1: 'dispatchSetState',
          file2: 'ReactFiberWorkLoop.js',
          fn2: 'scheduleUpdateOnFiber',
        },
        {
          id: 'dom',
          tone: 'coral',
          question: 'DOM은 언제 실제로 바뀌는가?',
          file1: 'ReactFiberWorkLoop.js',
          fn1: 'commitRoot',
          file2: 'ReactFiberCommitWork.js',
          fn2: 'commitMutationEffects',
        },
      ],
    },
    followFlow: {
      eyebrow: '04 · follow flow',
      title: '한 질문을 실제로 따라가 보기',
      mainQuestion: 'setState는 어떻게 렌더링으로 이어지는가?',
      steps: [
        { num: '1', icon: 'hook', tone: 'sky', title: 'useState', description: '상태 훅 생성' },
        {
          num: '2',
          icon: 'fx',
          tone: 'blue',
          title: 'dispatchSetState',
          description: '업데이트 요청',
        },
        {
          num: '3',
          icon: 'database',
          tone: 'indigo',
          title: 'update 생성',
          description: 'Update 객체 생성 및 Queue에 저장',
        },
        {
          num: '4',
          icon: 'clock',
          tone: 'violet',
          title: 'scheduleUpdateOnFiber',
          description: '스케줄링 시작',
        },
        {
          num: '5',
          icon: 'cube',
          tone: 'mint',
          title: 'render',
          description: 'Fiber 트리 계산 (Reconciliation)',
        },
        {
          num: '6',
          icon: 'check',
          tone: 'teal',
          title: 'commit',
          description: 'DOM에 실제 반영',
        },
      ],
    },
    nextStep: {
      eyebrow: '학습 로드맵이 이어집니다',
      title: '다음: React 소스코드 탐구 로드맵',
      description: '단계별 학습 로드맵과 구체적인 학습 계획을 확인하세요.',
      cta: '다음 페이지로 이동',
      href: '/roadmap',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 5/6',
      title: ['The React repo is not', 'a book you read cover to cover.'],
      description: [
        "It isn't about understanding every file —",
        "it's about following the flow your question needs.",
      ],
      visual: {
        stackLabel: 'noisy/files',
        fileNames: [
          'ReactRoot...',
          'ReactFiberLane.js',
          'ReactFiber...',
          'ReactFizzServer.js',
          'ReactHookForm.js',
          'ReactTestUtils.js',
        ],
        pathLabels: {
          start: 'Start',
          question: 'Question',
          corePath: 'Core path',
          answer: 'Answer',
        },
        repoTitle: 'facebook / react',
        repoPackages: [
          { name: 'react' },
          { name: 'react-dom' },
          { name: 'react-reconciler', active: true },
          { name: 'scheduler' },
          { name: 'shared' },
        ],
      },
    },
    approaches: {
      eyebrow: '01 · compare',
      title: 'Wrong approach vs Good approach',
      wrong: {
        title: 'Wrong approach',
        items: [
          {
            num: '1',
            icon: 'open',
            title: 'Read every package in order',
            description: 'Too vast — you burn out quickly.',
          },
          {
            num: '2',
            icon: 'x',
            title: 'Open files by filename alone',
            description: 'Without context it gets harder, not easier.',
          },
          {
            num: '3',
            icon: 'brain',
            title: 'Try to memorize it all at once',
            description: "You don't have to remember everything.",
          },
        ],
      },
      good: {
        title: 'Good approach',
        items: [
          {
            num: '1',
            icon: 'check',
            title: 'Pick a question',
            description: 'Define what you actually want to know.',
          },
          {
            num: '2',
            icon: 'pin',
            title: 'Find the entry file',
            description: 'Locate the starting point for that question.',
          },
          {
            num: '3',
            icon: 'route',
            title: 'Follow only related functions',
            description: 'Read only what the flow needs.',
          },
          {
            num: '4',
            icon: 'pencil',
            title: 'Redraw the flow yourself',
            description: 'Consolidate what you learned in your own diagram.',
          },
        ],
      },
    },
    questions: {
      eyebrow: '02 · question-first',
      title: 'Question-first reading',
      cards: [
        {
          id: 'jsx',
          icon: 'code',
          tone: 'blue',
          title: ['How does JSX become', 'a React Element?'],
          tags: ['ReactJSXElement.js', 'ReactElement.js'],
        },
        {
          id: 'element',
          icon: 'cube',
          tone: 'lavender',
          title: ['How does an Element', 'become a Fiber?'],
          tags: ['ReactFiber.js', 'ReactChildFiber.js'],
        },
        {
          id: 'setstate',
          icon: 'bolt',
          tone: 'mint',
          title: ['How does setState', 'start an update?'],
          tags: ['ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
        },
        {
          id: 'dom',
          icon: 'monitor',
          tone: 'coral',
          title: ['When does the DOM', 'actually change?'],
          tags: ['ReactFiberWorkLoop.js', 'ReactFiberCommitWork.js'],
        },
      ],
    },
    mapping: {
      eyebrow: '03 · mapping',
      title: 'Question → File → Key function mapping',
      labels: { question: 'Question', file: 'File', fn: 'Function' },
      rows: [
        {
          id: 'jsx',
          tone: 'blue',
          question: 'How does JSX become a React Element?',
          file1: 'ReactJSXElement.js',
          fn1: 'jsx / jsxDEV',
          file2: 'ReactElement.js',
          fn2: 'ReactElement',
        },
        {
          id: 'element',
          tone: 'lavender',
          question: 'How does an Element become a Fiber?',
          file1: 'ReactChildFiber.js',
          fn1: 'reconcileChildFibers',
          file2: 'ReactFiber.js',
          fn2: 'createFiberFromElement',
        },
        {
          id: 'setstate',
          tone: 'mint',
          question: 'How does setState start an update?',
          file1: 'ReactFiberHooks.js',
          fn1: 'dispatchSetState',
          file2: 'ReactFiberWorkLoop.js',
          fn2: 'scheduleUpdateOnFiber',
        },
        {
          id: 'dom',
          tone: 'coral',
          question: 'When does the DOM actually change?',
          file1: 'ReactFiberWorkLoop.js',
          fn1: 'commitRoot',
          file2: 'ReactFiberCommitWork.js',
          fn2: 'commitMutationEffects',
        },
      ],
    },
    followFlow: {
      eyebrow: '04 · follow flow',
      title: 'Follow one question end-to-end',
      mainQuestion: 'How does setState end up triggering a render?',
      steps: [
        {
          num: '1',
          icon: 'hook',
          tone: 'sky',
          title: 'useState',
          description: 'Create the state hook',
        },
        {
          num: '2',
          icon: 'fx',
          tone: 'blue',
          title: 'dispatchSetState',
          description: 'Request an update',
        },
        {
          num: '3',
          icon: 'database',
          tone: 'indigo',
          title: 'Create update',
          description: 'Build the Update object and enqueue',
        },
        {
          num: '4',
          icon: 'clock',
          tone: 'violet',
          title: 'scheduleUpdateOnFiber',
          description: 'Begin scheduling',
        },
        {
          num: '5',
          icon: 'cube',
          tone: 'mint',
          title: 'render',
          description: 'Compute the fiber tree (Reconciliation)',
        },
        { num: '6', icon: 'check', tone: 'teal', title: 'commit', description: 'Apply to the DOM' },
      ],
    },
    nextStep: {
      eyebrow: 'The learning roadmap continues',
      title: 'Next: React source-code exploration roadmap',
      description: 'See the step-by-step roadmap and a concrete study plan.',
      cta: 'Go to the next page',
      href: '/roadmap',
    },
  },
};
