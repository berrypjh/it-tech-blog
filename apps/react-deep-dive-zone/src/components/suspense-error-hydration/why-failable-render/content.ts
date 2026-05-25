import type { Locale } from '@it-tech-blog/preferences';

export type Tone = 'blue' | 'red' | 'green' | 'purple' | 'cyan' | 'emerald' | 'rose' | 'violet';

export type BranchKind = 'suspense' | 'error' | 'hydration';

export type FlowStep = { label: string };

export type BranchCard = {
  kind: BranchKind;
  label: string;
  title: string;
  steps: FlowStep[];
  caption: string;
};

export type ComparisonRow = {
  label: string;
  suspense: string;
  error: string;
  hydration: string;
};

export type FlowMapRow = {
  kind: BranchKind;
  label: string;
  sublabel: string;
  steps: FlowStep[];
  endStateLabel: string;
};

export type FileCard = {
  kind: BranchKind | 'mixed';
  fileName: string;
  role: string;
  code: string;
  href: string;
};

export type RecoveryOptionKey = 'promise' | 'error' | 'mismatch';

export type RecoveryOption = {
  key: RecoveryOptionKey;
  label: string;
  description: string;
};

export type RecoveryResult = {
  selectedLabel: string;
  resultTitle: string;
  description: string;
  timeline: string[];
  relatedFiles: string[];
  experience: string;
  kind: BranchKind;
};

export type ChecklistItem = { label: string; codeExample: string };

export type TakeawayCard = { number: string; title: string; body: string; tone: Tone };

export type WhyFailableRenderContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    illustration: {
      backCardLabel: string;
      frontCardLabel: string;
      reactBadgeLabel: string;
      pendingBadge: string;
      retryBadge: string;
      recoverBadge: string;
    };
  };
  flows: {
    eyebrow: string;
    normal: {
      title: string;
      steps: FlowStep[];
      captionLines: string[];
      pill: string;
    };
    extended: {
      title: string;
      steps: { label: string; tone: Tone }[];
      captionLines: string[];
      pill: string;
    };
  };
  question: {
    eyebrow: string;
    title: string;
    question: string;
    badges: { label: string; tone: Tone }[];
  };
  normalRender: {
    title: string;
    steps: FlowStep[];
    caption: string;
  };
  threeBranches: {
    eyebrow: string;
    title: string;
    description: string;
    rootLabel: string;
    rootSublabel: string;
    branches: BranchCard[];
  };
  comparison: {
    eyebrow: string;
    title: string;
    columns: { label: string; sub: string; kind: BranchKind }[];
    rowsHeader: string;
    rows: ComparisonRow[];
  };
  flowMap: {
    eyebrow: string;
    title: string;
    description: string;
    rows: FlowMapRow[];
  };
  codeEntry: {
    eyebrow: string;
    title: string;
    description: string;
    files: FileCard[];
    buttonLabel: string;
  };
  selector: {
    eyebrow: string;
    title: string;
    description: string;
    selectedBadge: string;
    resultBadge: string;
    timelineLabel: string;
    relatedFilesLabel: string;
    experienceLabel: string;
    options: RecoveryOption[];
    results: Record<RecoveryOptionKey, RecoveryResult>;
  };
  followAlong: {
    eyebrow: string;
    title: string;
    illustrationLabel: string;
    items: ChecklistItem[];
  };
  takeaways: {
    eyebrow: string;
    title: string;
    cards: TakeawayCard[];
  };
  cta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    goalsLabel: string;
    goals: string[];
  };
};

const REACT_REPO = 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src';
const THENABLE_URL = `${REACT_REPO}/ReactFiberThenable.js`;
const THROW_URL = `${REACT_REPO}/ReactFiberThrow.js`;
const SUSPENSE_URL = `${REACT_REPO}/ReactFiberSuspenseComponent.js`;
const HYDRATION_URL = `${REACT_REPO}/ReactFiberHydrationContext.js`;

