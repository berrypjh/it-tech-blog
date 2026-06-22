import type { Locale } from '@it-tech-blog/preferences';

export type PerspectiveCard = {
  id: 'docs' | 'code' | 'tests' | 'pr';
  icon: 'doc' | 'code' | 'flask' | 'chat';
  tone: 'blue' | 'teal' | 'violet' | 'amber';
  title: string;
  subtitle: string;
  description: string;
};

export type ReadingPriorityRow = {
  id: 'packages' | 'tests' | 'issues' | 'releases';
  index: string;
  icon: 'folder' | 'flask' | 'chat' | 'tag';
  tone: 'blue' | 'teal' | 'violet' | 'amber';
  title: string;
  description: string;
  href: string;
};

export type RepoTreeNode = {
  name: string;
  kind: 'folder' | 'file';
  children?: RepoTreeNode[];
  active?: boolean;
  open?: boolean;
};

export type DetailPanel = {
  folder: string;
  lead: string;
  supporting: string;
  tags: string[];
  bullets: string[];
  callout: string;
};

export type ChainCard = {
  id: 'docs' | 'code' | 'tests';
  stepNum: string;
  stepLabel: string;
  title: string;
  code: string;
  description: string;
  cta: string;
  href: string;
  tone: 'blue' | 'teal' | 'violet';
};

export type RoutineStep = {
  num: string;
  icon: 'doc' | 'search' | 'cursor' | 'flask' | 'tag';
  tone: 'blue' | 'teal' | 'emerald' | 'cyan' | 'violet';
  title: string;
  description: string;
};

export type WhyOpenSourceContent = {
  hero: {
    stepBadge: string;
    title: string[];
    description: string;
    diagram: {
      centerLabel: string;
      centerSub: string;
      codeMock: string;
      commitBranch: string;
      commits: { sha: string; message: string }[];
      packagesMock: string;
      statusLabel: string;
    };
  };
  perspectives: {
    eyebrow: string;
    title: string;
    cards: PerspectiveCard[];
  };
  readingPriorities: {
    eyebrow: string;
    title: string;
    rows: ReadingPriorityRow[];
  };
  repoExplorer: {
    eyebrow: string;
    title: string;
    repoLabel: string;
    tree: RepoTreeNode[];
    details: Record<string, DetailPanel>;
    defaultFolder: string;
  };
  chain: {
    eyebrow: string;
    title: string;
    cards: ChainCard[];
  };
  routine: {
    eyebrow: string;
    title: string;
    steps: RoutineStep[];
  };
  nextStep: {
    eyebrow: string;
    title: string;
    description: string;
    cta: string;
    href: string;
  };
};

const docsCode = `const [state, setState] = useState(initialState);`;

const fiberHooksCode = `function useState(initialState) {
  const hook = mountState(initialState);
  return [hook.memoizedState, hook.queue.dispatch];
}`;

const hooksTestCode = `it('updates state and re-renders', () => {
  const result = renderHook(() => useState(0));
  act(() => result.current[1](1));
  expect(result.current[0]).toBe(1);
});`;

const repoTreeKo: RepoTreeNode[] = [
  { name: '.github', kind: 'folder' },
  {
    name: 'packages',
    kind: 'folder',
    open: true,
    children: [
      { name: 'react', kind: 'folder' },
      { name: 'react-dom', kind: 'folder' },
      { name: 'react-reconciler', kind: 'folder', active: true },
      { name: 'scheduler', kind: 'folder' },
      { name: 'shared', kind: 'folder' },
    ],
  },
  { name: 'scripts', kind: 'folder' },
  { name: 'tests', kind: 'folder' },
  { name: 'docs', kind: 'folder' },
  { name: 'LICENSE', kind: 'file' },
];

