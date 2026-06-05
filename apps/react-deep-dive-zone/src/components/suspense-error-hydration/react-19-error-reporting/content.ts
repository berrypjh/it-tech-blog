import type { Locale } from '@it-tech-blog/preferences';

import type { CallbackKind, LogLevel, Severity } from './tone';

export type RootCallbackCard = {
  kind: CallbackKind;
  name: string;
  summary: string;
  badge: string;
};

export type ConceptCard = {
  icon: 'map' | 'refresh' | 'callback' | 'chart';
  label: string;
};

export type WhyCard = {
  icon: 'shield' | 'search' | 'chart';
  title: string;
  arrow: string;
  body: string;
  tone: 'blue' | 'violet' | 'mixed';
};

export type CallbackTableRow = {
  kind: CallbackKind;
  callback: string;
  caller: string;
  errorType: string;
  uiRecover: { kind: 'check' | 'cross'; label: string };
  useCase: string;
  severity: Severity;
};

export type FlowStep = {
  title: string;
  lines: string[];
  kind: 'app' | 'callbacks' | 'monitoring' | 'server' | 'hydrate' | 'internal';
};

export type RoutingRow = {
  scenario: string;
  description: string;
  callback: { kind: CallbackKind; name: string };
  uiResult: string;
  logLevel: LogLevel;
  example: string;
  icon: 'shield' | 'alert' | 'refresh';
};

export type ScenarioCard = {
  kind: 'caught' | 'recoverable';
  title: string;
  steps: string[];
  checks: string[];
};

export type RouterOption = {
  key: 'boundary' | 'fatal' | 'hydration' | 'monitoring';
  title: string;
  description: string;
};

export type RouterResult = {
  callback: string;
  callbackKind: CallbackKind | 'mixed';
  uiResult: string;
  logging: string;
  logLevel: LogLevel | 'mixed';
  body: string;
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'violet';
};