const ko: WhyFailableRenderContent = {
  hero: {
    badge: 'React 렌더링 심화 시리즈 · Suspense / Error / Hydration',
    titleLines: ['정상 렌더링만 이해하면', 'React의 절반만 이해한 것이다'],
    description:
      'React는 UI가 한 번에 완성되지 않아도 대기, 실패, 복구, 재시도 흐름을 렌더링 모델 안에서 처리합니다.',
    illustration: {
      backCardLabel: 'App.tsx',
      frontCardLabel: '<Suspense />',
      reactBadgeLabel: 'React',
      pendingBadge: 'pending',
      retryBadge: 'retry',
      recoverBadge: 'recover',
    },
  },
  flows: {
    eyebrow: '두 가지 렌더 경로',
    normal: {
      title: '정상 흐름',
      steps: [{ label: 'Render' }, { label: 'Commit' }],
      captionLines: ['UI를 계산한다', 'DOM을 반영한다'],
      pill: '모든 것이 준비될 때의 기본 경로',
    },
    extended: {
      title: '확장 흐름 (현실 세계)',
      steps: [
        { label: 'Suspend', tone: 'purple' },
        { label: 'Error', tone: 'red' },
        { label: 'Hydration Mismatch', tone: 'blue' },
        { label: 'Recovery', tone: 'green' },
      ],
      captionLines: ['대기', '실패', '불일치', '복구/재시도'],
      pill: '문제가 생겨도 화면을 계속 완성해 나가는 경로',
    },
  },
  question: {
    eyebrow: '오늘 해결할 질문',
    title: '오늘 해결할 질문',
    question: 'React는 렌더링이 바로 끝나지 않을 때 어떻게 화면을 계속 완성해 나갈까?',
    badges: [
      { label: '대기', tone: 'blue' },
      { label: '실패', tone: 'red' },
      { label: '복구', tone: 'green' },
      { label: '재시도', tone: 'cyan' },
    ],
  },
  normalRender: {
    title: '지금까지 배운 정상 렌더링 흐름',
    steps: [
      { label: 'JSX' },
      { label: 'React Element' },
      { label: 'Fiber' },
      { label: 'Render Phase' },
      { label: 'Commit Phase' },
    ],
    caption: '이 흐름은 문제가 없을 때의 기본 렌더 경로입니다.',
  },
  threeBranches: {
    eyebrow: '핵심 시각 구역',
    title: '실제 React는 여기서 끝나지 않는다',
    description:
      'Render Phase에서 다양한 상황이 발생할 수 있으며, React는 각 상황을 분리하여 다룹니다.',
    rootLabel: 'Render Phase',
    rootSublabel: '계산 중',
    branches: [
      {
        kind: 'suspense',
        label: 'A. Render 중 Promise 발견',
        title: 'Suspense fallback',
        steps: [
          { label: 'use(Promise) 호출' },
          { label: 'thenable 감지 + throwException' },
          { label: 'Suspense Boundary' },
          { label: 'fallback UI 표시' },
        ],
        caption: '데이터가 준비될 때까지 UI를 대기시킨다.',
      },
      {
        kind: 'error',
        label: 'B. Render 중 Error 발생',
        title: 'Error Boundary fallback',
        steps: [
          { label: 'throw Error 발생' },
          { label: 'Error Boundary 탐색' },
          { label: 'captured update' },
          { label: 'fallback UI 렌더' },
        ],
        caption: '예외가 전체 앱을 무너뜨리지 않도록 보호한다.',
      },
      {
        kind: 'hydration',
        label: 'C. Hydration 중 불일치 감지',
        title: 'Client Recovery',
        steps: [
          { label: 'hydrateRoot 시작' },
          { label: 'DOM / Fiber 매칭' },
          { label: 'mismatch 감지' },
          { label: 'Client Recovery 실행' },
        ],
        caption: '서버 HTML과 클라이언트를 안전히 연결한다.',
      },
    ],
  },
  comparison: {
    eyebrow: '세 경로의 역할',
    title: 'Suspense / Error / Hydration 역할 비교',
    columns: [
      { label: 'Suspense', sub: '대기', kind: 'suspense' },
      { label: 'Error Boundary', sub: '실패', kind: 'error' },
      { label: 'Hydration', sub: '불일치 복구', kind: 'hydration' },
    ],
    rowsHeader: '구분',
    rows: [
      {
        label: '처리 대상',
        suspense: '아직 준비되지 않은 데이터',
        error: '렌더 중 발생한 예외',
        hydration: '서버 HTML 연결과 불일치 복구',
      },
      {
        label: '트리거',
        suspense: 'Promise / thenable 읽기',
        error: 'throw Error',
        hydration: 'DOM과 Fiber 비교 중 불일치',
      },
      {
        label: '반응',
        suspense: 'Suspense fallback 표시',
        error: 'Error Boundary fallback 표시',
        hydration: 'Client Recovery 후 계속 진행',
      },
      {
        label: '사용자 경험',
        suspense: '로딩 중...',
        error: '문제가 발생했습니다 / 다시 시도',
        hydration: '연결 중... / 정상 체크',
      },
      {
        label: '핵심 목표',
        suspense: '기다리는 동안 UI 안정성 유지',
        error: '실패 격리 후 UI 안정성 유지',
        hydration: '서버 → 클라이언트 연결 안정성 유지',
      },
    ],
  },
  flowMap: {
    eyebrow: '전체 파트 흐름 지도',
    title: '전체 파트 흐름 지도',
    description: 'React는 세 가지 흐름을 공통 렌더링 모델 위에서 처리합니다.',
    rows: [
      {
        kind: 'suspense',
        label: '대기',
        sublabel: '(Suspense)',
        steps: [
          { label: 'use(Promise)' },
          { label: 'throwException' },
          { label: 'Suspense Boundary' },
          { label: 'fallback 렌더' },
          { label: 'Promise resolve + retry' },
          { label: '정상 UI 커밋' },
        ],
        endStateLabel: 'retry',
      },
      {
        kind: 'error',
        label: '실패',
        sublabel: '(Error)',
        steps: [
          { label: 'throw Error' },
          { label: 'Error Boundary 탐색' },
          { label: 'captured update 스케줄' },
          { label: 'fallback 렌더' },
          { label: '사용자/상태 변화로 재시도' },
          { label: '복구 가능' },
        ],
        endStateLabel: 'recovered',
      },
      {
        kind: 'hydration',
        label: '복구',
        sublabel: '(Hydration)',
        steps: [
          { label: 'hydrateRoot 시작' },
          { label: 'DOM / Fiber 매칭' },
          { label: 'mismatch 감지' },
          { label: 'Client Recovery 수행' },
          { label: '계속 진행' },
          { label: '안정성 확인' },
        ],
        endStateLabel: 'stable',
      },
    ],
  },
  codeEntry: {
    eyebrow: '실제 코드 진입점',
    title: '실제 코드 진입점 지도',
    description: 'React 소스코드에서 이 흐름들이 시작되는 위치입니다.',
    buttonLabel: 'GitHub에서 보기',
    files: [
      {
        kind: 'suspense',
        fileName: 'ReactFiberThenable.js',
        role: 'Promise / thenable 대기 처리',
        code: `function trackUsedThenable(
  thenableState,
  thenable,
  index,
) {
  // thenable 추적
  return thenable;
}`,
        href: THENABLE_URL,
      },
      {
        kind: 'error',
        fileName: 'ReactFiberThrow.js',
        role: 'throw된 값의 흐름 해석',
        code: `function throwException(
  root, returnFiber,
  sourceFiber, value,
) {
  // Promise / Error 분기
}`,
        href: THROW_URL,
      },
      {
        kind: 'mixed',
        fileName: 'ReactFiberSuspenseComponent.js',
        role: 'Suspense 경계 처리',
        code: `function updateSuspenseComponent(
  current, workInProgress,
  renderLanes,
) {
  // fallback, retry 흐름
}`,
        href: SUSPENSE_URL,
      },
      {
        kind: 'hydration',
        fileName: 'ReactFiberHydrationContext.js',
        role: 'Hydration 매칭과 복구',
        code: `function enterHydrationState(
  fiber,
) {
  // hydration 상태 초기화
}`,
        href: HYDRATION_URL,
      },
    ],
  },
  selector: {
    eyebrow: '복구 경로 선택기',
    title: '복구 경로 선택기',
    description: '아래 상황을 선택하면 React가 선택하는 복구 경로를 확인할 수 있습니다.',
    selectedBadge: '현재 선택',
    resultBadge: '결과',
    timelineLabel: '처리 타임라인',
    relatedFilesLabel: '관련 파일',
    experienceLabel: '사용자 경험',
    options: [
      {
        key: 'promise',
        label: 'Promise pending',
        description: '데이터가 아직 준비되지 않음',
      },
      {
        key: 'error',
        label: 'Error throw',
        description: '렌더 중 예외 발생',
      },
      {
        key: 'mismatch',
        label: 'Text mismatch',
        description: '서버 HTML과 텍스트 불일치',
      },
    ],
    results: {
      promise: {
        selectedLabel: 'Promise pending',
        resultTitle: 'Suspense fallback',
        description:
          'Promise(thenable)를 읽은 React는 해당 값을 Suspense Boundary의 fallback UI로 보냅니다.',
        timeline: [
          'use(Promise) 읽기',
          'throwException(thenable)',
          'Suspense Boundary fallback UI',
          'Promise resolve',
          '정상 UI 커밋',
        ],
        relatedFiles: ['ReactFiberThenable.js', 'ReactFiberSuspenseComponent.js'],
        experience: '로딩 상태 유지',
        kind: 'suspense',
      },
      error: {
        selectedLabel: 'Error throw',
        resultTitle: 'Error Boundary fallback',
        description:
          '렌더 중 발생한 Error는 가장 가까운 Error Boundary에 captured update로 연결됩니다.',
        timeline: [
          'throw Error',
          'Error Boundary 탐색',
          'captured update 스케줄',
          'fallback UI 렌더',
          '사용자 재시도',
        ],
        relatedFiles: ['ReactFiberThrow.js'],
        experience: '오류 화면 표시',
        kind: 'error',
      },
      mismatch: {
        selectedLabel: 'Text mismatch',
        resultTitle: 'Hydration Recovery',
        description:
          '서버 HTML과 클라이언트 렌더 결과가 맞지 않으면 React는 복구 가능한 렌더링 경로로 전환합니다.',
        timeline: [
          'hydrateRoot 시작',
          'DOM / Fiber 매칭',
          'mismatch 감지',
          'Client Recovery',
          '안정적 연결',
        ],
        relatedFiles: ['ReactFiberHydrationContext.js'],
        experience: '연결 복구',
        kind: 'hydration',
      },
    },
  },
  followAlong: {
    eyebrow: '직접 따라가 보기',
    title: '직접 코드에서 따라가 보기',
    illustrationLabel: 'react/packages/react-reconciler',
    items: [
      {
        label: 'Suspense 공식 문서를 읽고 fallback의 역할 확인',
        codeExample: '<Suspense fallback={<Loading />} />',
      },
      {
        label: 'hydrateRoot 공식 문서에서 서버 HTML 연결 개념 확인',
        codeExample: 'hydrateRoot(dom, <App />)',
      },
      {
        label: 'ReactFiberThrow.js가 이 파트의 중심 파일임을 기억',
        codeExample: 'throwException(root, returnFiber, sourceFiber, value)',
      },
    ],
  },
  takeaways: {
    eyebrow: '핵심 정리',
    title: '이번 페이지에서 반드시 기억할 것',
    cards: [
      {
        number: '01',
        title: 'React는 정상 렌더링만 처리하지 않는다.',
        body: '현실의 UI는 항상 준비되지 않으며, React는 이를 모델 안에서 관리한다.',
        tone: 'blue',
      },
      {
        number: '02',
        title: 'Promise 대기, 렌더 에러, hydration mismatch도 렌더링 모델 안에서 처리된다.',
        body: '세 흐름은 서로 다르지만 렌더 위에서 동작한다.',
        tone: 'red',
      },
      {
        number: '03',
        title: '이 파트의 핵심은 복구 가능한 렌더링이다.',
        body: '사용자 경험을 유지하면서, 필요하면 다시 시도한다.',
        tone: 'green',
      },
    ],
  },
  cta: {
    eyebrow: '다음 파트로 이동',
    title: '다음: use(Promise)는 렌더링을 어떻게 멈추는가?',
    description:
      'use(Promise)가 내부에서 throw로 연결되어 Suspense 흐름을 어떻게 시작하는지 코드와 함께 읽어봅니다.',
    primary: { label: '다음 파트 시작하기', href: '/use-promise-suspend' },
    secondary: { label: '학습 로드맵 보기', href: '/' },
    goalsLabel: '학습 목표',
    goals: ['Suspense 흐름의 시작점 이해', 'thenable 처리 로직 확인', 'retry와 재시도 모델 이해'],
  },
};

