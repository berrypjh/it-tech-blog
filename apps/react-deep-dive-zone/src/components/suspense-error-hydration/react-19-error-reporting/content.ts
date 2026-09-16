import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

export type CallbackId = 'uncaught' | 'caught' | 'recoverable';

export type Callback = {
  id: CallbackId;
  name: string;
  when: string;
  description: string;
  tone: ToneKey;
};

export type SideId = 'before' | 'after';

export type Side = {
  id: SideId;
  title: string;
  badge: string;
  description: string;
  bullets: string[];
  tone: ToneKey;
};

export type RouteRow = {
  scenario: string;
  callback: string;
  ui: string;
};

export type React19ErrorReportingContent = {
  hero: {
    badge: string;
    title: { line1: string; line2: string };
    description: string;
    diagramBadge: string;
    diagramCaption: string;
    rootLabel: string;
    callbacks: Callback[];
  };
  change: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    sides: [Side, Side];
    bridge: { headline: string; sub: string };
  };
  callbacks: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    items: Callback[];
    note: string;
  };
  routing: {
    badge: string;
    eyebrow: string;
    title: string;
    description: string;
    headers: [string, string, string];
    rows: RouteRow[];
    note: string;
  };
  checkpoint: {
    badge: string;
    eyebrow: string;
    title: string;
    fileLabel: string;
    filePath: string;
    lookForLabel: string;
    lookFor: string;
    whyLabel: string;
    why: string;
    code: string;
    primaryCta: string;
    primaryHref: string;
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const ERROR_OPTIONS_CODE = `// React 19: root를 만들 때 세 가지 리포터를 지정할 수 있다
const root = createRoot(container, {
  // 1. Error Boundary가 잡지 못해 앱이 언마운트되는 에러
  onUncaughtError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'uncaught',
      componentStack: errorInfo.componentStack,
    });
  },

  // 2. Error Boundary가 잡아서 fallback으로 처리된 에러
  onCaughtError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'caught',
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
    });
  },

  // 3. React가 스스로 복구한 에러 (재시도 성공, hydration mismatch 등)
  onRecoverableError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'recoverable',
      componentStack: errorInfo.componentStack,
    });
  },
});

// hydrateRoot도 같은 세 옵션을 받는다
const hydrated = hydrateRoot(container, <App />, {
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
});`;

const REACT_DOM_ROOT_HREF =
  'https://github.com/facebook/react/blob/main/packages/react-dom/src/client/ReactDOMRoot.js';

const KO_CALLBACKS: Callback[] = [
  {
    id: 'uncaught',
    name: 'onUncaughtError',
    when: '경계가 없을 때',
    description:
      'Error Boundary를 찾지 못해 root까지 올라간 에러입니다. 앱 전체가 언마운트되므로 가장 심각합니다.',
    tone: 'amber',
  },
  {
    id: 'caught',
    name: 'onCaughtError',
    when: '경계가 잡았을 때',
    description:
      'Error Boundary가 처리해 fallback이 보이는 상태입니다. 사용자는 화면을 유지하지만 기록은 필요합니다.',
    tone: 'violet',
  },
  {
    id: 'recoverable',
    name: 'onRecoverableError',
    when: 'React가 스스로 복구',
    description:
      'hydration mismatch처럼 React가 알아서 고친 경우입니다. 화면은 멀쩡하지만 원인은 남아 있습니다.',
    tone: 'cyan',
  },
];

const EN_CALLBACKS: Callback[] = [
  {
    id: 'uncaught',
    name: 'onUncaughtError',
    when: 'No boundary found',
    description:
      'The error climbed to the root without finding an Error Boundary. The app unmounts, so this is the most severe.',
    tone: 'amber',
  },
  {
    id: 'caught',
    name: 'onCaughtError',
    when: 'A boundary caught it',
    description:
      'An Error Boundary handled it and a fallback is showing. The user keeps a screen, but it still needs recording.',
    tone: 'violet',
  },
  {
    id: 'recoverable',
    name: 'onRecoverableError',
    when: 'React recovered itself',
    description:
      'Cases like a hydration mismatch that React fixed on its own. The screen is fine but the cause remains.',
    tone: 'cyan',
  },
];

const ko: React19ErrorReportingContent = {
  hero: {
    badge: 'Suspense/Error · 6/10단계',
    title: { line1: '에러를 콘솔에 흘려보내는 대신', line2: '세 갈래로 나눠 받는다' },
    description:
      'React 19는 root를 만들 때 에러 리포터를 세 개까지 지정할 수 있게 했습니다. 심각도에 따라 처리를 나누라는 뜻입니다.',
    diagramBadge: 'error reporting',
    diagramCaption: 'three severities',
    rootLabel: 'createRoot / hydrateRoot',
    callbacks: KO_CALLBACKS,
  },
  change: {
    badge: '01',
    eyebrow: 'what changed',
    title: '무엇이 달라졌나',
    description:
      '이전에는 잡히지 않은 에러가 콘솔로만 갔고, 복구된 에러는 구분할 방법이 없었습니다. 19에서는 경로가 갈립니다.',
    sides: [
      {
        id: 'before',
        title: 'React 18까지',
        badge: '한 갈래',
        description: '리포팅 지점이 하나뿐이라 심각도를 구분하기 어려웠습니다.',
        bullets: [
          'onRecoverableError 하나만 있었다',
          '경계가 못 잡은 에러는 콘솔로만 나갔다',
          '경계가 잡은 에러는 componentDidCatch에서 직접 모아야 했다',
          '세 경우가 섞여 대시보드에서 우선순위를 못 잡았다',
        ],
        tone: 'sky',
      },
      {
        id: 'after',
        title: 'React 19부터',
        badge: '세 갈래',
        description: '심각도별로 다른 콜백이 불려 처리 방침을 나눌 수 있습니다.',
        bullets: [
          'onUncaughtError로 앱이 죽은 경우만 따로 받는다',
          'onCaughtError로 경계가 처리한 것을 root에서 모은다',
          'onRecoverableError는 자동 복구된 것만 남는다',
          'errorInfo에 componentStack이 함께 온다',
        ],
        tone: 'emerald',
      },
    ],
    bridge: {
      headline: '심각도를\n나눠 받는다',
      sub: '세 콜백이 서로 배타적이라, 하나의 에러가 두 곳에 중복으로 오지 않습니다. 집계가 정확해집니다.',
    },
  },
  callbacks: {
    badge: '02',
    eyebrow: 'three callbacks',
    title: '세 콜백이 각각 받는 것',
    description:
      '무엇이 불리는지는 그 에러가 어디까지 갔는지로 정해집니다. 경계가 잡았는지, root까지 갔는지, React가 고쳤는지입니다.',
    items: KO_CALLBACKS,
    note: '셋 다 두 번째 인자로 errorInfo를 받습니다. componentStack이 들어 있어 어느 컴포넌트에서 났는지 알 수 있습니다.',
  },
  routing: {
    badge: '03',
    eyebrow: 'routing',
    title: '어떤 상황이 어디로 가는가',
    description:
      '실제로 겪는 상황을 세 콜백에 대응시켜 두면, 모니터링에서 무엇을 알림으로 올릴지 정하기 쉬워집니다.',
    headers: ['상황', '불리는 콜백', '사용자가 보는 화면'],
    rows: [
      {
        scenario: '렌더 중 throw, 경계 없음',
        callback: 'onUncaughtError',
        ui: '빈 화면. 앱 전체가 언마운트됩니다.',
      },
      {
        scenario: '렌더 중 throw, 경계 있음',
        callback: 'onCaughtError',
        ui: '해당 구역만 fallback으로 바뀝니다.',
      },
      {
        scenario: 'hydration mismatch',
        callback: 'onRecoverableError',
        ui: '정상 화면. 그 구역만 클라이언트가 다시 그렸습니다.',
      },
      {
        scenario: '동시성 렌더 실패 후 동기 재시도 성공',
        callback: 'onRecoverableError',
        ui: '정상 화면. 사용자는 아무것도 눈치채지 못합니다.',
      },
      {
        scenario: '이벤트 핸들러의 throw',
        callback: '아무것도 안 불림',
        ui: '정상 화면. 브라우저 콘솔에만 남습니다.',
      },
    ],
    note: '마지막 줄이 사각지대입니다. 이벤트 핸들러 에러는 세 콜백 어디에도 오지 않으므로 별도 수집이 필요합니다.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 체크포인트',
    fileLabel: '파일',
    filePath: 'packages/react-dom/src/client/ReactDOMRoot.js',
    lookForLabel: '볼 것',
    lookFor: 'onUncaughtError, onCaughtError, onRecoverableError, createRoot options',
    whyLabel: '설명',
    why: 'createRoot와 hydrateRoot가 같은 세 옵션을 받는다는 점이, 클라이언트와 SSR에서 리포팅을 통일할 수 있게 해 줍니다.',
    code: ERROR_OPTIONS_CODE,
    primaryCta: 'ReactDOMRoot.js 읽기',
    primaryHref: REACT_DOM_ROOT_HREF,
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: '세 번째 갈래, Hydration',
    description:
      'onRecoverableError가 가장 자주 불리는 곳이 hydration입니다. 그 과정이 어떻게 시작되는지 봅니다.',
    cta: '다음 페이지로 이동',
    href: '/hydration-start',
  },
};

const ERROR_OPTIONS_CODE_EN = `// React 19: a root can be given three reporters
const root = createRoot(container, {
  // 1. errors no Error Boundary caught, which unmount the app
  onUncaughtError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'uncaught',
      componentStack: errorInfo.componentStack,
    });
  },

  // 2. errors an Error Boundary caught and turned into a fallback
  onCaughtError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'caught',
      componentStack: errorInfo.componentStack,
      errorBoundary: errorInfo.errorBoundary,
    });
  },

  // 3. errors React recovered from itself (successful retry, hydration mismatch)
  onRecoverableError: (error, errorInfo) => {
    reportToService(error, {
      kind: 'recoverable',
      componentStack: errorInfo.componentStack,
    });
  },
});

// hydrateRoot takes the same three options
const hydrated = hydrateRoot(container, <App />, {
  onUncaughtError,
  onCaughtError,
  onRecoverableError,
});`;

const en: React19ErrorReportingContent = {
  hero: {
    badge: 'Suspense/Error · 6/10',
    title: {
      line1: 'Instead of leaking errors to the console',
      line2: 'React 19 splits them three ways',
    },
    description:
      'React 19 lets a root register up to three error reporters, so handling can differ by severity.',
    diagramBadge: 'error reporting',
    diagramCaption: 'three severities',
    rootLabel: 'createRoot / hydrateRoot',
    callbacks: EN_CALLBACKS,
  },
  change: {
    badge: '01',
    eyebrow: 'what changed',
    title: 'What actually changed',
    description:
      'Uncaught errors used to reach only the console, and recovered ones were indistinguishable. In 19 the paths separate.',
    sides: [
      {
        id: 'before',
        title: 'Up to React 18',
        badge: 'one path',
        description: 'With a single reporting hook, severity was hard to tell apart.',
        bullets: [
          'Only onRecoverableError existed',
          'Errors no boundary caught went to the console alone',
          'Caught errors had to be gathered by hand in componentDidCatch',
          'All three mixed together, so dashboards could not prioritise',
        ],
        tone: 'sky',
      },
      {
        id: 'after',
        title: 'From React 19',
        badge: 'three paths',
        description: 'Different callbacks fire per severity, so policies can differ.',
        bullets: [
          'onUncaughtError receives only the app-killing cases',
          'onCaughtError collects boundary-handled errors at the root',
          'onRecoverableError is left with auto-recovered ones only',
          'errorInfo now carries a componentStack alongside',
        ],
        tone: 'emerald',
      },
    ],
    bridge: {
      headline: 'Receive them\nby severity',
      sub: 'The three callbacks are mutually exclusive, so one error never arrives twice. Aggregation becomes accurate.',
    },
  },
  callbacks: {
    badge: '02',
    eyebrow: 'three callbacks',
    title: 'What each callback receives',
    description:
      'Which one fires depends on how far the error travelled: caught by a boundary, escaped to the root, or fixed by React.',
    items: EN_CALLBACKS,
    note: 'All three receive errorInfo as a second argument, whose componentStack shows which component produced it.',
  },
  routing: {
    badge: '03',
    eyebrow: 'routing',
    title: 'Which situation goes where',
    description:
      'Mapping real situations onto the three callbacks makes it easy to decide what deserves an alert in monitoring.',
    headers: ['Situation', 'Callback fired', 'What the user sees'],
    rows: [
      {
        scenario: 'Throw during render, no boundary',
        callback: 'onUncaughtError',
        ui: 'A blank screen — the whole app unmounts.',
      },
      {
        scenario: 'Throw during render, boundary present',
        callback: 'onCaughtError',
        ui: 'Only that region switches to a fallback.',
      },
      {
        scenario: 'Hydration mismatch',
        callback: 'onRecoverableError',
        ui: 'A normal screen; that region was re-rendered on the client.',
      },
      {
        scenario: 'Concurrent render failed, sync retry succeeded',
        callback: 'onRecoverableError',
        ui: 'A normal screen; the user notices nothing.',
      },
      {
        scenario: 'Throw inside an event handler',
        callback: 'None of them',
        ui: 'A normal screen; it only reaches the browser console.',
      },
    ],
    note: 'The last row is the blind spot: event handler errors reach none of the three, so they need collecting separately.',
  },
  checkpoint: {
    badge: '04',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source code checkpoint',
    fileLabel: 'File',
    filePath: 'packages/react-dom/src/client/ReactDOMRoot.js',
    lookForLabel: 'Look for',
    lookFor: 'onUncaughtError, onCaughtError, onRecoverableError, createRoot options',
    whyLabel: 'Why',
    why: 'createRoot and hydrateRoot taking the same three options is what lets client and SSR reporting stay unified.',
    code: ERROR_OPTIONS_CODE_EN,
    primaryCta: 'Read ReactDOMRoot.js',
    primaryHref: REACT_DOM_ROOT_HREF,
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'The third branch: Hydration',
    description:
      'Hydration is where onRecoverableError fires most often. Next we see how that process begins.',
    cta: 'Go to the next page',
    href: '/hydration-start',
  },
};

export const react19ErrorReportingContent: Record<Locale, React19ErrorReportingContent> = {
  ko,
  en,
};
