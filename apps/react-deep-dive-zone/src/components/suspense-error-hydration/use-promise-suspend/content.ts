import type { Locale } from '@it-tech-blog/preferences';

import type { PromiseState } from './tone';

export type StateCard = {
  state: PromiseState;
  label: string;
  sublabel: string;
  description: string;
  decisionLabel: string;
  decisionText: string;
};

export type DiagramRow = {
  state: PromiseState;
  label: string;
  description: string;
  steps: string[];
  previewKind: 'fulfilled' | 'pending' | 'rejected';
  previewLabel?: string;
};

export type ExplainCard = {
  state: PromiseState;
  number: string;
  title: string;
  description: string;
  preview: 'fulfilled' | 'pending' | 'rejected';
  fulfilledCode?: string;
  pendingLabel?: string;
  rejectedTitle?: string;
  rejectedBody?: string;
};

export type ConceptCard = { icon: 'pause' | 'lightning' | 'refresh' | 'shield'; label: string };

export type ChecklistItem = { title: string; description: string };

export type TakeawayCard = {
  number: string;
  title: string;
  body: string;
  accent: PromiseState | 'mixed';
};

export type SelectorResult = {
  state: PromiseState;
  title: string;
  description: string;
  preview: 'fulfilled' | 'pending' | 'rejected';
  pendingLabel?: string;
  fulfilledCode?: string;
  rejectedTitle?: string;
  rejectedBody?: string;
};

