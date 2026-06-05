import type { Locale } from '@it-tech-blog/preferences';

import type { Phase } from './tone';

export type HeroFlowStep = {
  label: string;
  caption: string;
  icon: 'profile' | 'shield' | 'update' | 'alert';
  phase: Phase;
};

export type ConceptCard = {
  icon: 'shield' | 'target' | 'update' | 'alert';
  question: string;
  answer: string;
};

export type ErrorPathStep = {
  number: string;
  title: string;
  caption: string;
  phase: Phase;
};

export type CaptureStep = {
  number: string;
  title: string;
  caption: string;
  phase: Phase;
};

export type TreeNode = {
  label: string;
  marker?: string;
  kind: 'app' | 'boundary' | 'card' | 'profile';
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'rose';
};

export type SimulatorScenario = 'normal' | 'error';

export type SimulatorResult = {
  scenario: SimulatorScenario;
  steps: { number: string; title: string; phase: Phase }[];
  resultLabel: string;
  result: string;
  previewKind: 'profile' | 'fallback';
};

export type ErrorBoundaryRecoverContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    description: string;
    code: {
      label: string;
      pill: string;
      fileLabel: string;
      content: string;
    };
    flow: {
      title: string;
      steps: HeroFlowStep[];
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  userCode: {
    number: string;
    title: string;
    code: {
      fileLabel: string;
      content: string;
    };
    fallback: {
      title: string;
      heading: string;
      body: string;
      button: string;
    };
    keypoint: {
      title: string;
      items: string[];
    };
  };
  childThrow: {
    number: string;
    title: string;
    code: {
      fileLabel: string;
      content: string;
    };
    middle: {
      title: string;
      body: string;
    };
    treeTitle: string;
    tree: TreeNode[];
  };
  errorPath: {
    number: string;
    title: string;
    steps: ErrorPathStep[];
  };
  search: {
    number: string;
    title: string;
    tree: TreeNode[];
    rulesTitle: string;
    rules: string[];
  };
  capture: {
    number: string;
    title: string;
    steps: CaptureStep[];
  };
  fallback: {
    number: string;
    title: string;
    before: { title: string; heading: string; body: string };
    transition: {
      title: string;
      block1Title: string;
      block1Body: string;
      block2Title: string;
      block2Body: string;
    };
    after: { title: string; heading: string; body: string };
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    content: string;
    explanationTitle: string;
    explanation: { title: string; body: string }[];
    button: { label: string; href: string };
  };
  simulator: {
    number: string;
    title: string;
    selectorTitle: string;
    options: { scenario: SimulatorScenario; label: string; sublabel: string }[];
    timelineTitle: string;
    results: Record<SimulatorScenario, SimulatorResult>;
  };
  followAlong: {
    number: string;
    title: string;
    items: ChecklistItem[];
  };
  takeaways: {
    number: string;
    title: string;
    cards: TakeawayCard[];
  };
  cta: {
    text: string;
    href: string;
  };
};

const THROW_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const HERO_CODE = `<ErrorBoundary>
  <Profile />
</ErrorBoundary>`;

const BOUNDARY_CODE = `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 다음 렌더에서 fallback UI를 보여준다.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 에러 로깅 등을 처리할 수 있다.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}`;

const BOUNDARY_CODE_EN = `class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Show the fallback UI on the next render.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error here.
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}`;

const PROFILE_CODE = `function Profile() {
  // 렌더링 중 예외 발생
  throw new Error("Profile failed");
}`;

const PROFILE_CODE_EN = `function Profile() {
  // Exception during render
  throw new Error("Profile failed");
}`;

const THROW_CODE = `if (
  typeof ctor.getDerivedStateFromError === "function" ||
  typeof instance.componentDidCatch === "function"
) {
  workInProgress.flags |= ShouldCapture;

  const update = createClassErrorUpdate(lane);

  initializeClassErrorUpdate(update, root, workInProgress, errorInfo);

  enqueueCapturedUpdate(workInProgress, update);
}`;

