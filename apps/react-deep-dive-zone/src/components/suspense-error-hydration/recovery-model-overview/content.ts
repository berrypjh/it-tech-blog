import type { Locale } from '@it-tech-blog/preferences';

import type { FinaleBannerContent } from '../../shared/FinalLaunchBanner';

import type { Domain } from './tone';

export type HeroInputCard = {
  domain: Domain;
  title: string;
  caption: string;
};

export type HeroOutputCard = {
  domain: Domain;
  title: string;
};

export type ConceptCard = {
  domain: Domain;
  title: string;
  arrow: string;
  body: string;
  flow: string[];
};

export type ScenarioFlowStep = { label: string; domain: Domain };

export type CodePathCard = {
  fileName: string;
  domain: Domain;
  functions: string[];
  role: string;
};

export type ChecklistItem = string;

export type DecisionStep = {
  question: string;
  branches: { label: string; domain: Domain }[];
};

export type QuizCard = {
  id: 'q1' | 'q2' | 'q3';
  question: string;
  options: { key: 'a' | 'b' | 'c' | 'd'; label: string }[];
  answer: 'a' | 'b' | 'c' | 'd';
  explanation: string;
};

export type RecoveryModelOverviewContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    inputs: HeroInputCard[];
    central: {
      title: string;
      lines: string[];
    };
    outputs: HeroOutputCard[];
  };
  question: {
    title: string;
    question: string;
    badges: string[];
  };
  conceptMap: {
    number: string;
    title: string;
    cards: ConceptCard[];
  };
  pending: {
    number: string;
    title: string;
    situationLabel: string;
    situation: string;
    judgementLabel: string;
    judgement: string;
    recoveryLabel: string;
    recovery: string;
    flow: ScenarioFlowStep[];
    codeHintsLabel: string;
    codeHints: { file: string; functions: string[] }[];
  };
  rejected: {
    number: string;
    title: string;
    situationLabel: string;
    situation: string;
    judgementLabel: string;
    judgement: string;
    recoveryLabel: string;
    recovery: string;
    flow: ScenarioFlowStep[];
    emphasis: string;
  };
  renderError: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    treeTitle: string;
    treeDescription: string;
    tree: string[];
    updateTitle: string;
    updateSteps: string[];
  };
  hydrationMismatch: {
    number: string;
    title: string;
    serverLabel: string;
    serverValue: string;
    clientLabel: string;
    clientValue: string;
    mismatchLabel: string;
    flowTitle: string;
    flow: ScenarioFlowStep[];
    note: string;
  };
  serverFallback: {
    number: string;
    title: string;
    steps: { title: string; caption: string; domain: Domain }[];
  };
  codePathMap: {
    number: string;
    title: string;
    cards: CodePathCard[];
  };
  checklist: {
    number: string;
    title: string;
    items: ChecklistItem[];
    decisionTitle: string;
    decisions: DecisionStep[];
  };
  quiz: {
    number: string;
    title: string;
    selectLabel: string;
    correctLabel: string;
    incorrectLabel: string;
    explanationLabel: string;
    cards: QuizCard[];
  };
  finale: FinaleBannerContent;
};

const RENDER_ERROR_CODE = `function Profile() {
  // 렌더 중 예외 발생
  throw new Error("Profile failed");
}`;

const RENDER_ERROR_CODE_EN = `function Profile() {
  // exception during render
  throw new Error("Profile failed");
}`;

