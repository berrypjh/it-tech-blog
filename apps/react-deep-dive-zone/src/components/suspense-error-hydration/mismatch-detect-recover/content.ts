import type { Locale } from '@it-tech-blog/preferences';

import type { Role } from './tone';

export type ConceptCard = {
  icon: 'target' | 'shield' | 'refresh' | 'callback';
  question: string;
  answer: string;
};

export type CaseCard = {
  icon: 'clock' | 'dice' | 'brackets';
  title: string;
  subtitle: string;
  serverLabel: string;
  serverValue: string;
  clientLabel: string;
  clientValue: string;
  role: Role;
};

export type CompareRow = {
  name: string;
  sub: string;
  description: string;
  server: string;
  client: string;
};

export type FlowStep = {
  title: string;
  caption: string;
  role: Role;
};

export type ThrowFlowStep = {
  title: string;
  caption: string;
  role: Role;
};

export type SuppressCard = {
  title: string;
  body: string;
  role: 'recovery' | 'server' | 'client' | 'mismatch' | 'suppress';
};

export type ExperimentKey = 'text' | 'element';

export type ExperimentResult = {
  steps: { title: string; caption: string; role: Role }[];
  log: string[];
};

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  tone: 'blue' | 'teal' | 'violet';
};

export type MismatchDetectRecoverContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    description: string;
    serverCard: {
      title: string;
      code: string;
      value: string;
      caption: string;
    };
    mismatchCard: {
      title: string;
      body: string;
    };
    clientCard: {
      title: string;
      code: string;
      value: string;
      caption: string;
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  cases: {
    number: string;
    title: string;
    cards: CaseCard[];
  };
  compare: {
    number: string;
    title: string;
    headers: {
      kind: string;
      description: string;
      server: string;
      client: string;
    };
    rows: CompareRow[];
  };
  matchingFail: {
    number: string;
    title: string;
    steps: FlowStep[];
  };
  throwFlow: {
    number: string;
    title: string;
    steps: ThrowFlowStep[];
    keypointTitle: string;
    keypointItems: string[];
    locationTitle: string;
    locationFile: string;
    locationBody: string;
  };
  queueRecover: {
    number: string;
    title: string;
    steps: FlowStep[];
    note: string;
  };
  suppress: {
    number: string;
    title: string;
    code: { fileLabel: string; content: string };
    cards: SuppressCard[];
    note: string;
  };
  code: {
    number: string;
    title: string;
    cardALabel: string;
    cardABadge: string;
    cardACode: string;
    cardBLabel: string;
    cardBBadge: string;
    cardBCode: string;
    relatedTitle: string;
    relatedFile: string;
    button: { label: string; href: string };
  };
  experiment: {
    number: string;
    title: string;
    selectorTitle: string;
    options: { key: ExperimentKey; title: string; subtitle: string }[];
    resultTitle: string;
    logTitle: string;
    results: Record<ExperimentKey, ExperimentResult>;
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

const SUPPRESS_CODE = `<span suppressHydrationWarning>
  {new Date().toLocaleTimeString()}
</span>`;

const CODE_A = `if (!nextInstance || !tryHydrateText(fiber, nextInstance)) {
  warnNonHydratedInstance(fiber, nextInstance);
  throwOnHydrationMismatch(fiber);
}`;

const CODE_B = `export function queueHydrationError(error) {
  if (hydrationErrors === null) {
    hydrationErrors = [error];
  } else {
    hydrationErrors.push(error);
  }
}`;

const HYDRATION_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHydrationContext.js';

const ko: MismatchDetectRecoverContent = {
  hero: {
    badge: 'Suspense/Error · 8/10단계',
    titleLines: ['Hydration Mismatch는', '단순 경고가 아니라', '복구 분기다'],
    description:
      'React는 서버 DOM을 계속 재사용할 수 있는지 판단하고, 실패하면 복구 경로로 전환합니다.',
    serverCard: {
      title: '서버 HTML (SSR)',
      code: '<span class="time">',
      value: '10:00',
      caption: '서버 렌더 결과',
    },
    mismatchCard: {
      title: 'Mismatch 감지',
      body: '텍스트가 다릅니다',
    },
    clientCard: {
      title: '클라이언트 렌더 결과',
      code: '<span class="time">',
      value: '10:01',
      caption: '클라이언트 첫 렌더 결과',
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question:
      '서버 HTML과 클라이언트 렌더 결과가 다르면 React는 어디서 이를 감지하고 어떻게 복구할까?',
    concepts: [
      { icon: 'target', question: '어디서 감지할까?', answer: 'matching 단계에서' },
      { icon: 'shield', question: '어떤 함수가 관여할까?', answer: 'throwOnHydrationMismatch' },
      { icon: 'refresh', question: '어떻게 복구할까?', answer: 'client render 전환' },
      { icon: 'callback', question: '어디로 보고할까?', answer: 'onRecoverableError' },
    ],
  },
  cases: {
    number: '2',
    title: 'Mismatch가 생기는 대표 상황',
    cards: [
      {
        icon: 'clock',
        title: '시간값 차이',
        subtitle: '서버 10:00 / 클라이언트 10:01',
        serverLabel: '서버',
        serverValue: '10:00',
        clientLabel: '클라이언트',
        clientValue: '10:01',
        role: 'server',
      },
      {
        icon: 'dice',
        title: '랜덤값 차이',
        subtitle: 'server/client 값 불일치',
        serverLabel: '서버',
        serverValue: '0.7312',
        clientLabel: '클라이언트',
        clientValue: '0.8841',
        role: 'recovery',
      },
      {
        icon: 'brackets',
        title: '조건부 DOM 구조 차이',
        subtitle: '서버 <p> / 클라이언트 <div>',
        serverLabel: '서버',
        serverValue: '<p>안녕하세요</p>',
        clientLabel: '클라이언트',
        clientValue: '<div>안녕하세요</div>',
        role: 'client',
      },
    ],
  },
  compare: {
    number: '3',
    title: 'Text mismatch vs Element mismatch',
    headers: {
      kind: '구분',
      description: '설명',
      server: '서버 DOM 예시',
      client: '클라이언트 기대 DOM 예시',
    },
    rows: [
      {
        name: 'Text mismatch',
        sub: '텍스트 불일치',
        description: '텍스트 값은 같거나 비슷한 구조지만 내용이 다른 경우',
        server: '<span>\n  10:00\n</span>',
        client: '<span>\n  10:01\n</span>',
      },
      {
        name: 'Element mismatch',
        sub: '요소 불일치',
        description: '태그, 자식 구조, 속성 등이 다른 경우',
        server: '<p>\n  hello\n</p>',
        client: '<div>\n  hello\n</div>',
      },
    ],
  },
  matchingFail: {
    number: '4',
    title: '내부 matching 실패 흐름',
    steps: [
      {
        title: '다음 hydratable DOM 확인',
        caption: 'nextHydratableInstance 검사',
        role: 'server',
      },
      {
        title: 'Fiber 기대값과 비교',
        caption: '텍스트/요소/속성 등 비교',
        role: 'client',
      },
      {
        title: '매칭 실패',
        caption: '일치하지 않는 경우 mismatch 발생',
        role: 'mismatch',
      },
      {
        title: 'Hydration mismatch path 진입',
        caption: '복구 흐름으로 전환',
        role: 'recovery',
      },
    ],
  },
  throwFlow: {
    number: '5',
    title: 'throwOnHydrationMismatch',
    steps: [
      {
        title: 'warnNonHydratedInstance',
        caption: '불일치 경고 및 원인 기록',
        role: 'server',
      },
      {
        title: 'throwOnHydrationMismatch',
        caption: '복구 흐름 진입 지점',
        role: 'mismatch',
      },
      {
        title: '복구 렌더링 경로로 전환',
        caption: 'client render 또는 subtree 재생성',
        role: 'recovery',
      },
    ],
    keypointTitle: '핵심 포인트',
    keypointItems: [
      '여기서 throw가 발생하면 현재 hydration render는 중단됩니다.',
      '이후 React는 안전한 복구 경로로 전환합니다.',
    ],
    locationTitle: '코드에서 위치',
    locationFile: 'ReactFiberHydrationContext.js',
    locationBody: 'tryToHydrate 계열 함수 내부에서 불일치를 감지하면 호출됩니다.',
  },
  queueRecover: {
    number: '6',
    title: 'queueHydrationError와 recoverable error',
    steps: [
      {
        title: 'Hydration error 수집',
        caption: 'queueHydrationError(error)로 목록에 저장',
        role: 'server',
      },
      {
        title: 'Recoverable error 보고',
        caption: 'onRecoverableError(error, info)',
        role: 'recovery',
      },
      {
        title: '필요 시 client render 복구',
        caption: '서브트리 재생성 또는 전체 client render',
        role: 'client',
      },
      {
        title: '모니터링 시스템으로 전달',
        caption: '로그, 알림, 대시보드 반영',
        role: 'recovery',
      },
    ],
    note: '복구 가능한 에러는 앱이 계속 동작하도록 보정하면서도, 개발/운영 환경에서 문제를 추적할 수 있게 합니다.',
  },
  suppress: {
    number: '7',
    title: 'suppressHydrationWarning 보정 전략',
    code: { fileLabel: 'Time.tsx', content: SUPPRESS_CODE },
    cards: [
      {
        title: '꼭 필요한 escape hatch',
        body: '불가피한 차이에만 사용',
        role: 'recovery',
      },
      {
        title: '텍스트/속성 불일치에만 유효',
        body: 'DOM 구조 불일치에는 제한적',
        role: 'recovery',
      },
      {
        title: '한 단계 깊이까지만 적용',
        body: '하위 노드까지 무제한 적용되지 않음',
        role: 'client',
      },
      {
        title: '남용하지 않기',
        body: '버그를 숨길 수 있음',
        role: 'suppress',
      },
    ],
    note: '시간, 랜덤 값, 사용자 환경처럼 서버와 클라이언트가 달라질 수 있는 값에만 신중히 사용하세요.',
  },
  code: {
    number: '8',
    title: '실제 코드 미리보기 (ReactFiberHydrationContext.js)',
    cardALabel: 'A · mismatch 감지 → throwOnHydrationMismatch 호출',
    cardABadge: 'JS',
    cardACode: CODE_A,
    cardBLabel: 'B · queueHydrationError 구현',
    cardBBadge: 'JS',
    cardBCode: CODE_B,
    relatedTitle: '관련 파일',
    relatedFile: 'ReactFiberHydrationContext.js',
    button: { label: 'GitHub에서 코드 보기', href: HYDRATION_URL },
  },
  experiment: {
    number: '9',
    title: 'Mismatch 실험기',
    selectorTitle: '시나리오 선택',
    options: [
      {
        key: 'text',
        title: '서버 10:00 / 클라이언트 10:01',
        subtitle: 'Text mismatch',
      },
      {
        key: 'element',
        title: '서버 <p> / 클라이언트 <div>',
        subtitle: 'Element mismatch',
      },
    ],
    resultTitle: '결과 흐름',
    logTitle: '실행 로그 예시',
    results: {
      text: {
        steps: [
          {
            title: 'Mismatch 감지',
            caption: 'matching 실패',
            role: 'mismatch',
          },
          {
            title: 'throwOnHydrationMismatch',
            caption: '복구 경로 진입',
            role: 'mismatch',
          },
          {
            title: '복구 렌더 수행',
            caption: 'client render 전환',
            role: 'client',
          },
          {
            title: 'onRecoverableError 호출',
            caption: '보고 및 알림',
            role: 'recovery',
          },
        ],
        log: [
          '[Hydration] mismatch detected',
          'warnNonHydratedInstance',
          'throwOnHydrationMismatch',
          'queueHydrationError',
          'onRecoverableError invoked',
        ],
      },
      element: {
        steps: [
          {
            title: 'DOM 구조 불일치 감지',
            caption: 'matching 실패',
            role: 'mismatch',
          },
          {
            title: 'throwOnHydrationMismatch',
            caption: '복구 경로 진입',
            role: 'mismatch',
          },
          {
            title: 'subtree client render',
            caption: '구조 재생성',
            role: 'client',
          },
          {
            title: 'onRecoverableError 호출',
            caption: '보고 및 알림',
            role: 'recovery',
          },
        ],
        log: [
          '[Hydration] element mismatch detected',
          'expected <p>, received <div>',
          'throwOnHydrationMismatch',
          'client render recovery',
          'onRecoverableError invoked',
        ],
      },
    },
  },
  followAlong: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'React 공식 문서 확인',
        description: 'suppressHydrationWarning, hydrateRoot, error callback',
      },
      {
        title: 'ReactFiberHydrationContext.js 열기',
        description: 'mismatch 관련 함수 위치 확인',
      },
      {
        title: 'throwOnHydrationMismatch와 queueHydrationError 연결',
        description: '감지 → 복구 전환 → 에러 수집 흐름 확인',
      },
      {
        title: 'onRecoverableError가 왜 필요한지 설명',
        description: '복구 가능한 예외를 운영 환경에서 추적하기',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'Hydration mismatch는 서버 DOM 재사용 실패를 뜻한다.',
        body: 'React는 매칭 실패를 감지하면 정상 연결을 중단하고 복구 경로로 전환합니다.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'React는 mismatch를 감지하면 복구 경로로 전환한다.',
        body: 'throwOnHydrationMismatch → queueHydrationError → onRecoverableError로 이어집니다.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'onRecoverableError와 suppressHydrationWarning은 역할이 다르다.',
        body: '전자는 복구 가능한 에러 보고, 후자는 불가피한 차이를 허용하는 보정 도구입니다.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'Suspense와 Hydration은 어디서 만나는가?',
    description: 'Suspense 경계가 Hydration 과정과 어디서 맞물리는지 이어서 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/suspense-hydration-link',
  },
};

const en: MismatchDetectRecoverContent = {
  hero: {
    badge: 'Suspense·Error · 8/10',
    titleLines: ['Hydration Mismatch is not', 'a mere warning —', 'it is a recovery branch'],
    description:
      'React decides whether the server DOM can still be reused, and switches to the recovery path when it cannot.',
    serverCard: {
      title: 'Server HTML (SSR)',
      code: '<span class="time">',
      value: '10:00',
      caption: 'Server render result',
    },
    mismatchCard: {
      title: 'Mismatch detected',
      body: 'Text values differ',
    },
    clientCard: {
      title: 'Client render result',
      code: '<span class="time">',
      value: '10:01',
      caption: 'Client first render result',
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'When server HTML and the client render result differ, where does React detect that and how does it recover?',
    concepts: [
      { icon: 'target', question: 'Where is it detected?', answer: 'During matching' },
      {
        icon: 'shield',
        question: 'Which function is involved?',
        answer: 'throwOnHydrationMismatch',
      },
      { icon: 'refresh', question: 'How does it recover?', answer: 'Switch to client render' },
      { icon: 'callback', question: 'Where is it reported?', answer: 'onRecoverableError' },
    ],
  },
  cases: {
    number: '2',
    title: 'Typical situations that cause mismatch',
    cards: [
      {
        icon: 'clock',
        title: 'Time value drift',
        subtitle: 'Server 10:00 / Client 10:01',
        serverLabel: 'Server',
        serverValue: '10:00',
        clientLabel: 'Client',
        clientValue: '10:01',
        role: 'server',
      },
      {
        icon: 'dice',
        title: 'Random value drift',
        subtitle: 'server/client value mismatch',
        serverLabel: 'Server',
        serverValue: '0.7312',
        clientLabel: 'Client',
        clientValue: '0.8841',
        role: 'recovery',
      },
      {
        icon: 'brackets',
        title: 'Conditional DOM structure',
        subtitle: 'Server <p> / Client <div>',
        serverLabel: 'Server',
        serverValue: '<p>hello</p>',
        clientLabel: 'Client',
        clientValue: '<div>hello</div>',
        role: 'client',
      },
    ],
  },
  compare: {
    number: '3',
    title: 'Text mismatch vs Element mismatch',
    headers: {
      kind: 'Kind',
      description: 'Description',
      server: 'Server DOM example',
      client: 'Client expected DOM',
    },
    rows: [
      {
        name: 'Text mismatch',
        sub: 'text differs',
        description: 'Same structure but different text content',
        server: '<span>\n  10:00\n</span>',
        client: '<span>\n  10:01\n</span>',
      },
      {
        name: 'Element mismatch',
        sub: 'element differs',
        description: 'Different tag, child structure, attributes',
        server: '<p>\n  hello\n</p>',
        client: '<div>\n  hello\n</div>',
      },
    ],
  },
  matchingFail: {
    number: '4',
    title: 'Internal matching-failure flow',
    steps: [
      {
        title: 'Check next hydratable DOM',
        caption: 'Inspect nextHydratableInstance',
        role: 'server',
      },
      {
        title: 'Compare to Fiber expectation',
        caption: 'Text / element / attribute comparison',
        role: 'client',
      },
      {
        title: 'Matching fails',
        caption: 'Mismatch happens when they do not match',
        role: 'mismatch',
      },
      {
        title: 'Enter Hydration mismatch path',
        caption: 'Switch to recovery flow',
        role: 'recovery',
      },
    ],
  },
  throwFlow: {
    number: '5',
    title: 'throwOnHydrationMismatch',
    steps: [
      {
        title: 'warnNonHydratedInstance',
        caption: 'Warn and record the cause',
        role: 'server',
      },
      {
        title: 'throwOnHydrationMismatch',
        caption: 'Entry point into the recovery flow',
        role: 'mismatch',
      },
      {
        title: 'Switch to recovery render path',
        caption: 'Client render or subtree recreate',
        role: 'recovery',
      },
    ],
    keypointTitle: 'Key point',
    keypointItems: [
      'Once the throw happens, the current hydration render stops.',
      'React then switches to a safe recovery path.',
    ],
    locationTitle: 'Where it lives',
    locationFile: 'ReactFiberHydrationContext.js',
    locationBody: 'Called from tryToHydrate-family functions when a mismatch is detected.',
  },
  queueRecover: {
    number: '6',
    title: 'queueHydrationError and recoverable error',
    steps: [
      {
        title: 'Collect Hydration errors',
        caption: 'queueHydrationError(error) stores into a list',
        role: 'server',
      },
      {
        title: 'Report recoverable error',
        caption: 'onRecoverableError(error, info)',
        role: 'recovery',
      },
      {
        title: 'Client render recovery if needed',
        caption: 'Recreate subtree or full client render',
        role: 'client',
      },
      {
        title: 'Forward to monitoring',
        caption: 'Logs, alerts, dashboards',
        role: 'recovery',
      },
    ],
    note: 'Recoverable errors keep the app running while still letting you track issues in development and production.',
  },
  suppress: {
    number: '7',
    title: 'suppressHydrationWarning strategy',
    code: { fileLabel: 'Time.tsx', content: SUPPRESS_CODE },
    cards: [
      {
        title: 'A required escape hatch',
        body: 'Use only for unavoidable differences',
        role: 'recovery',
      },
      {
        title: 'Only works for text/attribute mismatch',
        body: 'Limited for DOM structure mismatch',
        role: 'recovery',
      },
      {
        title: 'Applies to one level only',
        body: 'Not applied unlimited to descendants',
        role: 'client',
      },
      {
        title: 'Do not overuse',
        body: 'It can hide real bugs',
        role: 'suppress',
      },
    ],
    note: 'Use it carefully only for values that legitimately differ between server and client — time, random, user environment.',
  },
  code: {
    number: '8',
    title: 'Source code preview (ReactFiberHydrationContext.js)',
    cardALabel: 'A · mismatch detected → call throwOnHydrationMismatch',
    cardABadge: 'JS',
    cardACode: CODE_A,
    cardBLabel: 'B · queueHydrationError implementation',
    cardBBadge: 'JS',
    cardBCode: CODE_B,
    relatedTitle: 'Related file',
    relatedFile: 'ReactFiberHydrationContext.js',
    button: { label: 'View source on GitHub', href: HYDRATION_URL },
  },
  experiment: {
    number: '9',
    title: 'Mismatch experiment',
    selectorTitle: 'Pick a scenario',
    options: [
      { key: 'text', title: 'Server 10:00 / Client 10:01', subtitle: 'Text mismatch' },
      { key: 'element', title: 'Server <p> / Client <div>', subtitle: 'Element mismatch' },
    ],
    resultTitle: 'Result flow',
    logTitle: 'Execution log',
    results: {
      text: {
        steps: [
          {
            title: 'Mismatch detected',
            caption: 'matching fails',
            role: 'mismatch',
          },
          {
            title: 'throwOnHydrationMismatch',
            caption: 'enter recovery path',
            role: 'mismatch',
          },
          {
            title: 'Recovery render runs',
            caption: 'switch to client render',
            role: 'client',
          },
          {
            title: 'onRecoverableError called',
            caption: 'report and alert',
            role: 'recovery',
          },
        ],
        log: [
          '[Hydration] mismatch detected',
          'warnNonHydratedInstance',
          'throwOnHydrationMismatch',
          'queueHydrationError',
          'onRecoverableError invoked',
        ],
      },
      element: {
        steps: [
          {
            title: 'DOM structure mismatch',
            caption: 'matching fails',
            role: 'mismatch',
          },
          {
            title: 'throwOnHydrationMismatch',
            caption: 'enter recovery path',
            role: 'mismatch',
          },
          {
            title: 'Subtree client render',
            caption: 'recreate structure',
            role: 'client',
          },
          {
            title: 'onRecoverableError called',
            caption: 'report and alert',
            role: 'recovery',
          },
        ],
        log: [
          '[Hydration] element mismatch detected',
          'expected <p>, received <div>',
          'throwOnHydrationMismatch',
          'client render recovery',
          'onRecoverableError invoked',
        ],
      },
    },
  },
  followAlong: {
    number: '10',
    title: 'Walk it yourself',
    items: [
      {
        title: 'Read the React docs',
        description: 'suppressHydrationWarning, hydrateRoot, error callback',
      },
      {
        title: 'Open ReactFiberHydrationContext.js',
        description: 'Find mismatch-related functions',
      },
      {
        title: 'Connect throwOnHydrationMismatch and queueHydrationError',
        description: 'Detect → recovery → error collection',
      },
      {
        title: 'Explain why onRecoverableError matters',
        description: 'Track recoverable errors in production',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'Hydration mismatch means server DOM reuse has failed.',
        body: 'When matching fails React stops the normal connection and switches to the recovery path.',
        tone: 'blue',
      },
      {
        number: '2',
        title: 'On mismatch React switches to the recovery path.',
        body: 'It flows through throwOnHydrationMismatch → queueHydrationError → onRecoverableError.',
        tone: 'teal',
      },
      {
        number: '3',
        title: 'onRecoverableError and suppressHydrationWarning play different roles.',
        body: 'The former reports recoverable errors; the latter is a compensation tool for unavoidable differences.',
        tone: 'violet',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'Where do Suspense and Hydration meet?',
    description: 'Continue with where Suspense boundaries intersect with the hydration process.',
    cta: 'Go to the next page',
    href: '/suspense-hydration-link',
  },
};

export const mismatchDetectRecoverContent: Record<Locale, MismatchDetectRecoverContent> = {
  ko,
  en,
};