const ko: ErrorBoundaryRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 5/10단계',
    titleLines: ['Error Boundary는', '렌더링 에러를 어떻게', '붙잡고 복구할까?'],
    description:
      'React는 실패한 자식 트리를 버리고, 가장 가까운 복구 경계를 기준으로 fallback UI를 다시 렌더링합니다.',
    code: {
      label: 'ErrorBoundary 사용 예시',
      pill: 'JSX',
      fileLabel: 'App.jsx',
      content: HERO_CODE,
    },
    flow: {
      title: '한눈에 보는 흐름',
      steps: [
        { label: 'Profile', caption: '렌더링 중 에러 발생', icon: 'profile', phase: 'error' },
        { label: 'Error Boundary', caption: '찾아 capture', icon: 'shield', phase: 'boundary' },
        { label: 'captured update', caption: '등록', icon: 'update', phase: 'update' },
        { label: 'fallback UI', caption: '다시 렌더링', icon: 'alert', phase: 'recover' },
      ],
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question:
      '자식 컴포넌트가 render 중 에러를 던지면 React는 어디까지 올라가 어떤 Boundary를 선택할까?',
    concepts: [
      { icon: 'shield', question: '어디까지 올라갈까?', answer: '가장 가까운 Boundary까지' },
      { icon: 'target', question: '어떤 조건으로 선택?', answer: 'Error Boundary 여부' },
      { icon: 'update', question: '어떤 업데이트를 남길까?', answer: 'captured update 등록' },
      { icon: 'alert', question: '결과는 무엇일까?', answer: 'fallback UI 렌더링' },
    ],
  },
  userCode: {
    number: '2',
    title: 'Error Boundary 사용자 코드',
    code: { fileLabel: 'ErrorBoundary.jsx', content: BOUNDARY_CODE },
    fallback: {
      title: 'Fallback UI 예시',
      heading: '문제가 발생했습니다',
      body: '잠시 후 다시 시도해주세요.',
      button: '새로고침',
    },
    keypoint: {
      title: '핵심 포인트',
      items: [
        'getDerivedStateFromError → 렌더 단계에서 상태 전환',
        'componentDidCatch → 커밋 단계에서 사이드이펙트',
        'hasError가 true가 되면 fallback UI 렌더링',
      ],
    },
  },
  childThrow: {
    number: '3',
    title: '자식 컴포넌트에서 Error throw',
    code: { fileLabel: 'Profile.jsx', content: PROFILE_CODE },
    middle: {
      title: 'render 중 throw 발생',
      body: 'Profile 렌더링이 완료되지 못하고 throwException 흐름으로 이동합니다.',
    },
    treeTitle: '트리 위치 예시',
    tree: [
      { label: '<App />', kind: 'app' },
      { label: '<ErrorBoundary />', kind: 'boundary' },
      { label: '<Card />', kind: 'card' },
      { label: '<Profile />', marker: '❌  예외 포착', kind: 'profile' },
    ],
  },
  errorPath: {
    number: '4',
    title: 'Error path로 진입',
    steps: [
      { number: '1', title: 'Profile render 시작', caption: '컴포넌트 진입', phase: 'boundary' },
      { number: '2', title: 'Error throw', caption: '예외 발생', phase: 'error' },
      { number: '3', title: 'throwException 호출', caption: '에러 흐름 진입', phase: 'error' },
      { number: '4', title: 'regular error path', caption: 'thenable 아님', phase: 'error' },
      { number: '5', title: 'Boundary 탐색 시작', caption: '부모 경로 위로', phase: 'boundary' },
    ],
  },
  search: {
    number: '5',
    title: '부모 경로에서 Boundary 탐색 (위로 이동)',
    tree: [
      { label: '<App />', marker: 'root 컴포넌트', kind: 'app' },
      { label: '<ErrorBoundary />', marker: 'Error Boundary ✅', kind: 'boundary' },
      { label: '<Card />', marker: '일반 컴포넌트', kind: 'card' },
      { label: '<Profile />', marker: '에러 발생 위치 ❌', kind: 'profile' },
    ],
    rulesTitle: '탐색 규칙',
    rules: [
      '위로 올라가며 Error Boundary 여부를 검사',
      'getDerivedStateFromError 또는 componentDidCatch가 있으면 Boundary로 선택',
      '없으면 계속 위로 이동',
    ],
  },
  capture: {
    number: '6',
    title: 'ShouldCapture와 captured update',
    steps: [
      {
        number: '1',
        title: 'Error Boundary Fiber',
        caption: '선택된 Boundary',
        phase: 'boundary',
      },
      {
        number: '2',
        title: 'ShouldCapture flag 설정',
        caption: '이 Boundary가 capture 대상임을 표시',
        phase: 'boundary',
      },
      {
        number: '3',
        title: 'createClassErrorUpdate',
        caption: '경계 상태 전환을 위한 update 생성',
        phase: 'update',
      },
      {
        number: '4',
        title: 'enqueueCapturedUpdate',
        caption: 'Boundary의 updateQueue에 등록',
        phase: 'recover',
      },
    ],
  },
  fallback: {
    number: '7',
    title: 'fallback 재렌더 (Before → After)',
    before: {
      title: 'Before · 에러 발생 전',
      heading: 'Profile UI',
      body: '정상적으로 렌더링 중...',
    },
    transition: {
      title: 'Boundary state 갱신',
      block1Title: 'getDerivedStateFromError',
      block1Body: '→ { hasError: true }',
      block2Title: 'update enqueue',
      block2Body: '→ 다음 렌더에서 fallback 분기',
    },
    after: {
      title: 'After · 에러 발생 후',
      heading: 'Fallback UI',
      body: 'ErrorBoundary가 대체 UI를 렌더링합니다.',
    },
  },
  code: {
    number: '8',
    title: '실제 코드 미리보기 (ReactFiberThrow.js)',
    fileLabel: 'ReactFiberThrow.js',
    content: THROW_CODE,
    explanationTitle: '코드 설명',
    explanation: [
      {
        title: 'Error Boundary 조건 확인',
        body: 'getDerivedStateFromError 또는 componentDidCatch 존재 여부',
      },
      {
        title: 'ShouldCapture flag 설정',
        body: '이 Boundary가 capture 대상임을 표시',
      },
      {
        title: 'class error update 생성/초기화',
        body: 'Boundary 상태를 fallback으로 전환할 update 생성',
      },
      {
        title: 'captured update enqueue',
        body: '이후 렌더에서 이 update가 처리되어 fallback UI가 렌더링됩니다.',
      },
    ],
    button: { label: 'GitHub에서 코드 보기', href: THROW_URL },
  },
  simulator: {
    number: '9',
    title: 'Error Boundary 복구 시뮬레이터',
    selectorTitle: '시나리오 선택',
    options: [
      { scenario: 'normal', label: '정상 렌더', sublabel: '예외 없음' },
      { scenario: 'error', label: '자식 Error throw', sublabel: '에러 발생' },
    ],
    timelineTitle: '실행 결과 타임라인',
    results: {
      normal: {
        scenario: 'normal',
        steps: [
          { number: '1', title: 'Render 시작', phase: 'boundary' },
          { number: '2', title: '자식 렌더', phase: 'boundary' },
          { number: '3', title: '에러 없음', phase: 'recover' },
          { number: '4', title: '정상 UI 커밋', phase: 'recover' },
        ],
        resultLabel: '현재 결과',
        result: 'Profile UI가 정상적으로 렌더링되었습니다.',
        previewKind: 'profile',
      },
      error: {
        scenario: 'error',
        steps: [
          { number: '1', title: 'Render 시작', phase: 'boundary' },
          { number: '2', title: '자식 렌더', phase: 'boundary' },
          { number: '3', title: '에러 발생', phase: 'error' },
          { number: '4', title: 'Boundary capture', phase: 'boundary' },
          { number: '5', title: 'fallback 렌더', phase: 'update' },
          { number: '6', title: '복구 완료', phase: 'recover' },
        ],
        resultLabel: '현재 결과',
        result: 'ErrorBoundary가 에러를 붙잡아 fallback UI를 렌더링했습니다.',
        previewKind: 'fallback',
      },
    },
  },
  followAlong: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'React 공식 문서 확인',
        description: 'Error Boundary 사용법과 lifecycle을 먼저 확인합니다.',
      },
      {
        title: 'ReactFiberThrow.js 열기',
        description: 'ClassComponent case에서 error path를 확인합니다.',
      },
      {
        title: 'ShouldCapture flag 확인',
        description: 'ShouldCapture가 설정되는 지점을 코드에서 찾습니다.',
      },
      {
        title: 'createClassErrorUpdate 흐름 확인',
        description: 'update 생성/초기화/enqueue까지 연결해 봅니다.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: '일반 render error는 Error Boundary 경로로 간다.',
        body: 'thenable이 아니면 regular error path를 따라 Boundary를 탐색합니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'React는 가장 가까운 Boundary를 찾아 captured update를 등록한다.',
        body: 'ShouldCapture flag와 update enqueue를 통해 fallback 렌더를 준비합니다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: '그 결과 fallback UI가 다시 렌더링된다.',
        body: 'Boundary state가 갱신되어 다음 렌더에서 fallback 분기가 실행됩니다.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: '다음: React 19의 Error Reporting',
    href: '/react-19-error-reporting',
  },
};

