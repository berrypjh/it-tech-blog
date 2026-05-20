import type { Locale } from '@it-tech-blog/preferences';

export type HeroInsight = {
  id: 'question' | 'flow' | 'structure';
  icon: 'question' | 'route' | 'diagram';
  title: string;
  description: string;
  tone: 'sky' | 'teal' | 'violet';
};

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

export type ExplorerOption = {
  id: 'jsx' | 'element' | 'setstate' | 'dom';
  question: string;
  steps: {
    title: string;
    detail: string;
  }[];
};

export type MissionItem = {
  num: string;
  title: string;
  detail: string;
};

export type NotAllFilesContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string[];
    insights: HeroInsight[];
    visual: {
      stackLabel: string;
      fileNames: string[];
      pathLabels: { start: string; question: string; corePath: string; answer: string };
      repoTitle: string;
      repoPackages: { name: string; active?: boolean }[];
    };
  };
  approaches: {
    sectionNum: string;
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
    sectionNum: string;
    title: string;
    cards: QuestionCard[];
  };
  mapping: {
    sectionNum: string;
    title: string;
    rows: MappingRow[];
    labels: { question: string; file: string; fn: string };
  };
  followFlow: {
    sectionNum: string;
    title: string;
    mainQuestion: string;
    steps: FlowStep[];
  };
  miniTool: {
    sectionNum: string;
    title: string;
    selectLabel: string;
    tipLabel: string;
    tipBody: string;
    recommendedTitle: string;
    stepLabels: { file: string; fn: string; next: string; draw: string };
    options: ExplorerOption[];
    defaultOptionId: ExplorerOption['id'];
  };
  mission: {
    sectionNum: string;
    title: string;
    motivation: { title: string[]; body: string[] };
    items: MissionItem[];
    checkboxLabel: string;
  };
  nextStep: {
    sectionNum: string;
    title: string;
    eyebrow: string;
    nextTitle: string;
    description: string;
    cta: string;
    href: string;
  };
};

const koOptions: ExplorerOption[] = [
  {
    id: 'jsx',
    question: 'JSX는 어떻게 React Element가 되는가?',
    steps: [
      { title: 'ReactJSXElement.js 열기', detail: 'packages/react/src/jsx/ReactJSXElement.js' },
      { title: 'jsx / jsxDEV 찾기', detail: '런타임 진입점 함수 위치 확인' },
      { title: 'ReactElement 연결 확인', detail: 'jsx → ReactElement 호출 흐름 추적' },
      { title: 'JSX → Element 흐름을 그려보세요', detail: '자신만의 한 장 다이어그램' },
    ],
  },
  {
    id: 'element',
    question: 'Element는 어떻게 Fiber가 되는가?',
    steps: [
      {
        title: 'ReactChildFiber.js 열기',
        detail: 'packages/react-reconciler/src/ReactChildFiber.js',
      },
      { title: 'reconcileChildFibers 찾기', detail: 'child 재조정 진입점 확인' },
      { title: 'createFiberFromElement 연결 확인', detail: 'ReactFiber.js로 흐름 이동' },
      {
        title: 'Element → Fiber 흐름을 그려보세요',
        detail: '재조정 결과로 어떤 fiber가 생기는지 정리',
      },
    ],
  },
  {
    id: 'setstate',
    question: 'setState는 어떻게 업데이트를 시작하는가?',
    steps: [
      { title: '이 파일을 여세요.', detail: 'ReactFiberHooks.js (코드 위치로 이동)' },
      { title: '이 함수를 찾으세요.', detail: 'dispatchSetState 정의 위치 확인' },
      { title: '다음 함수 흐름을 따라가세요.', detail: 'scheduleUpdateOnFiber 호출 이동' },
      { title: '마지막에 전체 흐름을 그려보세요.', detail: '자신만의 흐름도로 정리' },
    ],
  },
  {
    id: 'dom',
    question: 'DOM은 언제 실제로 바뀌는가?',
    steps: [
      { title: 'ReactFiberWorkLoop.js 열기', detail: 'commit 단계 진입 위치 찾기' },
      { title: 'commitRoot 찾기', detail: '커밋 단계 시작 함수 확인' },
      { title: 'commitMutationEffects 호출 확인', detail: 'ReactFiberCommitWork.js로 흐름 이동' },
      { title: 'DOM 반영 흐름을 그려보세요', detail: '어떤 effect가 언제 적용되는지 정리' },
    ],
  },
];