export type React19ErrorReportingContent = {
  hero: {
    badge: string;
    titleLines: [string, string];
    description: string;
    callbacks: RootCallbackCard[];
  };
  question: {
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  why: {
    number: string;
    title: string;
    cards: WhyCard[];
  };
  callbackTable: {
    number: string;
    title: string;
    headers: {
      callback: string;
      caller: string;
      errorType: string;
      uiRecover: string;
      useCase: string;
      severity: string;
    };
    rows: CallbackTableRow[];
  };
  createRoot: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    flowTitle: string;
    steps: FlowStep[];
  };
  hydrateRoot: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    flowTitle: string;
    steps: FlowStep[];
    note: string;
  };
  routing: {
    number: string;
    title: string;
    headers: {
      scenario: string;
      description: string;
      callback: string;
      uiResult: string;
      logLevel: string;
      example: string;
    };
    rows: RoutingRow[];
  };
  scenarios: {
    number: string;
    title: string;
    cards: ScenarioCard[];
  };
  router: {
    number: string;
    title: string;
    options: RouterOption[];
    results: Record<RouterOption['key'], RouterResult>;
    labels: {
      callback: string;
      uiResult: string;
      logging: string;
      explain: string;
    };
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

const CREATE_ROOT_CODE = `import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

const root = createRoot(container, {
  onCaughtError(error, info) {
    reportCaptured(error, info);
  },
  onUncaughtError(error, info) {
    reportFatal(error, info);
  },
  onRecoverableError(error, info) {
    reportRecoverable(error, info);
  },
});

root.render(<App />);`;

const HYDRATE_ROOT_CODE = `import { hydrateRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

hydrateRoot(container, <App />, {
  onCaughtError(error, info) {
    reportCaptured(error, info);
  },
  onUncaughtError(error, info) {
    reportFatal(error, info);
  },
  onRecoverableError(error, info) {
    reportRecoverable(error, info);
  },
});`;

const ko: React19ErrorReportingContent = {
  hero: {
    badge: 'Suspense/Error · 6/10단계',
    titleLines: ['React 19는 복구와', '보고를 분리했다'],
    description:
      '화면 복구는 React가 수행하고, 로깅과 모니터링은 root callback으로 다룰 수 있습니다.',
    callbacks: [
      {
        kind: 'caught',
        name: 'onCaughtError',
        summary: 'Error Boundary가 잡은 에러',
        badge: 'UI 복구됨',
      },
      {
        kind: 'uncaught',
        name: 'onUncaughtError',
        summary: '어떤 Boundary도 잡지 못한 에러',
        badge: '치명적 에러',
      },
      {
        kind: 'recoverable',
        name: 'onRecoverableError',
        summary: 'React가 자동 복구한 에러 (주로 Hydration)',
        badge: '자동 복구됨',
      },
    ],
  },
  question: {
    title: '오늘 해결할 질문',
    question:
      'Error Boundary가 잡은 에러, 잡히지 않은 에러, hydration 복구 에러를 각각 어떻게 구분해 보고할까?',
    concepts: [
      { icon: 'map', label: '어떤 에러가 어디서 발생했는가?' },
      { icon: 'refresh', label: '복구는 어떻게 이루어지는가?' },
      { icon: 'callback', label: '어떤 callback이 호출되는가?' },
      { icon: 'chart', label: '모니터링과 로깅은 어떻게 연결하는가?' },
    ],
  },
  why: {
    number: '2',
    title: 'React 19에서 왜 필요한가?',
    cards: [
      {
        icon: 'shield',
        title: 'UI 복구',
        arrow: '→ Error Boundary',
        body: '사용자 경험을 지키기 위해 가장 가까운 Boundary가 fallback으로 복구합니다.',
        tone: 'blue',
      },
      {
        icon: 'search',
        title: '관측 가능성',
        arrow: '→ Root callback',
        body: '어디서 어떤 유형의 에러가 발생했는지 root 레벨에서 정확히 파악할 수 있습니다.',
        tone: 'violet',
      },
      {
        icon: 'chart',
        title: '프로덕션 모니터링',
        arrow: '→ 에러 유형별 로깅',
        body: '치명/비치명/복구 가능한 에러를 구분하여 알맞은 레벨과 채널로 전달할 수 있습니다.',
        tone: 'mixed',
      },
    ],
  },
  callbackTable: {
    number: '3',
    title: '세 가지 root error callback 비교',
    headers: {
      callback: 'Callback',
      caller: '누가 호출하나?',
      errorType: '다루는 에러 유형',
      uiRecover: 'UI 복구',
      useCase: '주요 사용 사례',
      severity: '심각도',
    },
    rows: [
      {
        kind: 'caught',
        callback: 'onCaughtError(error, info)',
        caller: 'Error Boundary가 에러를 capture 했을 때',
        errorType: '컴포넌트 트리 안에서 Boundary가 잡은 에러',
        uiRecover: { kind: 'check', label: 'fallback 가능' },
        useCase: '비즈니스 로직 에러, 컴포넌트 렌더 오류',
        severity: 'medium',
      },
      {
        kind: 'uncaught',
        callback: 'onUncaughtError(error, info)',
        caller: '어떤 Boundary도 잡지 못했을 때',
        errorType: '앱 전체를 깨뜨리는 치명적 에러',
        uiRecover: { kind: 'cross', label: 'root unmount 가능' },
        useCase: '초기 렌더링 실패, 루트 컴포넌트 예외',
        severity: 'critical',
      },
      {
        kind: 'recoverable',
        callback: 'onRecoverableError(error, info)',
        caller: 'React가 자동으로 복구했을 때',
        errorType: 'Hydration mismatch 등 복구 가능한 내부 에러',
        uiRecover: { kind: 'check', label: '자동 복구' },
        useCase: 'SSR Hydration mismatch, recoverable hydration error',
        severity: 'low',
      },
    ],
  },
  createRoot: {
    number: '4',
    title: 'createRoot 예제 (Client App)',
    code: { fileLabel: 'main.tsx', content: CREATE_ROOT_CODE },
    flowTitle: 'Client App Monitoring 흐름',
    steps: [
      {
        title: 'React App',
        lines: ['(createRoot)'],
        kind: 'app',
      },
      {
        title: 'Root Error Callbacks',
        lines: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        kind: 'callbacks',
      },
      {
        title: 'Monitoring / Logging',
        lines: ['에러 이벤트 수집', '로그 저장 / 알림', '대시보드 / 경보'],
        kind: 'monitoring',
      },
    ],
  },
  hydrateRoot: {
    number: '5',
    title: 'hydrateRoot 예제 (SSR Hydration)',
    code: { fileLabel: 'entry-client.tsx', content: HYDRATE_ROOT_CODE },
    flowTitle: 'SSR Hydration 복구 보고 흐름',
    steps: [
      { title: '서버 HTML', lines: ['(SSR)'], kind: 'server' },
      { title: 'hydrateRoot', lines: ['(Client Hydration)'], kind: 'hydrate' },
      { title: 'React 내부', lines: ['복구 시도'], kind: 'internal' },
      {
        title: 'Root Error Callbacks',
        lines: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        kind: 'callbacks',
      },
    ],
    note: 'Hydration mismatch, text mismatch, 속성 불일치 등',
  },
  routing: {
    number: '6',
    title: 'Error 유형별 라우팅 표',
    headers: {
      scenario: '에러 상황',
      description: '설명',
      callback: '호출되는 콜백',
      uiResult: 'UI 결과',
      logLevel: '추천 로깅 레벨',
      example: '예시',
    },
    rows: [
      {
        scenario: 'Boundary captured error',
        description: '컴포넌트 트리 내에서 Error Boundary가 에러를 잡은 경우',
        callback: { kind: 'caught', name: 'onCaughtError' },
        uiResult: 'fallback UI 표시 · 복구됨',
        logLevel: 'warn',
        example: '사용자 프로필 로드 실패, 위젯 렌더 오류',
        icon: 'shield',
      },
      {
        scenario: 'Fatal / uncaught error',
        description: '어떤 Boundary도 에러를 잡지 못한 경우',
        callback: { kind: 'uncaught', name: 'onUncaughtError' },
        uiResult: '앱 크래시 또는 unmount',
        logLevel: 'error',
        example: '초기 렌더링 실패, 루트 컴포넌트 예외',
        icon: 'alert',
      },
      {
        scenario: 'Hydration recoverable error',
        description: 'React가 내부 복구로 문제를 해결한 경우',
        callback: { kind: 'recoverable', name: 'onRecoverableError' },
        uiResult: '자동 복구 · 미경고',
        logLevel: 'info',
        example: 'Hydration text mismatch, 속성 순서 불일치',
        icon: 'refresh',
      },
    ],
  },
  scenarios: {
    number: '7',
    title: '실무 로깅 시나리오',
    cards: [
      {
        kind: 'caught',
        title: 'onCaughtError 시나리오',
        steps: [
          'React App',
          'Error Boundary (fallback 표시)',
          'Root Callback',
          'Logging System (사용자 보존)',
        ],
        checks: [
          '사용자에게는 fallback UI 제공',
          '개별 컴포넌트 단위 에러 확인 가능',
          '문제 영향 범위를 제한할 수 있음',
        ],
      },
      {
        kind: 'recoverable',
        title: 'onRecoverableError 시나리오 (Hydration)',
        steps: [
          'SSR HTML',
          'Hydration 진행 중',
          'Mismatch 발생',
          'React 복구 (자동 처리)',
          'onRecoverableError 로그 기록',
        ],
        checks: [
          '사용자에게 큰 화면 이상 없음',
          'Hydration 품질/환경 이슈를 추적할 수 있음',
          '렌더/빌드 시점 차이를 유추 가능',
        ],
      },
    ],
  },
  router: {
    number: '8',
    title: 'Interactive Error Router',
    options: [
      {
        key: 'boundary',
        title: 'React 19 렌더링에서 Error Boundary가 잡은 에러',
        description: '관심: 컴포넌트 / 비즈니스 로직',
      },
      {
        key: 'fatal',
        title: '어떤 Boundary도 잡지 못한 치명적 에러',
        description: '관심: 초기 렌더 / 루트 예외',
      },
      {
        key: 'hydration',
        title: 'Hydration mismatch 등 React가 자동 복구한 에러',
        description: '관심: SSR 품질 / 환경 차이',
      },
      {
        key: 'monitoring',
        title: '각 callback이 호출되는 상황을 Monitoring에 매핑',
        description: '관심: 실제 서비스 로그 설계',
      },
    ],
    results: {
      boundary: {
        callback: 'onCaughtError',
        callbackKind: 'caught',
        uiResult: 'fallback UI 표시',
        logging: 'warn',
        logLevel: 'warn',
        body: 'Error Boundary가 에러를 잡았으므로 사용자는 fallback UI를 보고, 운영자는 captured error를 기록합니다.',
      },
      fatal: {
        callback: 'onUncaughtError',
        callbackKind: 'uncaught',
        uiResult: '앱 크래시 또는 root unmount 가능',
        logging: 'error / critical',
        logLevel: 'error',
        body: '어떤 Boundary도 에러를 잡지 못했으므로 치명적 오류로 분류해 즉시 알림이 필요합니다.',
      },
      hydration: {
        callback: 'onRecoverableError',
        callbackKind: 'recoverable',
        uiResult: 'React가 자동 복구',
        logging: 'info 또는 warn',
        logLevel: 'info',
        body: 'Hydration mismatch처럼 React가 복구 가능한 문제를 자동 처리했지만, 품질 추적을 위해 기록해야 합니다.',
      },
      monitoring: {
        callback: '상황별 분기',
        callbackKind: 'mixed',
        uiResult: '복구 여부에 따라 다름',
        logging: 'info / warn / error 분리',
        logLevel: 'mixed',
        body: '서비스에서는 callback별로 심각도와 전송 채널을 나누어 관측 가능성을 높일 수 있습니다.',
      },
    },
    labels: {
      callback: '호출되는 callback',
      uiResult: 'UI 결과',
      logging: '권장 로깅',
      explain: '설명',
    },
  },
  followAlong: {
    number: '9',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'React 19 발표문에서 root error callback 확인',
        description: '공식 블로그 / 릴리즈 노트 확인',
      },
      {
        title: 'hydrateRoot 공식 문서에서 options 확인',
        description: 'react.dev/reference/react-dom/client/hydrateRoot',
      },
      {
        title: 'Error Boundary와 root callback의 역할 차이 정리',
        description: '복구는 Boundary, 보고는 root',
      },
      {
        title: '각 callback이 호출되는 상황 매핑',
        description: '실제 서비스 로그 설계',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'React 19는 root 수준의 error reporting surface를 강화했다.',
        body: 'onCaughtError / onUncaughtError / onRecoverableError로 역할을 분리했습니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: '각 callback은 처리하는 에러 유형이 다르다.',
        body: 'Boundary capture, 치명 에러, 복구 가능한 에러를 구분합니다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: '복구와 보고를 분리하면 실무 에러 관측성이 좋아진다.',
        body: '사용자 경험을 지키면서도, 운영/모니터링 품질을 높일 수 있습니다.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    text: '다음: Hydration은 어떻게 시작되는가?',
    href: '/hydration-start',
  },
};

const en: React19ErrorReportingContent = {
  hero: {
    badge: 'Suspense·Error · 6/10',
    titleLines: ['React 19 split', 'recovery and reporting'],
    description:
      'React handles UI recovery; logging and monitoring are routed through root callbacks.',
    callbacks: [
      {
        kind: 'caught',
        name: 'onCaughtError',
        summary: 'Error caught by an Error Boundary',
        badge: 'UI recovered',
      },
      {
        kind: 'uncaught',
        name: 'onUncaughtError',
        summary: 'Error no Boundary could catch',
        badge: 'Fatal error',
      },
      {
        kind: 'recoverable',
        name: 'onRecoverableError',
        summary: 'Error React auto-recovered from (mostly Hydration)',
        badge: 'Auto recovered',
      },
    ],
  },
  question: {
    title: "Today's question",
    question:
      'How do we report errors caught by an Error Boundary, errors no one caught, and hydration recoverable errors — each in their own lane?',
    concepts: [
      { icon: 'map', label: 'Which error happened where?' },
      { icon: 'refresh', label: 'How does recovery work?' },
      { icon: 'callback', label: 'Which callback fires?' },
      { icon: 'chart', label: 'How does monitoring connect?' },
    ],
  },
  why: {
    number: '2',
    title: 'Why React 19 needs this',
    cards: [
      {
        icon: 'shield',
        title: 'UI recovery',
        arrow: '→ Error Boundary',
        body: 'The nearest Boundary recovers with a fallback to protect the user experience.',
        tone: 'blue',
      },
      {
        icon: 'search',
        title: 'Observability',
        arrow: '→ Root callback',
        body: 'See exactly where and what kind of error happened at the root level.',
        tone: 'violet',
      },
      {
        icon: 'chart',
        title: 'Production monitoring',
        arrow: '→ Per-type logging',
        body: 'Separate fatal / non-fatal / recoverable errors and route them with the right severity and channel.',
        tone: 'mixed',
      },
    ],
  },
  callbackTable: {
    number: '3',
    title: 'Comparing the three root error callbacks',
    headers: {
      callback: 'Callback',
      caller: 'Who calls it?',
      errorType: 'Kind of error',
      uiRecover: 'UI recovery',
      useCase: 'Use case',
      severity: 'Severity',
    },
    rows: [
      {
        kind: 'caught',
        callback: 'onCaughtError(error, info)',
        caller: 'When an Error Boundary captures',
        errorType: 'Error caught by a Boundary in the component tree',
        uiRecover: { kind: 'check', label: 'fallback' },
        useCase: 'Business logic errors, component render errors',
        severity: 'medium',
      },
      {
        kind: 'uncaught',
        callback: 'onUncaughtError(error, info)',
        caller: 'When no Boundary catches it',
        errorType: 'Fatal error that breaks the whole app',
        uiRecover: { kind: 'cross', label: 'root unmount possible' },
        useCase: 'Initial render failure, root component exception',
        severity: 'critical',
      },
      {
        kind: 'recoverable',
        callback: 'onRecoverableError(error, info)',
        caller: 'When React auto-recovers',
        errorType: 'Recoverable internal errors like Hydration mismatch',
        uiRecover: { kind: 'check', label: 'auto recovered' },
        useCase: 'SSR Hydration mismatch, recoverable hydration error',
        severity: 'low',
      },
    ],
  },
  createRoot: {
    number: '4',
    title: 'createRoot example (Client App)',
    code: { fileLabel: 'main.tsx', content: CREATE_ROOT_CODE },
    flowTitle: 'Client App monitoring flow',
    steps: [
      { title: 'React App', lines: ['(createRoot)'], kind: 'app' },
      {
        title: 'Root Error Callbacks',
        lines: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        kind: 'callbacks',
      },
      {
        title: 'Monitoring / Logging',
        lines: ['Collect error events', 'Store logs / alert', 'Dashboards / alarms'],
        kind: 'monitoring',
      },
    ],
  },
  hydrateRoot: {
    number: '5',
    title: 'hydrateRoot example (SSR Hydration)',
    code: { fileLabel: 'entry-client.tsx', content: HYDRATE_ROOT_CODE },
    flowTitle: 'SSR Hydration recovery reporting flow',
    steps: [
      { title: 'Server HTML', lines: ['(SSR)'], kind: 'server' },
      { title: 'hydrateRoot', lines: ['(Client Hydration)'], kind: 'hydrate' },
      { title: 'React internals', lines: ['recovery attempt'], kind: 'internal' },
      {
        title: 'Root Error Callbacks',
        lines: ['onCaughtError', 'onUncaughtError', 'onRecoverableError'],
        kind: 'callbacks',
      },
    ],
    note: 'Hydration mismatch, text mismatch, attribute mismatch, etc.',
  },
  routing: {
    number: '6',
    title: 'Per-error-type routing table',
    headers: {
      scenario: 'Error situation',
      description: 'Description',
      callback: 'Callback fired',
      uiResult: 'UI result',
      logLevel: 'Recommended log level',
      example: 'Example',
    },
    rows: [
      {
        scenario: 'Boundary captured error',
        description: 'An Error Boundary inside the component tree caught the error',
        callback: { kind: 'caught', name: 'onCaughtError' },
        uiResult: 'Fallback UI shown · recovered',
        logLevel: 'warn',
        example: 'User profile load failure, widget render error',
        icon: 'shield',
      },
      {
        scenario: 'Fatal / uncaught error',
        description: 'No Boundary caught the error',
        callback: { kind: 'uncaught', name: 'onUncaughtError' },
        uiResult: 'App crash or unmount',
        logLevel: 'error',
        example: 'Initial render failure, root component exception',
        icon: 'alert',
      },
      {
        scenario: 'Hydration recoverable error',
        description: 'React resolved the issue via internal recovery',
        callback: { kind: 'recoverable', name: 'onRecoverableError' },
        uiResult: 'Auto recovered · no warning to user',
        logLevel: 'info',
        example: 'Hydration text mismatch, attribute order mismatch',
        icon: 'refresh',
      },
    ],
  },
  scenarios: {
    number: '7',
    title: 'Production logging scenarios',
    cards: [
      {
        kind: 'caught',
        title: 'onCaughtError scenario',
        steps: [
          'React App',
          'Error Boundary (show fallback)',
          'Root Callback',
          'Logging System (user preserved)',
        ],
        checks: [
          'User sees the fallback UI',
          'Per-component error visibility',
          'Impact scope is bounded',
        ],
      },
      {
        kind: 'recoverable',
        title: 'onRecoverableError scenario (Hydration)',
        steps: [
          'SSR HTML',
          'Hydration in progress',
          'Mismatch happens',
          'React recovers (auto)',
          'onRecoverableError logs',
        ],
        checks: [
          'No major UI glitch for the user',
          'Track Hydration quality / env issues',
          'Infer render / build time differences',
        ],
      },
    ],
  },
  router: {
    number: '8',
    title: 'Interactive Error Router',
    options: [
      {
        key: 'boundary',
        title: 'Error caught by an Error Boundary during React 19 render',
        description: 'Focus: component / business logic',
      },
      {
        key: 'fatal',
        title: 'Fatal error no Boundary caught',
        description: 'Focus: initial render / root exception',
      },
      {
        key: 'hydration',
        title: 'Error React auto-recovered (e.g. Hydration mismatch)',
        description: 'Focus: SSR quality / env diff',
      },
      {
        key: 'monitoring',
        title: 'Mapping callbacks to monitoring',
        description: 'Focus: real service log design',
      },
    ],
    results: {
      boundary: {
        callback: 'onCaughtError',
        callbackKind: 'caught',
        uiResult: 'Fallback UI shown',
        logging: 'warn',
        logLevel: 'warn',
        body: 'Because an Error Boundary caught the error, the user sees the fallback UI and operators record the captured error.',
      },
      fatal: {
        callback: 'onUncaughtError',
        callbackKind: 'uncaught',
        uiResult: 'App crash or root unmount possible',
        logging: 'error / critical',
        logLevel: 'error',
        body: 'No Boundary caught the error, so treat it as a fatal error and alert immediately.',
      },
      hydration: {
        callback: 'onRecoverableError',
        callbackKind: 'recoverable',
        uiResult: 'React auto recovered',
        logging: 'info or warn',
        logLevel: 'info',
        body: 'React auto-handled a recoverable issue like a Hydration mismatch, but it should still be logged for quality tracking.',
      },
      monitoring: {
        callback: 'Per-situation branching',
        callbackKind: 'mixed',
        uiResult: 'Depends on recovery outcome',
        logging: 'info / warn / error split',
        logLevel: 'mixed',
        body: 'In production, split severity and transport channels per callback to improve observability.',
      },
    },
    labels: {
      callback: 'Callback fired',
      uiResult: 'UI result',
      logging: 'Recommended logging',
      explain: 'Explanation',
    },
  },
  followAlong: {
    number: '9',
    title: 'Walk it yourself',
    items: [
      {
        title: 'Check root error callbacks in the React 19 announcement',
        description: 'Read the official blog / release notes',
      },
      {
        title: 'Check options in the hydrateRoot docs',
        description: 'react.dev/reference/react-dom/client/hydrateRoot',
      },
      {
        title: 'Summarize the role split: Boundary vs root callback',
        description: 'Recovery is Boundary, reporting is root',
      },
      {
        title: 'Map each callback to a service situation',
        description: 'Design real-service logging',
      },
    ],
  },
  takeaways: {
    number: '10',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'React 19 strengthened the root-level error reporting surface.',
        body: 'It splits roles across onCaughtError / onUncaughtError / onRecoverableError.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'Each callback handles a different kind of error.',
        body: 'Boundary capture, fatal, and recoverable errors are separated.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'Splitting recovery from reporting improves production observability.',
        body: 'Protect the user experience while raising the quality of ops / monitoring.',
        tone: 'violet',
      },
    ],
  },
  cta: {
    text: 'Next: How does Hydration start?',
    href: '/hydration-start',
  },
};

export const react19ErrorReportingContent: Record<Locale, React19ErrorReportingContent> = {
  ko,
  en,
};