const ko: RecoveryModelOverviewContent = {
  hero: {
    badge: 'Suspense/Error · 10/10단계',
    titleLines: ['Suspense / Error / Hydration,', '하나의 복구 모델로 정리해보자'],
    description:
      'Promise 대기, 렌더 실패, hydration mismatch, server fallback과 client recovery를 하나의 렌더링 모델로 연결해봅니다.',
    inputs: [
      { domain: 'pending', title: 'Pending Promise', caption: 'use(Promise) pending' },
      { domain: 'rejected', title: 'Rejected Promise', caption: 'use(Promise) rejected' },
      { domain: 'error', title: 'Render Error', caption: '자식 렌더 중 예외' },
      { domain: 'hydration', title: 'Hydration Mismatch', caption: '서버 DOM 불일치' },
      { domain: 'server', title: 'Server Fallback', caption: '서버 fallback HTML' },
    ],
    central: {
      title: 'Recovery Model',
      lines: ['값의 성격 판단', 'Boundary 탐색', 'fallback / recovery', 'retry 또는 report'],
    },
    outputs: [
      { domain: 'pending', title: 'Suspense fallback' },
      { domain: 'boundary', title: 'Error Boundary' },
      { domain: 'hydration', title: 'Hydration Recovery' },
      { domain: 'recovery', title: 'Client Recovery' },
    ],
  },
  question: {
    title: '오늘 해결할 질문',
    question:
      'React는 렌더링이 멈추거나 실패하거나 서버 HTML과 맞지 않을 때, 어떤 기준으로 복구 흐름을 선택할까?',
    badges: [
      'Promise인가?',
      'Error인가?',
      'Boundary가 있는가?',
      'Hydration 중인가?',
      'Retry / Report가 필요한가?',
    ],
  },
  conceptMap: {
    number: '3',
    title: '전체 개념 맵',
    cards: [
      {
        domain: 'pending',
        title: '대기',
        arrow: '→ Suspense',
        body: 'Promise가 아직 준비되지 않았을 때 UI를 멈추지 않고 fallback으로 전환합니다.',
        flow: ['use(Promise)', 'thenable tracking', 'Suspense Boundary', 'fallback', 'retry'],
      },
      {
        domain: 'error',
        title: '실패',
        arrow: '→ Error Boundary',
        body: '렌더링 중 실제 에러가 발생했을 때 가장 가까운 복구 경계가 fallback UI를 렌더합니다.',
        flow: [
          'throw Error',
          'throwException',
          'Error Boundary',
          'captured update',
          'fallback render',
        ],
      },
      {
        domain: 'hydration',
        title: '불일치',
        arrow: '→ Hydration Recovery',
        body: '서버 HTML과 클라이언트 렌더 결과가 다를 때 복구 가능한 에러로 보고하고 client render로 회복합니다.',
        flow: [
          'hydrateRoot',
          'DOM/Fiber matching',
          'mismatch',
          'recoverable error',
          'client recovery',
        ],
      },
    ],
  },
  pending: {
    number: '4',
    title: 'Pending Promise 시나리오',
    situationLabel: '상황',
    situation: 'use(Promise)가 pending 상태의 Promise를 읽습니다.',
    judgementLabel: '판단',
    judgement: '값이 아직 없으므로 정상 렌더 결과를 만들 수 없습니다.',
    recoveryLabel: '복구 모델',
    recovery:
      'Suspense Boundary가 fallback UI를 보여주고, Promise가 resolve되면 retry render를 실행합니다.',
    flow: [
      { label: 'use(Promise) pending', domain: 'pending' },
      { label: 'thenable tracking', domain: 'pending' },
      { label: 'throwException', domain: 'error' },
      { label: 'Suspense Boundary', domain: 'pending' },
      { label: 'fallback', domain: 'pending' },
      { label: 'promise resolve', domain: 'recovery' },
      { label: 'retry', domain: 'recovery' },
    ],
    codeHintsLabel: '코드 힌트',
    codeHints: [
      { file: 'ReactFiberThenable.js', functions: ['trackUsedThenable'] },
      {
        file: 'ReactFiberThrow.js',
        functions: ['markSuspenseBoundaryShouldCapture', 'attachPingListener'],
      },
    ],
  },
  rejected: {
    number: '5',
    title: 'Rejected Promise 시나리오',
    situationLabel: '상황',
    situation: 'use(Promise)가 rejected 상태를 만납니다.',
    judgementLabel: '판단',
    judgement: '값을 기다릴 수 있는 상태가 아니라 실패한 값입니다.',
    recoveryLabel: '복구 모델',
    recovery:
      'rejected reason은 Error 경로로 이동하고, 가장 가까운 Error Boundary가 fallback UI를 렌더합니다.',
    flow: [
      { label: 'use(Promise) rejected', domain: 'rejected' },
      { label: 'rejected reason throw', domain: 'rejected' },
      { label: 'throwException', domain: 'error' },
      { label: 'regular error path', domain: 'rejected' },
      { label: 'Error Boundary', domain: 'boundary' },
      { label: 'fallback UI', domain: 'recovery' },
    ],
    emphasis: 'pending은 Suspense, rejected는 Error Boundary로 이어집니다.',
  },
  renderError: {
    number: '6',
    title: 'Render Error 시나리오',
    code: { fileLabel: 'Profile.jsx', content: RENDER_ERROR_CODE },
    treeTitle: 'Boundary 탐색',
    treeDescription: 'React는 return 경로를 따라 가장 가까운 Error Boundary를 찾습니다.',
    tree: ['Profile', 'Card', 'ErrorBoundary', 'App'],
    updateTitle: 'captured update',
    updateSteps: [
      'ShouldCapture flag',
      'createClassErrorUpdate',
      'enqueueCapturedUpdate',
      'fallback render',
    ],
  },
  hydrationMismatch: {
    number: '7',
    title: 'Hydration Mismatch 시나리오',
    serverLabel: 'Server HTML',
    serverValue: '<span>10:00</span>',
    clientLabel: 'Client Render',
    clientValue: '<span>10:01</span>',
    mismatchLabel: 'Mismatch',
    flowTitle: '복구 flow',
    flow: [
      { label: 'DOM/Fiber matching', domain: 'hydration' },
      { label: 'mismatch 감지', domain: 'error' },
      { label: 'throwOnHydrationMismatch', domain: 'error' },
      { label: 'queueHydrationError', domain: 'hydration' },
      { label: 'onRecoverableError', domain: 'recovery' },
      { label: 'client render recovery', domain: 'recovery' },
    ],
    note: 'Hydration mismatch는 단순 경고가 아니라 서버 DOM 재사용 실패를 감지한 복구 분기입니다.',
  },
  serverFallback: {
    number: '8',
    title: 'Server fallback + client recovery 시나리오',
    steps: [
      {
        title: '서버 render error',
        caption: '서버 렌더 중 에러 발생',
        domain: 'error',
      },
      {
        title: 'Suspense fallback HTML',
        caption: '가장 가까운 Suspense fallback을 HTML로 전송',
        domain: 'pending',
      },
      {
        title: '클라이언트 hydration',
        caption: 'hydrateRoot가 boundary 단위로 연결 시도',
        domain: 'hydration',
      },
      {
        title: 'client success',
        caption: '클라이언트에서 실제 UI 렌더 성공',
        domain: 'recovery',
      },
      {
        title: '실제 UI 복구',
        caption: 'fallback에서 실제 UI로 교체',
        domain: 'completion',
      },
    ],
  },
  codePathMap: {
    number: '9',
    title: '핵심 코드 경로 지도',
    cards: [
      {
        fileName: 'ReactFiberThenable.js',
        domain: 'pending',
        functions: ['trackUsedThenable'],
        role: 'use(Promise)로 읽은 thenable을 렌더 순서 기준으로 추적합니다.',
      },
      {
        fileName: 'ReactFiberThrow.js',
        domain: 'error',
        functions: [
          'throwException',
          'markSuspenseBoundaryShouldCapture',
          'createClassErrorUpdate',
        ],
        role: 'Promise와 Error를 분기하고 Suspense / Error Boundary capture를 처리합니다.',
      },
      {
        fileName: 'ReactFiberHydrationContext.js',
        domain: 'hydration',
        functions: [
          'enterHydrationState',
          'throwOnHydrationMismatch',
          'queueHydrationError',
          'claimNextHydratableSuspenseInstance',
        ],
        role: 'hydration 상태 초기화, DOM/Fiber 매칭, mismatch 복구 경로를 담당합니다.',
      },
      {
        fileName: 'Root Error Callbacks',
        domain: 'recovery',
        functions: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        role: '복구 흐름과 운영 모니터링을 연결합니다.',
      },
    ],
  },
  checklist: {
    number: '10',
    title: '실전 읽기 체크리스트',
    items: [
      '지금 값은 Promise인가 Error인가?',
      'Promise라면 pending인가 rejected인가?',
      '어떤 Boundary가 capture하는가?',
      'retry가 필요한가?',
      'hydration 상태인가?',
      'mismatch가 발생했는가?',
      '복구 후 root error callback이 필요한가?',
    ],
    decisionTitle: '판단 flow',
    decisions: [
      {
        question: 'Thrown value · thenable?',
        branches: [
          { label: 'yes → Suspense', domain: 'pending' },
          { label: 'no → Error Boundary', domain: 'boundary' },
        ],
      },
      {
        question: 'Hydration 중 · mismatch?',
        branches: [{ label: 'yes → Recoverable Error / Client Recovery', domain: 'recovery' }],
      },
      {
        question: '복구 후 보고 필요?',
        branches: [{ label: '→ Root Error Callback', domain: 'recovery' }],
      },
    ],
  },
  quiz: {
    number: '11',
    title: '최종 퀴즈',
    selectLabel: '선택지',
    correctLabel: '정답입니다',
    incorrectLabel: '다시 생각해보세요',
    explanationLabel: '해설',
    cards: [
      {
        id: 'q1',
        question: 'use(Promise)가 rejected되면 어느 경로로 이동할까?',
        options: [
          { key: 'a', label: 'Suspense fallback' },
          { key: 'b', label: 'Error Boundary' },
          { key: 'c', label: 'Hydration Recovery' },
          { key: 'd', label: 'Commit Phase' },
        ],
        answer: 'b',
        explanation:
          'rejected reason은 regular error path를 따라 가장 가까운 Error Boundary로 전달됩니다.',
      },
      {
        id: 'q2',
        question: 'Hydration mismatch가 감지되면 어떤 함수가 핵심 분기점인가?',
        options: [
          { key: 'a', label: 'trackUsedThenable' },
          { key: 'b', label: 'createClassErrorUpdate' },
          { key: 'c', label: 'throwOnHydrationMismatch' },
          { key: 'd', label: 'getNextLanes' },
        ],
        answer: 'c',
        explanation:
          'throwOnHydrationMismatch가 mismatch 감지 시 호출되어 복구 경로 진입을 만듭니다.',
      },
      {
        id: 'q3',
        question: 'React 19에서 복구 가능한 hydration error를 root 옵션으로 보고하는 콜백은?',
        options: [
          { key: 'a', label: 'onCaughtError' },
          { key: 'b', label: 'onUncaughtError' },
          { key: 'c', label: 'onRecoverableError' },
          { key: 'd', label: 'componentDidCatch' },
        ],
        answer: 'c',
        explanation:
          'onRecoverableError가 React 자동 복구 에러를 root 레벨에서 보고하는 콜백입니다.',
      },
    ],
  },
  finale: {
    progressLabel: '13/15 챕터 완료',
    copyLine1: '실패와 복구 모델을',
    copyLine2: '한 장으로 정리했습니다.',
    copyLine3: '이제 React 19의 변화로.',
    primaryCta: 'React 19에서 달라진 지점 읽기',
    primaryHref: '/react-19-change-map',
    secondaryCta: 'Suspense 챕터 처음부터 다시 보기',
    secondaryHref: '/why-failable-render',
  },
};