const en: ErrorBoundaryRecoverContent = {
  hero: {
    badge: 'Suspense·Error · 5/10',
    titleLines: ['How does an Error Boundary', 'catch and recover', 'render errors?'],
    description:
      'React drops the failed child tree and re-renders the fallback UI based on the nearest recovery boundary.',
    code: {
      label: 'ErrorBoundary usage',
      pill: 'JSX',
      fileLabel: 'App.jsx',
      content: HERO_CODE,
    },
    flow: {
      title: 'The flow at a glance',
      steps: [
        { label: 'Profile', caption: 'Error during render', icon: 'profile', phase: 'error' },
        { label: 'Error Boundary', caption: 'Find and capture', icon: 'shield', phase: 'boundary' },
        { label: 'captured update', caption: 'Enqueued', icon: 'update', phase: 'update' },
        { label: 'fallback UI', caption: 'Re-rendered', icon: 'alert', phase: 'recover' },
      ],
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'When a child component throws during render, how far up does React walk and which Boundary does it pick?',
    concepts: [
      { icon: 'shield', question: 'How far up?', answer: 'Up to the nearest Boundary' },
      { icon: 'target', question: 'How is it picked?', answer: 'By being an Error Boundary' },
      { icon: 'update', question: 'What update is left?', answer: 'A captured update is enqueued' },
      { icon: 'alert', question: 'What is the result?', answer: 'The fallback UI is rendered' },
    ],
  },
  userCode: {
    number: '2',
    title: 'Error Boundary user code',
    code: { fileLabel: 'ErrorBoundary.jsx', content: BOUNDARY_CODE_EN },
    fallback: {
      title: 'Fallback UI example',
      heading: 'Something went wrong',
      body: 'Please try again in a moment.',
      button: 'Reload',
    },
    keypoint: {
      title: 'Key points',
      items: [
        'getDerivedStateFromError → state transition during render',
        'componentDidCatch → side effects during commit',
        'When hasError is true, the fallback UI is rendered',
      ],
    },
  },
  childThrow: {
    number: '3',
    title: 'A child component throws',
    code: { fileLabel: 'Profile.jsx', content: PROFILE_CODE_EN },
    middle: {
      title: 'Throw happens during render',
      body: 'Profile cannot finish rendering and moves into the throwException flow.',
    },
    treeTitle: 'Tree position example',
    tree: [
      { label: '<App />', kind: 'app' },
      { label: '<ErrorBoundary />', kind: 'boundary' },
      { label: '<Card />', kind: 'card' },
      { label: '<Profile />', marker: '❌  exception thrown', kind: 'profile' },
    ],
  },
  errorPath: {
    number: '4',
    title: 'Entering the Error path',
    steps: [
      {
        number: '1',
        title: 'Profile render starts',
        caption: 'Component enters',
        phase: 'boundary',
      },
      { number: '2', title: 'Error throw', caption: 'Exception happens', phase: 'error' },
      { number: '3', title: 'throwException called', caption: 'Error flow begins', phase: 'error' },
      { number: '4', title: 'regular error path', caption: 'Not a thenable', phase: 'error' },
      {
        number: '5',
        title: 'Boundary search starts',
        caption: 'Walk up the parent path',
        phase: 'boundary',
      },
    ],
  },
  search: {
    number: '5',
    title: 'Find a Boundary on the parent path (walk upward)',
    tree: [
      { label: '<App />', marker: 'root component', kind: 'app' },
      { label: '<ErrorBoundary />', marker: 'Error Boundary ✅', kind: 'boundary' },
      { label: '<Card />', marker: 'regular component', kind: 'card' },
      { label: '<Profile />', marker: 'throw site ❌', kind: 'profile' },
    ],
    rulesTitle: 'Search rules',
    rules: [
      'Walk upward and check whether each ancestor is an Error Boundary',
      'If getDerivedStateFromError or componentDidCatch exists, pick it as the Boundary',
      'If not, keep walking upward',
    ],
  },
  capture: {
    number: '6',
    title: 'ShouldCapture and captured update',
    steps: [
      {
        number: '1',
        title: 'Error Boundary Fiber',
        caption: 'The selected Boundary',
        phase: 'boundary',
      },
      {
        number: '2',
        title: 'Set ShouldCapture flag',
        caption: 'Mark this boundary as a capture target',
        phase: 'boundary',
      },
      {
        number: '3',
        title: 'createClassErrorUpdate',
        caption: 'Create an update for the boundary state transition',
        phase: 'update',
      },
      {
        number: '4',
        title: 'enqueueCapturedUpdate',
        caption: "Register on the Boundary's updateQueue",
        phase: 'recover',
      },
    ],
  },
  fallback: {
    number: '7',
    title: 'Fallback re-render (Before → After)',
    before: {
      title: 'Before · before the error',
      heading: 'Profile UI',
      body: 'Rendering normally...',
    },
    transition: {
      title: 'Boundary state updates',
      block1Title: 'getDerivedStateFromError',
      block1Body: '→ { hasError: true }',
      block2Title: 'update enqueue',
      block2Body: '→ next render takes the fallback branch',
    },
    after: {
      title: 'After · after the error',
      heading: 'Fallback UI',
      body: 'ErrorBoundary renders the replacement UI.',
    },
  },
  code: {
    number: '8',
    title: 'Source code preview (ReactFiberThrow.js)',
    fileLabel: 'ReactFiberThrow.js',
    content: THROW_CODE,
    explanationTitle: 'Code explanation',
    explanation: [
      {
        title: 'Check Error Boundary condition',
        body: 'Whether getDerivedStateFromError or componentDidCatch exists',
      },
      {
        title: 'Set ShouldCapture flag',
        body: 'Mark this boundary as a capture target',
      },
      {
        title: 'Create / initialize class error update',
        body: 'Build the update that switches the boundary state to fallback',
      },
      {
        title: 'Enqueue captured update',
        body: 'Later renders process this update and render the fallback UI.',
      },
    ],
    button: { label: 'View source on GitHub', href: THROW_URL },
  },
  simulator: {
    number: '9',
    title: 'Error Boundary recovery simulator',
    selectorTitle: 'Pick a scenario',
    options: [
      { scenario: 'normal', label: 'Normal render', sublabel: 'no exception' },
      { scenario: 'error', label: 'Child error throw', sublabel: 'an error happens' },
    ],
    timelineTitle: 'Execution timeline',
    results: {
      normal: {
        scenario: 'normal',
        steps: [
          { number: '1', title: 'Render starts', phase: 'boundary' },
          { number: '2', title: 'Children render', phase: 'boundary' },
          { number: '3', title: 'No error', phase: 'recover' },
          { number: '4', title: 'Commit normal UI', phase: 'recover' },
        ],
        resultLabel: 'Current result',
        result: 'Profile UI rendered normally.',
        previewKind: 'profile',
      },
      error: {
        scenario: 'error',
        steps: [
          { number: '1', title: 'Render starts', phase: 'boundary' },
          { number: '2', title: 'Children render', phase: 'boundary' },
          { number: '3', title: 'Error happens', phase: 'error' },
          { number: '4', title: 'Boundary captures', phase: 'boundary' },
          { number: '5', title: 'Fallback renders', phase: 'update' },
          { number: '6', title: 'Recovery complete', phase: 'recover' },
        ],
        resultLabel: 'Current result',
        result: 'ErrorBoundary caught the error and rendered the fallback UI.',
        previewKind: 'fallback',
      },
    },
  },
  followAlong: {
    number: '10',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Read the React docs',
        description: 'Read the Error Boundary usage and lifecycle first.',
      },
      {
        title: 'Open ReactFiberThrow.js',
        description: 'Find the ClassComponent case in the error path.',
      },
      {
        title: 'Find the ShouldCapture flag',
        description: 'Locate where ShouldCapture is set in the source.',
      },
      {
        title: 'Follow createClassErrorUpdate',
        description: 'Trace create / initialize / enqueue end to end.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'Regular render errors flow down the Error Boundary path.',
        body: 'If the value is not a thenable, the regular error path searches for a Boundary.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'React finds the nearest Boundary and enqueues a captured update.',
        body: 'ShouldCapture and update enqueue prepare the fallback render.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'As a result, the fallback UI is rendered again.',
        body: 'The boundary state updates and the next render takes the fallback branch.',
        tone: 'rose',
      },
    ],
  },
  cta: {
    text: "Next: React 19's Error Reporting",
    href: '/react-19-error-reporting',
  },
};

export const errorBoundaryRecoverContent: Record<Locale, ErrorBoundaryRecoverContent> = {
  ko,
  en,
};