const en: WhyFailableRenderContent = {
  hero: {
    badge: 'React Rendering Deep Dive · Suspense / Error / Hydration',
    titleLines: ['Understanding only the happy path', 'means knowing half of React'],
    description:
      'React handles waiting, failing, recovery, and retry inside the same rendering model — even when the UI cannot finish in one pass.',
    illustration: {
      backCardLabel: 'App.tsx',
      frontCardLabel: '<Suspense />',
      reactBadgeLabel: 'React',
      pendingBadge: 'pending',
      retryBadge: 'retry',
      recoverBadge: 'recover',
    },
  },
  flows: {
    eyebrow: 'Two render paths',
    normal: {
      title: 'Happy path',
      steps: [{ label: 'Render' }, { label: 'Commit' }],
      captionLines: ['Compute the UI', 'Apply it to the DOM'],
      pill: 'The default path when everything is ready',
    },
    extended: {
      title: 'Extended path (the real world)',
      steps: [
        { label: 'Suspend', tone: 'purple' },
        { label: 'Error', tone: 'red' },
        { label: 'Hydration Mismatch', tone: 'blue' },
        { label: 'Recovery', tone: 'green' },
      ],
      captionLines: ['Waiting', 'Failing', 'Mismatch', 'Recovery/Retry'],
      pill: 'Keep completing the screen even when something goes wrong',
    },
  },
  question: {
    eyebrow: "Today's question",
    title: "Today's question",
    question:
      'When rendering does not finish right away, how does React keep completing the screen?',
    badges: [
      { label: 'Wait', tone: 'blue' },
      { label: 'Fail', tone: 'red' },
      { label: 'Recover', tone: 'green' },
      { label: 'Retry', tone: 'cyan' },
    ],
  },
  normalRender: {
    title: 'The happy-path render flow you already know',
    steps: [
      { label: 'JSX' },
      { label: 'React Element' },
      { label: 'Fiber' },
      { label: 'Render Phase' },
      { label: 'Commit Phase' },
    ],
    caption: 'This is the default render path when nothing goes wrong.',
  },
  threeBranches: {
    eyebrow: 'Core visual block',
    title: 'React does not stop here',
    description:
      'Many situations can happen inside Render Phase, and React handles each one as a separate branch.',
    rootLabel: 'Render Phase',
    rootSublabel: 'computing',
    branches: [
      {
        kind: 'suspense',
        label: 'A. Promise found during render',
        title: 'Suspense fallback',
        steps: [
          { label: 'use(Promise) is called' },
          { label: 'thenable detected + throwException' },
          { label: 'Suspense Boundary' },
          { label: 'fallback UI shown' },
        ],
        caption: 'Wait the UI until the data is ready.',
      },
      {
        kind: 'error',
        label: 'B. Error thrown during render',
        title: 'Error Boundary fallback',
        steps: [
          { label: 'throw Error happens' },
          { label: 'walk up to Error Boundary' },
          { label: 'captured update' },
          { label: 'fallback UI rendered' },
        ],
        caption: 'Protect the whole app from collapsing on an exception.',
      },
      {
        kind: 'hydration',
        label: 'C. Mismatch found during hydration',
        title: 'Client Recovery',
        steps: [
          { label: 'hydrateRoot starts' },
          { label: 'DOM / Fiber matching' },
          { label: 'mismatch detected' },
          { label: 'Client Recovery runs' },
        ],
        caption: 'Safely connect server HTML to the client.',
      },
    ],
  },
  comparison: {
    eyebrow: 'How the three paths differ',
    title: 'Suspense / Error / Hydration role comparison',
    columns: [
      { label: 'Suspense', sub: 'waiting', kind: 'suspense' },
      { label: 'Error Boundary', sub: 'failing', kind: 'error' },
      { label: 'Hydration', sub: 'recovery', kind: 'hydration' },
    ],
    rowsHeader: 'Aspect',
    rows: [
      {
        label: 'Handles',
        suspense: 'Data that is not ready yet',
        error: 'Exceptions thrown during render',
        hydration: 'Server HTML connection and mismatch recovery',
      },
      {
        label: 'Trigger',
        suspense: 'Reading a Promise / thenable',
        error: 'throw Error',
        hydration: 'Mismatch while comparing DOM and Fiber',
      },
      {
        label: 'Reaction',
        suspense: 'Show Suspense fallback',
        error: 'Show Error Boundary fallback',
        hydration: 'Run Client Recovery, then continue',
      },
      {
        label: 'User experience',
        suspense: 'Loading...',
        error: 'Something went wrong / retry',
        hydration: 'Connecting... / health check',
      },
      {
        label: 'Goal',
        suspense: 'Keep UI stable while waiting',
        error: 'Keep UI stable after isolating failure',
        hydration: 'Keep server → client connection stable',
      },
    ],
  },
  flowMap: {
    eyebrow: 'Full part flow map',
    title: 'Full part flow map',
    description: 'React handles three flows on the same rendering model.',
    rows: [
      {
        kind: 'suspense',
        label: 'Wait',
        sublabel: '(Suspense)',
        steps: [
          { label: 'use(Promise)' },
          { label: 'throwException' },
          { label: 'Suspense Boundary' },
          { label: 'render fallback' },
          { label: 'Promise resolve + retry' },
          { label: 'commit final UI' },
        ],
        endStateLabel: 'retry',
      },
      {
        kind: 'error',
        label: 'Fail',
        sublabel: '(Error)',
        steps: [
          { label: 'throw Error' },
          { label: 'walk to Error Boundary' },
          { label: 'schedule captured update' },
          { label: 'render fallback' },
          { label: 'retry by user/state change' },
          { label: 'recoverable' },
        ],
        endStateLabel: 'recovered',
      },
      {
        kind: 'hydration',
        label: 'Recover',
        sublabel: '(Hydration)',
        steps: [
          { label: 'hydrateRoot starts' },
          { label: 'DOM / Fiber matching' },
          { label: 'mismatch detected' },
          { label: 'Client Recovery runs' },
          { label: 'continue' },
          { label: 'stability check' },
        ],
        endStateLabel: 'stable',
      },
    ],
  },
  codeEntry: {
    eyebrow: 'Source entry points',
    title: 'Map of source code entry points',
    description: 'Where these flows start in the React source code.',
    buttonLabel: 'View on GitHub',
    files: [
      {
        kind: 'suspense',
        fileName: 'ReactFiberThenable.js',
        role: 'Promise / thenable wait handling',
        code: `function trackUsedThenable(
  thenableState,
  thenable,
  index,
) {
  // track thenable
  return thenable;
}`,
        href: THENABLE_URL,
      },
      {
        kind: 'error',
        fileName: 'ReactFiberThrow.js',
        role: 'Interpret the thrown value',
        code: `function throwException(
  root, returnFiber,
  sourceFiber, value,
) {
  // Promise / Error branch
}`,
        href: THROW_URL,
      },
      {
        kind: 'mixed',
        fileName: 'ReactFiberSuspenseComponent.js',
        role: 'Suspense boundary handling',
        code: `function updateSuspenseComponent(
  current, workInProgress,
  renderLanes,
) {
  // fallback and retry flow
}`,
        href: SUSPENSE_URL,
      },
      {
        kind: 'hydration',
        fileName: 'ReactFiberHydrationContext.js',
        role: 'Hydration matching and recovery',
        code: `function enterHydrationState(
  fiber,
) {
  // init hydration state
}`,
        href: HYDRATION_URL,
      },
    ],
  },
  selector: {
    eyebrow: 'Recovery path picker',
    title: 'Recovery path picker',
    description: 'Pick a situation below to see which recovery path React takes.',
    selectedBadge: 'Selected',
    resultBadge: 'Result',
    timelineLabel: 'Processing timeline',
    relatedFilesLabel: 'Related files',
    experienceLabel: 'User experience',
    options: [
      {
        key: 'promise',
        label: 'Promise pending',
        description: 'Data is not ready yet',
      },
      {
        key: 'error',
        label: 'Error throw',
        description: 'Exception during render',
      },
      {
        key: 'mismatch',
        label: 'Text mismatch',
        description: 'Server HTML and client text differ',
      },
    ],
    results: {
      promise: {
        selectedLabel: 'Promise pending',
        resultTitle: 'Suspense fallback',
        description:
          'When React reads a Promise (thenable), it sends that value to the Suspense Boundary fallback UI.',
        timeline: [
          'Read use(Promise)',
          'throwException(thenable)',
          'Suspense Boundary fallback UI',
          'Promise resolve',
          'commit final UI',
        ],
        relatedFiles: ['ReactFiberThenable.js', 'ReactFiberSuspenseComponent.js'],
        experience: 'Loading state stays visible',
        kind: 'suspense',
      },
      error: {
        selectedLabel: 'Error throw',
        resultTitle: 'Error Boundary fallback',
        description:
          'An Error thrown during render is hooked into the nearest Error Boundary as a captured update.',
        timeline: [
          'throw Error',
          'walk to Error Boundary',
          'schedule captured update',
          'render fallback UI',
          'user retries',
        ],
        relatedFiles: ['ReactFiberThrow.js'],
        experience: 'Error screen is shown',
        kind: 'error',
      },
      mismatch: {
        selectedLabel: 'Text mismatch',
        resultTitle: 'Hydration Recovery',
        description:
          'If server HTML and client render do not match, React switches to the recoverable rendering path.',
        timeline: [
          'hydrateRoot starts',
          'DOM / Fiber matching',
          'mismatch detected',
          'Client Recovery',
          'stable connection',
        ],
        relatedFiles: ['ReactFiberHydrationContext.js'],
        experience: 'Connection recovers',
        kind: 'hydration',
      },
    },
  },
  followAlong: {
    eyebrow: 'Walk it yourself',
    title: 'Follow along in the code',
    illustrationLabel: 'react/packages/react-reconciler',
    items: [
      {
        label: 'Read the Suspense docs and confirm the role of fallback',
        codeExample: '<Suspense fallback={<Loading />} />',
      },
      {
        label: 'Read the hydrateRoot docs for the server HTML connection concept',
        codeExample: 'hydrateRoot(dom, <App />)',
      },
      {
        label: 'Remember that ReactFiberThrow.js is the heart of this part',
        codeExample: 'throwException(root, returnFiber, sourceFiber, value)',
      },
    ],
  },
  takeaways: {
    eyebrow: 'Key recap',
    title: 'Must remember from this page',
    cards: [
      {
        number: '01',
        title: 'React does not just handle the happy path.',
        body: 'Real-world UI is rarely ready in one pass, and React handles that inside its rendering model.',
        tone: 'blue',
      },
      {
        number: '02',
        title:
          'Promise waiting, render errors, and hydration mismatch are all handled inside the rendering model.',
        body: 'The three flows differ in surface, but they all live on top of render.',
        tone: 'red',
      },
      {
        number: '03',
        title: 'The core of this part is recoverable rendering.',
        body: 'Keep the user experience steady, and retry when needed.',
        tone: 'green',
      },
    ],
  },
  cta: {
    eyebrow: 'Move to the next part',
    title: 'Next: How does use(Promise) pause rendering?',
    description:
      'Read how use(Promise) wires into throw internally and starts the Suspense flow, side by side with the code.',
    primary: { label: 'Start the next part', href: '/use-promise-suspend' },
    secondary: { label: 'See the learning roadmap', href: '/' },
    goalsLabel: 'Learning goals',
    goals: [
      'Understand where the Suspense flow starts',
      'Confirm how thenable is processed',
      'Grasp the retry model',
    ],
  },
};

export const whyFailableRenderContent: Record<Locale, WhyFailableRenderContent> = { ko, en };
