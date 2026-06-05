import type { Locale } from '@it-tech-blog/preferences';

import type { Phase } from './tone';

export type HeroFlowStep = {
  number: string;
  label: string;
  caption: string;
  icon: 'suspend' | 'fallback' | 'resolve' | 'retry' | 'content';
  phase: Phase;
};

export type ConceptCard = {
  icon: 'target' | 'panel' | 'refresh' | 'queue';
  question: string;
  answer: string;
};

export type PendingStep = {
  title: string;
  subtitle: string;
  inner: string;
  innerKind: 'code' | 'status';
  phase: Phase;
};

export type InternalChangeStep = { number: string; title: string; description: string };

export type RetryStep = {
  number: string;
  title: string;
  description: string;
  phase: Phase;
};

export type SimulatorStep = {
  number: string;
  title: string;
  description: string;
  promiseStatus: string;
  uiStatus: string;
  uiPreview: 'spinner' | 'profile' | 'loading' | 'capture' | 'pending' | 'ready';
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'purple';
};

export type SuspenseFallbackRetryContent = {
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
    description: string;
    code: {
      fileLabel: string;
      content: string;
    };
    treeTitle: string;
    tree: { label: string; kind: 'app' | 'suspense' | 'profile' }[];
  };
  pending: {
    number: string;
    title: string;
    steps: PendingStep[];
  };
  search: {
    number: string;
    title: string;
    description: string;
    tree: {
      app: string;
      suspense: string;
      suspenseTag: string;
      intermediate: string;
      profile: string;
      profileTag: string;
    };
    rulesTitle: string;
    rules: string[];
  };
  capture: {
    number: string;
    title: string;
    internalTitle: string;
    internalSteps: InternalChangeStep[];
    stateTitle: string;
    stateLines: { key: string; value: string; highlight?: boolean }[];
    fallbackTitle: string;
    fallbackBody: string;
    resultTitle: string;
    resultSpinnerLabel: string;
  };
  retryQueue: {
    number: string;
    title: string;
    steps: RetryStep[];
  };
  code: {
    number: string;
    title: string;
    cardALabel: string;
    cardACode: string;
    cardABadge: string;
    cardBLabel: string;
    cardBCode: string;
    cardBBadge: string;
    explanationTitle: string;
    explanationBullets: { tag: string; body: string }[];
    button: { label: string; href: string };
  };
  simulator: {
    number: string;
    title: string;
    leftTitle: string;
    promiseLabel: string;
    statusLabel: string;
    uiLabel: string;
    timelineTitle: string;
    timelineSubtitle: string;
    steps: SimulatorStep[];
    railLabels: string[];
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

const THROW_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThrow.js';

const HERO_CODE = `<Suspense fallback={<Spinner />}>
  <Profile />
</Suspense>`;

const USER_CODE = `export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Profile />
    </Suspense>
  );
}`;

const CODE_A = `markSuspenseBoundaryShouldCapture(
  suspenseBoundary,
  returnFiber,
  sourceFiber,
  root,
  rootRenderLanes,
);`;

const CODE_B = `if (retryQueue === null) {
  suspenseBoundary.updateQueue = new Set([wakeable]);
} else {
  retryQueue.add(wakeable);
}

attachPingListener(root, wakeable, rootRenderLanes);`;

const ko: SuspenseFallbackRetryContent = {
  hero: {
    badge: 'Suspense/Error · 4/10단계',
    titleLines: ['Suspense는 어떻게', 'fallback으로 전환되고', '다시 원래 UI로 돌아올까?'],
    description:
      'React는 Boundary를 capture 대상으로 표시하고, Promise가 풀리면 retry render를 준비합니다.',
    code: {
      label: '사용자 코드 예시',
      pill: 'JSX',
      fileLabel: 'App.jsx',
      content: HERO_CODE,
    },
    flow: {
      title: '전체 흐름 한눈에 보기',
      steps: [
        {
          number: '1',
          label: 'suspend',
          caption: 'Promise pending',
          icon: 'suspend',
          phase: 'pending',
        },
        {
          number: '2',
          label: 'fallback',
          caption: 'Spinner 표시',
          icon: 'fallback',
          phase: 'pending',
        },
        {
          number: '3',
          label: 'resolve',
          caption: 'Promise resolved',
          icon: 'resolve',
          phase: 'retry',
        },
        { number: '4', label: 'retry', caption: 'Boundary retry', icon: 'retry', phase: 'retry' },
        { number: '5', label: 'content', caption: '원래 UI 복구', icon: 'content', phase: 'retry' },
      ],
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question:
      'Promise가 pending이면 React는 어떤 Suspense Boundary를 잡고, resolve되면 어떻게 다시 시도할까?',
    concepts: [
      { icon: 'target', question: '어떤 Boundary를 잡을까?', answer: '가장 가까운 Boundary' },
      { icon: 'panel', question: 'fallback은 언제 표시될까?', answer: 'fallback pass 준비 후' },
      { icon: 'refresh', question: 'resolve되면?', answer: '같은 Boundary 기준 retry' },
      { icon: 'queue', question: '이전 Promise는?', answer: 'retryQueue로 관리' },
    ],
  },
  userCode: {
    number: '2',
    title: 'Suspense 사용자 코드',
    description: 'Profile이 suspend 되면 가장 가까운 Suspense Boundary가 fallback UI를 담당합니다.',
    code: { fileLabel: 'App.jsx', content: USER_CODE },
    treeTitle: '컴포넌트 트리',
    tree: [
      { label: 'App', kind: 'app' },
      { label: '<Suspense />  (Boundary)', kind: 'suspense' },
      { label: '<Profile />  (suspend 가능)', kind: 'profile' },
    ],
  },
  pending: {
    number: '3',
    title: 'pending Promise 발생',
    steps: [
      {
        title: 'Profile render 시작',
        subtitle: 'Profile 컴포넌트 렌더링',
        inner: '<Profile />',
        innerKind: 'code',
        phase: 'capture',
      },
      {
        title: 'use(profilePromise)',
        subtitle: 'use()가 Promise를 읽음',
        inner: 'use(profilePromise)',
        innerKind: 'code',
        phase: 'pending',
      },
      {
        title: 'Promise pending',
        subtitle: '값이 아직 준비되지 않음',
        inner: 'pending',
        innerKind: 'status',
        phase: 'pending',
      },
      {
        title: 'throwException',
        subtitle: 'thenable이 throw 됨',
        inner: 'throw promise;',
        innerKind: 'code',
        phase: 'pending',
      },
    ],
  },
  search: {
    number: '4',
    title: '가장 가까운 Suspense Boundary 탐색',
    description: 'throw된 위치에서 위로 올라가 가장 가까운 Suspense Boundary를 찾습니다.',
    tree: {
      app: '<App />',
      suspense: '<Suspense />',
      suspenseTag: '가장 가까운 Boundary',
      intermediate: '중간 컴포넌트',
      profile: '<Profile />',
      profileTag: 'throw 위치',
    },
    rulesTitle: '탐색 규칙',
    rules: [
      '위로(return) 방향으로 탐색',
      'Suspense 타입을 만나면 중단',
      '가장 가까운 하나만 capture',
    ],
  },
  capture: {
    number: '5',
    title: 'Boundary capture와 fallback pass',
    internalTitle: '내부 상태 변화',
    internalSteps: [
      { number: '1', title: 'Suspense Boundary 발견', description: 'capture 대상으로 표시' },
      {
        number: '2',
        title: 'ShouldCapture 표시',
        description: '이 Boundary가 fallback을 렌더할 것',
      },
      { number: '3', title: 'fallback pass 준비', description: '다음 렌더에서 fallback UI로 전환' },
      { number: '4', title: 'Spinner 렌더', description: '사용자에게 fallback UI 표시' },
    ],
    stateTitle: 'Suspense Boundary',
    stateLines: [
      { key: 'state', value: 'PrimaryTree' },
      { key: 'ShouldCapture', value: 'true', highlight: true },
      { key: 'DidCapture', value: '(next pass)' },
      { key: 'updateQueue', value: 'Set()' },
    ],
    fallbackTitle: 'fallback pass 실행',
    fallbackBody: 'Primary tree 대신 Fallback tree 렌더링',
    resultTitle: '실제 UI 결과',
    resultSpinnerLabel: '<Spinner />',
  },
  retryQueue: {
    number: '6',
    title: 'retryQueue / wakeable / ping listener 흐름',
    steps: [
      {
        number: '1',
        title: 'wakeable 저장',
        description: 'throw된 thenable을 wakeable로 보관',
        phase: 'capture',
      },
      {
        number: '2',
        title: 'retryQueue 등록',
        description: 'Boundary.updateQueue(Set)에 wakeable 추가',
        phase: 'capture',
      },
      {
        number: '3',
        title: 'Promise resolve 감시',
        description: 'Promise가 resolve되면 재시작 신호(ping) 발생',
        phase: 'retry',
      },
      {
        number: '4',
        title: 'attachPingListener',
        description: 'ping 발생 시 Scheduler에 retry 요청 등록',
        phase: 'retry',
      },
      {
        number: '5',
        title: 'retry render',
        description: '같은 Boundary 기준으로 retry render 실행',
        phase: 'retry',
      },
    ],
  },
  code: {
    number: '7',
    title: '실제 코드 미리보기 (ReactFiberThrow.js)',
    cardALabel: 'A · markSuspenseBoundaryShouldCapture 호출',
    cardACode: CODE_A,
    cardABadge: 'JS',
    cardBLabel: 'B · retryQueue 등록 및 ping listener 설치',
    cardBCode: CODE_B,
    cardBBadge: 'JS',
    explanationTitle: '설명',
    explanationBullets: [
      {
        tag: 'A',
        body: 'Boundary를 capture 대상으로 표시합니다. fallback pass에서 사용됩니다.',
      },
      {
        tag: 'B',
        body: 'wakeable을 updateQueue(Set)에 저장하고, Promise resolve 시 retry가 실행되도록 ping listener를 붙입니다.',
      },
    ],
    button: { label: 'GitHub에서 코드 보기', href: THROW_URL },
  },
  simulator: {
    number: '8',
    title: 'Suspense retry 시뮬레이터',
    leftTitle: 'Profile 컴포넌트 상태',
    promiseLabel: 'profilePromise',
    statusLabel: '상태',
    uiLabel: '현재 UI 상태',
    timelineTitle: '타임라인',
    timelineSubtitle: '단계를 클릭해 흐름을 확인해보세요',
    steps: [
      {
        number: '1',
        title: 'Profile suspends',
        description: 'use()가 pending으로 throw 발생',
        promiseStatus: 'pending',
        uiStatus: 'render 도중 — UI 없음',
        uiPreview: 'pending',
      },
      {
        number: '2',
        title: 'Boundary captures',
        description: '가장 가까운 Suspense Boundary가 capture됨',
        promiseStatus: 'pending',
        uiStatus: 'capture 표시 (다음 pass에서 fallback)',
        uiPreview: 'capture',
      },
      {
        number: '3',
        title: 'Spinner fallback 표시',
        description: 'fallback pass 실행되어 Spinner가 렌더됨',
        promiseStatus: 'pending',
        uiStatus: 'Fallback tree 표시 중',
        uiPreview: 'spinner',
      },
      {
        number: '4',
        title: 'Promise resolves',
        description: 'Promise가 resolve되고 ping 신호 발생',
        promiseStatus: 'fulfilled',
        uiStatus: 'fallback 유지 — retry 준비',
        uiPreview: 'loading',
      },
      {
        number: '5',
        title: 'Retry render',
        description: '같은 Boundary 기준으로 retry render 스케줄',
        promiseStatus: 'fulfilled',
        uiStatus: 'retry render 실행',
        uiPreview: 'ready',
      },
      {
        number: '6',
        title: 'Profile UI 표시',
        description: '다시 성공적으로 렌더되어 원래 UI가 복구됨',
        promiseStatus: 'fulfilled',
        uiStatus: '<Profile /> 정상 렌더',
        uiPreview: 'profile',
      },
    ],
    railLabels: ['render 도중', 'fallback pass', '대기 중', 'resolve 이벤트', 'retry 시작', '완료'],
  },
  followAlong: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'ReactFiberThrow.js 열기',
        description: 'Suspense 경로가 시작되는 파일을 확인합니다.',
      },
      {
        title: 'markSuspenseBoundaryShouldCapture 찾기',
        description: 'Boundary capture 표시가 어디서 일어나는지 확인합니다.',
      },
      {
        title: 'retryQueue 저장 위치 보기',
        description: 'wakeable이 Boundary.updateQueue에 저장되는 흐름을 봅니다.',
      },
      {
        title: 'attachPingListener 확인',
        description: 'Promise resolve 이후 retry가 어떻게 예약되는지 확인합니다.',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'Suspense Boundary는 suspend된 render를 capture한다.',
        body: '가장 가까운 Boundary가 선택되어 fallback pass를 준비한다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'fallback pass와 retry 흐름을 함께 준비한다.',
        body: 'wakeable을 저장하고 ping listener를 통해 재시작을 예약한다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'Promise resolve 이후 같은 Boundary를 기준으로 재시도한다.',
        body: '원래 UI로 자연스럽게 복구된다.',
        tone: 'purple',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Error Boundary는 렌더링 에러를 어떻게 붙잡을까?',
    description:
      'Promise 대신 일반 에러가 던져졌을 때 Error Boundary가 어떻게 잡아 복구하는지 이어서 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/error-boundary-recover',
  },
};

const en: SuspenseFallbackRetryContent = {
  hero: {
    badge: 'Suspense·Error · 4/10',
    titleLines: ['How does Suspense', 'switch to a fallback', 'and come back to the original UI?'],
    description:
      'React marks the Boundary as a capture target, and prepares a retry render once the Promise resolves.',
    code: {
      label: 'User code example',
      pill: 'JSX',
      fileLabel: 'App.jsx',
      content: HERO_CODE,
    },
    flow: {
      title: 'The whole flow at a glance',
      steps: [
        {
          number: '1',
          label: 'suspend',
          caption: 'Promise pending',
          icon: 'suspend',
          phase: 'pending',
        },
        {
          number: '2',
          label: 'fallback',
          caption: 'Spinner shown',
          icon: 'fallback',
          phase: 'pending',
        },
        {
          number: '3',
          label: 'resolve',
          caption: 'Promise resolved',
          icon: 'resolve',
          phase: 'retry',
        },
        { number: '4', label: 'retry', caption: 'Boundary retry', icon: 'retry', phase: 'retry' },
        {
          number: '5',
          label: 'content',
          caption: 'Original UI restored',
          icon: 'content',
          phase: 'retry',
        },
      ],
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'When a Promise is pending, which Suspense Boundary does React grab, and once it resolves, how does it retry?',
    concepts: [
      { icon: 'target', question: 'Which Boundary is grabbed?', answer: 'The nearest Boundary' },
      {
        icon: 'panel',
        question: 'When is the fallback shown?',
        answer: 'After the fallback pass is prepared',
      },
      { icon: 'refresh', question: 'After resolve?', answer: 'Retry on the same Boundary' },
      { icon: 'queue', question: 'Previous Promise?', answer: 'Tracked in the retryQueue' },
    ],
  },
  userCode: {
    number: '2',
    title: 'Suspense user code',
    description:
      'When Profile suspends, the nearest Suspense Boundary is in charge of the fallback UI.',
    code: { fileLabel: 'App.jsx', content: USER_CODE },
    treeTitle: 'Component tree',
    tree: [
      { label: 'App', kind: 'app' },
      { label: '<Suspense />  (Boundary)', kind: 'suspense' },
      { label: '<Profile />  (can suspend)', kind: 'profile' },
    ],
  },
  pending: {
    number: '3',
    title: 'A pending Promise happens',
    steps: [
      {
        title: 'Profile render starts',
        subtitle: 'Profile component rendering',
        inner: '<Profile />',
        innerKind: 'code',
        phase: 'capture',
      },
      {
        title: 'use(profilePromise)',
        subtitle: 'use() reads the Promise',
        inner: 'use(profilePromise)',
        innerKind: 'code',
        phase: 'pending',
      },
      {
        title: 'Promise pending',
        subtitle: 'The value is not ready yet',
        inner: 'pending',
        innerKind: 'status',
        phase: 'pending',
      },
      {
        title: 'throwException',
        subtitle: 'The thenable is thrown',
        inner: 'throw promise;',
        innerKind: 'code',
        phase: 'pending',
      },
    ],
  },
  search: {
    number: '4',
    title: 'Walk up to the nearest Suspense Boundary',
    description: 'From the throw site, walk upward to find the nearest Suspense Boundary.',
    tree: {
      app: '<App />',
      suspense: '<Suspense />',
      suspenseTag: 'nearest Boundary',
      intermediate: 'intermediate component',
      profile: '<Profile />',
      profileTag: 'throw site',
    },
    rulesTitle: 'Search rules',
    rules: [
      'Walk in the return direction (upward)',
      'Stop when a Suspense type is found',
      'Only the nearest one is captured',
    ],
  },
  capture: {
    number: '5',
    title: 'Boundary capture and fallback pass',
    internalTitle: 'Internal state changes',
    internalSteps: [
      { number: '1', title: 'Suspense Boundary found', description: 'Marked as capture target' },
      {
        number: '2',
        title: 'ShouldCapture marked',
        description: 'This boundary will render the fallback',
      },
      {
        number: '3',
        title: 'Fallback pass prepared',
        description: 'Switch to fallback UI on the next render',
      },
      { number: '4', title: 'Spinner rendered', description: 'Show the fallback UI to the user' },
    ],
    stateTitle: 'Suspense Boundary',
    stateLines: [
      { key: 'state', value: 'PrimaryTree' },
      { key: 'ShouldCapture', value: 'true', highlight: true },
      { key: 'DidCapture', value: '(next pass)' },
      { key: 'updateQueue', value: 'Set()' },
    ],
    fallbackTitle: 'Fallback pass runs',
    fallbackBody: 'Render the Fallback tree instead of the Primary tree',
    resultTitle: 'Actual UI result',
    resultSpinnerLabel: '<Spinner />',
  },
  retryQueue: {
    number: '6',
    title: 'retryQueue / wakeable / ping listener flow',
    steps: [
      {
        number: '1',
        title: 'Store the wakeable',
        description: 'Keep the thrown thenable as a wakeable',
        phase: 'capture',
      },
      {
        number: '2',
        title: 'Register in retryQueue',
        description: 'Add the wakeable to Boundary.updateQueue (Set)',
        phase: 'capture',
      },
      {
        number: '3',
        title: 'Watch Promise resolve',
        description: 'When the Promise resolves, a ping signal fires',
        phase: 'retry',
      },
      {
        number: '4',
        title: 'attachPingListener',
        description: 'On ping, schedule a retry request with the Scheduler',
        phase: 'retry',
      },
      {
        number: '5',
        title: 'Retry render',
        description: 'Run a retry render against the same Boundary',
        phase: 'retry',
      },
    ],
  },
  code: {
    number: '7',
    title: 'Source code preview (ReactFiberThrow.js)',
    cardALabel: 'A · markSuspenseBoundaryShouldCapture call',
    cardACode: CODE_A,
    cardABadge: 'JS',
    cardBLabel: 'B · retryQueue registration and ping listener',
    cardBCode: CODE_B,
    cardBBadge: 'JS',
    explanationTitle: 'Explanation',
    explanationBullets: [
      {
        tag: 'A',
        body: 'Marks the Boundary as a capture target — used during the fallback pass.',
      },
      {
        tag: 'B',
        body: 'Stores the wakeable in updateQueue (Set), and attaches a ping listener so a retry is run when the Promise resolves.',
      },
    ],
    button: { label: 'View source on GitHub', href: THROW_URL },
  },
  simulator: {
    number: '8',
    title: 'Suspense retry simulator',
    leftTitle: 'Profile component state',
    promiseLabel: 'profilePromise',
    statusLabel: 'Status',
    uiLabel: 'Current UI state',
    timelineTitle: 'Timeline',
    timelineSubtitle: 'Click a step to walk the flow',
    steps: [
      {
        number: '1',
        title: 'Profile suspends',
        description: 'use() throws while the Promise is pending',
        promiseStatus: 'pending',
        uiStatus: 'mid-render — no UI yet',
        uiPreview: 'pending',
      },
      {
        number: '2',
        title: 'Boundary captures',
        description: 'The nearest Suspense Boundary is captured',
        promiseStatus: 'pending',
        uiStatus: 'capture marked (fallback on next pass)',
        uiPreview: 'capture',
      },
      {
        number: '3',
        title: 'Spinner fallback shown',
        description: 'The fallback pass renders the Spinner',
        promiseStatus: 'pending',
        uiStatus: 'Fallback tree visible',
        uiPreview: 'spinner',
      },
      {
        number: '4',
        title: 'Promise resolves',
        description: 'The Promise resolves and a ping fires',
        promiseStatus: 'fulfilled',
        uiStatus: 'fallback held — retry queued',
        uiPreview: 'loading',
      },
      {
        number: '5',
        title: 'Retry render',
        description: 'A retry render is scheduled on the same Boundary',
        promiseStatus: 'fulfilled',
        uiStatus: 'retry render running',
        uiPreview: 'ready',
      },
      {
        number: '6',
        title: 'Profile UI shown',
        description: 'The retry succeeds and the original UI is restored',
        promiseStatus: 'fulfilled',
        uiStatus: '<Profile /> rendered normally',
        uiPreview: 'profile',
      },
    ],
    railLabels: ['mid-render', 'fallback pass', 'waiting', 'resolve event', 'retry starts', 'done'],
  },
  followAlong: {
    number: '9',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Open ReactFiberThrow.js',
        description: 'See the file where the Suspense path starts.',
      },
      {
        title: 'Find markSuspenseBoundaryShouldCapture',
        description: 'Check where the boundary capture is marked.',
      },
      {
        title: 'See where retryQueue is stored',
        description: 'Look at the flow that puts the wakeable into Boundary.updateQueue.',
      },
      {
        title: 'Check attachPingListener',
        description: 'See how a retry is scheduled after the Promise resolves.',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'A Suspense Boundary captures the suspended render.',
        body: 'The nearest Boundary is chosen and prepares the fallback pass.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'It prepares the fallback pass and the retry flow together.',
        body: 'The wakeable is stored and a ping listener schedules the retry.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'After the Promise resolves, retry is run on the same Boundary.',
        body: 'The original UI is naturally restored.',
        tone: 'purple',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'How does the Error Boundary catch render errors?',
    description:
      'Continue with how an Error Boundary catches and recovers when a regular error is thrown instead of a Promise.',
    cta: 'Go to the next page',
    href: '/error-boundary-recover',
  },
};

export const suspenseFallbackRetryContent: Record<Locale, SuspenseFallbackRetryContent> = {
  ko,
  en,
};
