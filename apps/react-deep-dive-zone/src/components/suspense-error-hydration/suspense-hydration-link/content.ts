import type { Locale } from '@it-tech-blog/preferences';

import type { Phase } from './tone';

export type HeroTopCard = {
  kind: 'server' | 'hydration' | 'recovery';
  title: string;
  description: string;
};

export type ConceptCard = {
  icon: 'spinner' | 'droplet' | 'shield' | 'refresh';
  label: string;
};

export type SuspendErrorCard = {
  kind: 'suspend' | 'error';
  title: string;
  description: string;
  flow: string[];
};

export type FlowStep = {
  title: string;
  caption?: string;
  phase: Phase;
  highlight?: boolean;
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'violet';
};

export type TimelineKey = 'serverSuspend' | 'serverError' | 'hydrationError';

export type InteractiveTimeline = {
  steps: { title: string; phase: Phase; highlight?: boolean }[];
  note: string;
  badges: { label: string; phase: Phase }[];
};

export type SuspenseHydrationLinkContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    description: string;
    topCards: HeroTopCard[];
    boundary: {
      code: string;
      caption: string;
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  serverPaths: {
    number: string;
    title: string;
    cards: SuspendErrorCard[];
  };
  fallbackHtml: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    descriptionTitle: string;
    description: string;
    bullets: string[];
    streamingTitle: string;
    streamingSteps: string[];
  };
  boundaryHydrationFlow: {
    number: string;
    title: string;
    steps: FlowStep[];
    reasonTitle: string;
    reasonBullets: string[];
  };
  claim: {
    number: string;
    title: string;
    domTitle: string;
    domLines: string[];
    domLabels: string[];
    matchTitle: string;
    matchSteps: { label: string; phase: Phase }[];
    fiberTitle: string;
    fiberLines: { label: string; kind: 'root' | 'boundary' | 'children' }[];
  };
  forceClientRender: {
    number: string;
    title: string;
    steps: FlowStep[];
    note: string;
  };
  timeline: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  code: {
    number: string;
    title: string;
    cardALabel: string;
    cardAFile: string;
    cardACode: string;
    cardBLabel: string;
    cardBFile: string;
    cardBCode: string;
    relatedTitle: string;
    related: { name: string; description: string }[];
    button: { label: string; href: string };
  };
  interactive: {
    number: string;
    title: string;
    selectorTitle: string;
    options: { key: TimelineKey; label: string; sublabel: string }[];
    timelineTitle: string;
    noteTitle: string;
    badgesTitle: string;
    results: Record<TimelineKey, InteractiveTimeline>;
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
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const FALLBACK_HTML = `<div id="root">
  <!--$?-->
  <div class="skeleton">
    <span class="spinner" />
    <p>로딩 중...</p>
  </div>
  <!--/$-->
</div>`;

const CLAIM_CODE = `function claimNextHydratableSuspenseInstance(fiber) {
  const nextInstance = nextHydratableInstance;
  const suspenseInstance = nextInstance
    ? tryHydrateSuspense(fiber, nextInstance)
    : null;

  if (suspenseInstance === null) {
    throw throwOnHydrationMismatch(fiber);
  }

  return suspenseInstance;
}`;

const FORCE_CODE = `if (hydrationBoundary !== null) {
  hydrationBoundary.flags |= ForceClientRender;

  markSuspenseBoundaryShouldCapture(
    hydrationBoundary,
    returnFiber,
    sourceFiber,
    root,
    rootRenderLanes,
  );
}`;

const HYDRATION_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHydrationContext.js';

const ko: SuspenseHydrationLinkContent = {
  hero: {
    badge: 'Suspense/Error · 9/10단계',
    titleLines: [
      'Suspense Boundary는',
      '클라이언트 로딩 UI를 넘어서',
      '서버와 복구 경계로도 작동한다',
    ],
    description:
      '서버 렌더링, hydration 복구, client render 전환은 Suspense Boundary를 중심으로 연결됩니다.',
    topCards: [
      {
        kind: 'server',
        title: 'Server Render',
        description: '데이터 대기 / 에러 / 서버 fallback',
      },
      {
        kind: 'hydration',
        title: 'Hydration',
        description: '서버 HTML과 연결 · boundary 단위 hydration',
      },
      {
        kind: 'recovery',
        title: 'Client Recovery',
        description: '에러 / mismatch 발생 시 client recovery 경계',
      },
    ],
    boundary: {
      code: '<Suspense Boundary fallback={<... />} />',
      caption: '서버 fallback · hydration boundary · client recovery 경계',
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question: 'Suspense는 hydration과 어떤 지점에서 만나고, 왜 서버 복구에도 중요할까?',
    concepts: [
      { icon: 'spinner', label: '서버 suspend는 fallback과 만나는가?' },
      { icon: 'droplet', label: 'hydration은 boundary 단위로 진행되는가?' },
      { icon: 'shield', label: 'hydration 중 error는 어디서 복구되는가?' },
      { icon: 'refresh', label: '클라이언트 실제 UI는 어떻게 회복되는가?' },
    ],
  },
  serverPaths: {
    number: '2',
    title: '서버 렌더 중 suspend / error',
    cards: [
      {
        kind: 'suspend',
        title: '서버 렌더 중 suspend',
        description: '데이터가 준비되지 않아 suspend 발생 → Suspense fallback이 서버에서 선택됨',
        flow: ['Component', 'suspend (throw promise)', 'Fallback HTML 생성'],
      },
      {
        kind: 'error',
        title: '서버 렌더 중 error',
        description: '렌더 에러 발생 → 가장 가까운 Suspense fallback 사용 가능',
        flow: ['Component', 'throw Error', '가장 가까운 Suspense fallback'],
      },
    ],
  },
  fallbackHtml: {
    number: '3',
    title: '서버 fallback HTML',
    code: { fileLabel: 'server-output.html', content: FALLBACK_HTML },
    descriptionTitle: '클라이언트는 이 fallback HTML을 먼저 받습니다',
    description: 'Suspense marker로 boundary 위치가 표시됩니다.',
    bullets: [
      '이후 데이터가 준비되면 실제 UI로 회복 가능',
      '서버에서 fallback이 먼저 도착할 수 있음',
      'Suspense marker로 boundary 위치 표시',
    ],
    streamingTitle: '스트리밍 흐름 예시',
    streamingSteps: ['서버 시작', 'fallback HTML 전송', '데이터 준비', '나머지 HTML 전송'],
  },
  boundaryHydrationFlow: {
    number: '4',
    title: 'hydrateRoot 이후 boundary hydration',
    steps: [
      { title: 'hydrateRoot(컨테이너, <App />)', phase: 'hydration' },
      { title: 'hydration context 초기화', phase: 'hydration' },
      { title: 'Suspense marker 찾기', phase: 'boundary', highlight: true },
      { title: 'Boundary 단위 hydration', phase: 'hydration' },
      { title: '실패 시 연결 시도', phase: 'error' },
    ],
    reasonTitle: 'Boundary 단위로 관리되는 이유',
    reasonBullets: [
      '부분 hydration 가능',
      '에러 / 불일치 시 복구 범위 제한',
      '잘못된 연결로 스트리밍이 유지',
    ],
  },
  claim: {
    number: '5',
    title: 'claimNextHydratableSuspenseInstance 역할',
    domTitle: 'DOM (서버 HTML)',
    domLines: ['<!--$-->', '<div class="skeleton">...</div>', '<!--/$-->'],
    domLabels: ['Suspense start marker', 'Fallback content', 'Suspense end marker'],
    matchTitle: '매칭 과정',
    matchSteps: [
      { label: '다음 hydratable Suspense marker 찾기', phase: 'hydration' },
      { label: 'Boundary Fiber와 매칭 시도', phase: 'boundary' },
      { label: '성공: hydration 진행', phase: 'recovery' },
      { label: '실패: mismatch 경로로 이동', phase: 'error' },
    ],
    fiberTitle: 'Fiber (클라이언트)',
    fiberLines: [
      { label: 'HostRoot', kind: 'root' },
      { label: 'Suspense Boundary', kind: 'boundary' },
      { label: 'fallback={<... />}', kind: 'children' },
      { label: '...children', kind: 'children' },
    ],
  },
  forceClientRender: {
    number: '6',
    title: 'hydration 중 error와 ForceClientRender 흐름',
    steps: [
      { title: 'hydration 중 error 발생', phase: 'error' },
      { title: '가장 가까운 Suspense Boundary 확인', phase: 'boundary' },
      { title: 'ForceClientRender flag 설정', phase: 'error', highlight: true },
      { title: 'Boundary 기준 client recovery', phase: 'recovery' },
      { title: '해당 subtree만 client render로 전환', phase: 'recovery' },
    ],
    note: '이미 연결된 상위 트리는 유지하고, 문제 구간만 클라이언트 렌더링으로 복구합니다.',
  },
  timeline: {
    number: '7',
    title: 'server fallback → client recovery 타임라인',
    steps: [
      { title: '서버 렌더 중 에러', caption: '가장 가까운 Suspense fallback 사용', phase: 'error' },
      {
        title: 'Suspense fallback HTML 전송',
        caption: '서버가 fallback markup 스트리밍 전송',
        phase: 'boundary',
      },
      {
        title: '클라이언트 hydration 시작',
        caption: 'hydrateRoot 호출 · boundary 단위 hydration 시도',
        phase: 'hydration',
      },
      {
        title: '클라이언트 렌더 성공',
        caption: '데이터 준비 완료 · 실제 UI 렌더 가능',
        phase: 'recovery',
      },
      {
        title: '실제 UI 복구 완료',
        caption: 'Boundary subtree가 실제 UI로 교체',
        phase: 'recovery',
      },
    ],
  },
  code: {
    number: '8',
    title: '실제 코드 미리보기',
    cardALabel: 'A · claimNextHydratableSuspenseInstance',
    cardAFile: 'ReactFiberHydrationContext.js',
    cardACode: CLAIM_CODE,
    cardBLabel: 'B · ForceClientRender와 capture',
    cardBFile: 'ReactFiberThrow.js',
    cardBCode: FORCE_CODE,
    relatedTitle: '관련 개념',
    related: [
      { name: 'tryHydrateSuspense', description: 'Suspense marker와 Fiber 매칭 시도' },
      { name: 'throwOnHydrationMismatch', description: '매칭 실패 시 recoverable error로 전환' },
      { name: 'ForceClientRender', description: '해당 subtree를 client render로 복구' },
    ],
    button: { label: 'GitHub에서 코드 보기', href: HYDRATION_URL },
  },
  interactive: {
    number: '9',
    title: '인터랙티브 복구 타임라인',
    selectorTitle: '시나리오 선택',
    options: [
      { key: 'serverSuspend', label: '서버 suspend', sublabel: '데이터 대기로 suspend' },
      { key: 'serverError', label: '서버 error', sublabel: '서버 렌더 중 에러' },
      { key: 'hydrationError', label: 'hydration 중 error', sublabel: 'hydration 도중 에러' },
    ],
    timelineTitle: '시나리오 타임라인',
    noteTitle: '결과',
    badgesTitle: '상태 배지',
    results: {
      serverSuspend: {
        steps: [
          { title: '서버 렌더 suspend 발생', phase: 'server' },
          { title: 'fallback HTML 스트리밍', phase: 'boundary' },
          { title: '클라이언트 hydration 시작', phase: 'hydration' },
          { title: '데이터 준비 후 client render', phase: 'recovery' },
          { title: '실제 UI 복구', phase: 'recovery' },
        ],
        note: '서버 fallback에서 시작해 클라이언트에서 실제 UI로 회복됩니다.',
        badges: [
          { label: '서버 렌더', phase: 'server' },
          { label: 'fallback/streaming', phase: 'boundary' },
          { label: '클라이언트 렌더', phase: 'hydration' },
          { label: '복구 완료', phase: 'recovery' },
        ],
      },
      serverError: {
        steps: [
          { title: '서버 렌더 중 error 발생', phase: 'error' },
          { title: '가까운 Suspense fallback 선택', phase: 'boundary' },
          { title: 'fallback HTML 전송', phase: 'boundary' },
          { title: '클라이언트 hydration 재시도', phase: 'hydration' },
          { title: '클라이언트 렌더 성공 시 실제 UI 복구', phase: 'recovery' },
        ],
        note: '서버 에러도 Suspense fallback을 통해 사용자에게 임시 UI를 제공할 수 있습니다.',
        badges: [
          { label: '서버 에러', phase: 'error' },
          { label: 'fallback/streaming', phase: 'boundary' },
          { label: '클라이언트 렌더', phase: 'hydration' },
          { label: '복구 완료', phase: 'recovery' },
        ],
      },
      hydrationError: {
        steps: [
          { title: 'hydrateRoot로 boundary hydration 시작', phase: 'hydration' },
          { title: 'Suspense marker 매칭 시도', phase: 'boundary' },
          { title: 'hydration 중 error 또는 mismatch 발생', phase: 'error' },
          { title: 'ForceClientRender 설정', phase: 'error', highlight: true },
          { title: '해당 Boundary subtree client recovery', phase: 'recovery' },
        ],
        note: '문제 구간만 client render로 전환해 연결 실패를 복구합니다.',
        badges: [
          { label: '클라이언트 렌더', phase: 'hydration' },
          { label: '에러 감지', phase: 'error' },
          { label: 'ForceClientRender', phase: 'error' },
          { label: '복구 완료', phase: 'recovery' },
        ],
      },
    },
  },
  followAlong: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'Suspense 공식 문서 확인',
        description: 'Server Rendering, Streaming, Suspense 섹션 보기',
      },
      {
        title: 'Suspense hydration 매칭 함수 찾기',
        description: 'claimNextHydratableSuspenseInstance · tryHydrateSuspense',
      },
      {
        title: 'ForceClientRender 흐름 확인',
        description: 'ReactFiberThrow.js에서 ForceClientRender 사용 위치 파악',
      },
      {
        title: 'Suspense의 역할 정리',
        description: '서버, hydration, client recovery 경계로 작동함을 정리',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'Suspense는 서버와 클라이언트 복구 경계로도 작동한다.',
        body: '서버 suspend/error, hydration, client recovery 모두 Suspense Boundary가 핵심 경계가 됩니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'Hydration은 Suspense boundary 단위로 복구될 수 있다.',
        body: '매칭 실패나 에러에서도 Boundary 단위로 client render로 전환하며 복구 범위를 제한합니다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: '서버 fallback에서 클라이언트 실제 UI로 회복하는 흐름이 가능하다.',
        body: '스트리밍된 fallback → hydration → client render로 자연스럽게 실제 UI로 전환됩니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '다음: 전체 복구 흐름 복습',
    description:
      '대기·실패·복구가 하나의 렌더링 모델로 이어지는 전체 흐름을 마지막으로 정리합니다.',
    cta: '다음 페이지로 이동',
    href: '/recovery-model-overview',
  },
};

const en: SuspenseHydrationLinkContent = {
  hero: {
    badge: 'Suspense·Error · 9/10',
    titleLines: [
      'A Suspense Boundary is not only',
      'a client loading UI — it also acts as',
      'a server and recovery boundary',
    ],
    description:
      'Server rendering, hydration recovery, and client render fall-back all connect through the Suspense Boundary.',
    topCards: [
      {
        kind: 'server',
        title: 'Server Render',
        description: 'Pending data / errors / server fallback',
      },
      {
        kind: 'hydration',
        title: 'Hydration',
        description: 'Connect to server HTML · per-boundary hydration',
      },
      {
        kind: 'recovery',
        title: 'Client Recovery',
        description: 'Client recovery boundary on error / mismatch',
      },
    ],
    boundary: {
      code: '<Suspense Boundary fallback={<... />} />',
      caption: 'server fallback · hydration boundary · client recovery edge',
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'Where do Suspense and Hydration meet, and why does Suspense matter for server recovery?',
    concepts: [
      { icon: 'spinner', label: 'Does server suspend meet fallback?' },
      { icon: 'droplet', label: 'Is hydration done per-boundary?' },
      { icon: 'shield', label: 'Where does hydration-time error recover?' },
      { icon: 'refresh', label: 'How does the real client UI come back?' },
    ],
  },
  serverPaths: {
    number: '2',
    title: 'Server-side suspend / error',
    cards: [
      {
        kind: 'suspend',
        title: 'Suspend during server render',
        description:
          'Data is not ready and suspend fires → the Suspense fallback is chosen on the server',
        flow: ['Component', 'suspend (throw promise)', 'Fallback HTML generated'],
      },
      {
        kind: 'error',
        title: 'Error during server render',
        description: 'A render error happens → the nearest Suspense fallback can be used',
        flow: ['Component', 'throw Error', 'nearest Suspense fallback'],
      },
    ],
  },
  fallbackHtml: {
    number: '3',
    title: 'Server fallback HTML',
    code: { fileLabel: 'server-output.html', content: FALLBACK_HTML },
    descriptionTitle: 'The client receives this fallback HTML first',
    description: 'Suspense markers mark the boundary location.',
    bullets: [
      'It can be replaced by the real UI once data is ready',
      'The fallback can arrive from the server first',
      'Suspense markers indicate the boundary position',
    ],
    streamingTitle: 'Streaming sequence example',
    streamingSteps: ['Server starts', 'Send fallback HTML', 'Data prepared', 'Send remaining HTML'],
  },
  boundaryHydrationFlow: {
    number: '4',
    title: 'Per-boundary hydration after hydrateRoot',
    steps: [
      { title: 'hydrateRoot(container, <App />)', phase: 'hydration' },
      { title: 'Initialize hydration context', phase: 'hydration' },
      { title: 'Find Suspense markers', phase: 'boundary', highlight: true },
      { title: 'Per-boundary hydration', phase: 'hydration' },
      { title: 'Retry on failure', phase: 'error' },
    ],
    reasonTitle: 'Why this is managed per boundary',
    reasonBullets: [
      'Partial hydration is possible',
      'Limit recovery scope on error / mismatch',
      'Keep streaming alive even on a bad connection',
    ],
  },
  claim: {
    number: '5',
    title: 'Role of claimNextHydratableSuspenseInstance',
    domTitle: 'DOM (server HTML)',
    domLines: ['<!--$-->', '<div class="skeleton">...</div>', '<!--/$-->'],
    domLabels: ['Suspense start marker', 'Fallback content', 'Suspense end marker'],
    matchTitle: 'Matching process',
    matchSteps: [
      { label: 'Find the next hydratable Suspense marker', phase: 'hydration' },
      { label: 'Try to match against the Boundary Fiber', phase: 'boundary' },
      { label: 'Success: continue hydration', phase: 'recovery' },
      { label: 'Failure: move to mismatch path', phase: 'error' },
    ],
    fiberTitle: 'Fiber (client)',
    fiberLines: [
      { label: 'HostRoot', kind: 'root' },
      { label: 'Suspense Boundary', kind: 'boundary' },
      { label: 'fallback={<... />}', kind: 'children' },
      { label: '...children', kind: 'children' },
    ],
  },
  forceClientRender: {
    number: '6',
    title: 'Hydration-time error and ForceClientRender flow',
    steps: [
      { title: 'Error during hydration', phase: 'error' },
      { title: 'Find the nearest Suspense Boundary', phase: 'boundary' },
      { title: 'Set ForceClientRender flag', phase: 'error', highlight: true },
      { title: 'Boundary-based client recovery', phase: 'recovery' },
      { title: 'Switch only that subtree to client render', phase: 'recovery' },
    ],
    note: 'The already-connected upper tree stays — only the failing subtree is re-rendered on the client.',
  },
  timeline: {
    number: '7',
    title: 'server fallback → client recovery timeline',
    steps: [
      {
        title: 'Server render error',
        caption: 'Use the nearest Suspense fallback',
        phase: 'error',
      },
      {
        title: 'Suspense fallback HTML streamed',
        caption: 'Server streams the fallback markup',
        phase: 'boundary',
      },
      {
        title: 'Client hydration starts',
        caption: 'hydrateRoot · per-boundary hydration',
        phase: 'hydration',
      },
      {
        title: 'Client render succeeds',
        caption: 'Data ready · real UI can render',
        phase: 'recovery',
      },
      {
        title: 'Real UI restored',
        caption: 'The Boundary subtree is swapped to the real UI',
        phase: 'recovery',
      },
    ],
  },
  code: {
    number: '8',
    title: 'Source code preview',
    cardALabel: 'A · claimNextHydratableSuspenseInstance',
    cardAFile: 'ReactFiberHydrationContext.js',
    cardACode: CLAIM_CODE,
    cardBLabel: 'B · ForceClientRender and capture',
    cardBFile: 'ReactFiberThrow.js',
    cardBCode: FORCE_CODE,
    relatedTitle: 'Related concepts',
    related: [
      { name: 'tryHydrateSuspense', description: 'Tries to match a Suspense marker with a Fiber' },
      {
        name: 'throwOnHydrationMismatch',
        description: 'Turns a matching failure into a recoverable error',
      },
      { name: 'ForceClientRender', description: 'Re-renders the subtree on the client' },
    ],
    button: { label: 'View source on GitHub', href: HYDRATION_URL },
  },
  interactive: {
    number: '9',
    title: 'Interactive recovery timeline',
    selectorTitle: 'Pick a scenario',
    options: [
      { key: 'serverSuspend', label: 'Server suspend', sublabel: 'suspend while waiting for data' },
      { key: 'serverError', label: 'Server error', sublabel: 'error during server render' },
      { key: 'hydrationError', label: 'Hydration error', sublabel: 'error during hydration' },
    ],
    timelineTitle: 'Scenario timeline',
    noteTitle: 'Result',
    badgesTitle: 'Status badges',
    results: {
      serverSuspend: {
        steps: [
          { title: 'Suspend during server render', phase: 'server' },
          { title: 'Stream fallback HTML', phase: 'boundary' },
          { title: 'Client hydration starts', phase: 'hydration' },
          { title: 'Data ready · client render', phase: 'recovery' },
          { title: 'Real UI restored', phase: 'recovery' },
        ],
        note: 'It starts with the server fallback and is restored to the real UI on the client.',
        badges: [
          { label: 'Server render', phase: 'server' },
          { label: 'fallback/streaming', phase: 'boundary' },
          { label: 'Client render', phase: 'hydration' },
          { label: 'Restored', phase: 'recovery' },
        ],
      },
      serverError: {
        steps: [
          { title: 'Server render error', phase: 'error' },
          { title: 'Pick the nearest Suspense fallback', phase: 'boundary' },
          { title: 'Send fallback HTML', phase: 'boundary' },
          { title: 'Client hydration retry', phase: 'hydration' },
          { title: 'Real UI restored on success', phase: 'recovery' },
        ],
        note: 'Even server errors can give users a temporary UI through the Suspense fallback.',
        badges: [
          { label: 'Server error', phase: 'error' },
          { label: 'fallback/streaming', phase: 'boundary' },
          { label: 'Client render', phase: 'hydration' },
          { label: 'Restored', phase: 'recovery' },
        ],
      },
      hydrationError: {
        steps: [
          { title: 'hydrateRoot per-boundary hydration', phase: 'hydration' },
          { title: 'Try to match Suspense markers', phase: 'boundary' },
          { title: 'Error / mismatch during hydration', phase: 'error' },
          { title: 'Set ForceClientRender', phase: 'error', highlight: true },
          { title: 'Boundary subtree client recovery', phase: 'recovery' },
        ],
        note: 'Only the failing region is moved to a client render to recover the failed connection.',
        badges: [
          { label: 'Client render', phase: 'hydration' },
          { label: 'Error detected', phase: 'error' },
          { label: 'ForceClientRender', phase: 'error' },
          { label: 'Restored', phase: 'recovery' },
        ],
      },
    },
  },
  followAlong: {
    number: '10',
    title: 'Walk it yourself',
    items: [
      {
        title: 'Read the Suspense docs',
        description: 'Server Rendering, Streaming, Suspense sections',
      },
      {
        title: 'Find the Suspense hydration matchers',
        description: 'claimNextHydratableSuspenseInstance · tryHydrateSuspense',
      },
      {
        title: 'Inspect the ForceClientRender flow',
        description: 'Find ForceClientRender usage in ReactFiberThrow.js',
      },
      {
        title: "Recap Suspense's role",
        description: 'It acts as a boundary for server, hydration, and client recovery',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'Suspense also acts as a server- and client-side recovery boundary.',
        body: 'Server suspend/error, hydration, and client recovery all use the Suspense Boundary as the key edge.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'Hydration can be recovered per Suspense boundary.',
        body: 'On match failures or errors, it switches to a client render per boundary and limits the recovery scope.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'A server fallback can flow into a real client UI.',
        body: 'Streamed fallback → hydration → client render carries naturally into the real UI.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Next: Review the whole recovery model',
    description:
      'Wrap up by reviewing how waiting, failing, and recovering form a single rendering model.',
    cta: 'Go to the next page',
    href: '/recovery-model-overview',
  },
};

export const suspenseHydrationLinkContent: Record<Locale, SuspenseHydrationLinkContent> = {
  ko,
  en,
};
