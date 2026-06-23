import type { Locale } from '@it-tech-blog/preferences';

import type { StateKey } from './tone';

export type IconKey =
  | 'hourglass'
  | 'loader'
  | 'check'
  | 'x-circle'
  | 'triangle-alert'
  | 'sparkles'
  | 'shield-check'
  | 'shield-alert'
  | 'route'
  | 'workflow'
  | 'box'
  | 'boxes'
  | 'search'
  | 'split'
  | 'atom'
  | 'compass'
  | 'mouse-click'
  | 'play-circle'
  | 'pause-circle'
  | 'layers'
  | 'rotate'
  | 'target';

export type PromiseStateCard = {
  state: StateKey;
  title: string;
  subtitle: string;
  result: string;
  iconKey: IconKey;
};

export type SupportQuestion = {
  body: string;
  iconKey: IconKey;
};

export type ReadableCard = {
  state: StateKey;
  title: string;
  body: string;
  result: string;
  iconKey: IconKey;
};

export type ComparisonRow = {
  topic: string;
  legacy: { value: string; supported: boolean };
  useResult: { value: string; supported: boolean };
  note: string;
};

export type PromiseBranch = {
  state: StateKey;
  title: string;
  handle: string;
  result: string;
  resultLines: [string, string];
  iconKey: IconKey;
};

export type ThenableTrackingStep = {
  state: StateKey;
  title: string;
  caption?: string;
  items?: string[];
  iconKey: IconKey;
};

export type ThenableTrackingBranch = {
  state: StateKey;
  title: string;
  caption: string;
  iconKey: IconKey;
};

export type Mission = {
  number: string;
  title: string;
  helper: string;
  iconKey: IconKey;
};

export type TakeawayCard = {
  number: string;
  state: StateKey;
  title: string;
  body: string;
  iconKey: IconKey;
};

export type UseSuspenseErrorModelContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    subtitleLines: [string, string];
    heroCode: {
      fileName: string;
      langBadge: 'TSX';
      code: string;
    };
    diagram: {
      title: string;
      cards: PromiseStateCard[];
    };
  };
  question: {
    number: string;
    eyebrow: string;
    questionLines: [string, string, string];
    supportQuestions: SupportQuestion[];
  };
  readable: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    cards: ReadableCard[];
  };
  comparison: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    columns: { topic: string; legacy: string; useApi: string; note: string };
    rows: ComparisonRow[];
  };
  promiseFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    centerTitle: string;
    centerSubtitle: string;
    branches: PromiseBranch[];
  };
  suspenseConnection: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    code: { fileName: string; langBadge: 'TSX'; code: string };
    explanation: string;
    fallback: { title: string; loadingText: string };
  };
  rejectedFlow: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: {
      state: StateKey;
      title: string;
      caption: string;
      iconKey: IconKey;
    }[];
    errorFallback: { message: string; buttonLabel: string };
  };
  thenableTracking: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    steps: ThenableTrackingStep[];
    branches: ThenableTrackingBranch[];
  };
  internalCode: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    panels: {
      title: string;
      langBadge: 'JS';
      code: string;
      state: StateKey;
    }[];
    fileCard: { title: string; fileName: string; buttonLabel: string; href: string };
  };
  stateBoard: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    buttonLabel: string;
    defaultState: 'pending' | 'fulfilled' | 'rejected';
    states: {
      key: 'pending' | 'fulfilled' | 'rejected';
      buttonLabel: string;
      panelTitle: string;
      caption: string;
      profile?: { name: string; role: string; badge: string };
      loading?: { text: string };
      error?: { message: string; buttonLabel: string };
    }[];
  };
  mission: {
    number: string;
    eyebrow: string;
    title: string;
    description: string;
    missions: Mission[];
  };
  takeaways: {
    number: string;
    eyebrow: string;
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

const ko: UseSuspenseErrorModelContent = {
  hero: {
    badge: 'React 19 변화 · 4/10단계',
    titleLines: ['use()는 Suspense /', 'Error Boundary 흐름에', '무엇을 추가했나?'],
    subtitleLines: ['React 19는 렌더 중 리소스를 읽는 흐름을', '공식 API로 끌어올렸습니다.'],
    heroCode: {
      fileName: 'UserProfile.tsx',
      langBadge: 'TSX',
      code: `import { use } from "react";

export function UserProfile({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  const user = use(userPromise);

  return <div>{user.name}</div>;
}`,
    },
    diagram: {
      title: 'Promise 상태 의미와 use()의 결과',
      cards: [
        {
          state: 'pending',
          title: 'pending',
          subtitle: '대기 중',
          result: '→ Suspense',
          iconKey: 'hourglass',
        },
        {
          state: 'fulfilled',
          title: 'fulfilled',
          subtitle: '완료됨',
          result: '→ 값 반환',
          iconKey: 'check',
        },
        {
          state: 'rejected',
          title: 'rejected',
          subtitle: '실패',
          result: '→ Error Boundary',
          iconKey: 'triangle-alert',
        },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: '오늘 해결할 질문',
    questionLines: [
      'use(Promise)는 왜 일반 Hook이 아니며',
      '어떻게 Suspense와 Error Boundary에',
      '바로 연결될까?',
    ],
    supportQuestions: [
      { body: '렌더 중 리소스 읽기란?', iconKey: 'play-circle' },
      { body: 'Hook 규칙과 어떻게 다른가?', iconKey: 'split' },
      { body: 'Promise 상태에 따라 어떻게 분기할까?', iconKey: 'route' },
      { body: 'Suspense / Error Boundary 흐름과 어떻게 결합할까?', iconKey: 'workflow' },
    ],
  },
  readable: {
    number: '01',
    eyebrow: 'use()가 읽는 대상',
    title: 'use()가 읽을 수 있는 것',
    description: 'use()는 단순 Promise 외에 Context도 같은 호출 표면으로 읽어옵니다.',
    cards: [
      {
        state: 'pending',
        title: 'Promise',
        body: '비동기 리소스의 상태를 읽음',
        result: '→ Suspense / Error Boundary와 연결',
        iconKey: 'loader',
      },
      {
        state: 'context',
        title: 'Context',
        body: '조건문, 반복문 안에서도 읽기 가능',
        result: '→ React의 규칙 확장',
        iconKey: 'boxes',
      },
    ],
  },
  comparison: {
    number: '02',
    eyebrow: '일반 Hook과 비교',
    title: '일반 Hook과 다른 점',
    description: 'use()는 Hooks 규칙의 일부 제약을 풀고, 렌더 흐름에 직접 연결됩니다.',
    columns: {
      topic: '비교 항목',
      legacy: '일반 Hook(useState 등)',
      useApi: 'use()',
      note: '비고',
    },
    rows: [
      {
        topic: '조건문 안 호출',
        legacy: { value: '불가능', supported: false },
        useResult: { value: '가능', supported: true },
        note: 'Hooks 규칙을 따르지 않아도 됨',
      },
      {
        topic: '반복문 안 호출',
        legacy: { value: '불가능', supported: false },
        useResult: { value: '가능', supported: true },
        note: '동적 조건에서도 안전',
      },
      {
        topic: 'Promise 읽기',
        legacy: { value: '직접 불가', supported: false },
        useResult: { value: '가능', supported: true },
        note: '렌더 중 리소스 읽기 지원',
      },
      {
        topic: 'Suspense 연결',
        legacy: { value: '간접', supported: false },
        useResult: { value: '직접', supported: true },
        note: '렌더 중 즉시 Suspense로 전환',
      },
      {
        topic: 'Error Boundary 연결',
        legacy: { value: '간접', supported: false },
        useResult: { value: '직접', supported: true },
        note: 'rejected 시 자동으로 Error Boundary로 이동',
      },
    ],
  },
  promiseFlow: {
    number: '03',
    eyebrow: 'Promise 상태별 흐름',
    title: 'Promise 상태별 흐름 (use(Promise))',
    description:
      '같은 use(Promise) 호출이라도 Promise 상태에 따라 React 렌더 흐름이 세 갈래로 자동 분기됩니다.',
    centerTitle: 'use(Promise)',
    centerSubtitle: '렌더 중 리소스 읽기',
    branches: [
      {
        state: 'pending',
        title: 'pending',
        handle: '→ SuspenseException throw',
        result: '가장 가까운 Suspense Boundary',
        resultLines: ['가장 가까운 Suspense Boundary', 'fallback UI 전환'],
        iconKey: 'hourglass',
      },
      {
        state: 'fulfilled',
        title: 'fulfilled',
        handle: '→ 값 반환',
        result: '정상 렌더 계속',
        resultLines: ['정상 렌더 계속', '실제 값 사용'],
        iconKey: 'check',
      },
      {
        state: 'rejected',
        title: 'rejected',
        handle: '→ Error throw',
        result: '가장 가까운 Error Boundary',
        resultLines: ['가장 가까운 Error Boundary', 'error fallback으로 전환'],
        iconKey: 'triangle-alert',
      },
    ],
  },
  suspenseConnection: {
    number: '04',
    eyebrow: 'Suspense 연결',
    title: 'use(Promise)와 Suspense',
    description:
      'pending인 Promise를 만나면 React는 현재 렌더를 중단하고 상위 Suspense로 fallback을 위임합니다.',
    code: {
      fileName: 'ProfileCard.tsx',
      langBadge: 'TSX',
      code: `function ProfileCard({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  const user = use(userPromise);

  return <div className="name">{user.name}</div>;
}`,
    },
    explanation:
      'pending 상태라면 현재 컴포넌트 렌더는 계속되지 않고, 가장 가까운 Suspense boundary의 fallback으로 전환됩니다.',
    fallback: { title: 'Fallback UI 예시', loadingText: 'Loading user...' },
  },
  rejectedFlow: {
    number: '05',
    eyebrow: 'Error Boundary 연결',
    title: 'rejected promise와 Error Boundary',
    description:
      'rejected promise를 만나면 use()는 error를 throw하고, 가장 가까운 Error Boundary가 이를 받습니다.',
    steps: [
      {
        state: 'rejected',
        title: 'rejected promise',
        caption: '비동기 자원 실패',
        iconKey: 'x-circle',
      },
      {
        state: 'rejected',
        title: 'error throw',
        caption: '렌더 중 에러 발생',
        iconKey: 'triangle-alert',
      },
      {
        state: 'internals',
        title: '가장 가까운 Error Boundary',
        caption: '포착',
        iconKey: 'shield-alert',
      },
      {
        state: 'rejected',
        title: 'Error Fallback UI',
        caption: '사용자 정보를 불러오지 못했어요.',
        iconKey: 'shield-alert',
      },
    ],
    errorFallback: {
      message: '사용자 정보를 불러오지 못했어요.',
      buttonLabel: '다시 시도',
    },
  },
  thenableTracking: {
    number: '06',
    eyebrow: 'thenable 추적 흐름',
    title: 'thenable tracking 내부 연결',
    description:
      'use()는 단순 API가 아니라 ReactFiberThenable.js 내부의 trackUsedThenable 흐름과 연결되어 있습니다.',
    steps: [
      {
        state: 'pending',
        title: 'use() 호출',
        caption: 'thenable 조회',
        iconKey: 'play-circle',
      },
      {
        state: 'internals',
        title: 'ReactFiberThenable.js',
        items: ['trackUsedThenable(thenable)', 'suspendedThenable', 'SuspenseException'],
        iconKey: 'atom',
      },
      {
        state: 'render',
        title: 'React 렌더 흐름',
        caption: '예외를 감지',
        iconKey: 'workflow',
      },
    ],
    branches: [
      {
        state: 'pending',
        title: 'Suspense Boundary 발견',
        caption: 'fallback UI 렌더',
        iconKey: 'shield-check',
      },
      {
        state: 'rejected',
        title: 'Error Boundary (rejected)',
        caption: 'error fallback으로 전환',
        iconKey: 'shield-alert',
      },
    ],
  },
  internalCode: {
    number: '07',
    eyebrow: '코드 체크포인트',
    title: '실제 코드 미리보기 (ReactFiberThenable.js)',
    description:
      'trackUsedThenable이 thenable을 등록하고, suspendedThenable과 SuspenseException으로 렌더 흐름을 끊습니다.',
    panels: [
      {
        title: 'trackedThenable 목록',
        langBadge: 'JS',
        state: 'internals',
        code: `const previous = trackedThenables[index];

if (previous === undefined) {
  trackedThenables.push(thenable);
}`,
      },
      {
        title: 'suspendedThenable 설정 & throw',
        langBadge: 'JS',
        state: 'pending',
        code: `suspendedThenable = thenable;
throw SuspenseException;`,
      },
    ],
    fileCard: {
      title: '관련 파일',
      fileName: 'ReactFiberThenable.js',
      buttonLabel: 'GitHub에서 코드 보기',
      href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThenable.js',
    },
  },
  stateBoard: {
    number: '08',
    eyebrow: '상태 보드',
    title: 'use() 상태 보드',
    description: 'Promise 상태별로 use()가 React UI에 어떻게 반영되는지 한 화면에서 비교합니다.',
    buttonLabel: 'Promise 상태 선택',
    defaultState: 'pending',
    states: [
      {
        key: 'pending',
        buttonLabel: 'pending',
        panelTitle: 'Suspense Fallback',
        caption: '→ SuspenseException으로 fallback UI 렌더',
        loading: { text: 'Loading user...' },
      },
      {
        key: 'fulfilled',
        buttonLabel: 'fulfilled',
        panelTitle: '정상 콘텐츠',
        caption: '→ 값이 반환되어 정상 렌더 지속',
        profile: { name: 'Dan Abramov', role: 'Software Engineer', badge: 'Pro' },
      },
      {
        key: 'rejected',
        buttonLabel: 'rejected',
        panelTitle: 'Error Boundary',
        caption: '→ Error throw로 Error Boundary 이동',
        error: { message: '데이터를 불러오지 못했어요.', buttonLabel: '다시 시도' },
      },
    ],
  },
  mission: {
    number: '09',
    eyebrow: '코드 따라가기',
    title: '직접 따라가기 보기',
    description: '문서 → 실제 코드 → 본인 정리 순으로 use()를 손에 익혀 봅니다.',
    missions: [
      {
        number: '01',
        title: 'use() 공식 문서를 확인한다',
        helper: '사용 가능한 값과 규칙을 정리',
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'use(Promise)와 use(Context)를 구분하고 차이점을 정리한다',
        helper: 'Promise와 Context의 사용 목적을 나눠보기',
        iconKey: 'split',
      },
      {
        number: '03',
        title: 'ReactFiberThenable.js에서 suspendedThenable 흐름을 본다',
        helper: 'SuspenseException이 어디서 설정되는지 확인',
        iconKey: 'search',
      },
      {
        number: '04',
        title: 'use()가 Suspense / Error Boundary 흐름에 직접 연결되는 이유를 정리한다',
        helper: 'pending, fulfilled, rejected 상태별 결과를 자기 말로 설명',
        iconKey: 'route',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: '핵심 정리',
    title: '핵심 정리',
    cards: [
      {
        number: '01',
        state: 'pending',
        title: 'use()는 렌더 중 리소스를 읽는 공식 API다.',
        body: 'Promise와 Context를 조건문, 반복문 안에서도 안전하게 읽을 수 있다.',
        iconKey: 'layers',
      },
      {
        number: '02',
        state: 'fulfilled',
        title: 'Promise 상태에 따라 흐름이 자동으로 분기된다.',
        body: 'pending → Suspense, rejected → Error Boundary, fulfilled → 값 반환.',
        iconKey: 'route',
      },
      {
        number: '03',
        state: 'internals',
        title: 'React 19는 이 구조를 공식 API로 제공한다.',
        body: 'use()는 React의 렌더링 모델을 더 선언적이고 일관되게 만든다.',
        iconKey: 'compass',
      },
    ],
  },
  nextStep: {
    eyebrow: '다음 학습으로 이어집니다',
    title: 'ref as prop은 무엇을 바꿨나?',
    description:
      '다음 페이지에서는 ref 전달 방식이 Element와 props 표현을 어떻게 바꾸는지 살펴봅니다.',
    cta: '다음 페이지로 이동',
    href: '/ref-as-prop-element-shape',
  },
};

const en: UseSuspenseErrorModelContent = {
  hero: {
    badge: 'React 19 Changes · 4/10',
    titleLines: ['What did use() add', 'to the Suspense / Error', 'Boundary flow?'],
    subtitleLines: [
      'React 19 promoted the "read a resource during render" flow',
      'into a first-class API.',
    ],
    heroCode: {
      fileName: 'UserProfile.tsx',
      langBadge: 'TSX',
      code: `import { use } from "react";

export function UserProfile({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  const user = use(userPromise);

  return <div>{user.name}</div>;
}`,
    },
    diagram: {
      title: 'Promise state × what use() returns',
      cards: [
        {
          state: 'pending',
          title: 'pending',
          subtitle: 'in flight',
          result: '→ Suspense',
          iconKey: 'hourglass',
        },
        {
          state: 'fulfilled',
          title: 'fulfilled',
          subtitle: 'resolved',
          result: '→ value returned',
          iconKey: 'check',
        },
        {
          state: 'rejected',
          title: 'rejected',
          subtitle: 'failed',
          result: '→ Error Boundary',
          iconKey: 'triangle-alert',
        },
      ],
    },
  },
  question: {
    number: '02',
    eyebrow: "Today's question",
    questionLines: [
      'Why is use(Promise) not a regular Hook,',
      'and how does it plug straight into',
      'Suspense and Error Boundary?',
    ],
    supportQuestions: [
      { body: 'What does "reading a resource during render" mean?', iconKey: 'play-circle' },
      { body: 'How does it differ from the rules of Hooks?', iconKey: 'split' },
      { body: 'How does it branch by Promise state?', iconKey: 'route' },
      { body: 'How does it tie into Suspense / Error Boundary?', iconKey: 'workflow' },
    ],
  },
  readable: {
    number: '01',
    eyebrow: 'WHAT use() READS',
    title: 'What use() can read',
    description: 'use() reads both Promise and Context through the same call surface.',
    cards: [
      {
        state: 'pending',
        title: 'Promise',
        body: 'Reads the state of an async resource',
        result: '→ Wires into Suspense / Error Boundary',
        iconKey: 'loader',
      },
      {
        state: 'context',
        title: 'Context',
        body: 'Can be read inside conditions and loops too',
        result: "→ Extends React's rules",
        iconKey: 'boxes',
      },
    ],
  },
  comparison: {
    number: '02',
    eyebrow: 'HOOK vs use()',
    title: 'How use() differs from regular Hooks',
    description: 'use() relaxes parts of the rules of Hooks and plugs straight into render flow.',
    columns: {
      topic: 'Topic',
      legacy: 'Regular Hook (useState, etc.)',
      useApi: 'use()',
      note: 'Note',
    },
    rows: [
      {
        topic: 'Call inside conditionals',
        legacy: { value: 'Not allowed', supported: false },
        useResult: { value: 'Allowed', supported: true },
        note: "Doesn't need to follow rules of Hooks",
      },
      {
        topic: 'Call inside loops',
        legacy: { value: 'Not allowed', supported: false },
        useResult: { value: 'Allowed', supported: true },
        note: 'Safe under dynamic conditions',
      },
      {
        topic: 'Read a Promise',
        legacy: { value: 'Not directly', supported: false },
        useResult: { value: 'Yes', supported: true },
        note: 'Supports reading resources during render',
      },
      {
        topic: 'Suspense link',
        legacy: { value: 'Indirect', supported: false },
        useResult: { value: 'Direct', supported: true },
        note: 'Switches to Suspense mid-render',
      },
      {
        topic: 'Error Boundary link',
        legacy: { value: 'Indirect', supported: false },
        useResult: { value: 'Direct', supported: true },
        note: 'Rejected goes straight to Error Boundary',
      },
    ],
  },
  promiseFlow: {
    number: '03',
    eyebrow: 'PROMISE STATES',
    title: 'Promise-state flow (use(Promise))',
    description:
      'The same use(Promise) call branches into three render paths depending on Promise state.',
    centerTitle: 'use(Promise)',
    centerSubtitle: 'Read a resource during render',
    branches: [
      {
        state: 'pending',
        title: 'pending',
        handle: '→ throw SuspenseException',
        result: 'Closest Suspense Boundary fallback',
        resultLines: ['Closest Suspense Boundary', 'switches to fallback UI'],
        iconKey: 'hourglass',
      },
      {
        state: 'fulfilled',
        title: 'fulfilled',
        handle: '→ return value',
        result: 'Normal render continues',
        resultLines: ['Normal render continues', 'use the actual value'],
        iconKey: 'check',
      },
      {
        state: 'rejected',
        title: 'rejected',
        handle: '→ throw Error',
        result: 'Closest Error Boundary',
        resultLines: ['Closest Error Boundary', 'switches to error fallback'],
        iconKey: 'triangle-alert',
      },
    ],
  },
  suspenseConnection: {
    number: '04',
    eyebrow: 'SUSPENSE LINK',
    title: 'use(Promise) and Suspense',
    description:
      'When the Promise is pending, React halts this render and the nearest Suspense takes over with fallback.',
    code: {
      fileName: 'ProfileCard.tsx',
      langBadge: 'TSX',
      code: `function ProfileCard({
  userPromise,
}: {
  userPromise: Promise<User>;
}) {
  const user = use(userPromise);

  return <div className="name">{user.name}</div>;
}`,
    },
    explanation:
      "If the Promise is pending, this component's render is interrupted and the nearest Suspense boundary's fallback runs instead.",
    fallback: { title: 'Fallback UI example', loadingText: 'Loading user...' },
  },
  rejectedFlow: {
    number: '05',
    eyebrow: 'ERROR BOUNDARY LINK',
    title: 'rejected promise and Error Boundary',
    description:
      'On a rejected promise, use() throws an Error and the nearest Error Boundary catches it.',
    steps: [
      {
        state: 'rejected',
        title: 'rejected promise',
        caption: 'Async resource failed',
        iconKey: 'x-circle',
      },
      {
        state: 'rejected',
        title: 'throw error',
        caption: 'Error thrown during render',
        iconKey: 'triangle-alert',
      },
      {
        state: 'internals',
        title: 'Closest Error Boundary',
        caption: 'Catches the error',
        iconKey: 'shield-alert',
      },
      {
        state: 'rejected',
        title: 'Error Fallback UI',
        caption: "Couldn't load user information.",
        iconKey: 'shield-alert',
      },
    ],
    errorFallback: {
      message: "Couldn't load user information.",
      buttonLabel: 'Try again',
    },
  },
  thenableTracking: {
    number: '06',
    eyebrow: 'THENABLE TRACKING',
    title: 'Internal connection via thenable tracking',
    description:
      'use() is not a standalone API — it ties into the trackUsedThenable flow inside ReactFiberThenable.js.',
    steps: [
      {
        state: 'pending',
        title: 'Call use()',
        caption: 'Look up the thenable',
        iconKey: 'play-circle',
      },
      {
        state: 'internals',
        title: 'ReactFiberThenable.js',
        items: ['trackUsedThenable(thenable)', 'suspendedThenable', 'SuspenseException'],
        iconKey: 'atom',
      },
      {
        state: 'render',
        title: 'React render flow',
        caption: 'Detects the exception',
        iconKey: 'workflow',
      },
    ],
    branches: [
      {
        state: 'pending',
        title: 'Found Suspense Boundary',
        caption: 'Render fallback UI',
        iconKey: 'shield-check',
      },
      {
        state: 'rejected',
        title: 'Error Boundary (rejected)',
        caption: 'Switch to error fallback',
        iconKey: 'shield-alert',
      },
    ],
  },
  internalCode: {
    number: '07',
    eyebrow: 'CODE CHECKPOINT',
    title: 'Source preview (ReactFiberThenable.js)',
    description:
      'trackUsedThenable registers the thenable, then suspendedThenable and SuspenseException break the render flow.',
    panels: [
      {
        title: 'trackedThenable list',
        langBadge: 'JS',
        state: 'internals',
        code: `const previous = trackedThenables[index];

if (previous === undefined) {
  trackedThenables.push(thenable);
}`,
      },
      {
        title: 'Set suspendedThenable & throw',
        langBadge: 'JS',
        state: 'pending',
        code: `suspendedThenable = thenable;
throw SuspenseException;`,
      },
    ],
    fileCard: {
      title: 'Related file',
      fileName: 'ReactFiberThenable.js',
      buttonLabel: 'Open on GitHub',
      href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThenable.js',
    },
  },
  stateBoard: {
    number: '08',
    eyebrow: 'STATE BOARD',
    title: 'use() state board',
    description: "Compare how each Promise state shows up in React's UI side by side.",
    buttonLabel: 'Pick a Promise state',
    defaultState: 'pending',
    states: [
      {
        key: 'pending',
        buttonLabel: 'pending',
        panelTitle: 'Suspense Fallback',
        caption: '→ SuspenseException renders the fallback UI',
        loading: { text: 'Loading user...' },
      },
      {
        key: 'fulfilled',
        buttonLabel: 'fulfilled',
        panelTitle: 'Normal content',
        caption: '→ Value is returned, normal render continues',
        profile: { name: 'Dan Abramov', role: 'Software Engineer', badge: 'Pro' },
      },
      {
        key: 'rejected',
        buttonLabel: 'rejected',
        panelTitle: 'Error Boundary',
        caption: '→ Error throw moves control to the Error Boundary',
        error: { message: "Couldn't load the data.", buttonLabel: 'Try again' },
      },
    ],
  },
  mission: {
    number: '09',
    eyebrow: 'FOLLOW ALONG',
    title: 'Follow-along missions',
    description: 'Move from docs → real source → your own one-liner.',
    missions: [
      {
        number: '01',
        title: 'Read the official use() docs',
        helper: 'Note the allowed values and rules',
        iconKey: 'compass',
      },
      {
        number: '02',
        title: 'Split use(Promise) vs use(Context) and list the differences',
        helper: 'Separate their intended uses',
        iconKey: 'split',
      },
      {
        number: '03',
        title: 'Read suspendedThenable flow in ReactFiberThenable.js',
        helper: 'Find where SuspenseException is set',
        iconKey: 'search',
      },
      {
        number: '04',
        title: 'Write why use() plugs into Suspense / Error Boundary directly',
        helper: 'Restate pending / fulfilled / rejected in your own words',
        iconKey: 'route',
      },
    ],
  },
  takeaways: {
    number: '10',
    eyebrow: 'KEY TAKEAWAYS',
    title: 'Key takeaways',
    cards: [
      {
        number: '01',
        state: 'pending',
        title: 'use() is the official "read a resource during render" API.',
        body: 'Promise and Context can be safely read inside conditionals and loops.',
        iconKey: 'layers',
      },
      {
        number: '02',
        state: 'fulfilled',
        title: 'The flow branches automatically by Promise state.',
        body: 'pending → Suspense, rejected → Error Boundary, fulfilled → value.',
        iconKey: 'route',
      },
      {
        number: '03',
        state: 'internals',
        title: 'React 19 makes this structure a first-class API.',
        body: "use() makes React's render model more declarative and consistent.",
        iconKey: 'compass',
      },
    ],
  },
  nextStep: {
    eyebrow: 'The journey continues',
    title: 'What did ref as prop change?',
    description:
      'Next we look at how passing ref differently changes how Element and props are shaped.',
    cta: 'Go to the next page',
    href: '/ref-as-prop-element-shape',
  },
};

export const useSuspenseErrorModelContent: Record<Locale, UseSuspenseErrorModelContent> = {
  ko,
  en,
};