const enOptions: ExplorerOption[] = [
  {
    id: 'jsx',
    question: 'How does JSX become a React Element?',
    steps: [
      { title: 'Open ReactJSXElement.js', detail: 'packages/react/src/jsx/ReactJSXElement.js' },
      { title: 'Find jsx / jsxDEV', detail: 'Locate the runtime entry function' },
      { title: 'Trace the call to ReactElement', detail: 'Follow jsx → ReactElement' },
      { title: 'Sketch the JSX → Element flow', detail: 'Write your own one-pager diagram' },
    ],
  },
  {
    id: 'element',
    question: 'How does an Element become a Fiber?',
    steps: [
      {
        title: 'Open ReactChildFiber.js',
        detail: 'packages/react-reconciler/src/ReactChildFiber.js',
      },
      { title: 'Find reconcileChildFibers', detail: 'Child reconciliation entry point' },
      { title: 'Trace createFiberFromElement', detail: 'Follow the flow into ReactFiber.js' },
      { title: 'Sketch the Element → Fiber flow', detail: 'Note which fiber is produced and when' },
    ],
  },
  {
    id: 'setstate',
    question: 'How does setState start an update?',
    steps: [
      { title: 'Open this file.', detail: 'ReactFiberHooks.js (jump to source)' },
      { title: 'Find this function.', detail: 'Locate dispatchSetState' },
      { title: 'Follow the next call.', detail: 'Move to scheduleUpdateOnFiber' },
      { title: 'Sketch the whole flow at the end.', detail: 'Draw your own diagram' },
    ],
  },
  {
    id: 'dom',
    question: 'When does the DOM actually change?',
    steps: [
      { title: 'Open ReactFiberWorkLoop.js', detail: 'Find the commit-phase entry' },
      { title: 'Find commitRoot', detail: 'Commit-phase entry function' },
      { title: 'Trace commitMutationEffects', detail: 'Follow into ReactFiberCommitWork.js' },
      { title: 'Sketch the DOM-update flow', detail: 'Which effect applies, and when' },
    ],
  },
];

