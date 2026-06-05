import type { Locale } from '@it-tech-blog/preferences';

import type { ToneKey } from '../../shared/tones';

import type { RoleKey } from './roleTone';

export type { RoleKey, ToneKey };

export type RevealItem = {
  role: 'guarantee' | 'edge' | 'regression';
  title: string;
  body: string;
  exampleQuestion: string;
};

export type DirectoryCard = {
  id: 'reconciler' | 'react' | 'react-dom';
  path: string;
  description: string;
  readingPoint: string;
  keywords: string[];
  spotlight?: boolean;
};

export type TestFileRow = {
  id: 'hooks' | 'deferred' | 'async-actions' | 'scheduler' | 'activity' | 'error-recovery';
  topic: string;
  testFile: string;
  takeaway: string;
};

export type TraceStep = {
  number: string;
  title: string;
  body: string;
};

export type TestExplorerOption = {
  id: 'activity' | 'async-actions' | 'scheduler';
  file: string;
  checks: string[];
  related: string[];
  readingPoint: string;
};

export type ProblemCard = {
  number: string;
  title: string;
  body: string;
};

export type SummaryCard = {
  number: string;
  text: string;
  sub: string;
  tone: ToneKey;
};

export type TestAsDocContent = {
  hero: {
    badge: string;
    titleLines: [string, string, string];
    accentLine: string;
    description: string;
    supporting: string;
    primaryCta: string;
    secondaryCta: string;
    visualTitle: string;
    leftPanelTitle: string;
    leftFiles: string[];
    leftCaption: string;
    connectorLabel: string;
    connectorSub: string;
    rightPanelTitle: string;
    /** "테스트명 → 보장하려는 동작" 같은 map rows */
    rightMap: { from: string; to: string }[];
    rightCaption: string;
  };
  todayQuestion: {
    eyebrow: string;
    label: string;
    questionLines: string[];
    /** "테스트를 함께 읽으면" 강조 */
    emphasize: string;
    badges: { label: string; role?: RoleKey }[];
  };
  whyImplementation: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: ProblemCard[];
    bannerLines: [string, string];
  };
  whatTestsReveal: {
    eyebrow: string;
    title: string;
    intro: string;
    questionLabel: string;
    items: RevealItem[];
  };
  testDirectoryMap: {
    eyebrow: string;
    title: string;
    intro: string;
    descriptionLabel: string;
    readingPointLabel: string;
    keywordsLabel: string;
    cards: DirectoryCard[];
  };
  recommendedFiles: {
    eyebrow: string;
    title: string;
    intro: string;
    topicLabel: string;
    fileLabel: string;
    takeawayLabel: string;
    rows: TestFileRow[];
  };
  trace: {
    eyebrow: string;
    title: string;
    intro: string;
    steps: TraceStep[];
  };
  explorer: {
    eyebrow: string;
    title: string;
    intro: string;
    listLabel: string;
    options: TestExplorerOption[];
    labels: {
      file: string;
      checks: string;
      related: string;
      readingPoint: string;
    };
  };
  mission: {
    eyebrow: string;
    title: string;
    intro: string;
    items: string[];
  };
  summary: {
    eyebrow: string;
    title: string;
    cards: SummaryCard[];
  };
  nextCta: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