export const whyOpenSourceContent: Record<Locale, WhyOpenSourceContent> = {
  ko: {
    hero: {
      stepBadge: '시작하기 · 4/6단계',
      title: ['공식 문서는 사용법을 알려주고,', 'GitHub는 설계 의도를 보여줍니다.'],
      description: 'React를 깊게 이해하려면 문서, 소스코드, 테스트, 변경 이력을 함께 봐야 합니다.',
      diagram: {
        centerLabel: 'GitHub',
        centerSub: 'facebook/react',
        codeMock: `function render() {
  prepareWork();
  reconcileChildren();
  commitChanges();
}`,
        commitBranch: 'main',
        commits: [
          { sha: 'a1b2c3d', message: 'feat: improve hydration' },
          { sha: 'd4e5f6g', message: 'fix: useful edge case' },
        ],
        packagesMock: `packages/
├─ react/
├─ react-dom/
├─ react-reconciler/
└─ scheduler/`,
        statusLabel: 'checks passed',
      },
    },
    perspectives: {
      eyebrow: '01 · 관점',
      title: 'GitHub가 제공하는 4가지 관점',
      cards: [
        {
          id: 'docs',
          icon: 'doc',
          tone: 'blue',
          title: '공식 문서',
          subtitle: '무엇을 어떻게 쓰는가',
          description: 'API 레퍼런스와 가이드를 통해 사용 방법과 규칙을 이해합니다.',
        },
        {
          id: 'code',
          icon: 'code',
          tone: 'teal',
          title: '소스코드',
          subtitle: '실제로 어떻게 동작하는가',
          description: '구현 코드를 통해 내부 구조와 설계 의도를 파악합니다.',
        },
        {
          id: 'tests',
          icon: 'flask',
          tone: 'violet',
          title: '테스트',
          subtitle: '어떤 동작을 보장하는가',
          description: '테스트 코드를 통해 보장해야 할 동작과 엣지 케이스를 확인합니다.',
        },
        {
          id: 'pr',
          icon: 'chat',
          tone: 'amber',
          title: 'PR / Issue',
          subtitle: '왜 바뀌었는가',
          description: '변경의 배경, 논의 과정, 트레이드오프를 이해합니다.',
        },
      ],
    },
    readingPriorities: {
      eyebrow: '02 · 읽기 목록',
      title: 'React GitHub에서 읽어야 할 4가지',
      rows: [
        {
          id: 'packages',
          index: '1',
          icon: 'folder',
          tone: 'blue',
          href: 'https://github.com/facebook/react/tree/main/packages',
          title: 'packages',
          description:
            'React의 모듈 구조를 이해하는 시작점입니다. 핵심 패키지와 각 패키지의 역할을 파악합니다.',
        },
        {
          id: 'tests',
          index: '2',
          icon: 'flask',
          tone: 'teal',
          href: 'https://github.com/facebook/react/tree/main/packages/react-reconciler/src/__tests__',
          title: 'tests',
          description:
            '구현 의도를 가장 정확히 보여주는 자료입니다. 어떤 동작이 보장되어야 하는지 확인합니다.',
        },
        {
          id: 'issues',
          index: '3',
          icon: 'chat',
          tone: 'violet',
          href: 'https://github.com/facebook/react/issues',
          title: 'issues',
          description:
            '버그, 제안, 질문을 통해 설계 결정의 배경을 이해합니다. 실제 사용자와 문제의 맥락을 함께 볼 수 있습니다.',
        },
        {
          id: 'releases',
          index: '4',
          icon: 'tag',
          tone: 'amber',
          href: 'https://github.com/facebook/react/releases',
          title: 'releases',
          description:
            '버전별 변경 사항과 하이라이트를 통해 큰 흐름을 파악합니다. 새로운 기능이 왜 추가되었는지 이해합니다.',
        },
      ],
    },
    repoExplorer: {
      eyebrow: '03 · 저장소 구조',
      title: '저장소 구조 훑어보기 (예: facebook/react)',
      repoLabel: 'facebook / react',
      tree: repoTreeKo,
      defaultFolder: 'react-reconciler',
      details: {
        react: {
          folder: 'react',
          lead: 'React의 공개 API와 컴포넌트 모델을 정의합니다.',
          supporting: '실제 렌더링은 하지 않으며, 특정 renderer에 의존하지 않습니다.',
          tags: ['Core API', 'createElement', 'Hooks API', 'Component'],
          bullets: [
            'JSX가 만드는 Element 객체 정의',
            'useState 등 Hook의 공개 시그니처',
            'Component, memo, Fragment 등 핵심 API',
            'renderer에 독립적인 순수 코어',
          ],
          callout: '"무엇을 그릴지"의 표현과 API만 정의하고, 실제 그리기는 renderer에 맡깁니다.',
        },
        'react-dom': {
          folder: 'react-dom',
          lead: '브라우저 DOM을 위한 renderer입니다.',
          supporting: 'react-reconciler가 계산한 결과를 실제 DOM에 반영합니다.',
          tags: ['Renderer', 'DOM', 'createRoot', 'Events'],
          bullets: [
            'createRoot / hydrateRoot 진입점',
            '합성 이벤트(Synthetic Event) 시스템',
            'Fiber의 변경 사항을 DOM에 commit',
            '서버 렌더링 결과의 하이드레이션',
          ],
          callout: 'reconciler의 추상적 결과를 브라우저가 이해하는 DOM 조작으로 변환합니다.',
        },
        'react-reconciler': {
          folder: 'react-reconciler',
          lead: 'React 렌더링의 핵심 엔진(Fiber)을 포함합니다.',
          supporting: 'ReactDOM, React Native 등 다양한 renderer가 이 패키지를 사용합니다.',
          tags: ['Fiber', 'Reconciler', 'Renderer', 'Scheduling', 'Priority'],
          bullets: [
            'Fiber 트리 생성 및 관리',
            '업데이트 스케줄링 및 우선순위 처리',
            'Reconciliation 알고리즘 구현',
            '렌더링 단계(Render / Commit) 조율',
          ],
          callout: '대부분의 렌더링 로직과 우선순위, 작업 루프가 이곳에 있습니다.',
        },
        scheduler: {
          folder: 'scheduler',
          lead: '작업의 우선순위와 실행 시점을 관리합니다.',
          supporting: '무거운 업데이트가 메인 스레드를 막지 않도록 작업을 분할합니다.',
          tags: ['Scheduling', 'Priority', 'Time slicing'],
          bullets: [
            '우선순위별 작업 큐 관리',
            '프레임마다 메인 스레드에 양보',
            '긴 작업을 잘게 나눠 실행',
            'reconciler의 동시성 기능 지원',
          ],
          callout: '언제 무엇을 실행할지 결정해 UI 반응성을 유지합니다.',
        },
        shared: {
          folder: 'shared',
          lead: '여러 패키지가 함께 쓰는 상수와 유틸을 모읍니다.',
          supporting: 'react, react-dom, react-reconciler 등이 공통으로 참조합니다.',
          tags: ['Constants', 'Symbols', 'Feature flags'],
          bullets: [
            '$$typeof 등 공용 React 심볼',
            '빌드별 기능 토글(feature flag)',
            '공용 경고 및 개발 도구 유틸',
            '패키지 간 중복 제거',
          ],
          callout: '중복을 피하기 위해 공통 코드를 한 곳에 모아둔 패키지입니다.',
        },
      },
    },
    chain: {
      eyebrow: '04 · 연결 읽기',
      title: 'API → 구현 → 테스트로 이어서 읽기 (예: useState)',
      cards: [
        {
          id: 'docs',
          stepNum: '1',
          stepLabel: '공식 문서',
          title: 'useState',
          code: docsCode,
          description:
            '상태 값을 선언하고 업데이트 함수를 받습니다. 컴포넌트가 다시 렌더링되도록 합니다.',
          cta: '문서에서 보기',
          href: 'https://react.dev/reference/react/useState',
          tone: 'blue',
        },
        {
          id: 'code',
          stepNum: '2',
          stepLabel: '구현 (소스코드)',
          title: 'ReactFiberHooks.js',
          code: fiberHooksCode,
          description: 'Hook 객체를 생성하고, 업데이트 큐와 dispatch 함수를 연결합니다.',
          cta: '코드에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
          tone: 'teal',
        },
        {
          id: 'tests',
          stepNum: '3',
          stepLabel: '테스트',
          title: 'ReactHooks-test.js',
          code: hooksTestCode,
          description: '상태 업데이트 시 재렌더링과 값 변경이 보장됨을 테스트로 확인합니다.',
          cta: '테스트에서 보기',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/__tests__/ReactHooks-test.internal.js',
          tone: 'violet',
        },
      ],
    },
    routine: {
      eyebrow: '05 · 학습 루틴',
      title: 'GitHub 기반 학습 루틴',
      steps: [
        {
          num: '1',
          icon: 'doc',
          tone: 'blue',
          title: '공식 문서 읽기',
          description: 'API와 사용법을 먼저 이해합니다.',
        },
        {
          num: '2',
          icon: 'search',
          tone: 'teal',
          title: '구현 파일 찾기',
          description: '문서의 API가 구현된 위치를 찾습니다.',
        },
        {
          num: '3',
          icon: 'cursor',
          tone: 'emerald',
          title: '진입 함수 보기',
          description: '진입점 함수부터 내부 흐름을 따라갑니다.',
        },
        {
          num: '4',
          icon: 'flask',
          tone: 'cyan',
          title: '테스트 확인',
          description: '테스트를 통해 보장 조건을 확인합니다.',
        },
        {
          num: '5',
          icon: 'tag',
          tone: 'violet',
          title: '릴리즈 / PR로 변경 이유 보기',
          description: '왜 바뀌었는지 맥락을 이해합니다.',
        },
      ],
    },
    nextStep: {
      eyebrow: '다음 학습으로 이어집니다',
      title: '모든 파일을 읽지 않아도 되는 이유',
      description: '효율적으로 핵심을 파악하는 방법과 우선순위를 배웁니다.',
      cta: '다음 페이지로 이동',
      href: '/not-all-files',
    },
  },
  en: {
    hero: {
      stepBadge: 'Getting Started · 4/6',
      title: ['The docs teach how to use,', 'GitHub shows why it was designed that way.'],
      description:
        'To really understand React, read docs, source code, tests, and change history together.',
      diagram: {
        centerLabel: 'GitHub',
        centerSub: 'facebook/react',
        codeMock: `function render() {
  prepareWork();
  reconcileChildren();
  commitChanges();
}`,
        commitBranch: 'main',
        commits: [
          { sha: 'a1b2c3d', message: 'feat: improve hydration' },
          { sha: 'd4e5f6g', message: 'fix: useful edge case' },
        ],
        packagesMock: `packages/
├─ react/
├─ react-dom/
├─ react-reconciler/
└─ scheduler/`,
        statusLabel: 'checks passed',
      },
    },
    perspectives: {
      eyebrow: '01 · PERSPECTIVES',
      title: 'Four perspectives GitHub offers',
      cards: [
        {
          id: 'docs',
          icon: 'doc',
          tone: 'blue',
          title: 'Official docs',
          subtitle: 'What and how to use it',
          description: 'API references and guides explain usage and rules.',
        },
        {
          id: 'code',
          icon: 'code',
          tone: 'teal',
          title: 'Source code',
          subtitle: 'How it really works',
          description: 'Implementation code reveals internal structure and design intent.',
        },
        {
          id: 'tests',
          icon: 'flask',
          tone: 'violet',
          title: 'Tests',
          subtitle: 'What behavior is guaranteed',
          description: 'Test code documents required behavior and edge cases.',
        },
        {
          id: 'pr',
          icon: 'chat',
          tone: 'amber',
          title: 'PRs / Issues',
          subtitle: 'Why it changed',
          description: 'Understand the background, discussion, and tradeoffs behind a change.',
        },
      ],
    },
    readingPriorities: {
      eyebrow: '02 · READING LIST',
      title: 'Four things to read in React GitHub',
      rows: [
        {
          id: 'packages',
          index: '1',
          icon: 'folder',
          tone: 'blue',
          href: 'https://github.com/facebook/react/tree/main/packages',
          title: 'packages',
          description:
            "The starting point for React's module structure. Read what each core package is responsible for.",
        },
        {
          id: 'tests',
          index: '2',
          icon: 'flask',
          tone: 'teal',
          href: 'https://github.com/facebook/react/tree/main/packages/react-reconciler/src/__tests__',
          title: 'tests',
          description: 'The most precise expression of intent. Read what behavior must hold.',
        },
        {
          id: 'issues',
          index: '3',
          icon: 'chat',
          tone: 'violet',
          href: 'https://github.com/facebook/react/issues',
          title: 'issues',
          description:
            'Bugs, proposals, and questions show the reasoning behind design decisions, with real user context.',
        },
        {
          id: 'releases',
          index: '4',
          icon: 'tag',
          tone: 'amber',
          href: 'https://github.com/facebook/react/releases',
          title: 'releases',
          description:
            'Per-version changes and highlights show the overall trajectory and why features were added.',
        },
      ],
    },
    repoExplorer: {
      eyebrow: '03 · REPO',
      title: 'Skim the repository structure (e.g. facebook/react)',
      repoLabel: 'facebook / react',
      tree: repoTreeKo,
      defaultFolder: 'react-reconciler',
      details: {
        react: {
          folder: 'react',
          lead: "Defines React's public API and component model.",
          supporting: 'It does no rendering itself and stays independent of any renderer.',
          tags: ['Core API', 'createElement', 'Hooks API', 'Component'],
          bullets: [
            'Defines the Element object JSX produces',
            'Public signatures of Hooks like useState',
            'Core APIs such as Component, memo, Fragment',
            'A pure core independent of any renderer',
          ],
          callout:
            'It defines what to render and the API; the actual rendering is left to a renderer.',
        },
        'react-dom': {
          folder: 'react-dom',
          lead: 'The renderer for the browser DOM.',
          supporting: 'It applies what react-reconciler computes to the real DOM.',
          tags: ['Renderer', 'DOM', 'createRoot', 'Events'],
          bullets: [
            'createRoot / hydrateRoot entry points',
            'The synthetic event system',
            'Commits fiber changes to the DOM',
            'Hydrates server-rendered output',
          ],
          callout:
            "Turns the reconciler's abstract result into DOM operations the browser understands.",
        },
        'react-reconciler': {
          folder: 'react-reconciler',
          lead: "Holds React's core rendering engine (Fiber).",
          supporting: 'Many renderers — ReactDOM, React Native, etc. — depend on this package.',
          tags: ['Fiber', 'Reconciler', 'Renderer', 'Scheduling', 'Priority'],
          bullets: [
            'Create and manage the fiber tree',
            'Schedule updates and handle priority',
            'Implement the reconciliation algorithm',
            'Coordinate the render and commit phases',
          ],
          callout: 'Most rendering logic, priorities, and the work loop live here.',
        },
        scheduler: {
          folder: 'scheduler',
          lead: 'Manages the priority and timing of work.',
          supporting: "Splits work so heavy updates don't block the main thread.",
          tags: ['Scheduling', 'Priority', 'Time slicing'],
          bullets: [
            'Queues work by priority',
            'Yields to the main thread each frame',
            'Breaks long work into smaller chunks',
            "Backs the reconciler's concurrent features",
          ],
          callout: 'Decides when to run what, keeping the UI responsive.',
        },
        shared: {
          folder: 'shared',
          lead: 'Collects constants and utilities used across packages.',
          supporting: 'Referenced in common by react, react-dom, react-reconciler, and more.',
          tags: ['Constants', 'Symbols', 'Feature flags'],
          bullets: [
            'Common React symbols like $$typeof',
            'Per-build feature flags',
            'Shared warning and dev-tool utilities',
            'Removes duplication across packages',
          ],
          callout: 'Gathers common code in one place to avoid duplication.',
        },
      },
    },
    chain: {
      eyebrow: '04 · CHAIN',
      title: 'Read API → implementation → test in sequence (e.g. useState)',
      cards: [
        {
          id: 'docs',
          stepNum: '1',
          stepLabel: 'Official docs',
          title: 'useState',
          code: docsCode,
          description:
            'Declare state and receive an updater function. Triggers a re-render of the component.',
          cta: 'Read on react.dev',
          href: 'https://react.dev/reference/react/useState',
          tone: 'blue',
        },
        {
          id: 'code',
          stepNum: '2',
          stepLabel: 'Implementation (source)',
          title: 'ReactFiberHooks.js',
          code: fiberHooksCode,
          description:
            'Creates the hook object and wires up the update queue and dispatch function.',
          cta: 'View source',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberHooks.js',
          tone: 'teal',
        },
        {
          id: 'tests',
          stepNum: '3',
          stepLabel: 'Tests',
          title: 'ReactHooks-test.js',
          code: hooksTestCode,
          description:
            'Verify in tests that updates trigger re-renders and the state value changes.',
          cta: 'View the test',
          href: 'https://github.com/facebook/react/blob/main/packages/react-reconciler/src/__tests__/ReactHooks-test.internal.js',
          tone: 'violet',
        },
      ],
    },
    routine: {
      eyebrow: '05 · ROUTINE',
      title: 'A GitHub-based learning routine',
      steps: [
        {
          num: '1',
          icon: 'doc',
          tone: 'blue',
          title: 'Read the docs',
          description: 'Understand the API and usage first.',
        },
        {
          num: '2',
          icon: 'search',
          tone: 'teal',
          title: 'Find the implementation',
          description: 'Locate where the documented API is implemented.',
        },
        {
          num: '3',
          icon: 'cursor',
          tone: 'emerald',
          title: 'Follow the entry function',
          description: 'Start from the entry point and trace internal flow.',
        },
        {
          num: '4',
          icon: 'flask',
          tone: 'cyan',
          title: 'Check the tests',
          description: 'Confirm the guarantees via the test suite.',
        },
        {
          num: '5',
          icon: 'tag',
          tone: 'violet',
          title: 'Read releases / PRs',
          description: 'Understand the context behind why things changed.',
        },
      ],
    },
    nextStep: {
      eyebrow: 'The journey continues',
      title: "Next: Why you don't have to read every file",
      description: 'Learn how to identify the core efficiently and how to prioritize.',
      cta: 'Go to the next page',
      href: '/not-all-files',
    },
  },
};