export type UsePromiseSuspendContent = {
  hero: {
    badges: { label: string; tone: 'solid' | 'soft' }[];
    titleLines: [string, string];
    description: string;
    code: {
      label: string;
      pill: string;
      fileLabel: string;
      content: string;
    };
    flowCard: {
      title: string;
      rootLabel: string;
      states: {
        state: PromiseState;
        label: string;
        result: string;
      }[];
    };
  };
  question: {
    number: string;
    title: string;
    question: string;
    concepts: ConceptCard[];
  };
  promiseStates: {
    number: string;
    title: string;
    cards: StateCard[];
  };
  diagram: {
    number: string;
    title: string;
    rootTitle: string;
    rootSubtitle: string;
    rows: DiagramRow[];
  };
  explains: {
    fulfilledLabel: string;
    cards: ExplainCard[];
  };
  thenable: {
    number: string;
    title: string;
    leftTitle: string;
    leftIntro: string;
    leftBullets: string[];
    centerTitle: string;
    indexes: string[];
    hookCalls: string[];
    tracked: string[];
    rightTitle: string;
    rightBody: string;
  };
  code: {
    number: string;
    title: string;
    fileLabel: string;
    code: string;
    explanationTitle: string;
    bullets: { name: string; description: string }[];
    button: { label: string; href: string };
  };
  switcher: {
    number: string;
    title: string;
    subtitle: string;
    selectorLabel: string;
    resultLabel: string;
    timelineTitle: string;
    options: {
      state: PromiseState;
      label: string;
      sublabel: string;
    }[];
    results: Record<PromiseState, SelectorResult>;
    timeline: {
      primary: { label: string; state?: PromiseState }[];
      alternativeLabel: string;
      alternative: { label: string; state?: PromiseState }[];
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

const HERO_CODE = `function Message({ messagePromise }) {
  const message = use(messagePromise);

  return <p>{message}</p>;
}`;

const THENABLE_CODE = `export function trackUsedThenable(thenableState, thenable, index) {
  const trackedThenables = getThenablesFromState(thenableState);

  const previous = trackedThenables[index];

  if (previous === undefined) {
    trackedThenables.push(thenable);
  }
}`;

const THENABLE_URL =
  'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberThenable.js';

const ko: UsePromiseSuspendContent = {
  hero: {
    badges: [
      { label: 'React 심화 학습', tone: 'solid' },
      { label: 'Suspense & use(Promise) 입문', tone: 'soft' },
    ],
    titleLines: ['use(Promise)는', '렌더링을 어떻게 멈출까?'],
    description:
      'Promise가 아직 준비되지 않았다면 React는 값을 기다리는 대신 Suspense 경로로 렌더링을 넘깁니다.',
    code: {
      label: '사용자 코드 예시',
      pill: 'JSX',
      fileLabel: 'Message.tsx',
      content: HERO_CODE,
    },
    flowCard: {
      title: 'Promise 상태에 따른 세 갈래 흐름',
      rootLabel: 'use(messagePromise)',
      states: [
        { state: 'pending', label: 'pending', result: 'Suspense 경로' },
        { state: 'fulfilled', label: 'fulfilled', result: '값 렌더' },
        { state: 'rejected', label: 'rejected', result: 'Error Boundary 경로' },
      ],
    },
  },
  question: {
    number: '1',
    title: '오늘 해결할 질문',
    question:
      'use(messagePromise)를 호출했는데 Promise가 pending 상태라면 React는 실제로 무엇을 할까?',
    concepts: [
      { icon: 'pause', label: '렌더링이 중단되는 순간' },
      { icon: 'lightning', label: '어디로 제어가 이동할까?' },
      { icon: 'refresh', label: '다시 이어지는 조건은?' },
      { icon: 'shield', label: '에러는 어떻게 다를까?' },
    ],
  },
  promiseStates: {
    number: '2',
    title: 'Promise 상태 3가지',
    cards: [
      {
        state: 'pending',
        label: 'pending',
        sublabel: '대기 중',
        description: '아직 값이 준비되지 않음',
        decisionLabel: 'React 렌더링 결정',
        decisionText: 'Suspense fallback으로 전환',
      },
      {
        state: 'fulfilled',
        label: 'fulfilled',
        sublabel: '성공',
        description: '값이 준비됨',
        decisionLabel: 'React 렌더링 결정',
        decisionText: '실제 값으로 렌더 계속',
      },
      {
        state: 'rejected',
        label: 'rejected',
        sublabel: '실패',
        description: '값 생성 중 오류 발생',
        decisionLabel: 'React 렌더링 결정',
        decisionText: 'Error Boundary로 이동',
      },
    ],
  },
  diagram: {
    number: '3',
    title: '상태별 내부 흐름 다이어그램',
    rootTitle: 'use(Promise)',
    rootSubtitle: 'React 19',
    rows: [
      {
        state: 'pending',
        label: 'pending',
        description: '값이 아직 없음',
        steps: ['렌더 중단 (suspend)', '가장 가까운 <Suspense> fallback'],
        previewKind: 'pending',
      },
      {
        state: 'fulfilled',
        label: 'fulfilled',
        description: '값이 준비됨',
        steps: ['resolved value 반환', 'JSX 렌더 계속 진행'],
        previewKind: 'fulfilled',
      },
      {
        state: 'rejected',
        label: 'rejected',
        description: '값 생성 실패',
        steps: ['에러 다시 throw', '<ErrorBoundary> fallback'],
        previewKind: 'rejected',
      },
    ],
  },
  explains: {
    fulfilledLabel: '렌더 결과 예시',
    cards: [
      {
        state: 'fulfilled',
        number: '4',
        title: 'fulfilled일 때',
        description:
          'Promise가 해결되면 resolved value를 반환합니다. 이후 JSX 렌더링이 계속 진행됩니다.',
        preview: 'fulfilled',
        fulfilledCode: '<p>안녕하세요, React!</p>',
      },
      {
        state: 'pending',
        number: '5',
        title: 'pending일 때',
        description:
          '값을 반환하지 않고 렌더를 중단합니다. 가장 가까운 Suspense fallback이 표시됩니다.',
        preview: 'pending',
        pendingLabel: '로딩 중...',
      },
      {
        state: 'rejected',
        number: '6',
        title: 'rejected일 때',
        description:
          'Promise가 거부되면 에러가 다시 throw됩니다. 에러는 Error Boundary로 전달됩니다.',
        preview: 'rejected',
        rejectedTitle: '오류가 발생했습니다',
        rejectedBody: '잠시 후 다시 시도해주세요.',
      },
    ],
  },
  thenable: {
    number: '7',
    title: 'ReactFiberThenable.js는 무엇을 추적하나?',
    leftTitle: '렌더 순서 기반 추적',
    leftIntro: 'React는 렌더 순서(인덱스) 기준으로 thenable(Promise)을 추적합니다.',
    leftBullets: [
      '같은 렌더 내에서 동일한 인덱스의 Promise를 안정적으로 관리',
      '중복 구독 방지',
      '상태 변화를 정확히 재개하기 위함',
    ],
    centerTitle: '렌더 순서 기반 추적 예시',
    indexes: ['0', '1', '2', '3', '4'],
    hookCalls: ['user()', 'use(p1)', 'use(p2)', 'use(p3)', 'use(p4)'],
    tracked: ['-', 'p1', 'p2', 'p3', 'p4'],
    rightTitle: '핵심 포인트',
    rightBody:
      'thenable은 값이 아니라 "대기 가능한 작업"입니다. React는 그 작업의 상태를 추적해, 언제 멈추고 언제 다시 이어야 할지 결정합니다.',
  },
  code: {
    number: '8',
    title: '실제 코드 미리보기 (ReactFiberThenable.js)',
    fileLabel: 'ReactFiberThenable.js',
    code: THENABLE_CODE,
    explanationTitle: '설명',
    bullets: [
      { name: 'thenableState', description: '현재 렌더에서 사용 중인 thenable 상태' },
      { name: 'thenable', description: 'use()에 전달된 Promise 또는 thenable' },
      { name: 'index', description: '렌더 순서상 이 use() 호출의 위치' },
      {
        name: '같은 위치에서 같은 Promise를 재사용',
        description: '재사용해야 안정성이 보장됩니다.',
      },
    ],
    button: { label: 'GitHub에서 코드 보기', href: THENABLE_URL },
  },
  switcher: {
    number: '9',
    title: 'Promise 상태 변환기',
    subtitle: '상태를 선택해 결과를 확인해보세요',
    selectorLabel: '상태 선택',
    resultLabel: '결과',
    timelineTitle: '상태 변화 타임라인',
    options: [
      { state: 'pending', label: 'pending', sublabel: '대기 중' },
      { state: 'fulfilled', label: 'fulfilled', sublabel: '성공' },
      { state: 'rejected', label: 'rejected', sublabel: '실패' },
    ],
    results: {
      pending: {
        state: 'pending',
        title: 'pending → Suspense fallback',
        description:
          '값이 아직 준비되지 않았기 때문에 렌더가 중단되고, Suspense fallback UI가 보입니다.',
        preview: 'pending',
        pendingLabel: '로딩 중...',
      },
      fulfilled: {
        state: 'fulfilled',
        title: 'fulfilled → 실제 값 렌더',
        description:
          'Promise가 resolved value를 가지므로, React는 값을 반환하고 JSX 렌더를 계속합니다.',
        preview: 'fulfilled',
        fulfilledCode: '<p>메시지 내용</p>',
      },
      rejected: {
        state: 'rejected',
        title: 'rejected → Error Boundary',
        description:
          'Promise가 실패했기 때문에, React는 error를 다시 throw하고 Error Boundary 경로로 보냅니다.',
        preview: 'rejected',
        rejectedTitle: '오류가 발생했습니다',
      },
    },
    timeline: {
      primary: [
        { label: '요청 시작' },
        { label: 'pending', state: 'pending' },
        { label: 'fulfilled', state: 'fulfilled' },
        { label: 'resolved 렌더 재개' },
      ],
      alternativeLabel: '또는',
      alternative: [
        { label: 'rejected', state: 'rejected' },
        { label: '에러 결과 Error Boundary' },
      ],
    },
  },
  followAlong: {
    number: '10',
    title: '직접 코드에서 따라가 보기',
    items: [
      {
        title: 'React use 공식 문서 확인',
        description: 'use의 API가 Promise를 어떻게 처리하는지 읽어보세요.',
      },
      {
        title: 'ReactFiberThenable.js 열기',
        description: 'thenable 추적 로직을 이해해 봅니다.',
      },
      {
        title: 'trackUsedThenable 찾기',
        description: '렌더 순서 기반 추적 방식을 확인합니다.',
      },
      {
        title: 'Promise가 pending일 때',
        description: '정상 값 반환 경로로 가지 않는 점을 정리합니다.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: '핵심 정리',
    cards: [
      {
        number: '1',
        title: 'use(Promise)는 pending 상태에서 Suspense 경로를 만든다.',
        body: '값 대신 "대기"를 모델링하고, 가장 가까운 Suspense fallback으로 이동한다.',
        accent: 'pending',
      },
      {
        number: '2',
        title: 'fulfilled는 정상 렌더, rejected는 error 경로로 간다.',
        body: '성공 시 resolved value, 실패 시 에러를 다시 throw하여 Error Boundary로 전달된다.',
        accent: 'mixed',
      },
      {
        number: '3',
        title: 'React는 thenable을 렌더 순서 기준으로 추적한다.',
        body: '같은 위치의 Promise를 안정적으로 관리해 중복 구독을 막고, 재개 지점을 정확히 찾는다.',
        accent: 'pending',
      },
    ],
  },
  cta: {
    text: '다음: throwException은 Promise와 Error를 어떻게 구분할까?',
    href: '/promise-vs-error-split',
  },
};

const en: UsePromiseSuspendContent = {
  hero: {
    badges: [
      { label: 'React Deep Dive', tone: 'solid' },
      { label: 'Suspense & use(Promise) intro', tone: 'soft' },
    ],
    titleLines: ['How does use(Promise)', 'pause rendering?'],
    description:
      'When a Promise is not ready yet, React does not wait for it — it hands the render over to the Suspense path.',
    code: {
      label: 'User code example',
      pill: 'JSX',
      fileLabel: 'Message.tsx',
      content: HERO_CODE,
    },
    flowCard: {
      title: 'Three branches by Promise state',
      rootLabel: 'use(messagePromise)',
      states: [
        { state: 'pending', label: 'pending', result: 'Suspense path' },
        { state: 'fulfilled', label: 'fulfilled', result: 'Render value' },
        { state: 'rejected', label: 'rejected', result: 'Error Boundary path' },
      ],
    },
  },
  question: {
    number: '1',
    title: "Today's question",
    question:
      'You call use(messagePromise), but the Promise is pending — what does React actually do?',
    concepts: [
      { icon: 'pause', label: 'When the render is paused' },
      { icon: 'lightning', label: 'Where control flows next' },
      { icon: 'refresh', label: 'When it resumes' },
      { icon: 'shield', label: 'How errors differ' },
    ],
  },
  promiseStates: {
    number: '2',
    title: 'Three Promise states',
    cards: [
      {
        state: 'pending',
        label: 'pending',
        sublabel: 'waiting',
        description: 'The value is not ready yet',
        decisionLabel: "React's render decision",
        decisionText: 'Switch to Suspense fallback',
      },
      {
        state: 'fulfilled',
        label: 'fulfilled',
        sublabel: 'success',
        description: 'The value is ready',
        decisionLabel: "React's render decision",
        decisionText: 'Continue rendering with the value',
      },
      {
        state: 'rejected',
        label: 'rejected',
        sublabel: 'failure',
        description: 'An error happened while resolving',
        decisionLabel: "React's render decision",
        decisionText: 'Hand off to the Error Boundary',
      },
    ],
  },
  diagram: {
    number: '3',
    title: 'Internal flow diagram per state',
    rootTitle: 'use(Promise)',
    rootSubtitle: 'React 19',
    rows: [
      {
        state: 'pending',
        label: 'pending',
        description: 'No value yet',
        steps: ['Suspend the render', 'Nearest <Suspense> fallback'],
        previewKind: 'pending',
      },
      {
        state: 'fulfilled',
        label: 'fulfilled',
        description: 'Value is ready',
        steps: ['Return the resolved value', 'Continue rendering JSX'],
        previewKind: 'fulfilled',
      },
      {
        state: 'rejected',
        label: 'rejected',
        description: 'Resolving failed',
        steps: ['Re-throw the error', '<ErrorBoundary> fallback'],
        previewKind: 'rejected',
      },
    ],
  },
  explains: {
    fulfilledLabel: 'Render result example',
    cards: [
      {
        state: 'fulfilled',
        number: '4',
        title: 'When fulfilled',
        description:
          'When the Promise resolves, the resolved value is returned and JSX rendering continues.',
        preview: 'fulfilled',
        fulfilledCode: '<p>Hello, React!</p>',
      },
      {
        state: 'pending',
        number: '5',
        title: 'When pending',
        description:
          'No value is returned — the render is suspended, and the nearest Suspense fallback is shown.',
        preview: 'pending',
        pendingLabel: 'Loading...',
      },
      {
        state: 'rejected',
        number: '6',
        title: 'When rejected',
        description:
          'When the Promise is rejected the error is re-thrown and forwarded to the Error Boundary.',
        preview: 'rejected',
        rejectedTitle: 'Something went wrong',
        rejectedBody: 'Please try again in a moment.',
      },
    ],
  },
  thenable: {
    number: '7',
    title: 'What does ReactFiberThenable.js track?',
    leftTitle: 'Render-order based tracking',
    leftIntro: 'React tracks each thenable (Promise) by its render-order index.',
    leftBullets: [
      'Same index in the same render is reused stably',
      'Prevents duplicate subscriptions',
      'Lets state transitions resume at the right place',
    ],
    centerTitle: 'Render-order tracking example',
    indexes: ['0', '1', '2', '3', '4'],
    hookCalls: ['user()', 'use(p1)', 'use(p2)', 'use(p3)', 'use(p4)'],
    tracked: ['-', 'p1', 'p2', 'p3', 'p4'],
    rightTitle: 'Key point',
    rightBody:
      'A thenable is not a value but a "waitable task". React tracks the state of that task to decide when to pause and when to resume.',
  },
  code: {
    number: '8',
    title: 'Source preview (ReactFiberThenable.js)',
    fileLabel: 'ReactFiberThenable.js',
    code: THENABLE_CODE,
    explanationTitle: 'Explanation',
    bullets: [
      { name: 'thenableState', description: 'Thenable state used in the current render' },
      { name: 'thenable', description: 'Promise or thenable passed into use()' },
      { name: 'index', description: 'Position of this use() call in render order' },
      {
        name: 'Reuse the same Promise at the same position',
        description: 'so stability is guaranteed.',
      },
    ],
    button: { label: 'View source on GitHub', href: THENABLE_URL },
  },
  switcher: {
    number: '9',
    title: 'Promise state switcher',
    subtitle: 'Pick a state to see the result',
    selectorLabel: 'Pick a state',
    resultLabel: 'Result',
    timelineTitle: 'State transition timeline',
    options: [
      { state: 'pending', label: 'pending', sublabel: 'waiting' },
      { state: 'fulfilled', label: 'fulfilled', sublabel: 'success' },
      { state: 'rejected', label: 'rejected', sublabel: 'failure' },
    ],
    results: {
      pending: {
        state: 'pending',
        title: 'pending → Suspense fallback',
        description:
          'Because the value is not ready yet, the render is suspended and the Suspense fallback UI is shown.',
        preview: 'pending',
        pendingLabel: 'Loading...',
      },
      fulfilled: {
        state: 'fulfilled',
        title: 'fulfilled → render the value',
        description:
          'Because the Promise has a resolved value, React returns it and keeps rendering JSX.',
        preview: 'fulfilled',
        fulfilledCode: '<p>Message content</p>',
      },
      rejected: {
        state: 'rejected',
        title: 'rejected → Error Boundary',
        description:
          'Because the Promise failed, React re-throws the error and forwards it down the Error Boundary path.',
        preview: 'rejected',
        rejectedTitle: 'Something went wrong',
      },
    },
    timeline: {
      primary: [
        { label: 'Start request' },
        { label: 'pending', state: 'pending' },
        { label: 'fulfilled', state: 'fulfilled' },
        { label: 'Resume rendering with resolved value' },
      ],
      alternativeLabel: 'or',
      alternative: [
        { label: 'rejected', state: 'rejected' },
        { label: 'Error result → Error Boundary' },
      ],
    },
  },
  followAlong: {
    number: '10',
    title: 'Walk it in the source',
    items: [
      {
        title: 'Read the use() docs',
        description: 'Read how the use API handles Promises.',
      },
      {
        title: 'Open ReactFiberThenable.js',
        description: 'Understand the thenable tracking logic.',
      },
      {
        title: 'Find trackUsedThenable',
        description: 'Confirm the render-order based tracking.',
      },
      {
        title: 'When Promise is pending',
        description: 'Note that it does not go through the normal return path.',
      },
    ],
  },
  takeaways: {
    number: '11',
    title: 'Key recap',
    cards: [
      {
        number: '1',
        title: 'use(Promise) sets up the Suspense path when pending.',
        body: 'It models a "wait" instead of a value and moves to the nearest Suspense fallback.',
        accent: 'pending',
      },
      {
        number: '2',
        title: 'fulfilled is normal render, rejected is the error path.',
        body: 'On success the resolved value flows through; on failure the error is re-thrown to the Error Boundary.',
        accent: 'mixed',
      },
      {
        number: '3',
        title: 'React tracks thenables by render order.',
        body: 'It stably manages the same Promise at the same position to avoid duplicate subscriptions and resume at the right point.',
        accent: 'pending',
      },
    ],
  },
  cta: {
    text: 'Next: How does throwException tell Promise from Error?',
    href: '/promise-vs-error-split',
  },
};

export const usePromiseSuspendContent: Record<Locale, UsePromiseSuspendContent> = { ko, en };