export const notAllFilesContent: Record<Locale, NotAllFilesContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 5/8단계',
      title: ['React 저장소는', '처음부터 끝까지 읽는 책이 아닙니다.'],
      description: [
        '핵심은 모든 파일을 이해하는 것이 아니라,',
        '내가 가진 질문에 필요한 흐름만 찾아가는 것입니다.',
      ],
      insights: [
        {
          id: 'question',
          icon: 'question',
          tone: 'sky',
          title: '질문 중심',
          description: '필요한 것만 읽기',
        },
        {
          id: 'flow',
          icon: 'route',
          tone: 'teal',
          title: '흐름 추적',
          description: '연관된 함수만 따라가기',
        },
        {
          id: 'structure',
          icon: 'diagram',
          tone: 'violet',
          title: '구조화',
          description: '흐름도로 정리하기',
        },
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
      sectionNum: '02',
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
      sectionNum: '03',
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
      sectionNum: '04',
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
      sectionNum: '05',
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
    miniTool: {
      sectionNum: '06',
      title: '미니 탐색 도구',
      selectLabel: '질문 선택',
      tipLabel: 'TIP',
      tipBody: '질문을 바꾸면 추천 경로가 달라집니다.',
      recommendedTitle: '추천 학습 경로',
      stepLabels: {
        file: '시작 파일',
        fn: '핵심 함수',
        next: '다음 흐름',
        draw: '정리',
      },
      options: koOptions,
      defaultOptionId: 'setstate',
    },
    mission: {
      sectionNum: '07',
      title: '오늘 바로 할 수 있는 10분 미션',
      motivation: {
        title: ['작게 시작해도', '큰 이해로 이어집니다.'],
        body: ['하나의 파일만 제대로 읽어도', 'React 내부가 보이기 시작합니다.'],
      },
      checkboxLabel: '완료',
      items: [
        {
          num: '1',
          title: 'ReactJSXElement.js 열기',
          detail: 'packages/react/src/jsx/ReactJSXElement.js',
        },
        {
          num: '2',
          title: 'ReactElement 함수 찾기',
          detail: 'export function ReactElement(...)',
        },
        {
          num: '3',
          title: 'type / key / props 확인하기',
          detail: 'ReactElement가 가진 필드 구조 파악',
        },
        {
          num: '4',
          title: 'JSX는 DOM이 아니라 설명 객체라는 점을 자기 말로 적기',
          detail: '내가 이해한 내용을 한 문장으로 정리',
        },
      ],
    },
    nextStep: {
      sectionNum: '08',
      title: '다음 단계로 이동하기',
      eyebrow: '다음 학습으로 이어집니다',
      nextTitle: '다음: 먼저 볼 파일과 나중에 볼 파일',
      description: '학습 효율을 높이는 파일 우선순위를 알려드립니다.',
      cta: '다음 페이지로 이동',
      href: '/read-order',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 5/8',
      title: ['The React repo is not', 'a book you read cover to cover.'],
      description: [
        "It isn't about understanding every file —",
        "it's about following the flow your question needs.",
      ],
      insights: [
        {
          id: 'question',
          icon: 'question',
          tone: 'sky',
          title: 'Question-first',
          description: 'Read only what you need',
        },
        {
          id: 'flow',
          icon: 'route',
          tone: 'teal',
          title: 'Trace the flow',
          description: 'Follow only the related functions',
        },
        {
          id: 'structure',
          icon: 'diagram',
          tone: 'violet',
          title: 'Structure it',
          description: 'Sketch a flow diagram',
        },
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
      sectionNum: '02',
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
      sectionNum: '03',
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
      sectionNum: '04',
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
      sectionNum: '05',
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
    miniTool: {
      sectionNum: '06',
      title: 'Mini exploration tool',
      selectLabel: 'Pick a question',
      tipLabel: 'TIP',
      tipBody: 'Switch the question and the recommended path updates.',
      recommendedTitle: 'Recommended learning path',
      stepLabels: { file: 'Start file', fn: 'Key function', next: 'Next flow', draw: 'Wrap up' },
      options: enOptions,
      defaultOptionId: 'setstate',
    },
    mission: {
      sectionNum: '07',
      title: 'A 10-minute mission you can do today',
      motivation: {
        title: ['Start small —', 'the understanding compounds.'],
        body: ['Reading even one file properly', 'starts to reveal React internals.'],
      },
      checkboxLabel: 'Done',
      items: [
        {
          num: '1',
          title: 'Open ReactJSXElement.js',
          detail: 'packages/react/src/jsx/ReactJSXElement.js',
        },
        {
          num: '2',
          title: 'Find the ReactElement function',
          detail: 'export function ReactElement(...)',
        },
        {
          num: '3',
          title: 'Inspect type / key / props',
          detail: 'Understand the fields a ReactElement holds',
        },
        {
          num: '4',
          title: 'Write — in your own words — that JSX is a description object, not DOM',
          detail: 'One sentence on what you learned',
        },
      ],
    },
    nextStep: {
      sectionNum: '08',
      title: 'Move on to the next page',
      eyebrow: 'The journey continues',
      nextTitle: 'Next: Files to read first vs files to read later',
      description: 'Learn the file priority that boosts your learning efficiency.',
      cta: 'Go to the next page',
      href: '/read-order',
    },
  },
};