const en: RecoveryModelOverviewContent = {
  hero: {
    badge: 'Suspense·Error · 10/10',
    titleLines: ['Suspense / Error / Hydration,', 'now folded into one recovery model'],
    description:
      'Tie together Promise waiting, render failure, hydration mismatch, server fallback, and client recovery into one rendering model.',
    inputs: [
      { domain: 'pending', title: 'Pending Promise', caption: 'use(Promise) pending' },
      { domain: 'rejected', title: 'Rejected Promise', caption: 'use(Promise) rejected' },
      { domain: 'error', title: 'Render Error', caption: 'exception during child render' },
      { domain: 'hydration', title: 'Hydration Mismatch', caption: 'server DOM mismatch' },
      { domain: 'server', title: 'Server Fallback', caption: 'server fallback HTML' },
    ],
    central: {
      title: 'Recovery Model',
      lines: ['Classify the value', 'Find a Boundary', 'fallback / recovery', 'retry or report'],
    },
    outputs: [
      { domain: 'pending', title: 'Suspense fallback' },
      { domain: 'boundary', title: 'Error Boundary' },
      { domain: 'hydration', title: 'Hydration Recovery' },
      { domain: 'recovery', title: 'Client Recovery' },
    ],
  },
  question: {
    title: "Today's question",
    question:
      'When rendering pauses, fails, or does not match the server HTML, what criteria does React use to pick a recovery flow?',
    badges: ['Promise?', 'Error?', 'Is there a Boundary?', 'In hydration?', 'Need retry / report?'],
  },
  conceptMap: {
    number: '3',
    title: 'Whole-part concept map',
    cards: [
      {
        domain: 'pending',
        title: 'Wait',
        arrow: '→ Suspense',
        body: 'When the Promise is not ready yet, switch to a fallback instead of blocking the UI.',
        flow: ['use(Promise)', 'thenable tracking', 'Suspense Boundary', 'fallback', 'retry'],
      },
      {
        domain: 'error',
        title: 'Fail',
        arrow: '→ Error Boundary',
        body: 'On a real render error, the nearest recovery boundary renders the fallback UI.',
        flow: [
          'throw Error',
          'throwException',
          'Error Boundary',
          'captured update',
          'fallback render',
        ],
      },
      {
        domain: 'hydration',
        title: 'Mismatch',
        arrow: '→ Hydration Recovery',
        body: "When the server HTML and the client render don't match, report as recoverable and switch to client render.",
        flow: [
          'hydrateRoot',
          'DOM/Fiber matching',
          'mismatch',
          'recoverable error',
          'client recovery',
        ],
      },
    ],
  },
  pending: {
    number: '4',
    title: 'Pending Promise scenario',
    situationLabel: 'Situation',
    situation: 'use(Promise) reads a Promise that is still pending.',
    judgementLabel: 'Judgement',
    judgement: 'There is no value yet, so a normal render result cannot be produced.',
    recoveryLabel: 'Recovery model',
    recovery:
      'A Suspense Boundary shows the fallback UI and runs a retry render once the Promise resolves.',
    flow: [
      { label: 'use(Promise) pending', domain: 'pending' },
      { label: 'thenable tracking', domain: 'pending' },
      { label: 'throwException', domain: 'error' },
      { label: 'Suspense Boundary', domain: 'pending' },
      { label: 'fallback', domain: 'pending' },
      { label: 'promise resolve', domain: 'recovery' },
      { label: 'retry', domain: 'recovery' },
    ],
    codeHintsLabel: 'Code hints',
    codeHints: [
      { file: 'ReactFiberThenable.js', functions: ['trackUsedThenable'] },
      {
        file: 'ReactFiberThrow.js',
        functions: ['markSuspenseBoundaryShouldCapture', 'attachPingListener'],
      },
    ],
  },
  rejected: {
    number: '5',
    title: 'Rejected Promise scenario',
    situationLabel: 'Situation',
    situation: 'use(Promise) meets a rejected Promise.',
    judgementLabel: 'Judgement',
    judgement: 'It is a failed value — not something we can wait on.',
    recoveryLabel: 'Recovery model',
    recovery:
      'The rejected reason moves down the Error path, and the nearest Error Boundary renders the fallback UI.',
    flow: [
      { label: 'use(Promise) rejected', domain: 'rejected' },
      { label: 'rejected reason throw', domain: 'rejected' },
      { label: 'throwException', domain: 'error' },
      { label: 'regular error path', domain: 'rejected' },
      { label: 'Error Boundary', domain: 'boundary' },
      { label: 'fallback UI', domain: 'recovery' },
    ],
    emphasis: 'pending → Suspense, rejected → Error Boundary.',
  },
  renderError: {
    number: '6',
    title: 'Render Error scenario',
    code: { fileLabel: 'Profile.jsx', content: RENDER_ERROR_CODE_EN },
    treeTitle: 'Boundary search',
    treeDescription: 'React walks up the return path to find the nearest Error Boundary.',
    tree: ['Profile', 'Card', 'ErrorBoundary', 'App'],
    updateTitle: 'captured update',
    updateSteps: [
      'ShouldCapture flag',
      'createClassErrorUpdate',
      'enqueueCapturedUpdate',
      'fallback render',
    ],
  },
  hydrationMismatch: {
    number: '7',
    title: 'Hydration Mismatch scenario',
    serverLabel: 'Server HTML',
    serverValue: '<span>10:00</span>',
    clientLabel: 'Client Render',
    clientValue: '<span>10:01</span>',
    mismatchLabel: 'Mismatch',
    flowTitle: 'Recovery flow',
    flow: [
      { label: 'DOM/Fiber matching', domain: 'hydration' },
      { label: 'mismatch detected', domain: 'error' },
      { label: 'throwOnHydrationMismatch', domain: 'error' },
      { label: 'queueHydrationError', domain: 'hydration' },
      { label: 'onRecoverableError', domain: 'recovery' },
      { label: 'client render recovery', domain: 'recovery' },
    ],
    note: 'Hydration mismatch is not a mere warning — it detects server-DOM reuse failure as a recovery branch.',
  },
  serverFallback: {
    number: '8',
    title: 'Server fallback + client recovery scenario',
    steps: [
      {
        title: 'Server render error',
        caption: 'An error occurs during server render',
        domain: 'error',
      },
      {
        title: 'Suspense fallback HTML',
        caption: 'Stream the nearest Suspense fallback as HTML',
        domain: 'pending',
      },
      {
        title: 'Client hydration',
        caption: 'hydrateRoot tries per-boundary hydration',
        domain: 'hydration',
      },
      {
        title: 'Client success',
        caption: 'The client renders the real UI successfully',
        domain: 'recovery',
      },
      {
        title: 'Real UI restored',
        caption: 'Fallback is swapped to the real UI',
        domain: 'completion',
      },
    ],
  },
  codePathMap: {
    number: '9',
    title: 'Core source-code path map',
    cards: [
      {
        fileName: 'ReactFiberThenable.js',
        domain: 'pending',
        functions: ['trackUsedThenable'],
        role: 'Tracks thenables read by use(Promise) by render order.',
      },
      {
        fileName: 'ReactFiberThrow.js',
        domain: 'error',
        functions: [
          'throwException',
          'markSuspenseBoundaryShouldCapture',
          'createClassErrorUpdate',
        ],
        role: 'Branches between Promise and Error, handles Suspense / Error Boundary capture.',
      },
      {
        fileName: 'ReactFiberHydrationContext.js',
        domain: 'hydration',
        functions: [
          'enterHydrationState',
          'throwOnHydrationMismatch',
          'queueHydrationError',
          'claimNextHydratableSuspenseInstance',
        ],
        role: 'Initializes hydration state, matches DOM and Fiber, owns the mismatch recovery path.',
      },
      {
        fileName: 'Root Error Callbacks',
        domain: 'recovery',
        functions: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        role: 'Connects recovery flows to production monitoring.',
      },
    ],
  },
  checklist: {
    number: '10',
    title: 'Real-world reading checklist',
    items: [
      'Is the value a Promise or an Error?',
      'If a Promise, is it pending or rejected?',
      'Which Boundary captures it?',
      'Does a retry need to happen?',
      'Are we in hydration?',
      'Did a mismatch happen?',
      'After recovery, do we need a root error callback?',
    ],
    decisionTitle: 'Decision flow',
    decisions: [
      {
        question: 'Thrown value · thenable?',
        branches: [
          { label: 'yes → Suspense', domain: 'pending' },
          { label: 'no → Error Boundary', domain: 'boundary' },
        ],
      },
      {
        question: 'In hydration · mismatch?',
        branches: [{ label: 'yes → Recoverable Error / Client Recovery', domain: 'recovery' }],
      },
      {
        question: 'Need to report after recovery?',
        branches: [{ label: '→ Root Error Callback', domain: 'recovery' }],
      },
    ],
  },
  quiz: {
    number: '11',
    title: 'Final quiz',
    selectLabel: 'Options',
    correctLabel: 'Correct',
    incorrectLabel: 'Try again',
    explanationLabel: 'Explanation',
    cards: [
      {
        id: 'q1',
        question: 'When use(Promise) rejects, which path does it take?',
        options: [
          { key: 'a', label: 'Suspense fallback' },
          { key: 'b', label: 'Error Boundary' },
          { key: 'c', label: 'Hydration Recovery' },
          { key: 'd', label: 'Commit Phase' },
        ],
        answer: 'b',
        explanation:
          'The rejected reason follows the regular error path and is forwarded to the nearest Error Boundary.',
      },
      {
        id: 'q2',
        question: 'When a hydration mismatch is detected, which function is the key branch point?',
        options: [
          { key: 'a', label: 'trackUsedThenable' },
          { key: 'b', label: 'createClassErrorUpdate' },
          { key: 'c', label: 'throwOnHydrationMismatch' },
          { key: 'd', label: 'getNextLanes' },
        ],
        answer: 'c',
        explanation:
          'throwOnHydrationMismatch is called on a mismatch and opens the recovery path.',
      },
      {
        id: 'q3',
        question: 'Which React 19 root option reports recoverable hydration errors?',
        options: [
          { key: 'a', label: 'onCaughtError' },
          { key: 'b', label: 'onUncaughtError' },
          { key: 'c', label: 'onRecoverableError' },
          { key: 'd', label: 'componentDidCatch' },
        ],
        answer: 'c',
        explanation: 'onRecoverableError reports React-auto-recovered errors at the root level.',
      },
    ],
  },
  finale: {
    progressLabel: 'Chapter 13 of 15 complete',
    copyLine1: 'You mapped the failure',
    copyLine2: 'and recovery model.',
    copyLine3: 'Now what changed in React 19.',
    primaryCta: 'Read what changed in React 19',
    primaryHref: '/react-19-change-map',
    secondaryCta: 'Review Suspense from the start',
    secondaryHref: '/why-failable-render',
  },
};

export const recoveryModelOverviewContent: Record<Locale, RecoveryModelOverviewContent> = {
  ko,
  en,
};