export const testAsDocContent: Record<Locale, TestAsDocContent> = {
  ko: {
    hero: {
      badge: '읽기 체크리스트 · 7/10단계',
      titleLines: ['테스트 코드는', '구현 의도를 설명하는', '실행 가능한 문서다'],
      accentLine: '실행 가능한 문서다',
      description: '테스트를 읽으면 무엇을 보장하려는 구현인지 훨씬 빨리 이해할 수 있습니다.',
      supporting:
        '구현 코드는 "어떻게 처리하는가"를 보여줍니다. 하지만 테스트 코드는 "무엇을 반드시 보장해야 하는가"를 보여줍니다. React 같은 대형 오픈소스에서는 구현 파일만 읽는 것보다 테스트를 함께 읽을 때 edge case와 설계 의도가 더 빨리 보입니다.',
      primaryCta: '테스트 디렉터리 보기',
      secondaryCta: '테스트 탐색해보기',
      visualTitle: '구현 코드만 보던 시야를 테스트로 확장합니다',
      leftPanelTitle: '구현 코드만 읽기',
      leftFiles: ['ReactFiberBeginWork.js', 'ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
      leftCaption: '구현 흐름은 보이지만 왜 이 동작을 보장해야 하는지는 흐려질 수 있습니다.',
      connectorLabel: 'Test',
      connectorSub: '의도 확인',
      rightPanelTitle: '테스트와 함께 읽기',
      rightMap: [
        { from: '테스트명', to: '보장하려는 동작' },
        { from: 'edge case', to: '예외 처리 이유' },
        { from: '회귀 테스트', to: '과거에 깨졌던 조건' },
        { from: '관련 API', to: '구현 파일 역추적' },
      ],
      rightCaption: '테스트를 함께 보면 구현이 지키려는 약속이 보입니다.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: '오늘 해결할 질문',
      questionLines: ['React 구현 파일만 읽는 것보다', '{emphasize} 무엇이 더 빨라질까?'],
      emphasize: '테스트를 함께 읽으면',
      badges: [
        { label: 'Test', role: 'test' },
        { label: 'Intent', role: 'intent' },
        { label: 'Regression', role: 'regression' },
        { label: 'Edge Case', role: 'edge' },
      ],
    },
    whyImplementation: {
      eyebrow: 'why implementation alone',
      title: '왜 구현 코드만 읽으면 부족한가?',
      intro:
        '구현 코드는 실제 처리 흐름을 보여주지만, 어떤 동작을 보장하기 위해 그런 흐름이 필요한지는 테스트를 함께 봐야 더 빨리 이해됩니다.',
      cards: [
        {
          number: '01',
          title: '어떤 케이스가 중요한지 알기 어렵다',
          body: '구현 코드에는 많은 분기가 있지만, 그중 어떤 사용자 동작이나 edge case 때문에 필요한 분기인지 바로 보이지 않을 수 있습니다.',
        },
        {
          number: '02',
          title: '예외 상황이 왜 필요한지 감이 안 온다',
          body: '테스트는 "이 상황에서 반드시 이렇게 동작해야 한다"는 조건을 보여줍니다. 예외 처리가 단순 방어 코드인지, 중요한 보장 조건인지 구분하는 데 도움을 줍니다.',
        },
        {
          number: '03',
          title: '현재 구현이 어떤 회귀를 막는지 알기 어렵다',
          body: '테스트는 과거에 깨졌거나 깨질 수 있는 동작을 다시 보호합니다. 그래서 구현의 현재 모양이 왜 유지되는지 이해하는 단서가 됩니다.',
        },
      ],
      bannerLines: ['구현은 동작을 보여주고,', '테스트는 의도를 보여준다.'],
    },
    whatTestsReveal: {
      eyebrow: 'what tests reveal',
      title: '테스트가 알려주는 3가지',
      intro:
        '테스트를 읽으면 구현 파일에서 바로 보이지 않던 보장 조건과 설계 의도를 더 빠르게 파악할 수 있습니다.',
      questionLabel: '예시 질문',
      items: [
        {
          role: 'guarantee',
          title: '어떤 동작을 보장해야 하는가?',
          body: '테스트명과 expect 문은 React가 특정 상황에서 어떤 결과를 보장해야 하는지 보여줍니다.',
          exampleQuestion: '이 API는 어떤 입력에서 어떤 결과를 반드시 내야 하는가?',
        },
        {
          role: 'edge',
          title: '어떤 예외 상황이 중요한가?',
          body: 'edge case 테스트는 구현 코드의 복잡한 분기가 왜 필요한지 알려줍니다.',
          exampleQuestion: '왜 이 상황을 별도로 처리해야 하는가?',
        },
        {
          role: 'regression',
          title: '무엇을 회귀 방지하려 하는가?',
          body: '회귀 테스트는 이전에 깨졌던 동작이나 다시 깨지면 안 되는 조건을 문서화합니다.',
          exampleQuestion: '이 테스트가 없으면 어떤 문제가 다시 생길 수 있는가?',
        },
      ],
    },
    testDirectoryMap: {
      eyebrow: 'react test directory map',
      title: 'React 저장소의 테스트 디렉터리',
      intro:
        'React 저장소에서는 패키지별로 테스트가 흩어져 있습니다. 먼저 어느 패키지의 동작을 보고 있는지 확인한 뒤 테스트 디렉터리를 찾습니다.',
      descriptionLabel: '설명',
      readingPointLabel: '읽기 포인트',
      keywordsLabel: '관련 키워드',
      cards: [
        {
          id: 'reconciler',
          path: 'react-reconciler/src/__tests__',
          description:
            'Fiber, Hooks, Scheduler, Suspense, Error Recovery 등 내부 렌더링 흐름과 관련된 테스트가 많이 모여 있습니다.',
          readingPoint: 'React 내부 동작을 깊게 읽을 때 가장 자주 확인하게 되는 테스트 위치입니다.',
          keywords: ['Fiber', 'Hooks', 'Scheduler', 'Suspense', 'Error Recovery'],
          spotlight: true,
        },
        {
          id: 'react',
          path: 'react/src/__tests__',
          description: 'React public API와 기본 동작에 가까운 테스트를 확인할 수 있습니다.',
          readingPoint: 'API entry와 public behavior를 확인할 때 유용합니다.',
          keywords: ['public API', 'React.createElement', 'useState'],
        },
        {
          id: 'react-dom',
          path: 'react-dom/src/__tests__',
          description:
            'DOM renderer, hydration, form action, browser event, host behavior와 관련된 테스트를 확인할 수 있습니다.',
          readingPoint: '브라우저 환경에서 실제 DOM과 연결되는 동작을 확인할 때 유용합니다.',
          keywords: ['DOM', 'hydration', 'form action', 'event'],
        },
      ],
    },
    recommendedFiles: {
      eyebrow: 'recommended test files',
      title: '개념별 추천 테스트 파일',
      intro:
        '무작정 테스트 폴더 전체를 열기보다, 관심 있는 개념에 맞는 테스트 파일부터 찾는 것이 좋습니다.',
      topicLabel: '주제',
      fileLabel: '테스트 파일',
      takeawayLabel: '얻을 수 있는 것',
      rows: [
        {
          id: 'hooks',
          topic: 'Hooks',
          testFile: 'ReactHooks-test.internal.js',
          takeaway: 'Hook 호출, state update, effect 관련 보장 조건을 확인할 수 있습니다.',
        },
        {
          id: 'deferred',
          topic: 'Deferred / Transition',
          testFile: 'ReactDeferredValue-test.js',
          takeaway:
            'deferred value와 transition 계열 동작이 어떤 사용자 경험을 보장하는지 확인할 수 있습니다.',
        },
        {
          id: 'async-actions',
          topic: 'Async Actions',
          testFile: 'ReactAsyncActions-test.js',
          takeaway:
            '비동기 action, pending 상태, update 흐름이 어떻게 보장되는지 확인할 수 있습니다.',
        },
        {
          id: 'scheduler',
          topic: 'Scheduler',
          testFile: 'ReactSchedulerIntegration-test.js',
          takeaway: '스케줄링과 렌더링 작업이 어떤 순서와 조건으로 실행되는지 확인할 수 있습니다.',
        },
        {
          id: 'activity',
          topic: 'Activity',
          testFile: 'Activity-test.js',
          takeaway:
            'hidden subtree, 상태 보존, effect 처리와 관련된 보장 조건을 확인할 수 있습니다.',
        },
        {
          id: 'error-recovery',
          topic: 'Error Recovery',
          testFile: 'ReactConcurrentErrorRecovery-test.js',
          takeaway: '동시 렌더링 중 오류 복구와 fallback 처리 흐름을 확인할 수 있습니다.',
        },
      ],
    },
    trace: {
      eyebrow: 'test → implementation trace',
      title: '테스트에서 구현으로 역추적하는 흐름',
      intro: '테스트를 먼저 읽으면 구현 파일을 열었을 때 어떤 조건을 찾고 있는지 분명해집니다.',
      steps: [
        {
          number: '1',
          title: '테스트 파일에서 현상을 찾는다',
          body: '테스트명과 describe 블록을 읽고, 어떤 동작을 검증하는지 먼저 파악합니다.',
        },
        {
          number: '2',
          title: '어떤 함수나 API가 등장하는지 본다',
          body: '테스트 안에서 호출되는 API, 컴포넌트 구조, 사용자 동작을 확인합니다.',
        },
        {
          number: '3',
          title: '관련 구현 파일로 이동한다',
          body: '테스트가 다루는 API나 내부 동작과 연결되는 구현 파일을 찾습니다.',
        },
        {
          number: '4',
          title: '왜 그런 예외 처리가 필요한지 확인한다',
          body: '구현 코드의 분기와 테스트의 보장 조건을 연결해 읽습니다.',
        },
      ],
    },
    explorer: {
      eyebrow: 'test explorer',
      title: '테스트 탐색 인터랙션',
      intro:
        '관심 있는 테스트 파일을 고르면 무엇을 확인할 수 있고 어떤 구현과 연결되는지 살펴봅니다.',
      listLabel: '테스트 파일 선택',
      labels: {
        file: '선택한 파일',
        checks: '무엇을 확인?',
        related: '관련 구현',
        readingPoint: '읽기 포인트',
      },
      options: [
        {
          id: 'activity',
          file: 'Activity-test.js',
          checks: ['hidden subtree의 동작', '상태 보존', 'Effects 처리'],
          related: ['ReactFiberBeginWork.js', 'ReactFiberCommitWork.js'],
          readingPoint:
            'Activity는 단순 표시/숨김이 아니라 subtree의 상태와 effect 처리 방식까지 함께 봐야 합니다.',
        },
        {
          id: 'async-actions',
          file: 'ReactAsyncActions-test.js',
          checks: ['비동기 action', 'pending 상태', 'transition과 update 연결'],
          related: ['ReactFiberHooks.js', 'ReactFiberAsyncAction.js', 'ReactFiberWorkLoop.js'],
          readingPoint:
            'Async Actions는 API 사용법보다 pending 상태와 update scheduling 흐름을 함께 추적해야 합니다.',
        },
        {
          id: 'scheduler',
          file: 'ReactSchedulerIntegration-test.js',
          checks: ['작업 순서', '우선순위', 'Scheduler와 렌더링 통합'],
          related: ['ReactFiberRootScheduler.js', 'ReactFiberWorkLoop.js', 'scheduler'],
          readingPoint:
            'Scheduler 테스트는 "어떤 작업이 먼저 실행되는가"를 이해하는 데 유용합니다.',
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: '직접 따라가기 미션',
      intro: '이 페이지를 읽고 끝내지 말고, 읽고 싶은 주제를 테스트에서 구현으로 역추적해봅니다.',
      items: [
        '읽고 싶은 주제 하나를 고른다.',
        '관련 테스트 파일을 먼저 찾는다.',
        '테스트명만 읽고 어떤 동작을 보장하는지 추론한다.',
        '이후 구현 파일을 열어 연결해 본다.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: '핵심 정리',
      cards: [
        {
          number: '01',
          text: '테스트는 구현 의도를 가장 직접적으로 드러낸다.',
          sub: '테스트명과 expect 문이 곧 보장하려는 동작이다.',
          tone: 'violet',
        },
        {
          number: '02',
          text: '테스트를 먼저 읽으면 예외 케이스가 빨리 보인다.',
          sub: '구현 분기의 이유는 edge case 테스트가 알려준다.',
          tone: 'amber',
        },
        {
          number: '03',
          text: '대형 오픈소스 독해에서 테스트는 선택이 아니라 핵심 도구다.',
          sub: '구현 코드와 테스트 코드는 한 쌍으로 읽어야 한다.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: '다음 단계',
      title: 'Feature Flag, 타입, 주석부터 읽기',
      description:
        '테스트로 의도를 확인했다. 이제 본문 코드를 더 빨리 읽기 위해 주석, 타입, feature flag를 먼저 보자.',
      cta: '다음 페이지로 이동',
      href: '/strip-flag-comment-noise',
    },
  },
  en: {
    hero: {
      badge: 'Reading Checklist · 7/10',
      titleLines: ['Test code is', 'executable documentation', "of the implementation's intent"],
      accentLine: "of the implementation's intent",
      description:
        'Reading tests reveals what an implementation is trying to guarantee — much faster than reading the impl alone.',
      supporting:
        "Implementation code shows 'how it processes things.' But test code shows 'what must be guaranteed.' In a large open-source codebase like React, reading the tests alongside the implementation reveals edge cases and design intent far faster.",
      primaryCta: 'See the test directories',
      secondaryCta: 'Try exploring tests',
      visualTitle: 'Expand from "implementation only" to "implementation + tests"',
      leftPanelTitle: 'Reading implementation only',
      leftFiles: ['ReactFiberBeginWork.js', 'ReactFiberHooks.js', 'ReactFiberWorkLoop.js'],
      leftCaption: 'You see the flow, but why this behavior must be guaranteed can blur.',
      connectorLabel: 'Test',
      connectorSub: 'Confirm intent',
      rightPanelTitle: 'Reading with tests',
      rightMap: [
        { from: 'Test name', to: 'Guaranteed behavior' },
        { from: 'Edge case', to: 'Why an exception path exists' },
        { from: 'Regression test', to: 'A condition that used to break' },
        { from: 'Related API', to: 'Trace back to the impl file' },
      ],
      rightCaption: 'Reading tests reveals the promises the implementation keeps.',
    },
    todayQuestion: {
      eyebrow: "today's question",
      label: "Today's question",
      questionLines: [
        'What gets faster when you',
        '{emphasize}',
        'instead of reading only the implementation?',
      ],
      emphasize: 'read tests alongside it',
      badges: [
        { label: 'Test', role: 'test' },
        { label: 'Intent', role: 'intent' },
        { label: 'Regression', role: 'regression' },
        { label: 'Edge Case', role: 'edge' },
      ],
    },
    whyImplementation: {
      eyebrow: 'why implementation alone',
      title: 'Why is reading the implementation alone not enough?',
      intro:
        'Implementation code shows how the flow runs, but tests reveal what behavior the flow is meant to guarantee — much faster.',
      cards: [
        {
          number: '01',
          title: 'It is hard to tell which cases matter',
          body: 'Implementation has many branches, but which user behaviors or edge cases each branch addresses is not always obvious.',
        },
        {
          number: '02',
          title: 'You cannot feel why an exception is needed',
          body: "Tests show 'in this situation, this must happen.' That helps separate defensive boilerplate from real guarantees.",
        },
        {
          number: '03',
          title: 'You cannot see which regressions the current shape prevents',
          body: 'Tests re-protect behaviors that broke or could break. They explain why the implementation looks the way it does.',
        },
      ],
      bannerLines: ['Implementation shows behavior;', 'tests show intent.'],
    },
    whatTestsReveal: {
      eyebrow: 'what tests reveal',
      title: 'Three things tests reveal',
      intro:
        'Reading tests surfaces the guarantees and design intent that are not immediately visible in the implementation file.',
      questionLabel: 'Example question',
      items: [
        {
          role: 'guarantee',
          title: 'What behavior must be guaranteed?',
          body: 'The test name and expect statements show the result React must produce in a specific situation.',
          exampleQuestion: 'What output must this API produce for what input?',
        },
        {
          role: 'edge',
          title: 'Which exceptions matter?',
          body: 'Edge-case tests explain why complex branches in the implementation exist.',
          exampleQuestion: 'Why does this case need its own path?',
        },
        {
          role: 'regression',
          title: 'What regression is being prevented?',
          body: 'Regression tests document behaviors that broke before — or must never break.',
          exampleQuestion: 'What could break again if this test were removed?',
        },
      ],
    },
    testDirectoryMap: {
      eyebrow: 'react test directory map',
      title: "The React repo's test directories",
      intro:
        'In the React repo, tests are scattered across packages. First identify which package owns the behavior; then go to its tests.',
      descriptionLabel: 'Description',
      readingPointLabel: 'Reading point',
      keywordsLabel: 'Related keywords',
      cards: [
        {
          id: 'reconciler',
          path: 'react-reconciler/src/__tests__',
          description:
            'Holds many of the tests for internal rendering — Fiber, Hooks, Scheduler, Suspense, Error Recovery.',
          readingPoint: 'The test location you visit most when reading React internals deeply.',
          keywords: ['Fiber', 'Hooks', 'Scheduler', 'Suspense', 'Error Recovery'],
          spotlight: true,
        },
        {
          id: 'react',
          path: 'react/src/__tests__',
          description: 'Tests close to the public API and base behavior of React.',
          readingPoint: 'Useful when checking API entries and public behavior.',
          keywords: ['public API', 'React.createElement', 'useState'],
        },
        {
          id: 'react-dom',
          path: 'react-dom/src/__tests__',
          description:
            'Tests for the DOM renderer, hydration, form actions, browser events, and host behavior.',
          readingPoint:
            'Useful when checking what actually connects React to the real DOM in the browser.',
          keywords: ['DOM', 'hydration', 'form action', 'event'],
        },
      ],
    },
    recommendedFiles: {
      eyebrow: 'recommended test files',
      title: 'Recommended test files by concept',
      intro:
        'Rather than opening the whole test folder, start with a test file matching the concept you care about.',
      topicLabel: 'Topic',
      fileLabel: 'Test file',
      takeawayLabel: 'What you get',
      rows: [
        {
          id: 'hooks',
          topic: 'Hooks',
          testFile: 'ReactHooks-test.internal.js',
          takeaway: 'Guarantees around Hook calls, state updates, and effects.',
        },
        {
          id: 'deferred',
          topic: 'Deferred / Transition',
          testFile: 'ReactDeferredValue-test.js',
          takeaway: 'User-experience guarantees of deferred values and transitions.',
        },
        {
          id: 'async-actions',
          topic: 'Async Actions',
          testFile: 'ReactAsyncActions-test.js',
          takeaway: 'How async actions, pending state, and update flow are guaranteed.',
        },
        {
          id: 'scheduler',
          topic: 'Scheduler',
          testFile: 'ReactSchedulerIntegration-test.js',
          takeaway: 'In what order and under what conditions scheduling and rendering run.',
        },
        {
          id: 'activity',
          topic: 'Activity',
          testFile: 'Activity-test.js',
          takeaway: 'Guarantees around hidden subtrees, state preservation, and effect handling.',
        },
        {
          id: 'error-recovery',
          topic: 'Error Recovery',
          testFile: 'ReactConcurrentErrorRecovery-test.js',
          takeaway: 'Error recovery and fallback flow during concurrent rendering.',
        },
      ],
    },
    trace: {
      eyebrow: 'test → implementation trace',
      title: 'Tracing back from a test to the implementation',
      intro:
        'Reading the test first makes it clear what condition you are looking for when you open the implementation file.',
      steps: [
        {
          number: '1',
          title: 'Find the phenomenon in the test file',
          body: 'Read test names and describe blocks first; figure out which behavior is being verified.',
        },
        {
          number: '2',
          title: 'See which functions or APIs appear',
          body: 'Note the APIs called, component shapes, and user actions inside the test.',
        },
        {
          number: '3',
          title: 'Move to the related implementation file',
          body: 'Find the implementation files connected to the API or internal behavior the test exercises.',
        },
        {
          number: '4',
          title: 'Confirm why the exception path exists',
          body: 'Connect the branches in the implementation to the guarantees in the test as you read.',
        },
      ],
    },
    explorer: {
      eyebrow: 'test explorer',
      title: 'Test explorer interaction',
      intro:
        'Pick a test file and see what it confirms and which implementation files it connects to.',
      listLabel: 'Pick a test file',
      labels: {
        file: 'Selected file',
        checks: 'What it confirms',
        related: 'Related implementation',
        readingPoint: 'Reading point',
      },
      options: [
        {
          id: 'activity',
          file: 'Activity-test.js',
          checks: ['hidden subtree behavior', 'state preservation', 'effect handling'],
          related: ['ReactFiberBeginWork.js', 'ReactFiberCommitWork.js'],
          readingPoint:
            'Activity is not just show/hide — read it together with subtree state and effect handling.',
        },
        {
          id: 'async-actions',
          file: 'ReactAsyncActions-test.js',
          checks: ['async actions', 'pending state', 'transition + update wiring'],
          related: ['ReactFiberHooks.js', 'ReactFiberAsyncAction.js', 'ReactFiberWorkLoop.js'],
          readingPoint:
            'Async Actions: trace pending state and update scheduling together — not just API usage.',
        },
        {
          id: 'scheduler',
          file: 'ReactSchedulerIntegration-test.js',
          checks: ['task order', 'priority', 'scheduler ↔ render integration'],
          related: ['ReactFiberRootScheduler.js', 'ReactFiberWorkLoop.js', 'scheduler'],
          readingPoint: "Scheduler tests are great for understanding 'which task runs first.'",
        },
      ],
    },
    mission: {
      eyebrow: 'follow along',
      title: 'Follow-along mission',
      intro:
        'Do not stop at reading — trace back from a test to the implementation for one topic you care about.',
      items: [
        'Pick one topic you want to read.',
        'Find the related test file first.',
        'Read only the test names and infer what behavior they guarantee.',
        'Then open the implementation file and connect them.',
      ],
    },
    summary: {
      eyebrow: 'key takeaways',
      title: 'Key takeaways',
      cards: [
        {
          number: '01',
          text: "Tests reveal the implementation's intent most directly.",
          sub: 'Test names and expect statements are the behavior being guaranteed.',
          tone: 'violet',
        },
        {
          number: '02',
          text: 'Reading tests first surfaces edge cases faster.',
          sub: 'The reason for an implementation branch usually lives in an edge-case test.',
          tone: 'amber',
        },
        {
          number: '03',
          text: 'In large open-source reading, tests are not optional — they are the core tool.',
          sub: 'Implementation and tests are read as a pair.',
          tone: 'emerald',
        },
      ],
    },
    nextCta: {
      eyebrow: 'Next step',
      title: 'Read feature flags, types, and comments first',
      description:
        'You confirmed intent through tests. Now speed up reading the body by checking comments, types, and feature flags first.',
      cta: 'Go to the next page',
      href: '/strip-flag-comment-noise',
    },
  },
};
